import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';
import { PostService } from 'src/app/_service/post/post.service';
import { GenerateService } from 'src/app/_service/generate-service/generate.service';

// Interfaces
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';
import { Gruppen } from 'src/app/_interfaces/gruppen';

@Component({
  selector: 'app-rechnungsadresse',
  templateUrl: './rechnungsadresse.component.html',
  styleUrls: ['./rechnungsadresse.component.sass']
})
export class RechnungsadresseComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  rechnungsAdresse?:RechnungsAdresse[];
  adresse?:RechnungsAdresse[];
  aktuelleAdresse?:RechnungsAdresse[];
  adressenId?:number;
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<RechnungsadresseComponent>,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private getService: GetService,
              private postService: PostService,
              private generateService: GenerateService
              ) { }

  ngOnInit(): void {
    this.getService.getRechnungsadressen(this.data[0].kd).subscribe(res => {
      this.rechnungsAdresse = res;
    });

    this.getService.getRechnungsadresse(this.data[1].ad).subscribe(res => {
      this.aktuelleAdresse = res;
      this.isLoading = false;
    });


  }

  public adressenForm: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'adresse': new FormControl(null),
    'ortschaft': new FormControl(null),
    'land': new FormControl(null),
});


  // ### Funktionen ###



  saveAdress(){
    let adresse: RechnungsAdresse[] = [{
      id: this.adressenForm.controls['id'].value,
      adresse: this.adressenForm.controls['adresse'].value,
      ortschaft: this.adressenForm.controls['ortschaft'].value,
      land: this.adressenForm.controls['land'].value
    }];

    this.postService.updateAdresse(adresse[0]).subscribe(res => {
      this.ngOnInit();
      this.selectAdress(adresse[0].id);
    });

  }

  newAdress(){
    let adresse: RechnungsAdresse[] = [{
      id: this.adressenForm.controls['id'].value,
      adresse: this.adressenForm.controls['adresse'].value,
      ortschaft: this.adressenForm.controls['ortschaft'].value,
      land: this.adressenForm.controls['land'].value
    }];

    if(adresse[0].id == null){
      this.generateService.createAdress(this.data[0].kd, adresse[0]).subscribe( res => {
        if(res.result !== 'fail'){
          this.ngOnInit();
          this.selectAdress(Number(res.result));
        }else{
          this.notificationService.notificationFail("Adresse konnte nicht erstellt werden!");
        }
      });
    }else{
      this.notificationService.notificationFail("Adresse existiert bereits!");
    }
    
  }


  selectAdress(id: number){
    this.isLoading = true;

    this.getService.getRechnungsadresse(id).subscribe(res => {
      this.adresse = res;
      this.adressenId = id;

      this.adressenForm.setValue({
          'id': this.adressenId,
          'adresse': this.adresse[0].adresse,
          'ortschaft': this.adresse[0].ortschaft,
          'land': this.adresse[0].land,
      });

      this.isLoading = false;
    });
  }

  select(){
    if(this.adressenId != null){
      this.dialogRef.close(this.adressenId);
    }else{
      this.notificationService.notificationFail("Bitte Adresse auswählen.")
    }
  }


  deleteAdresse(){
    this.isLoading = true;

    this.postService.deleteAdresse(this.adressenForm.controls['id'].value).subscribe(res => {
      this.ngOnInit();
      this.cleanForm();
    })
    
    this.isLoading = false;
  
  }

  cleanForm(){
    this.adressenForm.reset();
  }


  closeModal() {
    this.dialogRef.close();
  }

}
