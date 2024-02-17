import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding02property',
  templateUrl: './binding02property.component.html',
  styleUrls: ['./binding02property.component.css']
})
export class Binding02PropertyComponent implements OnInit {

  
  constructor() { }

  ITVDNImage: string = '../../../assets/ITVDN(Color).png';
  ITVDNImageWidth: number = 300;

  CBSImage: string = 'assets/CBS_one color.png';
  CBSImageWidth: number = 250;

  //-----------------------------------------------

  flag = false;

  ngOnInit() {
  }

}
