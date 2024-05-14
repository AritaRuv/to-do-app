
export interface Task {
  id: number;
  title: string;
  description: string; 
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null | Date;
}

export interface NewTaskForm {
  title: string;
  description: string; 
  status?: 'pending' | 'in_progress' | 'completed';
}

