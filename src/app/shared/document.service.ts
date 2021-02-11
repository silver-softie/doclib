import { Injectable } from '@angular/core';
import { DocLibDoc } from '../models/doclibdoc';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: DocLibDoc[] = [
    new DocLibDoc('abc', 'My document', 'Brad'),
    new DocLibDoc('def', 'Another document', 'Dawn'),
    new DocLibDoc('ghi', 'Yet another document', 'Isla'),
    new DocLibDoc('jkl', 'More document', 'Cait'),
  ]

  constructor() { }
}
