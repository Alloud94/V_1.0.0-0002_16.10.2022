import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-kundendaten',
  templateUrl: './kundendaten.component.html',
  styleUrls: ['./kundendaten.component.sass']
})
export class KundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  search:string = 'assets/img/icon/search.png';

  constructor(public dialogRef: MatDialogRef<KundendatenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  //Kunden Liste
  kunden = [
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
  ]

// ### Funktionen ###

save(){
  this.notificationService.notificationInfoShort("Not Implementet yet.");
}


  closeModal() {
    this.dialogRef.close();
  }

}
