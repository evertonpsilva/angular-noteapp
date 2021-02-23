import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { ValidateUtils } from 'src/app/utils/validate.utils.interface';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      title: [null],
      description: [null],
      active: [null]
    });
    const editingItem = this.noteService.editingItem;
    if(editingItem){
      this.form.patchValue(editingItem);
    }
  }

  save(): void{
    this.noteService.add(this.form.value);
    this.router.navigate(['/']);
  }

}
