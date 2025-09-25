import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  private langService = inject(LanguageService);

  protected printedDays =
    this.langService.language() === 'fr'
      ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  current = new Date();
  displayedDate = new Date();

  get monthYear(): string {
    return this.displayedDate.toLocaleDateString(
      this.langService.language() === 'fr' ? 'fr-FR' : 'en-US',
      {
        month: 'long',
        year: 'numeric',
      },
    );
  }

  get weeks(): (Date | null)[][] {
    const year = this.displayedDate.getFullYear();
    const month = this.displayedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: (Date | null)[] = [];

    // Remplir les jours vides avant le 1er
    const startDay = firstDay.getDay() || 7;
    for (let i = 1; i < startDay; i++) {
      days.push(null);
    }

    // Remplir les jours du mois
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Compléter jusqu'à la fin de la grille (6 semaines)
    while (days.length % 7 !== 0 || days.length < 42) {
      days.push(null);
    }

    // Diviser en semaines
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks;
  }

  isToday(date: Date): boolean {
    return date.toDateString() === this.current.toDateString();
  }

  prevMonth() {
    this.displayedDate = new Date(
      this.displayedDate.getFullYear(),
      this.displayedDate.getMonth() - 1,
      1,
    );
  }

  nextMonth() {
    this.displayedDate = new Date(
      this.displayedDate.getFullYear(),
      this.displayedDate.getMonth() + 1,
      1,
    );
  }
}
