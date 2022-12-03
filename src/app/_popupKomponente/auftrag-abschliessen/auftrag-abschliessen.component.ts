import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-auftrag-abschliessen',
  templateUrl: './auftrag-abschliessen.component.html',
  styleUrls: ['./auftrag-abschliessen.component.sass']
})
export class AuftragAbschliessenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<AuftragAbschliessenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###

  budget = "150.00";
  stunden = "150.00";
  regie = "50.00";
  ertrag = "200.00";
  marge = "20";
  rechnungsbetrag = "450.00";


// ### Funktionen ###

complete(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}


  closeModal() {
    this.dialogRef.close();
  }

}
