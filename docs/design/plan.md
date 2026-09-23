# Plan — Elsewhere: Business Decision Impact Explorer

> Written after specification. Every decision here must trace back to a requirement ID.

## 1. Approach Summary
Elsewhere will be built as a lightweight front-end prototype using the existing course web application template. Users will browse a collection of proposed business decisions, open one for details, and review its primary benefit alongside secondary impacts on employees, customers, costs, and operations. The interface will clearly label impacts as documented or assumption-based and will show whether each secondary impact is positive or negative without relying only on color.

## 1.5 Tech Stack
- Frontend: Existing course web application template using HTML, CSS, and JavaScript
- Backend/DB: None for the initial prototype; placeholder decision data in the front end
- Hosting: GitHub Pages
- Other services/APIs: None for the initial prototype

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|-------|----------|------------------|---------------------------|----------------|
| ADR-00 | Use the existing course web application template for the front-end prototype instead of building a new framework from scratch | R1, R2, R3, R4, R5, R6, R7 | Build a custom app structure; use a different framework | The template already matches the project requirements, keeps the scope manageable, and supports a quick prototype within the course timeline |
| ADR-01 | Use placeholder decision data for the initial prototype instead of live company data | R1, R2, R3, R4, R5, R6, R7 | Connect to live business data; use an external database | The prototype is intended to demonstrate the user experience and information structure, not to run production analytics or a live business system |
| ADR-02 | Present each decision with a primary benefit and a grouped set of secondary impacts by affected business area | R3, R4 | Show only a single summary sentence; list impacts without grouping by area | Grouping by employees, customers, costs, and operations makes comparisons easier and matches the requirement to identify affected areas clearly |
| ADR-03 | Clearly label each impact as documented or assumption/estimate, and explain the meaning of those labels in the interface | R5, R7 | Use only raw impact text with no labeling; hide the explanation in documentation | Users must be able to distinguish supported information from estimated information before making a judgment, which is a core principle of the product |
| ADR-04 | Use explicit text labels such as “Positive” and “Negative” for secondary impacts, not color alone | R6 | Use only green/red color coding | This improves clarity and accessibility, and it ensures the meaning is understandable even without color perception |

## 3. Components / Building Blocks
List the major pieces (screens, services, data stores). No code — just names and purpose.

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Decision Collection View | Displays the list of proposed business decisions for browsing | R1 |
| Decision Detail View | Shows the selected business decision and its detailed information | R2 |
| Primary Benefit Section | Displays the main benefit associated with the selected decision | R3 |
| Secondary Impacts Section | Shows the secondary impacts, including their impact direction and affected business area | R3, R4, R6 |
| Business Area Grouping | Organizes impacts under categories such as employees, customers, costs, and operations | R4 |
| Impact Source Labels | Identifies whether an impact is documented or based on an assumption or estimate | R5, R7 |
| Impact Direction Labels | Indicates whether each secondary impact is positive or negative using text labels | R6 |
| Placeholder Decision Data | Supplies sample decisions and impacts for the prototype without using live company data | R1, R2, R3, R4, R5, R6, R7 |

## 4. Dependencies & Assumptions
- External services/tools needed: Existing course web application template, VS Code for development, GitHub for version control, GitHub Pages for prototype hosting
- Assumptions being made: The prototype will use placeholder data rather than live business systems or external data feeds
- Assumptions being made: Users will understand the impact categories of employees, customers, costs, and operations without extra training
- Assumptions being made: Clear explanations may help users distinguish documented impacts from assumptions, but this will need to be evaluated during prototype testing.
- Assumptions being made: The solution does not require user accounts, authentication, or live collaboration features during this prototype stage

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| Users may confuse documented impacts with assumptions or estimates | Medium | High | Add clear labels and a short explanation beside the labels so the difference is easy to understand | Marla Rush |
| Users may not understand whether a secondary impact is positive or negative | Medium | Medium | Use text labels such as “Positive” and “Negative” in addition to styling so meaning is not color-dependent | Marla Rush |
| Too much impact detail may make the page hard to read | Medium | Medium | Organize impacts by business area and keep each item concise and clearly structured | Marla Rush |
| Placeholder data may not fully represent real business decisions | High | Low | Use realistic sample data and clearly present the app as a prototype rather than a final decision system | Marla Rush |

## 6. Sequencing
1. Establish the placeholder data structure for each decision, its primary benefit, and its secondary impacts, including business area, documented/assumption status, and impact direction.
2. Build the decision collection view so users can browse proposed decisions and select one to review.
3. Build the decision detail view to show the selected decision, its primary benefit, and the list of secondary impacts.
4. Group secondary impacts by affected business area so employees, customers, costs, and operations can be compared clearly.
5. Add the documented-versus-assumption labels and a brief explanation of what those labels mean.
6. Add explicit positive/negative labels for each impact so the information is clear without relying on color alone.
7. Review the completed prototype against R1–R7 to confirm the app is understandable, accessible, and aligned with the specification.

This order makes sense because the data structure is the foundation for everything else, and the most uncertain parts of the design are the impact classification and labeling. By building the collection and detail views next, the team can confirm the core browsing flow before refining the explanation and clarity features that support the user’s understanding of the information.

## 7. Review & Approval
| Reviewer | Date | Approved? |
|----------|------|-----------|
| Marla Rush | 2026-09-22 | Yes |

**Gate:** Do not generate tasks until this plan is done.