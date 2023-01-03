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
        timeOut: 3500,
        animate: 'fade',
        showProgressBar: true
    })
  }

  notificationFail(message: string){
    return this.notificationService.error('Fehler', message,{
        position: ['bottom', 'right'],
        timeOut: 3500,
        animate: 'fade',
        showProgressBar: true
    })
  }

  notificationInfoStay(message: string){
    return this.notificationService.info('Info', message,{
        position: ['bottom', 'right'],
        timeOut: 43200000,
        animate: 'fade',
        showProgressBar: false
    })
  }

  notificationInfoShort(message: string){
    return this.notificationService.info('Info', message,{
        position: ['bottom', 'right'],
        timeOut: 3500,
        animate: 'fade'
    })
  }


}
