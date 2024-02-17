import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding01interpolation',
  templateUrl: './binding01interpolation.component.html'
})
export class Binding01InterpolationComponent implements OnInit {

  
  propertyOne  = 'Hello';
  propertyTwo  = 111;
  propertyBool = true;
  propertyObj1  = {};
  propertyObj2  = {
    prop1: 'some value'
  };

  emptyProp:any;
  notEmptyProp;

  constructor() { 
    this.notEmptyProp = 'not empty';
    this.startInterval();
  }

  returnStringMethod(){
    return 'hello some string text';
  }

  counter: number = 0;
  startInterval(){
    setInterval(()=>{
      this.counter++;
    }, 1000)
  }

  ngOnInit() {
  }
}
