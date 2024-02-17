import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive01ng-class',
  templateUrl: './directive01ng-class.component.html',
  styleUrls: ['./directive01ng-class.component.css']
})
export class Directive01NgClassComponent implements OnInit {

  flag = true;

  
  constructor() { }
  ngOnInit(): void {
  }

}
