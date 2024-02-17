import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-http-request02',
  templateUrl: './http-request02.component.html'
})
export class HttpRequest02Component implements OnInit {

  todoList: any
  editingTask
  
  constructor(private todoService: TodoServiceService) { }

  getTodoTasks(){
    this.todoService.getItems().subscribe(data => {
        console.log(data)
        this.todoList = data;
    })
  }
  addTodo(newTaskText){
    this.todoService.addItem(newTaskText).subscribe(data => {
      console.log(data)
      this.todoList.push(data)
      // this.getTodoTasks()
    })
  }
  deleteTask(id){
    this.todoService.deleteItem(id).subscribe(del=>{
      console.log(del)
      this.getTodoTasks()
    })
  }

  startEditTodo(task, input){
   this.editingTask = task;
   input.value = task.name
  }
  finishEditTodo(newText){
    this.editingTask.name = newText;
    this.todoService.editItem(this.editingTask).subscribe(res=>{
      console.log(res);
      this.editingTask = null;
    })
  }

  ngOnInit(): void {
    this.getTodoTasks()
  }

}
