import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service'
import { dashboardContent } from '../dashboardContent'
import {Router} from '@angular/router';
import { NoteService } from '../notes/note.service'
import { Notes } from '../notes/notes';
import { dashboardFilter } from './dashboardFilter'
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  dashboarditems: dashboardContent[]
  toggleView : String
   @Input() search_dashboard: string;
  constructor(private router : Router, private dashboardservice : DashboardService, private noteservice : NoteService) {}

   getdashboardcontent() : void {
    this.dashboardservice.getdashboardData().then( data =>{
      this.dashboarditems = data;
      console.log(this.dashboarditems)
    })

   
 }

 switchView(view: String):void{
  this.toggleView  = view;
 }

 openNote(item :dashboardContent): void{
  let note : Notes = {
    heading : item.heading,
    content : item.content
  };
    this.noteservice.setDisplayNote(note)
    this.router.navigate(['/notes']);
  console.log(this.noteservice.getDisplayNote(),"lalala");
  
 }

  ngOnInit() {
    this.getdashboardcontent();
    this.toggleView = 'grid';
  }

}
