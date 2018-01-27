import { Component } from '@angular/core';
import { NoteService } from './notes/note.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NoteService]
})
export class AppComponent {
  title = 'app';
  isSelected :String = 'home';

  open(tab:String):void {
    console.log(tab,"tab")
    this.isSelected = tab;
  }

}
