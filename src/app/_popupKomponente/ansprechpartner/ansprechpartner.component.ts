import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { NotizenComponent } from '../notizen/notizen.component';

@Component({
  selector: 'app-ansprechpartner',
  templateUrl: './ansprechpartner.component.html',
  styleUrls: ['./ansprechpartner.component.sass']
})
export class AnsprechpartnerComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  //Ansprechpartner (Kunde)
  ansprechpartner = [
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
    {anrede: 'Herr', vorname: 'Thomas', nachname: 'Brändle'},
  ]

  anrede = [
    {anrede: 'Herr'},
    {anrede: 'Frau'}
  ]

  vorname = "Thomas";
  nachname = "Brändle";
  email = "thomasbraendle94@gmail.com";
  telefon = "+41 79 520 65 11";
  mobile = "+41 79 520 65 11";
  funktion = "Geschäftsführer";

  notiz = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimatasanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justoduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

  constructor(public matDialog: MatDialog, public dialogRef: MatDialogRef<AnsprechpartnerComponent>) { }

  openNotizen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modaltwo-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
