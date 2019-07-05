import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scene5parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Scene5ParentComponent implements OnInit {
  @Output()
  public msg1=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onclick(value){
    this.msg1.emit(value);
    console.log(this.msg1.emit(value));
  }

}
