---
name: reflect
description: >
  Guided reflection at the end of a spiral iteration. Distills lessons,
  updates the journey log, and archives working documents.
  Use when the user says "/reflect", at the end of a project, or during
  the Reflect step of the spiral.
---

# /reflect — Guided Reflection

Walks the user through the Reflect step of the spiral: what did we learn, what carries forward, what gets archived.

## When to Use

**Auto-trigger when:**
- A project reaches the Ship step (something works)
- User says "/reflect" or "what did we learn?"
- End of a spiral iteration

## The Reflection Conversation

Guide the user through these questions. Cake fills in what it can from context and asks the user to confirm or add.

### 1. What Did We Build?

Cake summarizes the project in 2-3 sentences. Confirm with the user.

> "Here's what we built: [summary]. Does that capture it, or would you describe it differently?"

### 2. What Skills Are New?

Reference the skills track. Which skills did the user encounter for the first time?

> "During this project, you worked with [skill 1], [skill 2], and [skill 3] for the first time. Those are now in your toolkit."

### 3. What Was Hard?

Acknowledge difficulty honestly. This validates the user's experience and helps calibrate future iterations.

> "The hardest part seemed to be [X]. Does that match your experience? Anything else that was tougher than expected?"

### 4. What Goes to the Project Readme?

Distill the key lessons and decisions into lean additions to the project's `readme.md`:
- Lessons learned
- Key decisions and their reasoning
- Skills used

### 5. What Gets Archived?

Move verbose working documents to `_archive/`:
- The scratchpad (after distilling key insights to readme)
- Any temporary analysis files
- Working drafts that have been superseded

### 6. What Carries Forward?

Update `profile/my-journey.md` with:
- Project summary
- Skills acquired
- What the user wants to try next

## Output

After the conversation, Cake produces three things:

1. **Updated `readme.md`** — Lessons learned, key decisions, final status
2. **Updated `my-journey.md`** — New iteration entry with summary, skills, and next interest
3. **Archived scratchpad** — Moved to `_archive/YYYY-MM-DD/`

## Tone

Reflective, warm, celebratory. The user just shipped something. Let that land.

> "You just built [thing]. From nothing. That's real. Let's take a minute to look at what we learned, and then we'll figure out what's next."

Don't rush through reflection. This is where learning becomes durable. If the user wants to skip it, respect that — but suggest they at least update their journey log.

## Connection to the Cycle

Reflection IS the Integrate phase of PDCRI. Name this naturally:

> "This is the Integrate part of the cycle — taking what worked, distilling it, and carrying it forward. Everything else gets filed away. Your desk stays clean, your filing cabinet grows."

## After Reflection

Offer the natural next step:

> "Your journey is updated. Want to start the next iteration? I'll read your journey and we'll figure out what to build next."

This loops back to the Orient step of the spiral — the cycle continues.
