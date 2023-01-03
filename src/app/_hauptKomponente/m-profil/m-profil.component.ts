import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Interfaces
import { ChangePassword } from 'src/app/_interfaces/changePassword';
import { Profil } from 'src/app/_interfaces/profil';

// Components
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';

// Services
import { GetService } from 'src/app/_service/get/get.service';

@Component({
  selector: 'app-m-profil',
  templateUrl: './m-profil.component.html',
  styleUrls: ['./m-profil.component.sass']
})
export class MProfilComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';
  isLoading = true;

  ngOnInit(): void {
    this.loadProfile();
  }

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService,
              private getService: GetService) { }  

// ### Variablen ###
  //Kopfdaten
  profilNummer = "";
  profilName = localStorage.getItem("username");
  telefon = "";
  email = "";

// ### Funktionen ###

  loadProfile(){
    this.getService.getAngebot(Number(localStorage.getItem('userid'))).subscribe(res => {
      this.profilNummer = String(localStorage.getItem('userid'));
      this.telefon = "";
      this.email = "";    
      this.isLoading = false;
    });
  }

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
