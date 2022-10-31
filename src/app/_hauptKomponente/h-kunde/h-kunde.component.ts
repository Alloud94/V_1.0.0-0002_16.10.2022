import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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


  ngOnInit(): void {
  }

}
