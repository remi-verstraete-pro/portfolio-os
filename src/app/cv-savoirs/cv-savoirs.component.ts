import { Component, computed, inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-savoirs',
  templateUrl: './cv-savoirs.component.html',
  styleUrls: ['./cv-savoirs.component.scss'],
})
export class CvSavoirsComponent {
  private cvService = inject(CvService);

  protected langService = inject(LanguageService);
  protected savoirsFaire = computed(() => this.cvService.cv().savoirs_faire);
  protected savoirsEtre = computed(() => this.cvService.cv().savoirs_etre);
}
