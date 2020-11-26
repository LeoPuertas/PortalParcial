import { MainLoginComponent } from './login/pages/main-login/main-login.component';

import { LoginComponent } from './login/components/login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'main', component : MainPageComponent, canActivate: [] },
  { path : 'login', component : MainLoginComponent },
  { path : '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
