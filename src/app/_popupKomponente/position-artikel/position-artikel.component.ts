import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-position-artikel',
  templateUrl: './position-artikel.component.html',
  styleUrls: ['./position-artikel.component.sass']
})
export class PositionArtikelComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  search:string = 'assets/img/icon/search.png';

  constructor(public dialogRef: MatDialogRef<PositionArtikelComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
