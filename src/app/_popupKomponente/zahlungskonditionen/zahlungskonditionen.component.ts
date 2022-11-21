import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-zahlungskonditionen',
  templateUrl: './zahlungskonditionen.component.html',
  styleUrls: ['./zahlungskonditionen.component.sass']
})
export class ZahlungskonditionenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

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

  // Kundenrabatt
  kundenrabatt = "3";
  
  constructor(public dialogRef: MatDialogRef<ZahlungskonditionenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
