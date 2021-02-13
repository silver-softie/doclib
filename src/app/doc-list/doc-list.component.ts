import { Component, OnInit } from '@angular/core';
import { DocLibDoc } from '../models/doclibdoc';


import { DocumentService } from '../shared/document.service';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css'],
  providers: [DocumentService]
})
export class DocListComponent implements OnInit {
  documents: DocLibDoc[];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
  }


}
