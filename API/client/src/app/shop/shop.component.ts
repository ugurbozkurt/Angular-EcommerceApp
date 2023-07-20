import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/IProduct';
import { IBrand } from '../shared/models/IBrand';
import { IType } from '../shared/models/IType';
import { ShopParams } from '../shared/models/ShopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  products : IProduct[] = [];
  types : IType[] = [];
  brands : IBrand[] = [];
  shopParams = new ShopParams();
  totalCount= 0;
  constructor(private shopService: ShopService) {
    
    
  }
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(response =>{
      this.products = response!.data;
      this.shopParams.pageNumber = response!.pageIndex;
      this.shopParams.pageSize = response!.pageSize;
      this.totalCount = response!.count;
      console.log(this.shopParams.pageNumber)
      console.log(this.shopParams.pageSize)
    },err=>{
      console.log(err);
    });
  }
  getBrands(){
    this.shopService.getBrands().subscribe(response =>{
      this.brands = [this.shopParams.firstItem,...response];
    },err=>{
      console.log(err);
    });
  }

  getTypes(){
    this.shopService.getTypes().subscribe(response =>{
      this.types = [this.shopParams.firstItem,...response]
    },err=>{
      console.log(err);
    });
  }
  onBrandSelected(brandId : number){
    this.shopParams.brandId = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId : number){
    this.shopParams.typeId = typeId;
    this.getProducts();
  }
  onSortSelected(sort : string){
    this.shopParams.sort = sort;
    this.getProducts();
  }
  onPageChanged(event : any ){
    this.shopParams.pageNumber = event.page;
    this.getProducts();
  }

}
