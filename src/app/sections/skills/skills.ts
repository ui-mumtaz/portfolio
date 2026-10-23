import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Chip } from '../../shared/chip/chip';
import { SectionHead } from '../../shared/section-head/section-head';
import { Reveal, RevealStagger } from '../../core/directives/reveal';
import { SKILLS } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  imports: [Chip, SectionHead, Reveal, RevealStagger],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--elev', id: 'skills' },
})
export class Skills {
  protected readonly skills = SKILLS;
}
