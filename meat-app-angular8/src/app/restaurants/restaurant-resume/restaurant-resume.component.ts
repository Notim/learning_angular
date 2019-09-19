import {Component, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from "../models/Restaurant";

@Component({
  selector: 'mt-restaurant-resume',
  templateUrl: './restaurant-resume.component.html',
  styleUrls: ['./restaurant-resume.component.css']
})
export class RestaurantResumeComponent implements OnInit {
  private _resume: Restaurant;

  get resume(): Restaurant {
    return this._resume;
  }

  @Input() set resume(value: Restaurant) {
    this._resume = value;
  }

  constructor() { }

  public ngOnInit(): void {
       console.log('restaurants was loaded');
  }

}
