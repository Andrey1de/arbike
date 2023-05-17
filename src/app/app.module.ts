import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from './pages/language/language.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { TokeybDirective } from './keyboard/tokeyb.directive';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    KeyboardComponent,
    TokeybDirective
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
