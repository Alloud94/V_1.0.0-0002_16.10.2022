import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-projekt-kundendaten',
  templateUrl: './projekt-kundendaten.component.html',
  styleUrls: ['./projekt-kundendaten.component.sass']
})
export class ProjektKundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Kundendaten
  kundenName = "Thomas Brändle";
  kundenAdresse = "Friedaustrasse 3";
  kundenOrt = "9608 Ganterschwil";
  kundenLand = "CH - Schweiz";

  //Liste
  ansprechpartner = [
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle', funktion: 'Geschäftführer'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle', funktion: 'Geschäftführer'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle', funktion: 'Geschäftführer'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle', funktion: 'Geschäftführer'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle', funktion: 'Geschäftführer'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle', funktion: 'Geschäftführer'},
  ];

  constructor(public dialogRef: MatDialogRef<ProjektKundendatenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }


}
