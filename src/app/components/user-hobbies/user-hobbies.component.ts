import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-hobbies',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './user-hobbies.component.html',
  styleUrl: './user-hobbies.component.css'
})
export class UserHobbiesComponent {
  hobbies: string[] = ['Leer', 'Correr', 'Cocinar'];
// Métodos relacionados con los hobbies

}
