import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Task, NewTaskForm } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {

  isFormSubmited: boolean = false
  taskForm!: FormGroup;


  constructor(private fb: FormBuilder, private _apiService: ApiService, private router: Router) {
    this.taskForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  }

  onSubmit() {
    if(this.taskForm.valid){
      this._apiService.createTask(this.taskForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/'])
        }
      })
    }else{
      this.taskForm.markAllAsTouched()
    }

  
  }

}

