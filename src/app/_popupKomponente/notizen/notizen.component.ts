import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';

// Interfaces
import { Notizen } from 'src/app/_interfaces/notizen';

@Component({
  selector: 'app-notizen',
  templateUrl: './notizen.component.html',
  styleUrls: ['./notizen.component.sass']
})
export class NotizenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  notizen?:Notizen;

  constructor(public dialogRef: MatDialogRef<NotizenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

// ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }



  closeModal() {
    this.dialogRef.close();
  }

}
