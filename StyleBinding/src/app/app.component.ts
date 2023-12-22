import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StyleBinding';
  color = 'green';
  bgColor = "red";
  updateColor ()
  {
    this.color = 'blue';
    this.bgColor = 'pink';
  }
}
