import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, OnDestroy {

  typescriptVariable = {
    name: 'me again'
  };

  constructor() { 

  }

  ngOnInit(): void {
    console.log('on init shopping component');
  }

  ngOnDestroy(): void {
    console.log('destroy shopping');
  }

}
