import {
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Port of parallax.js: scroll-linked motion written to transform/opacity
 * only, inside a requestAnimationFrame, so nothing here triggers layout.
 * No-ops entirely under prefers-reduced-motion.
 *
 * Two independent modes, matching the two markup APIs in index.html:
 *  - `[appParallax]="0.18"` (speed) drives the `--parallax-y` custom property
 *    that animations.css composes into `transform` — never the host's own
 *    inline `transform`, since a couple of these layers also run the
 *    `drift` keyframes, and a CSS animation outranks an inline style.
 *  - `[appMotionFx]="'fade-out'"` fades + lifts the element out as it
 *    scrolls away (used on the hero copy) via direct inline styles.
 */
@Directive({
  selector: '[appParallax], [appMotionFx]',
  host: {
    '[attr.data-parallax]': 'appParallax() ?? null',
    '[attr.data-motion-fx]': 'appMotionFx() ?? null',
    '[style.--parallax-y]': 'parallaxY()',
    '[style.opacity]': 'fxOpacity()',
    '[style.transform]': 'fxTransform()',
  },
})
export class Parallax {
  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly appParallax = input<number | undefined>(undefined);
  readonly appMotionFx = input<'fade-out' | undefined>(undefined);

  protected readonly parallaxY = signal<string | null>(null);
  protected readonly fxOpacity = signal<number | null>(null);
  protected readonly fxTransform = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView;
      if (!window) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      let ticking = false;
      let viewportH = window.innerHeight || this.document.documentElement.clientHeight;

      const update = () => {
        const el = this.elementRef.nativeElement;
        const rect = el.getBoundingClientRect();

        const speed = this.appParallax();
        if (speed !== undefined && rect.bottom >= -viewportH && rect.top <= viewportH * 2) {
          const centre = rect.top + rect.height / 2;
          const progress = (viewportH / 2 - centre) / viewportH;
          this.parallaxY.set((progress * speed * 100).toFixed(2) + 'px');
        }

        if (this.appMotionFx() === 'fade-out') {
          const out = clamp(-rect.top / (viewportH * 0.85), 0, 1);
          this.fxOpacity.set(1 - out);
          this.fxTransform.set(`translate3d(0, ${(out * -60).toFixed(2)}px, 0)`);
        }
      };

      const request = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
          ticking = false;
          update();
        });
      };

      const onResize = () => {
        viewportH = window.innerHeight || this.document.documentElement.clientHeight;
        request();
      };

      window.addEventListener('scroll', request, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', request);
        window.removeEventListener('resize', onResize);
      });

      update();
    });
  }
}

function clamp(n: number, min: number, max: number): number {
  return n < min ? min : n > max ? max : n;
}
