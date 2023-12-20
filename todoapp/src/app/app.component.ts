import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  toshow = '0';
  currvalue = '';
  writetoinput(value : string ){
    if(this.currvalue == '0') {
    this.currvalue = value;
    }
    if(this.currvalue != ' 0')
    {
      this.currvalue = this.currvalue + value
    }
    this.toshow = this.currvalue;
  }

  equals()
  {
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
  }

  clear()
  {
    this.currvalue='';
    this.toshow =  '0';
  }
  back()
  {
     this.currvalue = this.currvalue.slice(0,-1);
     this.toshow = this.currvalue;
     if(this.currvalue='')
     {
      this.currvalue = '0';
     }
  }
  calcvalue()
  {
    
  }

}
