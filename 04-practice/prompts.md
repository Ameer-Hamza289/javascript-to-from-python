# Practice Prompts

## Ex 01 — Cart total
Write `lineTotal(price, qty)` and `cartTotal(items)`.
- `items` is a list/array of `{ price, qty }` / `{"price", "qty"}`.
- Ignore invalid lines where price or qty is negative.
- Return the sum of valid line totals.

## Ex 02 — Grade report
Write `letterGrade(score)` → `"A"|"B"|"C"|"D"|"F"`  
Thresholds: A≥90, B≥80, C≥70, D≥60, else F.

Write `summarize(scores)` where `scores` is a name→score map.
Return a map of name→letter grade.

## Ex 03 — Unique words
Write `uniqueWords(text)`:
- Lowercase
- Split on whitespace
- Strip trailing punctuation `. , ! ?`
- Return sorted unique words

## Ex 04 — Mini bank
Create a `BankAccount` class:
- construct with `owner` and optional `opening` balance (default 0)
- `deposit(amount)` / `withdraw(amount)` — amount must be positive; withdraw cannot exceed balance
- read-only `balance`
- throw/raise on invalid operations

## Ex 05 — Shapes
Implement `Circle(radius)` and `Rectangle(width, height)` with `area()`.
Write `largest(shapes)` returning the shape with the greatest area (or `null`/`None` if empty).
Checks use `Circle(1)` and `Rectangle(3, 4)` so the rectangle should win.
