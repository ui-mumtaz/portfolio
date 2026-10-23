import { Service, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEO_META } from '../../data/portfolio-data';

/** Ports the <head> meta tags from index.html, plus Twitter card tags. */
@Service()
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  apply(): void {
    this.title.setTitle(SEO_META.title);

    this.meta.addTags([
      { name: 'description', content: SEO_META.description },
      { name: 'author', content: SEO_META.author },
      { name: 'theme-color', content: SEO_META.themeColor },

      { property: 'og:type', content: SEO_META.ogType },
      { property: 'og:url', content: SEO_META.ogUrl },
      { property: 'og:title', content: SEO_META.ogTitle },
      { property: 'og:description', content: SEO_META.ogDescription },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SEO_META.ogTitle },
      { name: 'twitter:description', content: SEO_META.ogDescription },
    ]);
  }
}
