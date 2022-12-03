import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { NotizenComponent } from '../notizen/notizen.component';



@Component({
  selector: 'app-generate-artikel',
  templateUrl: './generate-artikel.component.html',
  styleUrls: ['./generate-artikel.component.sass']
})
export class GenerateArtikelComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<GenerateArtikelComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###
  
  //Artikelgruppen
  agGroup = [
    {agGruppe: 'Webentwicklung', value: 0},
    {agGruppe: 'Fotografie', value: 0},
    {agGruppe: 'Videografie', value: 0},
    {agGruppe: 'Anderes', value: 0}
  ]

  //Einheiten
  ehGroup = [
    {ehGruppe: 'Stück', value: 0},
    {ehGruppe: 'Pauschal', value: 0},
    {ehGruppe: 'Stunde', value: 0},
    {ehGruppe: 'Anderes', value: 0}
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
