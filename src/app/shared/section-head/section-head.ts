import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-head',
  imports: [],
  templateUrl: './section-head.html',
  styleUrl: './section-head.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section__head' },
})
export class SectionHead {
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly lead = input<string | null>(null);
}
