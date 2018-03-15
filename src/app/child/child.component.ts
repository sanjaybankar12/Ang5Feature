import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { DataModel } from '../model/data.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() model:DataModel;
  @Output() notifyMe=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  notifyParent(){
    this.notifyMe.emit('click event send from child');
  }
}
