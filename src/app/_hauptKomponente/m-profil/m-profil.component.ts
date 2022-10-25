import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-profil',
  templateUrl: './m-profil.component.html',
  styleUrls: ['./m-profil.component.sass']
})
export class MProfilComponent implements OnInit {
  meta:string = 'assets/img/icon/info.png';
  metaActive:string = 'assets/img/icon/infoFarbig.png';

  constructor() { }

  ngOnInit(): void {
  }

}
