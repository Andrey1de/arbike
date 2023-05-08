import { Component } from '@angular/core';
import { GDataService } from 'src/app/svc/gdata.service';
import { ILang } from 'src/app/interf/interfaces';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  curLan: ILang;

  constructor(private gdata: GDataService){
    this.curLan = this.gdata.OnLang.value;
    this.gdata.OnLang.subscribe(p=>{
      this.curLan = p;
    })
  }
  setLanguage(lid:string){
    this.gdata.setCurLang(lid);
  }

}
