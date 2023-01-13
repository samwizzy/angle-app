import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
})
export class AuthDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
