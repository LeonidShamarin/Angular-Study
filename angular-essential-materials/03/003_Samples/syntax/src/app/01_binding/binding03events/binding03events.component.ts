import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding03events',
  templateUrl: './binding03events.component.html'
})
export class Binding03EventsComponent implements OnInit {

  
  counter: number = 1;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }


  // myConsoleEmpty(e){
  //   console.log(e);
  //     //  нет событийного объекта выводит undefined
  //     //  Выводит ошибку в консоле IDE VSCode
  // }
  consoleCounter(e){
    console.log(e);
  }
  consoleEventObj1(e){
    console.log(e);
    console.log(e.type);
  }
  consoleEventObjValue(e){
    console.log(e);
  }
  
  a = 'old '; 
  b = 'text1';



  ngOnInit(){}
}
