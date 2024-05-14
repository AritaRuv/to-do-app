import { Component, Input } from '@angular/core';
import { NewTaskForm, Task } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
//services
import { ApiService } from '../services/api.service';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'task-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-card.component.html', 
  styleUrl: './task-card.component.css'
})

export class TaskCardComponent  {

  
  constructor(private _apiService: ApiService, private toastService: ToastrService , private _taskService: TaskService) {}
  
  @Input() task!: Task;
  

  updateStatus(event: Event): void{
    const target = event.target as HTMLInputElement;
    console.log(target.value)
    const newStatus: string  = target.value
  
    const newTaskForm: NewTaskForm = {
      title: this.task.title,
      description: this.task.description, 
      status: (newStatus === 'pending' || newStatus === 'in_progress' || newStatus === 'completed') ? newStatus : 'pending'
     };
    
    this._apiService.updateTask(this.task.id, newTaskForm).subscribe({
      next:(response)=>{
        this.toastService.success(`"${this.task.title}" task status, was updated succesfully to`)

        this._taskService.emitTaskDeleted(this.task.id)
      }
    })
  }

  
  deleteTask(id: number){
    this._apiService.deletetask(id).subscribe({
      next:(response)=>{
        this.toastService.success(`"${this.task.title}" task, was deleted succesfully`)

        this._taskService.emitTaskDeleted(id)
      }
    })
  }


  
}
