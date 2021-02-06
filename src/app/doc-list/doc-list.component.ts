import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  documents = [
    { id: 1, reference: 'abc', title: 'First doc', author: 'Brad', content: 'This is first document\'s content' },
    { id: 2, reference: 'def', title: 'Second doc', author: 'Dawn',  content: 'This is second document\'s content' },
    { id: 3, reference: 'ghi', title: 'Third doc', author: 'Isla', content: 'This is third document\'s content' }
  ]

  displayedColumns: string[] = ['id', 'reference', 'title', 'author'];

}
