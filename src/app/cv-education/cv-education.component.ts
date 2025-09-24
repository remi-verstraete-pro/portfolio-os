import { Component, inject } from '@angular/core';
import { CvService, Formation } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.scss'],
})
export class CvEducationComponent {
  private cvService = inject(CvService);
  protected langService = inject(LanguageService);

  constructor() {}

  protected cv = this.cvService.cv;
}
