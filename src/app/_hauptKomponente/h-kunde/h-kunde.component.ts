import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';
import { LoeschenComponent } from 'src/app/_popupKomponente/loeschen/loeschen.component';
import { NotizenComponent } from 'src/app/_popupKomponente/notizen/notizen.component';
import { RechnungsadresseComponent } from 'src/app/_popupKomponente/rechnungsadresse/rechnungsadresse.component';
import { ZahlungskonditionenComponent } from 'src/app/_popupKomponente/zahlungskonditionen/zahlungskonditionen.component';
import { AnsprechpartnerComponent } from 'src/app/_popupKomponente/ansprechpartner/ansprechpartner.component';




@Component({
  selector: 'app-h-kunde',
  templateUrl: './h-kunde.component.html',
  styleUrls: ['./h-kunde.component.sass']
})
export class HKundeComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  ngOnInit(): void {
  }

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService) { }


// ### Variablen ###

  //Kundenangaben
  kundeNummer = "KU 40-001";
  kundenName = "Thomas Brändle";
  kundenAdresse = "Friedaustrasse 3";
  kundenOrt = "9608 Ganterschwil";
  kundenTelefon = "+41 79 520 65 11";
  kundenEmail = "design@thomas-braendle.com";
  kundenWebsite = "www.thomas-braendle.com";
  notizen = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  //Kundengruppen
  kgGroup = [
    {kgGruppe: 'Privatperson', value: 0},
    {kgGruppe: 'Geschäftspartner', value: 0},
    {kgGruppe: 'Verein', value: 0},
    {kgGruppe: 'Anderes', value: 0}
  ]
  
  //Vorgänge
  angebote = [
    {vorgangsNummer: 'AN 10-001', status: 'Offen'},
    {vorgangsNummer: 'AN 10-001', status: 'Offen'},
    {vorgangsNummer: 'AN 10-001', status: 'Offen'},
    {vorgangsNummer: 'AN 10-001', status: 'Offen'},
  ]

  auftraege = [
    {vorgangsNummer: 'AB 20-001', status: 'Offen'},
    {vorgangsNummer: 'AB 20-001', status: 'Offen'},
    {vorgangsNummer: 'AB 20-001', status: 'Offen'},
    {vorgangsNummer: 'AB 20-001', status: 'Offen'},
    {vorgangsNummer: 'AB 20-001', status: 'Offen'},
  ]
  
  rechnungen = [
    {vorgangsNummer: 'RE 60-001', status: 'Offen'},
    {vorgangsNummer: 'RE 60-001', status: 'Offen'},
    {vorgangsNummer: 'RE 60-001', status: 'Offen'},
    {vorgangsNummer: 'RE 60-001', status: 'Offen'},
    {vorgangsNummer: 'RE 60-001', status: 'Offen'},
    {vorgangsNummer: 'RE 60-001', status: 'Offen'},
  ]

// ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }
  

// ### Popup Dialoge ###

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }
  openLoeschen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(LoeschenComponent, dialogConfig);
  }
  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }
  openZahlungskonditionen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(ZahlungskonditionenComponent, dialogConfig);
  }
  openRechnungsadresse() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);
  }
  openAnsprechpartner() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(AnsprechpartnerComponent, dialogConfig);
  }
}
