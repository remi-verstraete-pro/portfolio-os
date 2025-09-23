import { Injectable } from '@angular/core';
import cvData from '../../assets/cv.json';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cv: CV = cvData as CV;

  constructor() {}

  getCv(): CV {
    return this.cv;
  }
}

export interface Experience {
  periode: string;
  poste: string;
  entreprise: string;
  lieu?: string;
  missions?: string[];
}

export interface Formation {
  periode: string;
  diplome: string;
  universite: string;
  lieu?: string;
  parcours?: string;
  remarque?: string;
  specialisation?: string;
}

export interface Langue {
  langue: string;
  niveau: string;
}

export interface InformationsPersonnelles {
  adresse?: string;
  age?: number;
  linkedin?: string;
  vehicule?: string;
  telephone?: string;
}

export interface Competences {
  front_end?: string[];
  back_end?: string[];
  base_de_donnees?: string[];
  outils_devops?: string[];
  methodologies?: string[];
}

export interface ProjetPersonnel {
  nom: string;
  description: string;
}

export interface CV {
  nom: string;
  poste: string;
  portfolio: string;
  description: string;
  experiences_professionnelles: Experience[];
  formations: Formation[];
  langues: Langue[];
  informations_personnelles: InformationsPersonnelles;
  competences: Competences;
  atouts: string[];
  projets_personnels: ProjetPersonnel[];
}
