# LeetMonkey

> Minimalist, frontend-only Python typing practice tool—type 10 easy LeetCode solutions MonkeyType-style and track your WPM & accuracy.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)  
[![bun](https://img.shields.io/badge/bundler-bun-yellow)](https://bun.sh/)  

## 📋 Table of Contents
1. [Demo](#-demo)  
2. [Features](#-features)  
3. [Tech Stack](#-tech-stack)  
4. [Getting Started](#-getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Install](#install)  
   - [Development](#development)  
   - [Build & Deploy](#build--deploy)  
5. [Folder Structure](#-folder-structure)  
6. [Usage](#-usage)  
7. [Roadmap](#-roadmap)  
8. [Contributing](#-contributing)  

## 🚀 Demo
> Live on Vercel: [https://leetmonkey.vercel.app](https://leetmonkey.vercel.app)  

## ✨ Features
- **10 Preloaded Problems**  
  Practice the 10 most-popular “Easy” LeetCode problems in Python.  
- **Typing-Only Practice**  
  Memorize & re-type canonical solutions; no solving required.  
- **Real-Time Metrics**  
  Live WPM, accuracy %, and elapsed time.  
- **High-Score Tracking**  
  LocalStorage stores today’s best run for each problem.  
- **Minimal UI**  
  Single-page React + TailwindCSS layout; prompt auto-hides on typing.  
- **Analytics**  
  Google Analytics 4 events for key actions (page view, start, complete, retry).  

## 🛠 Tech Stack
| Layer          | Technology                    |
| -------------- | ----------------------------- |
| **Framework**  | React                         |
| **Language**   | TypeScript                    |
| **Bundler**    | Vite                          |
| **Styling**    | TailwindCSS v4                |
| **Lint & Format** | ESLint + Prettier          |
| **Analytics**  | Google Analytics 4            |
| **Deployment** | Vercel                        |


## 🏁 Getting Started
### Prerequisites

- Node.js (for Vercel builds)

### Install
```bash
# clone the repo
git clone https://github.com/<your-org>/LeetMonkey.git
cd LeetMonkey

# install deps with bun
npm install
```

### Development
```bash
# start dev server with HMR
npm run dev
```

### Build & Deploy
```bash
# build optimized bundle
bun run build

# preview production build locally
Push to main (or your default branch) and Vercel will auto-deploy.
```

## 📂 Folder Structure
```bash
/src
│
├── /components        # Reusable UI components
│   ├── AnalyticsTracker.tsx
│   ├── HighScore.tsx
│   ├── ProblemPrompt.tsx
│   ├── ResultsPanel.tsx
│   ├── StatsBar.tsx
│   └── TypingArea.tsx
│
├── /data              # Static problem definitions
│   └── problems.json
│
├── /hooks             # Custom React hooks
│   ├── useDailyProblem.ts
│   └── useTypingStats.ts
│
├── /utils             # Helper functions (formatting, scoring)
│   ├── format.ts
│   └── scoring.ts
│
├── /styles            # Global & Tailwind overrides
│   └── globals.css
│
├── App.tsx            # Root component
├── main.tsx           # Vite entrypoint
└── index.html         # HTML template + meta/SEO tags
```

## 🎓 Usage
- Select Problem
- Navigate through the 10 problems via the Prev/Next arrows.
- Read Prompt
- Prompt is visible until you start typing (auto-collapse) or via toggle.
- Type Solution
- The fully formatted Python solution is ghosted; type it out in the overlay.
- View Stats
- Real-time WPM, accuracy, and timer update as you type.
- Complete & Retry
- On finish, final stats stay inline; click “Retry” to try again.
- Track High Score
- Today’s best run persists in localStorage.


## 🛣 Roadmap
- Archive mode: practice past problems
- Dark mode toggle
- Alternative language support (JavaScript, Go)
- Leaderboards & social share


## 🤝 Contributing
- Fork the repo
- Create a feature branch: git checkout -b feature/YourFeature
- Commit changes: git commit -m "feat: add YourFeature"
- Push to your branch: git push origin feature/YourFeature
- Open a Pull Request
- Please follow the existing ESLint and Prettier rules.
