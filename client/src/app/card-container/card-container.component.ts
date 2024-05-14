import { Component, Input, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
//Services
import { ApiService } from '../services/api.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'card-container',
  standalone: true,
  imports: [TaskCardComponent, CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css',
  providers: [ApiService]
})
export class CardContainerComponent implements OnInit {
  
  taskList: Task[] = []

  constructor(private _apiService: ApiService, private _taskService: TaskService) {}
  
  ngOnInit(): void {
    this.getTasks()
    this.subscribeToTaskDeletedEvent();
  }

  getTasks(){
    this._apiService.getTasks().subscribe({
      next: (result) => {
        this.taskList = result
      },
      error: (err) => {
        console.log(err)
      }
      
    })
  }
  private subscribeToTaskDeletedEvent() {
    this._taskService.taskDeleted$.subscribe(taskId => {
      this.getTasks();
    });
  }

}
