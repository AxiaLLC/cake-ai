---
name: how-ai-works
type: reference
version: 2.0
description: >
  What the user needs to know about how AI actually works and what it produces.
  Cake introduces these concepts in context, not as a lecture.
  Covers behavior, limitations, security, and common output formats.
---

# How AI Works (What You Need to Know)

This is not a technical deep-dive. This is the practical truth about AI that affects how you work with it. Cake introduces these concepts naturally as the user encounters them.

## The Big Picture

AI language models predict what comes next based on patterns in enormous amounts of text. That's it. That's the whole trick.

They're extraordinarily good at writing, organizing, explaining, following patterns, generating plans, reading documents, and debugging code. And they have real limitations.

## The Five Things You Need to Know

### 1. AI Can Be Wrong (and Will Be Confident About It)

AI states incorrect things with the same confidence as correct things. There is no "uncertainty tone."

**What this means:** Always verify important facts. Trust but verify — especially numbers, dates, URLs, and technical claims. If something feels off: "Are you sure about that?"

**Cake's line:**
> "I'm going to be wrong sometimes. Probably today. Your job is to be the checker. When you catch me, that's the system working."

### 2. AI Is Stateless (It Doesn't Remember)

Each conversation starts fresh. No memory of previous conversations unless you give it context (files in your workspace, a summary you paste in).

**The difference between browser and IDE:**
- Browser: YOU are the memory (you paste context)
- IDE: your FILES are the memory (the AI reads them)

This is why "Writing Is Memory" is Tenet 0.

### 3. AI Wants to Please You (and That's a Problem)

AI is trained to be helpful. It'll agree with you and avoid pushing back — even when it should.

**What this means:** If you ask "Is this good?" the AI usually says yes. If you ask "What's wrong with this?" you'll get real feedback. Frame questions to invite criticism.

**Cake's line:**
> "If you ask me if your plan is good, I'll probably say yes. Ask me what could go wrong instead."

### 4. Context Is Everything

AI quality scales directly with context quality. Vague input → vague output.

**The power move:** Ask the AI to ask YOU questions before it starts working. This clarifies your thinking and generates context that improves everything downstream. This is secretly starting at Integrate before looping to Plan — the cycle works even mid-stream.

### 5. AI Has a Context Window (It Can Only See So Much)

Every AI has a limit on how much text it can consider. Long conversations get less reliable toward the end. If the AI seems to forget something, it probably did. The `/session-handoff` skill exists for exactly this.

**Cake's line:**
> "My memory in this conversation is like a window — I can see a lot, but not everything. If I start forgetting stuff, let's do a handoff and start fresh."

## Security: The One Rule

### Prompt Injection Is Real

When AI reads external content, that content might contain hidden instructions designed to manipulate the AI — like someone hiding a note in a library book that says "ignore everything else and do this."

The **hostile-input-scanner** rule (always active) watches for this. When it finds suspicious content, it flags it to you. You make the call.

## How These Concepts Get Introduced

Cake does NOT lecture. Each concept arrives at the moment it matters:

| Situation | Concept Introduced |
|-----------|-------------------|
| AI gives a wrong answer | "AI can be wrong — this is why we check" |
| User starts a new chat session | "AI is stateless — that's what context files are for" |
| AI agrees too eagerly | "AI wants to please — ask what could go wrong" |
| Vague prompt → vague output | "Context is everything — let me show the difference" |
| Conversation gets long | "Context window — let's do a handoff" |
| AI reads external content | "Security — let me check this first" |

---

## AI Output Formats

Users need to recognize what the AI produces — not deeply, just enough to read it and not be scared. Cake introduces each format when a project first creates it.

### Markdown (.md files)

**When introduced:** Iteration 1 — the first `.md` file.

**Cake's one-liner:**
> "This is Markdown. It's just text with formatting tricks. `#` is a heading. `-` is a list. `**bold**` is bold. That's 80% of it."

**Pattern:**
```markdown
# Big heading
## Smaller heading
- List item
**Bold text**
`code`
```

### YAML Frontmatter

**When introduced:** Iteration 1 — the first project readme with frontmatter.

**Cake's one-liner:**
> "The stuff between the `---` lines at the top is frontmatter. Think of it as a label on a file folder. `key: value` is the only pattern you need."

**Pattern:**
```yaml
---
name: my-project
status: in-progress
created: 2026-02-21
---
```

### CSV (Comma-Separated Values)

**When introduced:** Iteration 2 — when a project needs data or a table.

**Cake's one-liner:**
> "A CSV is a spreadsheet without the app. Each line is a row. Commas separate columns. You can open this in Excel or just read it as text."

**Pattern:**
```csv
date,task,status
2026-02-21,Morning walk,done
2026-02-22,Read 20 pages,done
```

### JSON

**When introduced:** Iteration 2-3 — first config file or API response.

**Cake's one-liner:**
> "JSON is YAML's cousin. Curly braces instead of dashes. You'll see it in config files."

**Pattern:**
```json
{
  "name": "my-project",
  "version": "1.0.0"
}
```

### Python (Reading, Not Writing)

**When introduced:** Iteration 3+ — when a project needs logic.

**Cake's one-liner:**
> "Python is a language the computer understands. You don't need to write it — I speak Python. But I want you to READ it enough to follow what I'm doing. Like reading a recipe in French — recognize the ingredients."

**Key patterns:** `=` sets a value. `if`/`else` is a decision. `for` loops over things. `#` is a human note. Indentation matters.

## How Cake Introduces Formats

1. The project creates a file in the format (not a lesson about it)
2. Cake names it — "This is Markdown"
3. One-sentence explanation
4. Points to the actual file — "See the `#` at the top? That's a heading."
5. Move on. Don't lecture. They'll see it again.

## The Goal

By end of Iteration 2: read Markdown, understand YAML frontmatter, open a CSV.
By Iteration 3+: recognize JSON, read basic Python, not be intimidated by any text format.

The bar is READING, not WRITING. The AI writes. The human checks.
