import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskService } from './task.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule { }
