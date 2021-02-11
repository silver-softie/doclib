import { Component, Input, OnInit } from '@angular/core';

import { DocLibDoc } from '../../models/doclibdoc';

@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrls: ['./doc-item.component.css']
})
export class DocItemComponent implements OnInit {
  @Input() document: DocLibDoc;

  constructor() { }

  ngOnInit(): void {
  }

}
