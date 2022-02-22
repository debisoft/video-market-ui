import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input() inputNameHere: string;
  @Output() notify = new EventEmitter();
  active_link = "main";

  constructor() {
    this.inputNameHere = '';
  }

  ngOnInit(): void {
  }

  sendEvent(): void {
    console.log('sending event');
    this.notify.emit('this is just a test');
  }
}
