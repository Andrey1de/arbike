import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GDataService } from '../svc/gdata.service';
import { KEYBOARD_MAP, KeyData } from './keyboard.data';
type EventHandler = (a:string)  =>  {}  ;
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements  AfterViewInit {
  @Input() lang: string = 'en';
  get isLTR () {return this.lang == 'en' || this.lang == 'ru'};
  @ViewChild('keyboard_main', { static: false }) refMainDiv!: ElementRef<HTMLDivElement> ;
  private domMain!: HTMLDivElement;
  @ViewChild('keyboard__keys', { static: false }) refKeysContainerDiv!: ElementRef<HTMLDivElement> ;
  private domKeysContainer!: HTMLDivElement;
  private keyboardAZKeys:HTMLButtonElement[] = [];
  private keybFocusTarget?: EventTarget = undefined;
  
  constructor(private gdata:GDataService){
    if(this.lang){
      this.gdata.setCurLang(this.lang);
    } else {
      this.lang = this.gdata.Lang.name;
    }
    
    const ev = this.gdata.OnLang.subscribe(ilang=>{
      this.lang = ilang.langId;
      this._setCapsLock();
    })
  }

  getKbChar(kbid : string  ){
    const keyData = KEYBOARD_MAP.get(kbid);
    var ch = keyData?.getKbChar(this.gdata.Lang.name, this.gdata.capsLock)

  }
  ngAfterViewInit(): void {
    this.domMain = this.refMainDiv.nativeElement;
    this.domKeysContainer = this.refKeysContainerDiv.nativeElement;
   
    this._init();
    //this.gdata.OnKeyboardFocus.subscribe(p=>this._hndlNewFocus(p))
  }

  _hndlNewFocus(elt:EventTarget | undefined){
    this.keybFocusTarget = elt ;
    if(this.keybFocusTarget){

    } else {

    }
  }

// elements:  = {
//   domMain: HTMLDivElement,
//   domKeysContainer: HTMLDivElement,
//   keyboardAZKeys: NodeListOf<HTMLElement>
// }

    // evOnInput  = this.open;
    // evOnClose  = this.close;
  

  // properties = {
  //   value: "",
  //   capsLock:  false
  // }
  
  open(initialValue : string) {
    //this.properties.value = initialValue || "";
    // this.eventHandlers.oninput = oninput;
    // this.eventHandlers.onclose = onclose;
    this.domMain.classList.remove("keyboard--hidden");
  }

  close() {
    //this.properties.value = "";
    // this.eventHandlers.oninput = oninput;
    // this.eventHandlers.onclose = onclose;
    this.domMain.classList.add("keyboard--hidden");
  }
  _init() {
    // Create domMain elements
  // this.domMain = document.createElement("div");
  // this.domKeysContainer = document.createElement("div");

    // Setup domMain elements
    // this.domMain.classList.add("keyboard", "keyboard--hidden");
    // this.domKeysContainer.classList.add("keyboard__keys");
    this.keyboardAZKeys = [];
    const   keyb:DocumentFragment = this._createKeys();
    this.domKeysContainer.appendChild(keyb);
    this._setCapsLock();

    
    // this.domKeysContainer.querySelectorAll<HTMLButtonElement>(".keyboard__key")
    //   .forEach(p=>this.keyboardAZKeys.push(p));

    // Add to DOM
    // this.domMain.appendChild(this.domKeysContainer);
    // document.body.appendChild(this.domMain);

    // Automatically use keyboard for elements with .use-keyboard-input
    // document.querySelectorAll<any>(".use-keyboard-input").forEach(element => {
    //     element.addEventListener("focus", () => {
    //         if(element.value){
    //           this.open(element?.value, currentValue => {
    //             element.value = currentValue;
    //         });
    //         }
        
    //     });
    // });
  }

  _createKeys() {
    const fragment = document.createDocumentFragment();
  
    // Creates HTML for an icon
    const  createIconHTML = (icon_name: string) =>{
      return `<i class="material-icons">${icon_name}</i>`;
    }
    this.keyboardAZKeys = [];
    const lang = this.gdata.Lang.langId;
    const capsLock = !!this.gdata.capsLock;

    KEYBOARD_MAP.forEach((keyData:KeyData,key:string): void => {
        //   if (key === 'br') {
        //   fragment.appendChild(document.createElement("br"));
        // } else {
          const capsLock = this.gdata.capsLock;
  
          const char = keyData.getKbChar(lang,capsLock);
          

          const keyElement = document.createElement("button");
          keyElement.id = key;
            // Add attributes/classes
          keyElement.setAttribute("type", "button");
          keyElement.classList.add("keyboard__key");
          switch (char) {
              case "backspace": //\b
              case "\b":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("backspace");

                keyElement.addEventListener("click", () => {  
                    this.gdata.sendKeyboardChar("\b");
                  });

                break;

              
              case "caps":
                keyElement.classList.add("keyboard__key--wide",
                                         "keyboard__key--activatable");
                keyElement.innerHTML = createIconHTML("keyboard_capslock");

                keyElement.addEventListener("click", () => {
                    this._toggleCapsLock();
                    keyElement.classList.toggle("keyboard__key--active",
                       this.gdata.capsLock);
                });

                break;

              case "enter"://\n
              case "\n"://\n
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("keyboard_return");
                
                keyElement.addEventListener("click", () => { 
                    this.gdata.sendKeyboardChar("\n");
                });
                break;
            
                case "space":
                case " ":
                  keyElement.classList.add("keyboard__key--extra-wide");
                  keyElement.innerHTML = createIconHTML("space_bar");

                  keyElement.addEventListener("click", () => {
                     this.gdata.sendKeyboardChar(" ");
                  });
                    

                 break;

              case "done":
                  keyElement.classList.add("keyboard__key--wide",
                                          "keyboard__key--dark");
                  keyElement.innerHTML = createIconHTML("check_circle");

                  keyElement.addEventListener("click", () => {
                    //   this.close();
                      this._triggerEventOnClose();
                  });

                  break;

              default:
                if(keyData.isChar){
                  keyElement.textContent = char;

                  keyElement.addEventListener("click", () => {
                    this.gdata.sendKeyboardChar(char);
                    // this.properties.value += this.gdata.capsLock ? keyData.toUpperCase() : keyData.toLowerCase();
                      
                  });
                  this.keyboardAZKeys.push(keyElement);
                
                }
                 break;
            
            }
         
  
          fragment.appendChild(keyElement);
          if(keyData.isLast){
            fragment.appendChild(document.createElement("br"));
          } 
     
            
        }
    );

    return fragment;
  }

  // _triggerEventOnInput() {
  //   if (typeof this.evOnInput == "function") {
  //     this.evOnInput(this.properties.value);
  //   }
  // }

  _triggerEventOnClose() {
    // if (typeof this.evOnClose == "function") {
    //   //this.evOnClose();
    // }
  }

  _toggleCapsLock() {
    this.gdata.capsLock = !this.gdata.capsLock;
    this._setCapsLock();
  }  
  
  _setCapsLock() {
    for (const key of this.keyboardAZKeys) {
      if (key.childElementCount === 0) {
        var keyData = KEYBOARD_MAP.get(key.id);
        var char = keyData?.getKbChar(this.gdata.Lang?.langId, this.gdata.capsLock);
        if(char){
          key.textContent = char;
        }
          
      }
    }

  } 




  


} // eoclass

