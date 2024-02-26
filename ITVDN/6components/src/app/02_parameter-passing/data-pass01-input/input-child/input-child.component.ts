import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css'],
  // Первый способ
  inputs: ['name']
})
export class InputChildComponent implements OnInit {

  constructor() { }
  name: string = 'default Counter name';
  // Второй способ
  @Input() counterValue = 0;
  
  // Перезапишится на 4 с свойства hostCounter в файле data-pass01-input.ts
  @Input('step') stepCounter = 3;
  increment() {
    this.counterValue = this.counterValue + this.stepCounter;
  }
  ngOnInit(): void {
  }

}
