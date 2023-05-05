import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface IInfo{
  lan: string;
  info : string;
}
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
  txt1:string = 'On';
  constructor(private modalService: NgbModal) {
    this.setLanguage('ru') ;
  }
 setLanguage(lan:string){
  this.language = lan;
  this.info = this.GInfo.M.get(lan);
 }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  onSwithchChange($event: any): void {  
    this.setLanguage(($event.target.checked) ? 'en' : 'ru');
   // console.dir($event.target.checked);

   
  }
}
