import { Component, signal } from '@angular/core';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { DesktopComponent } from './desktop/desktop.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [LoginScreenComponent, DesktopComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  user: string | null = localStorage.getItem('username');

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') ?? 'dark');
  }

  handleLogin(name: string) {
    this.user = name;
  }

  handleLogout() {
    this.user = null;
    localStorage.removeItem('username');
  }


}
