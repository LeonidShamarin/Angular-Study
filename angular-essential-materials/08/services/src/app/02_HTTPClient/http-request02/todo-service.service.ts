import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }
  getItems(){
    return this.http.get('api/todos')
  }
  addItem(task){
    return this.http.post('api/todos', {name: task})
  }
  editItem(task){
    return this.http.put(`api/todos/${task.id}`, task)
  }
  deleteItem(id){
    return this.http.delete(`api/todos/${id}`)
  }
}
