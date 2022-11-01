import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.sass']
})
export class PositionComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<PositionComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
