import {
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  computed,
  contentChildren,
  inject,
  input,
  numberAttribute,
  signal,
} from '@angular/core';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom';

const REVEALED_AFTER_MS = 900;

/**
 * Port of reveal.js: the host starts hidden, animates in once it enters the
 * viewport, and is left alone afterwards (never replayed on scroll-back).
 *
 * Progressive-enhancement contract preserved: the directive only runs
 * `afterNextRender`, which is a browser-only hook, so prerendered/SSR markup
 * — and any browser without IntersectionObserver — renders fully visible.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[attr.data-reveal]': 'appReveal()',
    '[class.is-hidden]': "phase() === 'hidden'",
    '[class.is-visible]': "phase() === 'visible' || phase() === 'revealed'",
    '[class.is-revealed]': "phase() === 'revealed'",
  },
})
export class Reveal {
  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly appReveal = input.required<RevealDirection>();
  readonly revealDelay = input<number | undefined>(undefined);

  private readonly autoDelay = signal<number | undefined>(undefined);
  private readonly effectiveDelay = computed(() => this.revealDelay() ?? this.autoDelay() ?? 0);

  protected readonly phase = signal<'static' | 'hidden' | 'visible' | 'revealed'>('static');

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView;
      if (!window || !('IntersectionObserver' in window)) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (reducedMotion.matches) return;

      this.phase.set('hidden');

      const el = this.elementRef.nativeElement;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            this.show();
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
      );
      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());

      // Already on screen (deep link / restored scroll position) — reveal now.
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || this.document.documentElement.clientHeight;
        if (rect.top < vh * 0.9 && rect.bottom > 0) {
          this.show();
          observer.unobserve(el);
        }
      });

      const onChange = () => {
        if (!reducedMotion.matches) return;
        observer.disconnect();
        this.phase.set('revealed');
      };
      reducedMotion.addEventListener('change', onChange);
      this.destroyRef.onDestroy(() => reducedMotion.removeEventListener('change', onChange));
    });
  }

  /** Called by the RevealStagger directive on an ancestor container. */
  setAutoDelay(ms: number): void {
    this.autoDelay.set(ms);
  }

  hasExplicitDelay(): boolean {
    return this.revealDelay() !== undefined;
  }

  private show(): void {
    if (this.phase() === 'visible' || this.phase() === 'revealed') return;

    const delay = Math.max(0, this.effectiveDelay());
    setTimeout(() => this.phase.set('visible'), delay);
    setTimeout(() => this.phase.set('revealed'), delay + REVEALED_AFTER_MS);
  }
}

/**
 * Port of reveal.js's `applyAutoStagger`: hands each `[appReveal]`
 * descendant an incrementing delay so lists/grids cascade without
 * hand-numbering every item in the template.
 */
@Directive({
  selector: '[appRevealStagger]',
})
export class RevealStagger {
  readonly appRevealStagger = input(90, { transform: numberAttribute });

  private readonly children = contentChildren(Reveal, { descendants: true });

  constructor() {
    afterNextRender(() => {
      const step = this.appRevealStagger();
      let index = 0;
      for (const child of this.children()) {
        if (!child.hasExplicitDelay()) {
          child.setAutoDelay(index * step);
        }
        index++;
      }
    });
  }
}
