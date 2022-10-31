import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateKundeComponent } from 'src/app/_popupKomponente/generate-kunde/generate-kunde.component';

@Component({
  selector: 'app-g-kunden',
  templateUrl: './g-kunden.component.html',
  styleUrls: ['./g-kunden.component.sass']
})
export class GKundenComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog) { }

  openGenerateKunde() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateKundeComponent, dialogConfig);
  }


  ngOnInit(): void {
  }

}
