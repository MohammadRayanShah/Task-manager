import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  searchText: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  filteredTasks(): Task[] {
    return this.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (task.isCompleted ? 'completed' : 'pending').includes(
          this.searchText.toLowerCase()
        )
    );
  }

  sortTasksBy(field: string): void {
    if (field === 'dueDate') {
      this.tasks.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    } else if (field === 'status') {
      this.tasks.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    }
  }

  confirmDelete(taskId: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.onDelete(taskId);
    }
  }

  onMarkComplete(task: Task): void {
    task.isCompleted = true;
    this.taskService.updateTask(task).subscribe();
  }

  onDelete(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe({
      next: (updatedTasks) => {
        this.tasks = updatedTasks;
      },
      error: (err) => {
        console.error('Error during task deletion:', err);
      },
    });
  }

  getTaskClass(task: Task): string {
    if (new Date(task.dueDate) < new Date() && !task.isCompleted) {
      return 'overdue';
    } else if (task.isCompleted) {
      return 'completed';
    } else {
      return '';
    }
  }
}
