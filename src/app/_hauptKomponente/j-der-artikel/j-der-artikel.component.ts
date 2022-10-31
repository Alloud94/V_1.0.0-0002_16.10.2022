import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-der-artikel',
  templateUrl: './j-der-artikel.component.html',
  styleUrls: ['./j-der-artikel.component.sass']
})
export class JDerArtikelComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  constructor() { }

  ngOnInit(): void {
  }

}
