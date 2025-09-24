import { Component, inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-atouts',
  templateUrl: './cv-atouts.component.html',
  styleUrls: ['./cv-atouts.component.scss'],
})
export class CvAtoutsComponent {
  private cvService = inject(CvService);

  protected langService = inject(LanguageService);

  constructor() {}

  protected cv = this.cvService.cv;
}
