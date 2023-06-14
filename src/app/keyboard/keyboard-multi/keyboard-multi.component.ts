import { Component, OnDestroy, OnInit } from '@angular/core';
import { KeyboardService, GLanguages } from '../keyboard.service';
import { Subscription } from 'rxjs';
import { gOnLang } from 'src/app/svc/gdata.service';

@Component({
  selector: 'akb-keyboard-multi',
  templateUrl: './keyboard-multi.component.html',
  styleUrls: ['../keyboard.scss']
})
export class KeyboardMultiComponent implements OnInit  , OnDestroy{
  LangList:string[] = GLanguages;
  GlobalLang:string = 'en';
  subscrArr:Subscription[] = [];
  constructor(readonly  kbsrv:KeyboardService){
    
  }

  ngOnInit(): void {
     this.subscrArr.push(
      gOnLang.subscribe(p=>{
        this.GlobalLang = p.langId;
       
      }))
  }
  ngOnDestroy(): void {
    this.subscrArr.forEach(p=>p?.unsubscribe());
  }
 
}
