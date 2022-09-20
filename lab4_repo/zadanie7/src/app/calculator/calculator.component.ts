import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public calculations = "";
  public buttons = ["CLEAR",'7','8','9','+','4','5','6','-','1','2','3','*',".",'0','=','/'];

  constructor() { }
  calculate(button:string)
  {
    //var button = $event.srcElement.innerText;
    if(button ==="=")
    {
      this.calculations = eval(this.calculations);
    }
    else if(button==="CLEAR")
    {
      this.calculations = "";
    }
    else
    {
      this.calculations += button;
    }
  }
  

  
  ngOnInit(): void {
  }

}
