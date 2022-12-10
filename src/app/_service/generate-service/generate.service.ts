import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

// Interfaces
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { HttpResponse } from 'src/app/_interfaces/http-response';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  constructor(private httpClient: HttpClient) { }

// ### Projekt erstellen ###




/* #### ANSPRECHPARTNER ERSTELLEN #### */

createPartner(id:number): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'create/create.php?quest=createPartner&userid='+username+'&id='+id;
  return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
}


}
