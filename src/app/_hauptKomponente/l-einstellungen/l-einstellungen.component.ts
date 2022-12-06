import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';

// Components
import { GruppenComponent } from 'src/app/_popupKomponente/gruppen/gruppen.component';

// Services
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { Gruppen } from 'src/app/_interfaces/gruppen';
import { Softwareinfos } from 'src/app/_interfaces/softwareInfos';

@Component({
  selector: 'app-l-einstellungen',
  templateUrl: './l-einstellungen.component.html',
  styleUrls: ['./l-einstellungen.component.sass']
})
export class LEinstellungenComponent implements OnInit {
  zahlungsArten?:Gruppen[];
  zahlungsKondi?:Gruppen[];
  artikelGruppen?:Gruppen[];
  kundenGruppen?:Gruppen[];
  einheiten?:Gruppen[];
  software?:Softwareinfos[];
  isLoading = true;


  constructor(public matDialog: MatDialog, 
              private getService: GetService,
              private notificationService: NotificationService) { }

  

  ngOnInit(): void {
    this.loadValue();
  }


  //Darstellung
  fHoptions = [
    {fHoption: 'Segoe Print'},
  ];

  lToptions = [
    {lToption: 'Robot'},
  ]

  modes = [
    {mode: 'Original'},
  ]


  // ### Funktionen ###

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  // ### Lade bestehende Informationen ###
  loadValue(){
    this.getService.getZahlungsArten().subscribe(res => {
      this.zahlungsArten = res;
    });

    this.getService.getZahlungsKonditionen().subscribe(res => {
      this.zahlungsKondi = res;
    });

    this.getService.getKundenGruppen().subscribe(res => {
      this.kundenGruppen = res;
    });

    this.getService.getArtikelgruppen().subscribe(res => {
      this.artikelGruppen = res;
    });

    this.getService.getEinheiten().subscribe(res => {
      this.einheiten = res;
    });

    this.getService.getSoftwareInfos().subscribe(res => {
      this.software = res;
      this.isLoading = false;
    });

  
  }


  // ### Popup Dialoge ###

  openGruppen(value: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";
    dialogConfig.data = value;

    const modalDialog = this.matDialog.open(GruppenComponent, dialogConfig);

  }

}
