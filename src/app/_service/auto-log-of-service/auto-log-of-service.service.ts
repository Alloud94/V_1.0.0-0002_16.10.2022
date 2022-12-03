import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLogOfServiceService {


  // Log Of Details
  isLogin = false;

  constructor(private router: Router, 
              private ngZone: NgZone,
              private notificationService: NotificationService) { 
    if(this.isUserLoggedIn()){
      this.isLogin = true;
    }
    this.reset();
    this.check();
    this.initListener();
    this.initInterval();
  }

  //Letzte Aktion ausgeben
  getLastAction(){
    return localStorage.getItem('lastAction');
  }

  //Event Listener starten
  initListener(){
    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener('click', () => {
        this.check();
        this.reset();
      });
    })
  }

  //Zeit Interval 
  initInterval(){
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.check();
      }, 1000);
    })
  }

  //Reset Timer mit letzter Aktion
    reset()
  {
    localStorage.setItem('lastAction', JSON.stringify(Date.now()));
  }

  //Check Timer
  check(){
    const now = Date.now();
    const timeLeft = parseInt(this.getLastAction() as string) + (30) * 60 * 1000;
    const diff = timeLeft - now;
    const isTimeout = diff < 0;

    this.ngZone.run(() => {
      if(isTimeout && this.isLogin){
        localStorage.removeItem('username');
        localStorage.removeItem('lastAction');
        console.log("Deine Session ist aufgrund zulanger inaktivität abgelaufen. Bitte logge dich neu ein.");
        this.notificationService.notificationInfoStay("Sie wurden automatisch abgemeldet");
        this.router.navigate(['login']);
      }
    })
  }

  //Checken ob User eingeloggt ist
  isUserLoggedIn(){
    return localStorage.getItem("username");
  }

}
