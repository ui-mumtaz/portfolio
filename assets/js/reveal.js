/* ==========================================================================
   reveal.js — viewport entrance animations

   A port of Elementor's `elementor-invisible` behaviour: an element starts
   hidden, animates in once when it scrolls into view, and is then left alone
   (never replayed on scroll-back).

   Progressive enhancement contract: CSS never hides anything. This script
   applies `.is-hidden` itself, so if the script fails to load — or JS is off
   entirely — every element renders visible and readable.

   Markup API:
     data-reveal="up|down|left|right|zoom"   direction to animate from
     data-reveal-delay="180"                 stagger in ms
     data-reveal-stagger="90"                on a container: auto-stagger its
                                             [data-reveal] descendants
   ========================================================================== */

(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

  function init() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    // Honour the OS setting and bail out entirely: nothing hidden, nothing
    // observed. Same outcome for browsers without IntersectionObserver.
    if (REDUCED.matches || !("IntersectionObserver" in window)) {
      return;
    }

    applyAutoStagger();

    var i;
    for (i = 0; i < targets.length; i++) {
      targets[i].classList.add("is-hidden");
    }

    var observer = new IntersectionObserver(onIntersect, {
      threshold: 0.15,
      // fire a touch before the element is fully in view
      rootMargin: "0px 0px -10% 0px"
    });

    for (i = 0; i < targets.length; i++) {
      observer.observe(targets[i]);
    }

    // If the user lands mid-page (deep link, restored scroll position),
    // anything already on screen should show without waiting for a scroll.
    requestAnimationFrame(function () {
      for (var j = 0; j < targets.length; j++) {
        if (isInViewport(targets[j])) {
          show(targets[j]);
          observer.unobserve(targets[j]);
        }
      }
    });

    // If the user flips reduced-motion on mid-session, reveal the rest at once.
    onMotionPreferenceChange(REDUCED, function () {
      if (!REDUCED.matches) return;
      for (var k = 0; k < targets.length; k++) {
        observer.unobserve(targets[k]);
        targets[k].classList.remove("is-hidden");
        targets[k].classList.add("is-visible", "is-revealed");
      }
    });

    function onIntersect(entries) {
      for (var n = 0; n < entries.length; n++) {
        if (!entries[n].isIntersecting) continue;
        show(entries[n].target);
        // one-shot, matching Elementor
        observer.unobserve(entries[n].target);
      }
    }
  }

  function show(el) {
    if (el.classList.contains("is-visible")) return;

    var delay = parseInt(el.getAttribute("data-reveal-delay"), 10);
    if (!delay || delay < 0) delay = 0;

    window.setTimeout(function () {
      el.classList.remove("is-hidden");
      el.classList.add("is-visible");
    }, delay);

    // drop the will-change hint once the transition has finished
    window.setTimeout(function () {
      el.classList.add("is-revealed");
    }, delay + 900);
  }

  /* Containers marked data-reveal-stagger="90" hand their [data-reveal]
     children an incrementing delay, so lists and card grids cascade without
     hand-numbering every item in the markup. */
  function applyAutoStagger() {
    var groups = document.querySelectorAll("[data-reveal-stagger]");

    for (var g = 0; g < groups.length; g++) {
      var step = parseInt(groups[g].getAttribute("data-reveal-stagger"), 10);
      if (!step || step < 0) step = 90;

      var kids = groups[g].querySelectorAll("[data-reveal]");
      for (var k = 0; k < kids.length; k++) {
        if (kids[k].hasAttribute("data-reveal-delay")) continue;
        kids[k].setAttribute("data-reveal-delay", String(k * step));
      }
    }
  }

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.9 && rect.bottom > 0;
  }

  /* addEventListener on MediaQueryList is unsupported in older Safari */
  function onMotionPreferenceChange(mql, handler) {
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler);
    } else if (typeof mql.addListener === "function") {
      mql.addListener(handler);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
