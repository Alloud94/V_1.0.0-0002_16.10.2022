import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { PositionArtikelComponent } from '../position-artikel/position-artikel.component';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass']
})
export class PositionComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<PositionComponent>, 
              public matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###

  //Stammdaten Artikel Infos
  stammBezeichnung = "Landingpage";
  stammEinheit = "Pauschal";
  stammVp = "150.00";

  //Einheiten
  einheiten = [
    {einheit: 'Pauschal'},
    {einheit: 'Stück'},
  ]


// ### Funktionen ###

  addArticle(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  addDivArticle(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  addDiscount(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }



  // ### Poup Dialoge ###

  openPositionArtikel() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(PositionArtikelComponent, dialogConfig);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
