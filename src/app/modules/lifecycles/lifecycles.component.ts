import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.scss'],
})
export class LifecyclesComponent implements OnInit, AfterViewInit {
  @ViewChild(DemoComponent) demoEl!: DemoComponent;
  title: string = '';

  constructor() {
    console.log('constructor initialized');
  }

  ngOnInit(): void {
    console.log('ngOnInit initialized');
  }

  ngAfterViewInit(): void {
    console.log(this.demoEl, 'after view init');
  }
}
