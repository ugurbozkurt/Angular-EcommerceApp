import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/IProduct';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  products : IProduct[] = [];
  
  constructor(private shopService: ShopService) {
    
    
  }
  ngOnInit(): void {
    this.shopService.getProducts().subscribe(response =>{
      this.products = response.data;
    },err=>{
      console.log(err);
    });
  }
}
