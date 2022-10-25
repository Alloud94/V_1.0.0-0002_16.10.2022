import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-kunden',
  templateUrl: './g-kunden.component.html',
  styleUrls: ['./g-kunden.component.sass']
})
export class GKundenComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';

  constructor() { }

  ngOnInit(): void {
  }

}
