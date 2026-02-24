---
name: browser-track
type: index
version: 1.0
description: >
  Index of Cake components that work in a browser-only environment.
  Not a separate product — a reading path through the same material.
---

# Browser Track Index

For users who can't or won't install an IDE, these components of Cake still work in a browser chatbot. This is not a separate product — it's a curated path through the same framework.

## What Works in the Browser

| Component | Source Document | Notes |
|-----------|----------------|-------|
| Value elicitation | `docs/value-elicitation.md` | Works identically. Start general, peel the onion. |
| Project scoping (smaller scope) | `docs/project-scoping.md` | Limit to Iteration 1-2 size. No multi-file projects. |
| The checklist pattern | `templates/phase0-context-header.md` | The `[ ]` / `[x]` pattern works everywhere. |
| "Ask me questions" technique | `docs/pdcri-cycle.md` (Plan section) | The power move works in any AI interface. |
| PDCRI as a thinking tool | `docs/pdcri-cycle.md` | The cycle is a mental model, not a software feature. |
| Context management | `templates/phase0-context-header.md` | The context header pattern works in any chat. |
| When AI is wrong | `docs/how-ai-works.md` (Section 1) | Critical knowledge regardless of interface. |
| AI limitations | `docs/how-ai-works.md` (Sections 2-5) | Stateless, eager-to-please, context limits. |
| Security basics | `docs/how-ai-works.md` (Security section) | Prompt injection applies to browser too. |
| Reflect and distill | `docs/spiral-framework.md` (Step 6) | Can be done in a text document or even on paper. |

## What Doesn't Work in the Browser

| Capability | Why Not | Workaround |
|-----------|---------|-----------|
| File creation and management | Browser chatbots can't write to your computer | Copy AI output into local documents manually |
| Running code | No terminal access | Use online tools (Replit, CodePen) if needed |
| Project structure | No file system | Organize in Google Docs/Drive folders |
| Persistent memory | Chatbot is stateless | Use the context header pattern religiously |
| Tool calls | No agent capabilities | User must manually do what the AI suggests |
| Checkpoints | No version control | Manual saves with dates |
| Skills and rules | No file system to store them | Keep prompt templates in a notes app |

## How to Use the Browser Track

### For the User

If you're on this track because you can't install an IDE right now, that's completely fine. You can still learn the core concepts:

1. **Start with the value elicitation** — figure out what you want to work on
2. **Use the PDCRI cycle** — it works in your head, not just in software
3. **Practice the "ask me questions" technique** — it works in any chatbot
4. **Use the context header** between sessions — paste it at the start of each chat
5. **When you're ready for more power** — the IDE track will be here

### For Cake (If Guiding a Browser-Only User)

- Keep projects to single-output scope (one list, one document, one plan)
- Teach the context header early — it's essential for continuity
- Emphasize the thinking skills over the tool skills
- Celebrate what they CAN do, not what they're missing
- Leave the door open: "Whenever you want to level up, the IDE setup takes about 30 minutes"

## The Bridge Back

The browser track is designed to be a ramp, not a dead end. At any point, the user can:

1. Follow the Phase 0 setup instructions from the README
2. Bring everything they've learned (the cycle, the patterns, the context management) into the IDE
3. Pick up the full spiral from wherever they are

Nothing is wasted. The browser track teaches the same mental models. The IDE just gives them more tools to apply those models with.
