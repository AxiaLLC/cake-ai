---
name: project-kickoff
description: >
  Creates a structured project folder for a new project or spiral iteration.
  Use when the user describes something big, says "/new-project", or starts
  a new spiral iteration after the Scope step.
---

# /project-kickoff — Structured Project Setup

Creates a project folder with the two-file memory system: `readme.md` (long-term memory) and `scratchpad.md` (working memory).

## When to Use

**Auto-trigger when:**
- User describes a project to build (after Scope step in the spiral)
- User says "/new-project" or "let's start a new project"
- The Scope step has identified a project and the user has approved it

## The Structure

```
projects/YYYYMMDD-project-name/
├── readme.md       ← Long-term memory: goals, lessons, key context
└── scratchpad.md   ← Working memory: current plan, active checklist, temporary analysis
```

### Naming Convention

`YYYYMMDD-project-name` — date first for natural chronological sorting.

Examples:
- `20260221-trip-planner`
- `20260305-habit-tracker`
- `20260412-budget-dashboard`

## readme.md (Long-Term Memory)

This file persists for the life of the project. It's lean, distilled, and always current.

```markdown
---
project: [Project Name]
status: in-progress
started: [YYYY-MM-DD]
iteration: [which spiral iteration this is]
skills-used: []
---

# [Project Name]

## Goal

[One paragraph: what are we building and why it matters to the user]

## Plan

[The approved checklist from the Scope step]

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

## Key Decisions

[Filled in as the project progresses — important choices and their reasoning]

## Lessons Learned

[Filled in during Reflect — what worked, what didn't, what to do differently]
```

## scratchpad.md (Working Memory)

This file is temporary. It holds the active work: current analysis, detailed plans, debugging notes, brainstorming. When the project ships, the scratchpad gets archived and the good stuff gets distilled into the readme.

```markdown
---
project: [Project Name]
type: scratchpad
last-updated: [YYYY-MM-DD]
---

# Scratchpad: [Project Name]

## Current Focus

[What we're working on right now]

## Active Checklist

- [ ] [Current step broken into sub-steps]
- [ ] [Sub-step 2]
- [ ] [Sub-step 3]

## Notes

[Working notes, analysis, ideas — this is the messy desk, not the filing cabinet]
```

## The Two-File System Explained

When Cake creates these files, explain the system:

> "Every project gets two files:
>
> **readme.md** is your project's permanent record — goals, decisions, and lessons. Think of it as the recipe card. It stays lean and up to date.
>
> **scratchpad.md** is your working space — current plans, notes, analysis. Think of it as the messy counter while you're cooking. When we're done, we clean it up: the good stuff goes to the readme, everything else gets archived.
>
> This is how you give AI memory that actually works."

## Behavior

1. Create the project folder in `projects/` with the naming convention
2. Generate `readme.md` from the template, populated with the user's project details
3. Generate `scratchpad.md` with the initial plan from the Scope step
4. If Git is available, create a checkpoint: "Start project: [name]"
5. Narrate the creation to the user

## After Kickoff

Transition directly into the Build step:

> "Project is set up. Your plan is in the scratchpad. Let's start with the first item on the checklist."
