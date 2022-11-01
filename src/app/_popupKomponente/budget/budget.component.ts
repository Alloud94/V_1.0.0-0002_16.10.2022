import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.sass']
})
export class BudgetComponent implements OnInit {
  close:string = 'assets/img/icon/close.png';
  
  constructor(public dialogRef: MatDialogRef<BudgetComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}
