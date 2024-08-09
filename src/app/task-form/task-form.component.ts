import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    isCompleted: false,
  };

  constructor(private taskService: TaskService) { }

  onSubmit(taskForm: NgForm): void {
    if (taskForm.valid) {
      this.taskService.addTask(this.task).subscribe(() => {
        taskForm.resetForm({
          title: '',
          description: '',
          dueDate: '',
          isCompleted: false,
        });
      });
    }
  }
}
