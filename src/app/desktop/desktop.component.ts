import {
  Component,
  Input,
  signal,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { DesktopIconComponent } from '../desktop-icon/desktop-icon.component';
import { TaskBarComponent } from '../task-bar/task-bar.component';
import { WindowComponent } from '../window/window.component';
import { listApplis } from './desktop.config';
import { DesktopIconModel } from '../desktop-icon/desktop-icon.model';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'app-desktop',
  imports: [
    CommonModule,
    TopBarComponent,
    DesktopIconComponent,
    TaskBarComponent,
    WindowComponent,
  ],
  providers: [{ provide: 'listApplis', useValue: listApplis }],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  private zCounter = 1001;

  openedWindows = signal<DesktopIconModel[]>([]);
  windowPositions = signal<Record<string, { top: number; left: number }>>({});
  windowSizes = signal<Record<string, { width: number; height: number }>>({});
  zIndexMap = signal<Record<string, number>>({});
  focusedWindow = signal<string | null>(null);
  windowMinimized = signal<Record<string, boolean>>({});
  listApplis: DesktopIconModel[] = listApplis;
  languageService = inject(LanguageService);

  @Input() username!: string;

  @Output() logoutRequested = new EventEmitter<void>();

  minimizeWindow(id: DesktopIconModel) {
    this.windowMinimized.update((m) => ({ ...m, [id['icon']]: true }));
  }

  openWindow(id: DesktopIconModel) {
    const alreadyOpen = this.openedWindows().includes(id);

    if (alreadyOpen) {
      if (this.windowMinimized()[id['icon']]) {
        this.windowMinimized.update((state) => ({
          ...state,
          [id['icon']]: false,
        }));
      }
      this.bringToFront(id);
      return;
    }
    this.openedWindows.update((w) => [...w, id]);

    setTimeout(() => this.bringToFront(id), 0);
  }

  closeWindow(id: DesktopIconModel) {
    this.openedWindows.update((w) => w.filter((x) => x !== id));
  }

  setWindowPosition(id: DesktopIconModel, pos: { top: number; left: number }) {
    this.windowPositions.update((positions) => ({
      ...positions,
      [id['icon']]: pos,
    }));
  }

  getWindowPosition(id: DesktopIconModel): { top: number; left: number } {
    return this.windowPositions()[id['icon']] || { top: 100, left: 100 };
  }

  setWindowSize(id: DesktopIconModel, size: { width: number; height: number }) {
    this.windowSizes.update((sizes) => ({
      ...sizes,
      [id['icon']]: size,
    }));
  }

  getWindowSize(id: DesktopIconModel): { width: number; height: number } {
    return this.windowSizes()[id['icon']] || { width: 300, height: 200 };
  }

  getZIndex(id: DesktopIconModel): number {
    return this.zIndexMap()[id['icon']] || 1001;
  }

  bringToFront(id: DesktopIconModel) {
    this.zCounter++;
    this.focusedWindow.set(id['icon']);
    this.zIndexMap.update((map) => ({ ...map, [id['icon']]: this.zCounter }));
  }
}
