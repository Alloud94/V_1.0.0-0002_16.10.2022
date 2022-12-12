import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

// Interfaces
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { HttpResponse } from 'src/app/_interfaces/http-response';
import { Projekt } from 'src/app/_interfaces/projekt';

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

createAdress(id:number): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'create/create.php?quest=createAdresse&userid='+username+'&id='+id;
  return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
}

createAngebot(value:Projekt): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'create/create.php?quest=createAngebot&userid='+username+'&kundenID='+value.kundenID+'&adressenID='+value.rechnungsadressenID+'&partnerID='+value.ansprechpartnerID+'&zaID='+value.zahlungsArtenID+'&zkID='+value.zahlungsKonditionenID+'&notizen='+value.notizen;
  return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
}


}
