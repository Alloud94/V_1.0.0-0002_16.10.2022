import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { LoeschenComponent } from 'src/app/_popupKomponente/loeschen/loeschen.component';
import { NotizenComponent } from 'src/app/_popupKomponente/notizen/notizen.component';
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';

@Component({
  selector: 'app-j-der-artikel',
  templateUrl: './j-der-artikel.component.html',
  styleUrls: ['./j-der-artikel.component.sass']
})
export class JDerArtikelComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  ngOnInit(): void {
  }


  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService) { }

  //Kopfdaten
  artikelNummer = "AR 61-001";
  artikelBezeichnung = "Google SEO";
  notizen = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  //Artikelgruppen
  agGroup = [
    {agGruppe: 'Webentwicklung', value: 0},
    {agGruppe: 'Fotografie', value: 0},
    {agGruppe: 'Videografie', value: 0},
    {agGruppe: 'Anderes', value: 0}
  ]
  
  //Einheiten
  ehGroup = [
    {ehGruppe: 'Stück', value: 0},
    {ehGruppe: 'Pauschal', value: 0},
    {ehGruppe: 'Stunde', value: 0},
    {ehGruppe: 'Anderes', value: 0}
  ]

    //Artikelkalkulation
    epBrutto = "20.00";
    rabatt1 = "5";
    rabatt2 = "3";
    epNetto = "15.60";
    vpBrutto = "25.20";
    akMarge = "20";
    vpNetto = "21.60"; 



  // ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  // ### Popup Dialoge ###

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }

  openLoeschen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(LoeschenComponent, dialogConfig);
  }

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }
}
