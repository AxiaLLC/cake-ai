---
name: skills-track
type: checklist
version: 1.0
description: >
  The three tiers of IDE literacy skills, taught in context as the user's project demands them.
  Cake references this to decide what to introduce and when.
---

# Skills Track: IDE Literacy

These skills are taught in context, not in lessons. The project demands the skill, Cake introduces it. This checklist helps Cake know what the user has and hasn't been exposed to.

The user never sees this list as a "curriculum." They experience it as Cake naturally explaining things as they come up.

## Tier 1: Survival

Introduced during Iteration 1. The bare minimum to function.

- [ ] **The AI can be wrong** — And will be confident about it. The user's job is to check.
- [ ] **Where to talk to the AI** — The chat panel. How to open it. How to type in it.
- [ ] **How to talk to the AI** — Be specific. Give context. One thing at a time. "Ask me questions first."
- [ ] **The power move** — "Ask me questions so you can clarify my goals" → Plan → Do. Context generation as a skill.
- [ ] **The AI has limits** — Context fades over long conversations. Stateless between sessions. Eager to please.
- [ ] **Security basics** — External content can contain hidden instructions. The scanner catches these.
- [ ] **How to read the AI's response** — It writes in Markdown. `#` = heading. `-` = list. That's most of it.
- [ ] **How to approve/reject AI actions** — Tool call permissions. What "allow" and "deny" mean.
- [ ] **How to STOP the AI** — The emergency brake. Where it is. When to use it.
- [ ] **What files are and where to see them** — The file explorer. Files vs. folders. Where things live.
- [ ] **How to copy and paste** — Sounds basic. For some users, this is in the IDE context specifically.
- [ ] **What the terminal is** — The text-based command window. What it's for. How to find it.
- [ ] **How to read an error** — Find the error message, paste it to the AI. That's the whole skill.

## Tier 2: Competence

Introduced during Iteration 2. The user can now do real work.

- [ ] **How to give good context** — Reference files, @ mentions, dragging files into chat.
- [ ] **What tool calls actually are** — Demystify: the AI is asking to do something, you're approving it.
- [ ] **How to read a diff** — Green = added. Red = removed. That's the core.
- [ ] **Folder structure and organization** — Why structure matters. The project folder pattern.
- [ ] **Managing conversation length** — When to start fresh. How to use session-handoff.
- [ ] **Using Markdown** — Beyond reading: writing headers, lists, bold, links.
- [ ] **Searching your workspace** — Find in files. Find by filename. Why this matters.
- [ ] **Checkpoints and undo** — The `/checkpoint` skill. Git basics if opted in.
- [ ] **Using `/explain`** — Ask the AI to explain anything in plain language.

## Tier 3: Power

Introduced during Iteration 3+. The user is becoming independent.

- [ ] **Creating custom skills** — The `/skill-builder` skill. YAML frontmatter + markdown body.
- [ ] **Building multi-step workflows** — Chaining skills and tools together.
- [ ] **Rules files and project-level instructions** — How to give the AI standing orders.
- [ ] **Multiple models and providers** — What models are, how they differ, when to use which.
- [ ] **Token usage and cost awareness** — What tokens are, why they matter, how to be efficient.
- [ ] **MCP and external tool integration** — Connecting the AI to external services.
- [ ] **Workspace migration** — Moving to a new machine, sharing your setup.
- [ ] **Managing multiple projects** — Switching between contexts, keeping things organized.
- [ ] **Systematic debugging with `/hypo`** — The full hypothesis-driven debugging workflow.
- [ ] **Teaching someone else** — The ultimate test of understanding. If you can explain it, you know it.

## How Cake Uses This

Cake does NOT walk through this list with the user. Instead:

1. When a project step requires a skill the user hasn't seen, Cake introduces it naturally
2. After introduction, Cake mentally checks it off
3. In the Reflect step, Cake can mention: "You learned about diffs today — that's a Tier 2 skill"
4. Over time, the user's `my-journey.md` tracks which skills they've acquired

## Skill Introduction Pattern

When Cake introduces a new skill:

1. **Name it** — "This is called a diff"
2. **Show it** — Point to the actual thing on screen
3. **Explain it in one sentence** — "Green lines are new. Red lines are removed."
4. **Use it immediately** — Apply it to whatever they're working on
5. **Move on** — Don't belabor. They'll see it again.
