import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [ChildaComponent, ChildbComponent, ParentComponent],
  imports: [
    CommonModule
  ],
  exports:[ChildaComponent, ChildbComponent, ParentComponent]
})
export class Scene6Module { }
