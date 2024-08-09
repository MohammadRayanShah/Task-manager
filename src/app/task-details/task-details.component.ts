import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTasks().subscribe((tasks) => {
      this.task = tasks.find((task) => task.id === taskId);
    });
  }

  onSubmit(): void {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/']); // Navigate back to home page
    }
  }
}
