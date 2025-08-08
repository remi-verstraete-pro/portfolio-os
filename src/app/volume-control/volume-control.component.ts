import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-volume-control',
  standalone: true,
  templateUrl: './volume-control.component.html',
  styleUrl: './volume-control.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-5px)' }))
      ])
    ])
  ]
})
export class VolumeControlComponent {
  volume: number = Number(localStorage.getItem('volume') ?? 50);
  volumeLevel: string = '🔉';

  constructor() {
    this.setIconVolume(this.volume);
  }

  updateVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.volume = +input.value;
    localStorage.setItem('volume', this.volume.toString());
    this.setIconVolume(this.volume);
  }

  setIconVolume(volume: number) {
    if (volume < 33) {
      this.volumeLevel = '🔈'
    } else if(volume < 66) {
      this.volumeLevel = '🔉'
    } else {
      this.volumeLevel = '🔊'
    };
  }
}
