import type { Scenario, ChapterConfig, FormulaSection } from '../types/game';

const ch1Formulas: FormulaSection[] = [
  {
    title: 'Normal Balances',
    content: {
      type: 'table',
      headers: ['Account Type', 'Normal Balance', 'Increases with', 'Decreases with'],
      rows: [
        ['Asset',     'Debit',  'Debit',  'Credit'],
        ['Liability', 'Credit', 'Credit', 'Debit'],
        ['Equity',    'Credit', 'Credit', 'Debit'],
        ['Revenue',   'Credit', 'Credit', 'Debit'],
        ['Expense',   'Debit',  'Debit',  'Credit'],
      ],
    },
  },
];

const ch2Formulas: FormulaSection[] = [
  {
    title: 'Cost of Goods Sold (COGS)',
    content: {
      type: 'formulas',
      items: [
        {
          label: 'COGS — FIFO',
          expression: 'Cost of oldest units × Units sold',
          note: 'First In, First Out — oldest costs leave inventory first',
        },
        {
          label: 'COGS — LIFO',
          expression: 'Cost of newest units × Units sold',
          note: 'Last In, First Out — newest costs leave inventory first',
        },
      ],
    },
  },
  {
    title: 'Ending Inventory',
    content: {
      type: 'formulas',
      items: [
        {
          label: 'Ending Inventory',
          expression: 'Beginning Inventory + Purchases − COGS',
        },
        {
          label: 'Ending Inventory — FIFO',
          expression: 'Cost of newest (remaining) units',
          note: 'Under FIFO, ending inventory reflects most recent costs',
        },
        {
          label: 'Ending Inventory — LIFO',
          expression: 'Cost of oldest (remaining) units',
          note: 'Under LIFO, ending inventory reflects oldest costs',
        },
      ],
    },
  },
];

const ch3Formulas: FormulaSection[] = [
  {
    title: 'Contribution Margin',
    content: {
      type: 'formulas',
      items: [
        {
          label: 'Contribution Margin (CM)',
          expression: 'Price per Unit − Variable Cost per Unit',
        },
        {
          label: 'CM Ratio (CM%)',
          expression: 'CM per Unit ÷ Price per Unit',
          note: 'Expressed as a percentage',
        },
      ],
    },
  },
  {
    title: 'Break-Even Point',
    content: {
      type: 'formulas',
      items: [
        {
          label: 'Break-Even Units',
          expression: 'Fixed Costs ÷ CM per Unit',
          note: 'Units needed to cover all fixed costs',
        },
        {
          label: 'Break-Even Revenue',
          expression: 'Fixed Costs ÷ CM Ratio',
          note: 'Sales dollars needed to break even',
        },
      ],
    },
  },
];

export const chapters: ChapterConfig[] = [
  {
    id: 'debits-credits',
    title: 'Chapter 1: Debits & Credits',
    role: 'Junior Accountant',
    description:
      'You have just joined NorthStar Goods as a Junior Accountant. Your first assignment is to record the company\'s daily transactions in the general ledger. Every transaction affects at least two accounts — your job is to identify which accounts are debited and which are credited.',
    objectives: [
      'Understand the double-entry accounting system',
      'Identify the normal balance of each account type',
      'Correctly record common business transactions',
      'Recognize how journal entries affect the accounting equation',
    ],
    icon: '📒',
    formulas: ch1Formulas,
  },
  {
    id: 'fifo-lifo',
    title: 'Chapter 2: Inventory Costing',
    role: 'Inventory Manager',
    description:
      'Congratulations on your promotion. As Inventory Manager, you oversee how NorthStar Goods values its inventory and calculates the cost of goods sold. The method you choose — FIFO or LIFO — directly affects reported profits and taxes.',
    objectives: [
      'Distinguish between FIFO and LIFO cost flow assumptions',
      'Calculate cost of goods sold using each method',
      'Determine ending inventory value under FIFO and LIFO',
      'Understand the business implications of each method',
    ],
    icon: '📦',
    formulas: ch2Formulas,
  },
  {
    id: 'break-even',
    title: 'Chapter 3: Break-Even Analysis',
    role: 'Financial Analyst',
    description:
      'NorthStar Goods is evaluating new product lines and pricing strategies. As Financial Analyst, you will use break-even analysis to determine how many units must be sold to cover costs — and whether new ventures are financially viable.',
    objectives: [
      'Calculate break-even point in units and dollars',
      'Identify fixed costs versus variable costs',
      'Understand the contribution margin concept',
      'Apply break-even thinking to real business decisions',
    ],
    icon: '📊',
    formulas: ch3Formulas,
  },
  {
    id: 'final-round',
    title: 'Chapter 4: Executive Challenge',
    role: 'Finance Director',
    description:
      'You have been promoted to Finance Director. The CEO is relying on you to make high-stakes decisions that draw on everything you have learned. These scenarios combine debits and credits, inventory costing, and break-even analysis — with less guidance and higher stakes.',
    objectives: [
      'Integrate concepts from all three accounting areas',
      'Apply accounting knowledge to executive-level decisions',
      'Demonstrate independent analytical judgment',
      'Connect accounting choices to business outcomes',
    ],
    icon: '🏆',
    formulas: [...ch1Formulas, ...ch2Formulas, ...ch3Formulas],
  },
];

