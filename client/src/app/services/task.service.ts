import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskDeletedSubject = new Subject<number>();
  taskDeleted$ = this.taskDeletedSubject.asObservable();

  constructor() { }

  emitTaskDeleted(taskId: number) {
    this.taskDeletedSubject.next(taskId);
  }
}
