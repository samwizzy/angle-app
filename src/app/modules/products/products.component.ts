import { Component, OnInit } from '@angular/core';
import {
  fadeIn,
  listAnimation,
  fadeItem,
} from 'src/app/utility/animations/animations';
import data from 'src/assets/data.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [fadeIn, fadeItem, listAnimation],
})
export class ProductsComponent implements OnInit {
  posts = data;

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    const newId = this.posts.length + 1;
    const newPost = { id: newId, title: `Title ${newId}`, body: '' };
    this.posts.push(newPost);
  }

  removeTodo(id: number) {
    const pos = this.posts.findIndex((post) => post.id == id);
    this.posts.splice(pos, 1);
  }

  showItems() {
    this.posts = data;
  }

  hideItems() {
    this.posts = [];
  }

  toggle() {
    this.posts.length ? this.hideItems() : this.showItems();
  }

  trackByFn(post: any) {
    return post.id;
  }
}
