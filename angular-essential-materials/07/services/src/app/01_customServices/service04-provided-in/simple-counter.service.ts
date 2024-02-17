import { Injectable } from '@angular/core';
import { ForProvidedInPropertyModule } from './for-provided-in-property/for-provided-in-property.module';

@Injectable({
  // providedIn: 'root' 
  providedIn: ForProvidedInPropertyModule
  // эта строка или имя класса привязки к модулю, компонента
})
export class SimpleCounterService {

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
