import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IForKeyboard, ILang } from 'src/app/interf/interfaces';
import { G_AR, G_EN, G_HEB, G_RU } from '../pages/language/language.names';
//var nullLang : ILang = {langId:'??',name:'?????'};


//import {ILang} from 'src/app/interf/interfaces';
@Injectable({
  providedIn: 'root'
})

export class GDataService implements IForKeyboard{

 

  public capsLock: boolean = false;
  public evShowKeyboard :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get KeyboardVisible() {return this.evShowKeyboard.value;}
  public showHideKeyboard(thoShow:boolean){
    const b = this.KeyboardVisible;
    if(b != thoShow){
      this.evShowKeyboard.next(thoShow);

    }
  }
   ElementWithFocus: BehaviorSubject<EventTarget | null> = 
     new BehaviorSubject<EventTarget | null>(null);

 
  set Target(targ:EventTarget | null) {
    this.ElementWithFocus.next(targ);
    
  }
  get Target(): EventTarget | null{
    return this.ElementWithFocus.value;
  }
  get Lang(): ILang {
    return gOnLang.value;
  }
  get IsLTR(): boolean {
    return gCurLang.langId === 'en' || gCurLang.langId === 'ru' ;
  }
  attachKeyboard(targ:EventTarget | null){
   
    this._detachKeyboard(this.Target);
    this.Target = targ;
  }
  private _detachKeyboard(trgOld: any | null){
    if(trgOld && trgOld.classList){
      trgOld?.classList?.remove('my-border');
      if(trgOld.id){
        console.log(`@detach: ${trgOld.id} value:"${trgOld.value}"` );

      }
     
    }
  }
  
  sendKeyboardChar(ch:string){
   
    var trg: any = this.ElementWithFocus?.value || {};
    if(trg.value !== undefined){
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
       // TBD this.setCurLang('en');
       this.capsLock = false;
   
  }

     
  public setCurLang(value: string): ILang | undefined {
    var  lan = gMapLanguage.get(value) ;

    if(lan){
      gOnLang.next(gCurLang = lan);
    }
    return lan;
  }
 
}

//export 
//export var SHOW_KEYBOARD: boolean = false;

           

//TBD
export var gCurLang :  ILang  = G_EN;
export const gOnLang : BehaviorSubject<ILang> 
      = new BehaviorSubject<ILang>( gCurLang);
const gMapLanguage :Map<string,ILang> = 
new Map<string,ILang>([
  ["en", G_EN],
  ["he", G_HEB],
  ["ru", G_RU],
  ["ar", G_AR],
]);