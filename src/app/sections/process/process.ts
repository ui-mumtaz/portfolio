import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Reveal, RevealStagger } from '../../core/directives/reveal';
import { PROCESS } from '../../data/portfolio-data';

@Component({
  selector: 'app-process',
  imports: [RichTextComponent, Reveal, RevealStagger],
  templateUrl: './process.html',
  styleUrl: './process.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--elev', id: 'process' },
})
export class Process {
  protected readonly process = PROCESS;
}
