import { Injectable } from '@angular/core';

@Injectable()
export class ScopeCounterService {

  counter: number = 0;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  getValue(){
    return this.counter;
  }
}
