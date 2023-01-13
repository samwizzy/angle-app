import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { ProductsComponent } from './products/products.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'todos', component: TodosComponent },
      {
        path: 'todos/:id',
        component: TodoDetailsComponent,
        data: {
          title: "Don't take too long",
          description: 'Be punctual with your assigned tasks',
        },
      },
      { path: 'products', component: ProductsComponent },
      { path: 'lifecycles', component: LifecyclesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
