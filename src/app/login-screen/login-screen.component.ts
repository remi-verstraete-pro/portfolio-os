import {
  Component, EventEmitter, Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  trigger, transition, style, animate
} from '@angular/animations';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss',
  animations: [
    trigger('slideScreen', [
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ]),
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class LoginScreenComponent {
  @Output() login = new EventEmitter<string>();
  username = '';
  loggedIn = false;

  onSubmit(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    const trimmed = this.username.trim();
    if (trimmed) {
      localStorage.setItem('username', trimmed); // ✅ stocker
      this.loggedIn = true;
      setTimeout(() => this.login.emit(trimmed), 600);
    }
  }
}
