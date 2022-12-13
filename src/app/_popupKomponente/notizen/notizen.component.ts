import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

// Services
import { NotificationService } from 'src/app/_service/notification/notification.service';
import { GetService } from 'src/app/_service/get/get.service';
import { PostService } from 'src/app/_service/post/post.service';

// Interfaces
import { Notizen } from 'src/app/_interfaces/notizen';

@Component({
  selector: 'app-notizen',
  templateUrl: './notizen.component.html',
  styleUrls: ['./notizen.component.sass']
})
export class NotizenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  notizen?:Notizen[];
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<NotizenComponent>,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private getService: GetService,
              private postService: PostService
              ) { }

    public notizenForm: FormGroup = new FormGroup({
      'notizen': new FormControl(this.notizen)
    });
            
  ngOnInit(): void {
    this.getService.getProjektNotizen(this.data).subscribe(res => {
      this.notizen = res;
      this.isLoading = false;
      this.notizenForm.setValue({
        'notizen': this.notizen[0].notizen
      });  
    });
  }

  save(){
    this.postService.updateNotizen(this.data, this.notizenForm.controls['notizen'].value).subscribe(res => {
      this.dialogRef.close();
    })
  }



  closeModal() {
    this.dialogRef.close();
  }

}
