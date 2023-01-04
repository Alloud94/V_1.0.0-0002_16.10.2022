import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

// Component
import { JahresabschlussComponent } from 'src/app/_popupKomponente/jahresabschluss/jahresabschluss.component';
import { StatistikenComponent } from 'src/app/_popupKomponente/statistiken/statistiken.component';
import { LogoComponent } from 'src/app/_popupKomponente/logo/logo.component';
import { EinstellungenComponent } from 'src/app/_popupKomponente/einstellungen/einstellungen.component';
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';
import { GenerateMitarbeiterComponent } from 'src/app/_popupKomponente/generate-mitarbeiter/generate-mitarbeiter.component';
import { DokumentenverwaltungComponent } from 'src/app/_popupKomponente/dokumentenverwaltung/dokumentenverwaltung.component';

// Services
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { UnternehmensInformationen } from 'src/app/_interfaces/unternehmenInfos';
import { Mitarbeiter } from 'src/app/_interfaces/mitarbeiter';

@Component({
  selector: 'app-k-unternehmen',
  templateUrl: './k-unternehmen.component.html',
  styleUrls: ['./k-unternehmen.component.sass']
})
export class KUnternehmenComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';
  unternehmenInfos?:UnternehmensInformationen[];
  mitarbeiter?:Mitarbeiter[];
  isLoading = true;

  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService,
              private getService: GetService) { }

  ngOnInit(): void {
    this.getService.getUnternehmenInfos().subscribe(res => {
      this.unternehmenInfos = res;
    })
    this.getService.getMitarbeiter().subscribe(res => {
      this.mitarbeiter = res;
      this.isLoading = false;
    })
  }


// ### Funktionen ###

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }



// ### Popup Dialoge ###

  openJahresabschluss() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(JahresabschlussComponent, dialogConfig);
  }

  openStatistiken() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(StatistikenComponent, dialogConfig);
  }

  openDokumentenverwaltung() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(DokumentenverwaltungComponent, dialogConfig);
  }


  openLogoEinstellungen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(LogoComponent, dialogConfig);
  }

  openEinstellungen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(EinstellungenComponent, dialogConfig);
  }

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }

  openGenerateMitarbeiter() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateMitarbeiterComponent, dialogConfig);
  }



}
