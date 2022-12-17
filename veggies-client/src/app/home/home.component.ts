import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppConstants } from '../model/app-constants';
import { Product } from '../model/product';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage-service';
import { User } from '../model/user';
import { Cart } from '../model/cart';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // cart: Map<number, number>;
  productCategory: string;

  nestleLink: string;
  hersheysLink: string;
  heinzLink: string;
  drOetkarLink: string;
  knorrLink: string;
  bestSellingVeggies: Array<Product>;
  bestSellingFruits: Array<Product>;
  dealsOfTheDay: Array<Product>;
  readyToEatFood: Array<Product>;


  constructor(private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.nestleLink = '/products/' + AppConstants.NESTLE;
    this.hersheysLink = '/products/' + AppConstants.HERSHEYS;
    this.heinzLink = '/products/' + AppConstants.HEINZ;
    this.drOetkarLink = '/products/' + AppConstants.DR_OETKAR;
    this.knorrLink = '/products/' + AppConstants.KNORR;

    this.apiService.getHomeProducts().subscribe(
      (productsMap: Map<string, Array<Product>>) => {
        this.bestSellingVeggies = productsMap["bestSellingVeggies"];
        this.bestSellingFruits = productsMap["bestSellingFruits"];
        this.dealsOfTheDay = productsMap["dealsOfTheDay"];
        this.readyToEatFood = productsMap["readyToEatFood"];
      }
    );

    // this.cart = new Map<number, number>(JSON.parse(localStorage.getItem(AppConstants.CART)));
  }

  addToCart(cartItem: Cart) {
    let user: User = this.localStorageService.getLoggedInUser();
    console.log("Adding in cart");

    if (user) {
      this.apiService.addToCart(user.id, cartItem.id).subscribe(() => {
        console.log("Added item in cart");
      });
    // } else {
    //   this.localStorageService.addToCart(cartItem);
    }
  }

  // removeFromCart(cartItem: Cart) {
  //   this.cart.delete(cartItem.id);
  //   // this.saveCart();
  // }

  // saveCart() {
  //   localStorage.setItem(AppConstants.CART, JSON.stringify([...this.cart]));
  // }

}
