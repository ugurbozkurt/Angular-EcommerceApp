import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-paging-header-component',
  templateUrl: './paging-header-component.component.html',
  styleUrls: ['./paging-header-component.component.css']
})
export class PagingHeaderComponentComponent implements OnInit {

  @Input()
  pageNumber!: number;
  @Input()
  pageSize!: number;
  @Input()
  totalCount!: number;

  constructor() { }
  ngOnInit(): void {
  }

}

