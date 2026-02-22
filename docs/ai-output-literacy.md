---
name: ai-output-literacy
type: reference
version: 1.0
description: >
  Guide for introducing AI output formats to non-technical users.
  Cake introduces each format when the user's project first produces it.
---

# AI Output Literacy

Users need to understand what the AI produces. Not deeply — just enough to read it, recognize it, and not be scared of it. Cake introduces each format at the moment the project first creates it.

## The Formats

### Markdown (.md files)

**When introduced:** Iteration 1 — the first `.md` file the project creates.

**Cake's one-liner:**
> "This is Markdown. It's just text with some formatting tricks. `#` is a heading. `-` makes a list. `**bold**` makes bold. That's 80% of it. You'll pick up the rest by seeing it."

**What the user needs to know:**
- `.md` files are plain text with simple formatting
- They look nice when rendered (like in GitHub or VS Code preview)
- They look functional when raw (unlike HTML)
- Most of what they'll write and read in Cake is Markdown

**Pattern recognition:**
```markdown
# This is a big heading
## This is a smaller heading
- This is a list item
- This is another one
**This is bold**
`this is code`
```

### YAML Frontmatter

**When introduced:** Iteration 1 — the first project `readme.md` with frontmatter.

**Cake's one-liner:**
> "The stuff between the `---` lines at the top is called frontmatter. Think of it as a label on a file folder — it tells the AI what this file is about without reading the whole thing. `key: value` is the only pattern you need to know."

**What the user needs to know:**
- Always between `---` lines at the top of a file
- It's metadata — information ABOUT the file
- Format is `key: value` — name on the left, data on the right
- Indentation matters (use spaces, not tabs)
- The AI reads this to understand file purpose and status

**Pattern recognition:**
```yaml
---
name: my-project
status: in-progress
created: 2026-02-21
goals:
  - Build a habit tracker
  - Learn about files and folders
---
```

### CSV (Comma-Separated Values)

**When introduced:** Iteration 2 — when the project needs data or a simple table.

**Cake's one-liner:**
> "A CSV is a spreadsheet without the spreadsheet app. Each line is a row. Commas separate the columns. You could open this in Excel or Google Sheets, but you can also just read it as text."

**What the user needs to know:**
- First line is usually headers (column names)
- Each subsequent line is a row of data
- Commas separate values in each row
- Can be opened in any spreadsheet app
- Simpler than Excel for AI to read and write

**Pattern recognition:**
```csv
date,task,status,notes
2026-02-21,Morning walk,done,Felt great
2026-02-22,Read 20 pages,done,Finished chapter 3
2026-02-23,Meal prep,skipped,Too tired
```

### JSON (JavaScript Object Notation)

**When introduced:** Iteration 2-3 — when the project encounters a config file or API response.

**Cake's one-liner:**
> "JSON is YAML's cousin. Same idea — structured data — different format. Curly braces instead of dashes. Colons still mean 'key: value.' You'll see it in config files and when the AI talks to other services."

**What the user needs to know:**
- `{ }` = an object (a collection of key-value pairs)
- `[ ]` = a list (multiple items)
- `"key": "value"` = a named piece of data
- Commas separate items
- `package.json` is the most common one they'll see

**Pattern recognition:**
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A habit tracker built with AI"
}
```

### Python (Basics for Reading, Not Writing)

**When introduced:** Iteration 3+ — when the project needs logic or automation.

**Cake's one-liner:**
> "Python is a language the computer understands. You don't need to learn to write it — I speak Python. But I want you to be able to READ it enough to know what I'm doing. Think of it like reading a recipe in French — you don't need to be fluent, you just need to recognize the ingredients."

**What the user needs to know:**
- Indentation is meaningful (nested = belongs to the thing above it)
- `=` means "set this to that"
- `if` / `else` means "if this is true, do this; otherwise, do that"
- `for` means "do this for each thing in the list"
- `print()` means "show me this"
- `#` starts a comment (note for humans, ignored by the computer)

**Pattern recognition:**
```python
# Count how many habits were completed this week
completed = 0
for habit in this_week:
    if habit.status == "done":
        completed = completed + 1
print(f"You completed {completed} habits this week!")
```

## How Cake Introduces Formats

The pattern is always the same:

1. **The project creates a file in the format** (not a lesson about the format)
2. **Cake names it** — "This is Markdown" / "This is YAML"
3. **Cake explains it in one sentence** — the one-liner above
4. **Cake points to the actual file** — "See the `#` at the top? That's a heading."
5. **Move on** — Don't lecture. The user will see it again.

If the user asks for more detail, Cake explains more. If they don't ask, they don't need it yet. Progressive disclosure, always.

## The Goal

By the end of Iteration 2, the user should be able to:
- Read a Markdown file without flinching
- Understand what YAML frontmatter is (even if they can't write it from scratch)
- Open a CSV and understand the structure

By Iteration 3+:
- Recognize JSON when they see it
- Read basic Python enough to follow what the AI did
- Not be intimidated by any text-based format

The bar is READING, not WRITING. The AI does the writing. The human does the checking.
