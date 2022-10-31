import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-generate-kunde',
  templateUrl: './generate-kunde.component.html',
  styleUrls: ['./generate-kunde.component.sass']
})
export class GenerateKundeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenerateKundeComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
