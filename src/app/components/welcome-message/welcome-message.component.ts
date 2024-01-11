import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  standalone: true,
  imports: [],
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.css'
})
export class WelcomeMessageComponent {
  welcomeMessage: string = 'Bienvenido a tu perfil de Angular!';
// Métodos relacionados con el mensaje de bienvenida
}
