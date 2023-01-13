import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, OnChanges, AfterContentInit {
  @ContentChild('paragraph') demoContent!: ElementRef;
  @Input() value = '';
  @Output() dataEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('constructor initiated:demo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges initiated:demo');
  }

  ngOnInit(): void {
    console.log('ngOnInit initiated:demo');
  }

  ngAfterContentInit(): void {
    console.log(this.demoContent, 'after content init');
  }

  submitData(data: any): void {
    this.dataEvent.emit(data);
  }
}
