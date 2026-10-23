import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHead } from '../../shared/section-head/section-head';
import { Reveal, RevealStagger } from '../../core/directives/reveal';
import { EDUCATION } from '../../data/portfolio-data';

@Component({
  selector: 'app-education',
  imports: [SectionHead, Reveal, RevealStagger],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--ruled', id: 'education' },
})
export class Education {
  protected readonly education = EDUCATION;
}
