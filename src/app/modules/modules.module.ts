import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { SharedModule } from '../shared/shared.module';
import { TodosComponent } from './todos/todos.component';
import { ProductsComponent } from './products/products.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { DemoComponent } from './demo/demo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    ModulesComponent,
    TodosComponent,
    ProductsComponent,
    LifecyclesComponent,
    DemoComponent,
    TodoDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class ModulesModule {}
