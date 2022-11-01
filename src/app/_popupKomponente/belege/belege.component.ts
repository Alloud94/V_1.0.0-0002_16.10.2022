import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-belege',
  templateUrl: './belege.component.html',
  styleUrls: ['./belege.component.sass']
})
export class BelegeComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public dialogRef: MatDialogRef<BelegeComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
