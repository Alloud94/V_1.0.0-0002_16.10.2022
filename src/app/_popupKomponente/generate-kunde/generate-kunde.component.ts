import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { NotizenComponent } from '../notizen/notizen.component';


@Component({
  selector: 'app-generate-kunde',
  templateUrl: './generate-kunde.component.html',
  styleUrls: ['./generate-kunde.component.sass']
})
export class GenerateKundeComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  ngOnInit(): void {
  }


  constructor(public matDialog: MatDialog, 
            public dialogRef: MatDialogRef<GenerateKundeComponent>,
            private notificationService: NotificationService) { }



// ### Variablen ###
  //Kundengruppen
  kgGroup = [
    {kgGruppe: 'Privatperson', value: 0},
    {kgGruppe: 'Geschäftspartner', value: 0},
    {kgGruppe: 'Verein', value: 0},
    {kgGruppe: 'Anderes', value: 0}
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
