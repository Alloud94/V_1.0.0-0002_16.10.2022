import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.sass']
})
export class BudgetComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public dialogRef: MatDialogRef<BudgetComponent>,
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



}
