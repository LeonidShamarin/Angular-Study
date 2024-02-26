import { Injectable } from '@angular/core';

@Injectable()
export class SimpleService {

  counterService: number = 0;
  increment(){
    this.counterService++;
  }
  decrement(){
    this.counterService--;
  }
}
