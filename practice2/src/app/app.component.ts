import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';
  displayVal: string ='';
  counter : number = 1;
  myfunction(name: String){
    alert(name);
  }
  getData(val : string)
  {
    console.log(val);
  }
  getValue(val : any)
  {
      console.log(val);
      this.displayVal = val;
  }
  count(val : String)
  {
    val ==='add'? this.counter++ : this.counter--;
  }
}
