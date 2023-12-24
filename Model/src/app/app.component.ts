import { Component } from '@angular/core';

interface dataType {
  name : string,
  id : number,
  indian : string,
  address : any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Model';
  getData()
  {
    const data : dataType = {
      name : 'Anil Kumar',
      id : 100 , 
      indian : "yes",
      address : "42, Noida"
    }
    return data;
  }
}
