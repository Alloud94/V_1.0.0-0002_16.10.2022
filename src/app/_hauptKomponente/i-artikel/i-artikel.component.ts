import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateArtikelComponent } from 'src/app/_popupKomponente/generate-artikel/generate-artikel.component';

@Component({
  selector: 'app-i-artikel',
  templateUrl: './i-artikel.component.html',
  styleUrls: ['./i-artikel.component.sass']
})
export class IArtikelComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';

  //Tabelle
  artikel = [
    {vorgangsNummer: "AR 60-001", bezeichnung: "Landingpage", gruppe: "60 - Webentwicklung", ep: "150.00.-", einheit: "Pauschal"},
    {vorgangsNummer: "AR 60-001", bezeichnung: "Landingpage", gruppe: "60 - Webentwicklung", ep: "150.00.-", einheit: "Pauschal"},
  ]

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog) { }

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
