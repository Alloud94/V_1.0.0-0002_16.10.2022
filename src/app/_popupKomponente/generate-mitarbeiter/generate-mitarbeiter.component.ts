import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { NotizenComponent } from '../notizen/notizen.component';


@Component({
  selector: 'app-generate-mitarbeiter',
  templateUrl: './generate-mitarbeiter.component.html',
  styleUrls: ['./generate-mitarbeiter.component.sass']
})
export class GenerateMitarbeiterComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<GenerateMitarbeiterComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###
  
  //Abteilung
  abGroup = [
    {abGruppe: 'Geschäftsleitung', value: 0},
    {abGruppe: 'Entwicklung', value: 0},
    {abGruppe: 'Sekretariat', value: 0},
    {abGruppe: 'Anderes', value: 0}
  ]

  notizen = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

// ### Funktionen ###

generate(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}


// ### Popup Dialoge ###

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
