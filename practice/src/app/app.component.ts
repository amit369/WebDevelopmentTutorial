import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  data = "Code Step by Step";
   getValue()
  {
    return "Hey Amit!"
  }
  var1=10;
}
