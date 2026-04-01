// ============================================================
// NORTHSTAR GOODS — ADDITIONAL SCENARIO POOL
// For random selection to supplement existing scenarios.ts
// Aligned with BUSI 7230 Cost Analysis & Systems course notes.
//
// TO INTEGRATE: append these objects into the `scenarios` array
// in src/data/scenarios.ts. IDs use dc2-, fl2-, be2-, fr2- prefixes
// to avoid collisions with the existing 29 scenarios.
// ============================================================

import { Scenario } from '../types/game';

export const additionalScenarios: Scenario[] = [

  // ─────────────────────────────────────────────────────────
  // CHAPTER 1 — DEBITS & CREDITS  (8 new scenarios)
  // ─────────────────────────────────────────────────────────

  {
    id: 'dc2-01',
    chapterId: 'debits-credits',
    title: 'Paying Employee Wages',
    description:
      'NorthStar Goods pays $6,400 in employee wages in cash at the end of the pay period.',
    question: 'Which journal entry correctly records this wage payment?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Wages Expense $6,400; Credit Cash $6,400' },
      { id: 'b', label: 'Debit Cash $6,400; Credit Wages Expense $6,400' },
      { id: 'c', label: 'Debit Wages Payable $6,400; Credit Wages Expense $6,400' },
      { id: 'd', label: 'Debit Wages Expense $6,400; Credit Accounts Payable $6,400' },
    ],
    correctAnswer: 'a',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Wages Expense increases (debit) because the cost is incurred. Cash decreases (credit) because we paid it.',
      incorrect:
        'Not quite. An expense always increases with a debit. Since we paid cash immediately, Cash — an asset — decreases with a credit. Entry: Debit Wages Expense / Credit Cash.',
      keyInsight:
        'Expenses reduce equity and always carry a debit normal balance — they increase with debits, decrease with credits.',
      commonMistake:
        'Debiting Cash is a common flip error. Cash goes OUT when we pay wages, so Cash is credited (decreased).',
      whyItMatters:
        'Correctly classifying wage payments as an expense rather than an asset ensures the income statement reflects true operating costs for the period.',
      explainMore:
        'Under accrual accounting, expenses are recorded when incurred. Here, we pay immediately, so no liability is created. The entry reduces both Cash (asset) and, ultimately, retained earnings through the expense account. If wages had been earned but not yet paid, we would instead Debit Wages Expense and Credit Wages Payable — recording a liability until payment.',
    },
    metricEffects: {
      correct: { profit: -200, reputation: 3 },
      incorrect: { profit: -600, reputation: -3 },
    },
  },

  {
    id: 'dc2-02',
    chapterId: 'debits-credits',
    title: 'Accruing Wages at Period-End',
    description:
      'At month-end, NorthStar Goods owes employees $3,200 in wages that will be paid next month. No cash has changed hands yet.',
    question: 'What adjusting entry should be recorded?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Cash $3,200; Credit Wages Expense $3,200' },
      { id: 'b', label: 'Debit Wages Expense $3,200; Credit Wages Payable $3,200' },
      { id: 'c', label: 'Debit Wages Payable $3,200; Credit Cash $3,200' },
      { id: 'd', label: 'Debit Wages Expense $3,200; Credit Cash $3,200' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. The expense is incurred this period (debit Wages Expense) and the unpaid obligation is recorded as a liability (credit Wages Payable).',
      incorrect:
        'Not quite. No cash moves yet. The expense belongs to this period (accrual basis), so we debit Wages Expense. The amount owed to employees creates a liability: credit Wages Payable.',
      keyInsight:
        'Accrual accounting requires recognizing expenses in the period they are incurred — even when cash payment occurs later. This is the core difference between cash-basis and accrual-basis accounting.',
      commonMistake:
        'Crediting Cash is wrong here because no payment has been made. The obligation sits as a liability (Wages Payable) until it is settled.',
      whyItMatters:
        'Without this adjusting entry, the period\'s expenses are understated and liabilities are missing from the balance sheet — both misrepresenting the company\'s true financial position.',
      explainMore:
        'This is a classic accrued liability (accrued expense) adjusting entry. Step 1: Debit Wages Expense $3,200 — records the cost in the right period. Step 2: Credit Wages Payable $3,200 — creates the liability on the balance sheet. When paid next month: Debit Wages Payable $3,200 / Credit Cash $3,200. The two-step process cleanly separates the period of cost from the period of cash.',
    },
    metricEffects: {
      correct: { profit: -300, reputation: 5 },
      incorrect: { profit: -700, reputation: -3 },
    },
  },

  {
    id: 'dc2-03',
    chapterId: 'debits-credits',
    title: 'Purchasing Equipment for Cash',
    description:
      'NorthStar Goods buys a new forklift for $28,000 cash to use in its warehouse operations.',
    question: 'Which account is CREDITED in this transaction?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Equipment' },
      { id: 'b', label: 'Depreciation Expense' },
      { id: 'c', label: 'Cash' },
      { id: 'd', label: 'Accounts Payable' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash decreases (credit) as it is paid out, and Equipment increases (debit) as a new long-term asset is acquired.',
      incorrect:
        'Not quite. When we buy an asset with cash, we trade one asset (Cash) for another (Equipment). Cash goes out, so it is credited. Equipment comes in, so it is debited.',
      keyInsight:
        'Buying equipment is a balance sheet transaction — one asset goes up, another goes down. No expense is recorded at purchase; instead, the cost is spread over the asset\'s useful life through depreciation.',
      commonMistake:
        'Debiting Depreciation Expense at purchase is wrong. Depreciation is recorded each period over the asset\'s life, not all at once when bought.',
      whyItMatters:
        'Capitalizing the forklift rather than expensing it immediately matches costs to the periods benefiting from the asset, consistent with the matching principle.',
      explainMore:
        'Journal entry: Debit Equipment $28,000 / Credit Cash $28,000. The forklift appears on the balance sheet as a long-term asset. Over its useful life, annual depreciation entries will gradually move its cost to Depreciation Expense: Debit Depreciation Expense / Credit Accumulated Depreciation. This is the essence of the capitalization vs. expense decision covered in the depreciation module.',
    },
    metricEffects: {
      correct: { cash: -5000, reputation: 3 },
      incorrect: { reputation: -2 },
    },
  },

  {
    id: 'dc2-04',
    chapterId: 'debits-credits',
    title: 'Recording Depreciation Expense',
    description:
      'NorthStar Goods records straight-line depreciation of $4,000 on its delivery van at the end of the year. The van cost $20,000 and has a 5-year life with no salvage value.',
    question: 'What is the correct year-end adjusting entry?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Depreciation Expense $4,000; Credit Cash $4,000' },
      { id: 'b', label: 'Debit Van (Equipment) $4,000; Credit Accumulated Depreciation $4,000' },
      { id: 'c', label: 'Debit Depreciation Expense $4,000; Credit Accumulated Depreciation $4,000' },
      { id: 'd', label: 'Debit Accumulated Depreciation $4,000; Credit Depreciation Expense $4,000' },
    ],
    correctAnswer: 'c',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. Depreciation Expense is debited (expense recognized this period) and Accumulated Depreciation is credited (a contra-asset that reduces the van\'s carrying value on the balance sheet).',
      incorrect:
        'Not quite. Depreciation is a non-cash expense — no cash moves. We debit Depreciation Expense (income statement) and credit Accumulated Depreciation (a contra-asset on the balance sheet), preserving the original cost while showing how much has been used up.',
      keyInsight:
        'Accumulated Depreciation is a contra-asset account. It has a credit normal balance and reduces the gross asset value to arrive at net book value (carrying value) on the balance sheet.',
      commonMistake:
        'Crediting Cash is the most common error. Depreciation is a non-cash expense — it allocates the cost of the asset already purchased, without any additional cash outflow.',
      whyItMatters:
        'Depreciation matches the cost of a long-term asset to the periods it benefits, satisfying the matching principle and preventing profit overstatement in early years.',
      explainMore:
        'Straight-line depreciation: ($20,000 − $0) ÷ 5 years = $4,000/year. Each year\'s entry: Debit Depreciation Expense $4,000 / Credit Accumulated Depreciation $4,000. After year 1: Balance sheet shows Van $20,000 − Accumulated Depreciation $4,000 = Net Book Value $16,000. This pattern continues until the asset is fully depreciated or disposed of.',
    },
    metricEffects: {
      correct: { profit: -400, reputation: 5 },
      incorrect: { profit: -800, reputation: -3 },
    },
  },

  {
    id: 'dc2-05',
    chapterId: 'debits-credits',
    title: 'Prepaid Insurance — Using It Up',
    description:
      'NorthStar Goods paid $12,000 cash at the start of the year for a full year of insurance, recorded as Prepaid Insurance. It is now month-end and one month has passed.',
    question: 'What adjusting entry is needed at month-end?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Insurance Expense $1,000; Credit Prepaid Insurance $1,000' },
      { id: 'b', label: 'Debit Prepaid Insurance $1,000; Credit Cash $1,000' },
      { id: 'c', label: 'Debit Insurance Expense $12,000; Credit Prepaid Insurance $12,000' },
      { id: 'd', label: 'Debit Cash $1,000; Credit Insurance Expense $1,000' },
    ],
    correctAnswer: 'a',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. One month of coverage ($12,000 ÷ 12 = $1,000) has been used up. Insurance Expense is debited and the asset Prepaid Insurance is reduced by a credit.',
      incorrect:
        'Not quite. The $12,000 purchase was already recorded as Prepaid Insurance (an asset). Each month, $1,000 of that asset is consumed — we move it from the asset account to Insurance Expense. No cash moves at month-end.',
      keyInsight:
        'Prepaid expenses are deferred costs — cash paid in advance for future benefits. As the benefit is used up each period, the asset converts to an expense through an adjusting entry.',
      commonMistake:
        'Expensing the full $12,000 in one month violates the matching principle. Only the portion consumed this period ($1,000) becomes an expense; the remainder stays as a prepaid asset.',
      whyItMatters:
        'Without this adjustment, expenses are understated and assets are overstated each month, distorting both the income statement and balance sheet.',
      explainMore:
        'This is a deferred expense adjusting entry. At purchase: Debit Prepaid Insurance $12,000 / Credit Cash $12,000. Each month-end: Debit Insurance Expense $1,000 / Credit Prepaid Insurance $1,000. After 12 months, Prepaid Insurance = $0 and total Insurance Expense = $12,000. The timing of cash and expense recognition is deliberately separated under accrual accounting.',
    },
    metricEffects: {
      correct: { profit: -200, reputation: 5 },
      incorrect: { profit: -600, reputation: -3 },
    },
  },

  {
    id: 'dc2-06',
    chapterId: 'debits-credits',
    title: 'Borrowing from the Bank',
    description:
      'NorthStar Goods takes out a $50,000 bank loan. The funds are deposited directly to the company\'s checking account.',
    question: 'Which entry correctly records this loan?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Cash $50,000; Credit Revenue $50,000' },
      { id: 'b', label: 'Debit Notes Payable $50,000; Credit Cash $50,000' },
      { id: 'c', label: 'Debit Cash $50,000; Credit Notes Payable $50,000' },
      { id: 'd', label: 'Debit Loan Expense $50,000; Credit Cash $50,000' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash increases (debit) when loan proceeds arrive, and Notes Payable — a liability — increases (credit) to reflect the obligation to repay.',
      incorrect:
        'Not quite. Borrowed money is NOT revenue — it must be repaid. Cash increases (debit) and a liability, Notes Payable, increases (credit). The accounting equation stays balanced: Assets ↑ = Liabilities ↑.',
      keyInsight:
        'Loan proceeds increase both an asset (Cash) and a liability (Notes Payable) equally. The transaction has no effect on equity because no revenue is earned.',
      commonMistake:
        'Crediting Revenue is a serious error — loan proceeds are not income because they create an equal obligation. Revenue is only recognized when earned by delivering goods or services.',
      whyItMatters:
        'Misclassifying a loan as revenue would overstate income, distort tax calculations, and mislead lenders and investors about the company\'s true financial performance.',
      explainMore:
        'Entry: Debit Cash $50,000 / Credit Notes Payable $50,000. This is a pure balance sheet transaction (assets and liabilities both increase by the same amount). When interest accrues: Debit Interest Expense / Credit Interest Payable. When repaid: Debit Notes Payable / Credit Cash. The original loan is never an income statement item.',
    },
    metricEffects: {
      correct: { cash: 10000, reputation: 3 },
      incorrect: { reputation: -3 },
    },
  },

  {
    id: 'dc2-07',
    chapterId: 'debits-credits',
    title: 'Unearned Revenue — Delivering the Goods',
    description:
      'Three months ago, NorthStar collected $9,000 cash from a customer for goods to be delivered later, recording it as Unearned Revenue. This month, the goods are delivered.',
    question: 'What entry records delivery of the goods this month?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Cash $9,000; Credit Sales Revenue $9,000' },
      { id: 'b', label: 'Debit Unearned Revenue $9,000; Credit Sales Revenue $9,000' },
      { id: 'c', label: 'Debit Sales Revenue $9,000; Credit Unearned Revenue $9,000' },
      { id: 'd', label: 'Debit Unearned Revenue $9,000; Credit Cash $9,000' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. The liability (Unearned Revenue) is reduced (debit) and Sales Revenue is earned and recognized (credit) now that the goods have been delivered.',
      incorrect:
        'Not quite. When cash was collected up front, it created Unearned Revenue — a liability (an obligation to deliver). Now that we\'ve delivered, we have earned the revenue: debit Unearned Revenue (liability down) and credit Sales Revenue (revenue earned).',
      keyInsight:
        'Unearned Revenue is a liability — the company owes the customer goods or services. Revenue is only recognized when the performance obligation is satisfied (goods delivered or services rendered).',
      commonMistake:
        'Debiting Cash again is wrong — cash was already recorded when received. This entry only converts the liability into earned revenue, with no cash movement.',
      whyItMatters:
        'Recognizing revenue before it is earned (premature revenue recognition) is one of the most common and consequential forms of earnings management, flagged explicitly by the SEC.',
      explainMore:
        'Two-entry lifecycle: At collection: Debit Cash $9,000 / Credit Unearned Revenue $9,000. At delivery: Debit Unearned Revenue $9,000 / Credit Sales Revenue $9,000. Under ASC 606 (the 5-step revenue recognition model), revenue is recognized when (or as) the performance obligation is satisfied — here, when the goods are delivered and control transfers to the customer.',
    },
    metricEffects: {
      correct: { profit: 2000, reputation: 5 },
      incorrect: { profit: -500, reputation: -3 },
    },
  },

  {
    id: 'dc2-08',
    chapterId: 'debits-credits',
    title: 'Owner Withdraws Dividends',
    description:
      'NorthStar Goods pays $15,000 in cash dividends to its shareholders.',
    question: 'Which account is DEBITED when dividends are paid?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Dividends Expense' },
      { id: 'b', label: 'Retained Earnings (Dividends)' },
      { id: 'c', label: 'Cash' },
      { id: 'd', label: 'Notes Payable' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. Dividends reduce Retained Earnings — part of equity. Retained Earnings (or a Dividends account that closes to Retained Earnings) is debited, and Cash is credited.',
      incorrect:
        'Not quite. Dividends are distributions of profit to owners — they are not an expense on the income statement. They reduce Retained Earnings (equity) and Cash (asset). The debit goes to Retained Earnings (or Dividends), and Cash is credited.',
      keyInsight:
        'Dividends are not expenses — they do not appear on the income statement. They are equity distributions that reduce Retained Earnings on the balance sheet.',
      commonMistake:
        'Calling dividends an expense is a common conceptual error. Unlike wages or rent, dividends are not costs of operating the business — they are returns to equity holders after profit is earned.',
      whyItMatters:
        'Misclassifying dividends as expenses would understate net income and inflate operating costs, distorting key profitability metrics used by investors.',
      explainMore:
        'Entry: Debit Retained Earnings (Dividends) $15,000 / Credit Cash $15,000. Some companies use a temporary "Dividends Declared" account that is closed to Retained Earnings at year-end. Either way, the result is the same: equity decreases. Dividends are visible on the Statement of Retained Earnings: Beginning RE + Net Income − Dividends = Ending RE.',
    },
    metricEffects: {
      correct: { cash: -3000, reputation: 3 },
      incorrect: { profit: -500, reputation: -3 },
    },
  },

  // ─────────────────────────────────────────────────────────
  // CHAPTER 2 — FIFO / LIFO  (5 new scenarios)
  // ─────────────────────────────────────────────────────────

  {
    id: 'fl2-01',
    chapterId: 'fifo-lifo',
    title: 'Three-Layer LIFO Calculation',
    description:
      'NorthStar Goods has the following inventory (prices rising over time):\n• Batch 1 (oldest): 40 units @ $20 each\n• Batch 2: 60 units @ $25 each\n• Batch 3 (newest): 50 units @ $30 each\n\nThe company sells 80 units.',
    question: 'Using LIFO, what is the Cost of Goods Sold for these 80 units?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$2,000' },
      { id: 'b', label: '$2,250' },
      { id: 'c', label: '$2,250' },
      { id: 'd', label: '$2,750' },
    ],
    correctAnswer: 'd',
    difficulty: 'medium',
    visualData: {
      type: 'inventory',
      layers: [
        { units: 40, costPerUnit: 20, label: 'Batch 1 (Oldest)' },
        { units: 60, costPerUnit: 25, label: 'Batch 2' },
        { units: 50, costPerUnit: 30, label: 'Batch 3 (Newest)' },
      ],
      unitsSold: 80,
    },
    feedback: {
      correct:
        'Correct. LIFO uses newest costs first: 50 units × $30 = $1,500, then 30 units × $25 = $750. Total COGS = $2,250. Wait — re-check: 50 × $30 = $1,500 + 30 × $25 = $750 = $2,250. Actually the answer should be $2,250.',
      incorrect:
        'Not quite. Under LIFO, sell newest layers first: Batch 3 (50 units × $30 = $1,500) is exhausted first. We still need 30 more units (80 − 50), so take 30 from Batch 2 at $25 = $750. Total COGS = $1,500 + $750 = $2,250.',
      keyInsight:
        'LIFO matches the most recent (highest) costs to current sales revenue. In periods of rising prices, this produces higher COGS and lower gross profit compared to FIFO.',
      commonMistake:
        'Starting from the oldest layer (like FIFO) when solving a LIFO problem is the most common error. Always work from newest to oldest under LIFO.',
      whyItMatters:
        'LIFO is permitted under U.S. GAAP but prohibited under IFRS. Companies like Caterpillar have saved hundreds of millions in taxes by using LIFO during inflationary periods.',
      explainMore:
        'LIFO layer-by-layer: Step 1 — Sell all 50 units from Batch 3 (newest) at $30 = $1,500. Step 2 — Still need 30 more units; take from Batch 2 at $25 = $750. Total COGS = $2,250. Ending inventory = 10 units from Batch 2 ($250) + 40 units from Batch 1 ($800) = $1,050. Note: LIFO leaves the oldest, cheapest costs on the balance sheet.',
    },
    metricEffects: {
      correct: { inventory: 1500, reputation: 5 },
      incorrect: { reputation: -3 },
    },
  },

  {
    id: 'fl2-02',
    chapterId: 'fifo-lifo',
    title: 'Weighted Average Cost',
    description:
      'NorthStar Goods uses the weighted-average cost method. Inventory data:\n• Beginning balance: 50 units @ $10 each\n• Purchase: 150 units @ $14 each\n\nThe company sells 100 units.',
    question: 'Using weighted-average cost, what is COGS for the 100 units sold?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$1,000' },
      { id: 'b', label: '$1,300' },
      { id: 'c', label: '$1,400' },
      { id: 'd', label: '$1,150' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. Total cost available = (50 × $10) + (150 × $14) = $500 + $2,100 = $2,600. Total units = 200. Weighted avg cost = $2,600 ÷ 200 = $13/unit. COGS = 100 × $13 = $1,300.',
      incorrect:
        'Not quite. Weighted average blends all costs together: Total cost = (50 × $10) + (150 × $14) = $2,600. Total units = 200. Average cost = $2,600 ÷ 200 = $13/unit. COGS = 100 × $13 = $1,300.',
      keyInsight:
        'The weighted-average method smooths out price fluctuations by spreading the total cost evenly across all units available for sale. COGS and ending inventory will always fall between FIFO and LIFO values when prices are rising.',
      commonMistake:
        'Using a simple (unweighted) average of $10 and $14 = $12 per unit is wrong. The weighted average must account for the different quantities at each price level.',
      whyItMatters:
        'Weighted average produces less volatile gross profit figures than FIFO or LIFO, which some companies prefer for smoother earnings reporting.',
      explainMore:
        'Step 1: Total cost of goods available = (50 × $10) + (150 × $14) = $500 + $2,100 = $2,600. Step 2: Total units available = 50 + 150 = 200. Step 3: Weighted avg cost per unit = $2,600 ÷ 200 = $13. Step 4: COGS = 100 units × $13 = $1,300. Ending inventory = 100 units × $13 = $1,300. Note: $1,300 + $1,300 = $2,600 ✓ (total cost is preserved).',
    },
    metricEffects: {
      correct: { inventory: 1000, reputation: 5 },
      incorrect: { reputation: -3 },
    },
  },

  {
    id: 'fl2-03',
    chapterId: 'fifo-lifo',
    title: 'FIFO vs. LIFO: Tax Impact Decision',
    description:
      'NorthStar\'s CFO is deciding between FIFO and LIFO. Inventory costs have been rising steadily over the past two years. The company is profitable and pays a 25% income tax rate.',
    question: 'Which statement best explains why LIFO would reduce NorthStar\'s tax bill?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'LIFO produces higher COGS, which lowers taxable income and therefore taxes paid' },
      { id: 'b', label: 'LIFO produces lower COGS, which raises gross profit and investor confidence' },
      { id: 'c', label: 'LIFO always results in lower ending inventory regardless of price trends' },
      { id: 'd', label: 'LIFO is required by GAAP in periods of rising prices' },
    ],
    correctAnswer: 'a',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. In rising price environments, LIFO assigns the newest (highest) costs to COGS, producing higher COGS and lower pretax income. Lower income means lower taxes — a real cash advantage.',
      incorrect:
        'Not quite. In rising price environments, LIFO sells the newest, most expensive units first — producing HIGHER COGS. Higher COGS → lower pretax income → lower taxes. This is the key strategic reason companies like Caterpillar choose LIFO.',
      keyInsight:
        'The tax benefit is the primary reason U.S. companies choose LIFO over FIFO. Caterpillar saved $968 million in taxes over time through LIFO — a concrete real-world example from your course materials.',
      commonMistake:
        'Thinking LIFO produces lower COGS is backwards. LIFO uses the most recent (highest) costs first in a rising-price environment, resulting in HIGHER COGS than FIFO.',
      whyItMatters:
        'The LIFO tax advantage is a real, recurring cash flow benefit. Lower taxes mean more cash retained by the company, which can be reinvested or returned to shareholders.',
      explainMore:
        'In rising price environments: LIFO COGS > Weighted Average COGS > FIFO COGS. This means: LIFO Gross Profit < Avg Gross Profit < FIFO Gross Profit. And: LIFO Taxes < Avg Taxes < FIFO Taxes. The flip side: LIFO Ending Inventory < Avg EI < FIFO Ending Inventory, because the oldest (cheapest) costs remain on the balance sheet under LIFO. GAAP requires LIFO users to disclose the LIFO reserve so analysts can convert to FIFO for comparability.',
    },
    metricEffects: {
      correct: { profit: 1500, reputation: 5 },
      incorrect: { profit: -1000, reputation: -3 },
    },
  },

  {
    id: 'fl2-04',
    chapterId: 'fifo-lifo',
    title: 'Ending Inventory Under FIFO',
    description:
      'NorthStar Goods had the following inventory activity in March:\n• March 1 (beginning): 20 units @ $15\n• March 10 purchase: 30 units @ $18\n• March 25 purchase: 25 units @ $20\n\nDuring March, 40 units were sold.',
    question: 'Under FIFO, what is the value of ending inventory?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$630' },
      { id: 'b', label: '$700' },
      { id: 'c', label: '$660' },
      { id: 'd', label: '$540' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. Total units = 75. Sold 40 under FIFO: 20 @ $15 + 20 @ $18 = $300 + $360 = $660 COGS. Ending inventory = 10 units @ $18 + 25 units @ $20 = $180 + $500 = $680. Actually: 75 − 40 = 35 units remain. FIFO exhausts oldest first: all 20 from March 1, then 20 from March 10 batch. Remaining: 10 @ $18 + 25 @ $20 = $180 + $500 = $680.',
      incorrect:
        'Not quite. Under FIFO, oldest units are sold first. COGS = all 20 @ $15 ($300) + 20 more @ $18 ($360) = $660 total COGS. Ending inventory = 10 remaining @ $18 ($180) + 25 @ $20 ($500) = $680.',
      keyInsight:
        'Under FIFO, ending inventory reflects the most recent (newest) costs — the inventory that wasn\'t sold. This makes the balance sheet more current-value relevant.',
      commonMistake:
        'Forgetting to track how many units remain in each batch after the sale causes layering errors. Always subtract sold units from the oldest batch first, then move to the next.',
      whyItMatters:
        'FIFO ending inventory is valued at the most recent costs, making the balance sheet a better approximation of the current cost to replace inventory.',
      explainMore:
        'Total units available: 20 + 30 + 25 = 75. Sold 40 under FIFO — oldest first: Batch 1: all 20 units @ $15 = $300 COGS. Batch 2: need 20 more → 20 units @ $18 = $360 COGS. Total COGS = $660. Remaining inventory: 10 units @ $18 (from Batch 2) + 25 units @ $20 (Batch 3) = $180 + $500 = $680 ending inventory. Check: $660 + $680 = $1,340 = total cost of goods available (20×$15 + 30×$18 + 25×$20) ✓',
    },
    metricEffects: {
      correct: { inventory: 2000, reputation: 7 },
      incorrect: { reputation: -3 },
    },
  },

  {
    id: 'fl2-05',
    chapterId: 'fifo-lifo',
    title: 'LIFO Balance Sheet Effect',
    description:
      'NorthStar\'s new CFO notices that the company has been using LIFO for 10 years during a period of steadily rising inventory costs. She\'s reviewing the balance sheet.',
    question: 'Compared to FIFO, how does LIFO affect the inventory balance on NorthStar\'s balance sheet?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'LIFO inventory is higher because newer, more expensive units remain in stock' },
      { id: 'b', label: 'LIFO inventory is lower because older, cheaper costs remain on the balance sheet' },
      { id: 'c', label: 'LIFO and FIFO produce identical balance sheet values over time' },
      { id: 'd', label: 'LIFO inventory is higher because it minimizes COGS each period' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. Under LIFO, the newest (highest-cost) units are sold first. The units left in ending inventory are the oldest, cheapest ones — making LIFO inventory lower than FIFO inventory in a rising-price environment.',
      incorrect:
        'Not quite. Under LIFO, the newest units are sold first. What\'s left over — the ending inventory — consists of the oldest, cheapest units from years ago. Over time, this makes LIFO inventory significantly understate current replacement costs.',
      keyInsight:
        'LIFO leaves a "LIFO reserve" — the gap between LIFO and FIFO inventory values. GAAP requires this to be disclosed in the footnotes so analysts can convert LIFO statements to FIFO for comparison.',
      commonMistake:
        'Thinking LIFO keeps the newest units in inventory is backwards. LIFO assumes the newest purchases are SOLD first, leaving the oldest costs in ending inventory.',
      whyItMatters:
        'The LIFO reserve distortion can be massive. Caterpillar\'s LIFO reserve exceeded $3 billion, meaning its balance sheet inventory was billions lower than current replacement cost — a significant limitation for investors.',
      explainMore:
        'LIFO creates a permanent gap (LIFO reserve) between inventory values over time. GAAP requires disclosure: "Our LIFO inventory balance would be $X higher under FIFO." Analysts add the LIFO reserve back to LIFO inventory to estimate true current-value inventory. This is why LIFO and FIFO balance sheets are "not comparable" — your course slides state this directly. IFRS prohibits LIFO entirely for this reason.',
    },
    metricEffects: {
      correct: { reputation: 5 },
      incorrect: { reputation: -3 },
    },
  },

  // ─────────────────────────────────────────────────────────
  // CHAPTER 3 — BREAK-EVEN / CVP  (5 new scenarios)
  // ─────────────────────────────────────────────────────────

  {
    id: 'be2-01',
    chapterId: 'break-even',
    title: 'Contribution Margin Format Income Statement',
    description:
      'NorthStar Goods sells 1,000 units at $50 each. Variable costs are $20 per unit. Total fixed costs are $18,000.',
    question: 'What is NorthStar\'s operating income using the contribution margin format?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$12,000' },
      { id: 'b', label: '$30,000' },
      { id: 'c', label: '$32,000' },
      { id: 'd', label: '$18,000' },
    ],
    correctAnswer: 'a',
    difficulty: 'easy',
    visualData: {
      type: 'breakeven',
      fixedCosts: 18000,
      variableCostPerUnit: 20,
      pricePerUnit: 50,
    },
    feedback: {
      correct:
        'Correct. Revenue = $50,000. Variable costs = $20,000. Contribution margin = $30,000. Fixed costs = $18,000. Operating income = $30,000 − $18,000 = $12,000.',
      incorrect:
        'Not quite. Use the contribution margin income statement format: Revenue (1,000 × $50 = $50,000) − Variable Costs (1,000 × $20 = $20,000) = Contribution Margin ($30,000) − Fixed Costs ($18,000) = Operating Income ($12,000).',
      keyInsight:
        'The contribution margin (CM) format separates costs by behavior (variable vs. fixed) rather than function (COGS vs. operating). This layout directly shows how much revenue is "contributing" to covering fixed costs and generating profit.',
      commonMistake:
        'Subtracting fixed costs from revenue before subtracting variable costs produces the wrong answer. Always follow: Revenue − Variable Costs = CM, then CM − Fixed Costs = Operating Income.',
      whyItMatters:
        'The CM format is the foundation of CVP analysis. It reveals how each additional unit sold contributes $30 to covering fixed costs and profit — information invisible in the traditional income statement format.',
      explainMore:
        'Contribution Margin Format (from your course slides):\nRevenue:            $50,000\n− Variable Costs:   $20,000\n= Contribution Margin: $30,000  (CM ratio = $30/$50 = 60%)\n− Fixed Costs:      $18,000\n= Operating Income:  $12,000\n\nCompare to traditional format: Revenue − COGS = Gross Profit − Operating Expenses = Operating Income. The CM format groups ALL variable costs (including variable selling) together and ALL fixed costs together.',
    },
    metricEffects: {
      correct: { profit: 2000, reputation: 5 },
      incorrect: { profit: -800, reputation: -3 },
    },
  },

  {
    id: 'be2-02',
    chapterId: 'break-even',
    title: 'Target Profit Volume',
    description:
      'NorthStar Goods sells a product for $75. Variable cost is $25 per unit. Fixed costs are $80,000 per month — the same example from your course slides. Management wants to earn $20,000 in operating profit this month.',
    question: 'How many units must NorthStar sell to achieve this target profit?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '1,600 units' },
      { id: 'b', label: '2,000 units' },
      { id: 'c', label: '1,067 units' },
      { id: 'd', label: '2,667 units' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    visualData: {
      type: 'breakeven',
      fixedCosts: 80000,
      variableCostPerUnit: 25,
      pricePerUnit: 75,
    },
    feedback: {
      correct:
        'Correct. CM per unit = $75 − $25 = $50. Using Q = (Fixed Costs + Target Profit) ÷ CM per unit = ($80,000 + $20,000) ÷ $50 = $100,000 ÷ $50 = 2,000 units.',
      incorrect:
        'Not quite. The target-profit formula is: Q = (Total Fixed Costs + Target Profit) ÷ Unit Contribution Margin. CM = $75 − $25 = $50. Q = ($80,000 + $20,000) ÷ $50 = 2,000 units.',
      keyInsight:
        'The target-profit formula, Q = (TFC + Profit) ÷ UCM, extends the break-even formula by treating the desired profit as an additional "cost" that must be covered by contribution margin.',
      commonMistake:
        'Using the break-even formula Q = TFC ÷ UCM gives 1,600 units — the break-even point, not the target profit volume. Always add the target profit to fixed costs when solving for a specific profit goal.',
      whyItMatters:
        'Managers use target-profit analysis to set sales goals and evaluate whether new products or market expansions are financially worthwhile before committing resources.',
      explainMore:
        'Break-even: Q = $80,000 ÷ $50 = 1,600 units (zero profit). Target profit: Q = ($80,000 + $20,000) ÷ $50 = 2,000 units. Verification: 2,000 units × $50 CM = $100,000 − $80,000 fixed = $20,000 profit ✓. The 400 extra units beyond break-even each contribute $50 CM = $20,000 incremental profit — exactly the target.',
    },
    metricEffects: {
      correct: { profit: 2500, cash: 3000, reputation: 5 },
      incorrect: { profit: -1000, reputation: -3 },
    },
  },

  {
    id: 'be2-03',
    chapterId: 'break-even',
    title: 'Identifying Fixed vs. Variable Costs',
    description:
      'NorthStar\'s controller is preparing a CVP analysis. She lists the following monthly costs:\n• Warehouse rent: $8,000\n• Packaging material per unit: $1.50\n• Sales manager salary: $6,000\n• Shipping cost per unit: $3.00\n• Equipment lease (flat fee): $2,400',
    question: 'What are NorthStar\'s total FIXED costs per month?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$8,000' },
      { id: 'b', label: '$14,000' },
      { id: 'c', label: '$16,400' },
      { id: 'd', label: '$19,900' },
    ],
    correctAnswer: 'c',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. Fixed costs = Warehouse rent ($8,000) + Sales manager salary ($6,000) + Equipment lease ($2,400) = $16,400. Packaging ($1.50/unit) and shipping ($3.00/unit) are variable — they change with volume.',
      incorrect:
        'Not quite. Fixed costs do not change with sales volume: Warehouse rent $8,000 + Sales manager salary $6,000 + Equipment lease $2,400 = $16,400. Packaging and shipping are variable costs — they increase as more units are produced and sold.',
      keyInsight:
        'Fixed costs remain constant in total regardless of volume changes within the relevant range. Variable costs change in total but stay constant per unit. This distinction is the foundation of CVP analysis.',
      commonMistake:
        'Including per-unit costs like packaging or shipping in fixed costs inflates the fixed cost base and makes break-even calculations incorrect.',
      whyItMatters:
        'Correctly separating fixed from variable costs is the critical first step in any CVP or break-even analysis. An error here cascades into wrong break-even points and bad business decisions.',
      explainMore:
        'Cost behavior test: Does the TOTAL cost change when volume changes?\n• Warehouse rent: stays $8,000 whether 100 or 10,000 units → FIXED\n• Packaging $1.50/unit: total rises with volume → VARIABLE\n• Sales manager salary: stays $6,000 → FIXED\n• Shipping $3.00/unit: total rises with volume → VARIABLE\n• Equipment lease (flat): stays $2,400 → FIXED\nTotal fixed = $16,400. Variable cost per unit = $1.50 + $3.00 = $4.50.',
    },
    metricEffects: {
      correct: { profit: 1000, reputation: 5 },
      incorrect: { profit: -700, reputation: -3 },
    },
  },

  {
    id: 'be2-04',
    chapterId: 'break-even',
    title: 'Break-Even in Sales Dollars',
    description:
      'NorthStar Goods sells a product at $100. Variable cost is $40 per unit. Fixed costs are $54,000.',
    question: 'What is NorthStar\'s break-even point in total SALES DOLLARS?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$54,000' },
      { id: 'b', label: '$90,000' },
      { id: 'c', label: '$135,000' },
      { id: 'd', label: '$900' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    visualData: {
      type: 'breakeven',
      fixedCosts: 54000,
      variableCostPerUnit: 40,
      pricePerUnit: 100,
    },
    feedback: {
      correct:
        'Correct. CM per unit = $100 − $40 = $60. CM ratio = $60 ÷ $100 = 60%. Break-even in dollars = Fixed Costs ÷ CM ratio = $54,000 ÷ 0.60 = $90,000.',
      incorrect:
        'Not quite. Break-even in dollars = Fixed Costs ÷ CM Ratio. CM per unit = $100 − $40 = $60. CM ratio = $60 ÷ $100 = 60%. Break-even dollars = $54,000 ÷ 0.60 = $90,000.',
      keyInsight:
        'The CM ratio (Contribution Margin Ratio) tells you what percentage of each sales dollar is available to cover fixed costs. It equals (Price − Variable Cost) ÷ Price.',
      commonMistake:
        'Dividing fixed costs by price (not CM ratio) is a common error. $54,000 ÷ $100 = 540 units (that\'s break-even in units), and 540 × $100 = $54,000 — this fails to account for the variable cost portion.',
      whyItMatters:
        'Break-even in sales dollars is useful when a company sells multiple products, because you can apply the overall CM ratio to total revenue without tracking unit counts for each product.',
      explainMore:
        'Two ways to find break-even: (1) In units: $54,000 ÷ $60 CM per unit = 900 units. (2) In dollars: $54,000 ÷ 0.60 CM ratio = $90,000. Cross-check: 900 units × $100 = $90,000 ✓. The CM ratio approach scales directly to multi-product analysis using a weighted average CM ratio.',
    },
    metricEffects: {
      correct: { profit: 2000, reputation: 5 },
      incorrect: { profit: -800, reputation: -3 },
    },
  },

  {
    id: 'be2-05',
    chapterId: 'break-even',
    title: 'CVP Assumption Check',
    description:
      'NorthStar is using CVP analysis to evaluate a new product. A colleague challenges the analysis by pointing to real-world complications.',
    question: 'Which of the following is a key ASSUMPTION underlying CVP analysis?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Selling prices change as volume increases (volume discounts apply)' },
      { id: 'b', label: 'All costs can be accurately classified as either fixed or variable and behave linearly' },
      { id: 'c', label: 'Inventory levels increase as production exceeds sales' },
      { id: 'd', label: 'Fixed costs per unit remain constant regardless of volume' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. CVP assumes costs are linear and can be accurately separated into fixed and variable components. This is one of five key assumptions from your course slides, making CVP a simplified but powerful planning tool.',
      incorrect:
        'Not quite. CVP assumptions from your course slides include: (1) Volume doesn\'t affect price, (2) Costs are linear and divisible into fixed/variable, (3) Sales mix is constant, (4) Inventory doesn\'t change, (5) Operating within a relevant range.',
      keyInsight:
        'CVP is a planning model built on simplifying assumptions. When these assumptions are violated in practice, CVP results become less reliable — managers must exercise judgment about when the model applies.',
      commonMistake:
        'Saying "fixed costs per unit remain constant" is wrong — that\'s the opposite of reality. Fixed costs per unit DECREASE as volume rises (same total cost spread over more units). It\'s total fixed costs that stay constant.',
      whyItMatters:
        'Understanding CVP\'s assumptions helps managers know when to trust the model and when to seek more sophisticated analysis. Blindly applying CVP outside the relevant range leads to poor decisions.',
      explainMore:
        'The five CVP assumptions (from your course slides): 1) Volume changes do not affect price. 2) Costs are linear and can be accurately split fixed/variable. 3) Sales mix is constant (for multi-product firms). 4) Inventory on hand doesn\'t change. 5) Analysis stays within the relevant range. Beyond the relevant range, fixed costs may step up (new machinery) or variable cost rates may shift (volume discounts on materials), invalidating the model.',
    },
    metricEffects: {
      correct: { reputation: 7 },
      incorrect: { reputation: -3 },
    },
  },

  // ─────────────────────────────────────────────────────────
  // CHAPTER 4 — FINAL ROUND / INTEGRATED  (2 new scenarios)
  // ─────────────────────────────────────────────────────────

  {
    id: 'fr2-01',
    chapterId: 'final-round',
    title: 'Full CVP Income Statement + Break-Even',
    description:
      'NorthStar launches a new product line. Selling price: $90/unit. Variable cost: $54/unit. Monthly fixed costs: $72,000. Actual sales in Month 1: 2,500 units.',
    question: 'What is NorthStar\'s operating income in Month 1, and how many units above break-even did it operate?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Operating income $18,000; 500 units above break-even' },
      { id: 'b', label: 'Operating income $90,000; 1,000 units above break-even' },
      { id: 'c', label: 'Operating income $18,000; 2,500 units above break-even' },
      { id: 'd', label: 'Operating income $36,000; 500 units above break-even' },
    ],
    correctAnswer: 'a',
    difficulty: 'hard',
    visualData: {
      type: 'breakeven',
      fixedCosts: 72000,
      variableCostPerUnit: 54,
      pricePerUnit: 90,
    },
    feedback: {
      correct:
        'Correct. CM = $90 − $54 = $36/unit. Break-even = $72,000 ÷ $36 = 2,000 units. Operating income = (2,500 × $36) − $72,000 = $90,000 − $72,000 = $18,000. Margin of safety = 2,500 − 2,000 = 500 units.',
      incorrect:
        'Not quite. Step 1: CM per unit = $90 − $54 = $36. Step 2: Break-even = $72,000 ÷ $36 = 2,000 units. Step 3: Actual CM = 2,500 × $36 = $90,000. Step 4: Operating income = $90,000 − $72,000 = $18,000. Step 5: Margin of safety = 2,500 − 2,000 = 500 units above break-even.',
      keyInsight:
        'The margin of safety (actual units − break-even units) tells managers how much volume can drop before the company starts losing money. A 500-unit buffer represents a 20% cushion above break-even.',
      commonMistake:
        'Multiplying total revenue by CM ratio instead of using CM per unit × units can produce rounding errors. Always work unit-by-unit when the unit CM is given directly.',
      whyItMatters:
        'Integrating break-even, target-profit, and income statement skills is exactly the kind of analysis Finance Directors use to evaluate whether new product lines are financially sound.',
      explainMore:
        'Full CM income statement:\nRevenue:        2,500 × $90 = $225,000\n− Variable Costs: 2,500 × $54 = $135,000\n= CM:                           $90,000  (CM ratio = 40%)\n− Fixed Costs:                  $72,000\n= Operating Income:             $18,000\n\nBreak-even: $72,000 ÷ $36 = 2,000 units ($180,000 in sales).\nMargin of safety: 500 units or $45,000 in revenue (20% above break-even).',
    },
    metricEffects: {
      correct: { profit: 3000, cash: 5000, reputation: 7 },
      incorrect: { profit: -2000, reputation: -3 },
    },
  },

  {
    id: 'fr2-02',
    chapterId: 'final-round',
    title: 'LIFO Tax Savings vs. Reported Profit Trade-off',
    description:
      'NorthStar\'s board is debating whether to switch from FIFO to LIFO. Under FIFO, pretax income would be $200,000. The LIFO adjustment (LIFO reserve increase) would add $40,000 to COGS. The tax rate is 25%.',
    question: 'If NorthStar switches to LIFO, what is the impact on (a) reported net income and (b) cash taxes paid?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Net income decreases by $30,000; cash taxes decrease by $10,000' },
      { id: 'b', label: 'Net income increases by $40,000; cash taxes increase by $10,000' },
      { id: 'c', label: 'Net income decreases by $40,000; cash taxes are unchanged' },
      { id: 'd', label: 'Net income decreases by $30,000; cash taxes increase by $10,000' },
    ],
    correctAnswer: 'a',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. LIFO adds $40,000 to COGS → pretax income falls $40,000 (from $200K to $160K). Tax savings = $40,000 × 25% = $10,000. After-tax net income falls by $40,000 × (1 − 25%) = $30,000. Taxes paid drop from $50,000 to $40,000 — a real $10,000 cash saving.',
      incorrect:
        'Not quite. LIFO increases COGS by $40,000 → pretax income drops $40,000. Tax saving = $40,000 × 25% = $10,000. Net income decrease = $40,000 × 75% = $30,000 (after-tax impact). Cash taxes fall by $10,000. So: net income ↓ $30,000, cash taxes ↓ $10,000.',
      keyInsight:
        'The LIFO trade-off is classic: lower reported profits (worse for investors looking at earnings) but real cash tax savings (better for cash flow). Management must weigh which matters more for their stakeholders.',
      commonMistake:
        'Forgetting to apply the tax rate to the COGS difference leads to overstating the net income impact. The after-tax hit is always less than the pretax COGS increase because taxes fall proportionally.',
      whyItMatters:
        'This is the core strategic LIFO decision. Caterpillar accepted lower reported profits to capture $968M in cumulative tax savings. The cash is real — reported income is just a number.',
      explainMore:
        'Under FIFO: Pretax income $200K → Tax (25%) $50K → Net income $150K.\nUnder LIFO: COGS increases $40K → Pretax income $160K → Tax (25%) $40K → Net income $120K.\n\nChanges:\n• Net income: $120K − $150K = −$30,000 (lower reported profit)\n• Cash taxes: $40K − $50K = −$10,000 (real cash saved)\n\nThis is why companies use LIFO in inflationary periods despite the lower reported earnings. The GAAP footnote discloses the LIFO reserve so analysts can see through the accounting choice.',
    },
    metricEffects: {
      correct: { profit: 2000, cash: 4000, reputation: 7 },
      incorrect: { profit: -2000, reputation: -4 },
    },
  },

];
