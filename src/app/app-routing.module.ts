import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './pages/language/language.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  
  { path: 'registr', component: RegistrationComponent },
  { path: 'lang', component: LanguageComponent },
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
