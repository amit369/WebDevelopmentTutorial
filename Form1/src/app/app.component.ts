import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form1';
  submitForm(val : NgForm)
  {
    console.log(val);
  }

  getData(data : NgForm)
   {
    console.log(data);
   }
}
