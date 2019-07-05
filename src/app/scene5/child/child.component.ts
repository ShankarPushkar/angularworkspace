import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scene5child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Scene5ChildComponent implements OnInit {
  @Output()
  public childevent = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  log( value) {
    this.childevent.emit(value);
}

}
