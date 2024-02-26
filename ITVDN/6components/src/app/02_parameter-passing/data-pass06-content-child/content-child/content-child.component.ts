import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { ContentGrandchildComponent } from '../content-grandchild/content-grandchild.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html'
})
export class ContentChildComponent implements OnInit {

  constructor() { }
  @ContentChild('elem') divElem!: ElementRef
  @ContentChild(ContentGrandchildComponent) componentElement!: ContentGrandchildComponent
  
  ngOnInit(): void {}

  toggleColor(){

    if(this.divElem){
      console.log(this.divElem)
      console.log(this.divElem.nativeElement)
      this.divElem.nativeElement.innerHTML = '2 - Новый текст!';
    }
    
    if(this.componentElement){
      console.log(this.componentElement)
      this.componentElement.grandchildMethod()
    }
  }
}
