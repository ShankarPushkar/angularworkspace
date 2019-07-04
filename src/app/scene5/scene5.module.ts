import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandparentComponent } from './grandparent/grandparent.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, GrandparentComponent],
  imports: [
    CommonModule
  ]
})
export class Scene5Module { }
