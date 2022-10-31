import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-umwandeln',
  templateUrl: './umwandeln.component.html',
  styleUrls: ['./umwandeln.component.sass']
})
export class UmwandelnComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UmwandelnComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
