/**
 * A run of text within a larger heading/paragraph. `bold`/`code` mirror the
 * source's <strong>/<code> emphasis; `accent` mirrors <span class="text-accent">;
 * `breakAfter` mirrors a forced <br class="br-lg"> immediately after this run.
 */
export interface TextSegment {
  text: string;
  bold?: boolean;
  code?: boolean;
  accent?: boolean;
  breakAfter?: boolean;
}

export type RichText = TextSegment[];

export type IconName =
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'github'
  | 'pin'
  | 'download'
  | 'arrow'
  | 'copy'
  | 'check'
  | 'diamond'
  | 'react'
  | 'node'
  | 'aws';

export interface Profile {
  name: string;
  initials: string;
  role: string;
  roleShort: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  linkedinUser: string;
  linkedinUrl: string;
  githubUser: string;
  githubUrl: string;
  resumeFile: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  kind: 'number' | 'text' | 'stack';
  value?: string;
  suffix?: string;
  label?: string;
  text?: string;
  stackIcons?: IconName[];
  stackLabel?: string;
  feature?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: RichText;
  footTitle: string;
  footBody: RichText;
}

export interface Achievement {
  icon: IconName;
  title: string;
  body: RichText;
}

export interface SkillGroup {
  label: string;
  highlight: boolean;
  chips: string[];
}

export interface Experience {
  date: string;
  role: string;
  org: string;
  via?: string;
  reveal: 'left' | 'right';
  bullets: RichText[];
}

export interface Project {
  index: string;
  title: string;
  subtitle?: string;
  image: string;
  reveal: 'left' | 'right';
  bullets: RichText[];
  tech: string[];
}

export interface Education {
  year: string;
  degree: string;
  org: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: IconName;
  href?: string;
  copyValue?: string;
  external?: boolean;
  static?: boolean;
}

export interface AboutMeta {
  icon: IconName;
  text: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: RichText;
  paragraphs: RichText[];
  meta: AboutMeta[];
}

export interface NavbarContent {
  brandName: string;
  brandInitials: string;
  brandRole: string;
  links: NavLink[];
  cta: string;
}

export interface HeroContent {
  eyebrow: string;
  title: RichText;
  lead: RichText;
  primaryCta: string;
  resumeCta: string;
  stats: HeroStat[];
  scrollHint: string;
}

export interface ProcessContent {
  eyebrow: string;
  heading: RichText;
  steps: ProcessStep[];
}

export interface AchievementsContent {
  eyebrow: string;
  heading: string;
  items: Achievement[];
}

export interface SkillsContent {
  eyebrow: string;
  heading: string;
  lead: string;
  groups: SkillGroup[];
}

export interface ExperienceContent {
  eyebrow: string;
  heading: string;
  items: Experience[];
}

export interface ProjectsContent {
  eyebrow: string;
  heading: string;
  items: Project[];
}

export interface EducationContent {
  eyebrow: string;
  heading: string;
  items: Education[];
}

export interface ContactContent {
  eyebrow: string;
  heading: RichText;
  lead: string;
  resumeCta: string;
  items: ContactItem[];
}

export interface FooterContent {
  owner: string;
  tagline: string;
}
