import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';
import { KonditionenComponent } from 'src/app/_popupKomponente/konditionen/konditionen.component';
import { BelegeComponent } from 'src/app/_popupKomponente/belege/belege.component';
import { LoeschenComponent } from 'src/app/_popupKomponente/loeschen/loeschen.component';
import { NotizenComponent } from 'src/app/_popupKomponente/notizen/notizen.component';
import { KundendatenComponent } from 'src/app/_popupKomponente/kundendaten/kundendaten.component';
import { RechnungsadresseComponent } from 'src/app/_popupKomponente/rechnungsadresse/rechnungsadresse.component';
import { AnsprechpartnerComponent } from 'src/app/_popupKomponente/ansprechpartner/ansprechpartner.component';
import { ZahlungskonditionenComponent } from 'src/app/_popupKomponente/zahlungskonditionen/zahlungskonditionen.component';
import { UmwandelnComponent } from 'src/app/_popupKomponente/umwandeln/umwandeln.component';
import { PositionComponent } from 'src/app/_popupKomponente/position/position.component';
import { TextpositionComponent } from 'src/app/_popupKomponente/textposition/textposition.component';

@Component({
  selector: 'app-f-angebot',
  templateUrl: './f-angebot.component.html',
  styleUrls: ['./f-angebot.component.sass']
})
export class FAngebotComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';
  
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

  openKundendaten() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(KundendatenComponent, dialogConfig);
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
