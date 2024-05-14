import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTaskForm, Task } from '../../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  API_URL: string = 'http://localhost:3000/api/v1/tasks'
  tasks: Task[] = []
  constructor(private httpClient: HttpClient) {  }
  
  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.API_URL);
  }

  createTask(formData: NewTaskForm): Observable<NewTaskForm> {
    return this.httpClient.post<NewTaskForm>(this.API_URL, formData)
  }

  updateTask(id: number, formData: NewTaskForm) {
    return this.httpClient.patch<NewTaskForm>(`${this.API_URL}/${id}` , formData)

  }

  deletetask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.API_URL}/${id}`)

  }
  
}
