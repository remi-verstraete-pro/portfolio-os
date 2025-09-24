import { Component, inject } from '@angular/core';
import { CvService, ProjetPersonnel } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-projects',
  templateUrl: './cv-projects.component.html',
  styleUrls: ['./cv-projects.component.scss'],
})
export class CvProjectsComponent {
  private cvService = inject(CvService);
  protected langService = inject(LanguageService);

  constructor() {}

  protected cv = this.cvService.cv;

  openProject(project: ProjetPersonnel) {
    window.open(project.url, '_blank');
  }
}
