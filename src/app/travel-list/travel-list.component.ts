import { Component, OnInit } from '@angular/core';
import { trips} from '../trips';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  trips = trips;
  result;
  constructor(private formBuilder: FormBuilder) {
  	this.result= formBuilder.group({
     name: ''
   });
   }
   compair(trip ) {
   	var rr = trip.distination
var bool= (rr == this.result);
return bool;

    }

  ngOnInit(): void {
  }

}
