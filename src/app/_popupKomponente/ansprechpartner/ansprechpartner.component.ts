import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ansprechpartner',
  templateUrl: './ansprechpartner.component.html',
  styleUrls: ['./ansprechpartner.component.sass']
})
export class AnsprechpartnerComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public dialogRef: MatDialogRef<AnsprechpartnerComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
