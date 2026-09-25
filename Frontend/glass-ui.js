
(() => {
  "use strict";

  const initGlassUI = () => {
    const selectors = [
      "main .rounded-xl",
      "main .rounded-2xl",
      "main .rounded-3xl",
      "main [class*='backdrop-blur']",
      "main [class*='shadow-']",
      "main button",
      "main a",
      "main input",
      "main select",
      "main textarea"
    ];

    const nodes = [...new Set(selectors.flatMap(s => [...document.querySelectorAll(s)]))];

    nodes.forEach(el => {
      if (el.closest(".glass-nav") || el.closest("header")) {
        if (el.tagName === "A" || el.tagName === "BUTTON") el.classList.add("glass-interactive");
        return;
      }

      const cls = typeof el.className === "string" ? el.className : "";

      // Larger panels become glass cards; controls get lighter glass interaction.
      if (
        /rounded-(xl|2xl|3xl)/.test(cls) &&
        !el.matches("button,a,input,select,textarea")
      ) {
        el.classList.add("glass-card");
      } else if (el.matches("button,a,input,select,textarea")) {
        el.classList.add("glass-interactive");
      }
    });

    const header = document.querySelector("header");
    if (header) header.classList.add("glass-header");

    document.querySelectorAll("nav").forEach(nav => nav.classList.add("glass-nav"));

    // Cursor-following highlight gives the glass a subtle refractive feel.
    document.querySelectorAll(".glass-card, .glass-interactive, .glass-nav").forEach(el => {
      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      }, { passive: true });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGlassUI, { once: true });
  } else {
    initGlassUI();
  }
})();
