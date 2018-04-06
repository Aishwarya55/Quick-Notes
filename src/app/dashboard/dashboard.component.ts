import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service'
import { dashboardContent } from '../dashboardContent'
import {Router} from '@angular/router';
import { NoteService } from '../notes/note.service'
import { Notes } from '../notes/notes';
import { dashboardFilter } from './dashboardFilter'
import { list } from '../list/list'
import { ListService } from '../list/list.service'
import { map, filter } from 'ramda'
 
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
  constructor(private router : Router, private dashboardservice : DashboardService, private noteservice : NoteService, private listservice: ListService) {}

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

   if(item.type === "note"){
    let note : Notes = {
      heading : item.heading,
      content : item.content
    };
      this.noteservice.setDisplayNote(note)
      this.router.navigate(['/notes']);
    console.log(this.noteservice.getDisplayNote(),"lalala");
  } else{
    console.log(item,"list item")
    let new_list : list = {
      heading: item.heading,
      items: map(curr => curr.item)(item.listItem),
      completed: filter((ele) => ele !== null , map( curr => curr.completed ? curr.item  : null )(item.listItem))
    }
    console.log(new_list)
    this.listservice.setDisplayList(new_list)
    console.log(this.listservice.getDisplayList(), "display_list");
    this.router.navigate(['/list']);

  }
 }

  ngOnInit() {
    this.getdashboardcontent();
    this.toggleView = 'grid';
  }

}
