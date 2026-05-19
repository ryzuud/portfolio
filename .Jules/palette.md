## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2024-05-10 - Canvas Animations and prefers-reduced-motion
**Learning:** Found that JavaScript-driven animations (like drawing on a `<canvas>`) are inherently immune to standard CSS `@media (prefers-reduced-motion: reduce)` rules that globally kill CSS transitions and keyframe animations. Users who request reduced motion at the OS level to avoid vestibular discomfort would still experience continuous particle animations.
**Action:** Always verify `window.matchMedia('(prefers-reduced-motion: reduce)').matches` in JavaScript before instantiating heavy/continuous visual animations on the canvas, and hide the canvas element if the user prefers reduced motion.
## 2026-05-19 - Typewriter effect accessibility
**Learning:** Typewriter effects that append text character by character cause screen readers to read out meaningless gibberish syntax or individual letters out of context, creating a bad experience.
**Action:** Add `aria-hidden="true"` to the wrapper elements of decorative interactive text (like terminals or typewriters). To be more comprehensive, a visually hidden (`.sr-only`) element containing the full text should be added to provide context, though this project lacks an  class.
## 2026-05-19 - Typewriter effect accessibility
**Learning:** Typewriter effects that append text character by character cause screen readers to read out meaningless gibberish syntax or individual letters out of context, creating a bad experience.
**Action:** Add `aria-hidden="true"` to the wrapper elements of decorative interactive text (like terminals or typewriters). To be more comprehensive, a visually hidden (`.sr-only`) element containing the full text should be added to provide context, though this project lacks an `.sr-only` class.
