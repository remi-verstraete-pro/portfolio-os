import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss',
})
export class WindowComponent implements AfterViewInit {
  @Input() id!: string;
  @Input() title!: string;
  @Input() position!: { top: number; left: number };
  @Input() size!: { width: number; height: number };
  @Input() isMinimized: boolean = false;
  @Input() zIndex: number = 1001;

  @Output() closed = new EventEmitter<void>();
  @Output() positionChanged = new EventEmitter<{ top: number; left: number }>();
  @Output() sizeChanged = new EventEmitter<{ width: number; height: number }>();
  @Output() focusWindow = new EventEmitter<void>();
  @Output() minimizeRequest = new EventEmitter<void>();

  private dragging = false;
  private resizing = false;

  private dragOffset = { x: 0, y: 0 };
  private resizeOrigin = { x: 0, y: 0 };
  private initialSize = { width: 300, height: 200 };

  isMaximized = true;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const header = this.el.nativeElement.querySelector('.window-header');
    const resizer = this.el.nativeElement.querySelector('.resizer');

    // Déplacement
    header.addEventListener('mousedown', this.onDragStart);

    // Redimensionnement
    resizer.addEventListener('mousedown', this.onResizeStart);

    this.el.nativeElement.addEventListener('mousedown', () => {
    this.focusWindow.emit();
  });

  }

  minimize() {
    this.minimizeRequest.emit();
  }

  // ---- Déplacement ----
  onDragStart = (event: MouseEvent) => {
    event.preventDefault();
    this.dragging = true;
    this.dragOffset = {
      x: event.clientX - this.position.left,
      y: event.clientY - this.position.top,
    };
    document.addEventListener('mousemove', this.onMouseMoveDrag);
    document.addEventListener('mouseup', this.onMouseUpDrag);
  };

  onMouseMoveDrag = (event: MouseEvent) => {
    if (!this.dragging) return;
    const newLeft = event.clientX - this.dragOffset.x;
    const newTop = event.clientY - this.dragOffset.y;
    this.positionChanged.emit({ top: newTop, left: newLeft });
  };

  onMouseUpDrag = () => {
    this.dragging = false;
    document.removeEventListener('mousemove', this.onMouseMoveDrag);
    document.removeEventListener('mouseup', this.onMouseUpDrag);
  };

  // ---- Redimensionnement ----
  onResizeStart = (event: MouseEvent) => {
    event.preventDefault();
    this.resizing = true;
    this.resizeOrigin = { x: event.clientX, y: event.clientY };
    this.initialSize = { ...this.size };
    document.addEventListener('mousemove', this.onMouseMoveResize);
    document.addEventListener('mouseup', this.onMouseUpResize);
  };

  onMouseMoveResize = (event: MouseEvent) => {
    if (!this.resizing) return;
    const dx = event.clientX - this.resizeOrigin.x;
    const dy = event.clientY - this.resizeOrigin.y;

    const newWidth = Math.max(200, this.initialSize.width + dx);
    const newHeight = Math.max(120, this.initialSize.height + dy);

    this.sizeChanged.emit({ width: newWidth, height: newHeight });
  };

  onMouseUpResize = () => {
    this.resizing = false;
    document.removeEventListener('mousemove', this.onMouseMoveResize);
    document.removeEventListener('mouseup', this.onMouseUpResize);
  };

  toggleMaximize() {
    this.isMaximized = !this.isMaximized;
  }

}
