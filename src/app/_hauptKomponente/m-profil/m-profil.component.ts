import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePassword } from 'src/app/_interfaces/changePassword';

import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';

@Component({
  selector: 'app-m-profil',
  templateUrl: './m-profil.component.html',
  styleUrls: ['./m-profil.component.sass']
})
export class MProfilComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  ngOnInit(): void {
  }

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService) { }  

// ### Variablen ###
  //Kopfdaten
  profilNummer = "MA 101-001";
  profilName = "Thomas Brändle";
  telefon = "+41 79 520 65 11";
  email = "thomas@thomas-braendle.com";

// ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  public changePasswordForm: FormGroup = new FormGroup({
    pwActual: new FormControl('', [
      Validators.required
    ], []),
    pwActualSecond: new FormControl('', [
      Validators.required
    ], []),
    pwNew: new FormControl('', [
      Validators.required
    ], [])
  });
          

changePassword(loginData: ChangePassword){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}
  

// ### Popup Dialoge ###

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }

}
