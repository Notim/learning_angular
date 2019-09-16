import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'jad-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnInit {

  private label: string;

  @Output() private event = new EventEmitter();

  constructor() {
    this.label = 'mama aqui oh glub glug';
  }

  clicked(value: string): void {
    this.event.emit();

    alert('funcionou' + value);
  }

  ngOnInit() {

  }
}
