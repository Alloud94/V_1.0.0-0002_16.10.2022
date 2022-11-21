import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-meilenstein',
  templateUrl: './meilenstein.component.html',
  styleUrls: ['./meilenstein.component.sass']
})
export class MeilensteinComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Status
  status = [
    {status: 'Offen'},
    {status: 'In Bearbeitung'},
    {status: 'Zurückgestellt'},
    {status: 'Abgeschlossen'},
    {status: 'Entfernt'}
  ]

  //Arbeitspakete
  arbeitspakete = [
    {arbeitspaket: 'Arbeitspaket'},
    {arbeitspaket: 'Arbeitspaket'},
    {arbeitspaket: 'Arbeitspaket'},
    {arbeitspaket: 'Arbeitspaket'},

  ]

  constructor(public dialogRef: MatDialogRef<MeilensteinComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
