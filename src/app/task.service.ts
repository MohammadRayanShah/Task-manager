import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): Observable<Task> {
    this.tasks.push({ ...task, id: Date.now() });
    return of(task);
  }

  updateTask(updatedTask: Task): Observable<void> {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
    return of();
  }

  deleteTask(id: number): Observable<Task[]> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return of(this.tasks);
  }
}
