import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
export enum ECHR{
  errChr=-1,
  chr=0,
  chrCase=1,
  caps=2,
  cmd=3

}
export const GLanguages:string[] = ['en','he','ru','ar'];
export function IsLtr (lan:string) : boolean {
    return lan == 'en'|| lan == 'ru';}
export function  KeyHasCase(key:string){
  return key.length === 1  &&
    ((key >= 'a' && key <= 'z')||(key >= 'а' && key <= 'я'));


}

export function Chr2Enum(key:string):ECHR{
  let e = ECHR.errChr;
  if(key.length == 1){
    e = ((key >= 'a' && key <= 'z')||(key >= 'а' && key <= 'я')) 
      ? ECHR.chrCase : ECHR.chr;
  } else if(key.length == 2){
    e=ECHR.chr;
  }
  else  {
    e = (key == 'caps') ? ECHR.caps : ECHR.cmd;
  }
  return e;
}
export class TSubject<T>{ 
  private _subject$!:BehaviorSubject<T>;
  constructor(default0:T){
    this._subject$ = new BehaviorSubject<T>(default0);
  }

  public get subject$():Observable<T> { 
    return this._subject$.asObservable()
  }

  subArr:Subscription[] = [];

  public subscribe(fn:(arg:T)=>void): void | undefined {
    let sub:Subscription | undefined = undefined;
      try {
        sub = this._subject$.subscribe(fn);
        if(sub){
          this.subArr.push(sub);
        }
      } catch (error) {
        console.log(`TSubject<T>:attach error (${error})`)
      }
    
    
  }

  public destroy(){
    this.subArr.forEach(sub=>sub?.unsubscribe());
    this.subArr = [];
  }
 
  public get value() : T {
    return this._subject$.value;
  }
  public newNext(v : T): T{
    if(v != this.value){
      this.next(v);
    }
    return v;
    
  }
  public next(v : T) {
    this._subject$.next(v);
  }
  

}


export const KEY_LAYOUT_EN : string[][] = [
  [    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","backspace"],
  [    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  [    "a", "s", "d", "f", "g", "h", "j", "k", "l",  "done"],
  [    "z", "x", "c", "v", "b", "n", "m" , "-"],
  [    "caps","@", ".","space",",", "/"]
];

export const KEY_LAYOUT_HE : string[][] = [
  [    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",  "backspace"],
  [    "'", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",  "-"],
  [    "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "done"],
  [    "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ","\\"],
  [     "@", ".","space",",", "/"]


];

export const KEY_LAYOUT_RU : string[][]= [
  [    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",  "backspace"],
  [    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "э", ],
  [    "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж",   "done"],
  [    "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ъ"],
  [    "caps","@", ".","space",",", "/"]
];

export  const KEY_LAYOUT_AR : string[][]= [
  [    "1", "2", "3", "4", "5", "6", "7",  "8", "9", "0", "backspace"],
  [    "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د",  "لإ", "إ"],
  [    "ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط", "لأ",  "أ"],
  [    "ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "لآ", "آ", "\\", ",", "/" ],
  [     "@", ".","space",",", "/","\\" , "done"]

];
export interface IKeyLayout {
  [key: string ]: string[][] ;
  }
  
export const ALL_KEY_LAYOUTS : IKeyLayout = {
  en:KEY_LAYOUT_EN,
  ru:KEY_LAYOUT_RU,
  he:KEY_LAYOUT_HE,
  ar:KEY_LAYOUT_AR,
}

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  // readonly  CapsPipe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public get GlobalCaps() : boolean {
  //   return this.CapsPipe$.value;
  // }
  // public set GlobalCaps(val:boolean){
  //   if(this.CapsPipe$.value != val ){
  //     this.CapsPipe$.next(val);
  //   }

  // }

 

  readonly  KeyPipe$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  

  public sendKey(key:string){
    this.KeyPipe$.next(key);

  }
  public get LastSent() : string {
    return this.KeyPipe$.value;
  }
  
  constructor() { }

  getKeyLayout(lang:string) : string[][]{
    switch (lang) {
      case 'ru': return KEY_LAYOUT_RU;
      case 'he': return KEY_LAYOUT_HE;
      case 'ar': return KEY_LAYOUT_AR;
      default : return KEY_LAYOUT_EN;
      }

  }
 }
