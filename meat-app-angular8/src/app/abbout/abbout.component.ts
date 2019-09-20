import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-abbout',
  templateUrl: './abbout.component.html'
})
export class AboutComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
      console.log('home was loaded');
  }

}
