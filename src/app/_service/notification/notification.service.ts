import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notificationService: NotificationsService) { }

  notificationSuccess(message: string){
    return this.notificationService.success('Erfolgreich', message,{
        position: ['bottom', 'right'],
        timeOut: 2000,
        animate: 'fade',
        showProgressBar: true
    })
  }

  notificationFail(message: string){
    return this.notificationService.error('Fehler', message,{
        position: ['bottom', 'right'],
        timeOut: 2000,
        animate: 'fade',
        showProgressBar: true
    })
  }


}