//"done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","br",
//"space"

//value:string =  "";
//   capsLock:boolean =  false;

//   eventHandlers : any = {
//     oninput: (a:string)=>{},
//     onclose: (a:string)=>{}
//   };
//   properties = {
//      value  :  "",
//     capsLock : false
//   };
//   constructor(){

//   }
 
//   open(initialValue : string, oninput : EventHandler, onclose : EventHandler) {
//     this.properties.value = initialValue || "";
//     this.eventHandlers.oninput = oninput;
//     this.eventHandlers.onclose = onclose;
//     this.domMain.classList.remove("keyboard--hidden");
//   }
//   private _triggerEvent(evName:string) {
//     if (typeof this.eventHandlers[evName] == "function") {
//       this.eventHandlers[evName](this.properties.value);
//     }
//   }
//   private _createKeys() : DocumentFragment {
//     const fragment = document.createDocumentFragment();
//     const keyLayout = [
//         "1", "1", "3", "4", "5", "6", "7", "8", "9", "0", "backspace","br",
//         "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","br",
//         "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter","br",
//         "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","br",
//         "space"
//     ];

//     // Creates HTML for an icon
//     const createIconHTML = (icon_name : string) => {
//         return `<i class="material-icons">${icon_name}</i>`;
//     };

//     keyLayout.forEach(key => {
//       if(key === 'br'){
//         fragment.appendChild(document.createElement("br"));
//       } else {
//         const keyElement : HTMLButtonElement = document.createElement("button");
//         //  const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
  
