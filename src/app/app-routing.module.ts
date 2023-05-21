import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './pages/language/language.component';

const routes: Routes = [

  { path: 'lang', component: LanguageComponent },
  { path: '', redirectTo: '/lang', pathMatch: 'full' },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
