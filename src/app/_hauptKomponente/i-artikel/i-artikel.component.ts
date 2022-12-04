import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

import { GenerateArtikelComponent } from 'src/app/_popupKomponente/generate-artikel/generate-artikel.component';

import { Artikel } from 'src/app/_interfaces/artikel';
import { GetService } from 'src/app/_service/get/get.service';

@Component({
  selector: 'app-i-artikel',
  templateUrl: './i-artikel.component.html',
  styleUrls: ['./i-artikel.component.sass']
})
export class IArtikelComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';
  artikel?:Artikel[];
  isLoading = true;

  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getArtikel().subscribe(res => {
      this.artikel = res;
      this.isLoading = false;
    })
  }


  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  openGenerateArtikel() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateArtikelComponent, dialogConfig);
  }



}
