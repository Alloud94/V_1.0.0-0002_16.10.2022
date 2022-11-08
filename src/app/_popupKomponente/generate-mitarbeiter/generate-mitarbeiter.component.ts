import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NotizenComponent } from '../notizen/notizen.component';


@Component({
  selector: 'app-generate-mitarbeiter',
  templateUrl: './generate-mitarbeiter.component.html',
  styleUrls: ['./generate-mitarbeiter.component.sass']
})
export class GenerateMitarbeiterComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<GenerateMitarbeiterComponent>) { }

  ngOnInit(): void {
  }

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
