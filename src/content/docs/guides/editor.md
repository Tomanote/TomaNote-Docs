---
title: Editor & formatting
description: Write and format your notes in the TomaNote editor.
---

The editor is the main area of the app. Click any open note and start typing. Text is saved automatically as you write.

![editor-basics](/screenshots/editor-basics.png)

## Formatting

TomaNote supports light inline formatting. Select some text and use the **Font** group in the tools (bold, underline, italic) or the keyboard shortcuts below.

### Bold (`Ctrl+B`)

Bold works as a **three-state cycle**:

1. Normal text.
2. Semibold.
3. Extrabold.
4. Back to normal.

Press `Ctrl+B` repeatedly (or use the toolbar) to move through the states.

### Italic and underline

- `Ctrl+I` italicizes the selection.
- `Ctrl+U` underlines the selection.

:::note[Browser note]
`Ctrl+I` and `Ctrl+U` are shown in the context menu, but they depend on your browser: in Chrome, `Ctrl+U` opens "View Source" instead of underlining. Use the **Font** toolbar buttons or the context menu for reliable results. See [issue #67](https://github.com/Tomanote/TomaNote/issues/67).
:::

## Copy, cut and paste

- `Ctrl+C` copy · `Ctrl+X` cut · `Ctrl+V` paste.
- Pasting inserts **plain text** and is **undoable** (`Ctrl+Z`).

## Undo and redo

- `Ctrl+Z` undo · `Ctrl+Y` redo.

## Indenting with Tab

Pressing `Tab` inside the editor inserts four spaces (useful for indentation).

## Context menu

Right-click inside the editor to open the context menu:

| Group | Actions |
| --- | --- |
| Edit | Copy `Ctrl+C`, Cut `Ctrl+X`, Paste `Ctrl+V` |
| Format | Bold `Ctrl+B`, Italic `Ctrl+I`, Underline `Ctrl+U` |
| History | Undo `Ctrl+Z`, Redo `Ctrl+Y` |

Items that need a selection (copy, cut, bold, italic, underline) are disabled when there's nothing selected.

![editor-context-menu](/screenshots/editor-context-menu.png)

## Plain text, not markdown

TomaNote stores plain text with light formatting. There is **no markdown preview yet** — it's planned for a future release (see the [Roadmap](/guides/settings/#roadmap)).
