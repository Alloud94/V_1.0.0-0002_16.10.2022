import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-sidebar',
  templateUrl: './b-sidebar.component.html',
  styleUrls: ['./b-sidebar.component.sass']
})
export class BSidebarComponent implements OnInit {
  home:string = 'assets/img/icon/zuhause.png';
  projekt:string = 'assets/img/icon/projekt.png';
  kunde:string = 'assets/img/icon/kunde.png';
  artikel:string = 'assets/img/icon/dienstleistungen.png';
  unternehmen:string = 'assets/img/icon/unternehmen.png';
  einstellungen:string = 'assets/img/icon/die-einstellungen.png';
  logout:string = 'assets/img/icon/logout.png';

  constructor() { }

  ngOnInit(): void {
  }

}
