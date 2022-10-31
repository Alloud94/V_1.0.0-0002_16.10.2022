import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-rechnungsadresse',
  templateUrl: './rechnungsadresse.component.html',
  styleUrls: ['./rechnungsadresse.component.sass']
})
export class RechnungsadresseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RechnungsadresseComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
