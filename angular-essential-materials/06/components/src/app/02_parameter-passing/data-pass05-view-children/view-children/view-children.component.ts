import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styles: [`
      .bg{
        background: lightgreen;
    }
  `]
})
export class ViewChildrenComponent implements OnInit {

  color = false;

  constructor() { }
  changeColorChild(){
    this.color = !this.color;
  }
  ngOnInit(): void {
  }

}
