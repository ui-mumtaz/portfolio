import type {
  AboutContent,
  AchievementsContent,
  ContactContent,
  EducationContent,
  ExperienceContent,
  FooterContent,
  HeroContent,
  NavbarContent,
  ProcessContent,
  Profile,
  ProjectsContent,
  SkillsContent,
} from '../models/portfolio.models';

export const PROFILE: Profile = {
  name: 'Mumtaz Ahmad',
  initials: 'MA',
  role: 'Senior Angular Developer & Front-End Architect',
  roleShort: 'Angular · Front-End Architect',
  email: 'mumtazahmad2004@gmail.com',
  phone: '+91 99583 39204',
  phoneHref: 'tel:+919958339204',
  location: 'New Delhi, India',
  linkedinUser: 'in/mumtazahmad',
  linkedinUrl: 'https://www.linkedin.com/in/mumtazahmad',
  githubUser: 'ui-mumtaz',
  githubUrl: 'https://github.com/ui-mumtaz',
  resumeFile: 'assets/Mumtaz_Ahmad_Resume.pdf',
};

export const SEO_META = {
  title: 'Mumtaz Ahmad — Senior Angular Developer & Front-End Architect',
  description:
    'Mumtaz Ahmad — Senior Angular Developer and Front-End Architect with 12+ years across the full Angular timeline (v2–21): Standalone Components, Signals, Zoneless change detection, NgRx, Nx monorepos and design systems. Also full-stack with React, Node.js/Express, PostgreSQL and AWS.',
  author: 'Mumtaz Ahmad',
  themeColor: '#0a0a0a',
  ogType: 'website',
  ogUrl: 'https://ui-mumtaz.github.io/portfolio/',
  ogTitle: 'Mumtaz Ahmad — Senior Angular Developer & Front-End Architect',
  ogDescription:
    '12+ years building high-performance, accessible, enterprise-scale Angular applications — Standalone Components, Signals, NgRx, Nx monorepos and design systems — extending to full-stack delivery with React, Node.js/Express, PostgreSQL and AWS.',
};

export const NAVBAR: NavbarContent = {
  brandName: 'Mumtaz Ahmad',
  brandInitials: 'MA',
  brandRole: 'Angular · Front-End Architect',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],
  cta: 'Let’s Talk',
};

export const HERO: HeroContent = {
  eyebrow: 'Senior Angular Developer · Front-End Architect',
  title: [
    { text: 'Enterprise Angular,', breakAfter: true },
    { text: 'built to the ' },
    { text: 'highest level', accent: true },
    { text: '.' },
  ],
  lead: [
    { text: 'I’m Mumtaz Ahmad — an Angular architect with ' },
    { text: '12+ years', bold: true },
    { text: ' and ' },
    { text: '20+ delivered projects', bold: true },
    { text: ' across the full Angular timeline, ' },
    { text: 'v2 through 21', bold: true },
    {
      text:
        '. Design systems, Signals-based architecture and mission-critical real-time UIs — extending end to end with React, Node.js and AWS.',
    },
  ],
  primaryCta: 'Let’s Talk',
  resumeCta: 'Download Résumé',
  stats: [
    { kind: 'number', value: '12', suffix: '+', label: 'Years experience' },
    { kind: 'number', value: '20', suffix: '+', label: 'Projects delivered', feature: true },
    { kind: 'text', text: 'v2–21', label: 'Angular timeline' },
    {
      kind: 'stack',
      text: 'From AI roadmap to production reality',
      stackIcons: ['react', 'node', 'aws'],
      stackLabel: 'React, Node.js and AWS',
    },
  ],
  scrollHint: 'Scroll',
};

