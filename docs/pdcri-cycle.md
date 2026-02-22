---
name: pdcri-cycle
type: reference
version: 1.0
description: >
  The Plan-Do-Check-Revise-Integrate cycle. Core mental model for all work in Cake.
  Reference this file whenever the user or AI needs to orient within the cycle.
---

# The PDCRI Cycle

**Plan → Do → Check → Revise → Integrate**

A cycle for working with AI — and for working in general. It's a cycle like PDCA (Plan-Do-Check-Act) is a cycle: the phases generally flow in order, but entry is flexible and mastery means knowing when to skip, loop, or enter mid-stream.

It's also a compass. When you're lost, ask: "Where am I in the cycle?" That question alone reorients you.

## The Five Phases

### Plan

Give context. Set goals. Choose or create tools.

Planning isn't just thinking about what to do — it's laying the groundwork. That includes deciding HOW you'll work, not just WHAT you'll work on. Sometimes planning means building the document structure before writing. Sometimes it means choosing the right skill or rule for the job.

**In baking terms:** Read the recipe. Check your ingredients. Pick the right pans.

**Key actions:**
- Define what success looks like
- Provide context the AI needs (reference files, goals, constraints)
- Create or select tools (project folder, checklist, skills)
- Decompose large goals into workable steps
- Get the AI's questions — "Ask me questions so you can clarify my goals"

**The "Ask Me Questions" move:** Before doing anything, ask the AI to ask YOU questions. This creates AI-generated context that improves everything downstream. It's also secretly starting with Integrate — you're giving the AI prior knowledge to build on. The cycle has no fixed starting point.

### Do

Execute step by step. Decompose. Recurse.

Do doesn't mean "do everything at once." It means work the plan one step at a time. When a step is itself complex, decompose it — run a sub-cycle of PDCRI on that step. Plans can be summarized and archived when the sub-cycle completes.

**In baking terms:** Mix, pour, bake. One step at a time. If the recipe says "make the frosting," that's its own mini-recipe.

**Key actions:**
- Execute the plan step by step
- When a step is big, decompose it (create sub-plan, run sub-cycle)
- Sub-cycles can generate extensive working documents — that's fine, they're temporary
- Distill insights from sub-cycles and archive the verbose artifacts
- Stay focused on the current step, not the whole plan

### Check

Review against goals. Survey the wider system. Apply the Editor's Eye.

Check is two things simultaneously:

1. **Looking DOWN:** Does this meet the acceptance criteria? Did we achieve what we set out to do?
2. **Looking UP:** How does this fit the wider system? What came before? What comes next? Does this earn its place in the scope?

The "Editor's Eye" is the discipline of asking not just "does it work?" but "does it belong?" An artifact that works perfectly but doesn't serve the larger goal is clutter.

**In baking terms:** The toothpick test (is it done?) PLUS surveying the whole kitchen (is this the right cake for the party?).

**Key actions:**
- Compare output against the plan's success criteria
- Pick your head up — how does this fit the bigger picture?
- Ask: "Does this earn its place?"
- Look for things that work but don't belong (scope creep, over-engineering)
- Look for things that are missing (gaps the plan didn't anticipate)

### Revise

Fix issues. Update the plan. Upgrade at four levels.

Revise handles everything from fixing a typo to rethinking the whole approach. The key insight is that revision operates at four levels, and you should think about which level you're at:

| Level | Question | Example |
|-------|----------|---------|
| **Task** | Is this specific thing wrong? | "This function has a bug" |
| **Plan** | Is the plan itself flawed? | "We're building the wrong feature first" |
| **Workspace** | Do our tools or structure need updating? | "We need a new skill for this pattern" |
| **Agent** | Do our rules or instructions need changing? | "The AI keeps making this mistake — add a rule" |

Most revisions are at the task level. The powerful ones are at workspace and agent level — that's where you improve the system itself, not just the output.

**In baking terms:** "5 more minutes" (task). "Less sugar next time" (plan). "Buy a better whisk" (workspace). "Update the recipe card" (agent).

**Key actions:**
- Fix the immediate issue
- Ask: is this a task problem or a plan problem?
- Update the plan if the plan was wrong
- Consider: should this become a skill, rule, or structural change?
- If stuck, escalate: `/unstuck` → `/hypo` → Five Whys

### Integrate

Distill insights. Archive verbose artifacts. Carry forward only what earns its place.

Integrate is where learning becomes durable. The goal is NOT to keep everything — it's to keep the right things and archive the rest. Think of it as the difference between your desk (working context, lean, current) and your filing cabinet (archived, available if needed, out of the way).

**In baking terms:** Plate the cake. Clean the kitchen. Update the recipe card with what you learned.

**Key actions:**
- What did we learn? (Update `my-journey.md`, project readme)
- What tools or skills were useful? (Keep, refine, or build new ones)
- What's verbose and temporary? (Archive to `_archive/`)
- What's lean and permanent? (Distill into project readme or skills)
- What carries forward to the next cycle?

**The "Archive, Don't Delete" rule:** Nothing gets destroyed. Stale artifacts move to `_archive/YYYY-MM-DD/`. This is a safety net for both human and AI. If you need it later, it's there. If you don't, it's out of the way.

## How the Cycle Flows

```
        ┌──────────┐
        │   PLAN   │ ← Enter here when starting fresh
        └────┬─────┘
             │
        ┌────▼─────┐
        │    DO    │ ← Enter here when the plan exists
        └────┬─────┘
             │
        ┌────▼─────┐
        │  CHECK   │ ← Enter here when reviewing
        └────┬─────┘
             │
        ┌────▼─────┐
        │  REVISE  │ ← Enter here when something broke
        └────┬─────┘
             │
        ┌────▼─────┐
        │INTEGRATE │ ← Enter here when wrapping up
        └────┬─────┘
             │
             └──────── → Next cycle (or sub-cycle)
```

**No fixed starting point.** A broken build starts at Revise. A retrospective starts at Integrate. "Ask me questions first" starts at Integrate (giving context) before looping to Plan. Enter wherever the moment demands.

**Phases are fluid.** You don't need a separate tool call for each phase. The cycle is a mental model, not a rigid procedure. Mastery means embodying the spirit of it, not mechanically stepping through it.

**Sub-cycles are normal.** A single "Do" step might require its own Plan-Do-Check-Revise-Integrate. That's recursion, not failure.

## The Execution Compass

The PDCRI cycle is both a cycle (phases generally proceed in order) and a compass (you can orient from any direction). Cake calls it "The Execution Compass" — an imperfect metaphor for an imperfect tool that works anyway.

When lost, ask: **"Where am I in the cycle?"**

- If you don't know what to do → you're in **Plan**
- If you know what to do but haven't done it → you're in **Do**
- If you've done it but aren't sure it's right → you're in **Check**
- If it's wrong → you're in **Revise**
- If it's done and you need to carry forward → you're in **Integrate**

That question, asked repeatedly, keeps any project moving.
