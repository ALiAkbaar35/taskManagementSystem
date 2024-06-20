import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  edit: boolean = false;
  isChecked: boolean = false;
  index: number = 0;
  id: number = 0;
  task: string = '';
  tasks: { id: number; task: string; isChecked: boolean }[] = [];

  generateToken(): number {
    return Math.floor(1000 + Math.random() * 9000);
  }
  // getId() {
  //   let uniqueIdFound = false;
  //   while (!uniqueIdFound) {
  //     this.id = this.generateToken();
  //     uniqueIdFound = !this.tasks.some((task) => task.id === this.id);
  //   }
  // }
  reset() {
    this.id = 0;
    this.task = '';
    this.isChecked = false;
    this.edit = false;
  }
  getId() {
    this.id = this.generateToken();
    let check = this.tasks.some((task) => task.id === this.id);
    if (check) {
      this.getId();
    }
  }

  addTask() {
    this.getId();
    const tempTask = {
      id: this.id,
      task: this.task,
      isChecked: this.isChecked,
    };
    this.tasks.push(tempTask);
    this.reset();
  }
  update() {
    this.tasks[this.index].task = this.task;
    this.reset();
  }

  deltask(i: number) {
    this.tasks.splice(i, 1);
  }
  edittask(i: number) {
    this.index = i;
    this.id = this.tasks[i].id;
    this.task = this.tasks[i].task;
    this.edit = true;
  }

  cencel() {
    this.reset();
  }
  
  toggleTaskCompletion(task: { id: number; task: string; isChecked: boolean }) {
    task.isChecked = !task.isChecked;
    console.log(task);
  }
}
