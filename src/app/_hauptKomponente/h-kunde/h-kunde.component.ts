import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-kunde',
  templateUrl: './h-kunde.component.html',
  styleUrls: ['./h-kunde.component.sass']
})
export class HKundeComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  constructor() { }

  ngOnInit(): void {
  }

}
