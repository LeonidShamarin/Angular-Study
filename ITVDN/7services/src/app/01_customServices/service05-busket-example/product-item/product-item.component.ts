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

  @Input() card: any;

  constructor(
    private quantityUnitsService: QuantityUnitsService,
    private orderCostService: OrderCostService
  ) {}
    
  ngOnInit(): void {
    console.log(this.card);
  }

  plusOne(): void {
    this.card.quantity = this.quantityUnitsService.plus();
    this.updateTotalCost();
  }
  
  minusOne(): void {
    this.card.quantity = this.quantityUnitsService.minus();
    this.updateTotalCost();
  }

  private updateTotalCost(): void {
    this.orderCostService.countUp();
  }
}
