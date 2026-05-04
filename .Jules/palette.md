## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.

## 2024-05-04 - Keyboard Navigation and Screen Reader Context in Custom UIs
**Learning:** Custom decorative components (like simulated terminals/typewriters) and mobile menus in this app often lack crucial accessibility attributes (`aria-hidden`) and keyboard interactivity (`Escape` key event listeners, returning focus). Active navigation links also missed `aria-current="page"` context for screen readers during scrollspy updates.
**Action:** Always verify that purely visual/decorative animated elements have `aria-hidden="true"`, ensure custom interactive menus can be dismissed via keyboard, and dynamically update ARIA states alongside visual CSS classes in scroll/interaction listeners.
