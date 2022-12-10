import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';

// Interfaces
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';

@Component({
  selector: 'app-rechnungsadresse',
  templateUrl: './rechnungsadresse.component.html',
  styleUrls: ['./rechnungsadresse.component.sass']
})
export class RechnungsadresseComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  rechnungsAdresse?:RechnungsAdresse;
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<RechnungsadresseComponent>,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: string
              ) { }

  ngOnInit(): void {
    this.isLoading = false;
  }


// ### Variablen ###

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


  // ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  saveNewAdress(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  closeModal() {
    this.dialogRef.close();
  }

}
