import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateProjektComponent } from 'src/app/_popupKomponente/generate-projekt/generate-projekt.component';
import { GenerateArtikelComponent } from 'src/app/_popupKomponente/generate-artikel/generate-artikel.component';
import { GenerateKundeComponent } from 'src/app/_popupKomponente/generate-kunde/generate-kunde.component';

import { GetService } from 'src/app/_service/get/get.service';
import { UnternehmensInformationen } from 'src/app/_interfaces/unternehmenInfos';

@Component({
  selector: 'app-c-dashboard',
  templateUrl: './c-dashboard.component.html',
  styleUrls: ['./c-dashboard.component.sass']
})

export class CDashboardComponent implements OnInit {
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';
  unternehmenInfos?:UnternehmensInformationen[];
  isLoading = true;

  constructor(public matDialog: MatDialog, 
              private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getUnternehmenInfos().subscribe(res => {
      this.unternehmenInfos = res;
      this.isLoading = false;
    });

  }


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



}
