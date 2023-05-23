export interface IInfo{
    lan: string;
    info : string;
  }
  export interface IRegistration{
    title:string;
    title2:string;
    name:string;
    passport:string;
    email:string;
    address:string;
    phone:string;
    ravkav:string;
    iamagree:string;
    paytermstxt:string;
    paytermsref:string;
    paypolicytxt:string;
    paypolicyref:string;

};
export interface IButtons{
    return:string;
    exit:string;
    continue:string;
    registration:string;

};
export interface ILang{
    langId: string;
    name:string;
    descr?:string;
    btns:IButtons;
    registr: IRegistration ;
    
};
export interface IForKeyboard{
    sendKeyboardChar(ch:string) : string;
    set Target(tar: EventTarget | null) ;
    get Target() : EventTarget | null;
    get Lang(): ILang;

}