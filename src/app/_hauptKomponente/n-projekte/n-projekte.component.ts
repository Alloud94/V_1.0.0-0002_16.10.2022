import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { GenerateProjektComponent } from 'src/app/_popupKomponente/generate-projekt/generate-projekt.component';

@Component({
  selector: 'app-n-projekte',
  templateUrl: './n-projekte.component.html',
  styleUrls: ['./n-projekte.component.sass']
})
export class NProjekteComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  //Tabelle
  projekte = [
    {vorgangsNummer: "AB 20-001", kunde: "Thomas Brändle", datum: "19.07.2022", status: "Offen", vorgangsArt: "Auftrag"},
    {vorgangsNummer: "AB 20-001", kunde: "Thomas Brändle", datum: "19.07.2022", status: "Offen", vorgangsArt: "Auftrag"},
  ]

  openGenerateProject() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateProjektComponent, dialogConfig);
  }

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }




}
