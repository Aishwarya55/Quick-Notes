import {Injectable} from '@angular/core';
import { list } from './list'

@Injectable()
 export class ListService {
    displaylist : list;

    getDisplayList() : list {
        return this.displaylist;
    }

    setDisplayList(list: list) :void {
        this.displaylist = list;
    }

}