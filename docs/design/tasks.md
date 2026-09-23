# Tasks — Elsewhere: Business Decision Impact Explorer

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|--------------------------|------------|--------|
| T1 | Create the placeholder decision data structure for proposed decisions, primary benefits, and secondary impacts | R1, R3, R4, R5, R6, ADR-01 — | Not started |
| T2 | Add sample decision records to the app's front-end data source so the prototype can load realistic content | R1, ADR-01 | T1 | Not started |
| T3 | Build the decision collection view to display all proposed decisions in the main page list | R1, ADR-00 | T2 | Not started |
| T4 | Connect each decision item in the collection view to a selection action that loads the chosen decision | R2, ADR-00 | T3 | Not started |
| T5 | Build the decision detail view to show the selected decision title and summary information | R2, ADR-00 | T4 | Not started |
| T6 | Display the primary benefit section on the decision detail page | R3, ADR-02 | T5 | Not started |
| T7 | Display the secondary impact list for the selected decision with each impact description included | R3, ADR-02 | T5 | Not started |
| T8 | Group secondary impacts by affected business area so employees, customers, costs, and operations are clearly separated | R4, ADR-02 | T7 | Not started |
| T9 | Label each impact as Documented or Assumption/Estimate so users can distinguish the source of the information | R5, ADR-03 | T7 | Not started |
| T10 | Add a short explanation in the UI that defines what the Documented and Assumption/Estimate labels mean | R7, ADR-03 | T9 | Not started |
| T11 | Add explicit text labels for each secondary impact to show whether it is Positive or Negative | R6, ADR-04 | T7 | Not started |
| T12 | Review the prototype against the acceptance criteria for R1-R7 and check accessibility and readability requirements | R1, R2, R3, R4, R5, R6, R7, ADR-00, ADR-02, ADR-03, ADR-04 | T6, T8, T9, T10, T11 | Not started |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)
- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions
| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| | | | |
