import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toggle';
  display = true;
  toggle()
  {
    this.display = !this.display;
  }
}
