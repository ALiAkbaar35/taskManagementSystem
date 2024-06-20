import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  Unselecteditems: number = 0;
  selecteditems: number = 0;
  Allselecteditems: boolean = false;
  edit: boolean = false;
  isChecked: boolean = false;
  index: number = 0;
  id: number = 0;
  currentDateTime: string = '';
  task: string = '';
  tasks: { id: number; task: string; isChecked: boolean }[] = [];

  constructor() {
    this.currentDateTime = new Date().toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

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
  update() {
    this.tasks[this.index].task = this.task;
    this.reset();
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
      this.updateUnSelectedItems();
      this.reset();
    }
  }

  edittask(i: number) {
    this.index = i;
    this.id = this.tasks[i].id;
    this.task = this.tasks[i].task;
    this.edit = true;
  }
  deltask(i: number) {
    this.tasks.splice(i, 1);
  }

  toggleTaskCompletion(task: { id: number; task: string; isChecked: boolean }) {
    task.isChecked = !task.isChecked;
    this.updateUnSelectedItems();
    this.updateSelectedItems();
  }
  updateUnSelectedItems() {
    this.Unselecteditems = this.tasks.filter((task) => !task.isChecked).length;
  }
  updateSelectedItems() {
    this.selecteditems = this.tasks.filter((task) => task.isChecked).length;
  }
  SelectAll() {
    
    this.tasks.forEach((task) => {
      task.isChecked=!task.isChecked
    })
       this.updateUnSelectedItems();
       this.updateSelectedItems();
  }
}
