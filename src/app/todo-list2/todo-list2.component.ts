import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list2.component.html',
  styleUrl: './todo-list2.component.css',
})
export class TodoList2Component {
  id: number = 0;
  task: string = '';
  isChecked: boolean = false;
  tasks: { id: number; task: string; isChecked: boolean }[] = [];
  generateToken(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }
  getId() {
    this.id = this.generateToken();
    const check = this.tasks.some((task) => task.id === this.id);
    if (check) {
      this.getId();
    }
  }
  reset() {
    this.id = 0;
    this.task = '';
    this.isChecked = false;
  }
  addTask() {
    if (this.task.trim() !== '') {
      this.getId();
      const tempTask = {
        id: this.id,
        task: this.task,
        isChecked: this.isChecked,
      };
      this.tasks.push(tempTask);
      this.reset();
    }
  }
  deltask(i: number) {
    this.tasks.splice(i, 1);
  }
  toggleTaskCompletion(task: { id: number; task: string; isChecked: boolean }) {
    task.isChecked = !task.isChecked;
  }
  RemAll() {
    this.tasks = [];
  }
  CompletedDel() {
    this.tasks = this.tasks.filter((task) => !task.isChecked);
  }
}
