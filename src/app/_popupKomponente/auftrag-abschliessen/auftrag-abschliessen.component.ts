import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-auftrag-abschliessen',
  templateUrl: './auftrag-abschliessen.component.html',
  styleUrls: ['./auftrag-abschliessen.component.sass']
})
export class AuftragAbschliessenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  budget = "150.00";
  stunden = "150.00";
  regie = "50.00";
  ertrag = "200.00";
  marge = "20";
  rechnungsbetrag = "450.00";

  constructor(public dialogRef: MatDialogRef<AuftragAbschliessenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
