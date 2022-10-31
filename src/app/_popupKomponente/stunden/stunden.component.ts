import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-stunden',
  templateUrl: './stunden.component.html',
  styleUrls: ['./stunden.component.sass']
})
export class StundenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StundenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
