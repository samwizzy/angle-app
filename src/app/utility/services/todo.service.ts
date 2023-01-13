import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TodoProps, TodoDataProps } from '../models/todo';

export interface Response<T> {
  response: T;
  message: string;
}

export interface CategoryProduct {
  category: string;
  color: string;
  productList: any[];
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoDataProps[]> {
    return this.http.get<TodoProps[]>(`${environment.BASE_URL}/todos`).pipe(
      map((todos) =>
        todos.map((todo) => ({
          id: todo.id,
          title: todo.title,
          userId: todo.userId,
          completed: todo.completed ? 'Completed' : 'In-Progress',
          status: todo.completed,
        }))
      )
    );
  }

  getTodoById(id: string): Observable<TodoDataProps> {
    return this.http.get<TodoProps>(`${environment.BASE_URL}/todos/${id}`).pipe(
      map((todo) => ({
        id: todo.id,
        title: todo.title,
        userId: todo.userId,
        completed: todo.completed ? 'Completed' : 'In-Progress',
        status: todo.completed,
      }))
    );
  }
}
