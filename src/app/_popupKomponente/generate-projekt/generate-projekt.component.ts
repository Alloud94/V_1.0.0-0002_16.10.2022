import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { KundendatenComponent } from '../kundendaten/kundendaten.component';
import { RechnungsadresseComponent } from '../rechnungsadresse/rechnungsadresse.component';
import { NotizenComponent } from '../notizen/notizen.component';
import { AnsprechpartnerComponent } from '../ansprechpartner/ansprechpartner.component';

import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-generate-projekt',
  templateUrl: './generate-projekt.component.html',
  styleUrls: ['./generate-projekt.component.sass']
})
export class GenerateProjektComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Kopfdaten
  kundenNummer = "KU 40-001";
  kundenName = "Thomas Brändle";
  kundenOrt = "9608 Ganterschwil";
  kundenPartner = "Herr Thomas Brändle";
  raStrasse = "Friedaustrasse 3";
  raOrt = "9608 Ganterschwil";
  raLand = "CH - Schweiz";
  notizen = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  
  //Zahlungsbedingungen
  zbGroup = [
    {zbGruppe: '10 Tage 3% Skonto, 30 Tage Netto', value: 0},
    {zbGruppe: '7 Tage 2% Skonto, 20 Tage Netto', value: 0},
    {zbGruppe: '30 Tage Netto', value: 0},
    {zbGruppe: '14 Tage Netto', value: 0},
    {zbGruppe: 'Vorauskasse', value: 0},
    {zbGruppe: 'Barzahlung', value: 0},
    {zbGruppe: 'Teilzahlung', value: 0}
  ]

  //Zahlungsarten
  zaGroup = [
    {zaGruppe : 'Rechnung', value: 0},
    {zaGruppe : 'Vorauskasse', value: 0},
    {zaGruppe : 'Barzahlung', value: 0}
  ]



  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<GenerateProjektComponent>) { }

  openKundendaten() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(KundendatenComponent, dialogConfig);
  }

  openRechnungsadresse() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);
  }

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }

  openAnsprechpartner() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(AnsprechpartnerComponent, dialogConfig);
  }




  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
