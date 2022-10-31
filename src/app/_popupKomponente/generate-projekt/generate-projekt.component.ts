import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { KundendatenComponent } from '../kundendaten/kundendaten.component';
import { RechnungsadresseComponent } from '../rechnungsadresse/rechnungsadresse.component';
import { NotizenComponent } from '../notizen/notizen.component';

import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-generate-projekt',
  templateUrl: './generate-projekt.component.html',
  styleUrls: ['./generate-projekt.component.sass']
})
export class GenerateProjektComponent implements OnInit {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<GenerateProjektComponent>) { }

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



  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
