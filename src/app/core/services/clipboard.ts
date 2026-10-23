import { DOCUMENT, Service, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Copy-to-clipboard with the same fallback chain as contact.js: the async
 * Clipboard API when available in a secure context, otherwise a hidden
 * textarea + execCommand('copy') for file:// / plain http.
 */
@Service()
export class Clipboard {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  copy(text: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.reject(new Error('clipboard unavailable outside the browser'));
    }

    const window = this.document.defaultView;
    if (window?.navigator.clipboard && window.isSecureContext) {
      return window.navigator.clipboard.writeText(text);
    }

    return new Promise<void>((resolve, reject) => {
      const area = this.document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', 'readonly');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      area.style.opacity = '0';
      this.document.body.appendChild(area);
      area.select();

      let ok = false;
      try {
        ok = this.document.execCommand('copy');
      } catch {
        ok = false;
      }

      this.document.body.removeChild(area);
      ok ? resolve() : reject(new Error('copy failed'));
    });
  }
}
