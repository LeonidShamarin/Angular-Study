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
  addItem(task: any){
    return this.http.post('api/todos', {name: task})
  }
  editItem(task: { name?: any; id?: any; }){
    return this.http.put(`api/todos/${task.id}`, task)
  }
  deleteItem(id: any){
    return this.http.delete(`api/todos/${id}`)
  }
}
