# @skillbrew/shared

A centralized shared library of styles, utilities, and constants used across SkillBrew applications — both public (`skillbrew.ai`) and private (`app.skillbrew.ai`) platforms.

---

## What’s Included

This package provides reusable code modules to ensure consistency and reduce duplication across SkillBrew projects.

### Features

- Global Styles (`styles/`)
- Utility Functions (`utils/`)
- Constants (`constants/`)
- Shared Type Definitions (coming soon)

---

## Directory Structure

```
@skillbrew/shared/
├── styles/          # Shared CSS styles
│   └── global.css
├── utils/           # Utility functions
│   └── formatDate.ts
├── constants/       # Common constants
│   └── urls.ts
├── .npmrc           # GitHub Package Registry config
├── package.json     # NPM package config
└── README.md        # You’re here
```

---

## Installation

This package is published as a private GitHub NPM package.

### 1. Authenticate via `.npmrc`

Create or update your project's `.npmrc`:

```ini
@skillbrew:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Replace `${NPM_TOKEN}` with a GitHub Personal Access Token or use GitHub Actions secrets.

### 2. Install the package

```bash
npm install @skillbrew/shared
```

---

## Usage

### 1. Import Shared CSS

```tsx
import '@skillbrew/shared/styles/global.css';
```

### 2. Use a Utility Function

```ts
import { formatDate } from '@skillbrew/shared/utils/formatDate';
```

### 3. Use a Constant

```ts
import { API_BASE_URL } from '@skillbrew/shared/constants/urls';
```

---

## Authentication for GitHub Package Registry

This package is private. Use one of the following authentication methods:

- Locally: via `.npmrc` with Personal Access Token
- CI/CD: via `NODE_AUTH_TOKEN` in GitHub Actions

---

## Best Practices

- Version consistently before publishing
- Avoid breaking changes without semantic version updates
- Use this package in both public and private SkillBrew frontends

---

## Maintainers

SkillBrew Team – https://skillbrew.ai

---

## License

This project is proprietary and private. All rights reserved © SkillBrew 2024.
