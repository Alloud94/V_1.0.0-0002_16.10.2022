import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.component.html',
  styleUrls: ['./einstellungen.component.sass']
})
export class EinstellungenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public dialogRef: MatDialogRef<EinstellungenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
