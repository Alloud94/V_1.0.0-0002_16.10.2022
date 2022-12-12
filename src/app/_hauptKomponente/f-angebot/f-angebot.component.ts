import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Components
import { MetainformationenComponent } from 'src/app/_popupKomponente/metainformationen/metainformationen.component';
import { KonditionenComponent } from 'src/app/_popupKomponente/konditionen/konditionen.component';
import { BelegeComponent } from 'src/app/_popupKomponente/belege/belege.component';
import { LoeschenComponent } from 'src/app/_popupKomponente/loeschen/loeschen.component';
import { NotizenComponent } from 'src/app/_popupKomponente/notizen/notizen.component';
import { RechnungsadresseComponent } from 'src/app/_popupKomponente/rechnungsadresse/rechnungsadresse.component';
import { UmwandelnComponent } from 'src/app/_popupKomponente/umwandeln/umwandeln.component';
import { PositionComponent } from 'src/app/_popupKomponente/position/position.component';
import { TextpositionComponent } from 'src/app/_popupKomponente/textposition/textposition.component';
import { AnsprechpartnerComponent } from 'src/app/_popupKomponente/ansprechpartner/ansprechpartner.component';
import { KalkulationComponent } from 'src/app/_popupKomponente/kalkulation/kalkulation.component';

// Interfaces
import { Projekt } from 'src/app/_interfaces/projekt';
import { Kunde } from 'src/app/_interfaces/kunde';
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { Position } from 'src/app/_interfaces/position';
import { ProjektKonditionen } from 'src/app/_interfaces/projektKonditionen';
import { Beleg } from 'src/app/_interfaces/beleg';
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';

@Component({
  selector: 'app-f-angebot',
  templateUrl: './f-angebot.component.html',
  styleUrls: ['./f-angebot.component.sass']
})
export class FAngebotComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';
  vorgangsID:number=0;
  projekt?:Projekt[];
  kunde?:Kunde[];
  partner?:Ansprechpartner[];
  position?:Position[];
  kundenID:number=0;
  partnerID:number=0;
  adresseID:number=0;
  adresse?:RechnungsAdresse[];
  zahlungskonditionen?:ProjektKonditionen[];
  zahlungsart?:ProjektKonditionen[];
  zahlungskonditionenID:number=0;
  zahlungsartID:number=0;
  beleg?:Beleg[];
  isLoading = true;


  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService,
              private route: ActivatedRoute,
              private getService: GetService) { }


  ngOnInit(): void {
    this.vorgangsID = this.route.snapshot.params['id'];
    this.loadPositionen();
    this.loadKopfdaten();
  }


  loadPositionen(){

  }

  loadKopfdaten(){
    this.getService.getAngebot(this.vorgangsID).subscribe(res => {
      
      this.projekt = res;

      this.kundenID = Number(this.projekt[0].kundenID);
      this.partnerID = Number(this.projekt[0].ansprechpartnerID);
      this.adresseID = Number(this.projekt[0].rechnungsadressenID);

      this.zahlungskonditionenID = Number(this.projekt[0].zahlungsKonditionenID);
      this.zahlungsartID = Number(this.projekt[0].zahlungsArtenID);

      this.getService.getKunde(Number(this.projekt[0].kundenID)).subscribe(res =>{
        this.kunde = res;
      });
  
      this.getService.getPartner(Number(this.projekt[0].ansprechpartnerID)).subscribe(res => {
        this.partner = res;
        this.isLoading = false;
      });

    });

  }

  
  //Status
  status =  [
    {status: 'Offen'},
    {status: 'In Bearbeitung'},
    {status: 'Abgeschlossen'}
  ]

  //Positionen
  positionen = [
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
    {nummer: '001', beschrieb: 'Landingpage', untertext1: 'Text', untertext2: 'Text', menge: '1', einheit: 'Pauschal', ep: '150.00', rabatt: '0', endpreis: '150.00'},
  ]

  totalVorSteuer = "150.00";
  steuer = "0.00";
  totalNachSteuer = "150.00";

// ### Funktionen ###
  deletePosition(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  save(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

// ### Popup Dialoge ###

  openMetaInformationen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";
    dialogConfig.data = this.vorgangsID;

    const modalDialog = this.matDialog.open(MetainformationenComponent, dialogConfig);
  }

  openKalkulation() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(KalkulationComponent, dialogConfig);
  }

  openKonditionen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";
    dialogConfig.data = [
      {za: this.zahlungsartID},
      {zk: this.zahlungskonditionenID}
    ];

    const modalDialog = this.matDialog.open(KonditionenComponent, dialogConfig);
  }

  openBelege() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(BelegeComponent, dialogConfig);
  }

  openLoeschen() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(LoeschenComponent, dialogConfig);
  }

  openNotizen(id :number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";
    dialogConfig.data = id;

    const modalDialog = this.matDialog.open(NotizenComponent, dialogConfig);

    modalDialog.afterClosed().subscribe( id => {
        this.ngOnInit();
    });  

  }

  openAnsprechpartner() {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id = "modaltwo-component";
      dialogConfig.height = "510px";
      dialogConfig.width = "894px";
      dialogConfig.data = this.kundenID;

      const modalDialog = this.matDialog.open(AnsprechpartnerComponent, dialogConfig);

      modalDialog.afterClosed().subscribe( id =>{
        if(id!=null){
          this.partnerID = id;
        }
      });  
  }

  openRechnungsadresse() {
    if(this.kundenID){
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.id = "modaltwo-component";
      dialogConfig.height = "510px";
      dialogConfig.width = "894px";
      dialogConfig.data = this.kundenID;

      const modalDialog = this.matDialog.open(RechnungsadresseComponent, dialogConfig);

      modalDialog.afterClosed().subscribe( id => {
        if(id!=null){
          this.adresseID = id;
        }
      });  


    }else if(!this.kundenID){
      this.notificationService.notificationFail("Kunde nicht ausgewählt!");
    }

  }

  openUmwandeln() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(UmwandelnComponent, dialogConfig);
  }

  openTextposition() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(TextpositionComponent, dialogConfig);
  }

  openPosition() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(PositionComponent, dialogConfig);
  }
}
