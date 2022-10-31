import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-zahlungskonditionen',
  templateUrl: './zahlungskonditionen.component.html',
  styleUrls: ['./zahlungskonditionen.component.sass']
})
export class ZahlungskonditionenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ZahlungskonditionenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
