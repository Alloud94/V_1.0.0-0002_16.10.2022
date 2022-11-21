import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateProjektComponent } from 'src/app/_popupKomponente/generate-projekt/generate-projekt.component';
import { GenerateArtikelComponent } from 'src/app/_popupKomponente/generate-artikel/generate-artikel.component';
import { GenerateKundeComponent } from 'src/app/_popupKomponente/generate-kunde/generate-kunde.component';

@Component({
  selector: 'app-c-dashboard',
  templateUrl: './c-dashboard.component.html',
  styleUrls: ['./c-dashboard.component.sass']
})
export class CDashboardComponent implements OnInit {
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';

  //Unternehmensinformationen
  unternehmenName = "Thomas Brändle";
  unternehmenAdresse = "Friedaustrasse 3";
  unternehmenOrt = "9608 Ganterschwil";
  unternehmenTelefon = "+41 79 520 65 11";
  unternehmenWebsite = "www.thomas-braendle.com";
  unternehmenEmail = "design@thomas-braendle.com";
  unternehmenSlogan = "Web Development, Fotografie & Videografie";

  //Letzte Vorgänge
  vorgaenge = [
    {vorgangsArt: 'Auftrag', vorgangsBezeichnung: 'Thomas Brändle', vorgangsNummer: 'AB 20-001'},
    {vorgangsArt: 'Auftrag', vorgangsBezeichnung: 'Thomas Brändle', vorgangsNummer: 'AB 20-001'},
  ]

  //Flüssige Mittel
  fmJahre = [
    {jahr: '2022', ertrag: "CHF 10'000.00.-", offeneRechnungen: "CHF 1'000.00.-", aufwand: "CHF 6'000.00.-"},
    {jahr: '2022', ertrag: "CHF 10'000.00.-", offeneRechnungen: "CHF 1'000.00.-", aufwand: "CHF 6'000.00.-"},
    {jahr: '2022', ertrag: "CHF 10'000.00.-", offeneRechnungen: "CHF 1'000.00.-", aufwand: "CHF 6'000.00.-"},
    {jahr: '2022', ertrag: "CHF 10'000.00.-", offeneRechnungen: "CHF 1'000.00.-", aufwand: "CHF 6'000.00.-"},
  ]

  jahr = new Date().getFullYear();
  ertrag = "CHF 10'000.00.-";
  offeneRechnungen = "CHF 1'000.00.-";
  aufwand = "CHF 6'000.00.-";

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog) { }

  openGenerateProject() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateProjektComponent, dialogConfig);
  }

  openGenerateKunde() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateKundeComponent, dialogConfig);
  }

  openGenerateArtikel() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateArtikelComponent, dialogConfig);
  }


  ngOnInit(): void {
  }

}
