import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scene3ChildComponent } from './child/child.component';
import { Scene3ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [Scene3ChildComponent, Scene3ParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Scene3ChildComponent,
    Scene3ParentComponent
    ]
})
export class Scene3Module { }