export const ABOUT: AboutContent = {
  eyebrow: 'About',
  heading: [
    { text: 'Twelve years of Angular, from', breakAfter: true },
    { text: 'NgModules to Signals.' },
  ],
  paragraphs: [
    [
      {
        text:
          'I’ve spent twelve years watching Angular reinvent itself — and shipped through every version of it. ',
      },
      { text: '20+ projects', bold: true },
      { text: ' later, I still sweat the last 5% of polish as much as the first line of code.' },
    ],
    [
      { text: 'These days that means the framework’s newest chapter: ' },
      { text: 'Standalone Components', bold: true },
      { text: ', ' },
      { text: 'Signals-based reactivity', bold: true },
      { text: ', ' },
      { text: 'Zoneless Change Detection', bold: true },
      { text: ' and the new ' },
      { text: 'Control Flow & Deferrable Views', bold: true },
      {
        text:
          ', layered on RxJS, NgRx and Nx monorepos. I’ve built component libraries other teams adopted without being asked to, led framework upgrades that outlived the people who requested them, and kept real-time systems (WebSockets/STOMP) standing under load across retail, gaming, telecom and trading.',
      },
    ],
    [
      {
        text:
          'None of that lives in isolation from the rest of the stack. I’m just as at home in ',
      },
      { text: 'React', bold: true },
      { text: ' (Hooks, Context, Redux Toolkit, React Query) or writing the ' },
      { text: 'Node.js / Express', bold: true },
      { text: ' APIs underneath, against PostgreSQL or MongoDB, deployed on ' },
      { text: 'AWS', bold: true },
      {
        text:
          '. Somewhere along the way I became the person other engineers hand their code reviews to — and I’ve come to enjoy that as much as writing the code myself.',
      },
    ],
  ],
  meta: [
    { icon: 'pin', text: 'New Delhi, India' },
    { icon: 'diamond', text: 'English (Fluent) · Hindi (Native)' },
  ],
};

export const PROCESS: ProcessContent = {
  eyebrow: 'How I engage',
  heading: [
    { text: 'From AI roadmap to production reality' },
    { text: '.', accent: true },
  ],
  steps: [
    {
      step: 'Step · 01',
      title: 'Map',
      body: [
        {
          text:
            'Your AI roadmap, data reality and governance bar, mapped against what production actually needs before a line of code gets written.',
        },
      ],
      footTitle: 'One accountable engineer',
      footBody: [
        {
          text:
            'Implementation, governance and security owned by the same person building it — not split across three vendors.',
        },
      ],
    },
    {
      step: 'Step · 02',
      title: 'Design',
      body: [
        {
          text:
            'Implementation, governance and security designed as one architecture from day one, not stitched together after separate handoffs.',
        },
      ],
      footTitle: 'Security by design',
      footBody: [
        {
          text:
            'Compliance and audit aren’t bolted on after launch. They’re part of the architecture from the first sprint.',
        },
      ],
    },
    {
      step: 'Step · 03',
      title: 'Build',
      body: [
        {
          text:
            'The intelligence layer gets built once — Angular front end, Node.js/AWS services underneath — and reused by every feature that needs it.',
        },
      ],
      footTitle: 'Judgment, not autopilot',
      footBody: [
        {
          text:
            'AI accelerates the work. It doesn’t replace the engineering judgment that gets a system to production.',
        },
      ],
    },
    {
      step: 'Step · 04',
      title: 'Operate',
      body: [
        {
          text:
            'I stay accountable in production — monitoring, securing and running what I ship until it’s yours to operate independently.',
        },
      ],
      footTitle: 'Production or it doesn’t count',
      footBody: [
        { text: 'A demo isn’t a deliverable. The deliverable is the system: running, governed, secure.' },
      ],
    },
  ],
};

export const ACHIEVEMENTS: AchievementsContent = {
  eyebrow: 'Key achievements',
  heading: 'What I’m brought in to do.',
  items: [
    {
      icon: 'diamond',
      title: 'Enterprise Angular Modernization',
      body: [
        {
          text:
            'Led framework upgrades and migrations across Angular 2–21, adopting standalone components, Signals and Zoneless change detection to cut bundle size and boost runtime performance.',
        },
      ],
    },
    {
      icon: 'diamond',
      title: 'Nx Monorepo & Micro-Frontends',
      body: [
        {
          text:
            'Architected modular Nx monorepos and micro-frontend structures with shared libraries, enabling independent team deployments and consistent UI across products.',
        },
      ],
    },
    {
      icon: 'diamond',
      title: 'Design Systems at Scale',
      body: [
        {
          text:
            'Built and championed reusable component libraries and shared design systems (Storybook, PrimeNG, Material) adopted across multiple teams and independently deployable apps.',
        },
      ],
    },
    {
      icon: 'diamond',
      title: 'Mission-Critical, Real-Time UIs',
      body: [
        {
          text:
            'Delivered live, high-frequency interfaces using WebSockets/STOMP, barcode & QR scanning and secure encrypted payloads for retail, gaming and telecom operations.',
        },
      ],
    },
    {
      icon: 'diamond',
      title: 'End-to-End Full-Stack Delivery',
      body: [
        {
          text:
            'Beyond the front end: React with Hooks, Redux Toolkit and React Query over Node.js / Express REST APIs, against PostgreSQL and MongoDB data layers with JWT/OAuth secured access.',
        },
      ],
    },
    {
      icon: 'diamond',
      title: 'Cloud Deployment & CI/CD',
      body: [
        {
          text:
            'Shipped to AWS (S3, EC2, CloudFront, RDS) with Docker-packaged services and GitHub Actions pipelines, keeping delivery repeatable and quality gated on every merge.',
        },
      ],
    },
  ],
};

