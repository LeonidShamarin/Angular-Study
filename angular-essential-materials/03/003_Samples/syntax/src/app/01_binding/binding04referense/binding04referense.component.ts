import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding04referense',
  templateUrl: './binding04referense.component.html'
})
export class Binding04ReferenseComponent implements OnInit {

  result = '';
  // Параметры не используются. Заданы что бы консоль IDE не выводила ошибку 
  show(elem1, elem2, elem3){
    for(let i = 0; i < arguments.length; i++){
      console.dir(arguments[i]);

      this.result += arguments[i].localName + ', '
    }
  }
  
  ngOnInit(): void {
  }

}
