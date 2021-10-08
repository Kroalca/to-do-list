import { Component } from '@angular/core';

interface Task {
  id: number;
  name: string;
  finish: boolean;
  piority: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidden: boolean = false;
  nameTask: string = '';
  tasks: Array<Task> = [];
  idCount: number = 1;
  piorityTask: string = '1';
  congratu: string = '';

  addTask(): void {
    let task: Task = {
      id: this.idCount,
      name: this.nameTask,
      finish: false,
      piority: parseInt(this.piorityTask),
    };
    this.tasks.push(task);
    this.nameTask = '';
    this.piorityTask = '1';
    this.idCount++;
    console.log(task);
  }

  deletedTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  finishTask(id: number): void {
    (this.tasks.find((task) => task.id === id) as Task).finish = true;
    if (this.tasks.every((task) => task.finish)) {
      this.congratuMessage();
    }
  }

  deletedAllTask(): void {
    this.tasks = [];
  }

  finishAllTask(): void {
    this.tasks.forEach((task) => (task.finish = true));
    this.congratuMessage();
  }

  congratuMessage(): void {
    this.congratu = 'Has terminado TODAS las TAREAS';
    setTimeout(() => {
      this.congratu = '';
    }, 3000);
  }

  orderByPiority(): void {
    this.tasks = this.tasks.sort((a, b) => a.piority - b.piority).reverse();
  }

  orderById(): void {
    this.tasks = this.tasks.sort((a, b) => a.id - b.id);
  }
}
