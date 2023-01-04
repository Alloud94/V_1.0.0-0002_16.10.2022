import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {
  isLoading = true;
  logo:string = 'assets/img/logo/Logo.png';

  constructor() { }

  ngOnInit(): void {
    this.isLoading = false;
  }

}
