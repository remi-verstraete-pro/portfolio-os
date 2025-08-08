import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSettingsComponent } from '../quick-settings/quick-settings.component';
import { VolumeControlComponent } from '../volume-control/volume-control.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { WifiSettingsComponent } from "../wifi-settings/wifi-settings.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, QuickSettingsComponent, VolumeControlComponent, ClickOutsideDirective, WifiSettingsComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  isMuted = false;
  quickSettingsOpen = false;
  volumeOpen = false;
  wifiOpen = false;

  @Input() username: string | null = null
  @Output() settingsRequested = new EventEmitter<void>();

  toggleQuickSettings() {
    this.quickSettingsOpen = !this.quickSettingsOpen;
  }

  toggleVolumePopup(event: MouseEvent) {
    event.stopPropagation();
    this.volumeOpen = !this.volumeOpen;
  }

  closeVolumePopup() {
    this.volumeOpen = false;
  }

  toggleWifiPopup(event: MouseEvent) {
    event.stopPropagation();
    this.wifiOpen = !this.wifiOpen;
  }

  closeWifiPopup() {
    this.wifiOpen = false;
  }
}
