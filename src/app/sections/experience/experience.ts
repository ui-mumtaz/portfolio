import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHead } from '../../shared/section-head/section-head';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Reveal } from '../../core/directives/reveal';
import { EXPERIENCE } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  imports: [SectionHead, RichTextComponent, Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--ruled', id: 'experience' },
})
export class Experience {
  protected readonly experience = EXPERIENCE;
}
