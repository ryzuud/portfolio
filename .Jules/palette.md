## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.
## 2026-06-01 - [Decorative Text Elements]
**Learning:** Decorative text animations (like typewriter effects and mock terminals) cause significant noise and confusion for screen readers if left exposed.
**Action:** Always add `aria-hidden="true"` to the wrapper elements of these purely visual/decorative animations.

## 2026-06-01 - [Mobile Menu Keyboard Accessibility]
**Learning:** Custom mobile menus often trap keyboard users if there is no explicit way to close them via keyboard (e.g., Escape key) and return focus to the toggle.
**Action:** Implement an 'Escape' keydown listener on the document that closes active menus and explicitly calls `.focus()` on the menu toggle button.
