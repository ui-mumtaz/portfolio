import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Button } from '../../shared/button/button';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Reveal, RevealStagger } from '../../core/directives/reveal';
import { Parallax } from '../../core/directives/parallax';
import { CountUp } from '../../core/directives/count-up';
import { HERO, PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [Icon, Button, RichTextComponent, Reveal, RevealStagger, Parallax, CountUp],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'hero', id: 'top' },
})
export class Hero {
  protected readonly hero = HERO;
  protected readonly profile = PROFILE;

  protected asNumber(value: string | undefined): number {
    return Number(value ?? 0);
  }
}
