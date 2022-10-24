import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-dashboard',
  templateUrl: './c-dashboard.component.html',
  styleUrls: ['./c-dashboard.component.sass']
})
export class CDashboardComponent implements OnInit {
  logoUnternehmen:string = 'assets/img/medien/TB_Logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
