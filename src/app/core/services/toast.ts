import { Service, signal } from '@angular/core';

const VISIBLE_MS = 2600;

/** Drives the single `<app-toast>` live region mounted at the app root. */
@Service()
export class Toast {
  readonly message = signal('');
  readonly visible = signal(false);

  private timer: ReturnType<typeof setTimeout> | null = null;

  show(message: string): void {
    this.message.set(message);
    this.visible.set(true);

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.visible.set(false);
      this.message.set('');
    }, VISIBLE_MS);
  }
}
