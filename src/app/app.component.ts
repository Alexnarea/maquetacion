import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WindowComponent } from './components/window/window.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserHobbiesComponent } from './components/user-hobbies/user-hobbies.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WindowComponent, WelcomeMessageComponent, UserInfoComponent, UserHobbiesComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maquetacion';
}
