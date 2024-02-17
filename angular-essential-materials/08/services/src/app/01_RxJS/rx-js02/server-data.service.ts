import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {

  constructor() { }
  getData(){

    let data = [];
    for(let i =0; i < 7; i++){
      data.push('List item ' + (i + 1));
    }
    return of(data).pipe(
      delay(1000),
      map(text => {
        console.log('method "map()" work')
        return text.concat('new content for List');
      }),
      delay(1000)
    )
  }
}
