import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  imports: [],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'listitem',
    class: 'chip',
    '[class.chip--hot]': 'hot()',
    '[class.chip--sm]': 'sm()',
  },
})
export class Chip {
  readonly hot = input(false, { transform: booleanAttribute });
  readonly sm = input(false, { transform: booleanAttribute });
}
