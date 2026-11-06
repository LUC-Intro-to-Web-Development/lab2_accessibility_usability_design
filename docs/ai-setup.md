# Using AI in your development environment (Part 4 guide)

In earlier work you may have pasted code into a chat window. In this part you use an AI tool that works inside your project, where it can read your files and propose changes to them. That is how most developers use AI day to day, and it comes with its own skills: giving good context, asking clearly, and reviewing what comes back.

## 1. Choose a tool

Use one AI tool that can see your project folder. Common choices:

- GitHub Copilot in VS Code (chat panel, with an edit or agent mode)
- Cursor
- Claude Code in a terminal or in your editor
- Another editor assistant your instructor approves

A browser chat window that cannot see your files does not count for this part. Write the tool name in `AI_LOG.md`.

## 2. Check that it can see your project

Open the whole project folder in your editor, not a single file. Ask:

> List the files in this project and tell me in one sentence what each file does.

Compare the answer with your real folder. If it misses files or invents some, fix that before you continue. Most tools let you attach files or folders to a message (for example with `#file`, `@file`, or by selecting them). Learn how your tool does it.

## 3. Write a project context file

AI tools forget everything between chats. A project context file is a short note that the tool reads every time, so you do not repeat yourself. Copy `docs/ai-context-template.md`, fill it in, and save it where your tool looks for it. Check your tool's documentation for the exact name. Common ones are:

| Tool | Usual file |
|---|---|
| GitHub Copilot | `.github/copilot-instructions.md` |
| Claude Code | `CLAUDE.md` |
| Cursor | A rules file inside `.cursor/rules/` |

Keep it short. A good context file says what the project is, what technology to use and not use, which accessibility rules are not negotiable, and what the code style is.

## 4. Use a prompt pattern

A strong prompt has five parts:

1. **Goal.** What you want, in one or two sentences.
2. **Context.** Which files to read and match (attach them).
3. **Constraints.** What to use and what to avoid.
4. **Acceptance criteria.** A checklist the result must meet. Paste requirements 18 to 22 from the lab here.
5. **Output.** Which files to create or change, and what you want explained.

Weak prompt:

> Make me a booking form.

Stronger prompt:

> **Goal:** Create `book.html` and `booking.js` for a dog boarding request form.
> **Context:** Match the header, nav, skip link, and footer in `home.html`. Use the colors and spacing variables in `styles.css`.
> **Constraints:** Plain HTML, CSS, and JavaScript. No frameworks, no libraries, no build step. Add form styles to `styles.css`. Do not remove focus outlines.
> **Acceptance criteria:** (paste requirements 18 to 22 here)
> **Output:** Create the two files, add the styles, and list anything you were unsure about.

## 5. Chat, edit, and agent modes

Most tools have a chat mode that only answers questions and an edit or agent mode that changes your files. Start in a mode where you can see each change as a diff and accept or reject it. Do not accept a large change you have not read.

## 6. Commit the draft before you edit it

When the AI gives you a working first version, commit it right away with the message `AI draft: booking form`. Then make your own changes and commit again. The difference between the two commits shows exactly what you reviewed and fixed.

## 7. Review the diff with this checklist

Read the change line by line and ask:

- Does every field have a visible label connected with `for` and `id`? Is placeholder text doing the label's job?
- Did it use native elements (`button`, `label`, `input`), or `div`s with ARIA roles?
- Did it add ARIA attributes? Can you explain why each is needed?
- Did it remove or hide the focus outline?
- Do the colors pass contrast? Check them, do not guess.
- Is color the only sign of an error?
- Is there a status container in the page that stays in place and announces the message, and does it avoid moving focus unexpectedly?
- Does a pick up date before the drop off date get caught?
- Did it add a library, a font, or a script from the internet you did not ask for?
- Is there a comment where the Node.js request will go?

## 8. Iterate with evidence

If a check fails, give the AI the evidence. Paste the validator message or the Lighthouse failure and ask for a fix that keeps everything else the same. Vague feedback such as "make it more accessible" gives vague results. Log each follow up prompt in `AI_LOG.md`.

## 9. Stay safe

Never paste passwords, tokens, or personal information into an AI tool. Do not accept new packages or downloaded scripts you did not ask for. You are responsible for every line you commit.
