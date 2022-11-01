import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-jahresabschluss',
  templateUrl: './jahresabschluss.component.html',
  styleUrls: ['./jahresabschluss.component.sass']
})
export class JahresabschlussComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<JahresabschlussComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}