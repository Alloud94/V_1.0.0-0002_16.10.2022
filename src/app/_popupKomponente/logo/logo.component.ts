import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';

  constructor(public dialogRef: MatDialogRef<LogoComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  // ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  uploadLogo(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

}
