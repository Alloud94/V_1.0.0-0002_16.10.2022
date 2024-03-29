import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

// Interfaces
import { HttpResponse } from 'src/app/_interfaces/http-response';
import { Login } from 'src/app/_interfaces/login';
import { LoginResponse } from 'src/app/_interfaces/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    const url = environment.API_EndPoint_Login + 'login.php?login=true&username=' + username + '&password=' + password;
    const loginData: Login = {username: username, password: password};
    return this.httpClient.post<LoginResponse>(url, loginData).pipe(map(data => data));
  }

  token(username:string): Observable<HttpResponse>{
    const url = environment.API_EndPoint_Empty + 'profil/profil.php?quest=setToken&username=' + username;
    return this.httpClient.post<HttpResponse>(url, username).pipe(map(data => data));
  }

  logoutUser(username:String){
    console.log(username);
    const url = environment.API_EndPoint_Empty + 'profil/profil.php?quest=deleteToken&username=' + username;
    return this.httpClient.post<HttpResponse>(url, username).pipe(map(data => data));
  }

  getToken() {
    return !!localStorage.getItem('username');
  }
}

 