import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputNameHere: string;
  @Output() notify = new EventEmitter();
  
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
