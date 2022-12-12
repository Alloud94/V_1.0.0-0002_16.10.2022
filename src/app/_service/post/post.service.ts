import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

// Interfaces
import { HttpResponse } from 'src/app/_interfaces/http-response';
import { Gruppen } from 'src/app/_interfaces/gruppen';
import { UnternehmensInformationen } from 'src/app/_interfaces/unternehmenInfos';
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { NgForm } from '@angular/forms';
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';
import { __values } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

/* #### UPDATE ANSPRECHPARTNER #### */

updatePartner(value:Ansprechpartner): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'update/kunde.php?quest=updatePartner&id='+value.id+'&anrede='+value.anrede+'&name='+value.name+'&mail='+value.email+'&telefon='+value.telefon+'&funktion='+value.funktion+'&notizen='+value.notizen+'&userID='+username;
  return this.httpClient.post<HttpResponse>(url, value).pipe(map(data => data));
}

/* #### DELETE ANSPRECHPARTNER #### */

deletePartner(id:number): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'delete/kunde.php?quest=deletePartner&id='+id+'&userID='+username;
  return this.httpClient.post<HttpResponse>(url, id).pipe(map(data => data));
}

/* #### UPDATE ADRESSE #### */

updateAdresse(value:RechnungsAdresse): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'update/kunde.php?quest=updateAdresse&id='+value.id+'&adresse='+value.adresse+'&ortschaft='+value.ortschaft+'&land='+value.land+'&userID='+username;
  return this.httpClient.post<HttpResponse>(url, value).pipe(map(data => data));
}

/* #### DELETE ADRESSE #### */

deleteAdresse(id:number): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'delete/kunde.php?quest=deleteAdresse&id='+id+'&userID='+username;
  return this.httpClient.post<HttpResponse>(url, id).pipe(map(data => data));
}

/* #### UPDATE NOTIZEN #### */

updateNotizen(id:number, notizen:string): Observable<HttpResponse>{
  const url = environment.API_EndPoint_Empty + 'update/projekt.php?quest=updateNotizen&id='+id+'&notizen='+notizen;
  return this.httpClient.post<HttpResponse>(url, id).pipe(map(data => data));
}




}
