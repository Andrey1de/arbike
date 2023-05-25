import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './pages/registration-page/registration.page.component';
import { ErrorComponent } from './pages/error/error.component';
import { LanguagePageComponent } from './pages/language-page/language-page.component';

const routes: Routes = [
  
  { path: 'reg', component: RegistrationPageComponent },
  { path: 'registr', component: RegistrationPageComponent },
  { path: 'lang', component: LanguagePageComponent },
  { path: 'error',    component: ErrorComponent  },
  { path: '', redirectTo: 'lang', pathMatch: 'full'},
  { path: '**', redirectTo: 'error', pathMatch: 'full'}
 // { path: '',   redirectTo: '/lang', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
