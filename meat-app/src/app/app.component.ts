import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'mt-app',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  
  private _content: string;
  
  public get content(): string {
    return this._content;
  }
  
  public set content(value: string) {
    this._content = value;
  }
  
  constructor() {
    this.content = 'Welcome do Meat App!';
  }
  
  ngOnInit(): void {
    console.log('App charged!');
  }
  
}
