import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';

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

  // Variablen für das Projekt
  kundenID?:number;
  notizen?:Notizen[];


  isLoading = true;

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<GenerateProjektComponent>,
              private notificationService: NotificationService,
              private generateService: GenerateService,
              private getService: GetService) { }

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
    this.notificationService.notificationInfoShort("Not Implementet yet.");
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

    this.getService.getRechnungsadresse(id).subscribe(res => {
      this.rechnungsAdresse = res;
      this.isLoading = false;
    });
  }

  loadPartner(id:number){
    this.isLoading = true;

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
  
      modalDialog.afterClosed().subscribe(
        id => this.loadValueAll(id)
      );  
  }

  openRechnungsadresse() {
    if(this.kundenID){
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id = "modaltwo-component";
      dialogConfig.height = "510px";
      dialogConfig.width = "894px";

      const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);
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

      modalDialog.afterClosed().subscribe(
        id => this.loadPartner(id)
      );  

    }else if(!this.kundenID){
      this.notificationService.notificationFail("Kunde nicht ausgewählt!");
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

}
