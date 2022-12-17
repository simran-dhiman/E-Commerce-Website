import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../model/app-constants';
import { Product } from '../model/product';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage-service';
import { Cart } from '../model/cart';
import { User } from '../model/user';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Cart> = new Array();
  products: Product[];
  totalItems: number = 0;
  totalPrice: number = 0;
  itemUpdating: boolean;

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    let user: User = this.localStorageService.getLoggedInUser();

    if (user) {
      this.apiService.getCart(user.id).subscribe((cartList) => {
        this.cart = cartList;
        this.updateSummary();
      });
    } else {
      this.cart = this.localStorageService.getCart();
      this.updateSummary();
    }
  }
  
  decreaseQuantity(item: Cart) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateItem(item);
    }
  }

  increaseQuantity(item: Cart) {
    if (item.quantity < item.product.quantity) {
      item.quantity++;
      this.updateItem(item);
    }
  }

  updateItem(item) {
    this.itemUpdating = true;
    this.apiService.updateCartItem(item).subscribe(
      () => {
        this.itemUpdating = false;
        this.updateSummary();
      }, error => {
        this.itemUpdating = false;
      }
    );
  }

  updateSummary() {
    this.totalItems = this.cart.length;
    let price = 0;

    console.log(this.cart.length);

    this.cart.forEach(item => price += item.product.price * item.quantity);
    // this.cart.forEach(item => console.log(item));

    // for(let item of this.cart) {
    //   console.log(item);
    //   price += item.product.price * item.quantity;
    // }

    this.totalPrice = price;
  }

  removeItem(item: Cart) {
    console.log(this.cart);
    console.log(item);
    
    console.log(this.cart);
    this.apiService.removeItemFromCart(item.id).subscribe(
      () => {
        this.cart = this.cart.filter(itm => itm.id != item.id);
        this.updateSummary();
      }
    );
  }

}
