import { IDialogField } from "src/app/interf/interfaces";


export interface IRegistrationFields{
   langId:string;
   direction:string;
   title:string;
   title2:string;
   name:IDialogField;
   passport:IDialogField;
   email:IDialogField;
   address:IDialogField;
   phone:IDialogField;
   ravkav:IDialogField;
   iamagree:IDialogField;
  // labelCh1?:string,
   pay : {
         terms:{
            ref:string;
            text:string;
         },
         policy:{
            ref: string;//
            text: string;
      
         },
      }
   
};


const REGISTR_EN : IRegistrationFields = {
   langId:'en',
   direction:'ltr',
   title:'Register for the bicycle parking system',
   title2:'To use the parking lot services, please fill in the following details',
   name: {
      name: 'name',
      type: 'text',
      label:'First name and last name',
      required: true,//default true
      pattern: '^[a-zA-Z\u0590-\u05FF\-\' ]+$',
      placeholder:'',
     invalidFeedback: 'Fill the mandatory field',
   
   },
   passport:{
      name: 'passport',
      type: 'text',
      label:'ID number.',
      required: true,//default true
      pattern: '[0-9]{9}',
      placeholder:'',
      invalidFeedback:'Fill in a field with 9 digits',
   },
   email:{
      name: 'email',
      type: 'text',
      label:'email',
      required: true,//default true
      pattern: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      placeholder:'',
      invalidFeedback:'Fill the mandatory field',
   },
   address:{
      name: 'address',
      type: 'text',
      label:'residential address',
      required: true,//default true
      pattern: '',
      placeholder:'',
      invalidFeedback:'current residental address field is mandatory',
   },
   phone:{
      name: 'phone',
      type: 'text',
      label: 'Phone #' ,
      required: false,//default true
      pattern: '[0-9]{9,16}',
      placeholder:'Your phone number , digits only',
      invalidFeedback:'Fill the mandatory field',
  
   },
   ravkav:{
      name: 'ravkav',
      type: 'text',
      label:'Rav Kav No:',
      required: false,//default true
      pattern: '',
      placeholder:'',
      invalidFeedback:'',
  
   },
   iamagree:{
      name: 'iamagree',
      type: 'text',
      label:'I am agree',
      required: true,//default true
      pattern: '',
      placeholder:'',
      invalidFeedback:'',
  
   },

   pay : {
      terms:{
         ref:'/en/registration/payment/terms',//
         text:'Terms of use'
      },
      policy:{
         ref:'/en/registration/payment/policy',//
         text:'privacy policy'
      },
   }      
};
const REGISTR_RU : IRegistrationFields = {
   langId:'en',
   direction:'ltr',
   title:'Register for the bicycle parking system',
   title2:'To use the parking lot services, please fill in the following details',
   name: {
      name: 'name',
      type: 'text',
      label:'First name and last name',
      required: true,//default true
      pattern: '^[a-zA-Z\u0590-\u05FF\-\' ]+$',
      invalidFeedback: 'Fill the mandatory field',
      placeholder:''
  
   },
   passport:{
      name: 'passport',
      type: 'text',
      label:'ID number.',
      required: true,//default true
      pattern: '[0-9]{9}',
      placeholder:'',
      invalidFeedback:'Fill in a field with 9 digits',
   },
   email:{
      name: 'email',
      type: 'text',
      label:'email',
      required: true,//default true
      pattern: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      placeholder:'',
      invalidFeedback:'Fill the mandatory field',
    },
   address:{
      name: 'address',
      type: 'text',
      label:'residential address',
      required: true,//default true
      pattern: '',
      placeholder:'Residental address',
      invalidFeedback:'Fill the mandatory field',
  
   },
   phone:{
      name: 'phone',
      type: 'text',
      label: 'phone #' ,
      required: true,//default true
      pattern: '[0-9\+\-]{10,15}',
      placeholder:'',
      invalidFeedback:'Fill the mandatory field',
  
   },
   ravkav:{
      name: 'ravkav',
      type: 'text',
      label:'מספר רב קו',
      required: false,//default true
      pattern: '',
      placeholder:'',
      invalidFeedback:'',
  
   },
   iamagree:{
      name: 'iamagree',
      type: 'text',
      label:'I am agree',
      required: true,//default true
      pattern: '',
      placeholder:'',
      invalidFeedback:'',
  
   },

   pay : {
      terms:{
         ref:'/en/registration/payment/terms',//
         text:'Terms of use'
      },
      policy:{
         ref:'/en/registration/payment/policy',//
         text:'privacy policy'
      },
   }      
};
const REGISTR_HE : IRegistrationFields = {
   langId:'he',
   direction:'rtl',
   title:'הרשמה למערכת חניון אופניים',
   title2:'כדי להשתמש בשירותי החניון אנא מלא את הפרטים הבאים',
   name: {
      name: 'name',
      type: 'text',
      label:'שם פרטיומשפחה',
      required: true,//default true
   
      placeholder: '',
      invalidFeedback: 'תמלא שדה חובה',
   },
   passport:{
      name: 'passport',
      type: 'text',
      label:'מספר ת.ז.',
      required: true,//default true
      pattern: '[0-9]{9}',
      placeholder: '',
      invalidFeedback:'תמלא שדה ב 9 ספרות',
   },
   email:{
      name: 'email',
      type: 'text',
      label:'אימייל',
      required: true,//default true
      pattern: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      placeholder: '',
      invalidFeedback:'תמלא שדה חובה',
   },
   address:{
      name: 'address',
      type: 'text',
      label:'כתובת מגורים',
      required: true,//default true
      pattern: '',
      placeholder: '',
      invalidFeedback:'תמלא שדה חובה',
   },
   phone:{
      name: 'phone',
      type: 'text',
      label:'מספר טלפון',
      required: true,//default true
      pattern: '[0-9\+\-]{10,15}',
      placeholder: '',
      invalidFeedback:'תמלא שדה חובה',
   },
   ravkav:{
      name: 'ravkav',
      type: 'text',
      label:'מספר רב קו',
      required: false,//default true
      pattern: '',
      placeholder: '',
      invalidFeedback:'',
   },
   iamagree:{
      name: 'iamagree',
      type: 'text',
      label:'אני מסכים ל',
      required: true,//default true
      pattern: '',
      placeholder: '',
      invalidFeedback:''
   },
  
   pay : {
      terms:{
         ref:'/he/registration/payment/terms',//
         text:'תנאי השימוש'
      },
      policy:{
         ref:'/he/registration/payment/policy',//
         text:'מדיניות הפרטיות'
      },
   }
};

