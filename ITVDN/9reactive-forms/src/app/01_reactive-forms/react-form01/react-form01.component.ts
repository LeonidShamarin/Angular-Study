import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-form01',
  templateUrl: './react-form01.component.html'
})
export class ReactForm01Component implements OnInit {

  constructor() { }
  userText: string = 'Первоначальный текст';
  
  //---------------------
  method(value: string){
    this.userText = value;
  }
  ngOnInit(): void {
  }

}
