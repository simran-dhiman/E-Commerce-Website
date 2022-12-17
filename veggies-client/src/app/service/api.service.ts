import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { User } from '../model/user';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl: string;

  constructor(private httpClient: HttpClient) {
    this.serverUrl = 'http://localhost:8081';
  }

  login(user: User): Observable<User> {
    let url = this.serverUrl + '/login';
    return this.httpClient.post<User>(url, user);
  }

  register(user: User): Observable<User> {
    let url = this.serverUrl + '/register';
    return this.httpClient.post<User>(url, user);
  }

  getHomeProducts(): Observable<Map<string, Array<Product>>> {
    let url = this.serverUrl + '/home-products';
    return this.httpClient.get<Map<string, Array<Product>>>(url);
  }

  getProductsByCategory(category: string): Observable<Array<Product>> {
    let url = this.serverUrl + '/get-products-by-category/' + category;
    return this.httpClient.get<Array<Product>>(url);
  }

  getProductsByBrand(brand: string): Observable<Array<Product>> {
    let url = this.serverUrl + '/get-products-by-brand/' + brand;
    return this.httpClient.get<Array<Product>>(url);
  }

  getCart(userId: number): Observable<Array<Cart>> {
    let url = this.serverUrl + '/cart/' + userId;
    return this.httpClient.get<Array<Cart>>(url);
  }

  addToCart(userId: number, prodId: number): Observable<any> {
    let url = this.serverUrl + '/add-to-cart/' + userId + '/' + prodId;
    return this.httpClient.post<any>(url, null);
  }

  updateCartItem(item: Cart): Observable<any> {
    let url = this.serverUrl + '/update-cart-item';
    return this.httpClient.post<any>(url, item);
  }

  removeItemFromCart(itemId: number): Observable<any> {
    let url = this.serverUrl + '/remove-item-from-cart/' + itemId;
    return this.httpClient.delete<any>(url);
  }

}
