import { CvExperiencesComponent } from '../cv-experiences/cv-experiences.component';
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
  // {
  //   label_fr: 'Formation',
  //   label_en: 'Education',
  //   icon: '🎓',
  // },
  // {
  //   label_fr: 'Compétences',
  //   label_en: 'Skills',
  //   icon: '👨‍🏫',
  // },

  {
    id: 'cv-experiences',
    label_fr: 'Expériences',
    label_en: 'Experiences',
    icon: '📚',
    component: CvExperiencesComponent,
  },
  // {
  //   label_fr: 'Loisirs',
  //   label_en: 'Hobbies',
  //   icon: '🎉',
  // },
];
