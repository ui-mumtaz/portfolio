import { DOCUMENT, Service, afterNextRender, inject, signal } from '@angular/core';

const STUCK_AT = 60;

/**
 * Sticky-header + scroll-spy state, shared by the navbar across the whole
 * page. Mirrors nav.js: a single rAF-throttled scroll listener drives both
 * the "solid background" flag and "which section are we in" tracking.
 */
@Service()
export class Scroll {
  private readonly document = inject(DOCUMENT);

  private navEl: HTMLElement | null = null;
  private sections: { href: string; el: HTMLElement }[] = [];
  private ticking = false;

  readonly isStuck = signal(false);
  readonly activeHref = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView;
      if (!window) return;
      window.addEventListener('scroll', () => this.request(), { passive: true });
      window.addEventListener('resize', () => this.request(), { passive: true });
    });
  }

  /** Called once the navbar and its linked sections exist in the DOM. */
  init(navEl: HTMLElement, links: { href: string }[]): void {
    this.navEl = navEl;
    this.sections = links
      .map((link) => {
        const id = link.href.replace(/^#/, '');
        const el = id ? this.document.getElementById(id) : null;
        return el ? { href: link.href, el } : null;
      })
      .filter((entry): entry is { href: string; el: HTMLElement } => entry !== null);
    this.update();
  }

  private request(): void {
    if (this.ticking) return;
    this.ticking = true;
    const window = this.document.defaultView;
    (window ?? globalThis).requestAnimationFrame(() => {
      this.ticking = false;
      this.update();
    });
  }

  private update(): void {
    const window = this.document.defaultView;
    if (!window || !this.navEl) return;

    const y = window.pageYOffset || this.document.documentElement.scrollTop;
    this.isStuck.set(y > STUCK_AT);

    const line = this.navEl.offsetHeight + 90;
    let active: string | null = null;

    for (const section of this.sections) {
      const rect = section.el.getBoundingClientRect();
      if (rect.top <= line && rect.bottom > line * 0.5) {
        active = section.href;
      }
    }

    const atBottom =
      window.innerHeight + window.pageYOffset >= this.document.documentElement.scrollHeight - 4;
    if (!active && atBottom && this.sections.length) {
      active = this.sections[this.sections.length - 1].href;
    }

    this.activeHref.set(active);
  }
}
