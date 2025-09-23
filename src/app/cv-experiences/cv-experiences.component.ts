import { Component } from '@angular/core';
import { CvService, Experience } from '../services/cv.service';

@Component({
  selector: 'app-cv-experiences',
  templateUrl: './cv-experiences.component.html',
  styleUrls: ['./cv-experiences.component.scss'],
})
export class CvExperiencesComponent {
  experiences: Experience[] = [];

  constructor(private cvService: CvService) {
    this.experiences = this.cvService.getCv().experiences_professionnelles;
  }
}
