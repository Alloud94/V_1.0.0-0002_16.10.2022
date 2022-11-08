import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';

  constructor(public dialogRef: MatDialogRef<LogoComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
