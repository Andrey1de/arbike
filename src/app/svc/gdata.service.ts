import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GDataService {
  private static  nullLang : ILang = {lid:'??',name:'?????'};
  private mapLan :Map<string,ILang> = 
    new Map<string,ILang>();
  private _curLang?: ILang | undefined;
  public get curLang(): ILang {
    return this.OnLang.value;
  }
  public OnLang : BehaviorSubject<ILang>;
     
  public setCurLang(value: string): ILang  {
    return  this._curLang = this.mapLan.get(value) ?? GDataService.nullLang;
   
  }
  

  constructor() {
    this.mapLan
    .set('en', {lid:'en',name:'English'})
    .set('heb',{lid:'heb',name:'עברית'})
    .set('ru', {lid:'ru',name:'русский'})
    .set('ar', {lid:'ar',name:'عربي'});
    this.OnLang = new BehaviorSubject<ILang>( this.setCurLang('en') );


  }
}
