# Governance & Handoff

## Reuse first

Use an existing component when the user need, interaction model, and accessibility behavior already match.

Do not create a new component simply because a team wants a different visual treatment.

## Extend with evidence

A new variant should solve a recurring need that cannot be met cleanly by existing options.

Document:

- the user need;
- product contexts;
- states;
- accessibility behavior;
- implementation differences.

## Accessibility gate

A component is not complete until keyboard, semantics, focus, contrast, error, motion, and reflow behavior are documented.

## Design–development handoff

A useful component handoff includes:

- design token references;
- component states;
- responsive behavior;
- content guidance;
- accessibility behavior;
- sample markup or implementation notes;
- known constraints.

## Versioning

A production system should distinguish:

- patch — bug/accessibility fix with no intended breaking API change;
- minor — backward-compatible component or token addition;
- major — breaking component or token change.

## Contribution workflow

A real enterprise workflow should include:

1. documented problem;
2. product examples;
3. design review;
4. accessibility review;
5. engineering review;
6. implementation;
7. usage documentation;
8. release notes.

## Ownership

Production systems need named design, engineering, accessibility, and content owners. A shared library without ownership becomes a component graveyard.
