import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILang } from 'src/app/interf/interfaces';

//import {ILang} from 'src/app/interf/interfaces';
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
  public OnLang : BehaviorSubject<ILang> = new BehaviorSubject<ILang>( GDataService.nullLang);
  constructor() {
    this.mapLan.set('en', G_EN);
    this.mapLan.set('he',G_HEB);
    this.mapLan.set('ru', G_RU);
    this.mapLan.set('ar', G_AR);
    
    this.setCurLang('he');

  }
     
  public setCurLang(value: string): ILang | undefined {
    var   lan = this.mapLan.get(value) ;

    if(lan){
      this.OnLang.next(this._curLang = lan);
    }
    return lan;
  }
  

 
}



           
const G_EN : ILang = {
  lid:'en',
  name:'English',
  descr: ''};

const G_RU : ILang = {
  lid:'ru',
  name:'Русский',
  descr: ''};

const G_HEB : ILang = {
  lid:'he',
  name:'עברית',
  descr: ''};
const G_AR : ILang = {
  lid:'ar',
  name:'عربي',
  descr: ''};
