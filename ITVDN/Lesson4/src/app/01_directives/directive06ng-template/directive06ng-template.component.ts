import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive06ng-template',
  templateUrl: './directive06ng-template.component.html'
})
export class Directive06ngTemplateComponent implements OnInit {


  visible = true;
  toggleVisible(){
    this.visible = !this.visible;
  }

  //----------------
  choice: any = 555;
  changeNgSwitch(){
    if(this.choice == true){
      this.choice = false;
    } else{
      this.choice = true;
    }
    // this.choice = !this.choice;
    console.log(this.choice)
  }

  // ---------------

  items = [121,122,123,124];



  constructor() { }
  ngOnInit(): void {
  }


}
