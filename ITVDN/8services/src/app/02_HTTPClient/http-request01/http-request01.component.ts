import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-http-request01',
  templateUrl: './http-request01.component.html'
})
export class HttpRequest01Component implements OnInit {

  constructor(private getDataService: GetDataService) { }
  users: any
  ngOnInit(): void {
      this.getDataService.getDataMethod().subscribe(res => {
        console.log(res);
        this.users = res;
      })
  }

}
