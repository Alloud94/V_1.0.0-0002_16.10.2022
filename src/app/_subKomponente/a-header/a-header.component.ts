import { Component, OnInit } from '@angular/core';
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

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  search(){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


}
