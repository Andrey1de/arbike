import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { GDataService } from '../svc/gdata.service';

@Directive({
  selector: '[tokeyb]'
})
export class TokeybDirective implements OnInit{

  constructor(private hostElt: ElementRef,
    public renderer: Renderer2,
   
    private gdata:GDataService//,
    //private renderer: Renderer2,
     ) {

  }
    @Input() tobeToggledClassName?: string;
    @HostListener("focus")
    attachKeyboard(){
      const trg = this.hostElt.nativeElement;
      this.gdata.attachKeyboard(this.hostElt.nativeElement);
      console.log(`@attach: ${this._id} value:"${trg.value}"` );
 
      this.hostElt.nativeElement.classList.add('my-border');
     }
  

    @HostListener("blur")
    detachKeyboard( ){
    //  console.log(`@detach: ${this._id} value:"${(evt.target as any).value}"` );
    
      //b vthis.hostElt.nativeElement.classList.remove('my-border');
 
     }
 
     _id:string = '';
     ngOnInit(): void {
       this._id = this.hostElt.nativeElement.id;
 
       console.log('@Init:'+ this._id);
       //this.hostElt.nativeElement.
     }

}
