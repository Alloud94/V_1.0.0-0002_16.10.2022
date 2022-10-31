import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-statistiken',
  templateUrl: './statistiken.component.html',
  styleUrls: ['./statistiken.component.sass']
})
export class StatistikenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StatistikenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}

