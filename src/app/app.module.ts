import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from './pages/language/language.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { TokeybDirective } from './keyboard/tokeyb.directive';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    KeyboardComponent,
    TokeybDirective,
    RegistrationComponent,
    ErrorComponent
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
