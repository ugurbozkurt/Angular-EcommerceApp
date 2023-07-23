import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponentComponent } from './components/paging-header-component/paging-header-component.component';
import { PagerComponent } from './components/pager/pager.component';



@NgModule({
  declarations: [
    PagingHeaderComponentComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports : [
    PaginationModule,
    PagingHeaderComponentComponent,
    PagerComponent
  ]
})
export class SharedModule { }
