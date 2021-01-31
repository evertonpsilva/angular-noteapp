import { Injectable } from "@angular/core";
import { Note } from "../models/note.resource";
import * as uuid from 'uuid';

@Injectable()
export class NoteService{

    private _noteList: Note[] = [
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
        {id: uuid.v4(), title: 'teste1', description: 'teste descricao', active: true},
    ];

    get getAll(): Note[]{
        return this._noteList;
    }

    add(note: Note){
        this._noteList.push(note);
    }

    put(noteUpdated: Note){
        let noteIndex = this.getNoteIndex(noteUpdated);

        this._noteList[noteIndex] = noteUpdated;
    }

    delete(note: Note){
        const noteIndex = this.getNoteIndex(note);

        this._noteList.splice(noteIndex, 1);
    }

    private getNoteIndex(noteParameter: Note): number{
        return this._noteList.findIndex((note) => note.id === noteParameter.id)
    }

}