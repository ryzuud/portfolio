## 2024-04-15 - Dynamic ARIA Attributes Syncing
**Learning:** Found that interactive components like language toggles and mobile nav menus had static `aria-label` or missing `aria-expanded` attributes that didn't update when the UI state changed. This creates a disconnect for screen reader users where the visual state (like menu opening or language changing) isn't communicated properly.
**Action:** Always ensure that JavaScript toggles (like `.toggle()`) that change visual state also dynamically update corresponding ARIA attributes (e.g., `aria-expanded`, `aria-label`) so assistive technologies reflect the current state.
## 2025-02-14 - Keyboard Support for Modals and Menus
**Learning:** Found that custom mobile menus or modal components often lack a standard way to dismiss them using the keyboard, which can trap keyboard users or make navigation tedious. Additionally, when a menu is closed, focus needs to be programmatically returned to the button that opened it.
**Action:** Always implement an `Escape` key listener for custom menus/modals to close them, and explicitly call `.focus()` on the trigger element (like the toggle button) when the menu is dismissed.
