---
name: hypo
description: >
  Hypothesis-driven debugging using scientific method. Use when the user is stuck
  on the same error 2+ times, when random trial-and-error starts, or when
  the user says "/hypo" or "hypothesis debugging".
---

# /hypo — Hypothesis-Driven Debugging

Systematic debugging using scientific method: hypothesis → prediction → isolation → validation → fix. When random poking isn't working, this gets methodical.

## When to Use

**Auto-trigger when:**
- Same error appears 2+ times
- User or AI starts random trial-and-error
- User says "/hypo" or "run hypo"

**Escalate to Five Whys when:**
- Hypo fails 2+ times → Run Five Whys → New hypothesis targeting the deepest assumption

**Escalation from:** `/unstuck` (when the lighter approach wasn't enough)

## Output Format

Be concise. Save verbose thinking internally.

```markdown
## Hypothesis Debugging

**Hypothesis**: [One sentence — "X causes Y because Z"]

**Predicted**: [One sentence — "If X, then [test] shows [result]"]

**Test**: [One sentence — what we'll do]

**Result**: [CONFIRMED / REFUTED / PARTIAL]

**Fix**: [One sentence — what changed]

**Validation**: [Confirm the fix worked and nothing else broke]
```

## The 7-Step Process

### 1. Hypothesis (30 sec)

Write a testable hypothesis: **"X causes Y because Z"**

**Good:**
- "The file isn't saving because the folder doesn't exist yet"
- "The API key isn't working because there's an extra space at the end"
- "The template didn't render because the frontmatter has a syntax error on line 3"

**Bad:**
- "Something is broken"
- "It's probably a bug"
- "The computer isn't working"

### 2. Predicted Outcome (30 sec)

State what you expect to see if the hypothesis is correct:

**Format:** "If [hypothesis], then when I [test], I should see [result]"

### 3. Predict Side Effects (1 min)

What might break from the fix? Think ahead:
- What depends on the thing we're changing?
- What assumptions might break?
- Will other files need updating?

### 4. Isolation (2 min)

Create the smallest possible test that confirms or denies the hypothesis:
- Check one thing at a time
- Remove variables
- Compare expected vs. actual

### 5. Validation (30 sec)

Run the test. Compare actual vs. predicted:

- **CONFIRMED** — Matches prediction. Proceed to fix.
- **REFUTED** — Doesn't match. New hypothesis needed (Step 1).
- **PARTIAL** — Some match. Refine hypothesis, re-test.

### 6. Fix

Apply a focused change targeting the root cause:
- Change one thing
- Test immediately
- Document what you did

### 7. Verify No Side Effects

Make sure the fix didn't break something else:
- Check the output
- Review related files
- If using Git, check the diff

## Five Whys (When Hypo Fails 2+ Times)

When two hypotheses have been refuted, go deeper:

1. **Why did the first hypothesis fail?** → [Single clear reason]
2. **Why did that occur?** → [Single clear reason]
3. **Why did that exist?** → [If uncertain, STOP here]
4. **Why was that present?** → [Only if #3 was confident]
5. **Why is that incorrect?** → [Only if #4 was confident]

### Stop Signals

- "Because X or Y or Z..." → **STOP.** Multiple possibilities = new hypothesis time.
- "Because there might be..." → **STOP.** Uncertainty = new hypothesis time.
- "Because it could be..." → **STOP.** Speculation = new hypothesis time.
- "Because [single specific reason]" → **CONTINUE.**

When you stop, take whatever you learned and form a new, more targeted hypothesis. Go back to Step 1.

## For the Non-Technical User

Cake explains this process in real time:

> "Here's what I think is happening: [hypothesis in plain English]. If I'm right, then when we [test], we should see [prediction]. Let me check... [runs test]. Yep, that was it. Here's the fix."

The user doesn't need to learn the 7 steps. They need to see the AI working methodically instead of guessing randomly. That demonstration IS the lesson.

Over time, the user starts thinking this way on their own: "I think it's broken because..." — that's a hypothesis. They're doing it.

## Anti-Patterns

- **Random trial and error** — Changing multiple things at once hoping something works
- **Assumption-based** — "It's probably the AI" without testing
- **Shotgun debugging** — Undoing large amounts of work to "start over"
- **Giving up** — "It doesn't work" without investigating why
