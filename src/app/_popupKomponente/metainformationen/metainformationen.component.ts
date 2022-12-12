import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

// Services
import { GetService } from 'src/app/_service/get/get.service';

// Interfaces
import { Projekt } from 'src/app/_interfaces/projekt';

@Component({
  selector: 'app-metainformationen',
  templateUrl: './metainformationen.component.html',
  styleUrls: ['./metainformationen.component.sass']
})
export class MetainformationenComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  info?:Projekt[];
  isLoading = true;

  constructor(public dialogRef: MatDialogRef<MetainformationenComponent>,
              private getService: GetService,
              @Inject(MAT_DIALOG_DATA) public data: number
              ) { }

  ngOnInit(): void {
    this.getService.getAngebot(this.data).subscribe(res => {
      this.info = res;
      this.isLoading = false;
    });

  }

  closeModal() {
    this.dialogRef.close();

  }

}
