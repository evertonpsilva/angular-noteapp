import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition,  query, stagger, animateChild } from '@angular/animations';
import { Note } from 'src/app/models/note.resource';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

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
        animate('1s cubic-bezier(.4, -0.5, 0.4, 1.0)', 
         style({ 
           transform: 'scale(0.01)', opacity: 0, 
           height: '0px', margin: '0px', padding: '0px'
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
export class NoteListComponent implements OnInit, AfterViewInit {

  @ViewChild('search') search: ElementRef;
  list: Note[] = [];
  loaded: boolean = false;

  constructor(
    private noteService: NoteService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.list = this.noteService.getAll();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 600);
  }

  delete(item: Note){
    console.log(item);
    this.noteService.delete(item);
  }

  done(item: Note){
    item.active = false;
    this.noteService.put(item);
  }

  enable(item: Note){
    item.active = true;
    this.noteService.put(item);
  }

  edit(item: Note){
    this.noteService.editingItem = item;
    this.router.navigate(['/new']);
  }

  get filteredList(){
    if(this.loaded){
      return this.noteService.filterList(this.search.nativeElement.value);
    }
    return this.list;
  }

}
