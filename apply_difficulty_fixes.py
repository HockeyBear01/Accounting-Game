#!/usr/bin/env python3
"""
Apply difficulty tag corrections and be-06 option label fix to src/data/scenarios.ts

Changes:
  dc-05:  medium -> easy
  dc-06:  medium -> easy
  dc-08:  medium -> easy
  dc2-03: easy   -> medium
  dc2-06: medium -> hard
  dc2-07: hard   -> medium
  be2-03: medium -> hard
  fr-02:  medium -> easy
  be-06 option (b): '1,500 units' -> '1,250 units'
"""

import re
import sys

SCENARIOS_PATH = "src/data/scenarios.ts"

# Each fix is (scenario_id, old_difficulty, new_difficulty)
DIFFICULTY_FIXES = [
    ("dc-05",  "medium", "easy"),
    ("dc-06",  "medium", "easy"),
    ("dc-08",  "medium", "easy"),
    ("dc2-03", "easy",   "medium"),
    ("dc2-06", "medium", "hard"),
    ("dc2-07", "hard",   "medium"),
    ("be2-03", "medium", "hard"),
    ("fr-02",  "medium", "easy"),
]

def apply_difficulty_fixes(content: str) -> tuple[str, list[str]]:
    changes = []
    for scenario_id, old_diff, new_diff in DIFFICULTY_FIXES:
        # Match the scenario block starting at its id field, then find its difficulty field
        # Pattern: find id: 'X', then within ~30 lines find difficulty: 'old'
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


def apply_be06_fix(content: str) -> tuple[str, list[str]]:
    changes = []
    # Find the be-06 scenario block and fix the option label
    # The option reads: { id: 'b', label: '1,500 units' }
    # We only want to change this within the be-06 block, so anchor to be-06 id first
    pattern = (
        r"(id:\s*'be-06'.*?)"
        r"(\{\s*id:\s*'b',\s*label:\s*'1,500 units'\s*\})"
    )
    replacement = r"\g<1>{ id: 'b', label: '1,250 units' }"
    new_content, n = re.subn(pattern, replacement, content, count=1, flags=re.DOTALL)
    if n == 1:
        content = new_content
        changes.append("  ✓ be-06 option (b): '1,500 units' -> '1,250 units'")
    else:
        changes.append("  ✗ be-06 option (b): NOT FOUND — check label text in file")
    return content, changes


def main():
    try:
        with open(SCENARIOS_PATH, "r", encoding="utf-8") as f:
            original = f.read()
    except FileNotFoundError:
        print(f"ERROR: Could not find {SCENARIOS_PATH}")
        print("Make sure you run this script from the repo root directory.")
        sys.exit(1)

    print("Applying difficulty tag fixes...")
    content, diff_changes = apply_difficulty_fixes(original)
    for msg in diff_changes:
        print(msg)

    print("\nApplying be-06 option label fix...")
    content, be_changes = apply_be06_fix(content)
    for msg in be_changes:
        print(msg)

    # Check for any failures
    all_changes = diff_changes + be_changes
    failures = [m for m in all_changes if m.strip().startswith("✗")]
    if failures:
        print(f"\n⚠️  {len(failures)} fix(es) did not apply. The file has NOT been written.")
        print("Check the scenario IDs and option labels in the file and re-run.")
        sys.exit(1)

    with open(SCENARIOS_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    total = len(all_changes)
    print(f"\n✅ All {total} fixes applied successfully. {SCENARIOS_PATH} updated.")


if __name__ == "__main__":
    main()
