import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {filter} from "rxjs/operators"

interface Person {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  person = new BehaviorSubject<Person>({ name: '' });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(element: HTMLInputElement) {
    console.log(element.value, 'submitted');
  }
}
