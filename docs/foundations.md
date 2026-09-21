# Foundations

## Color

Use semantic tokens rather than hard-coding brand colors directly into components.

Core roles:

- **Brand / cedar:** primary action, navigation emphasis, selected state.
- **Text / primary:** high-contrast body and heading text.
- **Text / secondary:** helper and secondary information.
- **Surface / subtle:** low-emphasis grouped areas.
- **Status / success:** successful completion or positive system state.
- **Status / warning:** attention without failure.
- **Status / danger:** errors and destructive actions.
- **Focus / ring:** highly visible keyboard focus.

## Typography

The portfolio prototype uses a system-ui stack to avoid font licensing and loading dependencies.

Hierarchy is created through:

- size;
- weight;
- line height;
- spacing;
- max-width;
- placement.

Do not rely on color alone to distinguish headings or secondary content.

## Spacing

Spacing follows an 8px-derived rhythm:

- 4px — micro spacing;
- 8px — tight inline spacing;
- 12px — compact component spacing;
- 16px — standard component padding;
- 24px — section relationship;
- 32px — major grouping;
- 48px — large section spacing.

## Radius

- 8px — controls;
- 16px — cards;
- 24px — large panels;
- pill — status badges only when the capsule form supports scanning.

## Elevation

Use shadows sparingly for:

- floating dialogs;
- sticky surfaces;
- cards that genuinely need separation from the page.

Do not use elevation simply to make every container feel clickable.
