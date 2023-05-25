import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILang } from 'src/app/interf/interfaces';
import { GDataService, gCurLang, gOnLang } from 'src/app/svc/gdata.service';
import { GETRegistrationFields, IRegistrationFields } from './registration.data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.page.component.html',
  styleUrls: ['./registration.page.component.scss']
})
export class RegistrationPageComponent
implements AfterViewInit,OnDestroy {
  Lang!: ILang;
  direction: string = 'ltr';
  labelDirection: string =  'rtl;'
  C!:IRegistrationFields;
  Registr!: IRegistrationFields;
  subscrArr:Subscription[] = [];
 
// @ViewChild('f', { read: NgForm }) form!: NgForm;

 @ViewChild('f') f!: ElementRef<HTMLFormElement>;



  constructor(private gdata: GDataService){
    //debugger;

   // this.gdata.setCurLang('en');
    this._setLang(gCurLang);

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
    this.C = GETRegistrationFields(ilang.langId);
    this.direction = this.C.direction;
    this.labelDirection = (this.C.direction === 'ltr')? 'rtl' : 'ltr';
   // this.Registr = this.Lang.registr;
  }

  validate(event:any){
    var form: HTMLFormElement = this.f.nativeElement ;// document.getElementById("id-registration-form") as HTMLFormElement;//document.getElementsByTagName('needs-validation')[0] as HTMLFormElement;
    debugger;
    if (form?.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
     form.classList.add('was-validated');
  }
   dismissMe(why:string){}
  closeMe(why:string){}
}
