import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NotizenComponent } from '../notizen/notizen.component';


@Component({
  selector: 'app-generate-kunde',
  templateUrl: './generate-kunde.component.html',
  styleUrls: ['./generate-kunde.component.sass']
})
export class GenerateKundeComponent implements OnInit {

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<GenerateKundeComponent>) { }
  close:string = 'assets/img/icon/close.png';

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
