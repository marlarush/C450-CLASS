Using the completed `plan.md` and `specification.md`, we will now develop the tasks for the Elsewhere: Business Decision Impact Explorer application. Use `tasks.md` as the starting template and `tasks-guide.md` as the reference guide.

The tasks should focus only on adapting the existing course web application into a working front-end prototype. Do not add a database, authentication, live company data, external APIs, or other features that are outside the current specification.

Each task must:
- Be small and checkable.
- Begin with a clear action verb.
- Trace to the appropriate requirement (R1-R7) and/or ADR from the approved plan.
- Include dependencies when another task must be completed first.
- Follow the sequencing established in `plan.md`.
- Start with a status of "Not started."

# Task Focus

Create tasks for the following parts of the Elsewhere front-end prototype:

- Set up placeholder data for proposed business decisions, primary benefits, secondary impacts, affected business areas, documented/assumption status, and positive/negative impact direction.
- Build the decision collection view required by R1.
- Allow a user to select a decision and view its details as required by R2.
- Display the primary benefit and secondary impacts required by R3.
- Identify the affected business area for each secondary impact as required by R4.
- Clearly distinguish documented impacts from assumptions or estimates as required by R5.
- Clearly identify each secondary impact as positive or negative as required by R6.
- Provide a clear explanation of documented and assumption labels as required by R7.
- Include tasks for reviewing and testing the prototype against the specification's acceptance criteria and accessibility expectations.

# Task Sequencing

Organize the tasks in the same general order established in the approved plan:

1. Prepare the placeholder decision and impact data structure.
2. Build the decision collection view.
3. Build the decision detail view.
4. Display and organize secondary impacts by business area.
5. Add documented/assumption labels and their explanations.
6. Add positive/negative impact labels.
7. Review and test the prototype against R1-R7 and the specification's acceptance criteria.

Break these areas into small tasks where appropriate rather than making each step one large task. Do not create tasks for future backend or production features.

# Final Instructions

Using the information above:

1. Complete `docs/design/tasks.md` using the existing tasks template.
2. Keep the original template structure, including the Task List, Definition of Done, and Blocked / Questions sections.
3. Give each task a unique ID beginning with T1.
4. Make each task specific, small, and checkable.
5. Trace every task to the appropriate R1-R7 requirement and/or ADR from `plan.md`.
6. Identify task dependencies using the task IDs.
7. Set every initial task status to "Not started."
8. Keep the tasks focused on the current front-end prototype.
9. Do not add features that are outside the specification or approved plan.
10. Preserve the Definition of Done from the original template.