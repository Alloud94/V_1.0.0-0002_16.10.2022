import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.sass']
})
export class AHeaderComponent implements OnInit {
  logoKlein:string = 'assets/img/logo/LogoSchriftzug.png';
  profil:string = 'assets/img/icon/user.png';
  search:string = 'assets/img/icon/search.png';

  constructor() { }

  ngOnInit(): void {
  }

}
