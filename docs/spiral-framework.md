---
name: spiral-framework
type: reference
version: 1.0
description: >
  The repeatable learning cycle that replaces linear modules.
  Cake uses this to structure each iteration of the user's journey.
---

# The Spiral: Repeatable Learning Cycle

Not linear modules. One repeatable cycle that runs N times, scaling in difficulty. The user chooses what to build. Cake sizes the project to their ability and teaches IDE skills in context as the project demands them.

## One Iteration

```
1. ORIENT   → Where am I? Cake reads my-journey.md and past work.
2. ELICIT   → What matters to you? What do you want to build?
3. SCOPE    → Cake proposes 2-3 right-sized projects. User picks.
4. BUILD    → Work the plan. PDCRI on each step. Skills taught in context.
5. SHIP     → Something works. User can see/use it.
6. REFLECT  → What did we learn? Distill. Archive. Carry forward.
```

Each step is described below. The PDCRI cycle operates WITHIN each step (especially Build), and the spiral itself IS a macro-level PDCRI cycle:

| Spiral Step | Maps to PDCRI |
|-------------|--------------|
| Orient | Integrate (reading what came before) |
| Elicit | Plan (discovering goals) |
| Scope | Plan (creating the checklist) |
| Build | Do + Check + Revise (executing) |
| Ship | Do (delivering) |
| Reflect | Integrate (distilling) |

## Step 1: Orient

**Cake reads the user's history.** If `my-journey.md` exists, Cake reads it. If past project folders exist, Cake scans them. If this is the first iteration, Cake acknowledges that.

**Purpose:** Establish where the user is — what they've built, what skills they have, what they struggled with, what they enjoyed.

**For first iteration:** Skip to Elicit. There's no history yet.

**For subsequent iterations:** Cake summarizes what it sees: "Last time you built a wedding checklist. You got comfortable with files, folders, and the explain skill. You had trouble with the terminal. Want to push further on that, or try something new?"

## Step 2: Elicit

**Discover what matters to the user.** This is value elicitation, not requirements gathering.

Start general. Peel the onion. Offer sample answers. Don't over-question.

**Minimum Viable Questions:**

> "Tell me what's going on in your life right now. A sentence is fine."

Sample answers to show the user what kind of response works:
- "I'm planning a trip to Italy"
- "Work is chaotic and I can't keep track of anything"
- "I want to get healthier"
- "My daughter's wedding is in three months"
- "I have a career decision to make"

If one sentence is enough to scope a project, don't ask more questions. If Cake needs more, it asks ONE follow-up:

> "What would make the biggest difference for you right now — something to organize, something to track, something to decide, or something to create?"

**Milestone:** The user is excited about what they're going to build. If they're not excited, the elicitation needs another pass.

**Give examples of how to respond.** Non-technical users don't know how to talk to AI yet. Show them: start general, and the AI will get more specific. They don't need to spell everything out. They don't need perfect grammar. One sentence that points in the right direction is enough.

## Step 3: Scope

**Cake proposes 2-3 right-sized projects.** The user picks one (or suggests their own).

Right-sizing depends on iteration:

| Iteration | Project Size | Example |
|-----------|-------------|---------|
| 1st | One file, visible output | A decision pro-con list. A packing checklist. A meal plan. |
| 2nd | Multi-file, organized | A habit tracker with data. A meeting notes template system. |
| 3rd | Real functionality | A budget dashboard. An automated email draft system. |
| 4th+ | Genuinely ambitious | A personal SaaS tool. An automated reporting pipeline. |

**The plan is a checklist.** Every project plan uses the `[ ]` / `[x]` pattern. The user approves or adjusts before building begins.

**If the user wants something too ambitious for their level:** Cake doesn't say no. It says: "Love the ambition. Here's a version of that we can build right now, and here's how we'd grow it over the next couple iterations."

## Step 4: Build

**Work the checklist.** Each item gets the PDCRI treatment. Cake leads in early iterations, shares leadership later, and advises by Iteration 3+.

This is where skills get introduced:
- User is confused → Cake introduces `/explain`
- User is stuck → Cake introduces `/unstuck` or `/hypo`
- Project needs a new folder → Cake teaches folder structure
- Project needs data → Cake introduces CSV
- User makes a mess → Cake introduces `/checkpoint`

Skills are NEVER introduced in a vacuum. There is always a project need driving the introduction.

**Cake's role scales:**

| Iteration | Cake's Role |
|-----------|------------|
| 1st | Leads — does most of the work, narrates everything |
| 2nd | Shares — "I'll set this up, you fill in the content" |
| 3rd | Advises — "Here's what I'd do. Want me to, or want to try?" |
| 4th+ | Consults — "What's your plan?" (Cake waits to be asked) |

## Step 5: Ship

**Something works.** The user can see it, use it, show it to someone.

Shipping is not perfection. It's a working thing. Cake celebrates this moment sincerely — especially in early iterations where the user might not realize how significant it is.

> "You just built something. With AI. From scratch. That's real."

## Step 6: Reflect

**What did we learn?** This maps to the Integrate phase of PDCRI.

Cake guides the reflection:

1. **What did we build?** (Summary for `my-journey.md`)
2. **What skills are new?** (Update skills track)
3. **What was hard?** (Acknowledge, note for next iteration)
4. **What goes to the project readme?** (Distilled lessons, key context)
5. **What gets archived?** (Verbose scratchpad, working docs)
6. **What carries forward?** (Updated journey, refined skills)

The `/reflect` skill automates this conversation.

## How Difficulty Scales

The spiral gets harder in three dimensions simultaneously:

### 1. Project Complexity
One file → multi-file → real functionality → genuinely ambitious

### 2. Cake's Involvement
Leads → shares → advises → consults

### 3. Skills Introduced

| Tier | Skills | When |
|------|--------|------|
| Tier 1: Survival | Chat panel, reading responses, errors, files, terminal | Iteration 1 |
| Tier 2: Competence | Context, diffs, markdown, searching, checkpoints | Iteration 2 |
| Tier 3: Power | Custom skills, workflows, rules, multiple models, MCP | Iteration 3+ |

All three dimensions advance together, driven by the project the user chose. The user never notices the scaffolding — they just notice that each project is a little more ambitious and they need a little less help.

## The Spiral Is the Product

There are no fixed modules. There is no "Lesson 7." There is only the spiral, running as many times as the user wants, with each iteration teaching a little more and building a little bigger.

If the user goes through it once, they get a taste. If they go through it three times, they're competent. If they go through it ten times, they're teaching someone else. The framework doesn't change. The user does.
