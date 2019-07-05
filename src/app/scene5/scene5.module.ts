import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scene5ParentComponent } from './parent/parent.component';
import { Scene5ChildComponent } from './child/child.component';
import { Scene5GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  declarations: [Scene5ParentComponent, Scene5ChildComponent, Scene5GrandparentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    Scene5ChildComponent,
    Scene5GrandparentComponent,
    Scene5ParentComponent
  ]
})
export class Scene5Module { }
