import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-generate-mitarbeiter',
  templateUrl: './generate-mitarbeiter.component.html',
  styleUrls: ['./generate-mitarbeiter.component.sass']
})
export class GenerateMitarbeiterComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public dialogRef: MatDialogRef<GenerateMitarbeiterComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
