import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';

// Interfaces
import { Dokumente } from 'src/app/_interfaces/dokumente';

@Component({
  selector: 'app-dokumentenverwaltung',
  templateUrl: './dokumentenverwaltung.component.html',
  styleUrls: ['./dokumentenverwaltung.component.sass']
})
export class DokumentenverwaltungComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  dokumente = [
    {id: 1, bezeichnung: 'Rechnung', datum: '2022-15-05'},
    {id: 2, bezeichnung: 'Auftragsbestätigung', datum: '2022-15-05'},
    {id: 3, bezeichnung: 'Angebot', datum: '2022-15-05'},
    {id: 4, bezeichnung: 'Rechnung ohne Logo', datum: '2022-15-05'},
    {id: 5, bezeichnung: 'Auftragsbestätigung ohne Logo', datum: '2022-15-05'},
    {id: 6, bezeichnung: 'Angebot ohne Logo', datum: '2022-15-05'},
    {id: 7, bezeichnung: 'Allgemeine Geschäftsbedingungen', datum: '2022-15-05'}
  ]
  

  constructor(public matDialog: MatDialog, 
    public dialogRef: MatDialogRef<DokumentenverwaltungComponent>,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }
  
  edit(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  closeModal() {
    this.dialogRef.close();
  }


}
