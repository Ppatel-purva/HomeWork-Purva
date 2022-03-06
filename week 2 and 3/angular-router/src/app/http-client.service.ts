import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


  constructor(private ht: HttpClient) { }

  productsUrl = "http://localhost:3000/products"
  cartUrl = " http://localhost:3000/cart"
  getProducts() {
    return this.ht.get(this.productsUrl);
  }

  addToCart(data: any) {
    return this.ht.post(this.cartUrl, data);
  }
  getCartItems() {
    return this.ht.get(this.cartUrl);
  }
}