import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted: boolean = false;

  form: FormGroup = this.fb.group({
    name: this.fb.control(''),
    dob: this.fb.control(''),
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  canExit(): boolean {
    console.log('can exist..');
    const response = confirm('Are you sure you want to leave this page?');
    if (response) {
      return true;
    } else {
      return false;
    }
  }

  submit(value: any) {
    console.log(value);
  }
}
