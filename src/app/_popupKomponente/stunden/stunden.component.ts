import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-stunden',
  templateUrl: './stunden.component.html',
  styleUrls: ['./stunden.component.sass']
})
export class StundenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<StundenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

// ### Variablen ###
meilensteine = [
  {ms: "Meilenstein1"},
  {ms: "Meilenstein2"}
]

stundenEintrag = [
  {datum: "01.01.2023", leistung: "AP 01", stunden: 5, minuten: 10},
  {datum: "01.01.2023", leistung: "AP 01", stunden: 5, minuten: 10},
  {datum: "01.01.2023", leistung: "AP 01", stunden: 5, minuten: 10},
  {datum: "01.01.2023", leistung: "AP 01", stunden: 5, minuten: 10},
  {datum: "01.01.2023", leistung: "AP 01", stunden: 5, minuten: 10},
  {datum: "01.01.2023", leistung: "AP 01", stunden: 5, minuten: 10}
]

// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}

addEintrag(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}



  closeModal() {
    this.dialogRef.close();
  }

}
