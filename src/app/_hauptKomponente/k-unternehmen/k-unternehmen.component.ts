import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JahresabschlussComponent } from 'src/app/_popupKomponente/jahresabschluss/jahresabschluss.component';
import { StatistikenComponent } from 'src/app/_popupKomponente/statistiken/statistiken.component';
import { LogoComponent } from 'src/app/_popupKomponente/logo/logo.component';
import { EinstellungenComponent } from 'src/app/_popupKomponente/einstellungen/einstellungen.component';
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';
import { GenerateMitarbeiterComponent } from 'src/app/_popupKomponente/generate-mitarbeiter/generate-mitarbeiter.component';

@Component({
  selector: 'app-k-unternehmen',
  templateUrl: './k-unternehmen.component.html',
  styleUrls: ['./k-unternehmen.component.sass']
})
export class KUnternehmenComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  //Unternehmensinformationen
  unternehmenName = "Thomas Brändle";
  unternehmenAdresse = "Friedaustrasse 3";
  unternehmenLand = "CH - Schweiz";
  unternehmenOrt = "9608 Ganterschwil";
  unternehmenTelefon = "+41 79 520 65 11";
  unternehmenWebsite = "www.thomas-braendle.com";
  unternehmenEmail = "design@thomas-braendle.com";
  unternehmenSlogan = "Web Development, Fotografie & Videografie";
  

  //Mitarbeiter Tabelle
  vorgangsNummer = "MA 100-001";
  vorname = "Thomas";
  nachname = "Brändle";
  funktion = "Geschäftsführer";
  abteilung = "Geschäftsleitung";
  stellenprozent = "100%";
  administrator = "Ja";


  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog) { }

  openJahresabschluss() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(JahresabschlussComponent, dialogConfig);
  }

  openStatistiken() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(StatistikenComponent, dialogConfig);
  }

  openLogoEinstellungen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(LogoComponent, dialogConfig);
  }

  openEinstellungen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(EinstellungenComponent, dialogConfig);
  }

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }

  openGenerateMitarbeiter() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateMitarbeiterComponent, dialogConfig);
  }


  ngOnInit(): void {
  }

}
