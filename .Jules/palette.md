## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.

## 2024-05-24 - Accessibility Enhancements for Custom Navigation Menus
**Learning:** Custom mobile menus need explicit keyboard support; without it, users who rely on keyboard navigation can easily become trapped when a menu opens and obscure their view. Additionally, scrollspy functionality needs to actively set `aria-current="page"` to give screen readers proper context of the user's location as they scroll down the page.
**Action:** When implementing custom menus, always bind an 'Escape' key listener to dismiss it and ensure focus returns to the toggle button. When using scroll-based active state for links, dynamically manage `aria-current`.
