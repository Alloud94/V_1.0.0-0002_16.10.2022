import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-kundendaten',
  templateUrl: './kundendaten.component.html',
  styleUrls: ['./kundendaten.component.sass']
})
export class KundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  search:string = 'assets/img/icon/search.png';

  //Kunden Liste
  kunden = [
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
    {nummer: 'KU 40-001', name: 'Thomas Brändle', strasse: 'Friedaustrasse 3', ort: '9608 Ganterschwil', gruppe: 'Privatkunde'},
  ]

  constructor(public dialogRef: MatDialogRef<KundendatenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
