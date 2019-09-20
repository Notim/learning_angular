import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    console.log('home was loaded');
  }

}
