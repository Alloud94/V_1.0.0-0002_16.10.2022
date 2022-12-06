import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';

@Component({
  selector: 'app-projekt-kundendaten',
  templateUrl: './projekt-kundendaten.component.html',
  styleUrls: ['./projekt-kundendaten.component.sass']
})
export class ProjektKundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  ansprechpartner?:Ansprechpartner[];

  constructor(public dialogRef: MatDialogRef<ProjektKundendatenComponent>,
              private notificationService: NotificationService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.loadValue();
  }


// ### Variablen ###

  //Kundendaten
  kundenName = "Thomas Brändle";
  kundenAdresse = "Friedaustrasse 3";
  kundenOrt = "9608 Ganterschwil";
  kundenLand = "CH - Schweiz";



// ### Funktionen ###

  loadValue(){
    
  }

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
