import { Component, ɵfindLocaleData } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = $localize`:@@home.messages: Hello ${this.name}:name:! You have ${this.messages.length}:messages: messages.`;
  title = $localize`:@@home.hello:Hello World!`;
  date = new Date('2020-01-20T17:00+01:00');
}
