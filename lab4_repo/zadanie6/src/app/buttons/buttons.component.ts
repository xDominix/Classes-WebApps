import { Component, OnInit ,EventEmitter,Output,Input} from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
})

export class ButtonsComponent {
  @Output() onClick = new EventEmitter<boolean>();
  @Output() onReset = new EventEmitter<boolean>();
  @Input() public limit: any;
  
  click(){
      this.onClick.emit(true);
  }  

  reset()
  {
    this.onReset.emit(true);
  }

  
}
