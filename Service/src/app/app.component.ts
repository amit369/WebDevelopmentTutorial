import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Service';
  memberData = [
    {
      name: 'Anil',
      email: 'anil@test.com',
    },
    {
      name: 'Sam',
      email: 'sam@test.com',
    },
    {
      name: 'Bhasker',
      email: 'bhasker@test.com',
    },
    {
      name: 'Peter',
      email: 'peter@test.com',
    },
  ];
}
