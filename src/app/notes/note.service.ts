import {Injectable} from '@angular/core';
import { Notes } from './notes'

@Injectable()
 export class NoteService {
    displaynote : Notes;

    getDisplayNote() : Notes {
        return this.displaynote;
    }

    setDisplayNote(note: Notes) :void {
        this.displaynote = note;
    }

}