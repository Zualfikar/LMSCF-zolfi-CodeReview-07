import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items =[];
  constructor() { }
  
  addToCart(trip) {
    this.items.push(trip);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}

