import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntriesComponent } from './entries/entries.component';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full'},
  {path: 'entries', component: EntriesComponent},
//  {path : 'entry-add', component: EntryAddComponent},
  {path : 'entry-details/:id', component: EntryDetailsComponent},
 // {path : 'comments/:id', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
