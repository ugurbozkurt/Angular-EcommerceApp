import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import LoginComponent from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccoutRoutingModule } from './accout-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccoutRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
