import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicTyescript';
  data = 'hello';
  today = Date();
  capString(item : string)
  {
    return item.toUpperCase();
  }
}
