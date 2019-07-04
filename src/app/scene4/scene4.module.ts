import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scene4ChildComponent } from './child/child.component';
import { Scene4ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [Scene4ChildComponent, Scene4ParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    Scene4ChildComponent,
    Scene4ParentComponent
  ]
})
export class Scene4Module { }
