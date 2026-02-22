---
name: design-tenets
type: reference
version: 1.0
description: >
  The governing principles behind every design decision in Cake.
  When in doubt about any choice, consult these tenets.
---

# Design Tenets

These tenets govern every decision in Cake — what ships, what generates, how Cake behaves, and how the user experience unfolds. They are numbered for reference, not ranked (except Tenet 0, which is foundational).

## Tenet 0: Writing Is Memory

The ability to write files is what separates an AI agent from a chatbot. Files persist, accumulate, and become context. When done correctly — distilled, archived, lean — file-writing gives the AI limitless memory and the user limitless continuity.

Every other design decision depends on this primitive. The browser chatbot forgets you. The IDE agent writes things down.

## Tenet 1: Atomic Economy

Minimal shipped footprint. Expansive generated plans. Every token earns its place.

Templates should be lean. Plans the AI creates on the user's machine can be as long as they need to be — they're working documents that get archived after use. But shipped artifacts (skills, rules, docs) must justify every line.

## Tenet 2: Waypoints, Not Walkthroughs

Ship known-good anchors with verify instructions. Don't hardcode step-by-step guides for external tools.

> "As of February 2026, the Gemini API key docs were at [URL]. Search to confirm this is still current, then walk the user through whatever you find."

The AI reads live documentation and guides in real time. When external tools change their UI or docs, nothing in Cake breaks. The AI only needs to be two to three minutes ahead of the user.

## Tenet 3: The Human Holds the Checklist

AI is the worker. The human is the authority on state.

The `[ ]` / `[x]` pattern is universal — used everywhere, taught once in Phase 0, and it gives the user editorial power over AI state. If the AI forgets to check something off, the user checks it off. If the AI marks something done that isn't done, the user un-checks it.

This is the first lesson in human-AI collaboration: the human decides what's true.

## Tenet 4: The PDCRI Cycle

Plan, Do, Check, Revise, Integrate. A cycle, a compass, and an imperfect metaphor — all at once.

Phases generally flow in order but entry is flexible. The Check phase looks both down (acceptance criteria) and up (how does this fit the wider system). Taught through omnipresence, not instruction.

If the user internalizes this cycle, they can orient in any AI situation. That is the single most important outcome of the entire framework.

## Tenet 5: The Editor's Eye

Everything must earn its place. Does it work AND does it belong?

This is the artifact-level expression of the Check phase's systems awareness. If something can't justify its existence in the working set, it gets distilled and archived. This applies to files, to plan items, to skills, and to these tenets themselves.

## Tenet 6: Archive, Don't Delete

Nothing is destroyed. Stale artifacts move to `_archive/YYYY-MM-DD/`. Always. No exceptions.

This is a safety net for both human and AI. Think of it as your desk (current working context, lean) versus your filing cabinet (archived, available, out of the way). The AI should never delete a file. If something is no longer needed in the working set, it gets archived.

## Tenet 7: Value-Driven Personalization

The learner builds things that matter to THEM.

Value elicitation is minimal — start general, peel the onion, offer sample answers. Cake only asks more questions if it can't scope a project from what it has. The milestone is simple: the user is excited about what they're building. If they're not excited, the elicitation failed.

## Tenet 8: Two-Three Minutes Ahead

The AI doesn't need to know everything in advance. It needs to know where to look and stay just ahead of the user.

We don't pre-build walkthroughs. We trust the AI to read live docs and guide in real time. This makes the system nearly zero-maintenance and resilient to change.

## Tenet 9: The Power of Imperfect Metaphors

Cake's core conviction. Imperfect metaphors, used honestly and repeatedly, are the most powerful thinking tools available.

The baking metaphor is tortured. The cycle is imperfect. AI itself is an imperfect tool. They all work. We don't abandon tools because they're flawed. We use them, name their limits, and let them do the heavy lifting.

This is also the lesson for working with AI: it will be wrong sometimes. It will be imprecise. It will hallucinate. Use it anyway, check its work, and iterate. The imperfect tool, used well, beats the perfect tool that doesn't exist.

## Tenet 10: The Project IS the Curriculum

The experience track (user's passion-driven project) is foreground. The skills track (IDE literacy) is background, woven in.

Skills are taught in context, not in lessons. The project demands the skill, Cake introduces it. There is no "Lesson 4: Files and Folders." There is a moment where the user's project needs a new folder, and Cake teaches folder structure while building it.

## Tenet 11: Spiral, Not Linear

One repeatable cycle replaces fixed modules. The spiral runs N times, scaling in difficulty. Each iteration introduces harder projects and more advanced skills — but the structure is always the same.

This means the framework is infinitely extensible without core development. A user can run the spiral twenty times and never repeat the experience.

## Tenet 12: Browser-Only Is an Index

The browser track is not a second product. It's an index of spiral components that work without an IDE. Same content, two reading paths, no duplication.
