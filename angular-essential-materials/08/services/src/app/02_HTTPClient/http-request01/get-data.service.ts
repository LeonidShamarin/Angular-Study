import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getDataMethod(){
    // Запрос на удаленный сервер и автоматически распарсил с json 
    // формата в обычный javascript массив с объектами
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
