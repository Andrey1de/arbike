import { ReturnStatement } from "@angular/compiler";

export interface IKeyData{
     en:string;
     enH:string;
     he:string;
     isLast:boolean;//,
     isChar:boolean;//,
   
  
  }
  
export class KeyData implements IKeyData {
     get  en() : string{ return this.ikd.en; }
     get  enH () : string{ return this.ikd.enH; }
     get  he () : string{ return this.ikd.he; }
     get  isLast() : boolean{ return this.ikd.isLast }
     get  isChar() : boolean{ return this.he.length === 0 ||
                                this.en.length === 1; }// = this.en.length === 1{ return this.ikd }
    // get isChar(){return this.en.length === 1;}

    constructor( public  ikd:IKeyData ){
    }

    getKbChar(lang:string,capsLock:boolean) : string{
        var ch ='';
        if(this.en === 'space') {
            ch = ' ';
        }
        if(!this.isChar) {
            ch = this.en;
        }
        switch(lang){
            case 'he':  
                ch =  (capsLock) ? this.enH : this.he;
                break;
            case 'en':  
                ch =  (capsLock) ? this.enH : this.en;
                break;
            
           // case 'en':  return (caps) ? this.enH : this.en;
             // case 'ru':  break;
            // case 'ru':  break;
        }
        return ch;//en,isLast:false,isChar:true
    }
}    
   
  
  
export const KEYBOARD_MAP = new Map<string,KeyData>( 
    [
    
        ["idkbd101",new KeyData({en:"1",enH:"!",he:"1",isLast:false,isChar:true})],
        ["idkbd102",new KeyData({en:"2",enH:"@",he:"2",isLast:false,isChar:true})],
        ["idkbd103",new KeyData({en:"3",enH:"#",he:"3",isLast:false,isChar:true})],
        ["idkbd104",new KeyData({en:"4",enH:"$",he:"4",isLast:false,isChar:true})],
        ["idkbd105",new KeyData({en:"5",enH:"%",he:"5",isLast:false,isChar:true})],
        ["idkbd106",new KeyData({en:"6",enH:"^",he:"6",isLast:false,isChar:true})],
        ["idkbd107",new KeyData({en:"7",enH:"&",he:"7",isLast:false,isChar:true})],
        ["idkbd108",new KeyData({en:"8",enH:"*",he:"8",isLast:false,isChar:true})],
        ["idkbd109",new KeyData({en:"9",enH:"(",he:"9",isLast:false,isChar:true})],
        ["idkbd110",new KeyData({en:"0",enH:")",he:"0",isLast:false,isChar:true})],
    
        ["idkbd110",new KeyData({en:"backspace",enH:"\b",he:"",
                                    isLast:true,isChar:false})], 
        
        ["idkbd201",new KeyData({en:"q",enH:"Q",he:"\/",isLast:false,isChar:true})],
        ["idkbd202",new KeyData({en:"w",enH:"W",he:"\'",isLast:false,isChar:true})],
        ["idkbd203",new KeyData({en:"e",enH:"E",he:"ק",isLast:false,isChar:true})],
        ["idkbd204",new KeyData({en:"r",enH:"R",he:"ר",isLast:false,isChar:true})],
        ["idkbd205",new KeyData({en:"t",enH:"T",he:"א",isLast:false,isChar:true})],
        ["idkbd206",new KeyData({en:"y",enH:"Y",he:"ט",isLast:false,isChar:true})],
        ["idkbd207",new KeyData({en:"u",enH:"U",he:"ו",isLast:false,isChar:true})],
        ["idkbd208",new KeyData({en:"i",enH:"I",he:"ן",isLast:false,isChar:true})],
        ["idkbd209",new KeyData({en:"o",enH:"O",he:"ם",isLast:false,isChar:true})],
        ["idkbd210",new KeyData({en:"p",enH:"P",he:"פ",isLast:true, isChar:true})],
    
        ["idkbd300",new KeyData({en:"caps",enH:"",he:"",isLast:false,isChar:false})],
        ["idkbd301",new KeyData({en:"a",enH:"A",he:"ש",isLast:false,isChar:true})],
        ["idkbd302",new KeyData({en:"s",enH:"S",he:"ד",isLast:false,isChar:true})],
        ["idkbd303",new KeyData({en:"d",enH:"D",he:"ג",isLast:false,isChar:true})],
        ["idkbd304",new KeyData({en:"f",enH:"F",he:"כ",isLast:false,isChar:true})],
        ["idkbd305",new KeyData({en:"g",enH:"G",he:"ע",isLast:false,isChar:true})],
        ["idkbd306",new KeyData({en:"h",enH:"H",he:"י",isLast:false,isChar:true})],
        ["idkbd307",new KeyData({en:"j",enH:"J",he:"ח",isLast:false,isChar:true})],
        ["idkbd308",new KeyData({en:"k",enH:"K",he:"ל",isLast:false,isChar:true})],
        ["idkbd309",new KeyData({en:"l",enH:"L",he:"ך",isLast:false,isChar:true})],
        ["idkbd310",new KeyData({en:".",enH:",",he:"ף",isLast:false,isChar:true})],
        ["idkbd311",new KeyData({en:"enter",enH:"\n",he:"",isLast:true,isChar:false})],
    
        ["idkbd400",new KeyData({en:"done",enH:"",he:"",isLast:false,isChar:false})],
        ["idkbd401",new KeyData({en:"z",enH:"Z",he:"ז",isLast:false,isChar:true})],
        ["idkbd402",new KeyData({en:"x",enH:"X",he:"ס",isLast:false,isChar:true})],
        ["idkbd403",new KeyData({en:"c",enH:"C",he:"ב",isLast:false,isChar:true})],
        ["idkbd404",new KeyData({en:"v",enH:"V",he:"ה",isLast:false,isChar:true})],
        ["idkbd405",new KeyData({en:"b",enH:"B",he:"נ",isLast:false,isChar:true})],
        ["idkbd406",new KeyData({en:"n",enH:"N",he:"מ",isLast:false,isChar:true})],
        ["idkbd407",new KeyData({en:"m",enH:"M",he:"צ",isLast:false,isChar:true})],
        ["idkbd408",new KeyData({en:",",enH:",",he:"ת",isLast:false,isChar:true})],
        ["idkbd409",new KeyData({en:".",enH:".",he:"ץ",isLast:false,isChar:true})],
        ["idkbd410",new KeyData({en:".",enH:".",he:".",isLast:true,isChar:true})],
    
        ["idkbd500",new KeyData({en:"space",enH:" ",he:" ",isLast:false,isChar:false})],
    ]
);
  
