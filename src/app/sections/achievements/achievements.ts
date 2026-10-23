import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { SectionHead } from '../../shared/section-head/section-head';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Reveal, RevealStagger } from '../../core/directives/reveal';
import { ACHIEVEMENTS } from '../../data/portfolio-data';

@Component({
  selector: 'app-achievements',
  imports: [Icon, SectionHead, RichTextComponent, Reveal, RevealStagger],
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--ruled', id: 'achievements' },
})
export class Achievements {
  protected readonly achievements = ACHIEVEMENTS;
}