export const SKILLS: SkillsContent = {
  eyebrow: 'Core competencies',
  heading: 'The toolkit.',
  lead: 'Everything below is something I’ve shipped to production, not just read about.',
  groups: [
    {
      label: 'Angular & Architecture',
      highlight: true,
      chips: ['Angular 2–21', 'NgRx', 'Nx Monorepo', 'Micro-Frontends', 'Design Systems / Storybook'],
    },
    {
      label: 'Languages & Styling',
      highlight: false,
      chips: ['TypeScript 5+', 'JavaScript (ES2024)', 'Tailwind CSS', 'SCSS / Grid / Flexbox', 'WCAG Accessibility'],
    },
    {
      label: 'Testing & Delivery',
      highlight: false,
      chips: ['Jest / RTL', 'Cypress (E2E)', 'Vite / esbuild', 'CI/CD (GitHub Actions)', 'Agile / Scrum', 'Git'],
    },
    {
      label: 'React & Front-End',
      highlight: false,
      chips: ['React 18', 'Hooks', 'Context API', 'Redux Toolkit', 'React Query (TanStack)', 'React Router'],
    },
    {
      label: 'Node.js & APIs',
      highlight: false,
      chips: ['Node.js', 'Express.js', 'REST APIs / OpenAPI', 'JWT / OAuth', 'WebSockets / STOMP'],
    },
    {
      label: 'Data & Cloud',
      highlight: false,
      chips: ['PostgreSQL', 'SQL', 'MongoDB', 'AWS (S3, EC2, CloudFront)', 'AWS RDS', 'Docker'],
    },
  ],
};

export const EXPERIENCE: ExperienceContent = {
  eyebrow: 'Work experience',
  heading: 'Where I’ve built.',
  items: [
    {
      date: 'May 2025 – Present',
      role: 'Senior Angular Developer',
      org: 'Cognizant',
      via: '(via Pacific)',
      reveal: 'left',
      bullets: [
        [
          { text: 'Lead development of scalable enterprise applications on ' },
          { text: 'Angular 21', bold: true },
          { text: ' with Standalone Components and a Signals-based reactive architecture, applying the new Control Flow (' },
          { text: '@if', code: true },
          { text: '/' },
          { text: '@for', code: true },
          { text: ') and Deferrable Views (' },
          { text: '@defer', code: true },
          { text: ') to improve initial-load performance.' },
        ],
        [
          {
            text:
              'Build responsive, accessible, component-driven UIs with Angular Material and clean modular SCSS; integrate REST APIs and real-time data, and author Node.js build/automation scripts (npm, Vite/esbuild).',
          },
        ],
        [
          {
            text:
              'Uphold quality through code reviews, unit testing and SonarQube quality gates; collaborate with DevOps on CI/CD (GitHub Actions) in an Agile/Scrum team.',
          },
        ],
      ],
    },
    {
      date: 'Dec 2023 – Apr 2025',
      role: 'Senior Angular Developer',
      org: 'CBRE',
      via: '(via Savitr)',
      reveal: 'right',
      bullets: [
        [
          {
            text:
              'Delivered scalable, maintainable enterprise web UIs with Angular 17/18, RxJS 7+, NgRx and Angular Material, focused on reusable components, responsive layouts and ',
          },
          { text: 'WCAG 2.1', bold: true },
          { text: ' accessibility.' },
        ],
        [
          { text: 'Migrated legacy NgModule-based code to ' },
          { text: 'Standalone Component architecture', bold: true },
          {
            text:
              ' on the esbuild pipeline, reducing bundle size and build times; applied Signal Inputs/Outputs, Signal Queries and the ',
          },
          { text: 'inject()', code: true },
          { text: ' function.' },
        ],
        [
          { text: 'Practiced TDD/BDD with Jest and Jasmine/Karma, maintaining ' },
          { text: '>80% coverage', bold: true },
          { text: '; managed application state with NgRx Effects and Selectors.' },
        ],
      ],
    },
    {
      date: 'Sep 2021 – Nov 2023',
      role: 'Associate Consultant',
      org: 'Tata Consultancy Services',
      reveal: 'left',
      bullets: [
        [
          {
            text:
              'Built enterprise Angular applications with NgRx Store, reusable UI component libraries and data-driven dashboards adopted across business modules.',
          },
        ],
        [
          {
            text:
              'Contributed to CI/CD and Git-based workflows in an Agile/Scrum team; led Jest unit-testing initiatives, achieving high coverage across critical modules.',
          },
        ],
      ],
    },
    {
      date: 'Apr 2019 – Aug 2021',
      role: 'Senior Technical Lead – Angular',
      org: 'E2E Networks Limited',
      reveal: 'right',
      bullets: [
        [
          { text: 'Led front-end architecture and Angular upgrade paths, adopting the ' },
          { text: 'Ivy renderer', bold: true },
          {
            text:
              ' for improved tree-shaking and build performance; built modular SPAs with lazy loading, route guards and interceptors.',
          },
        ],
        [
          {
            text:
              'Mentored developers and ran workshops on Angular best practices, component design patterns and RxJS operators.',
          },
        ],
      ],
    },
    {
      date: 'May 2018 – Apr 2019',
      role: 'Senior Software Engineer',
      org: 'Algoworks',
      reveal: 'left',
      bullets: [
        [
          {
            text:
              'Built responsive Angular (v2–8) web applications with HTML5, CSS3 and Bootstrap; consumed RESTful APIs and delivered cross-browser-compatible UIs.',
          },
        ],
      ],
    },
    {
      date: 'Apr 2013 – Mar 2018',
      role: 'Senior Software Engineer',
      org: 'Pitney Bowes',
      reveal: 'right',
      bullets: [
        [
          {
            text:
              'Delivered web projects from small apps to large enterprise solutions, building a strong foundation in JavaScript, TypeScript, ES6+, HTML5 and CSS3; designed responsive interfaces and integrated RESTful APIs.',
          },
        ],
      ],
    },
  ],
};

