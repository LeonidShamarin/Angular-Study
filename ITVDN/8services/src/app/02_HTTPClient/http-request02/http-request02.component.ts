import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-http-request02',
  templateUrl: './http-request02.component.html'
})
export class HttpRequest02Component implements OnInit {

  todoList: any
  editingTask: { name?: any; } = {}
  
  constructor(private todoService: TodoServiceService) { }

  getTodoTasks(){
    this.todoService.getItems().subscribe(data => {
        console.log(data)
        this.todoList = data;
    })
  }
  addTodo(newTaskText: any){
    this.todoService.addItem(newTaskText).subscribe(data => {
      console.log(data)
      this.todoList.push(data)
      // this.getTodoTasks()
    })
  }
  deleteTask(id: any){
    this.todoService.deleteItem(id).subscribe(del=>{
      console.log(del)
      this.getTodoTasks()
    })
  }

  startEditTodo(task: { name: any; }, input: { value: any; }){
   this.editingTask = task;
   input.value = task.name
  }
  finishEditTodo(newText: any){
    this.editingTask.name = newText;
    this.todoService.editItem(this.editingTask).subscribe(res=>{
      console.log(res);
      this.editingTask = {};
    })
  }

  ngOnInit(): void {
    this.getTodoTasks()
  }

}
