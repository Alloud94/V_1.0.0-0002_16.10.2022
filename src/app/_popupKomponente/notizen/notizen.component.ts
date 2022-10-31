import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-notizen',
  templateUrl: './notizen.component.html',
  styleUrls: ['./notizen.component.sass']
})
export class NotizenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotizenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
