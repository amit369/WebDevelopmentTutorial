import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReusableComponent';
  userDetails = [
    {
      name : 'Anil Sidhu', email : 'anil@test.com'
    },
    {
      name : 'Anil Kumar', email : 'anilkumar@test.com'
    },
    {
      name : 'Sam Sidhu', email : 'sam@test.com'
    },

  ]
}
