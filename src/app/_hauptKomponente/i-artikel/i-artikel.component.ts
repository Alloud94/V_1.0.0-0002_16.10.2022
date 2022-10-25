import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-artikel',
  templateUrl: './i-artikel.component.html',
  styleUrls: ['./i-artikel.component.sass']
})
export class IArtikelComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';

  constructor() { }

  ngOnInit(): void {
  }

}
