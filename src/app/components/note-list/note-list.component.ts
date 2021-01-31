import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition,  query, stagger, animateChild } from '@angular/animations';
import { Note } from 'src/app/models/note.resource';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.1)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.4, -0.5, 0.0, 1.1)', 
         style({ 
           transform: 'scale(0.5)', opacity: 0, 
           height: '0px', margin: '0px' 
         })) 
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(300, animateChild()), { optional: true })
      ]),
    ])
  ]
})
export class NoteListComponent implements OnInit {

  list: Note[] = [];

  constructor(
    private noteService: NoteService,
  ) { }


  ngOnInit(): void {
    this.list = this.noteService.getAll;
    console.log(this.list);
  }

  remover(){}

}
