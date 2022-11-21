import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-metainformationen',
  templateUrl: './metainformationen.component.html',
  styleUrls: ['./metainformationen.component.sass']
})
export class MetainformationenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';

  //Infos
  vorgangsNummer = "XX XX-XXXX";
  vorgangsArt = "Vorgangsart";
  vorgang = "Thomas Brändle";
  status = "Offen";
  datumErfasst = "16.08.2022 | 16:04 Uhr";
  userErfasst = "Thomas Brändle";
  datumZuletztGespeichert = "20.08.2022 | 08.50 Uhr";
  userZuletztGespeichert = "Thomas Brändle";

  constructor(public dialogRef: MatDialogRef<MetainformationenComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();

  }

}
