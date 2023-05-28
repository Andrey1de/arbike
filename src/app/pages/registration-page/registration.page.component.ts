import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILang } from 'src/app/interf/interfaces';
import { GDataService, gCurLang, gOnLang } from 'src/app/svc/gdata.service';
import { GETRegistrationFields, IRegistrationFields } from './registration.data';
import { NgForm } from '@angular/forms';
interface IRegistrationModel{
   name:string;
   passport:string;
   email:string ;
   address:string;
   phone:string;
   ravkav:string;
   iamagree:boolean;

}



@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.page.component.html',
  styleUrls: ['./registration.page.component.scss']
})

export class RegistrationPageComponent
implements AfterViewInit,OnDestroy,OnChanges {
  Lang!: ILang;
  direction: string = 'ltr';
  labelDirection: string =  'rtl;'
  C!:IRegistrationFields;
  Registr!: IRegistrationFields;
  subscrArr:Subscription[] = [];
  model:IRegistrationModel = {
    name:'',
    passport:'',
    email:'' ,
    address:'',
    phone:'',
    ravkav:'',
    iamagree:false
  }
// @ViewChild('f', { read: NgForm }) form!: NgForm;

 @ViewChild('f') f!: ElementRef<HTMLFormElement>;

  constructor(private gdata: GDataService){

    //this.model = {}
    //debugger;

   // this.gdata.setCurLang('en');
    this._setLang(gCurLang);

  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log(changes);
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
  //  debugger;
    const form: HTMLFormElement = this.f.nativeElement ;// document.getElementById("id-registration-form") as HTMLFormElement;//document.getElementsByTagName('needs-validation')[0] as HTMLFormElement;
    const elements = form.elements;
    console.dir(elements);
  //  debugger;
    if (form?.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
     form.classList.add('was-validated');
  }
   dismissMe(why:string){}
  closeMe(why:string){}
}

// class RegistrationModel implements IRegistrationModel{


//   public name:string = '';
//   public passport:string  = '';
//   public email:string  = '';
//   public address:string  = '';
//   public phone:string  = '';
//   public ravkav:string  = '';
//   public iamagree:boolean  = false;

//    constructor(
   
//     ){}
   
  
//   };