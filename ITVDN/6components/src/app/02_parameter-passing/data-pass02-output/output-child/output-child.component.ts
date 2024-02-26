import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  constructor() { }
  public currentValue: string = 'первоначальный текст';
 
  @Output()
  myOwnEvent: EventEmitter<string> = new EventEmitter();

  start(inputText: string) {
      this.currentValue = inputText;
      // емитим событие myOwnEvent передавая значение currentValue к DataPass02OutputComponent
      this.myOwnEvent.emit(this.currentValue);
  }

  @Output() counterEvent: EventEmitter<number> = new EventEmitter();
  outputCounter:number = 0;
  incCounter(){
    this.outputCounter++;
    this.counterEvent.emit(this.outputCounter)
  }


  ngOnInit(): void {
  }

}
