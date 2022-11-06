import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-projekt-kundendaten',
  templateUrl: './projekt-kundendaten.component.html',
  styleUrls: ['./projekt-kundendaten.component.sass']
})
export class ProjektKundendatenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<ProjektKundendatenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }


}