export const PROJECTS: ProjectsContent = {
  eyebrow: 'Key projects',
  heading: 'Selected work.',
  items: [
    {
      index: '01',
      title: 'Retail Click & Collect Platform',
      subtitle: 'Control XEC (CXEC)',
      image: 'assets/img/cover-retail.svg',
      reveal: 'left',
      bullets: [
        [
          {
            text:
              'Warehouse and Click & Collect order-management system for a large retail chain, used by warehouse and store advisors to receive, stage and hand over customer orders across ',
          },
          { text: 'kiosk and hostess modes', bold: true },
          { text: '.' },
        ],
        [
          {
            text:
              'Implemented barcode & QR scanning (ZXing), on-device PDF/Excel export (jsPDF, html2canvas, ExcelJS), digital signature capture, encrypted payloads (TweetNaCl) and real-time updates over SockJS; lazy-loaded routes with a custom preloading strategy and SonarQube quality gates.',
          },
        ],
      ],
      tech: ['Angular 21 (Standalone + Signals)', 'Angular Material', 'Firebase', 'ngx-translate', 'RxJS', 'Karma/Jasmine'],
    },
    {
      index: '02',
      title: 'Casino Jackpot Fill & Verification UI',
      image: 'assets/img/cover-casino.svg',
      reveal: 'right',
      bullets: [
        [
          {
            text:
              'Gaming-operations application for jackpot fill, processing and verification workflows, including player enrollment and configurable settings, built on a ',
          },
          { text: 'shared enterprise design system', bold: true },
          { text: ' (theme + component library).' },
        ],
        [
          { text: 'Delivered accessible (WCAG, validated with ' },
          { text: 'pa11y-ci', bold: true },
          {
            text:
              ') infinite-scrolling data views with strict SCSS/Stylelint standards, route/auth guards and high unit-test coverage using Karma/Jasmine and ng-mocks.',
          },
        ],
      ],
      tech: ['Angular 18', 'PrimeNG', 'Bootstrap 5', 'ngx-translate', 'Shared design system', 'ESLint/Stylelint'],
    },
    {
      index: '03',
      title: 'Buyside / Sellside Trading Portal',
      subtitle: 'RFO',
      image: 'assets/img/cover-trading.svg',
      reveal: 'left',
      bullets: [
        [
          {
            text:
              'Two independently deployable Angular applications (buyside & sellside) within a single ',
          },
          { text: 'Nx monorepo', bold: true },
          {
            text:
              ', sharing modular libraries — UI kit, core, wizard and workflow — and common SCSS design tokens.',
          },
        ],
        [
          {
            text:
              'Managed complex application state with NgRx (Store, Effects, Router-Store); built interactive Highcharts dashboards, multi-step wizards and multi-language support via ngx-translate.',
          },
        ],
      ],
      tech: ['Angular + Nx monorepo', 'NgRx', 'Highcharts', 'PrimeNG', 'ngx-bootstrap', 'SCSS shared libraries'],
    },
    {
      index: '04',
      title: 'Telecom On-Demand Network Provisioning Portal',
      image: 'assets/img/cover-telecom.svg',
      reveal: 'right',
      bullets: [
        [
          {
            text:
              'Self-service portal for on-demand network/connectivity ordering, with real-time order tracking over ',
          },
          { text: 'STOMP/WebSockets', bold: true },
          { text: ', Google Maps integration for network sites and multi-currency pricing.' },
        ],
        [
          { text: 'Generated strongly typed API clients from ' },
          { text: 'OpenAPI specs', bold: true },
          {
            text:
              ', implemented NgRx-driven state, file uploads, GTM analytics and internationalization with flag icons.',
          },
        ],
      ],
      tech: ['Angular 15', 'NgRx', 'Google Maps', 'STOMP/WebSockets', 'OpenAPI codegen', 'ngx-translate'],
    },
    {
      index: '05',
      title: 'Enterprise Shared Design System',
      subtitle: 'Component library',
      image: 'assets/img/cover-designsystem.svg',
      reveal: 'left',
      bullets: [
        [
          {
            text:
              'A reusable Angular component library and theme consumed by multiple independently deployable applications — published as a versioned package with ',
          },
          { text: '38 documented Storybook stories', bold: true },
          {
            text:
              ' across 11 categories (Action, Input, Layout, Navigation, Overlay, Structure, Utility and more).',
          },
        ],
        [
          {
            text:
              'Shipped virtual-scroll data tables, a file uploader, tree selection and confirmation overlays on shared SCSS design tokens; scaffolded new components with ',
          },
          { text: 'custom Angular schematics', bold: true },
          {
            text:
              ' and kept them under test with ng-mocks, ESLint/Prettier and OIDC-secured demos.',
          },
        ],
      ],
      tech: ['Angular 18', 'Storybook', 'PrimeNG + themes', 'SCSS design tokens', 'Angular schematics', 'ng-mocks'],
    },
  ],
};

