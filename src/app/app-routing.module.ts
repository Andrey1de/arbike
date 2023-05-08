import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './pages/language/language.component';

const routes: Routes = [

  { path: '', redirectTo: '/lang', pathMatch: 'full' },
  { path: 'lang', component: LanguageComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
