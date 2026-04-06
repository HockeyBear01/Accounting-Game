#!/usr/bin/env python3
"""
Apply three additional difficulty tag corrections to src/data/scenarios.ts

Changes:
  dc-07:  medium -> easy   (Owner Investment — same level as other basic cash entries)
  dc-10:  hard   -> medium (Accruing Unpaid Utilities — accruals are medium, not hard)
  dc2-02: easy   -> medium (Accruing Wages — accruals shouldn't be easy)
"""

import re
import sys

SCENARIOS_PATH = "src/data/scenarios.ts"

DIFFICULTY_FIXES = [
    ("dc-07",  "medium", "easy"),
    ("dc-10",  "hard",   "medium"),
    ("dc2-02", "easy",   "medium"),
]

def apply_fixes(content: str) -> tuple[str, list[str]]:
    changes = []
    for scenario_id, old_diff, new_diff in DIFFICULTY_FIXES:
        pattern = (
            r"(id:\s*'" + re.escape(scenario_id) + r"'.*?)"
            r"(difficulty:\s*'" + re.escape(old_diff) + r"')"
        )
        replacement = r"\g<1>difficulty: '" + new_diff + "'"
        new_content, n = re.subn(pattern, replacement, content, count=1, flags=re.DOTALL)
        if n == 1:
            content = new_content
            changes.append(f"  ✓ {scenario_id}: '{old_diff}' -> '{new_diff}'")
        else:
            changes.append(f"  ✗ {scenario_id}: NOT FOUND (id+difficulty combo '{old_diff}' not matched)")
    return content, changes


def main():
    try:
        with open(SCENARIOS_PATH, "r", encoding="utf-8") as f:
            original = f.read()
    except FileNotFoundError:
        print(f"ERROR: Could not find {SCENARIOS_PATH}")
        print("Make sure you run this script from the repo root directory.")
        sys.exit(1)

    print("Applying difficulty tag corrections...")
    content, changes = apply_fixes(original)
    for msg in changes:
        print(msg)

    failures = [m for m in changes if "✗" in m]
    if failures:
        print(f"\n⚠️  {len(failures)} fix(es) did not apply. File NOT written.")
        sys.exit(1)

    with open(SCENARIOS_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"\n✅ All {len(changes)} fixes applied. {SCENARIOS_PATH} updated.")


if __name__ == "__main__":
    main()
