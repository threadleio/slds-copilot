# 🤝 Contributing to SLDS Copilot

First of all — thank you for contributing!  
This document explains how to collaborate efficiently, keep the codebase clean, and maintain consistent commit messages and changelogs.

---

## 🧱 Project Overview

**SLDS Copilot** is a web-based tool that helps Salesforce developers use **Salesforce Lightning Design System (SLDS)** properly by:

- generating HTML + SLDS code snippets,
- explaining design decisions and accessibility implications,
- and serving as an educational sandbox for UI consistency.

If you’re joining as a contributor — welcome! 🎉  
This document will help you get started quickly and follow the established conventions.

---

## ⚙️ Local Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-org-or-user>/slds-copilot.git
   cd slds-copilot

   ```

2. Install dependencies:
   npm ci

3. Run the dev server:
   npm run dev

4. Lint, typecheck, and format before committing:
   npm run lint
   npm run typecheck
   npm run lint:fix

## 🧩 Branch Naming Convention

| Branch Type    | Example                        | Purpose                      |
| -------------- | ------------------------------ | ---------------------------- |
| `feat/...`     | `feat/prompt-ui-improvements`  | new features                 |
| `fix/...`      | `fix/prism-highlight-crash`    | bug fixes                    |
| `chore/...`    | `chore/update-eslint-config`   | configuration or maintenance |
| `docs/...`     | `docs/update-readme`           | documentation changes        |
| `refactor/...` | `refactor/component-structure` | internal code restructuring  |

👉 Always create a new branch for your change before submitting a PR.

## 🧠 Commit Message Convention

We follow Conventional Commits

Each commit message should describe what was changed and why.

Format:

<type>(optional scope): <short summary>

Examples:

feat: add Prism.js syntax highlighting
fix: handle undefined prompt input
chore(ci): enable npm caching in GitHub Actions
docs: update changelog for v0.1.0

Full details can be found in docs/COMMITS_GUIDE.md

## 🧹 Code Quality

Before pushing:

✅ Ensure ESLint and Prettier pass (npm run lint)

✅ Ensure TypeScript builds with no errors (npm run typecheck)

🚫 Avoid using any — prefer explicit or generic types

🧩 Keep imports sorted and grouped (import/order rule handles this)

## 🧾 Pull Request Workflow

1. Push your branch to GitHub:
   git push origin feat/your-branch-name

2. Open a Pull Request (PR):

- Title should match the main change (feat:, fix:, etc.)

- Add a short description of what you changed and why.

- Reference related issues if applicable (Closes #123).

3. Once reviewed and merged:

- The main branch automatically triggers CI (build + lint + deploy).

## 🧩 Versioning & Releases

We use Semantic Versioning (SemVer):

- MAJOR → breaking changes

- MINOR → new features

- PATCH → fixes or small improvements

Each stable milestone is tagged (e.g., v0.1.0)
and reflected in docs/CHANGELOG.md

## 🧰 Tech Stack

- Framework: Next.js 14 (App Router)

- Language: TypeScript

- Styling: Tailwind CSS + SLDS principles

- Syntax Highlighting: Prism.js

- Automation: Husky, ESLint, Prettier, GitHub Actions

- Hosting: ???

## 🧡 Community Guidelines

- Be respectful and collaborative.

- Open issues with clear reproduction steps.

- Keep PRs focused — small, isolated changes are easier to review.

- Write clear, descriptive commit messages.

Thank you for helping make SLDS Copilot better! 🙌
