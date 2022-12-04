import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';
import { Kunde } from 'src/app/_interfaces/kunde';

import { GenerateKundeComponent } from 'src/app/_popupKomponente/generate-kunde/generate-kunde.component';

@Component({
  selector: 'app-g-kunden',
  templateUrl: './g-kunden.component.html',
  styleUrls: ['./g-kunden.component.sass']
})
export class GKundenComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';
  kunden?:Kunde[];
  isLoading = true;

  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService,
              private getService: GetService) { }


  ngOnInit(): void {
    this.getService.getKunden().subscribe(res => {
      this.kunden = res;
      this.isLoading = false;
    })
  }


  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  openGenerateKunde() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateKundeComponent, dialogConfig);
  }



  
}
