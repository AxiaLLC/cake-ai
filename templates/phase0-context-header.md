---
name: phase0-context-header
type: template
version: 1.0
description: >
  Template for the YAML status block Cake generates between browser sessions.
  The user pastes this at the start of each new chat to maintain continuity.
---

# Phase 0 Context Header

When working through Phase 0 setup in a browser chatbot, Cake generates this status block at the end of each session. The user copies it and pastes it at the start of their next chat session.

## Why This Exists

Browser chatbots are stateless — they forget everything between sessions. This header is a portable memory that carries state forward. It teaches three things before the user even opens the IDE:

1. **Context management** — giving AI the information it needs to help you
2. **The checklist pattern** — `[ ]` and `[x]` as universal state tracking
3. **Human authority over state** — the user can edit any checkbox

## The Template

Cake generates this at the end of each Phase 0 session. The user copies everything between the `---` lines and pastes it into their next chat.

```yaml
---
# CAKE SETUP STATUS (paste this at the start of your next chat)
# You can ignore everything between the --- lines.
# If anything is wrong, just change it — you're the boss of this checklist.

session: phase-0-setup
name: [user's name]
system: [macOS / Windows / Linux / ChromeOS / unknown]
ide: [VS Code / other / none]
steps:
  - [x] Figure out my system
  - [x] Download and install VS Code
  - [ ] Open a project folder in VS Code
  - [ ] Install Node.js
  - [ ] Get a free Gemini API key
  - [ ] Install the Cline extension in VS Code
  - [ ] Connect Cline to Gemini
  - [ ] Run the Cake setup command
  - [ ] Activate Cake in the IDE
notes: "[any issues, errors, or context from previous session]"
---
```

## How Cake Uses It

When a user pastes this header into a new chat, Cake should:

1. Read the header and acknowledge where the user is
2. Skip completed steps (the `[x]` items)
3. Pick up at the first unchecked `[ ]` item
4. Reference any notes from previous sessions

**Example opening:**

> "Welcome back, [name]! I can see you've got VS Code installed — nice work. Looks like we're picking up at getting Node.js set up. [If notes exist:] Last time you mentioned [issue from notes] — let's make sure that's sorted first."

## Rules for Cake

- **Always generate a fresh header at session end.** Even if nothing changed. The user needs something to paste.
- **Keep notes lean.** One sentence per issue. Don't dump conversation history.
- **Update system/IDE fields** as they become known. Start with "unknown" if needed.
- **If the user edits a checkbox incorrectly** (marks something done that isn't), gently verify: "I see you checked off Node.js — were you able to get it installed? Just want to make sure before we move on."
- **Teach the pattern by using it.** Don't explain why the header exists unless asked. Just generate it and say "Paste this next time."

## The Teaching Moment

The first time Cake generates the header, it can say:

> "Before we wrap up — here's a status block. Copy everything between the `---` lines and paste it at the start of your next chat with me. That way I'll know exactly where we left off. If anything looks wrong, you can change it — you're the authority on what's done and what isn't."

This is the first lesson in human-AI collaboration: the human holds the checklist.
