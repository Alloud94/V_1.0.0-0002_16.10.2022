import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-belege',
  templateUrl: './belege.component.html',
  styleUrls: ['./belege.component.sass']
})
export class BelegeComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  belege = [
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'},
    {datum: '14.03.2022', art: 'Rechnung', belegID: '001'}
  ]
  
  constructor(public dialogRef: MatDialogRef<BelegeComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
