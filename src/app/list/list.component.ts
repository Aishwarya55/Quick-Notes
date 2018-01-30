import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {list} from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: list = {
    'heading': 'Enter your title here',
    items: ['OptionA', 'OptionB', 'OptionC'],
    completed: ['OptionA']
  }
  itemsChecked = [];
  @ViewChild('inputItem')
  inputItem: ElementRef;

  updateCheckedOptions(item):void {

    if(this.list.completed.indexOf(item) >= 0)
      this.list.completed = this.list.completed.filter(obj => obj !== item);
    else
      this.list.completed.push(item);

    console.log(this.list.completed,"completed list")
  }

  addNewItem():void{
    this.list.items.push('__new__')
    // console.log( this.inputItem)
    this.inputItem.nativeElement.focus();
  }

  constructor() { }

  ngOnInit() {

  }


}
