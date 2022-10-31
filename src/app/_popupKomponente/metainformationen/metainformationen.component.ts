import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-metainformationen',
  templateUrl: './metainformationen.component.html',
  styleUrls: ['./metainformationen.component.sass']
})
export class MetainformationenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MetainformationenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
