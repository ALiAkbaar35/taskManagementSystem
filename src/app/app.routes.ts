import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoList2Component } from './todo-list2/todo-list2.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-list2', component: TodoList2Component },
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
];
