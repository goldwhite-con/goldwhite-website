## Development Environment

This project is developed using Claude Code with VS Code open alongside it.

### VS Code integration
- Run Claude Code from VS Code's **integrated terminal** (not an external terminal window) — this enables automatic IDE integration so diffs appear in VS Code's diff viewer rather than the terminal, and lint/syntax errors are shared with Claude automatically
- If starting Claude Code from an external terminal, run `/ide` to connect to the open VS Code instance
- Use `Cmd+Option+K` to insert file references (e.g. `@File#L1-99`) when pointing Claude to specific code
- View all proposed file changes in VS Code's diff viewer before accepting — do not auto-accept edits without reviewing the diff

### Workflow expectations
- After making changes, Claude should remind me to check the VS Code diff view to review before we move on
- When there are lint errors or TypeScript warnings visible in VS Code's Problems panel, flag them and address them before considering a task complete
- Prefer small, reviewable commits — after each logical chunk of work, prompt me to commit via VS Code's Source Control panel
- If multiple files are changing, summarise which files are affected before starting so I can watch the right ones in VS Code