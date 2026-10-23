import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IconName } from '../../models/portfolio.models';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-hidden]': "'true'",
    focusable: 'false',
  },
})
export class Icon {
  readonly name = input.required<IconName>();
}
