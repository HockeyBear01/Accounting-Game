# NorthStar Goods: Accounting Challenge

A web-based, tycoon-style accounting learning game designed for MBA-level learners. Players rotate through analyst roles at the fictional company NorthStar Goods, learning debits & credits, inventory costing (FIFO/LIFO), and break-even analysis under the guidance of CFO mentor Jordan Blake.

## Quick Start

```bash
npm install
npm run dev
```

Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

## Learning Objectives

1. **Debits & Credits** — Master double-entry bookkeeping by recording realistic business transactions
2. **FIFO & LIFO** — Calculate cost of goods sold and ending inventory under different cost flow assumptions
3. **Break-Even Analysis** — Apply cost-volume-profit analysis to business planning decisions

## Game Structure

| Chapter | Role | Topic | Scenarios |
|---------|------|-------|-----------|
| 1 | Transaction Processing Analyst | Debits & Credits | 10 |
| 2 | Inventory Management Analyst | FIFO vs LIFO | 5 |
| 3 | Business Planning Analyst | Break-Even Analysis | 5 |
| 4 | Senior Financial Analyst | Integrated Review | 5 |

**Estimated completion time:** 15–25 minutes

## Architecture

### Tech Stack
- **React** + **TypeScript** — Component-based UI
- **Vite** — Fast build tooling
- **Tailwind CSS** — Utility-first styling

### Project Structure

```
src/
├── components/          # UI components
│   ├── TopBar.tsx          # Navigation bar with score and progress
│   ├── MetricsPanel.tsx    # Company metrics dashboard
│   ├── ScenarioCard.tsx    # Scenario display with visuals
│   ├── InteractionPanel.tsx # Answer selection/input
│   ├── CFOFeedbackPanel.tsx # Mentor feedback after each answer
│   ├── StartScreen.tsx     # Landing page with objectives
│   ├── ChapterIntroScreen.tsx
│   ├── ChapterSummaryScreen.tsx
│   ├── GameplayScreen.tsx  # Main gameplay layout
│   └── FinalResultsScreen.tsx
├── data/
│   └── scenarios.ts     # All game content (scenarios, chapters)
├── hooks/
│   └── useGameState.ts  # Core game state management
├── types/
│   └── game.ts          # TypeScript interfaces
└── utils/
    └── gameLogic.ts     # Scoring, metrics, grading logic
```

### Design Decisions

- **Content separated from UI**: All scenarios, feedback, and chapter configs are in `src/data/scenarios.ts`. This makes content updates easy without touching component code.
- **Single-file state management**: `useGameState.ts` manages all game state in one hook, avoiding prop drilling complexity while keeping the codebase simple.
- **No backend**: The entire game runs client-side. No server, database, or API needed.
- **Mobile-first responsive**: All layouts adapt from mobile to desktop using Tailwind responsive utilities.

## How This Meets Assignment Requirements

| Requirement | Implementation |
|---|---|
| Web-based, runnable locally | Vite dev server, single `npm run dev` command |
| PC, Mac, and mobile | Responsive Tailwind layout tested across viewports |
| Learning objectives stated | Start screen displays all three objectives prominently |
| Feedback for incorrect answers | CFO mentor panel explains what was wrong and why |
| Intuitive navigation | Linear chapter progression with clear progress indicators |
| No copyrighted assets | All content is original; no external images or media |
| Completable in one sitting | ~25 scenarios, estimated 15–25 minutes |
| Accounting accuracy | All transactions, COGS calculations, and break-even math verified |
| Teaching effectiveness | Every answer includes key insights, common mistakes, and business relevance |
| Engagement | Tycoon metrics, streak bonuses, grades, and CFO mentor character |
| Usability | Clean dashboard UI, high contrast, clear visual hierarchy |

## Credits

Created by **Jonas Lang** and **Jaime Gandy**
BUSI 7230: Cost Analysis and Systems
