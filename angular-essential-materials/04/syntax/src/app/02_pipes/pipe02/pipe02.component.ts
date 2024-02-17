import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe02',
  templateUrl: './pipe02.component.html'
})
export class Pipe02Component implements OnInit {

  
  date: Date = new Date(1992, 8, 16);

  
  constructor() { }
  ngOnInit(): void {
  }

}
