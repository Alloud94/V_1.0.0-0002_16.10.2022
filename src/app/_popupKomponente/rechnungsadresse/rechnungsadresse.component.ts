import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-rechnungsadresse',
  templateUrl: './rechnungsadresse.component.html',
  styleUrls: ['./rechnungsadresse.component.sass']
})
export class RechnungsadresseComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Aktuelle Adresse
  aktStrasse = "Friedaustrasse 3";
  aktOrt = "9608 Ganterschwil";
  aktLand = "CH - Schweiz";

  //Ausgewählte Adresse
  ausStrasse = "Friedaustrasse 3";
  ausOrt = "9608 Ganterschwil";
  ausLand = "CH - Schweiz";

  //Neue Adresse

  //Adressliste
  adressen = [
    {strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', land: 'CH - Schweiz'},
    {strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', land: 'CH - Schweiz'},
    {strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', land: 'CH - Schweiz'},
    {strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', land: 'CH - Schweiz'},
    {strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', land: 'CH - Schweiz'},
    {strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', land: 'CH - Schweiz'},
  ]

  constructor(public dialogRef: MatDialogRef<RechnungsadresseComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
