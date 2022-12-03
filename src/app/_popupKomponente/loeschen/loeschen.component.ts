import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/_interfaces/login';

@Component({
  selector: 'app-loeschen',
  templateUrl: './loeschen.component.html',
  styleUrls: ['./loeschen.component.sass']
})
export class LoeschenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  username:string = 'assets/img/icon/user.png';
  passwort:string = 'assets/img/icon/vorhangschloss.png';

  constructor(public dialogRef: MatDialogRef<LoeschenComponent>,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

// ### Funktionen ###

  delete(loginData: Login){
    this.notificationService.notificationInfoShort("Not Implementet yet.");
  }


  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ], []),
    password: new FormControl('', [
      Validators.required
    ], [])
  });




  closeModal() {
    this.dialogRef.close();
  }

}
