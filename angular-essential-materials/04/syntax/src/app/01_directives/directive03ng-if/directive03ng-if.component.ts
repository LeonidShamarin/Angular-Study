import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive03ng-if',
  templateUrl: './directive03ng-if.component.html',
  styleUrls: ['./directive03ng-if.component.css']
})
export class Directive03ngIfComponent implements OnInit {
  flagToggle = true;
  
  
  elseLoading = true;
  
  changeMethod(){
    this.elseLoading = false;
    
    setTimeout(()=>{
      this.elseLoading = true;
    }, 2000)
  }
  
  constructor() { }
  ngOnInit(): void {
  }


}
