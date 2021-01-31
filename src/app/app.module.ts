import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteListComponent } from './components/note-list/note-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import {MatIconModule} from '@angular/material/icon';
import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    NoteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
