import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { Gruppen } from 'src/app/_interfaces/gruppen';


@Component({
  selector: 'app-gruppen',
  templateUrl: './gruppen.component.html',
  styleUrls: ['./gruppen.component.sass']
})
export class GruppenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  gruppe?:Gruppen[];
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<GruppenComponent>,
              private notificationService: NotificationService, 
              @Inject(MAT_DIALOG_DATA) public data: string,
              private getService: GetService) { }

  ngOnInit(): void {
    this.loadValue(this.data);
  }


// ### Funktionen ###

  loadValue(value: string){
    if(value == "Zahlungskonditionen"){

      this.getService.getZahlungsKonditionen().subscribe(res => {
        this.gruppe = res;
        this.isLoading = false;
      });  

    }else if(value == "Zahlungsarten"){

      this.getService.getZahlungsArten().subscribe(res => {
        this.gruppe = res;
        this.isLoading = false;
      });
      
    }else if(value == "Artikelgruppen"){

      this.getService.getArtikelgruppen().subscribe(res => {
        this.gruppe = res;
        this.isLoading = false;
      });  
      
    }else if(value == "Kundengruppen"){

      this.getService.getKundenGruppen().subscribe(res => {
        this.gruppe = res;
        this.isLoading = false;
      });  
      
    }else if(value == "Einheit"){

      this.getService.getEinheiten().subscribe(res => {
        this.gruppe = res;
        this.isLoading = false;
      });  
      
    }else{
      console.log("Error");
    }


  }

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  addEintrag(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  closeModal() {
    this.dialogRef.close();
  }
  
}
