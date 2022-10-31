import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-kundendaten',
  templateUrl: './kundendaten.component.html',
  styleUrls: ['./kundendaten.component.sass']
})
export class KundendatenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<KundendatenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
