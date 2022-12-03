import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-meilenstein',
  templateUrl: './meilenstein.component.html',
  styleUrls: ['./meilenstein.component.sass']
})
export class MeilensteinComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<MeilensteinComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  //Status
  status = [
    {status: 'Offen'},
    {status: 'In Bearbeitung'},
    {status: 'Zurückgestellt'},
    {status: 'Abgeschlossen'},
    {status: 'Entfernt'}
  ]

  //Arbeitspakete
  arbeitspakete = [
    {arbeitspaket: 'Arbeitspaket'},
    {arbeitspaket: 'Arbeitspaket'},
    {arbeitspaket: 'Arbeitspaket'},
    {arbeitspaket: 'Arbeitspaket'},

  ]


// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}

addArbeitspaket(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}

  closeModal() {
    this.dialogRef.close();
  }

}
