import {
  DOCUMENT,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Scroll } from '../../core/services/scroll';
import { NAVBAR } from '../../data/portfolio-data';

const DESKTOP_MIN = 901;

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'site-nav',
    role: 'banner',
    '[class.is-stuck]': 'scroll.isStuck()',
  },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  protected readonly scroll = inject(Scroll);

  protected readonly nav = NAVBAR;
  protected readonly menuOpen = signal(false);

  private readonly toggleButton = viewChild<ElementRef<HTMLButtonElement>>('toggleButton');
  private readonly menuPanel = viewChild<ElementRef<HTMLElement>>('menuPanel');

  protected readonly toggleLabel = computed(() =>
    this.menuOpen() ? 'Close navigation menu' : 'Open navigation menu',
  );

  constructor() {
    afterNextRender(() => {
      this.scroll.init(this.elementRef.nativeElement, this.nav.links);

      const window = this.document.defaultView;
      window?.addEventListener('resize', () => {
        if (this.menuOpen() && window.innerWidth >= DESKTOP_MIN) {
          this.closeMenu(false);
        }
      });
    });
  }

  protected isActive(href: string): boolean {
    return this.scroll.activeHref() === href;
  }

  protected onToggleClick(): void {
    this.menuOpen() ? this.closeMenu(true) : this.openMenu();
  }

  protected onMenuClick(event: MouseEvent): void {
    if (!this.menuOpen()) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("a[href^='#']")) this.closeMenu(false);
  }

  protected onMenuKeydown(event: KeyboardEvent): void {
    if (!this.menuOpen()) return;

    if (event.key === 'Escape' || event.key === 'Esc') {
      this.closeMenu(true);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = this.getFocusable();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private openMenu(): void {
    this.menuOpen.set(true);
    this.renderer.addClass(this.document.body, 'menu-open');
    this.getFocusable()[0]?.focus();
  }

  private closeMenu(returnFocus: boolean): void {
    this.menuOpen.set(false);
    this.renderer.removeClass(this.document.body, 'menu-open');
    if (returnFocus) this.toggleButton()?.nativeElement.focus();
  }

  private getFocusable(): HTMLElement[] {
    const menu = this.menuPanel()?.nativeElement;
    if (!menu) return [];

    const nodes = Array.from(
      menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    ).filter((node) => node.offsetParent !== null);

    const toggle = this.toggleButton()?.nativeElement;
    if (toggle) nodes.push(toggle);
    return nodes;
  }
}
