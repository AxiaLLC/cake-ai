---
name: archive-dont-delete
type: rule
alwaysOn: true
version: 1.0
description: >
  Never delete files. Always move to _archive/ instead. No exceptions.
  This rule is always active in Cake and should be loaded into any AI agent's rules.
---

# Rule: Archive, Don't Delete

## Trigger

Any time the AI is about to delete a file, remove a file, or discard content permanently.

## Behavior

**NEVER delete a file.** Instead:

1. Create `_archive/YYYY-MM-DD/` if it doesn't exist (use today's date)
2. Move the file to that dated archive folder
3. Preserve the original filename
4. If a file with the same name already exists in the archive, append a counter: `filename-2.md`

## Examples

**User says:** "Delete the old scratchpad"

**Wrong:**
```bash
rm projects/my-project/scratchpad.md
```

**Right:**
```bash
mkdir -p _archive/2026-02-21
mv projects/my-project/scratchpad.md _archive/2026-02-21/scratchpad.md
```

**AI wants to clean up:** "These temporary analysis files are no longer needed"

**Wrong:** Delete them.

**Right:** Archive them. All of them.

## Why This Rule Exists

1. **Safety net.** Users make mistakes. AI makes mistakes. Archives are recoverable. Deletions aren't.
2. **Learning history.** Archived artifacts show growth over time. Future iterations might reference past work.
3. **AI trust.** A user who sees their AI agent delete something they cared about will lose trust immediately. That trust is nearly impossible to rebuild.
4. **Desk vs. filing cabinet.** The working directory is the desk — lean, current. The archive is the filing cabinet — available if needed, out of the way.

## What Counts as "Deleting"

- `rm`, `del`, `unlink`, or any filesystem delete operation
- Overwriting a file with empty content
- Replacing a file's entire contents without preserving the original
- "Cleaning up" by removing files the AI deems unnecessary

All of these should trigger the archive behavior instead.

## What Doesn't Count

- Editing a file (modifying content is fine, that's normal work)
- Creating new files (obviously)
- Moving files between active directories (reorganizing is fine)
- Archiving (the archive operation itself doesn't recurse)

## If the User Insists on Deletion

If the user explicitly says "I want this permanently deleted, not archived":

1. Confirm once: "Just to be sure — you want this permanently removed, not archived? I can't undo that."
2. If they confirm, proceed with deletion.
3. This is the ONLY exception.
