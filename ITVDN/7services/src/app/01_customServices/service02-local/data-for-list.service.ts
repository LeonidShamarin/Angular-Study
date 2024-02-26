import { Injectable } from '@angular/core';

@Injectable()
export class DataForListService {

  getData(){
    let data = [];
    for(let i =0; i < 7; i++){
      data.push('List item ' + (i + 1));
    }
    return data;
  }
}
