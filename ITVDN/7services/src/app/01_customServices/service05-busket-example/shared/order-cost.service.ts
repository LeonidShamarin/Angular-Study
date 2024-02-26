import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderCostService {

  listPoducts: {priceForOne: number, quantity: number}[] = [];

  constructor() { }
  
  countUp(): number {
    let cost = 0;
    this.listPoducts.forEach(element => {
      cost += element.priceForOne * element.quantity;
    });
    return cost;
  }
}
