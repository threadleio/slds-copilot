# SLDS Copilot (MVP)

Przeglądarkowa appka, która na podstawie promptu generuje HTML + klasy SLDS, podgląd i uzasadnienia.

## Szybki start
```bash
npm i
npm run dev
# → http://localhost:3000
```

## Narzędzia
- Next.js + React
- Tailwind (UI), Prism (highlight)
- SLDS (CDN) w sandboxie podglądu
- Husky + lint-staged (pre-commit)
- ESLint + Prettier
- GitHub Actions (CI)

## Husky
Po `npm i` wykona się `npm run prepare`, które instaluje hooki.
Pre-commit uruchamia `lint-staged` (Prettier + ESLint na zmienionych plikach).
