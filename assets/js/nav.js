/* ==========================================================================
   nav.js — sticky header, scroll-spy, mobile menu

   Mirrors the reference site's sticky-header behaviour (ElementsKit sticky
   content): transparent over the hero, solid + blurred once scrolled.

   Smooth scrolling and header offset are handled in CSS
   (scroll-behavior + scroll-padding-top), so there is no JS scroll hijacking
   here — which also means the reduced-motion override in animations.css is
   enough to make jumps instant.
   ========================================================================== */

(function () {
  "use strict";

  var STUCK_AT = 60;
  var DESKTOP_MIN = 901;

  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.getElementById("nav-menu");
  var links = [];
  var sections = [];
  var ticking = false;

  function init() {
    if (!nav) return;

    links = Array.prototype.slice.call(nav.querySelectorAll(".nav__link"));

    // pair each nav link with the section it points at
    for (var i = 0; i < links.length; i++) {
      var id = (links[i].getAttribute("href") || "").replace(/^#/, "");
      var section = id ? document.getElementById(id) : null;
      if (section) sections.push({ link: links[i], el: section });
    }

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener("click", onToggle);
      menu.addEventListener("click", onMenuClick);
      document.addEventListener("keydown", onKeydown);
    }

    update();
  }

  /* ---------------- sticky + scroll-spy ---------------- */

  function request() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  function update() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (y > STUCK_AT) {
      nav.classList.add("is-stuck");
    } else {
      nav.classList.remove("is-stuck");
    }

    spy();
  }

  function spy() {
    // the line just under the header that decides "which section am I in"
    var line = nav.offsetHeight + 90;
    var active = null;

    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].el.getBoundingClientRect();
      if (rect.top <= line && rect.bottom > line * 0.5) {
        active = sections[i].link;
      }
    }

    // bottom of the page: keep the final section lit rather than nothing
    var atBottom =
      window.innerHeight + window.pageYOffset >=
      document.documentElement.scrollHeight - 4;
    if (!active && atBottom && sections.length) {
      active = sections[sections.length - 1].link;
    }

    for (var j = 0; j < links.length; j++) {
      if (links[j] === active) {
        links[j].setAttribute("aria-current", "true");
      } else {
        links[j].removeAttribute("aria-current");
      }
    }
  }

  /* ---------------- mobile menu ---------------- */

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function onToggle() {
    if (isOpen()) {
      closeMenu(true);
    } else {
      openMenu();
    }
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");

    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeMenu(returnFocus) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  }

  /* Close on link tap so the anchor jump lands on an unlocked, scrollable
     body. Our handler runs before the browser follows the href. */
  function onMenuClick(event) {
    if (!isOpen()) return;
    var link = event.target.closest ? event.target.closest("a[href^='#']") : null;
    if (link) closeMenu(false);
  }

  function onKeydown(event) {
    if (!isOpen()) return;

    if (event.key === "Escape" || event.key === "Esc") {
      closeMenu(true);
      return;
    }

    if (event.key !== "Tab") return;

    // trap focus inside the open panel (the toggle is part of the cycle)
    var focusable = getFocusable();
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function getFocusable() {
    var nodes = menu.querySelectorAll("a[href], button:not([disabled])");
    var out = [];
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].offsetParent !== null) out.push(nodes[i]);
    }
    out.push(toggle);
    return out;
  }

  function onResize() {
    // crossing back to the desktop layout leaves the panel behind; reset it
    if (toggle && menu && isOpen() && window.innerWidth >= DESKTOP_MIN) {
      closeMenu(false);
    }
    request();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
