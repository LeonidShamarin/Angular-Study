import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantityUnitsService {

  constructor() { }
  counter = 1;
  plus(){
    return ++this.counter
  }
  minus(){
    if(this.counter - 1 < 0){
      return this.counter;
    }
    return --this.counter
  }

}
