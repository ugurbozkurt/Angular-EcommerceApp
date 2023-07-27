import { Injectable } from '@angular/core';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shared/models/basket';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../shared/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baseUrl = "https://localhost:7201/api/";

  private basketSource = new BehaviorSubject<IBasket | null>(null);

  basket$ = this.basketSource.asObservable(); 

  private basketTotalSource = new BehaviorSubject<IBasketTotals | null>(null);

  basketTotal$ = this.basketTotalSource.asObservable();

  constructor(private http:HttpClient) { }

  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'basket?id=' + id).pipe(
      map((basket: IBasket | any) => {
        this.basketSource.next(basket);
        this.calculateTotals();
        console.log("getCurrentBasketValue=>",this.getCurrentBasketValue());
      })
    );
  }

  setBasket(basket: IBasket){
    return this.http.post(this.baseUrl+'basket',basket).subscribe((response : IBasket | any)=>{
      this.basketSource.next(response);
      this.calculateTotals();
      if(localStorage.getItem('basket_id') === 'undefined')
      { 
        localStorage.setItem('basket_id',response.id);
      }
    },error=>{
      console.log(error);
    });
  }

  getCurrentBasketValue(){
    return this.basketSource.value;
  }

  addItemToBasket(item:IProduct,quantity=1){
    const itemToAdd:IBasketItem = this.mapProductItemToBasketItem(item,quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    console.log('addItemToBasket=>',basket);
    basket.items = this.addOrUpdateItem(basket.items,itemToAdd,quantity);
    this.setBasket(basket);
  }


  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const Index = items.findIndex(i=>i.id === itemToAdd.id);
    console.log("Index=>",Index);
    console.log("itemToAddItems=>",itemToAdd);
    if(Index === -1)
    {
      items.push(itemToAdd);
    }
    else{
      items[Index].quantity += quantity;
    }
    return items;
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id',basket.id);
    return basket;
  }
  private mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id : item.id, 
      productName : item.productName,
      price : item.price,
      pictureUrl : item.pictureUrl,
      quantity,
      brand : item.productBrand,
      type : item.productType
    }
  }

  private calculateTotals(){
    const basket = this.getCurrentBasketValue();
    const shipping = 0;
    const subtotal = basket?.items.reduce((a,b)=>(b.price*b.quantity)+a,0);
    const total = shipping + subtotal!;
    this.basketTotalSource.next({shipping,total,subTotal:subtotal!});
  }

  incrementItemQuantity(item: IBasketItem){
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket?.items.findIndex(x=>x.id === item.id);
    basket!.items[foundItemIndex!].quantity++;
    this.setBasket(basket!);
  }

  decrementItemQuantity(item:IBasketItem){
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket?.items.findIndex(x=>x.id === item.id);
    if(basket!.items[foundItemIndex!].quantity > 1){
      basket!.items[foundItemIndex!].quantity--;
    }
    else{
      this.removeItemFromBasket(item);
    }
    this.setBasket(basket!);  
  }

  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue()!;
    if(basket.items.some(x=>x.id === item.id)){
      basket.items = basket.items.filter(i=> i.id !== item.id);
      if(basket.items.length>0){
        this.setBasket(basket);
      }else{
        this.deleteBasket(basket);
      }
    }
    }

    deleteBasket(basket: IBasket) {

      return this.http.delete(this.baseUrl+'basket?id='+basket.id).subscribe(()=>{
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
      },error=>{
        console.log(error);
      });
      
    }

}

