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

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog) { }

  // Die verschiedenen Popup Dialoge öffnen
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
