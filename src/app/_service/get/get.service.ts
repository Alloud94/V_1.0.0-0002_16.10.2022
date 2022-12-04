import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

// Interfaces
import { HttpResponse } from 'src/app/_interfaces/http-response';
import { Gruppen } from 'src/app/_interfaces/gruppen';
import { UnternehmensInformationen } from 'src/app/_interfaces/unternehmenInfos';
import { Kunde } from 'src/app/_interfaces/kunde';
import { Artikel } from 'src/app/_interfaces/artikel';
import { Mitarbeiter } from 'src/app/_interfaces/mitarbeiter';


@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpClient: HttpClient) { }

/* #### EINSTELLUNGEN #### */

  getArtikelgruppen(): Observable<Gruppen> {
    const url = environment.API_EndPoint_Empty + 'get/einstellungen.php?quest=getArtikelgruppen';
    return this.httpClient.get<Gruppen>(url).pipe(map(data => data));
  }

/* #### DASHBOARD #### */

getUnternehmenInfos(): Observable<UnternehmensInformationen[]>{
  const url = environment.API_EndPoint_Empty + 'get/unternehmen.php?quest=getUnternehmenInfos';
  return this.httpClient.get<UnternehmensInformationen[]>(url).pipe(map(data => data));
}

/* #### MITARBEITER #### */

getMitarbeiter(): Observable<Mitarbeiter[]>{
  const url = environment.API_EndPoint_Empty + 'get/unternehmen.php?quest=getMitarbeiter';
  return this.httpClient.get<Mitarbeiter[]>(url).pipe(map(data => data));
}

/* #### KUNDE #### */

  getKunden(): Observable<Kunde[]>{
    const url = environment.API_EndPoint_Empty + 'get/vorgaenge.php?quest=getKunden';
    return this.httpClient.get<Kunde[]>(url).pipe(map(data => data));
}

/* #### ARTIKEL #### */

  getArtikel(): Observable<Artikel[]>{
    const url = environment.API_EndPoint_Empty + 'get/vorgaenge.php?quest=getArtikel';
    return this.httpClient.get<Artikel[]>(url).pipe(map(data => data));
  }


}
