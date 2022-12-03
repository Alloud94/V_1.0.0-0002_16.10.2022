import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { password } from 'src/app/_interfaces/password';
import { NotificationService } from 'src/app/_service/notification/notification.service';

@Component({
  selector: 'app-b-passwort',
  templateUrl: './b-passwort.component.html',
  styleUrls: ['./b-passwort.component.sass']
})
export class BPasswortComponent implements OnInit {
  logo:string = 'assets/img/logo/Logo.png';
  username:string = 'assets/img/icon/user.png';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public passwordForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ], [])
  })

  password(passwordData: password){
    console.log(passwordData.username);
    this.notificationService.notificationSuccess("Passwort wurde zurückgesetzt");
    
  }

}