export const EDUCATION: EducationContent = {
  eyebrow: 'Education & languages',
  heading: 'Background.',
  items: [
    { year: '2011', degree: 'Master of Computer Applications (MCA)', org: 'Magadh University' },
    { year: '2008', degree: 'Bachelor of Commerce (B.Com)', org: 'Board of Technical Education' },
    { year: 'Languages', degree: 'English · Hindi', org: 'Fluent · Native' },
  ],
};

export const CONTACT: ContactContent = {
  eyebrow: 'Let’s talk',
  heading: [
    { text: 'Open to senior Angular and', breakAfter: true },
    { text: 'front-end architecture roles.' },
  ],
  lead: 'Remote or New Delhi. The fastest way to reach me is email — or grab the résumé and skim it first.',
  resumeCta: 'Download Résumé',
  items: [
    {
      label: 'Email',
      value: 'mumtazahmad2004@gmail.com',
      icon: 'mail',
      href: 'mailto:mumtazahmad2004@gmail.com',
      copyValue: 'mumtazahmad2004@gmail.com',
    },
    {
      label: 'Phone',
      value: '+91 99583 39204',
      icon: 'phone',
      href: 'tel:+919958339204',
      copyValue: '+919958339204',
    },
    {
      label: 'LinkedIn',
      value: 'in/mumtazahmad',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/mumtazahmad',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'ui-mumtaz',
      icon: 'github',
      href: 'https://github.com/ui-mumtaz',
      external: true,
    },
    {
      label: 'Location',
      value: 'New Delhi, India',
      icon: 'pin',
      static: true,
    },
  ],
};

export const FOOTER: FooterContent = {
  owner: 'Mumtaz Ahmad. All rights reserved.',
  tagline: 'We always deliver more than expected',
};
