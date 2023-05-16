export interface IInfo{
    lan: string;
    info : string;
  }
export interface ILang{
    langId: string;
    name:string;
    descr?:string;
};
export interface IForKeyboard{
    sendChar(ch:string) : string;
    set Target(tar: EventTarget | null) ;
    get Target() : EventTarget | null;
    get Lang(): ILang;

}