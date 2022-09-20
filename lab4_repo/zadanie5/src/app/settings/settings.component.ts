import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{
  @Output() onValueChanged = new EventEmitter<String>();

  sendResult(){
    let str = (this.carsList[this.marka][0] + " "+this.carsList[this.marka][1][this.model][0]+" - "+this.carsList[this.marka][1][this.model][1][this.kolor]);
    this.onValueChanged.emit(str);
}

  carsList = [ 
    ['Nissan',[['One',['zielony','czerwony','zloty','czarny','bialy']],['Two',['czarny','bialy']],['Three',['czarny','niebieski']]]],
    ['Ford',[['EcoSport',['zloty','niebieski']],['Focus',['czerwony','czarny']]]],
    ['Tesla',[['S',['bialy','zielony']],['3',['czarny','zloty']]]]
            ]
  public marka = 0;
  public model = 0;
  public kolor = 0;
  
  changeMarka(e:any) {
    this.marka = e.target.value;
    this.sendResult();
  }
  changeModel(e:any) {
    this.model = e.target.value;
    this.sendResult();
  }
  changeKolor(e:any) {
    this.kolor = e.target.value;
    this.sendResult();
  }

  getModelArray()
  {
    let ids: Array<number> = new Array(this.getModelLenght());
    for(let i =0;i<this.getModelLenght();i++)
    {   
      ids[i] = i;
    }

    return ids;
  }


  getKolorArray()
  {
    let ids: Array<number> = new Array(this.getKolorLenght());
    for(let i =0;i<this.getKolorLenght();i++)
    {   
      ids[i] = i;
    }

    return ids;
  }


  getModelLenght()
  {
    return this.carsList[this.marka][1].length;
  }

  getKolorLenght()
  {
    return this.carsList[this.marka][1][this.model][1].length;
  }

}
