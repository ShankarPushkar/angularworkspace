import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scene2Cmp1Component } from './cmp1/cmp1.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [Scene2Cmp1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Scene2Cmp1Component
  ]
})
export class Scene2Module { }
