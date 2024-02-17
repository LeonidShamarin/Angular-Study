import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// Для создания fake backend
// 1) npm install --save angular-in-memory-web-api
// 2) добавить в imports AppModule строку InMemoryWebApiModule.forRoot(BackendServiceService)
// 3) добавить код, который будет использовать fake backend по адресу /api/todos

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService implements InMemoryDbService{

      constructor() { }

      createDb() {
          let todos = [
              { id: 1, name: "Task 1" },
              { id: 2, name: "Task 2" },
              { id: 3, name: "Task 3" },
              { id: 4, name: "Task 4" },
              { id: 5, name: "Task 5" },
          ];
          return { todos }
      }
}

