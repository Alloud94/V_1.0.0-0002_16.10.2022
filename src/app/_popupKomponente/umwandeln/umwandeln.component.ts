import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-umwandeln',
  templateUrl: './umwandeln.component.html',
  styleUrls: ['./umwandeln.component.sass']
})
export class UmwandelnComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<UmwandelnComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

// ### Funktionen ###

  convert(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }



}
