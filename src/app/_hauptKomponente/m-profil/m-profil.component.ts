import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';

@Component({
  selector: 'app-m-profil',
  templateUrl: './m-profil.component.html',
  styleUrls: ['./m-profil.component.sass']
})
export class MProfilComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
