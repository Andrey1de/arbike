import { ILang } from "src/app/interf/interfaces";

export const G_EN : ILang = {
    langId:'en',
    name:'English',
    descr: '',
    btns:{
        return:'Back',
        exit:'Exit',
        continue:'Next',
        registration:'Registration',
    },
    registr:{
      title:'',
      title2:'',
      name:'',
      passport:'',
      email:'',
      address:'',
      phone:'מספר טלפון',
      ravkav:'',
      iamagree:'',
      paytermstxt:'',
      paytermsref:'/en/registration/payment/terms',
      paypolicytxt:'',
      paypolicyref:'/en/registration/payment/policy',
  
    }
  };
  
  export const G_RU : ILang = {
    langId:'ru',
    name:'Русский',
    descr: '',
    btns:{
        return:'Назад',
        exit:'Выход',
        continue:'Далее',
        registration:'Регистрация',
    },

    registr:{
      title:'',
      title2:'',
      name:'',
      passport:'',
      email:'',
      address:'',
      phone:'מספר טלפון',
      ravkav:'',
      iamagree:'',
      paytermstxt:'',
      paytermsref:'/ru/registration/payment/terms',
      paypolicytxt:'',
      paypolicyref:'/ru/registration/payment/policy',

    }
  };
  export const G_HEB : ILang = {
    langId:'he',
    name:'עברית',
    descr: '',
    btns:{
        return:'חזור',
        exit:'יציאה',
        continue:'המשך',
        registration:'הראשמה',
     },

    registr:{
      title:'הרשמה למערכת חניון אופניים',
      title2:'כדי להשתמש בשירותי החניון אנא מלא את הפרטים הבאים:',
      name:'שם פרטי + משפחה',
      passport:'מספר ת.ז.',
      email:'אימייל',
      address:'כתובת מגורים',
      phone:'מספר טלפון',
      ravkav:'מספר רב קו',
      iamagree:'אני מסכים ל',//check
      paytermstxt:'תנאי השימוש',
      paytermsref:'/en/registration/payment/terms',
      paypolicytxt:'מדיניות הפרטיות',
      paypolicyref:'/en/registration/payment/policy',
  
    }
  };
  export const G_AR : ILang = {
    langId:'ar',
    name:'عربي',
    descr: '',
    btns:{
        return:'',
        exit:'',
        continue:'',
        registration:'',
    },

    registr:{
      title:'',
      title2:'',
      name:'',
      passport:'',
      email:'',
      address:'',
      phone:'מספר טלפון',
      ravkav:'',
      iamagree:'',
      paytermstxt:'',
      paytermsref:'/ar/registration/payment/terms',
      paypolicytxt:'',
      paypolicyref:'/ar/registration/payment/policy',
    }
  };