import { Component } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = 0;
  public isLimit = false;

  reset()
  {
    this.counter = 0;
    this.isLimit=false;
  }
  click()
  {
    this.counter+=1;
    if(this.counter==10) this.isLimit=true;
  }
}
