import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desktop-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop-icon.component.html',
  styleUrl: './desktop-icon.component.scss',
})
export class DesktopIconComponent {
  @Input() icon!: string;
  @Input() label!: string;
}
