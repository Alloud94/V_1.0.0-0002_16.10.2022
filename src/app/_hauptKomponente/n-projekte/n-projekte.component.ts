import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-projekte',
  templateUrl: './n-projekte.component.html',
  styleUrls: ['./n-projekte.component.sass']
})
export class NProjekteComponent implements OnInit {
  search:string = 'assets/img/icon/search.png';

  constructor() { }

  ngOnInit(): void {
  }

}
