import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';

// Components
import { KundendatenComponent } from '../kundendaten/kundendaten.component';
import { RechnungsadresseComponent } from '../rechnungsadresse/rechnungsadresse.component';
import { NotizenComponent } from '../notizen/notizen.component';
import { AnsprechpartnerComponent } from '../ansprechpartner/ansprechpartner.component';

// Interfaces
import { Gruppen } from 'src/app/_interfaces/gruppen';
import { Kunde } from 'src/app/_interfaces/kunde';
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { Notizen } from 'src/app/_interfaces/notizen';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GenerateService } from 'src/app/_service/generate-service/generate.service';
import { GetService } from 'src/app/_service/get/get.service';
import { Projekt } from 'src/app/_interfaces/projekt';


@Component({
  selector: 'app-generate-projekt',
  templateUrl: './generate-projekt.component.html',
  styleUrls: ['./generate-projekt.component.sass']
})
export class GenerateProjektComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  zahlungsart?:Gruppen[];
  zahlungskondition?:Gruppen[];
  kunde?:Kunde[];
  rechnungsAdresse?:RechnungsAdresse[];
  ansprechpartner?:Ansprechpartner[];
  partner?:Ansprechpartner[];
  belegart = [
    {bezeichnung: 'Angebot'}, 
    {bezeichnung: 'Auftrag'}];

  // Variablen für das Projekt
  kundenID?:number;
  adressenID?:number;
  partnerID?:number;
  zahlungsartID?:number;
  zahlungskonditionID?:number;
  art?:string;
  notizen?:Notizen[];

  isLoading = true;

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<GenerateProjektComponent>,
              private notificationService: NotificationService,
              private generateService: GenerateService,
              private getService: GetService,
              private route: Router) { }

  public projectForm: FormGroup = new FormGroup({
    'zahlungsartID': new FormControl(1),
    'zahlungsKonditionenID': new FormControl(1),
    'belegart': new FormControl('Angebot'),
    'notizen': new FormControl(null)
  });
              
          

  ngOnInit(): void {
    this.loadValue();
  }

  
// ### Lade bestehende Informationen ###
  loadValue(){
    this.getService.getZahlungsArten().subscribe(res => {
      this.zahlungsart = res;
    });

    this.getService.getZahlungsKonditionen().subscribe(res => {
      this.zahlungskondition = res;
      this.isLoading = false;
    });
  }
  

// ### Funktionen ###
  generate(){
    if(this.kundenID != null || this.partnerID != null || this.adressenID != null){

      if(this.projectForm.controls['belegart'].value == 'Angebot'){
        this.notificationService.notificationSuccess("Angebot erfolgreich erstellt");
        
        let projekt: Projekt[] = [{
          id:0,
          vorgangsID:0,
          vorgangsArt: "Angebot",
          kundenID: Number(this.partnerID),
          rechnungsadressenID: Number(this.adressenID),
          ansprechpartnerID: Number(this.partnerID),
          zahlungsArtenID: this.projectForm.controls['zahlungsartID'].value,
          zahlungsKonditionenID: this.projectForm.controls['zahlungsKonditionenID'].value,
          datumErfasst: Date(),
          userIDErfasst: 0,
          datumZuletztGespeichert: Date(),
          userIDZuletztGespeichert: 0,
          status: "offen",
          notizen: this.projectForm.controls['notizen'].value
        }];
    

        this.generateService.createAngebot(projekt[0]).subscribe(res =>{
          let id = res.result;
            this.route.navigate(['/projekte/angebot', id]);
            this.dialogRef.close();
          })

      }else if (this.projectForm.controls['belegart'].value == 'Auftrag'){
        this.notificationService.notificationSuccess("Auftrag erfolgreich erstellt");



        this.dialogRef.close();

      }else{
        this.notificationService.notificationFail("Fehler");
      }
      console.log(this.kundenID + '-' + this.partnerID + '-' + this.adressenID);
      console.log(this.projectForm);
    }else{
      this.notificationService.notificationFail("Bitte alle Angaben machen!");
    }
  }

  loadValueAll(id:number){
    this.loadKunde(id);
    this.loadAdresse(id);
    this.loadPartner(id);
  }

  loadKunde(id:number){
    this.isLoading = true;
    this.kundenID = id; 

    this.getService.getKunde(id).subscribe(res => {
      this.kunde = res;
      this.isLoading = false;
    });

  }

  loadAdresse(id:number){
    this.isLoading = true;
    this.adressenID = id;

    this.getService.getRechnungsadresse(id).subscribe(res => {
      this.rechnungsAdresse = res;
      this.isLoading = false;
    });
  }

  loadPartner(id:number){
    this.isLoading = true;
    this.partnerID = id;

    this.getService.getPartner(id).subscribe(res => {
      this.partner = res;
      this.isLoading = false;
    });

  }


// ### Popup Dialoge ###

  openKundendaten() {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id = "modaltwo-component";
      dialogConfig.height = "510px";
      dialogConfig.width = "894px";
  
      const modalDialog = this.matDialog.open(KundendatenComponent, dialogConfig);
  
      modalDialog.afterClosed().subscribe(id => {
        if(id!=null){
          this.loadValueAll(id);
          this.kundenID = id;
        }
      });  
  }

  openRechnungsadresse() {
    if(this.kundenID){
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id = "modaltwo-component";
      dialogConfig.height = "510px";
      dialogConfig.width = "894px";
      dialogConfig.data = this.kundenID;

      const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);

      modalDialog.afterClosed().subscribe( id => {
        if(id!=null){
          this.loadAdresse(id);
          this.adressenID = id;
        }
      });  


    }else if(!this.kundenID){
      this.notificationService.notificationFail("Kunde nicht ausgewählt!");
    }

  }

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }

  openAnsprechpartner() {
    if(this.kundenID){
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id = "modaltwo-component";
      dialogConfig.height = "510px";
      dialogConfig.width = "894px";
      dialogConfig.data = this.kundenID;

      const modalDialog = this.matDialog.open(AnsprechpartnerComponent, dialogConfig);

      modalDialog.afterClosed().subscribe( id =>{
        if(id!=null){
          this.loadPartner(id);
          this.partnerID = id;
        }
      });  

    }else if(!this.kundenID){
      this.notificationService.notificationFail("Kunde nicht ausgewählt!");
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

}
