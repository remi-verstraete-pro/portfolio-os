import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent {
  protected langService = inject(LanguageService);
  protected pdfSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/CV_2025-09-24_REMI_VERSTRAETE.pdf',
    );
  }
}
