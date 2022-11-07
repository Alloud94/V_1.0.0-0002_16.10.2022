import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { GruppenComponent } from 'src/app/_popupKomponente/gruppen/gruppen.component';

@Component({
  selector: 'app-l-einstellungen',
  templateUrl: './l-einstellungen.component.html',
  styleUrls: ['./l-einstellungen.component.sass']
})
export class LEinstellungenComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  openGruppen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GruppenComponent, dialogConfig);
  }


  ngOnInit(): void {
  }

}
