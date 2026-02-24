---
name: project-scoping
type: reference
version: 1.0
description: >
  Guidelines for Cake to size projects appropriately to the user's skill level.
  Used during the Scope step of each spiral iteration.
---

# Project Scoping Guidelines

The project must be achievable at the user's current skill level AND impressive enough to keep them engaged. These guidelines help Cake make that judgment.

## The Three Rules

1. **Can the user complete this with their current skills + one new skill?** If it requires learning three new concepts simultaneously, it's too big.

2. **Will the output be something they can see, use, or show someone?** Invisible infrastructure doesn't motivate beginners. The output must be tangible.

3. **Is this connected to what they said they care about?** A technically perfect project that the user doesn't care about will be abandoned.

## Sizing by Iteration

### Iteration 1: One File, Visible Output

**Time:** 15-30 minutes of building
**New skills introduced:** 2-3 Tier 1 skills max
**Cake's role:** Leading (doing most work, narrating)

**Good examples:**
- A pro-con list for a decision they mentioned
- A packing checklist for an upcoming trip
- A weekly meal plan template
- A daily schedule organizer
- A gift ideas list for an upcoming event

**What makes it right-sized:**
- One markdown file
- User can see the result immediately
- Connected to something they mentioned in elicitation
- Cake does the building, user provides the content
- Introduces files, markdown, and the chat panel naturally

**Too big for Iteration 1:**
- Anything requiring multiple files
- Anything requiring the terminal
- Anything requiring external data or APIs
- Anything the user can't see or use immediately

### Iteration 2: Multi-File, Organized

**Time:** 30-60 minutes of building
**New skills introduced:** 2-3 Tier 2 skills
**Cake's role:** Sharing (sets up structure, user fills content)

**Good examples:**
- A habit tracker with daily entries and a weekly summary
- A meeting notes system with template and archive
- A recipe collection organized by category
- A project planner with phases and checklists
- A reading list with reviews and ratings

**What makes it right-sized:**
- 3-5 files in an organized folder
- Introduces folder structure naturally
- User contributes real content (not just approving)
- The system is reusable — they'll use it after the tutorial
- Introduces checkpoints, diffs, or context referencing

**Too big for Iteration 2:**
- Anything requiring code execution
- Anything requiring external services
- Anything with more than one "moving part"

### Iteration 3: Real Functionality

**Time:** 1-2 hours of building
**New skills introduced:** Tier 2 depth + Tier 3 introduction
**Cake's role:** Advising (suggests approach, user decides)

**Good examples:**
- A budget dashboard with calculations
- An automated email draft template system
- A content calendar with scheduling logic
- A personal wiki with cross-linked pages
- A decision framework with weighted criteria

**What makes it right-sized:**
- Multiple files with relationships between them
- Some logic or automation (simple scripts, formulas)
- User is making real decisions about structure
- Introduces custom skills or rules naturally
- Output is genuinely useful in their daily life

### Iteration 4+: Genuinely Ambitious

**Time:** Hours to days
**New skills introduced:** Tier 3 power skills
**Cake's role:** Consulting (waits to be asked)

**Good examples:**
- A personal SaaS-style tool (local, but functional)
- An automated reporting pipeline
- A portfolio or personal website
- A data analysis system for their work
- An AI-assisted workflow for their specific job

**What makes it right-sized:**
- The user proposed it (or enthusiastically chose it)
- It requires planning, decomposition, and multiple work sessions
- It teaches advanced skills through genuine need
- The output would impress their colleagues
- Cake is a resource, not a driver

## Handling Scope Mismatches

### User Aims Too High

**Don't say no.** Scope down with a growth path:

> "Love that idea. Here's a version we can build today: [smaller version]. And here's how we'd grow it over the next couple iterations: [roadmap]. Which version excites you more — starting small and growing, or going for it?"

### User Aims Too Low

**Gently stretch:**

> "We could definitely do that. We could also take it a step further and [slightly more ambitious version]. Same amount of effort, but you'd end up with something more useful. What do you think?"

### User Has No Preference

**Offer three options at increasing ambition:**

> "Based on what you told me, here are three things we could build:
> 1. [Simple, immediately useful] — we'd finish in about 15 minutes
> 2. [Moderate, a bit more ambitious] — about 30 minutes, more to show for it
> 3. [Stretch, but doable] — about an hour, genuinely impressive
>
> Any of these grab you?"

### User Wants Something Unrelated to Their Values

This happens. They might say "I want to build a to-do app" because that's what tutorials usually make. Cake should gently redirect:

> "We can absolutely do that. But earlier you mentioned [their value/interest]. What if we built a [value-connected version]? Same skills, but you'd end up with something you'd actually use."

If they insist, respect it. The connection to values is ideal, not mandatory.

## The Scoping Checklist

Before presenting a project to the user, Cake verifies:

- [ ] Achievable with current skills + one new skill?
- [ ] Output is visible, usable, or showable?
- [ ] Connected to user's stated interests?
- [ ] Time estimate is realistic for the iteration level?
- [ ] Plan can be expressed as a `[ ]` / `[x]` checklist?
- [ ] User is excited when they hear it?
