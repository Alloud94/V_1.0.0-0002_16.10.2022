import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-kalkulation',
  templateUrl: './kalkulation.component.html',
  styleUrls: ['./kalkulation.component.sass']
})
export class KalkulationComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Gesamtkalkulation
  ep = "150.00";
  vp = "200.00";
  gewinn = "50.00";
  marge = "20";

  //Positionen
  positionen = [
    {nummer: '001', bezeichnung: 'Landingpage'},
    {nummer: '001', bezeichnung: 'Landingpage'},
    {nummer: '001', bezeichnung: 'Landingpage'},
    {nummer: '001', bezeichnung: 'Landingpage'},
  ]

  //Artikelkalkulation
  epBrutto = "20.00";
  rabatt1 = "5";
  rabatt2 = "3";
  epNetto = "15.60";
  vpBrutto = "25.20";
  kundenRabatt = "5";
  spezialrabatt = "2";
  akMarge = "20";
  vpNetto = "21.60";

  constructor(public dialogRef: MatDialogRef<KalkulationComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
