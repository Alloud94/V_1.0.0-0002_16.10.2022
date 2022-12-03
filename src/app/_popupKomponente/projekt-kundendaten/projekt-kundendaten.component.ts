import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-projekt-kundendaten',
  templateUrl: './projekt-kundendaten.component.html',
  styleUrls: ['./projekt-kundendaten.component.sass']
})
export class ProjektKundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<ProjektKundendatenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###

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


// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}

saveNewPartner(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}



  closeModal() {
    this.dialogRef.close();
  }


}
