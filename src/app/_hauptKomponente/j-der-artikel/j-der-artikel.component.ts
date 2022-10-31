import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoeschenComponent } from 'src/app/_popupKomponente/loeschen/loeschen.component';
import { NotizenComponent } from 'src/app/_popupKomponente/notizen/notizen.component';
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';

@Component({
  selector: 'app-j-der-artikel',
  templateUrl: './j-der-artikel.component.html',
  styleUrls: ['./j-der-artikel.component.sass']
})
export class JDerArtikelComponent implements OnInit {
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


  ngOnInit(): void {
  }

}
