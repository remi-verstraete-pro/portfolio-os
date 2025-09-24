import { Component, inject } from '@angular/core';
import { CvService, Competences } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.scss'],
})
export class CvSkillsComponent {
  competences: Competences | null = null;
  atouts: string[] = [];

  protected langService = inject(LanguageService);

  constructor(private cvService: CvService) {
    const cv = this.cvService.cv();
    this.competences = cv.competences;
  }
}
