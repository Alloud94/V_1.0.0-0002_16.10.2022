import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';
import { GenerateService } from 'src/app/_service/generate-service/generate.service';
import { PostService } from 'src/app/_service/post/post.service';

// Components
import { NotizenComponent } from '../notizen/notizen.component';

// Interfaces
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { Notizen } from 'src/app/_interfaces/notizen';

@Component({
  selector: 'app-ansprechpartner',
  templateUrl: './ansprechpartner.component.html',
  styleUrls: ['./ansprechpartner.component.sass']
})
export class AnsprechpartnerComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  ansprechpartner?:Ansprechpartner[];
  notizen?:Notizen;
  partner?: Ansprechpartner[];
  isLoading = true;
  partnerid?:number;

  constructor(public matDialog: MatDialog, 
              public dialogRef: MatDialogRef<AnsprechpartnerComponent>,
              private notificationService: NotificationService,
              private getService: GetService,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private generateService: GenerateService,
              private postService: PostService
              ) { }
  
  ngOnInit(): void {
    this.getService.getAnsprechpartner(this.data).subscribe(res => {
      this.ansprechpartner = res;
      this.isLoading = false;
      this.editPartner(1);
    });
  }

// ### Variablen ###
  anrede = [
    {anrede: 'Herr'},
    {anrede: 'Frau'}
  ]

// ### Funktionen ###

  addAnsprechpartner(){
    this.generateService.createPartner(this.data).subscribe( res => {
      if(res.result !== 'fail'){
        this.ngOnInit();
      }else{
        this.notificationService.notificationFail("Partner konnte nicht erstellt werden!");
      }
  });
  }

  savePartner(){
  }

  saveNotizen(){
  }

  select(){
    this.dialogRef.close(this.partnerid);
  }

  editPartner(id: number){
    this.isLoading = true;
    this.getService.getPartner(id).subscribe(res => {
      this.partner = res;
      this.partnerid = id;
      this.isLoading = false;
    });

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
