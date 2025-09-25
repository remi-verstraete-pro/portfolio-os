import { Component, computed, inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-cv-loisirs',
  templateUrl: './cv-loisirs.component.html',
  styleUrls: ['./cv-loisirs.component.scss'],
})
export class CvLoisirsComponent {
  private cvService = inject(CvService);

  protected langService = inject(LanguageService);
  protected loisirs = computed(() => this.cvService.cv().loisirs);

  protected otherLoisirs = computed(
    () => this.loisirs().filter((item) => typeof item === 'string') as string[],
  );

  protected voyages = computed(() => {
    const voyagesItem = this.loisirs().find(
      (item) => typeof item !== 'string',
    ) as { Voyages: { pays: string }[] } | undefined;

    return voyagesItem?.Voyages || [];
  });
}
