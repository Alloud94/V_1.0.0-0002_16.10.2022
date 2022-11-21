import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';
import { KonditionenComponent } from 'src/app/_popupKomponente/konditionen/konditionen.component';
import { BelegeComponent } from 'src/app/_popupKomponente/belege/belege.component';
import { LoeschenComponent } from 'src/app/_popupKomponente/loeschen/loeschen.component';
import { NotizenComponent } from 'src/app/_popupKomponente/notizen/notizen.component';
import { RechnungsadresseComponent } from 'src/app/_popupKomponente/rechnungsadresse/rechnungsadresse.component';
import { UmwandelnComponent } from 'src/app/_popupKomponente/umwandeln/umwandeln.component';
import { PositionComponent } from 'src/app/_popupKomponente/position/position.component';
import { TextpositionComponent } from 'src/app/_popupKomponente/textposition/textposition.component';
import { ProjektKundendatenComponent } from 'src/app/_popupKomponente/projekt-kundendaten/projekt-kundendaten.component';
import { KalkulationComponent } from 'src/app/_popupKomponente/kalkulation/kalkulation.component';

@Component({
  selector: 'app-f-angebot',
  templateUrl: './f-angebot.component.html',
  styleUrls: ['./f-angebot.component.sass']
})
export class FAngebotComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  //Kopfdaten
  vorgangsNummer = "AN 10-001";
  kundenNummer = "KU 40-001";
  kundenBezeichnung = "Thomas Brändle";
  kundenAnschrift = "Friedaustrasse 3";
  kundenOrt = "9608 Ganterschwil";
  kundenPartner = "Herr Thomas Brändle";
  notizen = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  
  //Status
  status =  [
    {status: 'Offen'},
    {status: 'In Bearbeitung'},
    {status: 'Abgeschlossen'}
  ]

  //Positionen
  positionen = [
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
  ]

  totalVorSteuer = "150.00";
  steuer = "0.00";
  totalNachSteuer = "150.00";

  
  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog) { }

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }

  openKalkulation() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(KalkulationComponent, dialogConfig);
  }

  openKonditionen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(KonditionenComponent, dialogConfig);
  }

  openBelege() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(BelegeComponent, dialogConfig);
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

  openProjektKundendaten() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(ProjektKundendatenComponent, dialogConfig);
  }

  openRechnungsadresse() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);
  }

  openUmwandeln() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(UmwandelnComponent, dialogConfig);
  }

  openTextposition() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(TextpositionComponent, dialogConfig);
  }

  openPosition() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(PositionComponent, dialogConfig);
  }



  ngOnInit(): void {
  }

}
