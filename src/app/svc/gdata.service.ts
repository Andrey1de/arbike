import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IForKeyboard, ILang } from 'src/app/interf/interfaces';

//import {ILang} from 'src/app/interf/interfaces';
@Injectable({
  providedIn: 'root'
})

export class GDataService implements IForKeyboard{
  private static  nullLang : ILang = {langId:'??',name:'?????'};
  private mapLan :Map<string,ILang> = 
    new Map<string,ILang>([
      ["en", G_EN],
      ["he", G_HEB],
      ["ru", G_RU],
      ["ar", G_AR],
    ]);
  private _curLang: ILang = GDataService.nullLang;
  public get curLang(): ILang {
    return this.OnLang.value;
  }
  public capsLock: boolean = false;
  public OnLang : BehaviorSubject<ILang> = new BehaviorSubject<ILang>( GDataService.nullLang);
  public ElementWithFocus: BehaviorSubject<EventTarget | null> = 
     new BehaviorSubject<EventTarget | null>(null);

 
  set Target(targ:EventTarget | null) {
    this.ElementWithFocus.next(targ);
    
  }
  get Target(): EventTarget | null{
    return this.ElementWithFocus.value;
  }
  get Lang(): ILang {
    return this.OnLang.value;
  }
  attachKeyboard(targ:EventTarget | null){
    this.Target = targ;
  }
  
  sendKeyboardChar(ch:string){
   
    var trg: any = this.ElementWithFocus?.value || {};
    if(trg.value){
      var str = trg.value.toString();
      if(ch === '\n' || ch === 'enter') {
        trg.value = str + '\n';
      }       
      else  if(ch === '\b' || ch === 'backspace') {
        trg.value = str.substring(0, str.length - 1);
      }
      else  if(ch?.length === 1){
        trg.value = str + ch;
      } 

  
    }
    return trg.value;
  }

  detachKeyboard(targ:EventTarget | null){
    //this.ElementWithFocus.next(null);
  }    

    
  
  constructor() {
       this.setCurLang('en');
       this.capsLock = false;
   
  }

     
  public setCurLang(value: string): ILang | undefined {
    var  lan = this.mapLan.get(value) ;

    if(lan){
      this.OnLang.next(this._curLang = lan);
    }
    return lan;
  }
  
 

 
}



           
const G_EN : ILang = {
  langId:'en',
  name:'English',
  descr: ''};

const G_RU : ILang = {
  langId:'ru',
  name:'Русский',
  descr: ''};

const G_HEB : ILang = {
  langId:'he',
  name:'עברית',
  descr: ''};
const G_AR : ILang = {
  langId:'ar',
  name:'عربي',
  descr: ''};
