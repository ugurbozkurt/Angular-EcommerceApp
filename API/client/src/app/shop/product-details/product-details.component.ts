import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product? : IProduct ;
  quantity=1;
  constructor(private shopService : ShopService,private activateRoute: ActivatedRoute,private breadCrumbService:BreadcrumbService,private basketService:BasketService) {}

  ngOnInit(): void {
    this.loadProduct();

  }

  loadProduct(){
    this.shopService.getProduct(Number(this.activateRoute.snapshot.paramMap.get('id'))).subscribe(response =>{
      this.product = response;
      this.breadCrumbService.set('@productDetails',this.product.productName);
    },(error: any) =>{
      console.log(error);
    })
  }
  productQuantityReduceMens(){
    return this.quantity--;
  }
  productQuantityIncMens(){
    return this.quantity++;
  }
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product!,this.quantity);
  }


}
