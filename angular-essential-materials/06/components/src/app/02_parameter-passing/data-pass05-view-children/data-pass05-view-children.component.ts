import { Component, OnInit, ViewChildren, QueryList, ContentChild } from '@angular/core';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-data-pass05-view-children',
  templateUrl: './data-pass05-view-children.component.html'
})
export class DataPass05ViewChildrenComponent implements OnInit {
  // @ViewChildren(ViewChildrenComponent) blocks: QueryList<ViewChildrenComponent>;
  @ViewChildren('selectedComponent') blocks: QueryList<any>;

    addClass(){
      this.blocks.forEach(component => component.changeColorChild())
      console.log(this.blocks)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
