import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  @Output() changeLoading: EventEmitter<boolean>;

  constructor(private httpClient: HttpClient, private loadingService: LoadingService) {
    this.changeLoading = new EventEmitter<boolean>();
   }


}
