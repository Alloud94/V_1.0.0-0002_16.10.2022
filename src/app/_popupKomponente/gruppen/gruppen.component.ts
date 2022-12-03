import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-gruppen',
  templateUrl: './gruppen.component.html',
  styleUrls: ['./gruppen.component.sass']
})
export class GruppenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<GruppenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###
  //Einträge
  eintraege = [
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
  ]

// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}



  closeModal() {
    this.dialogRef.close();
  }
  

}
