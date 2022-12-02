import { InteractivityChecker } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { GruppenComponent } from 'src/app/_popupKomponente/gruppen/gruppen.component';
import { GetService } from 'src/app/_service/get/get.service';

@Component({
  selector: 'app-l-einstellungen',
  templateUrl: './l-einstellungen.component.html',
  styleUrls: ['./l-einstellungen.component.sass']
})
export class LEinstellungenComponent implements OnInit {

  constructor(public matDialog: MatDialog, private einst: GetService) { }

  artikelGruppen:any = [];

  ngOnInit(): void {
    this.einst.getArtikelgruppen().subscribe(res =>{
      console.log(res);
      this.artikelGruppen.push(res);
      console.log(this.artikelGruppen);
      console.log(this.artikelGruppen[1]);
    });
  }

  //Artikelgruppen
  agGroup = [
    {agGruppe: this.artikelGruppen.bezeichnung, value: 0}
  ]

  //Darstellung
  fHoptions = [
    {fHoption: 'Segoe Print'},
    {fHoption: 'Arial'},
    {fHoption: 'Robot'},
    {fHoption: 'Test 1'},
  ];

  lToptions = [
    {lToption: 'Segoe Print'},
    {lToption: 'Arial'},
    {lToption: 'Robot'},
    {lToption: 'Test 1'},
  ]

  modes = [
    {mode: 'Original'},
    {mode: 'Dark'}
  ]

  //Gruppen

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
  
  //Kundengruppen
  kgGroup = [
    {kgGruppe: 'Privatperson', value: 0},
    {kgGruppe: 'Geschäftspartner', value: 0},
    {kgGruppe: 'Verein', value: 0},
    {kgGruppe: 'Anderes', value: 0}
  ]

  //Einheiten
  ehGroup = [
    {ehGruppe: 'Stück', value: 0},
    {ehGruppe: 'Pauschal', value: 0},
    {ehGruppe: 'Stunde', value: 0},
    {ehGruppe: 'Anderes', value: 0}
  ]

  //Softwareinfos
  version = "V 1.0.0-0003";
  versionDatum = "20.11.2022";
  hersteller = "Goffini GmbH";
  supportTel = "+41 79 520 65 11";
  supportMail = "info@goffini.ch";

  openGruppen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GruppenComponent, dialogConfig);
  }

}
