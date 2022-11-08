import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-auftrag-abschliessen',
  templateUrl: './auftrag-abschliessen.component.html',
  styleUrls: ['./auftrag-abschliessen.component.sass']
})
export class AuftragAbschliessenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  constructor(public dialogRef: MatDialogRef<AuftragAbschliessenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
