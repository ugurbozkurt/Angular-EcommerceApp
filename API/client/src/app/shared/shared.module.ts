import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponentComponent } from './components/paging-header-component/paging-header-component.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    PagingHeaderComponentComponent,
    PagerComponent,
    OrderTotalsComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  exports : [
    PaginationModule,
    PagingHeaderComponentComponent,
    PagerComponent,
    OrderTotalsComponent,
    ReactiveFormsModule,
    BsDropdownModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
