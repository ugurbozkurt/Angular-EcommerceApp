import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IUser } from 'src/app/shared/models/IUser';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],

})
export class NavBarComponent implements OnInit {

    basket$!  : Observable<IBasket | null>
    currentUserName$! : Observable<IUser | null>;
    constructor(private basketService: BasketService, private accountService: AccountService) {
    }
    ngOnInit(): void {
      this.basket$ = this.basketService.basket$;
      this.currentUserName$ = this.accountService.currentUser$ ;
    }
    logout(){
      this.accountService.logout();
    }
}
