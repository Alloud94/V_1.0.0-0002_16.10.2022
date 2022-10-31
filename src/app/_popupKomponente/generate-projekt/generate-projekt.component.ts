import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-generate-projekt',
  templateUrl: './generate-projekt.component.html',
  styleUrls: ['./generate-projekt.component.sass']
})
export class GenerateProjektComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenerateProjektComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
