import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.sass']
})
export class AHeaderComponent implements OnInit {
  logoKlein:string = 'assets/img/logo/LogoSchriftzug.png';
  profil:string = 'assets/img/icon/user.png';
  searchIcon:string = 'assets/img/icon/search.png';
  userName = localStorage.getItem("username");
  permalink = "";
  path = "";
  id = "";

  constructor(private notificationService: NotificationService,
              private route: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit(): void {
  }

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }

  permaLink(){
    this.path = String(this.route.snapshot.routeConfig?.path);
    this.id = String(this.route.snapshot.params['id']);
    console.log(this.path);
    if(this.path == 'projekte'){
      this.permalink = "Projekte";
      this.titleService.setTitle("Goffini - Projekte");
      return true;
    }else if (this.path == 'kunden'){
      this.permalink = "Kunden";
      this.titleService.setTitle("Goffini - Kunden");
      return true;
    }else if (this.path == 'artikel'){
      this.permalink = "Artikel";
      this.titleService.setTitle("Goffini - Artikel");
      return true;
    }else if (this.path == 'unternehmen'){
      this.permalink = "Unternehmen";
      this.titleService.setTitle("Goffini - Unternehmen");
      return true;
    }else if (this.path == 'einstellungen'){
      this.permalink = "Einstellungen";
      this.titleService.setTitle("Goffini - Einstellungen");
      return true;
    }else if (this.path == 'profil'){
      this.permalink = "Profil";
      this.titleService.setTitle("Goffini - Profil");
      return true;
    }else if (this.path == 'projekte/auftrag/:id'){
      this.permalink = "Projekte -> AB 20-" + this.id;
      this.titleService.setTitle("Goffini - Projekte -> AB 20-" + this.id);
      return true;
    }else if (this.path == 'projekte/angebot/:id'){
      this.permalink = "Projekte -> AN 10-" + this.id;
      this.titleService.setTitle("Goffini - Projekte -> AN 10-" + this.id);
      return true;
    }else if (this.path == 'kunden/kunde/:id'){
      this.permalink = "Kunden -> KU 40-" + this.id;
      this.titleService.setTitle("Goffini - Kunden -> KU 40-" + this.id);
      return true;
    }else if (this.path == 'artikel/der-artikel/:id'){
      this.permalink = "Artikel -> AR 60-" + this.id;
      this.titleService.setTitle("Goffini - Artikel -> AR 60-" + this.id);
      return true;
    }else{
      this.titleService.setTitle("Goffini");
      return false;
    }
  }

}
