import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-quick-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-settings.component.html',
  styleUrl: './quick-settings.component.scss',
})
export class QuickSettingsComponent implements OnInit {
  savedLanguage: string | null = localStorage.getItem('language');
  isDarkTheme: boolean = localStorage.getItem('theme') === 'dark';
  isFRlanguage: boolean = this.savedLanguage === 'fr';
  language: string | null = this.savedLanguage ?? 'fr';

  private theme = this.isDarkTheme ? 'dark' : 'light';

  private languageService = inject(LanguageService);

  ngOnInit(): void {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  toggleLanguage() {
    if (this.isFRlanguage) {
      this.isFRlanguage = false;
      localStorage.setItem('language', 'en');
      this.language = 'en';
      this.languageService.setLanguage('en');
    } else {
      this.isFRlanguage = true;
      localStorage.setItem('language', 'fr');
      this.language = 'fr';
      this.languageService.setLanguage('fr');
    }
  }
}
