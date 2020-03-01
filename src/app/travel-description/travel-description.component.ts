import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { trips } from '../trips';


@Component({
  selector: 'app-travel-description',
  templateUrl: './travel-description.component.html',
  styleUrls: ['./travel-description.component.css']
})
export class TravelDescriptionComponent implements OnInit {
  trip;
  constructor( private route: ActivatedRoute, private cartService: CartService) { 

  }
   addToCart(trip) {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(trip);
 }


  ngOnInit() {
         this.route.paramMap.subscribe(params => {
   this.trip = trips[+params.get('tripId')];
    });
  }

}
