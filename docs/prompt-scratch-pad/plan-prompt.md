Given the `business-case.md` and `specification.md` documents, we will now complete the plan for the Elsewhere: Business Decision Impact Explorer application using `plan.md` as the starting template. We also have `plan-guide.md` as a reference.

Maintain the format of the original plan template while using the specification as the source of truth. Every major decision and component in the plan should trace back to the appropriate requirement IDs (R1-R7). Do not add features that are outside the scope of the specification.

# Approach Summary

Elsewhere will be developed as a web application that helps business managers and team leaders examine the broader effects of proposed business decisions. The application will begin with a functional front-end prototype using the existing course application template and placeholder data. Users will be able to browse proposed decisions, select one for more detail, and review the primary benefit and secondary impacts on employees, customers, costs, and operations. The interface will also clearly distinguish documented impacts from assumptions and identify whether secondary impacts are positive or negative.

# Tech Stack

- Frontend: The existing course web application template using HTML, CSS, and JavaScript.
- Backend/DB: None for the initial front-end prototype. Placeholder decision and impact data will be used during this stage.
- Hosting: GitHub Pages.
- Other services/APIs: None for the initial prototype.

# Key Decisions

- Use the existing course web application template rather than building the front end from scratch. This keeps the project manageable and allows development to focus on Elsewhere's requirements.

- Use placeholder data for the initial prototype instead of connecting to live company data or a database. The goal of this stage is to demonstrate how users will browse and understand business decisions and their impacts.

- Present each proposed decision with a primary benefit and secondary impacts organized by business area, including employees, customers, costs, and operations.

- Clearly label each impact as documented or an assumption/estimate so users can understand the reliability of the information.

- Clearly identify secondary impacts as positive or negative without relying only on color, so the information remains understandable and accessible.

When creating ADRs from these decisions, connect each decision to the appropriate requirements from R1-R7 and include reasonable alternatives that were considered.

# Components / Building Blocks

- Decision Collection View: Displays the collection of proposed business decisions for users to browse. This supports R1.

- Decision Detail View: Displays the selected decision and its detailed information. This supports R2.

- Primary Benefit Section: Shows the main benefit associated with the selected business decision. This supports R3.

- Secondary Impacts Section: Shows potential secondary impacts and identifies the affected business area, including employees, customers, costs, and operations. This supports R3 and R4.

- Impact Source Labels: Identifies whether an impact is documented or based on an assumption or estimate and provides an explanation of those labels. This supports R5 and R7.

- Impact Direction Labels: Clearly identifies whether each secondary impact is positive or negative. This supports R6.

- Placeholder Decision Data: Provides sample decision and impact information needed to demonstrate the front-end prototype without using live company data.

# Dependencies & Assumptions

- Dependencies: The existing course web application template, VS Code for development, GitHub for version control, and GitHub Pages for hosting the front-end prototype.

- Assumption: The initial prototype will use placeholder data rather than live company data.

- Assumption: Users will be able to understand the business impact categories of employees, customers, costs, and operations.

- Assumption: Clear text labels and explanations will help users distinguish documented impacts from assumptions and positive impacts from negative impacts.

- Assumption: The prototype does not need user accounts, authentication, or integration with external company systems.

# Risks

- Users may have difficulty understanding the difference between documented impacts and assumptions. Likelihood: Medium. Impact: High. Mitigation: Use clear labels and provide an explanation of what each label means.

- Users may not clearly understand whether a secondary impact is positive or negative. Likelihood: Medium. Impact: Medium. Mitigation: Use text labels in addition to visual styling so meaning does not depend only on color.

- The amount of impact information displayed for a decision could make the interface difficult to understand. Likelihood: Medium. Impact: Medium. Mitigation: Organize impacts by business area and keep the information clearly structured.

- Placeholder data may not represent every real-world business decision or impact. Likelihood: High. Impact: Low. Mitigation: Use realistic sample data while clearly treating the application as a prototype.

# Sequencing

Build the prototype in an order that addresses the most uncertain parts of the design while keeping dependencies in mind.

1. Establish the placeholder data structure for proposed decisions, primary benefits, secondary impacts, business areas, impact direction, and documented/assumption status.
2. Develop the decision collection view so users can browse proposed decisions.
3. Develop the decision detail view and display the primary benefit and secondary impacts.
4. Organize secondary impacts by affected business area.
5. Add clear documented/assumption labels and explanations.
6. Add clear positive/negative impact labels without relying only on color.
7. Review the completed prototype against R1-R7 and test whether the information and labels are easy to understand.

When completing the Sequencing section of the plan, explain briefly why this order makes sense and keep it focused on the front-end prototype.

# Final Instructions

Using all of the information above:

1. Complete `docs/design/plan.md` using the existing plan template.
2. Keep all original section headings and tables from the template.
3. Make every ADR traceable to the appropriate requirement IDs (R1-R7).
4. Make every component traceable to the appropriate requirement IDs.
5. Include meaningful alternatives and a short rationale for each ADR.
6. Include likelihood, impact, mitigation, and owner for every risk.
7. Keep the plan focused on the current front-end prototype and do not add features that are outside the specification.
8. Do not remove or change the original requirements.
9. Use clear, concise language appropriate for a student project.
10. Do not generate the tasks document yet. The plan must be reviewed and approved first.