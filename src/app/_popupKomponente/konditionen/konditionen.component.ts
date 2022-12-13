import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { ProjektKonditionen } from 'src/app/_interfaces/projektKonditionen';
import { Gruppen } from 'src/app/_interfaces/gruppen';

@Component({
  selector: 'app-konditionen',
  templateUrl: './konditionen.component.html',
  styleUrls: ['./konditionen.component.sass']
})
export class KonditionenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  projektZahlungsart?:ProjektKonditionen[];
  projektZahlungsKondition?:ProjektKonditionen[];
  zahlungsart?:Gruppen[];
  zahlungskondition?:Gruppen[];
  zahlungskonditionenID:number=0;
  zahlungsartID:number=0;
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<KonditionenComponent>,
              private notificationService: NotificationService,
              private getService: GetService,
              @Inject(MAT_DIALOG_DATA) public data: any
              ) { }

  public konditionenForm: FormGroup = new FormGroup({
    'zahlungsarten': new FormControl(""),
    'zahlungsbedingungen': new FormControl("")
  });
            

  ngOnInit(): void {

    this.getService.getProjektZahlungsArt(this.data[0].za).subscribe(res => {
      this.projektZahlungsart = res;
      this.konditionenForm.setValue({
        'zahlungsarten': this.projektZahlungsart[0].id,
      });

    });

    this.getService.getProjektZahlungsKonditionen(this.data[1].zk).subscribe(res => {
      this.projektZahlungsKondition = res;
      this.konditionenForm.setValue({
        'zahlungsbedingungen': this.projektZahlungsKondition[0].id,
      });

    this.loadValue();

  });

  }



  loadValue(){
    this.getService.getZahlungsArten().subscribe(res => {
      this.zahlungsart = res;
    });

    this.getService.getZahlungsKonditionen().subscribe(res => {
      this.zahlungskondition = res;
      this.isLoading = false;
    });
  }

              




// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}



  closeModal() {
    this.dialogRef.close();
  }

}
