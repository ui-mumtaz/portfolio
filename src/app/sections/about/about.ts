import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Reveal } from '../../core/directives/reveal';
import { ABOUT } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  imports: [Icon, RichTextComponent, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--ruled', id: 'about' },
})
export class About {
  protected readonly about = ABOUT;
}
