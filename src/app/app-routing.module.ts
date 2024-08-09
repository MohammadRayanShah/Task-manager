import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
