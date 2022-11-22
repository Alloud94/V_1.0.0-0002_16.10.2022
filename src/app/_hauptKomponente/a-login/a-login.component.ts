import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_service/login.service';
import { Login } from 'src/app/_interfaces/login';

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

  constructor(private httpClient: HttpClient,
              private loginService: LoginService) { }

  ngOnInit(): void {
    let userID = "";
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
    console.log(loginData);
      this.loginService.login(loginData.username, loginData.password).subscribe(res => {
        if(res.result === 'success'){
          console.log("Anmeldung erfolgreich");
        }else{
          console.log("Anmeldung fehlgeschlagen");
        }
        console.log("FAIL1");
      });
      console.log("FAIL");
    }

}
