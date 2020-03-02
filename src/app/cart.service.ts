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
  gettotal(){
    var total=0 ;
    var discount=0;
    for (var i = 0; i < this.items.length; i++) {
    var num = this.items[i];
    total=total+num.price ;
    
}
if (total > 200 && total < 500) 
{
   discount=total *10 /100;
   total= total -discount;
} 
else if (total > 500)
{
  discount=total *20 /100;
   total= total -discount; 
}
else 
{
    
}
return total
}

}

