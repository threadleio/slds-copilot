# 🧠 Commit Message Guide (Conventional Commits)

This project follows the [Conventional Commits](https://www.conventionalcommits.org) convention to keep the commit history clean and consistent.

---

## ✅ Format

Each commit message should follow this pattern:

<type>(optional scope): <short summary>

(optional body)

(optional footer)

### Example

feat: add Prism.js syntax highlighting for HTML output
fix: correct ESLint parser configuration
chore(ci): enable npm cache in GitHub Actions
docs: update CHANGELOG.md for v0.1.0

---

## 🔤 Common Commit Types

| Type          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **feat:**     | A new feature or significant enhancement                     |
| **fix:**      | A bug fix                                                    |
| **docs:**     | Documentation updates (README, CHANGELOG, etc.)              |
| **style:**    | Code style changes (formatting, missing semicolons, etc.)    |
| **refactor:** | Code refactor without changing functionality                 |
| **perf:**     | Performance improvements                                     |
| **test:**     | Adding or fixing tests                                       |
| **chore:**    | Maintenance tasks (dependency updates, config changes, etc.) |
| **build:**    | Changes to the build system or external dependencies         |
| **ci:**       | Continuous integration changes (GitHub Actions, Husky, etc.) |

---

## ⚠️ Breaking Changes

If your commit introduces a breaking change (e.g., renaming an API or changing behavior):

feat!: rename prompt field to message

or include it in the footer:

BREAKING CHANGE: the prompt field was renamed to message

---

## 🧩 Why This Matters

- **Readable history** – everyone can instantly see what changed and why.
- **Auto-generated changelogs** – tools like `semantic-release` can build releases automatically.
- **Consistent collaboration** – contributors know exactly how to name commits.

---

## 🚀 Quick Reference

| Action               | Commit Example                                  |
| -------------------- | ----------------------------------------------- |
| Add a new feature    | `feat: introduce ResultTabs layout`             |
| Fix a bug            | `fix: handle undefined prompt in input field`   |
| Update dependencies  | `chore: bump eslint and prettier versions`      |
| Update documentation | `docs: add contribution guide`                  |
| Refactor code        | `refactor: simplify ResultTabs rendering logic` |
| Improve performance  | `perf: cache API responses locally`             |
| Add CI workflow      | `ci: create GitHub Action for auto releases`    |

---

📘 You can find the official spec here: [conventionalcommits.org](https://www.conventionalcommits.org)
