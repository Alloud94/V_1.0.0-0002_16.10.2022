import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { NotizenComponent } from '../notizen/notizen.component';
import { GruppenComponent } from 'src/app/_popupKomponente/gruppen/gruppen.component';


@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.component.html',
  styleUrls: ['./einstellungen.component.sass']
})
export class EinstellungenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  ngOnInit(): void {
  }

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<EinstellungenComponent>,
              private notificationService: NotificationService) { }

// ### Variablen ###
  //Kopfdaten
  unternehmenName = "Thomas Brändle";
  unternehmenAdresse = "Friedaustrasse 3";
  unternehmenOrt = "9608 Ganterschwil";
  unternehmenLand = "CH - Schweiz";
  unternehmenRechtsform = "Einzelfirma";
  unternehmenUID = "Keine";
  unternehmenWebsite = "www.thomas-braendle.com";
  unternehmenEmail = "design@thomas-braendle.com";
  unternehmenTelefon = "+41 79 520 65 11";
  unternehmenStartJahr = '01. Januar';
  unternehmenMWST = "0";
  notizen = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  //Abteilung
  abGroup = [
    {abGruppe: 'Geschäftsleitung', value: 0},
    {abGruppe: 'Entwicklung', value: 0},
    {abGruppe: 'Sekretariat', value: 0},
    {abGruppe: 'Anderes', value: 0}
  ]

// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}


// ### Popup Dialoge ###
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


  closeModal() {
    this.dialogRef.close();
  }

}
