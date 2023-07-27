import { Component, OnInit } from '@angular/core';
import { IBasketTotals } from '../models/basket';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit {

  basketTotal$! : Observable<IBasketTotals | null>;
  basketTotal!: IBasketTotals; 
  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
    this.basketTotal$.subscribe(response=>{
      this.basketTotal = response!;
      console.log("Subscribe Log ",this.basketTotal);
    })
  }

}
