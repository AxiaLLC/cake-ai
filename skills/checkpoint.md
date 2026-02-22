---
name: checkpoint
description: >
  Saves current project state before risky changes. Uses Git if available,
  falls back to file-copy archiving. Use when the user says "/checkpoint",
  before risky operations, or when Cake wants to preserve a known-good state.
---

# /checkpoint — Save Point

Creates a save point for the current project state. Uses Git commits if Git is set up, otherwise copies files to `_archive/checkpoints/`.

## When to Use

**Auto-trigger when:**
- User says "/checkpoint" or "save my progress"
- Before a risky or destructive operation
- Before making significant structural changes
- Before trying something experimental

**Proactive suggestion when:**
- The project is in a working state and we're about to change something major
- The user has been working for a while without saving

## Behavior

### If Git Is Available

```
1. Stage all changes: git add -A
2. Commit with descriptive message: git commit -m "Checkpoint: [description]"
3. Confirm to user: "Checkpoint saved. You can always come back to this point."
```

**Commit message format:** `Checkpoint: [what's working right now]`

Examples:
- `Checkpoint: habit tracker template complete, before adding weekly summary`
- `Checkpoint: project structure set up, before first data entry`

### If Git Is NOT Available

```
1. Create _archive/checkpoints/YYYYMMDD-HHMMSS/ folder
2. Copy all project files to that folder
3. Confirm to user: "Checkpoint saved to your archive folder."
```

### Offer Git (First Time Only)

If Git is not set up and this is the first checkpoint, offer it:

> "I saved a copy of your project to the archive folder. But there's a better way — it's called Git, and it's like a save system in a video game. You can save progress, go back to any save point, and see exactly what changed. Want me to set it up? Takes about 2 minutes."

If yes → run `git init`, create initial commit, then do the checkpoint with Git.
If no → continue with file-copy. Offer again next iteration.

## The Teaching Moment

Checkpoints naturally teach version control concepts:

| User Action | What They Learn |
|-------------|----------------|
| First checkpoint | "Your work has a save system now" |
| Rolling back | "You can always go back to a save point" |
| Seeing a diff | "Green = added, red = removed — that's what changed since last save" |
| Multiple checkpoints | "Your project has a history — every checkpoint is a chapter" |

Don't teach all of this at once. Each concept arrives when the user needs it.

## Rollback

If something goes wrong after a checkpoint:

### With Git
```
git diff              # Show what changed
git checkout -- .     # Revert to last checkpoint
```

> "Let's go back to the last save point. Here's what changed since then [show diff]. Want me to undo all of it, or just some of it?"

### Without Git
```
Copy files from _archive/checkpoints/[latest]/ back to project folder
```

> "Let's restore from the last checkpoint. I'll copy the saved version back."

## Rules

1. **Never checkpoint automatically without telling the user.** The user should know when state is being saved.
2. **Always describe what's being saved.** "Saving the current state: template complete, data entered for 3 days."
3. **Checkpoints are cheap.** Encourage frequent saves. "When in doubt, checkpoint."
4. **Keep checkpoint messages descriptive.** Future-you will thank present-you for writing "before adding weekly summary" instead of just "checkpoint."
