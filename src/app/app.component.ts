import { Component, OnInit } from '@angular/core';
import { AutoLogOfServiceService } from './_service/auto-log-of-service/auto-log-of-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'V_1.0.0-0002_16.10.2022';

  constructor(private autoLogOfService: AutoLogOfServiceService){}


  ngOnInit(): void {
    this.autoLogOfService.check();
  }


}
