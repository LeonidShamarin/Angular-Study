import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-pass01-input',
  templateUrl: './data-pass01-input.component.html',
  styleUrls: ['./data-pass01-input.component.css']
})
export class DataPass01InputComponent implements OnInit {

  constructor() { }

  hostCounter = 4;
  counterValue: number = 45;
  ngOnInit(): void {}

}
