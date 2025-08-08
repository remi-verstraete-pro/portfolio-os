import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-wifi-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wifi-settings.component.html',
  styleUrl: './wifi-settings.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translateY(-5px)' }),
        ),
      ]),
    ]),
  ],
})
export class WifiSettingsComponent {
  wifiEnabled = localStorage.getItem('wifiEnabled') === 'true';
  connectedNetwork: string | null = localStorage.getItem('connectedNetwork');
  loadingNetwork: string | null = null;

  networks = ['Home-Wifi', 'Cafe_FreeWifi', 'FBI_Truck', 'Guest'];

  toggleWifi() {
    this.wifiEnabled = !this.wifiEnabled;
    localStorage.setItem('wifiEnabled', String(this.wifiEnabled));

    if (!this.wifiEnabled) {
      this.connectedNetwork = null;
      this.loadingNetwork = null;
      try {
        localStorage.removeItem('connectedNetwork');
      } catch {}
    }
  }

  connect(network: string) {
    if (!this.wifiEnabled || this.loadingNetwork) return;

    // Lance l’animation des 3 points pour ce réseau
    this.loadingNetwork = network;

    setTimeout(() => {
      this.connectedNetwork = network;
      this.loadingNetwork = null;
      try {
        localStorage.setItem('connectedNetwork', network);
      } catch {}
    }, 1500);
  }
}
