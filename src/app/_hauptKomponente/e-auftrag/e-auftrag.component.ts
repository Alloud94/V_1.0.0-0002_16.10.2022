import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-auftrag',
  templateUrl: './e-auftrag.component.html',
  styleUrls: ['./e-auftrag.component.sass']
})
export class EAuftragComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  constructor() { }

  ngOnInit(): void {
  }

}
