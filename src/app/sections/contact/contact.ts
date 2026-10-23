import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Button } from '../../shared/button/button';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Reveal } from '../../core/directives/reveal';
import { Clipboard } from '../../core/services/clipboard';
import { Toast } from '../../core/services/toast';
import { CONTACT, PROFILE } from '../../data/portfolio-data';
import type { ContactItem } from '../../models/portfolio.models';

const COPIED_RESET_MS = 1800;

@Component({
  selector: 'app-contact',
  imports: [Icon, Button, RichTextComponent, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--elev', id: 'contact' },
})
export class Contact {
  private readonly clipboard = inject(Clipboard);
  private readonly toast = inject(Toast);

  protected readonly contact = CONTACT;
  protected readonly profile = PROFILE;
  protected readonly copiedLabel = signal<string | null>(null);

  private resetTimer: ReturnType<typeof setTimeout> | null = null;

  protected onCopy(item: ContactItem): void {
    const value = item.copyValue;
    if (!value) return;

    this.clipboard.copy(value).then(
      () => {
        this.copiedLabel.set(item.label);
        if (this.resetTimer) clearTimeout(this.resetTimer);
        this.resetTimer = setTimeout(() => this.copiedLabel.set(null), COPIED_RESET_MS);
        this.toast.show('Copied ' + value);
      },
      () => {
        this.toast.show('Press Ctrl+C to copy: ' + value);
      },
    );
  }
}
