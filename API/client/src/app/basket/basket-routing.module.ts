import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';
import { SharedModule } from '../shared/shared.module';



const routes = [
  {path:'', component: BasketComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BasketRoutingModule { }
