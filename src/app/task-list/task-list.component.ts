import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<number>();

  onMarkComplete(task: Task): void {
    task.isCompleted = true;
    this.taskUpdated.emit(task);
  }

  onDelete(taskId: number): void {
    this.taskDeleted.emit(taskId);
  }
}
