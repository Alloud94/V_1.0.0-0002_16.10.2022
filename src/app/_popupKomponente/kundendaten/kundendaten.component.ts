import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

// Service
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { Kunde } from 'src/app/_interfaces/kunde';
import { HttpResponse } from 'src/app/_interfaces/http-response';

@Component({
  selector: 'app-kundendaten',
  templateUrl: './kundendaten.component.html',
  styleUrls: ['./kundendaten.component.sass']
})
export class KundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  searchIcon:string = 'assets/img/icon/search.png';
  kunden?:Kunde[];
  kundenID?:number;
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<KundendatenComponent>,
              private notificationService: NotificationService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getKunden().subscribe(res => {
      this.kunden = res;
      this.isLoading = false;
    });

  }


// ### Funktionen ###

  select(id:number){
    this.kundenID = id;  
    this.dialogRef.close(id);
  }

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  closeModal() {
    this.dialogRef.close(this.kundenID);
  }

}
