import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';
  users =['Anil','Bhasker','Sam','Peter'];
  userDetails = [
    { name : 'Anil', email:'anil@test.com', phone :'7508529166'},
    { name : 'Bhaskar', email:'bhaskar@test.com', phone :'7508529166'},
    { name : 'Peter', email:'peter@test.com', phone :'7508529166'},
    { name : 'Sam', email:'sam@test.com', phone :'7508529166'},
  ]
}
