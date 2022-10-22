import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-passwort',
  templateUrl: './b-passwort.component.html',
  styleUrls: ['./b-passwort.component.sass']
})
export class BPasswortComponent implements OnInit {
  logo:string = 'assets/img/logo/Logo.png';
  username:string = 'assets/img/icon/user.png';

  constructor() { }

  ngOnInit(): void {
  }

}
