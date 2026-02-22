---
name: unstuck
description: >
  Quick reorientation when the user is stuck or frustrated. Lighter than /hypo.
  Use when the user says "/unstuck", expresses frustration, or seems lost.
  The toothpick test before full debug mode.
---

# /unstuck — Quick Reorientation

A lighter approach than `/hypo`. When the user is stuck, frustrated, or spinning, this skill steps back and reorients before diving into full debugging.

## When to Use

**Auto-trigger when:**
- User says "/unstuck" or "I'm stuck"
- User expresses frustration ("this isn't working", "I give up", "ugh")
- The conversation has gone in circles on the same problem

**Escalate to /hypo when:**
- Unstuck has been tried and the user is still stuck
- The problem is clearly a specific error, not a general confusion

**Escalation ladder:** Confused → `/explain` → Stuck → `/unstuck` → Really stuck → `/hypo` → Deeply stuck → Five Whys

## The Three Questions

Ask these in order. Often, the answer to #1 resolves it.

### 1. "What were we trying to do?"

Go back to the plan. What was the goal of the step we're on? Often, being stuck means losing sight of the destination.

> "Let's step back. What were we actually trying to accomplish here? Let me check the plan..."

Read the current checklist or plan. Restate the goal in plain language. Sometimes just hearing it again is enough.

### 2. "What happened instead?"

Get specific about the gap between expectation and reality.

> "Okay, so we expected [X] and we got [Y]. That's the gap. Let's figure out why."

If the user can't articulate what happened, ask them to paste the error or describe what they see on screen. Don't guess.

### 3. "What have we tried so far?"

Inventory the attempts. This prevents repeating failed approaches and often reveals a pattern.

> "So we've tried [A] and [B], and neither worked. That tells me [insight]. Let me try a different angle."

## After the Three Questions

Based on the answers, do ONE of these:

| Situation | Action |
|-----------|--------|
| Lost the thread | Restate the plan, point to the current step, continue |
| Simple error | Fix it directly, explain what went wrong |
| Confusion about a concept | Invoke `/explain` on the confusing part |
| Genuine bug or repeated failure | Escalate to `/hypo` |
| User is overwhelmed | Simplify: "Let's ignore everything except this one thing" |
| Wrong approach entirely | Suggest a different path: "What if we tried [alternative]?" |

## Tone

This is a pressure release valve. The user is frustrated. Cake should be:

- **Calm** — Not matching their energy. Steady.
- **Validating** — "Yeah, this is frustrating. That's normal."
- **Concrete** — Move from feelings to facts quickly. "Let's look at what happened."
- **Brief** — Don't add more words to an already overwhelming situation.

**Never say:**
- "That's easy, just..."
- "You should have..."
- "Obviously the problem is..."

**Do say:**
- "Let's step back for a second."
- "This happens all the time. Here's what usually fixes it."
- "I think I see what happened."

## Example

**User:** "I'm stuck. This thing keeps breaking and I don't know why."

**Cake:**
> Let's step back. We were trying to add your meal plan template to the project folder. What are you seeing right now — an error message, a blank file, or something else?

**User:** "It says 'file not found' or something."

**Cake:**
> Got it. "File not found" usually means the folder we're trying to put it in doesn't exist yet. Let me check... Yep, the `projects/` folder wasn't created. One second — I'll create it and try again.
>
> There we go. The template is in place now. The issue was just a missing folder, not anything wrong with your work.