export const scenarios: Scenario[] = [
  // ─────────────────────────────────────────────
  // CHAPTER 1 — DEBITS & CREDITS (10 scenarios)
  // ─────────────────────────────────────────────
  {
    id: 'dc-01',
    reviewTip: 'When buying inventory on credit, debit Inventory (asset increases) and credit Accounts Payable (liability increases) — no cash involved yet.',
    chapterId: 'debits-credits',
    title: 'Purchasing Inventory on Credit',
    description:
      'NorthStar Goods purchases $12,000 worth of merchandise inventory from a supplier on account (no cash changes hands yet).',
    question: 'Which account is DEBITED in this transaction?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Accounts Payable' },
      { id: 'b', label: 'Inventory' },
      { id: 'c', label: 'Cash' },
      { id: 'd', label: 'Cost of Goods Sold' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Inventory is an asset, and assets increase with a debit. Accounts Payable (a liability) is credited because we now owe the supplier.',
      incorrect:
        'Not quite. When we receive inventory, the Inventory account — an asset — increases. Assets increase with debits. Accounts Payable is credited because the obligation to pay the supplier goes up.',
      keyInsight:
        'The accounting equation always balances: Assets = Liabilities + Equity. Debiting Inventory (asset ↑) and crediting Accounts Payable (liability ↑) keeps both sides in balance.',
      commonMistake:
        'Many people confuse which side of the transaction gets the debit. Remember: we received something of value (inventory), so the asset account is debited.',
      whyItMatters:
        'Mis-recording purchases distorts both the balance sheet and cost of goods sold, leading to incorrect profit figures and poor purchasing decisions.',
      explainMore:
        'Double-entry accounting requires every transaction to have equal debits and credits. Assets and expenses have debit normal balances — they increase with debits and decrease with credits. Liabilities, equity, and revenues have credit normal balances — they increase with credits. Here, Inventory (asset) is debited for $12,000 and Accounts Payable (liability) is credited for $12,000.',
    },
    metricEffects: {
      correct: { inventory: 2000, reputation: 3 },
      incorrect: { reputation: -2 },
    },
  },
  {
    id: 'dc-02',
    reviewTip: 'Collecting a receivable converts one asset to another — debit Cash, credit Accounts Receivable — with no new revenue recognized.',
    chapterId: 'debits-credits',
    title: 'Receiving Customer Payment',
    description:
      'A customer pays NorthStar Goods $5,500 cash for an invoice that was previously recorded as Accounts Receivable.',
    question: 'Which set of accounts is correct for this cash collection?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Cash; Credit Revenue' },
      { id: 'b', label: 'Debit Accounts Receivable; Credit Cash' },
      { id: 'c', label: 'Debit Cash; Credit Accounts Receivable' },
      { id: 'd', label: 'Debit Revenue; Credit Cash' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash increases (debit) and Accounts Receivable decreases (credit) because the customer has now paid what they owed.',
      incorrect:
        'Not quite. Revenue was already recorded when the sale was made. This transaction only converts the receivable into cash — no new revenue is recognized.',
      keyInsight:
        'This is a balance sheet transaction only. Revenue was recognized at the time of sale. Collecting cash simply moves value from one asset (Receivable) to another (Cash).',
      commonMistake:
        'A frequent error is crediting Revenue when cash is received. Revenue is recognized when earned, not when cash arrives — this is the accrual principle.',
      whyItMatters:
        'Understanding when to recognize revenue versus when cash is collected is fundamental to accrual accounting and accurate financial reporting.',
      explainMore:
        'Under accrual accounting, revenue is recognized when earned (when goods or services are delivered), regardless of when cash is received. When the original sale was made, we debited Accounts Receivable and credited Revenue. Now that the customer pays, we debit Cash and credit Accounts Receivable — settling the obligation.',
    },
    metricEffects: {
      correct: { cash: 3000, reputation: 3 },
      incorrect: { reputation: -2 },
    },
  },
  {
    id: 'dc-03',
    reviewTip: 'A cash sale records revenue at selling price (debit Cash, credit Revenue), separate from the COGS entry (debit COGS, credit Inventory).',
    chapterId: 'debits-credits',
    title: 'Recording a Cash Sale',
    description:
      'NorthStar Goods sells $8,000 of merchandise for cash. The cost of the inventory sold was $5,000.',
    question: 'When recording the revenue portion of this sale, which entry is correct?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Revenue $8,000; Credit Cash $8,000' },
      { id: 'b', label: 'Debit Cash $8,000; Credit Revenue $8,000' },
      { id: 'c', label: 'Debit Inventory $8,000; Credit Revenue $8,000' },
      { id: 'd', label: 'Debit Cash $5,000; Credit Revenue $5,000' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash (asset) increases with a debit of $8,000, and Revenue (a credit-normal account) is credited for $8,000.',
      incorrect:
        'Not quite. Revenue has a credit normal balance — it increases with credits, not debits. Cash is the asset received, so it is debited.',
      keyInsight:
        'A cash sale requires two separate journal entries: one for the revenue (Debit Cash, Credit Revenue) and one for the cost (Debit COGS, Credit Inventory).',
      commonMistake:
        'Using the cost amount ($5,000) for the revenue entry is a common error. Revenue is always recorded at the selling price ($8,000).',
      whyItMatters:
        'Recording revenue at the correct amount is essential for accurate gross profit calculation. The difference between sales revenue and cost of goods sold is gross profit.',
      explainMore:
        'When a sale occurs, two things happen simultaneously: (1) the company earns revenue and receives an asset (cash), and (2) the company gives up inventory (an asset) and records the cost. The revenue entry: Debit Cash $8,000 / Credit Sales Revenue $8,000. The cost entry: Debit COGS $5,000 / Credit Inventory $5,000. Together, these entries show a gross profit of $3,000.',
    },
    metricEffects: {
      correct: { cash: 4000, profit: 2000, reputation: 3 },
      incorrect: { reputation: -2 },
    },
  },
  {
    id: 'dc-04',
    reviewTip: 'Expenses always increase with a debit; when paid immediately in cash, the entry is Debit Salaries Expense, Credit Cash.',
    chapterId: 'debits-credits',
    title: 'Paying Employee Salaries',
    description:
      'NorthStar Goods pays $15,000 in employee salaries in cash at the end of the month.',
    question: 'Which account is CREDITED in this transaction?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Salaries Expense' },
      { id: 'b', label: 'Cash' },
      { id: 'c', label: 'Accounts Payable' },
      { id: 'd', label: 'Retained Earnings' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash (an asset) decreases when salaries are paid, and assets decrease with credits. Salaries Expense is debited because it is increasing.',
      incorrect:
        'Not quite. When cash leaves the company, the Cash account decreases. Assets decrease with credits, so Cash is credited. Salaries Expense (an expense account) is debited because expenses increase with debits.',
      keyInsight:
        'Expenses always increase with debits. When you pay an expense with cash, you debit the expense and credit cash.',
      commonMistake:
        'Some learners credit Salaries Expense, thinking the company is "reducing" its expenses. But expenses increase with debits — paying them simply reduces cash.',
      whyItMatters:
        'Salary costs are often one of a company\'s largest expenses. Recording them correctly ensures the income statement shows accurate operating costs.',
      explainMore:
        'Expenses are the cost of generating revenue. They have debit normal balances, meaning they increase with debits. When NorthStar pays $15,000 in salaries, the entry is: Debit Salaries Expense $15,000 / Credit Cash $15,000. This reduces cash and increases expenses, which will reduce net income on the income statement.',
    },
    metricEffects: {
      correct: { cash: -1000, reputation: 3 },
      incorrect: { cash: -2000, reputation: -2 },
    },
  },
  {
    id: 'dc-05',
    reviewTip: 'Taking out a loan increases both Cash (debit) and Notes Payable (credit) — borrowed money is a liability, never revenue.',
    chapterId: 'debits-credits',
    title: 'Taking Out a Bank Loan',
    description:
      'NorthStar Goods borrows $50,000 from the bank to fund an expansion. The money is deposited directly into the company\'s bank account.',
    question: 'Which entry correctly records this loan?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Notes Payable $50,000; Credit Cash $50,000' },
      { id: 'b', label: 'Debit Cash $50,000; Credit Revenue $50,000' },
      { id: 'c', label: 'Debit Cash $50,000; Credit Notes Payable $50,000' },
      { id: 'd', label: 'Debit Loan Expense $50,000; Credit Cash $50,000' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash increases (debit) because the company received money, and Notes Payable increases (credit) because the company now has a debt obligation.',
      incorrect:
        'Not quite. Borrowing money is not revenue — it creates a liability. Cash increases (debit) and Notes Payable, a liability, increases (credit).',
      keyInsight:
        'Loans are liabilities, not revenue. Receiving loan proceeds increases both an asset (Cash) and a liability (Notes Payable), keeping the accounting equation balanced.',
      commonMistake:
        'Recording a loan as revenue overstates income and misrepresents the company\'s financial position. Borrowed money must be repaid — it is never income.',
      whyItMatters:
        'Lenders and investors scrutinize debt levels closely. Mis-classifying a loan as revenue inflates income and distorts debt ratios used in credit analysis.',
      explainMore:
        'When NorthStar borrows $50,000, the company receives an asset (cash) and incurs a liability (obligation to repay). The entry: Debit Cash $50,000 / Credit Notes Payable $50,000. Both sides of the equation increase by $50,000, keeping Assets = Liabilities + Equity in balance. Interest on the loan will be recorded separately as an expense when incurred.',
    },
    metricEffects: {
      correct: { cash: 8000, reputation: 3 },
      incorrect: { reputation: -3 },
    },
  },
  {
    id: 'dc-06',
    reviewTip: 'Prepaid rent is an asset at payment — debit Prepaid Rent, credit Cash — then expense it monthly as the period is consumed.',
    chapterId: 'debits-credits',
    title: 'Prepaying Rent',
    description:
      'NorthStar Goods pays $6,000 cash for three months of office rent in advance.',
    question: 'Which account is DEBITED when this prepayment is recorded?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Rent Expense' },
      { id: 'b', label: 'Cash' },
      { id: 'c', label: 'Prepaid Rent' },
      { id: 'd', label: 'Accounts Payable' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Prepaid Rent is an asset — the company has paid for a future benefit. Assets increase with debits. The expense is recognized monthly as the rent period is used.',
      incorrect:
        'Not quite. When rent is paid in advance, it is an asset (Prepaid Rent), not an expense yet. The expense is recognized over the rental period as the benefit is consumed.',
      keyInsight:
        'Prepaid expenses are assets, not expenses at the time of payment. The matching principle requires recognizing the expense in the period it is used, not when it is paid.',
      commonMistake:
        'Debiting Rent Expense immediately for the full $6,000 violates the matching principle. Only $2,000 per month should be expensed as the rent is "used up."',
      whyItMatters:
        'Proper treatment of prepaid expenses prevents overstating expenses in one period and understating them in others, ensuring accurate monthly financial reporting.',
      explainMore:
        'The matching principle requires expenses to be recognized in the same period as the revenues they help generate. At payment: Debit Prepaid Rent $6,000 / Credit Cash $6,000. Each month, an adjusting entry transfers $2,000 from the asset to expense: Debit Rent Expense $2,000 / Credit Prepaid Rent $2,000. This accurately spreads the cost over three months.',
    },
    metricEffects: {
      correct: { cash: -500, reputation: 4 },
      incorrect: { cash: -1500, reputation: -2 },
    },
  },
  {
    id: 'dc-07',
    reviewTip: 'Owner investments increase Cash (debit) and Owner\'s Capital (credit) — they are equity contributions, not operating revenue.',
    chapterId: 'debits-credits',
    title: 'Owner Investment in the Business',
    description:
      'The owner of NorthStar Goods invests an additional $25,000 of personal cash into the business.',
    question: 'Which entry correctly records this owner investment?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Cash $25,000; Credit Revenue $25,000' },
      { id: 'b', label: 'Debit Cash $25,000; Credit Owner\'s Capital $25,000' },
      { id: 'c', label: 'Debit Owner\'s Capital $25,000; Credit Cash $25,000' },
      { id: 'd', label: 'Debit Cash $25,000; Credit Notes Payable $25,000' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Cash (asset) increases with a debit, and Owner\'s Capital (equity) increases with a credit. Owner investments build equity, not revenue.',
      incorrect:
        'Not quite. Owner investments increase equity, not revenue or liabilities. Cash is debited and Owner\'s Capital (an equity account) is credited.',
      keyInsight:
        'Owner investments go directly to equity. They are not revenue because they do not result from the company\'s operating activities.',
      commonMistake:
        'Recording owner investment as revenue overstates operating performance. Investors and analysts distinguish carefully between operating revenue and owner-contributed capital.',
      whyItMatters:
        'Equity transactions must be correctly separated from operating activities. This distinction is critical for evaluating business performance independent of owner financing decisions.',
      explainMore:
        'The accounting equation is Assets = Liabilities + Equity. When an owner invests cash, both sides increase: Cash (asset) goes up and Owner\'s Capital (equity) goes up. The entry: Debit Cash $25,000 / Credit Owner\'s Capital $25,000. This is not revenue because it did not result from selling goods or services — it is a capital contribution.',
    },
    metricEffects: {
      correct: { cash: 5000, reputation: 3 },
      incorrect: { reputation: -2 },
    },
  },
  {
    id: 'dc-08',
    reviewTip: 'Paying a supplier eliminates the liability: debit Accounts Payable (liability decreases) and credit Cash (asset decreases).',
    chapterId: 'debits-credits',
    title: 'Paying Off Accounts Payable',
    description:
      'NorthStar Goods pays $7,000 cash to settle an outstanding Accounts Payable balance with a supplier.',
    question: 'Which entry correctly records this payment?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Accounts Payable $7,000; Credit Cash $7,000' },
      { id: 'b', label: 'Debit Cash $7,000; Credit Accounts Payable $7,000' },
      { id: 'c', label: 'Debit Inventory $7,000; Credit Cash $7,000' },
      { id: 'd', label: 'Debit Accounts Payable $7,000; Credit Inventory $7,000' },
    ],
    correctAnswer: 'a',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Accounts Payable (a liability) decreases with a debit, and Cash (an asset) decreases with a credit. The company has settled its debt.',
      incorrect:
        'Not quite. When we pay off a liability, it decreases. Liabilities decrease with debits, so Accounts Payable is debited. Cash decreases (credit) because cash is leaving.',
      keyInsight:
        'Paying off a liability reduces both an asset (Cash) and a liability (Accounts Payable). No expense is recorded here — the expense was recognized when the inventory was originally purchased.',
      commonMistake:
        'Some learners re-record an expense or inventory entry when paying a supplier. But the original purchase already recorded the asset and liability. This payment simply settles the liability.',
      whyItMatters:
        'Accounts payable management directly affects cash flow. Understanding this entry helps you track when obligations are created versus when cash actually leaves the business.',
      explainMore:
        'When NorthStar originally purchased inventory on account, the entry was: Debit Inventory / Credit Accounts Payable. Now when paying the supplier, that liability is eliminated: Debit Accounts Payable $7,000 / Credit Cash $7,000. No new expense is recorded — the cost was captured in the original inventory purchase.',
    },
    metricEffects: {
      correct: { cash: -2000, reputation: 4 },
      incorrect: { cash: -3000, reputation: -2 },
    },
  },
  {
    id: 'dc-09',
    reviewTip: 'Depreciation is a non-cash expense: debit Depreciation Expense and credit Accumulated Depreciation, a contra-asset that reduces the asset\'s book value.',
    chapterId: 'debits-credits',
    title: 'Depreciation on Equipment',
    description:
      'NorthStar Goods records $4,000 of depreciation on warehouse equipment for the year.',
    question: 'Which entry correctly records annual depreciation?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Equipment $4,000; Credit Cash $4,000' },
      { id: 'b', label: 'Debit Depreciation Expense $4,000; Credit Accumulated Depreciation $4,000' },
      { id: 'c', label: 'Debit Cash $4,000; Credit Depreciation Expense $4,000' },
      { id: 'd', label: 'Debit Accumulated Depreciation $4,000; Credit Equipment $4,000' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    feedback: {
      correct:
        'Correct. Depreciation Expense is debited (expenses increase with debits) and Accumulated Depreciation is credited — a contra-asset account that reduces the carrying value of the equipment.',
      incorrect:
        'Not quite. Depreciation is a non-cash expense. It does not involve cash. Instead, Depreciation Expense is debited and Accumulated Depreciation (a contra-asset) is credited.',
      keyInsight:
        'Depreciation allocates the cost of a long-term asset over its useful life. Accumulated Depreciation is a contra-asset — it sits on the balance sheet opposite the Equipment account to show its net book value.',
      commonMistake:
        'Recording depreciation as a reduction directly to the Equipment account loses the history of original cost. Using Accumulated Depreciation preserves both the original cost and the total depreciation taken.',
      whyItMatters:
        'Depreciation affects taxes, asset valuations, and reported profits. Analysts use depreciation data to evaluate capital-intensive businesses and make investment decisions.',
      explainMore:
        'Equipment costs are not expensed all at once — they are spread over their useful life through depreciation. The journal entry: Debit Depreciation Expense $4,000 / Credit Accumulated Depreciation $4,000. On the balance sheet, Equipment appears at cost minus Accumulated Depreciation, showing its net book value. This entry has no cash impact — it is a non-cash expense.',
    },
    metricEffects: {
      correct: { profit: -500, reputation: 4 },
      incorrect: { profit: -1000, reputation: -3 },
    },
  },
  {
    id: 'dc-10',
    reviewTip: 'Accrued expenses are recognized before cash is paid — debit the expense, credit a liability — to match costs with the period they belong to.',
    chapterId: 'debits-credits',
    title: 'Accruing Unpaid Utilities',
    description:
      'At month-end, NorthStar Goods has received $1,800 in utility services but has not yet paid the bill.',
    question: 'Which entry correctly records this accrued expense?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Cash $1,800; Credit Utilities Expense $1,800' },
      { id: 'b', label: 'Debit Utilities Expense $1,800; Credit Cash $1,800' },
      { id: 'c', label: 'Debit Utilities Expense $1,800; Credit Accrued Liabilities $1,800' },
      { id: 'd', label: 'Debit Accrued Liabilities $1,800; Credit Utilities Expense $1,800' },
    ],
    correctAnswer: 'c',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. Under accrual accounting, expenses are recorded when incurred — not when paid. Utilities Expense is debited and Accrued Liabilities is credited to show we owe the amount.',
      incorrect:
        'Not quite. The expense has been incurred (we used the utilities) even though it has not been paid. Accrual accounting requires recording the expense now, with a corresponding liability.',
      keyInsight:
        'Accrued expenses are costs incurred but not yet paid. Recording them ensures that the income statement reflects expenses in the right period, regardless of when cash changes hands.',
      commonMistake:
        'Waiting until the bill is paid to record utility expense mismatches costs and revenues. This understates expenses in the current period and overstates them in the future period.',
      whyItMatters:
        'Accruals are fundamental to accrual accounting. Without them, monthly financial statements would be unreliable, making period-over-period comparisons meaningless.',
      explainMore:
        'Accrual accounting requires recognizing expenses when they are incurred, regardless of cash timing. Entry: Debit Utilities Expense $1,800 / Credit Accrued Liabilities $1,800. When the bill is paid next month: Debit Accrued Liabilities $1,800 / Credit Cash $1,800. This two-step process ensures the expense hits the right period while the liability tracks the unpaid obligation.',
    },
    metricEffects: {
      correct: { profit: -300, reputation: 5 },
      incorrect: { profit: -600, reputation: -3 },
    },
  },

  // ─────────────────────────────────────────────
  // CHAPTER 2 — FIFO / LIFO (6 scenarios)
  // ─────────────────────────────────────────────
  {
    id: 'fl-01',
    reviewTip: 'Under FIFO, COGS uses the oldest cost layers first — work through each batch sequentially until you\'ve covered all units sold.',
    chapterId: 'fifo-lifo',
    title: 'Basic FIFO Calculation',
    description:
      'NorthStar Goods has the following inventory on hand:\n• Batch 1 (oldest): 100 units @ $10 each\n• Batch 2: 150 units @ $12 each\n\nThe company sells 120 units.',
    question: 'Using FIFO, what is the Cost of Goods Sold for these 120 units?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$1,200' },
      { id: 'b', label: '$1,240' },
      { id: 'c', label: '$1,440' },
      { id: 'd', label: '$1,320' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    visualData: {
      type: 'inventory',
      layers: [
        { units: 100, costPerUnit: 10, label: 'Batch 1 (Oldest)' },
        { units: 150, costPerUnit: 12, label: 'Batch 2' },
      ],
      unitsSold: 120,
    },
    feedback: {
      correct:
        'Correct. Under FIFO, we sell the oldest inventory first: 100 units × $10 = $1,000, then 20 units × $12 = $240. Total COGS = $1,240.',
      incorrect:
        'Not quite. FIFO (First-In, First-Out) means we sell the oldest cost layers first. Sell all 100 units from Batch 1 at $10, then take the remaining 20 units needed from Batch 2 at $12. COGS = (100 × $10) + (20 × $12) = $1,000 + $240 = $1,240.',
      keyInsight:
        'FIFO mimics physical inventory flow for most goods — older items are sold before newer ones. Under FIFO, ending inventory reflects the most recent (usually higher) costs.',
      commonMistake:
        'A common error is using a weighted average cost instead of working through the layers in order. FIFO requires exhausting each cost layer before moving to the next.',
      whyItMatters:
        'FIFO typically results in lower COGS and higher gross profit in periods of rising prices, leading to higher reported income — and higher taxes.',
      explainMore:
        'FIFO assumes cost flow follows purchase order: first purchased, first sold. Step 1: Sell all 100 units from Batch 1 at $10 = $1,000. Step 2: We still need 20 more units (120 - 100), so take 20 from Batch 2 at $12 = $240. Total COGS = $1,240. Ending inventory = 130 units remaining from Batch 2 at $12 = $1,560.',
    },
    metricEffects: {
      correct: { inventory: -1000, profit: 1500, reputation: 4 },
      incorrect: { inventory: -500, reputation: -2 },
    },
  },
  {
    id: 'fl-02',
    reviewTip: 'Under LIFO, COGS uses the most recent cost layers first — start from the newest purchase and work backward until units sold are covered.',
    chapterId: 'fifo-lifo',
    title: 'Basic LIFO Calculation',
    description:
      'NorthStar Goods has the following inventory:\n• Batch 1 (oldest): 100 units @ $10 each\n• Batch 2 (newest): 150 units @ $12 each\n\nThe company sells 120 units.',
    question: 'Using LIFO, what is the Cost of Goods Sold for these 120 units?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$1,240' },
      { id: 'b', label: '$1,200' },
      { id: 'c', label: '$1,440' },
      { id: 'd', label: '$1,380' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    visualData: {
      type: 'inventory',
      layers: [
        { units: 100, costPerUnit: 10, label: 'Batch 1 (Oldest)' },
        { units: 150, costPerUnit: 12, label: 'Batch 2 (Newest)' },
      ],
      unitsSold: 120,
    },
    feedback: {
      correct:
        'Correct. Under LIFO, we sell the newest inventory first: 120 units × $12 = $1,440. All 120 units come from Batch 2 (the most recent purchase).',
      incorrect:
        'Not quite. LIFO (Last-In, First-Out) means we sell the most recently purchased inventory first. All 120 units needed come from Batch 2 at $12 each. COGS = 120 × $12 = $1,440.',
      keyInsight:
        'Under LIFO during rising prices, COGS is higher (newer, more expensive inventory is sold first), which reduces gross profit and taxable income. This is why many companies use LIFO for tax purposes.',
      commonMistake:
        'Mixing up FIFO and LIFO is the most common error. Remember: LIFO = Last-In, First-Out = newest costs hit COGS first.',
      whyItMatters:
        'LIFO is popular in the US for tax purposes because higher COGS in rising-price environments reduces taxable income. However, it is not permitted under IFRS used by most non-US companies.',
      explainMore:
        'LIFO assumes the most recent purchases are sold first. With 150 units in Batch 2 at $12, all 120 units sold come from Batch 2. COGS = 120 × $12 = $1,440. Ending inventory = 30 units from Batch 2 at $12 ($360) + 100 units from Batch 1 at $10 ($1,000) = $1,360. Compare to FIFO COGS of $1,240 — LIFO produces $200 more in COGS under rising prices.',
    },
    metricEffects: {
      correct: { inventory: -1200, profit: 1200, reputation: 4 },
      incorrect: { inventory: -800, reputation: -2 },
    },
  },
  {
    id: 'fl-03',
    reviewTip: 'Under FIFO, ending inventory always reflects the most recently purchased units, since older units are sold first.',
    chapterId: 'fifo-lifo',
    title: 'FIFO Ending Inventory',
    description:
      'NorthStar Goods began the month with:\n• 50 units @ $20\n• 80 units @ $25\n• 60 units @ $30\n\nDuring the month, 100 units were sold.',
    question: 'Using FIFO, what is the value of ending inventory?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$2,150' },
      { id: 'b', label: '$2,550' },
      { id: 'c', label: '$2,250' },
      { id: 'd', label: '$2,000' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    visualData: {
      type: 'inventory',
      layers: [
        { units: 50, costPerUnit: 20, label: 'Batch 1 (Oldest)' },
        { units: 80, costPerUnit: 25, label: 'Batch 2' },
        { units: 60, costPerUnit: 30, label: 'Batch 3 (Newest)' },
      ],
      unitsSold: 100,
    },
    feedback: {
      correct:
        'Correct. Under FIFO, the oldest units are sold first: all 50 units from Batch 1 at $20 = $1,000, then 50 units from Batch 2 at $25 = $1,250. Total COGS = $2,250. That leaves 30 units from Batch 2 at $25 and all 60 units from Batch 3 at $30 as ending inventory. Ending inventory = (30 × $25) + (60 × $30) = $750 + $1,800 = $2,550.',
      incorrect:
        'Not quite. Under FIFO, COGS uses the oldest layers first: all 50 units at $20 = $1,000, then 50 units at $25 = $1,250. Total COGS = $2,250. That leaves 30 units at $25 and 60 units at $30 as ending inventory. Ending inventory = (30 × $25) + (60 × $30) = $750 + $1,800 = $2,550.',
      keyInsight:
        'Under FIFO, ending inventory reflects the most recent (newest) costs. In a rising-price environment, this means ending inventory value is higher under FIFO than under LIFO.',
      commonMistake:
        'Forgetting to track remaining units in each layer leads to calculation errors. Work through each batch systematically, exhausting older layers before moving to newer ones.',
      whyItMatters:
        'The value assigned to ending inventory appears directly on the balance sheet. Higher inventory values under FIFO increase reported assets and equity, which affects financial ratios.',
      explainMore:
        'Total inventory: 50 + 80 + 60 = 190 units. After selling 100 units (FIFO: 50 from Batch 1 + 50 from Batch 2), 90 units remain: 30 from Batch 2 at $25 and 60 from Batch 3 at $30. Ending inventory = (30 × $25) + (60 × $30) = $750 + $1,800 = $2,550.',
    },
    metricEffects: {
      correct: { inventory: 1500, reputation: 4 },
      incorrect: { inventory: -500, reputation: -2 },
    },
  },
  {
    id: 'fl-04',
    reviewTip: 'In rising-price environments, LIFO produces higher COGS and lower taxable income, while FIFO produces lower COGS and higher reported profit.',
    chapterId: 'fifo-lifo',
    title: 'FIFO vs LIFO: Tax Impact',
    description:
      'NorthStar Goods sells 200 units at $50 each. Inventory costs are rising. The FIFO method produces COGS of $6,000 and the LIFO method produces COGS of $7,500.',
    question: 'If NorthStar wants to minimize its income tax bill this year, which method should it use?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'FIFO — it produces higher revenue' },
      { id: 'b', label: 'LIFO — it produces higher COGS and lower taxable income' },
      { id: 'c', label: 'FIFO — it produces lower COGS' },
      { id: 'd', label: 'Either method; taxes are not affected by inventory method' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    feedback: {
      correct:
        'Correct. LIFO produces higher COGS ($7,500 vs $6,000), which reduces gross profit by $1,500, lowering taxable income and therefore the tax bill.',
      incorrect:
        'Not quite. To minimize taxes, a company wants to maximize COGS (which reduces taxable income). In a rising-price environment, LIFO produces higher COGS because it assigns the most recent, higher costs to what was sold.',
      keyInsight:
        'In periods of rising prices, LIFO produces higher COGS, lower gross profit, lower taxable income, and lower taxes. This is the primary reason US companies historically preferred LIFO.',
      commonMistake:
        'Lower taxes from LIFO comes with a trade-off: lower reported profit, which can make the company look less profitable to investors and lenders.',
      whyItMatters:
        'Inventory method selection is a strategic decision. It affects taxes, reported earnings, lending covenants, and executive compensation tied to profitability metrics.',
      explainMore:
        'Revenue is the same regardless of inventory method: 200 × $50 = $10,000. Under FIFO: Gross Profit = $10,000 - $6,000 = $4,000. Under LIFO: Gross Profit = $10,000 - $7,500 = $2,500. LIFO saves taxes on $1,500 of additional COGS. At a 25% tax rate, that is $375 in tax savings. However, LIFO also reports $1,500 less profit, which matters for investor perception.',
    },
    metricEffects: {
      correct: { cash: 2000, profit: 1000, reputation: 5 },
      incorrect: { profit: -1000, reputation: -3 },
    },
  },
  {
    id: 'fl-05',
    reviewTip: 'The LIFO reserve is the gap between FIFO and LIFO inventory values, used to convert LIFO statements to a FIFO-equivalent basis for comparison.',
    chapterId: 'fifo-lifo',
    title: 'LIFO Reserve Concept',
    description:
      'NorthStar Goods has used LIFO for years. The LIFO Reserve — the difference between FIFO and LIFO inventory values — is $18,000. A potential acquirer is analyzing NorthStar\'s balance sheet.',
    question: 'If the acquirer converts NorthStar\'s financials to FIFO for comparison purposes, how should they adjust NorthStar\'s inventory on the balance sheet?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Decrease inventory by $18,000' },
      { id: 'b', label: 'No adjustment needed; FIFO and LIFO give the same balance sheet result' },
      { id: 'c', label: 'Increase inventory by $18,000' },
      { id: 'd', label: 'Decrease inventory by $9,000 (half the reserve)' },
    ],
    correctAnswer: 'c',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. The LIFO Reserve represents the amount by which LIFO understates inventory compared to FIFO. Adding the reserve to LIFO inventory converts it to a FIFO basis.',
      incorrect:
        'Not quite. Under rising prices, LIFO inventory is lower than FIFO inventory because older, cheaper costs remain in inventory. The LIFO Reserve of $18,000 is added to convert to FIFO.',
      keyInsight:
        'Analysts routinely adjust LIFO companies\' financials to FIFO for peer comparisons, since LIFO inventory understates the current economic value of inventory in rising-price environments.',
      commonMistake:
        'Assuming the reserve should be subtracted (decreasing inventory) reverses the adjustment direction. LIFO inventory is already lower, so the reserve must be added to get to FIFO.',
      whyItMatters:
        'In M&A analysis, inventory method differences can significantly distort comparisons. Adjusting for the LIFO reserve is a standard step in financial due diligence.',
      explainMore:
        'The LIFO Reserve = FIFO Inventory Value - LIFO Inventory Value. If the reserve is $18,000, then FIFO inventory is $18,000 higher than LIFO inventory. To convert: FIFO Inventory = LIFO Inventory + $18,000. Note: this adjustment also affects taxes — converting a LIFO company to FIFO would trigger taxes on the reserve.',
    },
    metricEffects: {
      correct: { inventory: 3000, reputation: 5 },
      incorrect: { inventory: -2000, reputation: -3 },
    },
  },
  {
    id: 'fl-06',
    reviewTip: 'Inventory method choice affects taxes, reported profit, and balance sheet values — FIFO reflects current costs in inventory, LIFO can reduce taxes in inflationary periods.',
    chapterId: 'fifo-lifo',
    title: 'Choosing an Inventory Method',
    description:
      'NorthStar Goods is launching a new product line in a period of falling prices (costs are declining over time). The CFO wants to maximize reported net income to attract investors.',
    question: 'Which inventory method should NorthStar recommend to the CFO?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'LIFO — it always maximizes net income regardless of price direction' },
      { id: 'b', label: 'FIFO — in falling prices, FIFO produces higher COGS' },
      { id: 'c', label: 'LIFO — in falling prices, LIFO sells newer (cheaper) units first, producing lower COGS and higher net income' },
      { id: 'd', label: 'The method choice has no effect on net income' },
    ],
    correctAnswer: 'c',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. In a period of falling prices, older units cost MORE and newer units cost LESS. LIFO sells the newest (cheapest) units first, resulting in lower COGS and higher gross profit. FIFO sells the oldest (most expensive) units first, producing higher COGS and lower net income. To maximize reported income in falling prices, LIFO is the right choice.',
      incorrect:
        'In falling prices, the relationship reverses from the rising-price scenario. LIFO sells the newest (lower-cost) units first, producing lower COGS and higher net income. FIFO sells the oldest (higher-cost) units first, resulting in higher COGS and lower income. The CFO should choose LIFO to maximize reported income.',
      keyInsight:
        'The relative advantage of FIFO vs LIFO flips depending on price direction. Rising prices favor LIFO for tax savings; falling prices favor LIFO for income maximization.',
      commonMistake:
        'Always assuming LIFO = higher taxes and FIFO = higher income is wrong when prices fall. The price trend determines which method produces higher COGS.',
      whyItMatters:
        'Inventory method decisions require forecasting price trends. A method that minimizes taxes today may not be optimal as market conditions change — and switching methods requires IRS approval.',
      explainMore:
        'In falling prices: oldest units cost MORE, newest units cost LESS. FIFO sells oldest (higher cost) first → higher COGS → lower income. LIFO sells newest (lower cost) first → lower COGS → higher income. The CFO wanting to maximize reported income in falling prices should use LIFO. This is the opposite of the rising-price scenario.',
    },
    metricEffects: {
      correct: { profit: 2000, reputation: 5 },
      incorrect: { profit: -500, reputation: -3 },
    },
  },

  // ─────────────────────────────────────────────
  // CHAPTER 3 — BREAK-EVEN (6 scenarios)
  // ─────────────────────────────────────────────
  {
    id: 'be-01',
    reviewTip: 'Break-even units = Fixed Costs ÷ Contribution Margin per Unit; this is the minimum volume needed before any profit is earned.',
    chapterId: 'break-even',
    title: 'Basic Break-Even Calculation',
    description:
      'NorthStar Goods is launching a new product. Fixed costs total $40,000 per month. The selling price is $80 per unit and variable cost is $30 per unit.',
    question: 'How many units must NorthStar sell each month to break even?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '500 units' },
      { id: 'b', label: '800 units' },
      { id: 'c', label: '1,333 units' },
      { id: 'd', label: '667 units' },
    ],
    correctAnswer: 'b',
    difficulty: 'easy',
    visualData: {
      type: 'breakeven',
      fixedCosts: 40000,
      variableCostPerUnit: 30,
      pricePerUnit: 80,
    },
    feedback: {
      correct:
        'Correct. Break-Even = Fixed Costs ÷ Contribution Margin per Unit = $40,000 ÷ ($80 - $30) = $40,000 ÷ $50 = 800 units.',
      incorrect:
        'Not quite. The formula is: Break-Even Units = Fixed Costs ÷ (Price - Variable Cost per Unit). Here: $40,000 ÷ ($80 - $30) = $40,000 ÷ $50 = 800 units.',
      keyInsight:
        'The contribution margin ($50 per unit) is the amount each unit sold contributes toward covering fixed costs. Once you sell enough units to cover all fixed costs, every additional unit generates profit.',
      commonMistake:
        'Dividing fixed costs by price alone ($40,000 ÷ $80 = 500 units) ignores variable costs. Each unit sold only contributes its margin — not its full price — toward fixed costs.',
      whyItMatters:
        'Break-even analysis tells management the minimum sales volume required to avoid a loss. It is essential for pricing decisions, capacity planning, and new product launches.',
      explainMore:
        'Contribution Margin per Unit = Selling Price - Variable Cost = $80 - $30 = $50. Each unit sold contributes $50 toward covering the $40,000 fixed cost. Break-Even = $40,000 ÷ $50 = 800 units. At 800 units: Revenue = $64,000, Variable Costs = $24,000, Fixed Costs = $40,000. Profit = $64,000 - $24,000 - $40,000 = $0. Exactly at break-even.',
    },
    metricEffects: {
      correct: { cash: 3000, profit: 1500, reputation: 4 },
      incorrect: { profit: -1000, reputation: -2 },
    },
  },
  {
    id: 'be-02',
    reviewTip: 'Break-even in sales dollars = Fixed Costs ÷ CM Ratio, where CM Ratio = (Price − Variable Cost per Unit) ÷ Price.',
    chapterId: 'break-even',
    title: 'Break-Even in Sales Dollars',
    description:
      'NorthStar\'s new product line has fixed costs of $60,000. The contribution margin ratio is 40% (each dollar of revenue contributes $0.40 toward fixed costs).',
    question: 'What is the break-even point in total sales dollars?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$24,000' },
      { id: 'b', label: '$100,000' },
      { id: 'c', label: '$150,000' },
      { id: 'd', label: '$240,000' },
    ],
    correctAnswer: 'c',
    difficulty: 'medium',
    visualData: {
      type: 'breakeven',
      fixedCosts: 60000,
      variableCostPerUnit: 60,
      pricePerUnit: 100,
    },
    feedback: {
      correct:
        'Correct. Break-Even Sales = Fixed Costs ÷ Contribution Margin Ratio = $60,000 ÷ 0.40 = $150,000.',
      incorrect:
        'Not quite. When you know the contribution margin ratio, use: Break-Even Sales Dollars = Fixed Costs ÷ Contribution Margin Ratio = $60,000 ÷ 0.40 = $150,000.',
      keyInsight:
        'Break-even in dollars is useful when a company sells multiple products or when unit prices vary. It tells you the total revenue level needed to cover all fixed costs.',
      commonMistake:
        'Multiplying fixed costs by the ratio ($60,000 × 0.40 = $24,000) gives the contribution at one level of sales, not the break-even revenue. Always divide fixed costs by the margin ratio.',
      whyItMatters:
        'Sales dollar break-even is a more practical target for sales teams than unit break-even. It translates directly into revenue goals that can be tracked against actual sales performance.',
      explainMore:
        'The contribution margin ratio (CMR) shows what percentage of every revenue dollar remains after variable costs. CMR = Contribution Margin ÷ Revenue. Break-Even in Sales Dollars = Fixed Costs ÷ CMR = $60,000 ÷ 0.40 = $150,000. At $150,000 in revenue, $60,000 (40%) covers fixed costs and profit is zero.',
    },
    metricEffects: {
      correct: { cash: 4000, profit: 2000, reputation: 4 },
      incorrect: { profit: -1500, reputation: -2 },
    },
  },
  {
    id: 'be-03',
    reviewTip: 'Target profit volume = (Fixed Costs + Target Profit) ÷ Contribution Margin per Unit — treat the target profit as an additional fixed cost to cover.',
    chapterId: 'break-even',
    title: 'Target Profit Analysis',
    description:
      'NorthStar Goods needs to earn $25,000 in profit from a product line. Fixed costs are $35,000, selling price is $100, and variable cost is $60 per unit.',
    question: 'How many units must be sold to achieve the $25,000 profit target?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '875 units' },
      { id: 'b', label: '583 units' },
      { id: 'c', label: '1,500 units' },
      { id: 'd', label: '1,000 units' },
    ],
    correctAnswer: 'c',
    difficulty: 'medium',
    visualData: {
      type: 'breakeven',
      fixedCosts: 35000,
      variableCostPerUnit: 60,
      pricePerUnit: 100,
    },
    feedback: {
      correct:
        'Correct. Target Units = (Fixed Costs + Target Profit) ÷ Contribution Margin per Unit = ($35,000 + $25,000) ÷ ($100 - $60) = $60,000 ÷ $40 = 1,500 units. At 1,500 units: Revenue $150,000 - Variable Costs $90,000 - Fixed Costs $35,000 = Profit $25,000.',
      incorrect:
        'Not quite. To find units needed for a target profit, add the profit target to fixed costs, then divide by the contribution margin: ($35,000 + $25,000) ÷ ($100 - $60) = $60,000 ÷ $40 = 1,500 units.',
      keyInsight:
        'Target profit analysis extends break-even by treating desired profit as an additional "fixed cost" to cover. The contribution margin per unit must cover both fixed costs and target profit.',
      commonMistake:
        'Forgetting to add the target profit to fixed costs before dividing only gives the break-even point, not the target profit point.',
      whyItMatters:
        'Businesses do not aim to just break even — they need profit. Target profit analysis sets realistic sales goals tied directly to financial objectives.',
      explainMore:
        'Break-even covers fixed costs only (profit = $0). For target profit, treat the desired profit as an additional cost to cover: Required Units = (Fixed Costs + Target Profit) ÷ Contribution Margin per Unit = ($35,000 + $25,000) ÷ $40 = $60,000 ÷ $40 = 1,500 units. At 1,500 units: Revenue $150,000 - Variable Costs $90,000 - Fixed Costs $35,000 = Profit $25,000.',
    },
    metricEffects: {
      correct: { cash: 5000, profit: 3000, reputation: 4 },
      incorrect: { profit: -1000, reputation: -2 },
    },
  },
  {
    id: 'be-04',
    reviewTip: 'Margin of safety = Actual Sales − Break-Even Sales, showing how much sales can drop before the business starts losing money.',
    chapterId: 'break-even',
    title: 'Margin of Safety',
    description:
      'NorthStar Goods is currently selling 1,200 units per month. The break-even point is 800 units.',
    question: 'What is the margin of safety in units?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '800 units' },
      { id: 'b', label: '1,200 units' },
      { id: 'c', label: '400 units' },
      { id: 'd', label: '200 units' },
    ],
    correctAnswer: 'c',
    difficulty: 'easy',
    visualData: {
      type: 'breakeven',
      fixedCosts: 40000,
      variableCostPerUnit: 30,
      pricePerUnit: 80,
    },
    feedback: {
      correct:
        'Correct. Margin of Safety = Actual Sales - Break-Even Sales = 1,200 - 800 = 400 units. This is the "cushion" before the company starts losing money.',
      incorrect:
        'Not quite. Margin of Safety = Actual Units Sold - Break-Even Units = 1,200 - 800 = 400 units. It measures how far sales can fall before the company reaches a loss.',
      keyInsight:
        'A larger margin of safety means the business can absorb a bigger sales decline before becoming unprofitable. It is a key indicator of business risk.',
      commonMistake:
        'Confusing margin of safety with break-even point. Break-even is where profit = $0. Margin of safety is the distance between current sales and that break-even point.',
      whyItMatters:
        'Managers use the margin of safety to assess downside risk. A company with a 400-unit margin of safety is far more resilient than one operating just 50 units above break-even.',
      explainMore:
        'Margin of Safety = Actual Sales - Break-Even Sales = 1,200 - 800 = 400 units. As a percentage: 400 ÷ 1,200 = 33%. This means sales could fall 33% before the company loses money. A margin of safety percentage above 20-25% is generally considered healthy for most businesses.',
    },
    metricEffects: {
      correct: { cash: 2000, profit: 1000, reputation: 3 },
      incorrect: { reputation: -2 },
    },
  },
  {
    id: 'be-05',
    reviewTip: 'When fixed costs rise, the break-even point rises proportionally — more units must be sold to cover the higher cost base before profit begins.',
    chapterId: 'break-even',
    title: 'Fixed Cost Increase Decision',
    description:
      'NorthStar Goods is considering hiring an additional salesperson for $30,000 per year. Current break-even is 800 units/month. Fixed costs would increase by $2,500/month. Contribution margin is $50/unit.',
    question: 'How many additional units per month must be sold to justify this hire?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '25 additional units' },
      { id: 'b', label: '50 additional units' },
      { id: 'c', label: '600 additional units' },
      { id: 'd', label: '100 additional units' },
    ],
    correctAnswer: 'b',
    difficulty: 'medium',
    visualData: {
      type: 'breakeven',
      fixedCosts: 42500,
      variableCostPerUnit: 30,
      pricePerUnit: 80,
    },
    feedback: {
      correct:
        'Correct. Additional units needed = Increase in Fixed Costs ÷ Contribution Margin = $2,500 ÷ $50 = 50 units. The salesperson must generate at least 50 additional units per month to break even on the cost.',
      incorrect:
        'Not quite. Divide the additional fixed cost by the contribution margin per unit: $2,500 ÷ $50 = 50 additional units per month. If the salesperson can drive more than 50 new units monthly, the hire pays off.',
      keyInsight:
        'Every incremental fixed cost decision can be evaluated this way: divide the cost increase by the contribution margin to find the additional sales volume needed to justify it.',
      commonMistake:
        'Comparing the $30,000 annual salary directly to price or revenue per unit. The correct comparison uses the contribution margin — the amount each unit contributes after variable costs.',
      whyItMatters:
        'This framework applies to any fixed cost investment: new equipment, software subscriptions, facility leases. It translates investment decisions into concrete sales targets.',
      explainMore:
        'The $30,000 annual salary = $2,500/month additional fixed cost. To cover this: $2,500 ÷ $50 contribution margin = 50 units/month. New break-even = (Original Fixed Costs + $2,500) ÷ $50. If current volume is 1,200 units and the salesperson can grow that to 1,250+ units, the hire pays off and generates additional profit beyond the 50-unit hurdle.',
    },
    metricEffects: {
      correct: { cash: 3000, profit: 2000, reputation: 4 },
      incorrect: { profit: -1500, reputation: -2 },
    },
  },
  {
    id: 'be-06',
    reviewTip: 'A price cut reduces contribution margin per unit, raising the break-even point — you need higher volume to cover the same fixed costs.',
    chapterId: 'break-even',
    title: 'Price Cut Analysis',
    description:
      'NorthStar Goods currently sells 1,000 units/month at $80 with $30 variable cost and $30,000 fixed costs. The sales team proposes cutting price to $70 to increase volume.',
    question: 'At the new $70 price, how many units are needed to earn the same profit as before?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '1,000 units (no change needed)' },
      { id: 'b', label: '1,250 units' },
      { id: 'c', label: '2,000 units' },
      { id: 'd', label: '1,250 units' },
    ],
    correctAnswer: 'd',
    difficulty: 'hard',
    visualData: {
      type: 'breakeven',
      fixedCosts: 30000,
      variableCostPerUnit: 30,
      pricePerUnit: 70,
    },
    feedback: {
      correct:
        'Correct. First, calculate current profit: 1,000 units × ($80 - $30 CM) - $30,000 fixed = $50,000 - $30,000 = $20,000. At the new $70 price, the contribution margin drops to $70 - $30 = $40/unit. To earn the same $20,000 profit: ($30,000 + $20,000) ÷ $40 = $50,000 ÷ $40 = 1,250 units.',
      incorrect:
        'Not quite. First calculate current profit: 1,000 × ($80 - $30) - $30,000 = $20,000. At the new $70 price, CM = $70 - $30 = $40. Required units to maintain $20,000 profit: ($30,000 + $20,000) ÷ $40 = 1,250 units.',
      keyInsight:
        'Price cuts reduce the contribution margin per unit, requiring more volume to maintain the same profit. This is why pricing decisions must always be paired with volume analysis.',
      commonMistake:
        'Assuming the same unit count ($1,000) generates the same profit after a price cut ignores that each unit now contributes $10 less. More units must be sold to compensate.',
      whyItMatters:
        'Pricing decisions have an outsized impact on profitability. A 12.5% price cut ($80 to $70) requires a 25% volume increase (1,000 to 1,250) just to maintain the same profit level.',
      explainMore:
        'Current state: 1,000 units × $50 CM = $50,000 contribution - $30,000 fixed = $20,000 profit. After price cut to $70: CM = $40/unit. To earn $20,000 profit: units × $40 - $30,000 = $20,000 → units = $50,000 ÷ $40 = 1,250 units. The price cut demands 250 more units (25% more volume) just to stand still on profits.',
    },
    metricEffects: {
      correct: { cash: 4000, profit: 2500, reputation: 5 },
      incorrect: { profit: -2000, reputation: -3 },
    },
  },

  // ─────────────────────────────────────────────
  // CHAPTER 4 — FINAL ROUND (7 scenarios)
  // ─────────────────────────────────────────────
  {
    id: 'fr-01',
    reviewTip: 'A product sale requires two entries: revenue (debit Cash/AR, credit Sales Revenue) and cost recognition (debit COGS, credit Inventory).',
    chapterId: 'final-round',
    title: 'Recording a Product Sale (Integrated)',
    description:
      'NorthStar Goods sells 50 units at $120 cash each. The inventory was purchased under FIFO: the oldest 30 units cost $60 each and the next 20 units cost $70 each.',
    question: 'What is the correct COGS for this sale under FIFO?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$3,200' },
      { id: 'b', label: '$3,500' },
      { id: 'c', label: '$3,000' },
      { id: 'd', label: '$6,000' },
    ],
    correctAnswer: 'a',
    difficulty: 'medium',
    visualData: {
      type: 'inventory',
      layers: [
        { units: 30, costPerUnit: 60, label: 'Batch 1 (Oldest)' },
        { units: 20, costPerUnit: 70, label: 'Batch 2' },
      ],
      unitsSold: 50,
    },
    feedback: {
      correct:
        'Correct. FIFO COGS: 30 units × $60 = $1,800 + 20 units × $70 = $1,400. Total COGS = $3,200.',
      incorrect:
        'Not quite. Under FIFO, use oldest costs first: 30 × $60 = $1,800, then 20 × $70 = $1,400. Total COGS = $3,200. Gross profit = (50 × $120) - $3,200 = $6,000 - $3,200 = $2,800.',
      keyInsight:
        'The journal entry for COGS requires: Debit COGS $3,200 / Credit Inventory $3,200. This reduces inventory on the balance sheet and records the expense on the income statement.',
      commonMistake:
        'Using a simple average ($65/unit × 50 = $3,250) instead of working through FIFO layers produces an incorrect answer. Always use actual layer costs under FIFO.',
      whyItMatters:
        'Accurate COGS is the foundation of gross profit calculation. Errors here flow through to the income statement, affecting operating income, tax liability, and investor analysis.',
      explainMore:
        'This scenario combines journal entries with FIFO. Two entries are needed: (1) Revenue entry: Debit Cash $6,000 / Credit Sales Revenue $6,000. (2) COGS entry: Debit Cost of Goods Sold $3,200 / Credit Inventory $3,200. Gross Profit = $6,000 - $3,200 = $2,800. The FIFO layer calculation: 30 units × $60 = $1,800 + 20 units × $70 = $1,400 = $3,200 total COGS.',
    },
    metricEffects: {
      correct: { cash: 5000, profit: 2000, inventory: -2000, reputation: 5 },
      incorrect: { profit: -1500, reputation: -3 },
    },
  },
  {
    id: 'fr-02',
    reviewTip: 'Evaluate a new product line by computing its own break-even point using its contribution margin and allocated fixed costs before committing resources.',
    chapterId: 'final-round',
    title: 'Break-Even with New Product Line',
    description:
      'NorthStar is considering a new product: selling price $150, variable cost $90, additional fixed costs $45,000/month.',
    question: 'Should NorthStar launch if it expects monthly sales of 800 units?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Yes — 800 units exceeds the break-even of 750 units' },
      { id: 'b', label: 'No — 800 units is below the break-even of 900 units' },
      { id: 'c', label: 'Yes — any positive sales volume justifies a launch' },
      { id: 'd', label: 'No — the contribution margin is too low' },
    ],
    correctAnswer: 'a',
    difficulty: 'easy',
    visualData: {
      type: 'breakeven',
      fixedCosts: 45000,
      variableCostPerUnit: 90,
      pricePerUnit: 150,
    },
    feedback: {
      correct:
        'Correct. Break-even = $45,000 ÷ ($150 - $90) = $45,000 ÷ $60 = 750 units. Since projected sales of 800 units exceed break-even, the product line is profitable and the launch is justified.',
      incorrect:
        'Not quite. Break-even = Fixed Costs ÷ CM per Unit = $45,000 ÷ ($150 - $90) = $45,000 ÷ $60 = 750 units. At 800 units, NorthStar is 50 units above break-even, generating $50 × 60 = $3,000 in profit.',
      keyInsight:
        'The decision rule is simple: if projected sales exceed break-even, the product generates profit. The margin of safety here is 50 units, or about 6.7% above break-even.',
      commonMistake:
        'Launching based on gut feel without calculating break-even is a common management error. The numbers show this launch is viable — but only marginally. A 7% sales shortfall would result in a loss.',
      whyItMatters:
        'Product launch decisions require quantitative support. Break-even analysis translates financial projections into a clear go/no-go threshold, reducing decision-making risk.',
      explainMore:
        'Break-Even = $45,000 ÷ $60 = 750 units. At 800 units: Revenue = $120,000, Variable Costs = $72,000, Fixed Costs = $45,000, Profit = $3,000. Margin of safety = 50 units. While profitable, the thin margin means management should stress-test the 800-unit assumption carefully before committing.',
    },
    metricEffects: {
      correct: { cash: 5000, profit: 3000, reputation: 5 },
      incorrect: { profit: -2000, reputation: -3 },
    },
  },
  {
    id: 'fr-03',
    reviewTip: 'Inventory must be written down when its net realizable value falls below cost — debit a loss or COGS account and credit Inventory.',
    chapterId: 'final-round',
    title: 'Inventory Write-Down',
    description:
      'NorthStar Goods has 200 units of inventory on its books at $40/unit (total $8,000). Due to market changes, the current market value has dropped to $30/unit. Under the Lower of Cost or Market rule, the inventory must be written down.',
    question: 'Which journal entry correctly records this write-down?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Debit Inventory $2,000; Credit COGS $2,000' },
      { id: 'b', label: 'Debit Loss on Inventory Write-Down $2,000; Credit Inventory $2,000' },
      { id: 'c', label: 'Debit Cash $2,000; Credit Inventory $2,000' },
      { id: 'd', label: 'Debit Inventory $2,000; Credit Retained Earnings $2,000' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. The write-down reduces inventory (credit) and records a loss (debit). The loss is recognized on the income statement immediately per the conservatism principle.',
      incorrect:
        'Not quite. A write-down debits a loss account (an expense) and credits inventory to reduce its carrying value. 200 units × ($40 - $30) = $2,000 write-down.',
      keyInsight:
        'The Lower of Cost or Market (LCM) rule is an application of accounting conservatism: record losses immediately when known, but do not anticipate gains. Inventory can never be written up above cost.',
      commonMistake:
        'Recording a write-down as a debit to inventory increases it — the opposite of what is needed. Always credit inventory to reduce its balance.',
      whyItMatters:
        'Inventory write-downs reduce reported assets and increase expenses, directly impacting both the balance sheet and income statement. Failure to record them overstates assets and understates losses.',
      explainMore:
        'Write-down calculation: 200 units × ($40 - $30) = $2,000. Entry: Debit Loss on Inventory Write-Down $2,000 / Credit Inventory $2,000. After the write-down, inventory is carried at $6,000 (200 × $30). If market value later recovers, the write-down cannot be reversed under US GAAP (though IFRS allows partial reversals). Conservatism requires recognizing losses but not unrealized gains.',
    },
    metricEffects: {
      correct: { inventory: -3000, profit: -1000, reputation: 5 },
      incorrect: { inventory: -4000, profit: -2000, reputation: -3 },
    },
  },
  {
    id: 'fr-04',
    reviewTip: 'Contribution margin analysis (Revenue − Variable Costs) identifies which products or decisions best cover fixed costs and generate profit.',
    chapterId: 'final-round',
    title: 'Contribution Margin Decision',
    description:
      'NorthStar Goods has capacity to produce 2,000 units. A special order arrives for 300 units at $65 per unit (below the normal $90 price). Variable cost is $50/unit; current production is 1,600 units; fixed costs are fully covered.',
    question: 'Should NorthStar accept this special order?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'No — the price of $65 is below the normal selling price of $90' },
      { id: 'b', label: 'Yes — the order contributes $15/unit above variable cost, adding profit' },
      { id: 'c', label: 'No — accepting will lower the company\'s average selling price' },
      { id: 'd', label: 'Yes — revenue is always better than no revenue' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. Since fixed costs are already covered by regular production and there is spare capacity, any price above variable cost ($50) adds to profit. The special order adds 300 × $15 = $4,500 in incremental profit.',
      incorrect:
        'Not quite. When fixed costs are already covered and spare capacity exists, the relevant comparison is price vs. variable cost — not price vs. normal selling price. At $65, each unit contributes $15 ($65 - $50) above variable cost.',
      keyInsight:
        'Special order decisions use incremental analysis: compare incremental revenue to incremental costs. Fixed costs are irrelevant when capacity exists. Only variable costs matter for this decision.',
      commonMistake:
        'Rejecting on price alone ($65 < $90 normal price) ignores that fixed costs are sunk in the short run. The question is whether the order covers its own variable costs — and it does.',
      whyItMatters:
        'Contribution margin thinking is fundamental to short-term pricing decisions. Any contribution above variable cost improves total profit when capacity is available.',
      explainMore:
        'Regular production: 1,600 units using 80% of capacity. Spare capacity: 400 units. Special order: 300 units (fits within spare capacity). Incremental analysis: Revenue $65 × 300 = $19,500. Variable Costs $50 × 300 = $15,000. Incremental Profit = $4,500. Fixed costs are irrelevant (already covered). Accept the order. Note: if the order required turning away regular customers at $90, the calculus changes completely.',
    },
    metricEffects: {
      correct: { cash: 4000, profit: 3000, reputation: 5 },
      incorrect: { cash: -2000, profit: -2000, reputation: -4 },
    },
  },
  {
    id: 'fr-05',
    reviewTip: 'Revenue is recognized when the performance obligation is satisfied (goods or services delivered), not necessarily when cash is received.',
    chapterId: 'final-round',
    title: 'Revenue Recognition Timing',
    description:
      'On December 28, NorthStar Goods ships $50,000 of goods to a customer on account. The goods arrive at the customer\'s location on January 3. The customer has FOB Destination terms (NorthStar owns the goods until delivery).',
    question: 'In which period should NorthStar recognize the $50,000 in revenue?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'December — when the goods were shipped' },
      { id: 'b', label: 'January — when the goods were delivered to the customer' },
      { id: 'c', label: 'When the customer pays the invoice' },
      { id: 'd', label: 'Either period is acceptable under GAAP' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. Under FOB Destination, title transfers when the goods reach the customer. Revenue is recognized in January when delivery occurs and control transfers to the buyer.',
      incorrect:
        'Not quite. The key is when control transfers to the customer. Under FOB Destination, the seller (NorthStar) retains risk and title until delivery. Revenue is recognized in January.',
      keyInsight:
        'Revenue recognition under ASC 606 requires that performance obligations be satisfied before revenue is recorded. With FOB Destination, the performance obligation (delivering goods) is not complete until the customer receives them.',
      commonMistake:
        'FOB Shipping Point would allow December recognition (control transfers at shipment). FOB Destination delays recognition until delivery. Mixing these up is a common year-end audit finding.',
      whyItMatters:
        'Year-end revenue cutoff is one of the most scrutinized areas in financial audits. Premature revenue recognition can overstate a reporting period\'s performance and may constitute fraud.',
      explainMore:
        'FOB (Free on Board) terms determine when title and risk pass from seller to buyer. FOB Shipping Point: title transfers at shipment (December) → December revenue. FOB Destination: title transfers at delivery (January) → January revenue. Under ASC 606, revenue is recognized when (or as) performance obligations are satisfied — here, delivery to the customer. Recording December revenue here would be a misstatement.',
    },
    metricEffects: {
      correct: { cash: 3000, profit: 2000, reputation: 5 },
      incorrect: { profit: -3000, reputation: -4 },
    },
  },
  {
    id: 'fr-06',
    reviewTip: 'Operating leverage measures how profit responds to sales changes — high fixed costs amplify both gains and losses relative to revenue shifts.',
    chapterId: 'final-round',
    title: 'Operating Leverage',
    description:
      'NorthStar has two product lines. Product A: high fixed costs ($80,000), low variable cost ($20/unit), price $100. Product B: low fixed costs ($30,000), high variable cost ($70/unit), price $100. Both break even at 1,000 units. Sales are projected at 2,000 units.',
    question: 'Which product generates more profit at 2,000 units — and why?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'Product B — lower fixed costs make it safer' },
      { id: 'b', label: 'Product A — higher fixed costs create higher operating leverage and more profit above break-even' },
      { id: 'c', label: 'Both generate the same profit at 2,000 units' },
      { id: 'd', label: 'Product A — it has lower variable costs per unit' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. Product A: Profit = (2,000 × $80 CM) - $80,000 = $160,000 - $80,000 = $80,000. Product B: Profit = (2,000 × $30 CM) - $30,000 = $60,000 - $30,000 = $30,000. Product A generates nearly three times the profit because of its higher contribution margin per unit.',
      incorrect:
        'Not quite. Calculate profit for each: Product A: 2,000 × ($100-$20) - $80,000 = $160,000 - $80,000 = $80,000. Product B: 2,000 × ($100-$70) - $30,000 = $60,000 - $30,000 = $30,000. Product A generates far more profit above break-even.',
      keyInsight:
        'Operating leverage means that a business with high fixed costs and low variable costs generates disproportionately more profit as volume grows beyond break-even. The "lever" is the contribution margin.',
      commonMistake:
        'Concluding that lower fixed costs are always better. Below break-even, Product B loses less. But above break-even, Product A generates significantly more profit for each additional unit sold.',
      whyItMatters:
        'Operating leverage is a double-edged sword: high-leverage businesses profit more when sales exceed break-even but lose more when sales fall short. This risk-return trade-off is central to business model design.',
      explainMore:
        'Both products break even at exactly 1,000 units (verify: A = $80,000 ÷ $80 CM = 1,000; B = $30,000 ÷ $30 CM = 1,000). At 2,000 units: A earns $80,000, B earns $30,000. Product A\'s higher CM ($80 vs $30) means each unit beyond break-even contributes far more to profit. This is operating leverage — the higher the fixed-cost structure, the more each incremental sale is worth once break-even is cleared.',
    },
    metricEffects: {
      correct: { cash: 6000, profit: 4000, reputation: 5 },
      incorrect: { profit: -2000, reputation: -4 },
    },
  },
  {
    id: 'fr-07',
    reviewTip: 'Integrated decisions require combining journal entry logic, inventory costing methods, CVP analysis, and revenue recognition principles simultaneously.',
    chapterId: 'final-round',
    title: 'Final Integrated Decision',
    description:
      'NorthStar Goods is closing out the fiscal year. The CFO asks you to review three statements:\n1. Inventory is valued at LIFO with a $15,000 LIFO reserve.\n2. A $3,000 accrued expense was not recorded at year-end.\n3. Current sales volume is 200 units above break-even.\n\nWhich statement indicates the MOST immediate risk to the financial statements?',
    question: 'Which issue poses the greatest financial reporting risk?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: 'The LIFO reserve — it understates inventory on the balance sheet' },
      { id: 'b', label: 'The unrecorded $3,000 accrued expense — it overstates net income' },
      { id: 'c', label: 'Being only 200 units above break-even — the margin of safety is too thin' },
      { id: 'd', label: 'All three are equally serious issues' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. The unrecorded accrued expense is an active misstatement — expenses are understated and net income is overstated right now. The LIFO reserve is a disclosed accounting choice, not a misstatement. The margin of safety is a business risk, not a financial reporting error.',
      incorrect:
        'Not quite. The LIFO reserve is a disclosed, permissible accounting method — not an error. The margin of safety is a business concern, not a financial reporting issue. The unrecorded accrued expense is an actual misstatement: expenses are understated and income is overstated in the current period.',
      keyInsight:
        'Financial reporting risk focuses on misstatements — items that are incorrectly recorded or omitted. A disclosed accounting method choice (LIFO) and an operational concern (margin of safety) are different categories of risk.',
      commonMistake:
        'Treating all three items as equivalent ignores their nature. A missing journal entry is an accounting error. A deliberate method choice with disclosure is not. And business risk (thin margin of safety) is a strategic concern, not an accounting one.',
      whyItMatters:
        'Auditors and CFOs must distinguish between accounting misstatements, permissible policy choices, and business risks. Each requires a different response and different levels of urgency.',
      explainMore:
        'Item 1 (LIFO reserve): Permissible under US GAAP; must be disclosed in notes. Not a misstatement. Item 2 (unrecorded accrual): Violates the matching principle and accrual accounting. This is an actual error — net income is overstated by $3,000. Must be corrected before financials are issued. Item 3 (thin margin of safety): A business concern requiring management attention, but not a financial reporting error. The accrual is the highest-priority issue.',
    },
    metricEffects: {
      correct: { cash: 5000, profit: 3000, reputation: 8 },
      incorrect: { profit: -3000, cash: -2000, reputation: -5 },
    },
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL SCENARIO POOL (20 scenarios)
  // Aligned with BUSI 7230 course notes
  // ─────────────────────────────────────────────────────────

  // CHAPTER 1 — DEBITS & CREDITS (8 new)

  {
    id: 'dc2-01',
    reviewTip: 'When wages are paid immediately in cash, debit Wages Expense (cost incurred) and credit Cash — no liability is created when payment is immediate.',
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
    reviewTip: 'Accrued wages at period-end are recorded as Debit Wages Expense, Credit Wages Payable, matching the cost to the period the work was performed.',
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
    difficulty: 'medium',
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
    reviewTip: 'Purchasing equipment for cash is an asset swap: debit Equipment (long-term asset increases) and credit Cash (current asset decreases).',
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
    difficulty: 'medium',
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
    reviewTip: 'Depreciation spreads an asset\'s cost over its useful life: debit Depreciation Expense and credit Accumulated Depreciation each period.',
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
    reviewTip: 'As prepaid insurance is consumed, the asset becomes an expense — debit Insurance Expense and credit Prepaid Insurance for the portion used each period.',
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
    reviewTip: 'Borrowing from the bank increases Cash (debit) and creates a Notes Payable liability (credit) — the full amount must eventually be repaid.',
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
    reviewTip: 'Delivering goods on a prepaid contract converts a liability to revenue — debit Unearned Revenue (liability decreases) and credit Revenue (earned).',
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
        'Two-entry lifecycle: At collection: Debit Cash $9,000 / Credit Unearned Revenue $9,000. At delivery: Debit Unearned Revenue $9,000 / Credit Sales Revenue $9,000. Under ASC 606, revenue is recognized when (or as) the performance obligation is satisfied — here, when the goods are delivered and control transfers to the customer.',
    },
    metricEffects: {
      correct: { profit: 2000, reputation: 5 },
      incorrect: { profit: -500, reputation: -3 },
    },
  },

  {
    id: 'dc2-08',
    reviewTip: 'Owner withdrawals or dividends reduce equity — debit Dividends/Drawings and credit Cash, reducing the owner\'s stake in the business.',
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

  // CHAPTER 2 — FIFO / LIFO (5 new)

  {
    id: 'fl2-01',
    reviewTip: 'With multiple LIFO layers, work backward from the newest layer and exhaust each one before moving to older layers until units sold are fully covered.',
    chapterId: 'fifo-lifo',
    title: 'Three-Layer LIFO Calculation',
    description:
      'NorthStar Goods has the following inventory (prices rising over time):\n• Batch 1 (oldest): 40 units @ $20 each\n• Batch 2: 60 units @ $25 each\n• Batch 3 (newest): 50 units @ $30 each\n\nThe company sells 80 units.',
    question: 'Using LIFO, what is the Cost of Goods Sold for these 80 units?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$2,000' },
      { id: 'b', label: '$2,100' },
      { id: 'c', label: '$2,250' },
      { id: 'd', label: '$2,750' },
    ],
    correctAnswer: 'c',
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
        'Correct. LIFO uses newest costs first: 50 units × $30 = $1,500, then 30 units × $25 = $750. Total COGS = $2,250.',
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
    reviewTip: 'Weighted average cost = Total Cost Available ÷ Total Units Available; this single rate is applied equally to both units sold and units remaining.',
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
    reviewTip: 'Compare FIFO vs. LIFO tax impact by computing each method\'s COGS separately — LIFO yields higher COGS in rising markets, reducing taxable income.',
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
    reviewTip: 'Under FIFO, ending inventory is valued at the most recent purchase prices, so rising prices produce a higher balance sheet inventory value.',
    chapterId: 'fifo-lifo',
    title: 'Ending Inventory Under FIFO',
    description:
      'NorthStar Goods had the following inventory activity in March:\n• March 1 (beginning): 20 units @ $15\n• March 10 purchase: 30 units @ $18\n• March 25 purchase: 25 units @ $20\n\nDuring March, 40 units were sold.',
    question: 'Under FIFO, what is the value of ending inventory?',
    type: 'multiple-choice',
    options: [
      { id: 'a', label: '$630' },
      { id: 'b', label: '$680' },
      { id: 'c', label: '$660' },
      { id: 'd', label: '$540' },
    ],
    correctAnswer: 'b',
    difficulty: 'hard',
    feedback: {
      correct:
        'Correct. Under FIFO, sell oldest first: all 20 @ $15 = $300, then 20 @ $18 = $360. Total COGS = $660. Remaining: 10 units @ $18 ($180) + 25 units @ $20 ($500) = $680 ending inventory.',
      incorrect:
        'Not quite. Under FIFO, oldest units are sold first. COGS = all 20 @ $15 ($300) + 20 more @ $18 ($360) = $660. Ending inventory = 10 remaining @ $18 ($180) + 25 @ $20 ($500) = $680.',
      keyInsight:
        'Under FIFO, ending inventory reflects the most recent (newest) costs — the inventory that was not sold. This makes the balance sheet more current-value relevant.',
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
    reviewTip: 'LIFO leaves older, lower-cost layers in ending inventory, which understates inventory on the balance sheet relative to current replacement prices.',
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

  // CHAPTER 3 — BREAK-EVEN / CVP (5 new)

  {
    id: 'be2-01',
    reviewTip: 'A contribution margin income statement separates variable from fixed costs to show how each unit sold contributes to covering fixed costs and generating profit.',
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
        'The contribution margin (CM) format separates costs by behavior (variable vs. fixed) rather than function. This layout directly shows how much revenue is contributing to covering fixed costs and generating profit.',
      commonMistake:
        'Subtracting fixed costs from revenue before subtracting variable costs produces the wrong answer. Always follow: Revenue − Variable Costs = CM, then CM − Fixed Costs = Operating Income.',
      whyItMatters:
        'The CM format is the foundation of CVP analysis. It reveals how each additional unit sold contributes $30 to covering fixed costs and profit — information invisible in the traditional income statement format.',
      explainMore:
        'Contribution Margin Format:\nRevenue:              1,000 × $50 = $50,000\n− Variable Costs:     1,000 × $20 = $20,000\n= Contribution Margin:              $30,000  (CM ratio = 60%)\n− Fixed Costs:                       $18,000\n= Operating Income:                  $12,000',
    },
    metricEffects: {
      correct: { profit: 2000, reputation: 5 },
      incorrect: { profit: -800, reputation: -3 },
    },
  },

  {
    id: 'be2-02',
    reviewTip: 'Target profit volume = (Fixed Costs + Target Profit) ÷ Contribution Margin per Unit — treat the desired profit as an additional fixed cost to recover.',
    chapterId: 'break-even',
    title: 'Target Profit Volume',
    description:
      'NorthStar Goods sells a product for $75. Variable cost is $25 per unit. Fixed costs are $80,000 per month. Management wants to earn $20,000 in operating profit this month.',
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
    reviewTip: 'Fixed costs stay constant regardless of volume (e.g., rent, salaries), while variable costs change in direct proportion to units produced or sold.',
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
    difficulty: 'hard',
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
    reviewTip: 'Break-even in sales dollars = Fixed Costs ÷ CM Ratio, where CM Ratio = Contribution Margin per Unit ÷ Selling Price per Unit.',
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
        'Dividing fixed costs by price (not CM ratio) gives break-even in units ($54,000 ÷ $100 = 540 units), not dollars. Always use the CM ratio when solving for break-even in sales dollars.',
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
    reviewTip: 'CVP analysis assumes linear cost and revenue relationships, a constant product mix, and stable prices — verify these assumptions before applying results.',
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
        'Correct. CVP assumes costs are linear and can be accurately separated into fixed and variable components. This is one of five key CVP assumptions: volume doesn\'t affect price, costs are linear/separable, sales mix is constant, inventory doesn\'t change, and the analysis stays within the relevant range.',
      incorrect:
        'Not quite. CVP assumptions include: (1) Volume doesn\'t affect price, (2) Costs are linear and divisible into fixed/variable, (3) Sales mix is constant, (4) Inventory doesn\'t change, (5) Operating within a relevant range.',
      keyInsight:
        'CVP is a planning model built on simplifying assumptions. When these assumptions are violated in practice, CVP results become less reliable — managers must exercise judgment about when the model applies.',
      commonMistake:
        'Saying "fixed costs per unit remain constant" is wrong — that\'s the opposite of reality. Fixed costs per unit DECREASE as volume rises (same total cost spread over more units). It\'s total fixed costs that stay constant.',
      whyItMatters:
        'Understanding CVP\'s assumptions helps managers know when to trust the model and when to seek more sophisticated analysis. Blindly applying CVP outside the relevant range leads to poor decisions.',
      explainMore:
        'The five CVP assumptions: 1) Volume changes do not affect price. 2) Costs are linear and can be accurately split fixed/variable. 3) Sales mix is constant (for multi-product firms). 4) Inventory on hand does not change. 5) Analysis stays within the relevant range. Beyond the relevant range, fixed costs may step up (new machinery) or variable cost rates may shift (volume discounts on materials), invalidating the model.',
    },
    metricEffects: {
      correct: { reputation: 7 },
      incorrect: { reputation: -3 },
    },
  },

  // CHAPTER 4 — FINAL ROUND / INTEGRATED (2 new)

  {
    id: 'fr2-01',
    reviewTip: 'A CVP income statement shows Sales − Variable Costs = Contribution Margin − Fixed Costs = Operating Income, all tied back to the break-even formula.',
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
        'Multiplying total revenue ($225,000) by the CM ratio (40%) gives total CM ($90,000), which is correct — but don\'t forget to subtract fixed costs to get operating income.',
      whyItMatters:
        'Integrating break-even, target-profit, and income statement skills is exactly the kind of analysis Finance Directors use to evaluate whether new product lines are financially sound.',
      explainMore:
        'Full CM income statement:\nRevenue:           2,500 × $90 = $225,000\n− Variable Costs:  2,500 × $54 = $135,000\n= CM:                              $90,000  (CM ratio = 40%)\n− Fixed Costs:                     $72,000\n= Operating Income:                $18,000\n\nBreak-even: $72,000 ÷ $36 = 2,000 units ($180,000 in sales).\nMargin of safety: 500 units or $45,000 in revenue (20% above break-even).',
    },
    metricEffects: {
      correct: { profit: 3000, cash: 5000, reputation: 7 },
      incorrect: { profit: -2000, reputation: -3 },
    },
  },

  {
    id: 'fr2-02',
    reviewTip: 'LIFO reduces taxable income in inflationary periods via higher COGS, but also lowers reported profit and balance sheet inventory — a deliberate tax vs. optics trade-off.',
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
        'The LIFO trade-off: lower reported profits (worse for investor optics) but real cash tax savings (better for cash flow). Management must weigh which matters more for their stakeholders.',
      commonMistake:
        'Forgetting to apply the tax rate to the COGS difference leads to overstating the net income impact. The after-tax hit is always less than the pretax COGS increase because taxes fall proportionally.',
      whyItMatters:
        'This is the core strategic LIFO decision. Caterpillar accepted lower reported profits to capture $968M in cumulative tax savings. The cash is real — reported income is just a number.',
      explainMore:
        'Under FIFO: Pretax income $200K → Tax (25%) $50K → Net income $150K.\nUnder LIFO: COGS increases $40K → Pretax income $160K → Tax (25%) $40K → Net income $120K.\n\nChanges:\n• Net income: $120K − $150K = −$30,000 (lower reported profit)\n• Cash taxes: $40K − $50K = −$10,000 (real cash saved)\n\nThis is why companies use LIFO in inflationary periods despite the lower reported earnings.',
    },
    metricEffects: {
      correct: { profit: 2000, cash: 4000, reputation: 7 },
      incorrect: { profit: -2000, reputation: -4 },
    },
  },
];
