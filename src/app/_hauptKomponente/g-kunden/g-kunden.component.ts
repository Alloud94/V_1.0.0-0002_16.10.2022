import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { GenerateKundeComponent } from 'src/app/_popupKomponente/generate-kunde/generate-kunde.component';

@Component({
  selector: 'app-g-kunden',
  templateUrl: './g-kunden.component.html',
  styleUrls: ['./g-kunden.component.sass']
})
export class GKundenComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';

  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService) { }


  //Tabelle
  kunden = [
    {vorgangsNummer: "KU 40-001", kunde: "Thomas Brändle", ortschaft: "9608 Ganterschwil", adresse: "Friedaustrasse 3"},
    {vorgangsNummer: "KU 40-001", kunde: "Thomas Brändle", ortschaft: "9608 Ganterschwil", adresse: "Friedaustrasse 3"},

  ]

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  openGenerateKunde() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateKundeComponent, dialogConfig);
  }


  ngOnInit(): void {
  }

}
