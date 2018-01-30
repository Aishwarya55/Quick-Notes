import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesComponent} from './notes/notes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListComponent} from './list/list.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'notes', component: NotesComponent },
  { path: 'dashboard', component: DashboardComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}