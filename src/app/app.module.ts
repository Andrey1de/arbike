import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from './pages/language-component/language.component';
// import { KeyboardComponent } from './keyboard/keyboard.component';
// import { TokeybDirective } from './keyboard/tokeyb.directive';
import { RegistrationPageComponent } from './pages/registration-page/registration.page.component';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { LanguagePageComponent } from './pages/language-page/language-page.component';
import { KeyComponent } from './keyboard/key/key.component';
import { LangKeyboardComponent } from './keyboard/lang-keyboard/lang-keyboard.component';
import { TokeybDirective } from './keyboard/tokeyb.directive';
import { KeyboardMultiComponent } from './keyboard/keyboard-multi/keyboard-multi.component';
//import { KeyboardKeyComponent } from './keyboard/key/keyboard-key/keyboard-key.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    LangKeyboardComponent,
    // KeyboardComponent,
    TokeybDirective,
    RegistrationPageComponent,
    ErrorComponent,
    LanguagePageComponent,
   // AkbKeyboardService,
    KeyboardMultiComponent,
    KeyComponent
    //KeyboardKeyComponent
  ],
  imports: [

    BrowserModule,
    NgbModule ,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
