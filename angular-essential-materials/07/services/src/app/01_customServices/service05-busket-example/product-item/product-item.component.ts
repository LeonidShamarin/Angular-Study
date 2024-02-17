import { Component, OnInit, Input } from '@angular/core';
import { OrderCostService } from '../shared/order-cost.service';
import { QuantityUnitsService } from '../shared/quantity-units.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [QuantityUnitsService]
})
export class ProductItemComponent implements OnInit {
  

  @Input() card
  constructor(
    private quantityUnitsService: QuantityUnitsService,
    private orderCostService: OrderCostService
  ) {}
    
  ngOnInit(): void {
    console.log(this.card)
  }

  plusOne(){
    this.card.quantity = this.quantityUnitsService.plus()
    this.orderCostService.countUp()
  }
  
  minusOne(){
    this.card.quantity = this.quantityUnitsService.minus()
    this.orderCostService.countUp()
  }

 
}
