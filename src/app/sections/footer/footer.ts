import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { FOOTER } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'contentinfo' },
})
export class Footer {
  protected readonly footer = FOOTER;
  protected readonly year = new Date().getFullYear();
}
