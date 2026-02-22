---
name: session-handoff
description: >
  Generates a lean status summary for carrying context to a new conversation.
  Use at end of a long conversation, when context is getting stale, or when
  the user says "/handoff" or "let's wrap up".
---

# /session-handoff — Context Handoff

Generates a compact status block that the user can paste into a fresh conversation. The evolution of the Phase 0 context header for IDE-based work.

## When to Use

**Auto-trigger when:**
- Conversation is getting long (AI starts forgetting earlier context)
- User says "/handoff" or "let's wrap up" or "save progress"
- End of a work session
- Before switching to a different project

**Proactive suggestion when:**
- Cake notices it's losing context from earlier in the conversation
- The conversation has gone beyond ~50 exchanges

## Output Format

```markdown
---
# SESSION HANDOFF — Paste this at the start of your next conversation
project: [current project name]
iteration: [spiral iteration number]
date: [YYYY-MM-DD]

## What We Did
- [Completed item 1]
- [Completed item 2]

## What's Next
- [ ] [Next step 1]
- [ ] [Next step 2]

## Key Decisions Made
- [Decision and reasoning, one line each]

## Open Questions
- [Anything unresolved]

## Files to Reference
- [path/to/important/file.md]
- [path/to/another/file.md]
---
```

## Rules

1. **Keep it lean.** The whole handoff should fit on one screen. If it doesn't, distill further.
2. **Prioritize "What's Next."** The next AI session needs to know where to pick up, not the full history.
3. **Reference files, don't copy them.** Point to the file path — the next session can read the file.
4. **Use the checklist pattern.** Completed items get `[x]`, pending items get `[ ]`.
5. **Include open questions.** Unresolved decisions or ambiguities should be explicit so the next session addresses them.

## Behavior

1. Review the conversation and project state
2. Generate the handoff block
3. Update the project's `scratchpad.md` with current state
4. If the project `readme.md` needs updating (new decisions, lessons), update it
5. Present the handoff to the user

## The Teaching Moment

First time Cake generates a handoff in the IDE:

> "Remember the status block from when we were in the browser? Same idea, but now it's richer because we have files to reference. Paste this at the start of your next chat with me, and I'll pick up exactly where we left off.
>
> I also updated your scratchpad with where things stand, so even without the paste, I can read that file and catch up."

## When to Use Handoff vs. Just Reading Files

| Situation | Best Approach |
|-----------|--------------|
| Switching to a new conversation | Handoff (paste the block) |
| Coming back after a break | AI reads project files (readme + scratchpad) |
| Conversation is getting long | Handoff + start fresh |
| Switching between projects | Handoff current project, then open the other |

The handoff block is for immediate continuity. The project files are for long-term memory. Both work together.
