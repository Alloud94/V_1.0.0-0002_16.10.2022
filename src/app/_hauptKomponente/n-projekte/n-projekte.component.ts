import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';

// Components
import { GenerateProjektComponent } from 'src/app/_popupKomponente/generate-projekt/generate-projekt.component';

// Interfaces
import { Projekt } from 'src/app/_interfaces/projekt';

@Component({
  selector: 'app-n-projekte',
  templateUrl: './n-projekte.component.html',
  styleUrls: ['./n-projekte.component.sass']
})
export class NProjekteComponent implements OnInit {
  searchIcon:string = 'assets/img/icon/search.png';
  projekt?:Projekt[];
  isLoading = true;

  // Konstruktor für die Popup-Dialoge
  constructor(public matDialog: MatDialog,
              private notificationService: NotificationService,
              private getService: GetService,
              private route: Router) { }

  ngOnInit(): void {
    this.getService.getProjekte().subscribe(res => {
      this.projekt = res;
      this.isLoading = false;
    });
  }

  
  openProject(id:number, art:string){
    if(art == "Angebot"){
      this.route.navigate(['/projekte/angebot', id]);
    }else if(art == "Auftrag"){
      this.route.navigate(['/projekte/auftrag/', id]);
    }else{
      this.notificationService.notificationFail("Fehler");
    }
  }


  openGenerateProject() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "510px";
    dialogConfig.width = "894px";

    const modalDialog = this.matDialog.open(GenerateProjektComponent, dialogConfig);
  }

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }




}
