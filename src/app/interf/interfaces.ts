export interface IDialogField{
    name: string;
    type: string;
    label:string;
    required: boolean;//default true
    pattern?: string;
    placeholder: string;
    invalidFeedback?:string;
};

export interface IFieldNames {
    [key: string]: IDialogField
}
export interface IFormLanguageData{
    title:string;
    title2:string;
    flds: IFieldNames
}
export interface IInfo{
    lan: string;
    info : string; 
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
  

};
export interface IForKeyboard{
sendKeyboardChar(ch:string) : string;
set Target(tar: EventTarget | null) ;
get Target() : EventTarget | null;
get Lang(): ILang;

}