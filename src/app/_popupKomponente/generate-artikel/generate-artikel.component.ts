import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-generate-artikel',
  templateUrl: './generate-artikel.component.html',
  styleUrls: ['./generate-artikel.component.sass']
})
export class GenerateArtikelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenerateArtikelComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
