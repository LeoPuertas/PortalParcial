import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { MainComponent } from './main/components/main/main.component';
import { LoaderComponent } from './core/layout/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './core/services/inteceptors/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { MessageDialogComponent } from './core/layout/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainComponent,
    LoaderComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResourceModule.forRoot(),
    LoginModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
