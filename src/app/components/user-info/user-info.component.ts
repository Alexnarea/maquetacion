import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  userName: string = 'Juan Pérez';
userAge: number = 30;
// Más propiedades y métodos según sea necesario
}