const REGISTR_AR : IRegistrationFields = {
   langId:'ar',
   direction:'rtl',
   title:'التسجيل في نظام وقوف الدراجات الهوائية',
   title2:'لاستخدام خدمات موقف السيارات ، يرجى ملء التفاصيل التالية' ,
    name: {
      name: 'name',
      type: 'text',
      label:'الاسم الأول واسم العائلة',
      required: true,//default true
      placeholder: '',
      invalidFeedback: 'املأ الحقل المطلوب',
   },
   passport:{
      name: 'passport',
      type: 'text',
      label:'رقم الهويه.',
      required: true,//default true
      pattern: '[0-9]{9}',
      placeholder: '',
      invalidFeedback:'املأ الحقل بـ 9 أرقام',
   },
   email:{
      name: 'email',
      type: 'text',
      label:'بريد إلكتروني',
      required: true,//default true
      pattern: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      placeholder: '',
      invalidFeedback:'املأ الحقل بتنسيق البريد الإلكتروني',
   },
   address:{
      name: 'address',
      type: 'text',
      label:'عنوان السكن',
      required: true,//default true
      pattern: '',
      placeholder: '',
      invalidFeedback:'',
   },
   phone:{
      name: 'phone',
      type: 'text',
      label:'رقم الهاتف',
      required: true,//default true
      pattern: '[0-9\+\-]{10,15}',
      placeholder: '',
      invalidFeedback: 'املأ الحقل المطلوب',
   },
   ravkav:{
      name: 'ravkav',
      type: 'text',
      label: "رقم \"Rav Kav\"",
      required: false,//default true
      pattern: '',
      placeholder: '',
      invalidFeedback:'املأ الحقل بـ 9 أرقام',
   },
   iamagree:{
      name: 'iamagree',
      type: 'text',
      label:'أوافق على',
      required: true,//default true
      pattern: '',
      placeholder: '',
      invalidFeedback:''
   },
  
   pay : {
      terms:{
         ref:'/ar/registration/payment/terms',//
         text:'תנאי השימוש'
      },
      policy:{
         ref:'/ar/registration/payment/policy',//
         text:'מדיניות הפרטיות'
      },
   }
};


export function GETRegistrationFields(langId:string):IRegistrationFields {

   switch (langId) {
      case 'ru': return  REGISTR_RU;
      case 'ar': return  REGISTR_AR;
      case 'he': return  REGISTR_HE;
 
   }
   return REGISTR_EN;
}
