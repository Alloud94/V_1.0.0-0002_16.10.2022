import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

// Interfaces
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { HttpResponse } from 'src/app/_interfaces/http-response';
import { Projekt } from 'src/app/_interfaces/projekt';
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';

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

createAdress(id:number, value:RechnungsAdresse): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'create/create.php?quest=createAdresse&adresse='+value.adresse+'&ortschaft='+value.ortschaft+'&land='+value.land+'&userid='+username+'&id='+id;
  return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
}

//update/kunde.php?quest=updateAdresse&id='+value.id+'&adresse='+value.adresse+'&ortschaft='+value.ortschaft+'&land='+value.land+'&userID='+username;

createAngebot(value:Projekt): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'create/create.php?quest=createAngebot&userid='+username+'&kundenID='+value.kundenID+'&adressenID='+value.rechnungsadressenID+'&partnerID='+value.ansprechpartnerID+'&zaID='+value.zahlungsArtenID+'&zkID='+value.zahlungsKonditionenID+'&notizen='+value.notizen;
  return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
}

createAuftrag(value:Projekt): Observable<HttpResponse>{
  let username = localStorage.getItem("username");
  const url = environment.API_EndPoint_Empty + 'create/create.php?quest=createAuftrag&userid='+username+'&kundenID='+value.kundenID+'&adressenID='+value.rechnungsadressenID+'&partnerID='+value.ansprechpartnerID+'&zaID='+value.zahlungsArtenID+'&zkID='+value.zahlungsKonditionenID+'&notizen='+value.notizen;
  return this.httpClient.get<HttpResponse>(url).pipe(map(data => data));
}

}
