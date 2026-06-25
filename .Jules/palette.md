## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.

## 2024-06-25 - Custom Mobile Menu Keyboard Accessibility
**Learning:** When implementing custom interactive elements like mobile menus, relying solely on button clicks excludes keyboard-only users. It's critical to provide an intuitive exit strategy (like the Escape key) and proper focus management (returning focus to the trigger) to prevent users from getting trapped in the menu or losing their place in the DOM structure.
**Action:** Always implement an 'Escape' key event listener that closes the menu, properly updates `aria-expanded` state, and uses `.focus()` to return focus to the toggle button.
