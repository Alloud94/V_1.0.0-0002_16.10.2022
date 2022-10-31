import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenerateProjektComponent } from 'src/app/_popupKomponente/generate-projekt/generate-projekt.component';

@Component({
  selector: 'app-n-projekte',
  templateUrl: './n-projekte.component.html',
  styleUrls: ['./n-projekte.component.sass']
})
export class NProjekteComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';

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


  ngOnInit(): void {
  }

}
