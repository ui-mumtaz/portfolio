import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionHead } from '../../shared/section-head/section-head';
import { RichTextComponent } from '../../shared/rich-text/rich-text';
import { Chip } from '../../shared/chip/chip';
import { Reveal } from '../../core/directives/reveal';
import { PROJECTS } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  imports: [NgOptimizedImage, SectionHead, RichTextComponent, Chip, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'section section--elev', id: 'projects' },
})
export class Projects {
  protected readonly projects = PROJECTS;
}
