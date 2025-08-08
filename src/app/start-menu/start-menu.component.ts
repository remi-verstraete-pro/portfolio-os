import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss',
})
export class StartMenuComponent {
  @Output() logout = new EventEmitter<void>();

  onLogoutClick() {
    this.logout.emit();
    localStorage.clear();
  }
}
