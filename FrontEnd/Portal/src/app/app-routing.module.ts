import { AuthService } from './login/api/services/auth.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { MainPageComponent } from './main/pages/main-page/main-page.component';

const routes: Routes = [
  { path : 'main', component : MainPageComponent, canActivate: [AuthService] },
  { path : 'login', component : LoginComponent },
  { path : '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
