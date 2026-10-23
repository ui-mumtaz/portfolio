import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { RichText } from '../../models/portfolio.models';

/**
 * Renders a RichText array inline — <strong>/<code>/accent-span emphasis and
 * forced <br class="br-lg"> breaks — wherever index.html used mixed markup
 * inside a heading or paragraph.
 */
@Component({
  selector: 'app-rich-text',
  imports: [],
  templateUrl: './rich-text.html',
  styleUrl: './rich-text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class RichTextComponent {
  readonly segments = input.required<RichText>();
}
