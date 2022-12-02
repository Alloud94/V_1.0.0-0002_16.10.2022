import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-sidebar',
  templateUrl: './b-sidebar.component.html',
  styleUrls: ['./b-sidebar.component.sass']
})
export class BSidebarComponent implements OnInit {
  home:string = 'assets/img/icon/zuhause.png';
  projekt:string = 'assets/img/icon/projekt.png';
  kunde:string = 'assets/img/icon/kunde.png';
  artikel:string = 'assets/img/icon/dienstleistungen.png';
  unternehmen:string = 'assets/img/icon/unternehmen.png';
  einstellungen:string = 'assets/img/icon/die-einstellungen.png';
  logout:string = 'assets/img/icon/logout.png';
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  user = localStorage.getItem('username');

  logoutName(){
    this.logoutUser(JSON.stringify(this.user));
  }

  logoutUser(username:string){
    return this.loginService.logoutUser(username).subscribe(res =>{
      if(res.result == "success"){
        localStorage.removeItem('username');
        this.router.navigate(['login']);
      }else{
        console.log(("User konnte nicht abgemeldet werden."));
      }
    });
  }



}
