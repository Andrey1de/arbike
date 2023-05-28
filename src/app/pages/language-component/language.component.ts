import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { GDataService, gCurLang, gOnLang } from 'src/app/svc/gdata.service';
import { ILang } from 'src/app/interf/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent 
implements AfterViewInit ,OnDestroy{

  Lang: ILang;
  @Input() Height:string = '80px';

  subscrArr:Subscription[] = [];
  

  constructor(private gdata: GDataService){
    this.Lang = gCurLang;
  }
  ngOnDestroy(): void {
    this.subscrArr.forEach(p=>p.unsubscribe());
  }
  ngAfterViewInit(): void {
    this.subscrArr.push(
      gOnLang.subscribe(p=>{
        this.Lang = p;
       
      })

    )
   
  }
  setLanguage(lid:string){
    this.gdata.setCurLang(lid);
  }

}
