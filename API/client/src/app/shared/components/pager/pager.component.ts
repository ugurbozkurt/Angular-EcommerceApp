import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager-component',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() pageSize!: number;
  @Input() pageNumber! :number;
  @Input() totalCount! : number;
  @Output() pageChange = new EventEmitter<number>();

  constructor() {
   
    
  }
  ngOnInit(): void {
  }

  onPagerChanged(event : any ){
    this.pageChange.emit(event.page); 
  }
}
