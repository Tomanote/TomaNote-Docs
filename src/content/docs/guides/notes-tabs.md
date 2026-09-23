---
title: Notes & tabs
description: Create, rename, pin, reorder and delete notes in TomaNote.
---

Every note in TomaNote lives in a **tab**, just like browser tabs. This lets you keep several notes open and switch between them without losing your place.

<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder">
  📸 Screenshot: <code>screenshots/tabs-strip.png</code> — Tab strip with several open notes
</div>

## Create a note

- Click the **+** button in the right sidebar (desktop) or the bottom bar (mobile).
- Press `Alt+N`.
- Use the **"Nueva nota"** shortcut if you installed the app (PWA).

## Rename a note

- Hover the tab and click the **pencil** button, or press `Alt+T`.
- Type the new name and press `Enter` to confirm.
- Press `Esc` to cancel, or click outside the tab.
- Pasting into the name field inserts **plain text** only.

## Pin / unpin a note

- Press `Alt+P` or use the **Tab** group of the tools sidebar.
- Pinned tabs move to the front and keep any emoji you added to the name.
- Press `Alt+P` again to unpin.

### Context menu on a tab

Since **v0.5.7**, right-clicking a tab element opens a reactive context menu. Its pin action is dynamic: the menu inspects the tab's active state metadata and intelligently toggles between **"Pin Tab"** and **"Unpin Tab"**, so the label always matches what the action will do.

## Reorder tabs

- Drag a tab left or right and drop it in its new position.

## Jump between tabs

| Shortcut | Action |
| --- | --- |
| `Alt+1` … `Alt+9` | Jump to tab 1 … 9 |
| `Alt+,` | Previous tab |
| `Alt+.` | Next tab |
| `Alt+W` | Close the active tab |

## Delete a note

Deleting is **irreversible**, so TomaNote always asks for confirmation.

- Hover the tab and click the **X** button.
- Press `Alt+Backspace`.
- Middle-click a tab label.

<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder">
  📸 Screenshot: <code>screenshots/tabs-delete-confirm.png</code> — Delete confirmation dialog
</div>

The confirmation dialog offers **Delete Note** and **Cancel**. Pressing `Esc` also cancels.

## Notes are saved automatically

All your notes and tabs are saved automatically in the browser's local storage. Closing the app and reopening it restores exactly where you left off. See [Privacy & data](/guides/privacy/) for details.

### Save status indicator

Since **v0.5.7**, the auto-save status indicator runs on a **5000 ms debounce loop**: instead of flipping on every keystroke, it waits for a 5-second pause in atomic editor changes before reporting the save state. This keeps the indicator smooth and stops it from flashing while you're actively typing.

<div class="screenshot-placeholder" role="img" aria-label="Screenshot placeholder">
  📸 Screenshot: <code>screenshots/save-status-indicator.png</code> — Auto-save status indicator with 5000ms debounce
</div>
