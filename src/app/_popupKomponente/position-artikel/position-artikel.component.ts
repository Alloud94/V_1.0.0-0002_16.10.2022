import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-position-artikel',
  templateUrl: './position-artikel.component.html',
  styleUrls: ['./position-artikel.component.sass']
})
export class PositionArtikelComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  search:string = 'assets/img/icon/search.png';

  constructor(public dialogRef: MatDialogRef<PositionArtikelComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


// ### Variablen ###

  //Artikel
  artikel = [
    {nummer: 'AR 61-001', bezeichnung: 'Landingpage', gruppe: 'Webtentwicklung', einheit: 'Pauschal', vp: '150.00'},
    {nummer: 'AR 61-001', bezeichnung: 'Landingpage', gruppe: 'Webtentwicklung', einheit: 'Pauschal', vp: '150.00'},
    {nummer: 'AR 61-001', bezeichnung: 'Landingpage', gruppe: 'Webtentwicklung', einheit: 'Pauschal', vp: '150.00'},
    {nummer: 'AR 61-001', bezeichnung: 'Landingpage', gruppe: 'Webtentwicklung', einheit: 'Pauschal', vp: '150.00'},
    {nummer: 'AR 61-001', bezeichnung: 'Landingpage', gruppe: 'Webtentwicklung', einheit: 'Pauschal', vp: '150.00'},
    {nummer: 'AR 61-001', bezeichnung: 'Landingpage', gruppe: 'Webtentwicklung', einheit: 'Pauschal', vp: '150.00'},
  ]


// ### Funktionen ###

selectArticle(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}



  closeModal() {
    this.dialogRef.close();
  }

}
