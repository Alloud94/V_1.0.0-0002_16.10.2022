import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

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

  public partnerForm: FormGroup = new FormGroup({
      'id': new FormControl(null),
      'anrede': new FormControl(null),
      'name': new FormControl(null),
      'telefon': new FormControl(null),
      'mail': new FormControl(null),
      'funktion': new FormControl(null),
      'notizen': new FormControl(null)
});
            
  
  ngOnInit(): void {
    this.getService.getAnsprechpartner(this.data).subscribe(res => {
      this.ansprechpartner = res;
      this.isLoading = false;
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
        this.editPartner(Number(res.result));
      }else{
        this.notificationService.notificationFail("Partner konnte nicht erstellt werden!");
      }
  });
  }

  savePartner(){
    let partner: Ansprechpartner[] = [{
      id: this.partnerForm.controls['id'].value,
      anrede: this.partnerForm.controls['anrede'].value,
      name: this.partnerForm.controls['name'].value,
      email: this.partnerForm.controls['mail'].value,
      telefon: this.partnerForm.controls['telefon'].value,
      funktion: this.partnerForm.controls['funktion'].value,
      notizen: this.partnerForm.controls['notizen'].value
    }];

    this.postService.updatePartner(partner[0]).subscribe(res => {
      this.ngOnInit();
      this.editPartner(partner[0].id);
    });

  }

  select(){
    this.dialogRef.close(this.partnerid);
  }

  editPartner(id: number){
    this.isLoading = true;

    this.getService.getPartner(id).subscribe(res => {
      this.partner = res;
      this.partnerid = id;

      this.partnerForm.setValue({
          'id': this.partnerid,
          'anrede': this.partner[0].anrede,
          'name': this.partner[0].name,
          'telefon': this.partner[0].telefon,
          'mail': this.partner[0].email,
          'funktion': this.partner[0].funktion,
          'notizen': this.partner[0].notizen
      });

      this.isLoading = false;
    });

  }

  deletePartner(){
    this.isLoading = true;

    this.postService.deletePartner(this.partnerForm.controls['id'].value).subscribe(res => {
      this.ngOnInit();
    })
    
    this.isLoading = false;
  
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
