import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

// Service
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { Kunde } from 'src/app/_interfaces/kunde';

@Component({
  selector: 'app-kundendaten',
  templateUrl: './kundendaten.component.html',
  styleUrls: ['./kundendaten.component.sass']
})
export class KundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  searchIcon:string = 'assets/img/icon/search.png';
  kunden?:Kunde[];

  constructor(public dialogRef: MatDialogRef<KundendatenComponent>,
              private notificationService: NotificationService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getKunden().subscribe(res => {
      this.kunden = res;
    })

  }


// ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  closeModal() {
    this.dialogRef.close();
  }

}
