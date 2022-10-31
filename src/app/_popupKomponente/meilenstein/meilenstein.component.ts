import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-meilenstein',
  templateUrl: './meilenstein.component.html',
  styleUrls: ['./meilenstein.component.sass']
})
export class MeilensteinComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeilensteinComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
