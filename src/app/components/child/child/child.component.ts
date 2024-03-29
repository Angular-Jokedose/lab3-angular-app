import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() parentData: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData: number;

  constructor() {
    console.log('ngOnChanges Work!')
  }

  onClick2Parent() {
    this.childData += 1;
    this.messageEvent.emit(this.childData);
  }

  ngOnInit(): void {
    this.childData = 0;
    console.log('ngOnInit Work!');
  }

  ngOnChanges() {
    console.log('ngOnChanges Work!');
  }

  ngDoCheck() {
    console.log('ngDoCheck Work!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Work!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Work!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Work!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Work!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Work');
  }
}
