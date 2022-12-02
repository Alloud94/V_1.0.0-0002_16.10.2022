import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_service/login.service';
import { Login } from 'src/app/_interfaces/login';
import { Router } from '@angular/router';
import { AutoLogOfServiceService } from 'src/app/_service/auto-log-of-service/auto-log-of-service.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.sass']
})
export class ALoginComponent implements OnInit {
  logo:string = 'assets/img/logo/Logo.png';
  username:string = 'assets/img/icon/user.png';
  passwort:string = 'assets/img/icon/vorhangschloss.png';
  userID: any;
  loginData: Login[] = [];
  isLoading = false;

  constructor(private loginService: LoginService, 
              private router: Router, 
              private logOfService: AutoLogOfServiceService) { }

  ngOnInit(): void {
    localStorage.removeItem('username');
  }

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });

  login(loginData: Login) {
    this.isLoading = true;
    this.loginService.login(loginData.username, loginData.password).subscribe(res => {
      if(res.result == 'success'){
        console.log("Anmeldung erfolgreich");
        this.token(loginData.username);
      }else if(res.result == 'fail'){
        console.log("Anmeldung fehlgeschlagen");
      }
    });
    }

  token(username: string) {
    return this.loginService.token(username).subscribe(res => {
      if(res.result == "Token erstellt"){
        console.log("Token wurde erstellt");
        localStorage.setItem('username', username);
        this.router.navigate(['']);
        this.isLoading = false;
      }else{
      console.log("Token wurde nicht erstellt.");
      }
    });
  }

}
