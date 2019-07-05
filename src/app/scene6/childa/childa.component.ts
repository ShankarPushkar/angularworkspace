import { Component, OnInit, Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-childa',
  templateUrl: './childa.component.html',
  styleUrls: ['./childa.component.css']
})
export class ChildaComponent implements OnInit {
  @Output() public parentevent = new EventEmitter();
  onClick(value) {
    this.parentevent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
