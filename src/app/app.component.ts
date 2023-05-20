import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GDataService } from './svc/gdata.service';
import { IInfo } from './interf/interfaces';

class CInfo  {
  M:Map<string,IInfo> = new Map<string,IInfo>();
  constructor(){
    this.M.set('en',{lan:'EN',info:'En Info'})
    this.M.set('ru',{lan:'RU',info:'Русский Инфо'})
  }
};
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  GInfo:CInfo = new CInfo();
  info?:IInfo;// = this.GInfo[]
  title = 'arbike';
  language:string = 'en';
  direction:string = 'ltr';
  input1:string = "1";
  input2:string = "2";
  input3:string = "3";
  
  txt1:string = 'On';
  constructor(private gdata:GDataService,
    private modalService: NgbModal) {
     this.gdata.OnLang.subscribe(ilang=>{
      const langId = ilang.langId;
      this._setLanguage(langId);
      this.language = langId;
      this.direction = (langId === 'en' || langId === 'ru') ? 'ltr' : 'rtl';
      this.modalService.activeInstances.subscribe(value=>{
        if(value.length >= 1){
          const res = value[0].result;
          console.dir(value[0]);
          console.dir(res);
      
    
        }
       })
    });
    this.gdata.setCurLang  ('en') ; 

  }
  
  // attachKeyboard(evt:FocusEvent ){
  //   this.gdata.attachKeyboard(evt.target);
  // }
  // detachKeyboard(evt:FocusEvent){
  //   //this.gdata.detachKeyboard(evt.target);
  // }
 private _setLanguage(lan:string){
   
  this.info = this.GInfo.M.get(lan);
 }
  public  open(modal: any) {
    const ref =   this.modalService.open(modal);
 
   // debugger;
   // console.dir(ref);
  }
  // onSwithchChange($event: any): void {  
  //   this.setLanguage(($event.target.checked) ? 'en' : 'ru');
  //  // console.dir($event.target.checked);

   
  // }
}
