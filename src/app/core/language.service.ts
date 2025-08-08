import { Injectable, effect, signal, computed } from '@angular/core';

export type LangCode = 'fr' | 'en';

const LANG_KEY = 'language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _language = signal<LangCode>(getInitialLang());

  readonly language = computed(() => this._language());
  readonly isFR = computed(() => this._language() === 'fr');

  constructor() {
    effect(() => {
      const lang = this._language();
      try {
        localStorage.setItem(LANG_KEY, lang);
      } catch {}
      document?.documentElement?.setAttribute('lang', lang);
    });
  }

  setLanguage(lang: LangCode) {
    this._language.set(lang);
  }

  toggleLanguage() {
    this._language.update((l) => (l === 'fr' ? 'en' : 'fr'));
  }
}

function getInitialLang(): LangCode {
  try {
    const saved = localStorage.getItem(LANG_KEY) as LangCode | null;
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {}
  const nav = (typeof navigator !== 'undefined' && navigator.language) || '';
  if (nav.toLowerCase().startsWith('fr')) return 'fr';
  return 'en';
}
