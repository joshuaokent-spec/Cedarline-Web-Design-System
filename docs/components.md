# Component Standards

Each reusable component should document:

1. purpose;
2. when to use;
3. when not to use;
4. anatomy;
5. states;
6. accessibility;
7. responsive behavior;
8. implementation notes.

## Buttons

### Primary
Use for the single most important action in the current decision.

### Secondary
Use for Back, Cancel, alternative, or non-primary actions.

### Tertiary
Use for low-emphasis actions where a button affordance is still helpful.

### Destructive
Use only when the action can remove, cancel, or irreversibly change information.

Button labels should describe the outcome.

## Form fields

- persistent labels are required;
- placeholder text cannot replace a label;
- helper text should explain format or optionality;
- errors should identify the problem in text;
- errors should be associated with the relevant control;
- native input types are preferred.

## Alerts

Alerts combine:

- semantic color;
- visible text;
- a clear heading or status label.

Color alone cannot carry the meaning.

## Cards

Cards are for related groups of information with a meaningful boundary. Avoid putting every section inside a card simply because the pattern exists.

## Tables

Use tables for dense comparison across stable attributes.

For narrow screens or high zoom:

- preserve readable text size;
- allow horizontal scrolling when appropriate;
- consider alternate list/card views for critical workflows.

## Dialogs

Use a dialog only when the task requires focused attention before returning to the parent context.

Dialogs require:

- programmatic name;
- logical focus;
- visible cancel path;
- keyboard operation;
- no hidden critical information behind the overlay.
