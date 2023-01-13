import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoDataProps } from 'src/app/utility/models/todo';
import { TodoService } from 'src/app/utility/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  todo!: TodoDataProps;
  subcription$: Subscription = new Subscription();

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.setTitle(`Todo | ${this.todo.title}`);
    this.getProductById();
  }

  getProductById() {
    let todoId = this.route.snapshot.paramMap.get('id');
    this.subcription$ = this.todoService
      .getTodoById(todoId!)
      .subscribe((response) => {
        this.todo = response;
      });
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
}
