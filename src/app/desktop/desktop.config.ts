import { CvAtoutsComponent } from '../cv-atouts/cv-atouts.component';
import { CvEducationComponent } from '../cv-education/cv-education.component';
import { CvExperiencesComponent } from '../cv-experiences/cv-experiences.component';
import { CvProjectsComponent } from '../cv-projects/cv-projects.component';
import { CvSkillsComponent } from '../cv-skills/cv-skills.component';
import { DesktopIconModel } from '../desktop-icon/desktop-icon.model';

export const DESKTOP_ICONS: DesktopIconModel[] = [
  // {
  //   label_fr: 'CV',
  //   label_en: 'CV',
  //   icon: '📄',
  // },
  // {
  //   label_fr: 'Portfolio',
  //   label_en: 'Portfolio',
  //   icon: '📁',
  // },
  // {
  //   label_fr: 'Savoirs-faire',
  //   label_en: 'Hard-skills',
  //   icon: '🛠',
  // },
  // {
  //   label_fr: 'Savoirs-être',
  //   label_en: 'Soft-skills',
  //   icon: '🧠',
  // },
  {
    id: 'cv-atouts',
    label_fr: 'Atouts',
    label_en: 'Assets',
    icon: '⭐',
    component: CvAtoutsComponent,
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
  // {
  //   label_fr: 'Loisirs',
  //   label_en: 'Hobbies',
  //   icon: '🎉',
  // },
];
