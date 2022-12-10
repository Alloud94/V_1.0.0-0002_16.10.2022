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
import { RechnungsAdresse } from 'src/app/_interfaces/rechnungsAdresse';
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

/* #### MITARBEITER ALLE #### */

getMitarbeiter(): Observable<Mitarbeiter[]>{
  const url = environment.API_EndPoint_Empty + 'get/unternehmen.php?quest=getMitarbeiter';
  return this.httpClient.get<Mitarbeiter[]>(url).pipe(map(data => data));
}

/* #### KUNDEN ALLE #### */

getKunden(): Observable<Kunde[]>{
  const url = environment.API_EndPoint_Empty + 'get/vorgaenge.php?quest=getKunden';
  return this.httpClient.get<Kunde[]>(url).pipe(map(data => data));
}

/* #### KUNDE EINZEL #### */

getKunde(id:number): Observable<Kunde[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getKunde&id='+id;
  return this.httpClient.get<Kunde[]>(url).pipe(map(data => data));
}



/* #### ARTIKEL ALLE #### */

getArtikel(): Observable<Artikel[]>{
  const url = environment.API_EndPoint_Empty + 'get/vorgaenge.php?quest=getArtikel';
  return this.httpClient.get<Artikel[]>(url).pipe(map(data => data));
}

/* #### ANSPRECHPARTNER ALLE #### */

getAnsprechpartner(id: number): Observable<Ansprechpartner[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getAnsprechpartner&id='+id;
  return this.httpClient.get<Ansprechpartner[]>(url).pipe(map(data => data));
}

/* #### ANSPRECHPARTNER EINZEL #### */

getPartner(id:number): Observable<Ansprechpartner[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getPartner&id='+id;
  return this.httpClient.get<Ansprechpartner[]>(url).pipe(map(data => data));
}

/* #### RECHNUNGSADRESSE ALLE #### */

getRechnungsadressen(id:number): Observable<RechnungsAdresse[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getRechnungsadressen&id='+id;
  return this.httpClient.get<RechnungsAdresse[]>(url).pipe(map(data => data));
}

/* #### RECHNUNGSADRESSE EINZEL #### */

getRechnungsadresse(id:number): Observable<RechnungsAdresse[]>{
  const url = environment.API_EndPoint_Empty + 'get/infos.php?quest=getRechnungsadresse&id='+id;
  return this.httpClient.get<RechnungsAdresse[]>(url).pipe(map(data => data));
}

/* #### GRUPPEN ALLE #### */

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
