import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { MainPageComponent } from './main/pages/main-page/main-page.component';
import { MainComponent } from './main/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResourceModule.forRoot(),
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
