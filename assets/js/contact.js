/* ==========================================================================
   contact.js — copy-to-clipboard for the email and phone rows

   The button swaps to a tick for a moment and the result is announced through
   the aria-live region in the markup, so the confirmation is not colour-only.
   ========================================================================== */

(function () {
  "use strict";

  var RESET_MS = 1800;

  var toast = document.querySelector("[data-toast]");
  var toastTimer = null;

  function init() {
    var buttons = document.querySelectorAll("[data-copy]");
    if (!buttons.length) return;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", onClick);
    }
  }

  function onClick(event) {
    var button = event.currentTarget;
    var value = button.getAttribute("data-copy");
    if (!value) return;

    copy(value).then(
      function () {
        markCopied(button);
        showToast("Copied " + value);
      },
      function () {
        // clipboard blocked (insecure context, denied permission) — say so
        // rather than silently doing nothing
        showToast("Press Ctrl+C to copy: " + value);
      }
    );
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    /* file:// and plain http are not secure contexts, so the async Clipboard
       API is unavailable there. Fall back to the legacy path. */
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "readonly");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();

      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }

      document.body.removeChild(area);
      ok ? resolve() : reject(new Error("copy failed"));
    });
  }

  function markCopied(button) {
    var icon = button.querySelector("use");
    button.classList.add("is-copied");
    if (icon) setHref(icon, "#i-check");

    window.setTimeout(function () {
      button.classList.remove("is-copied");
      if (icon) setHref(icon, "#i-copy");
    }, RESET_MS);
  }

  /* <use href> needs the xlink fallback for older WebKit */
  function setHref(useEl, value) {
    useEl.setAttribute("href", value);
    useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", value);
  }

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("is-visible");

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
      toast.textContent = "";
    }, 2600);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
