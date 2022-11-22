import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { HttpResponse } from '../_interfaces/http-response';

import { Login } from '../_interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse> {
    const url = environment.API_EndPoint_Login + 'login.php';
    const loginData: Login = {username: username, password: password};
    return this.httpClient.post<HttpResponse>(url, loginData).pipe(map(data => data));
  }

}

 