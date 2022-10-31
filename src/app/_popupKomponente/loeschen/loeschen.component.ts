import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-loeschen',
  templateUrl: './loeschen.component.html',
  styleUrls: ['./loeschen.component.sass']
})
export class LoeschenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoeschenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
