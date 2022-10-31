import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-textposition',
  templateUrl: './textposition.component.html',
  styleUrls: ['./textposition.component.sass']
})
export class TextpositionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TextpositionComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
