import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scene4child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Scene4ChildComponent implements OnInit {

  @Output()
public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onclick(value)
  {
    this.childEvent.emit(value);
  }

}
