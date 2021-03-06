import { Component, OnInit, Input,ViewChild, ElementRef } from '@angular/core';
import {Notes} from './notes';
import { NoteService } from './note.service'
import {dashboardList} from  '../dashboardList'
import {dashboardContent} from '../dashboardContent'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
 

})
export class NotesComponent implements OnInit {
  @ViewChild('notepad') notepad:ElementRef;
  @ViewChild('header') header:ElementRef;
  @Input() search: string;
  notes : Notes;
  onBlur(type: string): void{
    if(type === "content"){
      console.log(this.notepad.nativeElement.innerHTML);
      if(this.notepad.nativeElement.innerHTML === '<br>')
        this.notes.content = 'Enter your text here';
      else{
        this.notes.content= this.notepad.nativeElement.innerHTML;
      }
    }
  else{
    if(this.header.nativeElement.innerHTML === '<br>' || this.header.nativeElement.innerHTML === '')
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
       this.notes.content = '<br>';
      else{
      this.notes.content = this.notepad.nativeElement.innerHTML;
      }
    }
    else{
      console.log("yess");
      if(this.header.nativeElement.innerHTML === 'Enter your title here')
       this.notes.heading = '<br>';
      else{
      this.notes.heading = this.header.nativeElement.innerHTML;
      }
    }
  }
  searchText() : void{
    if(this.notes.content !== 'Enter your text here'){
      this.notes.content = this.notes.content.replace(new RegExp( "<span class='highlight'>" , 'g'), "");
      this.notes.content = this.notes.content.replace(new RegExp( "</span>" , 'g'), "");
      this.notes.content = this.notes.content.replace(new RegExp( this.search , 'g'), "<span class='highlight'>"+this.search+"</span>");
    }
  }

  saveNote() : void{
  var item : dashboardContent = {
    heading : this.notes.heading,
    content : this.notes.content,
    listItem : [],
    type : 'note'
  }
  console.log(this.notes.content !== 'Enter your text here');

  if(this.notes.content !== 'Enter your text here' && this.notes.content !== '<br>')
    dashboardList.push(item);
  }

  constructor(private noteservice: NoteService) {}


  ngOnInit() {
    if(this.noteservice.getDisplayNote()!== null && this.noteservice.getDisplayNote() !== undefined)
      this.notes = this.noteservice.getDisplayNote();
    else
      this.notes = {
        heading :'Enter your title here',
        content : 'Enter your text here'
      }
  }

}
