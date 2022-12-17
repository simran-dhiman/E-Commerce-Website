import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AppConstants } from '../model/app-constants';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem(AppConstants.LOGGED_IN_USER));
  }

  setLoggedInUser(user: User) {
    localStorage.setItem(AppConstants.LOGGED_IN_USER, JSON.stringify(user));
  }

  removeLoggedInUser() {
    localStorage.removeItem(AppConstants.LOGGED_IN_USER);
  }

  getCart(): Array<Cart> {
    return JSON.parse(localStorage.getItem(AppConstants.CART)) || new Array();
  }

  addToCart(cart: Cart) {
    let cartList: Array<Cart> = this.getCart();
    cartList.push(cart);
    localStorage.setItem(AppConstants.CART, JSON.stringify(cartList));
  }

}