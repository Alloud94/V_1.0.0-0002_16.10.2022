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

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<GenerateProjektComponent>,
              private notificationService: NotificationService,
              private generateService: GenerateService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.loadValue();
  }

// ### Variablen ###
  //Kopfdaten
  kundenNummer = "";
  kundenName = "";
  kundenOrt = "";
  kundenPartner = "";
  raStrasse = "";
  raOrt = "";
  raLand = "";
  notizen = "";
  
  //Zahlungsbedingungen
  zbGroup = [
    {zbGruppe: '', value: 0},
    {zbGruppe: '', value: 0},
    {zbGruppe: '', value: 0},
    {zbGruppe: '', value: 0},
    {zbGruppe: '', value: 0},
    {zbGruppe: '', value: 0},
    {zbGruppe: '', value: 0}
  ]

  //Zahlungsarten
  zaGroup = [
    {zaGruppe : '', value: 0},
    {zaGruppe : '', value: 0},
    {zaGruppe : '', value: 0}
  ]


// ### Lade bestehende Informationen ###
  loadValue(){
    this.getService.getZahlungsArten().subscribe(res => {
      this.zahlungsart = res;
    });

    this.getService.getZahlungsKonditionen().subscribe(res => {
      this.zahlungskondition = res;
    });
  
  }


// ### Funktionen ###
  generate(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }



// ### Popup Dialoge ###

  openKundendaten() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(KundendatenComponent, dialogConfig);
  }

  openRechnungsadresse() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);
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
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(AnsprechpartnerComponent, dialogConfig);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
