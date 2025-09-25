import { CvEducationComponent } from '../cv-education/cv-education.component';
import { CvExperiencesComponent } from '../cv-experiences/cv-experiences.component';
import { CvLoisirsComponent } from '../cv-loisirs/cv-loisirs.component';
import { CvProjectsComponent } from '../cv-projects/cv-projects.component';
import { CvSavoirsComponent } from '../cv-savoirs/cv-savoirs.component';
import { CvSkillsComponent } from '../cv-skills/cv-skills.component';
import { DesktopIconModel } from '../desktop-icon/desktop-icon.model';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

export const DESKTOP_ICONS: DesktopIconModel[] = [
  {
    id: 'cv-pdf',
    label_fr: 'CV',
    label_en: 'CV',
    icon: '📄',
    component: PdfViewerComponent,
  },
  // {
  //   label_fr: 'Portfolio',
  //   label_en: 'Portfolio',
  //   icon: '📁',
  // },
  {
    id: 'cv-savoirs',
    label_fr: 'Savoirs',
    label_en: 'Soft & Hard skills',
    icon: '🧠',
    component: CvSavoirsComponent,
  },
  {
    id: 'cv-skills',
    label_fr: 'Compétences',
    label_en: 'Skills',
    icon: '👨‍🏫',
    component: CvSkillsComponent,
  },
  {
    id: 'cv-education',
    label_fr: 'Formations',
    label_en: 'Education',
    icon: '🎓',
    component: CvEducationComponent,
  },
  {
    id: 'cv-experiences',
    label_fr: 'Expériences',
    label_en: 'Experiences',
    icon: '📚',
    component: CvExperiencesComponent,
  },
  {
    id: 'cv-projects',
    label_fr: 'Projets',
    label_en: 'Projects',
    icon: '🎨',
    component: CvProjectsComponent,
  },
  {
    id: 'cv-loisirs',
    label_fr: 'Loisirs',
    label_en: 'Hobbies',
    icon: '🎉',
    component: CvLoisirsComponent,
  },
];
