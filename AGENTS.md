# AITech Innovations

## Project

Statically exported Next.js agency website for AITech Innovations.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- CSS and existing vanilla JavaScript conversion workflows
- PHP chatbot endpoint
- Hostinger static hosting via `output: "export"`

## Direction

- Light, clean, modern agency theme
- Clear UK service-business positioning across websites, content, ads setup, chatbots and automation
- Avoid heavy AI jargon
- Prioritize the free strategy call, contextual WhatsApp enquiries and simple starting prices

## Development Notes

- Keep the Next.js output static and Hostinger-ready; do not introduce server-only Next.js runtime features.
- Keep contact settings centralized in `public/script.js`.
- Preserve all 22 public routes, self-referencing canonicals and static-export compatibility.
- Keep pages fast, accessible, mobile-friendly, and easy to edit.
- Use real portfolio screenshots when available; demo work must be labelled honestly.
- Work only on one task at a time.
- Do not scan the entire repo unnecessarily.
- Inspect package/config files only as needed to understand framework, scripts, or deployment behavior.
- Do not refactor unrelated code.
- Keep changes minimal and production-ready.
- Update tracking files after each completed project task.
- Do not modify application code when only updating tracking files.

## Deployment

Run `npm run build`, then deploy only the contents of `out/` to Hostinger `public_html`.

Do not deploy source files, `node_modules/`, `.next/`, or `package.json` to `public_html`.

## Tracking Files

This project uses lightweight tracking files:

- `PROJECT_STATUS.md`
- `TASKS.md`
- `CHANGELOG.md`
- `PROJECT_PLAN.md`
- `AGENTS.md`

## Future Task Completion Rules

When Codex completes a project task in this same project, update tracking files automatically.

Update `TASKS.md`:

- Move completed task from Today or This Week to Done.

Update `PROJECT_STATUS.md`:

- Add completed work to Completed work.
- Remove fixed items from Known issues.
- Update Next tasks if needed.

Update `CHANGELOG.md`:

- Add a new entry including date, task name, files changed, short summary, validation/tests if available, and next task.

Do not ask for confirmation when updating tracking files.
Do not modify application code during tracking-only updates.
