import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-gruppen',
  templateUrl: './gruppen.component.html',
  styleUrls: ['./gruppen.component.sass']
})
export class GruppenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Einträge
  eintraege = [
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
    {option: 'Eintrag', value: 0},
  ]

  constructor(public dialogRef: MatDialogRef<GruppenComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
