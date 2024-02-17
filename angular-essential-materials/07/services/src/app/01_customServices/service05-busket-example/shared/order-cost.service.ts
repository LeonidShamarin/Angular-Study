import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderCostService {

  listPoducts

  constructor() { }
  countUp(){
    let cost = 0;
    this.listPoducts.forEach(element => {
      cost = cost + element.priceForOne * element.quantity
    });
    return cost;
  }
}
