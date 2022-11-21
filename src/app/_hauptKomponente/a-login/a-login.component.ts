import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/_service/login.service';

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

  constructor(private httpClient: HttpClient,
              private loginService: LoginService) { }

  ngOnInit(): void {
    let userID = "";
  }
            

  //Loginform
  userName = "";
  password = "";

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });

  login(values: any) {
    let formData = new FormData();
    formData.append('username', values.userName);
    formData.append('password', values.password);
      this.loginService.login(formData).subscribe(res => {
        if(res.result === 'success'){
          console.log("Anmeldung erfolgreich");
        }else{
          console.log("Anmeldung fehlgeschlagen");
        }
        console.log("FAIL");
      });
      console.log("FAIL");
    }

}
