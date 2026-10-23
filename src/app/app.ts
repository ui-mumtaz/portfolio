import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Process } from './sections/process/process';
import { Achievements } from './sections/achievements/achievements';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Toast } from './shared/toast/toast';
import { Seo } from './core/services/seo';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Process,
    Achievements,
    Skills,
    Experience,
    Projects,
    Education,
    Contact,
    Footer,
    Toast,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    inject(Seo).apply();
  }
}
