import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-belege',
  templateUrl: './belege.component.html',
  styleUrls: ['./belege.component.sass']
})
export class BelegeComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  belege = [
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'}
  ]
  
  constructor(public dialogRef: MatDialogRef<BelegeComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  // ### Funktionen ###

  sendDok(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }



  closeModal() {
    this.dialogRef.close();
  }

}
