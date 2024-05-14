import { Component } from '@angular/core';
import { CardContainerComponent } from '../card-container/card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  agregarTarea() {
    console.log('Botón Agregar Tarea presionado');
  }
  constructor(private router: Router) {}

  redirectToOtherUrl(): void {
    this.router.navigateByUrl('/new-task');
  }
}
