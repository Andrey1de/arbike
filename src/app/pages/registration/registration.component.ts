import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILang, IRegistration } from 'src/app/interf/interfaces';
import { GDataService, gCurLang, gOnLang } from 'src/app/svc/gdata.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent
implements AfterViewInit,OnDestroy {
  Lang!: ILang;
  Registr!: IRegistration;
  subscrArr:Subscription[] = [];

  constructor(private gdata: GDataService){
    this._setLang(p);

  }
  ngAfterViewInit(): void {
    this.subscrArr.push(
      gOnLang.subscribe(p=>{
       this._setLang(p)
       
      })

    )
  }

  ngOnDestroy(): void {
    this.subscrArr.forEach(p=>p.unsubscribe());
  }
  _setLang(ilang:ILang){
    this.Lang = ilang;
    this.Registr = this.Lang.registr;
  }
   dismissMe(why:string){}
  closeMe(why:string){}
}
