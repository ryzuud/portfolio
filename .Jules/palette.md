## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.

## 2024-06-13 - Escape Key Accessibility for Custom Mobile Menus
**Learning:** Custom mobile menus often lack native keyboard accessibility. While toggle buttons might be accessible, users relying on keyboards need an intuitive way to dismiss the menu. Pressing the 'Escape' key is a standard pattern for closing modals, dialogs, and custom dropdown menus.
**Action:** When implementing custom interactive elements like mobile menus, always ensure they can be dismissed with the 'Escape' key, and critical to that interaction, programmatically return focus to the toggle button that initiated the menu to maintain a logical tab flow.
