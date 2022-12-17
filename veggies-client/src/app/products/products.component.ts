import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppConstants } from '../model/app-constants';
import { Product } from '../model/product';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage-service';
import { Cart } from '../model/cart';
import { User } from '../model/user';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = new Array<Product>();
  // cart: Map<number, number>;
  productCategory: string;

  constructor(private router: Router, private apiService: ApiService, private localStorageService: LocalStorageService) {
    // When navigating to any product page, reload the products
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadProducts();
      }
    });
  }

  ngOnInit(): void {
    // this.loadProducts();
    // this.cart = new Map<number, number>(JSON.parse(localStorage.getItem(AppConstants.CART)));
  }

  loadProducts() {
    this.productCategory = this.router.url.split('/')[2];
    switch (this.productCategory) {
      case AppConstants.VEGETABLES:
      case AppConstants.FRUITS:
      case AppConstants.DRYFRUITS:
        this.apiService.getProductsByCategory(this.productCategory).subscribe(
          data => {
            this.products = data;
          }
        );
        break;
      case AppConstants.NESTLE:
      case AppConstants.HERSHEYS:
      case AppConstants.HEINZ:
      case AppConstants.DR_OETKAR:
      case AppConstants.KNORR:
        this.apiService.getProductsByBrand(this.productCategory).subscribe(
          data => {
            this.products = data;
          }
        );
        break;
    }
  }

  addToCart(cartItem: Cart) {
    // this.cart.set(id, 1);
    // let cartItem: CartItem = new CartItem();
    // cartItem.user = this.localStorageService.getLoggedInUser();
    // let prod: Product = new Product();
    // prod.id = id;
    // cartItem.product = cartItem.product || new Array();
    // cartItem.product.push(prod);
    // cartItem.quantity = 1;

    let user: User = this.localStorageService.getLoggedInUser();
    console.log("Adding in cart");
    if (user) {
      this.apiService.addToCart(user.id, cartItem.id).subscribe(() => {
        console.log("Added item in cart");
      });
    // } else {
    //   this.localStorageService.addToCart(cartItem);
    }
    // this.saveCart();
  }

  // removeFromCart(cartItem: Cart) {
  //   this.cart.delete(cartItem.id);
  //   // this.saveCart();
  // }

  // saveCart() {
  //   localStorage.setItem(AppConstants.CART, JSON.stringify([...this.cart]));
  // }

}
