import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-textposition',
  templateUrl: './textposition.component.html',
  styleUrls: ['./textposition.component.sass']
})
export class TextpositionComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<TextpositionComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Funktionen ###

addTextArticle(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}



  closeModal() {
    this.dialogRef.close();
  }

}
