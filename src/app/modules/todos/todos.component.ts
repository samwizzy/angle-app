import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { TodoDataProps } from 'src/app/utility/models/todo';
import { TodoService } from 'src/app/utility/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  items = of(Array(23));
  todos$!: Observable<TodoDataProps[]>;

  subcription$: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

  trackByFn(item: any) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
}
