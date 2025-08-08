import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  current = new Date();
  displayedDate = new Date();

  get monthYear(): string {
    return this.displayedDate.toLocaleDateString('fr-FR', {
      month: 'long',
      year: 'numeric',
    });
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
    this.displayedDate = new Date(this.displayedDate.getFullYear(), this.displayedDate.getMonth() - 1, 1);
  }

  nextMonth() {
    this.displayedDate = new Date(this.displayedDate.getFullYear(), this.displayedDate.getMonth() + 1, 1);
  }
}
