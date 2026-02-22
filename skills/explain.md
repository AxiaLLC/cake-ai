---
name: explain
description: >
  Plain-English explanation of anything the user is looking at or working on.
  Use when the user says "/explain", "I don't understand", "what is this",
  or seems confused about what they're seeing.
---

# /explain — Plain-English Breakdown

Takes whatever the user is working on and explains it in non-technical, step-by-step language. Designed for someone with zero technical knowledge.

## When to Use

**Auto-trigger when:**
- User says "/explain" or "explain this"
- User says "I don't understand" or "what is this?"
- User seems confused or hesitant about current work

**Escalation:** If explain isn't enough and the user is still confused, suggest trying a different angle or breaking the concept down further. If they're stuck on a problem (not just understanding), escalate to `/unstuck`.

## Output Format

Structure every explanation with these four parts:

```markdown
## What You're Looking At

[One sentence: what this thing IS in plain language]

## What It Does

[2-3 sentences: what this thing DOES, in terms of outcome, not mechanism.
Use analogies the user would understand.]

## The Pieces

[Bulleted list: each component/dependency explained in one line each.
"This depends on X, which is..." format.]

## Why It Matters (For Your Project)

[1-2 sentences: how this connects to what the user is currently building.
Make it concrete and relevant.]
```

## Rules

1. **No jargon without translation.** If you must use a technical term, define it immediately in parentheses.
2. **Use analogies.** "A folder is like a drawer in a filing cabinet." "An API key is like a library card — it proves you're allowed to use the service."
3. **Start with the WHAT, not the HOW.** The user needs to know what something is before they need to know how it works.
4. **Connect to their project.** Every explanation should end with why this matters for what they're building right now.
5. **Keep it short.** If the explanation is longer than what would fit on one screen, it's too long. Break it up or ask what part they want to focus on.
6. **Don't explain things they didn't ask about.** If they asked about the file explorer, don't also explain the terminal. One concept at a time.

## Examples

### User: "/explain" (looking at a YAML frontmatter block)

> ## What You're Looking At
>
> This is called "frontmatter" — it's a label at the top of the file that describes what the file is about.
>
> ## What It Does
>
> It gives the AI (and you) a quick summary without reading the whole file. Think of it like the label on a file folder — you can see what's inside without opening it.
>
> ## The Pieces
>
> - `---` — These dashes mark the beginning and end of the label section
> - `name: my-project` — The project's name. The part before the colon is the label, the part after is the value.
> - `status: in-progress` — Tells anyone (human or AI) where this project stands
> - `goals:` — A list of what this project is trying to accomplish. Each `-` item is one goal.
>
> ## Why It Matters
>
> When Cake reads your project files, it looks at this frontmatter first to understand what you're working on and how far along you are. It's how the AI "remembers" your project between conversations.

### User: "What's a terminal?" (encountered during project build)

> ## What You're Looking At
>
> The terminal is a text-based way to talk to your computer. Instead of clicking buttons, you type commands.
>
> ## What It Does
>
> It lets you (or the AI) run commands — things like "create a folder," "install a tool," or "run this program." It's the same computer you already use, just a different way to interact with it. Think of it like texting your computer instead of tapping its touchscreen.
>
> ## The Pieces
>
> - **The prompt** (`$` or `>`) — This is the computer saying "I'm ready for your next command"
> - **Commands** — Short instructions like `mkdir` (make a directory/folder) or `cd` (change directory/go to a folder)
> - **Output** — What the computer says back after you run a command
>
> ## Why It Matters
>
> Right now, the AI needs the terminal to set up your project structure. You don't need to memorize commands — the AI types them and you approve. But knowing what the terminal IS helps you understand what you're seeing.

## Tone

Warm, patient, never condescending. The user is smart — they just don't have the vocabulary yet. Explain like you're talking to a capable colleague who works in a different field, not like you're teaching a child.
