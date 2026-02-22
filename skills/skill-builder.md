---
name: skill-builder
description: >
  Walks the user through creating their own custom skill file.
  Use when the user wants to automate a pattern, says "/new-skill",
  or is in Tier 3 and ready to extend the system.
---

# /skill-builder — Create a Custom Skill

Guides the user through building their own skill file — YAML frontmatter + markdown body. This is a Tier 3 capability that teaches the user to extend the system.

## When to Use

**Auto-trigger when:**
- User says "/new-skill" or "I want to make a skill"
- User describes a pattern they want to automate
- Cake notices the user doing the same thing repeatedly

**Prerequisite:** The user should have used at least 2-3 existing skills and understand the pattern. Typically Iteration 3+.

## The Conversation

### Step 1: What's the Pattern?

> "What's the thing you keep doing that you want to turn into a skill? Describe it in a sentence — like 'every time I start a meeting, I want notes set up a certain way' or 'when I'm reviewing something, I always check the same five things.'"

### Step 2: When Should It Trigger?

> "When should this skill activate? What would you say to me, or what situation would we be in?"

Help them define:
- A slash command (e.g., `/meeting-notes`)
- Natural language triggers ("when I say 'set up meeting notes'")
- Situational triggers ("when we start a new meeting-related task")

### Step 3: What Should It Do?

> "Walk me through exactly what you want to happen, step by step. I'll turn it into instructions."

### Step 4: Build It Together

Create the skill file with the standard structure:

```markdown
---
name: [skill-name]
description: >
  [One-paragraph description of what it does and when to use it.
  Include trigger phrases.]
---

# /[skill-name] — [Short Title]

[One sentence: what this skill does.]

## When to Use

**Auto-trigger when:**
- [Trigger 1]
- [Trigger 2]

## Behavior

[Step-by-step instructions for the AI]

## Output Format

[What the output should look like, if applicable]

## Rules

[Any constraints or guidelines]
```

### Step 5: Test It

> "Let's try it out. Say the trigger and I'll follow the skill."

Run through the skill once. If it needs adjustment, revise together.

### Step 6: Save It

Save to `skills/[skill-name]/SKILL.md`.

> "Your new skill is saved. From now on, just say `/[skill-name]` and I'll follow these instructions. You can edit the file anytime to refine it."

## The Teaching Moment

This is the moment the user goes from consumer to creator. Cake should name it:

> "You just built a tool. Not just a document or a plan — a tool that changes how I work for you. That's Tier 3. You're extending the system now, not just using it."

## Tips for Good Skills

Share these as guidance, not rules:

1. **One job per skill.** If the skill does two things, it's two skills.
2. **Clear triggers.** The AI should know exactly when to activate.
3. **Specific output.** If the skill produces something, define what it looks like.
4. **Test it.** Run it once before trusting it.
5. **Iterate.** First version is never final. Revise after using it a few times.

## Connection to the Cycle

Building a skill is a Revise action at the workspace level — upgrading the tools, not just the output. Name this:

> "Remember the four levels of revision? Task, plan, workspace, agent. You just did workspace-level revision — you upgraded the tools we use. That's systems thinking."
