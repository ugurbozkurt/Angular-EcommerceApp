import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponentComponent } from './components/paging-header-component/paging-header-component.component';



@NgModule({
  declarations: [
    PagingHeaderComponentComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports : [
    PaginationModule,
    PagingHeaderComponentComponent
  ]
})
export class SharedModule { }
