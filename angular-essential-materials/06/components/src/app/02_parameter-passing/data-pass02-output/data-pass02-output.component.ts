import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-pass02-output',
  templateUrl: './data-pass02-output.component.html',
  styleUrls: ['./data-pass02-output.component.css']
})
export class DataPass02OutputComponent implements OnInit {
  
  constructor() { }
  myString: string = 'Обычный текст';
  fHandler(value) {
      this.myString = value;
  }


  counterOutSide: number = 100;

  counterPlus(num){
    this.counterOutSide = num;
    console.log(this.counterOutSide)
  }


  ngOnInit(): void {
  }

}
