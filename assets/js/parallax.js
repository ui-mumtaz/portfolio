/* ==========================================================================
   parallax.js — scroll-linked motion

   Port of the reference site's jarallax parallax backgrounds plus Elementor
   Pro's motion-fx (transform/opacity driven by scroll position).

   Markup API:
     data-parallax="0.18"      translate on Y by progress x speed x 100px.
                               Negative values move against the scroll.
     data-motion-fx="fade-out" fade + lift the element out as it scrolls away
                               (used on the hero copy).

   Everything is written to transform/opacity only, inside a rAF, so nothing
   here triggers layout. No-ops entirely under prefers-reduced-motion.
   ========================================================================== */

(function () {
  "use strict";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

  var layers = [];
  var fx = [];
  var ticking = false;
  var viewportH = 0;

  function init() {
    if (REDUCED.matches) return;

    layers = toArray(document.querySelectorAll("[data-parallax]"));
    fx = toArray(document.querySelectorAll("[data-motion-fx]"));
    if (!layers.length && !fx.length) return;

    measure();

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    update();
  }

  function measure() {
    viewportH = window.innerHeight || document.documentElement.clientHeight;
  }

  function onResize() {
    measure();
    request();
  }

  function request() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  function update() {
    var i;

    for (i = 0; i < layers.length; i++) {
      var el = layers[i];
      var rect = el.getBoundingClientRect();

      // skip anything comfortably off-screen
      if (rect.bottom < -viewportH || rect.top > viewportH * 2) continue;

      var speed = parseFloat(el.getAttribute("data-parallax"));
      if (isNaN(speed)) speed = 0.15;

      /* progress: -1 when the element sits a full viewport below the fold,
         0 when centred, +1 when a full viewport above it */
      var centre = rect.top + rect.height / 2;
      var progress = (viewportH / 2 - centre) / viewportH;

      /* Written as a custom property, not a transform: some of these layers
         also run the `drift` keyframes, and a CSS animation outranks an inline
         style. animations.css composes --parallax-y into both. */
      el.style.setProperty(
        "--parallax-y",
        (progress * speed * 100).toFixed(2) + "px"
      );
    }

    for (i = 0; i < fx.length; i++) {
      var node = fx[i];
      if (node.getAttribute("data-motion-fx") !== "fade-out") continue;

      var box = node.getBoundingClientRect();
      /* 0 while the element is at rest near the top of the page, ramping to 1
         once it has been scrolled a full viewport away */
      var out = clamp(-box.top / (viewportH * 0.85), 0, 1);

      node.style.opacity = String(1 - out);
      node.style.transform =
        "translate3d(0, " + (out * -60).toFixed(2) + "px, 0)";
    }
  }

  function clamp(n, min, max) {
    return n < min ? min : n > max ? max : n;
  }

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
