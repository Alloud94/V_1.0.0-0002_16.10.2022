import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-unternehmen',
  templateUrl: './k-unternehmen.component.html',
  styleUrls: ['./k-unternehmen.component.sass']
})
export class KUnternehmenComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  constructor() { }

  ngOnInit(): void {
  }

}
