import { Injectable } from "@angular/core";
import { Note } from "../models/note.resource";
import * as uuid from 'uuid';

@Injectable()
export class NoteService{

    private _editingItem: Note = null;

    get editingItem(){
        return this._editingItem;
    }

    set editingItem(note: Note){
        this._editingItem = note;
    }

    private _noteList: Note[] = [
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
    ];

    getAll(): Note[]{
        return this._noteList;
    }

    add(note: Note){
        if(note.id != null){
            this.put(note);
        }else{
            const newNote: Note = {...note, active: true, id: uuid.v4()};
            this._noteList.push(newNote);
        }
    }

    put(noteUpdated: Note){
        let noteIndex = this.getNoteIndex(noteUpdated);
        this._noteList[noteIndex] = noteUpdated;
    }

    delete(note: Note){
        const noteIndex = this.getNoteIndex(note);
        console.log(this._noteList);
        this._noteList.splice(noteIndex, 1);
    }

    filterList(query: string){
        return this.getAll().filter((note) => note.title.includes(query) || note.description.includes(query));
    }

    private getNoteIndex(noteParameter: Note): number{
        return this._noteList.findIndex((note) => note.id === noteParameter.id)
    }

}