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
import { Ansprechpartner } from 'src/app/_interfaces/ansprechpartner';
import { RechnugsAdresse } from 'src/app/_interfaces/rechnungsAdresse';
import { Softwareinfos } from 'src/app/_interfaces/softwareInfos';


@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpClient: HttpClient) { }

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

/* #### ANSPRECHPARTNER #### */

getAnsprechpartner(): Observable<Ansprechpartner[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getAnsprechpartner';
  return this.httpClient.get<Ansprechpartner[]>(url).pipe(map(data => data));
}

/* #### ANSPRECHPARTNER #### */

getRechnungsadresse(): Observable<RechnugsAdresse[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getRechnungsadresse';
  return this.httpClient.get<RechnugsAdresse[]>(url).pipe(map(data => data));
}



/* #### GRUPPEN #### */

getZahlungsArten(): Observable<Gruppen[]> {
  const url = environment.API_EndPoint_Empty + 'get/gruppen.php?quest=getZahlungsarten';
  return this.httpClient.get<Gruppen[]>(url).pipe(map(data => data));
}

getZahlungsKonditionen(): Observable<Gruppen[]> {
  const url = environment.API_EndPoint_Empty + 'get/gruppen.php?quest=getZahlungskonditionen';
  return this.httpClient.get<Gruppen[]>(url).pipe(map(data => data));
}

getKundenGruppen(): Observable<Gruppen[]> {
  const url = environment.API_EndPoint_Empty + 'get/gruppen.php?quest=getKundengruppen';
  return this.httpClient.get<Gruppen[]>(url).pipe(map(data => data));
}

getArtikelgruppen(): Observable<Gruppen[]> {
  const url = environment.API_EndPoint_Empty + 'get/gruppen.php?quest=getArtikelgruppen';
  return this.httpClient.get<Gruppen[]>(url).pipe(map(data => data));
}

getEinheiten(): Observable<Gruppen[]> {
  const url = environment.API_EndPoint_Empty + 'get/gruppen.php?quest=getEinheiten';
  return this.httpClient.get<Gruppen[]>(url).pipe(map(data => data));
}

/* ### HERSTELLER INFORMATIONEN ### */

getSoftwareInfos(): Observable<Softwareinfos[]> {
  const url = environment.API_EndPoint_Empty + 'get/software.php?quest=getSoftwareInfos';
  return this.httpClient.get<Softwareinfos[]>(url).pipe(map(data => data));
}


}
