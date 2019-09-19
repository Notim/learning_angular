import { Component, OnInit } from '@angular/core';
import {Restaurant} from "./models/Restaurant";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  private _listRestaurants: Array<Restaurant>;

  public get listRestaurants(): Array<Restaurant> {
    return this._listRestaurants;
  }
  public set listRestaurants(value: Array<Restaurant>) {
    this._listRestaurants = value;
  }
  constructor() {
    this.listRestaurants = new Array<Restaurant>();
    this.listRestaurants.push({
      image:"uploads/images/restaurants/breadbakery.png",
      note:"5.1",
      time:"45m, 60m",
      title:"Bread &amp; Bakery"
    });
  }

  public ngOnInit(): void {
       console.log('restaurants was loaded');
  }

}
