# Cedarline Web Design System

A working **corporate web standards and reusable UI system** for the fictional Cedarline Mutual insurance experience.

**Design systems · Corporate web standards · Accessibility · Visual design · Responsive UI · HTML/CSS/JavaScript**

[**Live prototype**](https://joshuaokent-spec.github.io/Cedarline-Web-Design-System/) · [**Component standards**](docs/components.md) · [**Accessibility standards**](docs/accessibility.md)

> **Cedarline Mutual is fictional.** This project is an independent UX portfolio case study.

## At a glance

| | |
| --- | --- |
| **Role** | UX / UI Designer + front-end prototyper |
| **Project type** | Corporate web standards / design-system case study |
| **Core problem** | Create a consistent, accessible visual and interaction language across customer and employee experiences |
| **Deliverables** | Design tokens, foundations, reusable components, accessibility rules, responsive patterns, content standards, governance guidance, coded style guide |
| **Tools / tech** | HTML, CSS, JavaScript, JSON, SVG, GitHub Pages |
| **Quality** | Automated validation for JavaScript syntax, token JSON, duplicate IDs, and same-page links |

## Project thesis

The first three Cedarline projects solve specific UX problems. Project 4 asks a system-level question:

> **What shared standards should keep all Cedarline web experiences consistent, accessible, maintainable, and recognizable?**

The goal is not to make every Cedarline product look identical. It is to standardize the decisions that should not need to be reinvented: color roles, spacing, buttons, form behavior, focus treatment, status messaging, tables, responsive behavior, and content patterns.

## System principles

### Calm under pressure
Insurance interactions often happen during stressful moments. Hierarchy and status communication should reduce uncertainty.

### Plain language first
Formal terminology remains available, but interfaces should help people reach it without already knowing the vocabulary.

### Accessible by default
Keyboard behavior, semantics, focus, contrast, errors, motion, and reflow are component requirements—not cleanup tasks.

### System, not sameness
Shared foundations create consistency while consumer and enterprise products can still use different layouts and densities.

## Foundations

The live system documents:

- brand and semantic color tokens;
- typography hierarchy;
- spacing scale;
- radii;
- elevation;
- responsive breakpoints.

The canonical machine-readable token source lives in `tokens/design-tokens.json`.

## Component library

The coded style guide includes working examples of:

- primary, secondary, tertiary, destructive, and disabled buttons;
- labeled text fields;
- helper and error states;
- select controls;
- radio and checkbox groups;
- information, success, warning, and error alerts;
- consumer, enterprise, and educational card patterns;
- dense data tables;
- modal dialog behavior;
- focus treatment.

See [Component Standards](docs/components.md).

## Accessibility standards

The system documents and demonstrates:

- skip navigation;
- visible focus;
- native control preference;
- grouped form semantics;
- text-based error recovery;
- dynamic status guidance;
- reduced-motion support;
- responsive reflow;
- color-independent state communication.

See [Accessibility Standards](docs/accessibility.md).

## Content standards

Cedarline copy should be calm, direct, human, and precise.

Examples:

**Preferred:** “What happened?”
**Avoid:** “Select loss classification.”

**Preferred:** “Your claim report was received.”
**Avoid:** “Your claim is approved.”

See [Content Standards](docs/content-standards.md).

## Governance & handoff

The system also documents when teams should:

- reuse an existing pattern;
- create a variant;
- propose a new component;
- treat accessibility as a release gate;
- document component states and implementation behavior;
- version changes;
- establish design/engineering/content/accessibility ownership.

See [Governance & Handoff](docs/governance.md).

## Adobe workflow

The target UX role values Adobe Creative Suite experience, so the repository includes an explicit [Adobe Asset Production Workflow](docs/adobe-asset-workflow.md) describing where:

- **Illustrator** fits for logo, icon, and vector master assets;
- **Photoshop** fits for image-treatment and raster-production standards;
- **InDesign** fits for a polished, shareable standards guide.

### Portfolio integrity

The coded SVG/CSS assets in this repository should **not** be presented as Illustrator-, Photoshop-, or InDesign-authored unless corresponding source work is actually created in those applications.

The strongest follow-up for this project is to add:

1. an Illustrator Cedarline logo/icon master;
2. a Photoshop image-treatment board;
3. an InDesign/PDF design-system reference guide.

That will turn the Adobe requirement from a documented workflow into visible tool evidence.

## Cedarline portfolio

| Project | UX problem |
| --- | --- |
| [Project 1 — Claim Reporting](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) | How should a customer report a loss? |
| [Project 2 — Claims Operations](https://github.com/joshuaokent-spec/Cedarline-Claims-Operations-Dashboard) | How should an employee manage the work that follows? |
| [Project 3 — Policy & Coverage IA](https://github.com/joshuaokent-spec/Cedarline-Policy-Coverage-IA) | How should customers find policy and coverage information? |
| **Project 4 — Web Design System** | What shared standards should govern all of those experiences? |

Together the four projects demonstrate:

**transactional UX → enterprise UX → information architecture → design systems / corporate web standards**

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── assets/
│   └── cedarline-mark.svg
├── tokens/
│   └── design-tokens.json
├── docs/
│   ├── project-brief.md
│   ├── foundations.md
│   ├── components.md
│   ├── accessibility.md
│   ├── content-standards.md
│   ├── governance.md
│   └── adobe-asset-workflow.md
└── .github/
    └── workflows/
        └── validate.yml
```

## Run locally

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Research integrity

This is a portfolio design-system concept, not a system deployed inside a real insurer.

I do **not** claim:

- enterprise adoption;
- a real governance council;
- product-team usage metrics;
- completed cross-team research;
- formal accessibility certification.

The project demonstrates how I would structure, document, implement, and hand off shared web standards so those things could be validated in a real organization.