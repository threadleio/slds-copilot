# 🧩 SLDS Copilot – Changelog

All notable changes to this project will be documented in this file.  
The format follows [Conventional Commits](https://www.conventionalcommits.org) and [Semantic Versioning](https://semver.org/).

---

## [v0.1.0] - 2025-10-21

### 🚀 Initial MVP Release

#### ✨ New Features

- Implemented the base **Next.js (App Router)** web interface.
- Added an interactive prompt for describing SLDS components.
- Introduced **Prism.js** syntax highlighting for HTML output.
- Implemented **ResultTabs** (Code / Preview / Explanation sections).
- Added educational explanations for why specific SLDS classes were selected.
- Added one-click copy button for generated HTML code.

#### 🧠 Type Safety & Code Quality

- Introduced full **TypeScript** support with strongly typed results (`GenerationResult`).
- Added `@typescript-eslint` and `eslint-plugin-import` — clean lint with zero warnings.
- Updated ESLint rules for both browser and Node code (`env` overrides).
- Organized import aliases (`@/components`, `@/types`, `@/lib`).

#### 🧩 Infrastructure & CI

- Added **GitHub Actions** configuration (build + lint + typecheck).
- Enabled npm cache in the CI pipeline for faster builds.
- Prepared ready-to-deploy setup for **Vercel** (Next.js 14).

#### 🪄 Developer Experience

- Configured **Husky** + **lint-staged** for pre-commit validation.
- Added **Prettier** and `eslint --fix` for automatic code formatting.
- Added `types/prism-ambient.d.ts` for Prism.js component modules.
- Cleaned up `.gitignore` and updated `tsconfig.json` paths.

---

## 📌 Structure for Future Versions

Use this template for new releases:

```markdown
## [vX.Y.Z] - YYYY-MM-DD

### 🚀 New Features

- ...

### 🛠️ Fixes

- ...

### 🧠 DX / CI Improvements

- ...

### 🧹 Refactors

- ...

### ⚠️ Breaking Changes

- ...
```
