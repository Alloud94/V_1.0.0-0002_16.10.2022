import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

// Interfaces
import { HttpResponse } from 'src/app/_interfaces/http-response';
import { Gruppen } from 'src/app/_interfaces/gruppen';
import { UnternehmensInformationen } from 'src/app/_interfaces/unternehmenInfos';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  

}