//           // Add attributes/classes
//           keyElement.setAttribute("type", "button");
//           keyElement.classList.add("keyboard__key");
  
//           switch (key) {
//               case "backspace":
//                   keyElement.classList.add("keyboard__key--wide");
//                   keyElement.innerHTML = createIconHTML("backspace");
  
//                   keyElement.addEventListener("click", () => {
//                       this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                       this._triggerEvent('oninput');
//                   });
  
//                   break;
  
//               case "caps":
//                   keyElement.classList.add("keyboard__key--wide", "keyboard__keyenter--activatable");
//                   keyElement.innerHTML = createIconHTML("keyboard_capslock");
  
//                   keyElement.addEventListener("click", () => {
//                       this._toggleCapsLock();
//                       keyElement.classList.toggle("keyboard__key--active", this.gdata.capsLock);
//                   });
  
//                   break;
  
//               case "enter":
//                   keyElement.classList.add("keyboard__key--wide");
//                   keyElement.innerHTML = createIconHTML("keyboard_return");
  
//                   keyElement.addEventListener("click", () => {
//                       this.properties.value += "\n";
//                       this._triggerEventOnInput;
//                   });
  
//                   break;
  
//               case "space":
//                   keyElement.classList.add("keyboard__key--extra-wide");
//                   keyElement.innerHTML = createIconHTML("space_bar");
  
//                   keyElement.addEventListener("click", () => {
//                       this.properties.value += " ";
//                       this._triggerEventOnInput;
//                   });
  
//                   break;
  
//               case "done":
//                   keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
//                   keyElement.innerHTML = createIconHTML("check_circle");
  
//                   keyElement.addEventListener("click", () => {
//                       this.close();
//                       this._triggerEvent("onclose");
//                   });
  
//                   break;
//               case "br":
//                 fragment.appendChild(document.createElement("br"));
//                 break;
  
  
//               default:
//                 keyElement.textContent = key.toLowerCase();
  
//                 keyElement.addEventListener("click", () => {
//                     this.properties.value += this.gdata.capsLock ? key.toUpperCase() : key.toLowerCase();
//                     this._triggerEventOnInput;
//                 });
  
//                 break;
//           }
  
//       }
  
  
//     });

//     return fragment;  
//   }

//   _toggleCapsLock() {
//     this.gdata.capsLock = !this.gdata.capsLock;

//     this.keyboardAZKeys.forEach( (key )=> {
//         if (key.childElementCount === 0) {
//           var str = this.gdata.capsLock 
//                       ? key.textContent?.toUpperCase() 
//                       : key.textContent?.toLowerCase();
//             key.textContent = str || '';
//         }
//     });
// }

 
//   private _init( ) {
//     this.domMain = this.keyboardMainRef.nativeElement;
//     this.domKeysContainer = this.keyboardAZKeysRef.nativeElement;
//     // domKeysContainer = document.createElement("div");

//     // Setup domMain elements
//     // domMain.classList.add("keyboard", "keyboard--hidden");
//     // domKeysContainer.classList.add("keyboard__keys");
//     this.domKeysContainer.appendChild(this._createKeys());

//     this.keyboardAZKeys = this.domKeysContainer.querySelectorAll<HTMLElement>(".keyboard__key");
//     document.querySelectorAll<any>(".use-keyboard-input").forEach(element => {
//       element.addEventListener("focus",()=>{
//           if(!!element.value) {
//             this.open(element.value, currentValue => {
//               return element.value = currentValue;
         
//           }
//            }
//       });
//   });

//     // Add to DOM
//     // domMain.appendChild(domKeysContainer);
//     // document.body.appendChild(domMain);

//     // Automatically use keyboard for elements with .use-keyboard-input
//     // document.querySelectorAll<HTMLTextAreaElement | HTMLInputElement>(".use-keyboard-input")
//     //   .forEach(element => {
//     //     element.addEventListener("focus", 
//     //       () => {this.open(element.value, currentValue => 
//     //              element.value = currentValue)}
            
         
            
//     //     });
//     // });
//     // Automatically use keyboard for elements with .use-keyboard-input
//   }

  
 



