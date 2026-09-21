# Accessibility Standards

This design system is accessibility-informed but has not been formally audited.

## Keyboard

Every interactive component must:

- be reachable by keyboard;
- expose visible focus;
- support expected activation keys;
- avoid pointer-only interactions.

## Semantics

Prefer native HTML elements before custom roles.

Examples:

- `button` for actions;
- `a` for navigation;
- `label` for form controls;
- `fieldset` / `legend` for grouped choices;
- `table` for tabular relationships;
- `dialog` for modal decisions when supported.

## Errors

Errors should:

1. identify the specific problem;
2. be associated with the affected control;
3. not rely on color alone;
4. explain correction when the system knows how to correct it.

## Status messages

Dynamic changes such as save status, upload completion, search results, and submission state should be exposed through appropriate live-region behavior without creating excessive announcements.

## Focus

Use a high-contrast focus ring that remains visible on light and dark surfaces.

Do not remove browser focus unless it is replaced with an equally or more visible treatment.

## Motion

Honor `prefers-reduced-motion`.

Animation should clarify relationship or state—not decorate routine actions.

## Reflow

Interfaces should remain usable at narrow widths and high zoom.

Dense enterprise tables may require a deliberate alternate presentation rather than simply shrinking text.

## Color and contrast

Semantic meaning must include text/icon/state treatment in addition to color.

All final token combinations should be contrast-tested before production use.
