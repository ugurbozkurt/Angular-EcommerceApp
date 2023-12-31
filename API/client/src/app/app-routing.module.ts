import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountModule } from './account/account.module';
import LoginComponent from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'shop', component: ShopComponent, data: { breadcrumb: 'Shop' } },
  { path: 'basket', component: BasketComponent, data: { breadcrumb: 'Basket' } },
  { path: 'checkout', component: CheckoutComponent, data: { breadcrumb: 'Checkout' } },
  { path: 'account/login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'account/register', component: RegisterComponent, data: { breadcrumb: 'Register' } },
 
 
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { breadcrumb: 'Not Found' },
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
    data: { breadcrumb: 'Server Error' },
  },
  {
    path: 'test-error',
    component: TestErrorComponent,
    data: { breadcrumb: 'Test Error' },
  },
  {
    path: 'shop/:id',
    component: ProductDetailsComponent,
    data: { breadcrumb: { alias: 'productDetails' } },
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
