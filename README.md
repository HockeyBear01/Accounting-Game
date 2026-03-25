# NorthStar Goods: Accounting Challenge

A complete, responsive, web-based accounting learning game built with **React + Vite + TypeScript + Tailwind CSS**.

## Overview

You play as a rotational analyst at **NorthStar Goods**, progressing through four role-based chapters:

1. **Debits & Credits** (transaction processing)
2. **FIFO vs LIFO** (inventory costing)
3. **Break-even Analysis** (business planning)
4. **Final Integrated Round** (mixed decision-making)

The experience is designed to be completed in roughly **15–25 minutes** and emphasizes accounting accuracy, business relevance, and practical reasoning.

## Learning Objectives

- Apply debit/credit rules across core account types.
- Calculate COGS and ending inventory under FIFO and LIFO.
- Compute and interpret break-even outcomes for strategic decisions.

## Features

- Mobile-friendly dashboard layout
- Role/chapter progression with intro and summary screens
- CFO mentor feedback after each decision:
  - Correctness statement
  - Accounting logic explanation
  - Business relevance explanation
  - Expandable **Explain More** details
- Tycoon metrics that update as decisions are made:
  - Cash
  - Inventory Value
  - Profit Impact
  - Accuracy
  - Reputation
- Scoring system:
  - Accuracy tracking by topic
  - Streak bonus
  - Final topic breakdown

## Local Setup

```bash
npm install
npm run dev
```

Then open the local Vite URL (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## File Structure

```text
.
├── src
│   ├── components
│   │   ├── AppLayout.tsx
│   │   ├── ChapterIntroScreen.tsx
│   │   ├── CFOFeedbackPanel.tsx
│   │   ├── FinalResultsScreen.tsx
│   │   ├── InteractionPanel.tsx
│   │   ├── MetricsPanel.tsx
│   │   ├── ScenarioCard.tsx
│   │   ├── StartScreen.tsx
│   │   ├── SummaryScreen.tsx
│   │   └── TopBar.tsx
│   ├── data
│   │   └── gameData.ts
│   ├── game
│   │   └── useGameEngine.ts
│   ├── types
│   │   └── game.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── README.md
```

## Architecture Notes

- **UI is separated from game logic**:
  - `src/game/useGameEngine.ts` handles game state transitions, scoring, chapter flow, and metrics updates.
  - UI components are presentational and reusable.
- **Content is centralized**:
  - All scenarios and chapter metadata live in `src/data/gameData.ts`.
  - Components do not hardcode scenario details.
- **Type-safe model**:
  - `src/types/game.ts` defines scenario types, metrics, feedback schema, and game state contract.

## Design/Requirement Alignment

- **Accounting accuracy:** Scenarios explicitly test journal logic, cost flow, and break-even math.
- **Teaching effectiveness:** Every decision triggers structured CFO feedback with deeper optional explanation.
- **Engagement:** Progression, score, streak, and evolving business metrics create a tycoon feel.
- **Usability:** Clean cards, high-contrast controls, consistent layout, and responsive behavior support desktop and mobile.

## Sources / Citations

No external copyrighted assets are used.
All scenarios and instructional content are original for this project.
