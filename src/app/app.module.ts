import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scene2Module } from './scene2/scene2.module';

import { FormsModule } from '@angular/forms';
import { Scene3Module } from './scene3/scene3.module';
import { Scene4Module } from './scene4/scene4.module';
import { Scene5Module } from './scene5/scene5.module';
import { Scene6Module } from './scene6/scene6.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Scene2Module,
    Scene3Module,
    FormsModule,
    Scene4Module,
    Scene5Module,
    Scene6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
