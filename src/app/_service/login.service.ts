import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { HttpResponse } from '../_interfaces/http-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(data: any): Observable<HttpResponse> {
    const url = environment.API_EndPoint_Login + 'login.php';
    return this.httpClient.post<HttpResponse>(url, JSON.stringify(data)).pipe(map(data => data));
  }

}

 