import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_service/login/login.service';
import { Login } from 'src/app/_interfaces/login';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_service/notification/notification.service';

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
              private notificationService: NotificationService) { }

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
        if(this.token(loginData.username)){
          this.notificationService.notificationSuccess("Login erfolgreich");
          console.log("Anmeldung erfolgreich");
        }else{
          console.log("Anmeldung fehlgeschlagen");
          this.isLoading = false;
          this.router.navigate(['login']); 
          this.notificationService.notificationFail("Login fehlgeschlagen");
        }
      }else if(res.result == 'fail'){
        console.log("Anmeldung fehlgeschlagen");
        this.isLoading = false;
        this.router.navigate(['login']); 
        this.notificationService.notificationFail("Login fehlgeschlagen");
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
      this.router.navigate(['login']); 
      this.notificationService.notificationFail("Login fehlgeschlagen");
    }
    });
  }

}
