import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn TS',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn Angular',
        isCompleted: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn RxJS',
        isCompleted: false,
        date: new Date()
      },
    ]
  }
  getTodos() {
    return of(this.todos)
  }
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  async changeStatus(todo: Todo) {
    this.todos = await this.todos.map(singleTodo => {
      if (singleTodo.id == todo.id) {
        singleTodo.isCompleted = !singleTodo.isCompleted
      }
      return singleTodo;
    })
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(currentObj => currentObj.id === todo.id)
    this.todos.splice(index, 1)
  }
}
