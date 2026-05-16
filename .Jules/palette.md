## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.

## 2026-05-16 - Keyboard Navigation and ARIA Contexts in Navigation
**Learning:** Mobile menus often lack keyboard support to close them without clicking outside or on a link. Additionally, scrollspy navigation doesn't natively inform screen readers which section is currently active, resulting in a loss of context as the user scrolls down the page.
**Action:** Implemented an 'Escape' key listener for custom mobile menus that closes the menu and returns focus to the toggle button. Also, added logic to the scrollspy feature to dynamically toggle the `aria-current="true"` attribute on active navigation links.
