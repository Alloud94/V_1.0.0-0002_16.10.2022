import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-generate-mitarbeiter',
  templateUrl: './generate-mitarbeiter.component.html',
  styleUrls: ['./generate-mitarbeiter.component.sass']
})
export class GenerateMitarbeiterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenerateMitarbeiterComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
