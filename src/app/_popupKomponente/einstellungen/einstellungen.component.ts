import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NotizenComponent } from '../notizen/notizen.component';
import { GruppenComponent } from 'src/app/_popupKomponente/gruppen/gruppen.component';


@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.component.html',
  styleUrls: ['./einstellungen.component.sass']
})
export class EinstellungenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<EinstellungenComponent>) { }

  openGruppen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GruppenComponent, dialogConfig);
  }

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
