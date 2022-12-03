import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { GenerateArtikelComponent } from 'src/app/_popupKomponente/generate-artikel/generate-artikel.component';

@Component({
  selector: 'app-i-artikel',
  templateUrl: './i-artikel.component.html',
  styleUrls: ['./i-artikel.component.sass']
})
export class IArtikelComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';

  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  //Tabelle
  artikel = [
    {vorgangsNummer: "AR 60-001", bezeichnung: "Landingpage", gruppe: "60 - Webentwicklung", ep: "150.00.-", einheit: "Pauschal"},
    {vorgangsNummer: "AR 60-001", bezeichnung: "Landingpage", gruppe: "60 - Webentwicklung", ep: "150.00.-", einheit: "Pauschal"},
  ]


  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  openGenerateArtikel() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateArtikelComponent, dialogConfig);
  }



}
