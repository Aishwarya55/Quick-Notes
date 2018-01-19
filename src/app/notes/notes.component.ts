import { Component, OnInit, Input,ViewChild, ElementRef } from '@angular/core';
import {Notes} from './notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @ViewChild('notepad') notepad:ElementRef;
  @ViewChild('header') header:ElementRef;
  @Input() search: string;
  notes: Notes = {
    heading :'Enter your title here',
    content : 'Enter your text here'
  };
  onBlur(type: string): void{
    if(type === "content"){
      console.log(this.notepad.nativeElement.innerHTML);
      if(this.notepad.nativeElement.innerHTML === '')
        this.notes.content = 'Enter your text here';
      else{
        this.notes.content= this.notepad.nativeElement.innerHTML;
      }
    }
  else{
    if(this.header.nativeElement.innerHTML === '')
       this.notes.heading = 'Enter your title here';
    else{
      this.notes.heading= this.header.nativeElement.innerHTML;
    }
  }
  }

  onFocus(type: string): void{
    console.log(type);
    if(type === "content"){  
      if(this.notepad.nativeElement.innerHTML === 'Enter your text here')
       this.notes.content = '';
      else{
      this.notes.content = this.notepad.nativeElement.innerHTML;
      }
    }
    else{
      console.log("yess");
      if(this.header.nativeElement.innerHTML === 'Enter your title here')
       this.notes.heading = '';
      else{
      this.notes.heading = this.header.nativeElement.innerHTML;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
