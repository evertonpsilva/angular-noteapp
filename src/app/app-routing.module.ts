import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'new', component: AddNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
