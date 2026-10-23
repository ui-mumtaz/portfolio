import {
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Renderer2,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

const DURATION_MS = 1200;

/**
 * Counts the host's text content up from 0 to a target integer once it
 * enters the viewport — the hero stats' "12+" / "20+" treatment. One-shot,
 * like RevealDirective.
 *
 * Progressive enhancement: the template already interpolates the real final
 * value (so prerendered/no-JS output is correct and SEO-visible). This
 * directive only resets to 0 and animates back up once it is safe to do so
 * — i.e. once a browser with JS and no reduced-motion preference is
 * actually going to run the animation. Skipped entirely under
 * prefers-reduced-motion, leaving the server-rendered value untouched.
 */
@Directive({
  selector: '[appCountUp]',
})
export class CountUp {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly appCountUp = input.required<number>();

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;
      const target = this.appCountUp();
      const window = this.document.defaultView;

      if (!window || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      this.renderer.setProperty(el, 'textContent', '0');

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            this.animate(el, target);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  private animate(el: HTMLElement, target: number): void {
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.renderer.setProperty(el, 'textContent', String(Math.round(eased * target)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
