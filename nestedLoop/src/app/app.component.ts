import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestedLoop';
  users = [
    { name : 'Anil', phone : '2221' , socialAccounts : ['facebook', 'insta', 'gmail']},
    { name : 'Sunil', phone : '2221', socialAccounts : ['facebook', 'insta', 'gmail']},
    { name : 'Farah', phone : '2221', socialAccounts : ['facebook', 'insta', 'gmail']},
    { name : 'Amit', phone : '2221', socialAccounts : ['facebook', 'insta', 'gmail']},
  ]
  
}
