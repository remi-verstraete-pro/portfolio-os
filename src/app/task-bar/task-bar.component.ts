import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  ViewChild,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { StartMenuComponent } from '../start-menu/start-menu.component';
import { DesktopIconModel } from '../desktop-icon/desktop-icon.model';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule, CalendarComponent, StartMenuComponent],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss',
})
export class TaskBarComponent {
  @Input() windows: DesktopIconModel[] = [];
  @Input() focused: string | null = null;

  @Output() focusRequest = new EventEmitter<DesktopIconModel>();
  @Output() logoutRequested = new EventEmitter<void>();

  @ViewChild('calendarContainer') calendarRef?: ElementRef;

  time = signal(this.format(new Date()));
  interval = setInterval(() => this.time.set(this.format(new Date())), 1000);
  showCalendar = false;
  calendarVisible = false;
  startMenuOpen = false;
  languageService = inject(LanguageService);

  @HostListener('document:click', ['$event'])
  onGlobalClick(event: MouseEvent) {
    if (!this.showCalendar) return;

    const clickedInside = this.calendarRef?.nativeElement.contains(
      event.target,
    );
    const clickedTrigger = (event.target as HTMLElement).closest(
      '.clock-container',
    );

    if (!clickedInside && !clickedTrigger) {
      this.closeCalendar();
    }
  }

  currentTime(): string {
    return this.time();
  }

  private format(d: Date): string {
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  toggleCalendar() {
    if (!this.showCalendar) {
      this.calendarVisible = true;
      this.showCalendar = true;
    } else {
      this.closeCalendar();
    }
  }
  closeCalendar() {
    this.showCalendar = false;
    setTimeout(() => (this.calendarVisible = false), 250);
  }

  currentDate(): string {
    const d = new Date();
    return d.toLocaleDateString('fr-FR', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  toggleStartMenu() {
    this.startMenuOpen = !this.startMenuOpen;
  }

  handleLogout() {
    this.logoutRequested.emit();
    this.startMenuOpen = false;
  }
}
