import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fucking coool awesome';

  callbackEvent(a: string): void {
    console.log('app component event: '+ a);
  };
}
