import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class EinstellungenService {

  constructor(private httpClient: HttpClient) { }

  getResponse() {
    const url = environment.API_EndPoint_Empty + 'einstellungen/einstellungen.php?quest=getInfos';
    return this.httpClient.get(url).pipe(map(data => data));
  }

}
