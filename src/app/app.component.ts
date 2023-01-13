import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angle-app';
  state = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log(event, 'event in app');
      });
  }

  dateForm: FormGroup = this.fb.group({
    first: [null, Validators.required],
    second: [null],
  });

  openState() {
    this.state = !this.state;
  }

  onSubmit() {
    console.log(this.dateForm.value);
  }
}
