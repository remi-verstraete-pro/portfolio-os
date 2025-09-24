import { Component, inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-experiences',
  templateUrl: './cv-experiences.component.html',
  styleUrls: ['./cv-experiences.component.scss'],
})
export class CvExperiencesComponent {
  private cvService = inject(CvService);
  protected langService = inject(LanguageService);

  constructor() {}

  protected cv = this.cvService.cv;
}
