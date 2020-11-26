import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { LoginResourceService } from './api/services/login-resource.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResourceHandler } from '@ngx-resource/core';



@NgModule({
  declarations: [
    LoginComponent,
    MainLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    NgbActiveModal,
    LoginResourceService
  ]
})
export class LoginModule { }
