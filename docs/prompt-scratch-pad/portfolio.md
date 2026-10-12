# Elsewhere: Business Decision Impact Explorer — Portfolio

# Part 1: Traceability Audit

| Business case benefit | Requirement | Acceptance test | ADR | Task |
|---|---|---|---|---|
| **Improved visibility across departments** — Helps decision-makers see how a proposed change may affect areas outside their own department. | **R3** — When a user views a proposed business decision, the system shall display its primary benefit and potential secondary impacts. | Select a proposed decision and review its impact information. **Pass:** The primary benefit and potential secondary impacts are displayed. | **ADR-02** — Present each decision with a primary benefit and a grouped set of secondary impacts by affected business area. | **T6** — Display the primary benefit section on the decision detail page. |
| **More consistent decision review** — Gives teams a common structure for considering benefits, risks, affected groups, and secondary effects. | **R5** — The system shall clearly distinguish documented impacts from assumptions or estimates. | Review the impact information for a proposed decision. **Pass:** Documented impacts are clearly distinguishable from assumptions or estimates. | **ADR-03** — Clearly label each impact as documented or assumption/estimate and explain the meaning of those labels in the interface. | **T9** — Label each impact as Documented or Assumption/Estimate so users can distinguish the source of the information. |
| **Earlier identification of secondary costs** — Seeing impacts across departments may reveal costs that could otherwise be overlooked before a decision is approved. | **R6** — The system shall clearly indicate whether each secondary impact is positive or negative. | Review the secondary impacts for a proposed decision. **Pass:** Each secondary impact is clearly identified as positive or negative. | **ADR-04** — Use explicit text labels such as “Positive” and “Negative” for secondary impacts, not color alone. | **T11** — Add explicit text labels for each secondary impact to show whether it is Positive or Negative. |

# Part 2: AI Collaboration Evidence

## Prompt A — Worked Well

### 1. Prompt text as written

Given the `business-case.md` and `specification.md` documents, we will now complete the plan for the Elsewhere: Business Decision Impact Explorer application using `plan.md` as the starting template. We also have `plan-guide.md` as a reference.

Maintain the format of the original plan template while using the specification as the source of truth. Every major decision and component in the plan should trace back to the appropriate requirement IDs (R1-R7). Do not add features that are outside the scope of the specification.

**# Approach Summary**

Elsewhere will be developed as a web application that helps business managers and team leaders examine the broader effects of proposed business decisions. The application will begin with a functional front-end prototype using the existing course application template and placeholder data. Users will be able to browse proposed decisions, select one for more detail, and review the primary benefit and secondary impacts on employees, customers, costs, and operations. The interface will also clearly distinguish documented impacts from assumptions and identify whether secondary impacts are positive or negative.

**# Tech Stack**

- Frontend: The existing course web application template using HTML, CSS, and JavaScript.
- Backend/DB: None for the initial front-end prototype. Placeholder decision and impact data will be used during this stage.
- Hosting: GitHub Pages.
- Other services/APIs: None for the initial prototype.

**# Key Decisions**

- Use the existing course web application template rather than building the front end from scratch. This keeps the project manageable and allows development to focus on Elsewhere's requirements.
- Use placeholder data for the initial prototype instead of connecting to live company data or a database. The goal of this stage is to demonstrate how users will browse and understand business decisions and their impacts.
- Present each proposed decision with a primary benefit and secondary impacts organized by business area, including employees, customers, costs, and operations.
- Clearly label each impact as documented or an assumption/estimate so users can understand the reliability of the information.
- Clearly identify secondary impacts as positive or negative without relying only on color, so the information remains understandable and accessible.

When creating ADRs from these decisions, connect each decision to the appropriate requirements from R1-R7 and include reasonable alternatives that were considered.

**# Components / Building Blocks**

- Decision Collection View: Displays the collection of proposed business decisions for users to browse. This supports R1.
- Decision Detail View: Displays the selected decision and its detailed information. This supports R2.
- Primary Benefit Section: Shows the main benefit associated with the selected business decision. This supports R3.
- Secondary Impacts Section: Shows potential secondary impacts and identifies the affected business area, including employees, customers, costs, and operations. This supports R3 and R4.
- Impact Source Labels: Identifies whether an impact is documented or based on an assumption or estimate and provides an explanation of those labels. This supports R5 and R7.
- Impact Direction Labels: Clearly identifies whether each secondary impact is positive or negative. This supports R6.
- Placeholder Decision Data: Provides sample decision and impact information needed to demonstrate the front-end prototype without using live company data.

**# Dependencies & Assumptions**

- Dependencies: The existing course web application template, VS Code for development, GitHub for version control, and GitHub Pages for hosting the front-end prototype.
- Assumption: The initial prototype will use placeholder data rather than live company data.
- Assumption: Users will be able to understand the business impact categories of employees, customers, costs, and operations.
- Assumption: Clear text labels and explanations will help users distinguish documented impacts from assumptions and positive impacts from negative impacts.
- Assumption: The prototype does not need user accounts, authentication, or integration with external company systems.

**# Risks**

- Users may have difficulty understanding the difference between documented impacts and assumptions. Likelihood: Medium. Impact: High. Mitigation: Use clear labels and provide an explanation of what each label means.
- Users may not clearly understand whether a secondary impact is positive or negative. Likelihood: Medium. Impact: Medium. Mitigation: Use text labels in addition to visual styling so meaning does not depend only on color.
- The amount of impact information displayed for a decision could make the interface difficult to understand. Likelihood: Medium. Impact: Medium. Mitigation: Organize impacts by business area and keep the information clearly structured.
- Placeholder data may not represent every real-world business decision or impact. Likelihood: High. Impact: Low. Mitigation: Use realistic sample data while clearly treating the application as a prototype.

**# Sequencing**

Build the prototype in an order that addresses the most uncertain parts of the design while keeping dependencies in mind.

1. Establish the placeholder data structure for proposed decisions, primary benefits, secondary impacts, business areas, impact direction, and documented/assumption status.
2. Develop the decision collection view so users can browse proposed decisions.
3. Develop the decision detail view and display the primary benefit and secondary impacts.
4. Organize secondary impacts by affected business area.
5. Add clear documented/assumption labels and explanations.
6. Add clear positive/negative impact labels without relying only on color.
7. Review the completed prototype against R1-R7 and test whether the information and labels are easy to understand.

When completing the Sequencing section of the plan, explain briefly why this order makes sense and keep it focused on the front-end prototype.

**# Final Instructions**

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

### 2. Document/context given to AI

I provided the AI with my `business-case.md`, `specification.md`, `plan.md` template, and `plan-guide.md`. I also included the planned approach, technology stack, major decisions, components, assumptions, risks, and sequencing. I instructed the AI to use the Specification as the source of truth and keep every major decision traceable to R1–R7.

### 3. What AI produced and what I changed

The AI completed the Plan using the required template and created ADRs that traced the technical and design decisions back to my requirements. It also organized the components, risks, dependencies, and build sequence. I reviewed the completed Plan before approving it and made sure it stayed within the front-end prototype scope before moving on to the Tasks document.

### 4. Reflection

This prompt worked well because I gave the AI detailed project context instead of asking it to create a plan from a general description. I also gave clear limits, such as keeping the project focused on the front-end prototype and not creating tasks yet. Requiring the ADRs and components to trace back to R1–R7 helped keep the output connected to my Specification. I learned that giving AI the source documents, constraints, and expected format produces a result that needs less correction.

## Prompt B — Needed Improvement

### 1. Prompt text

Complete T5 only for the Elsewhere: Business Decision Impact Explorer. Build the decision detail view for the selected decision. Use the existing CSV data and current project structure. In the CSV, use `name` as the decision title and `description` as the summary. Do not implement T6 or later tasks yet. Keep the implementation limited to T5 and the requirements already defined for the project.

### 2. Document/context given to AI

I was working in VS Code with Copilot and had already completed T1–T4. The project used CSV data for the sample business decisions, and T5 required the selected decision's title and summary to appear in the detail view. I also had my Specification and Tasks documents available so the implementation could be checked against R2 and T5.

### 3. What AI produced and what I changed

The first approach was too generic because the AI did not have enough information about how the fields in my CSV matched the information needed on the detail page. I had to clarify that the CSV field `name` should be used as the decision title and `description` should be used as the summary. I also narrowed the instructions so Copilot worked on T5 only instead of moving ahead to later features. After the change, I manually checked the detail view to make sure the selected decision displayed the correct information.

### 4. Reflection

This interaction did not go as well at first because I assumed the AI would understand how my CSV fields connected to the requirements. I learned that even when AI can see the project, I still need to be specific about the data and the exact task I want completed. Adding the field mappings and limiting the prompt to T5 gave me a more focused result. If I wrote the prompt again, I would include those details from the beginning instead of expecting the AI to figure them out.

# Part 3: Document Reflection

## 1. Which document paid off most? Why?

The **Specification** paid off the most for my project because it became the document I could go back to when I was unsure about what Elsewhere was actually supposed to do. Defining R1–R7 gave me a clear boundary for the project and helped keep the later Plan and Tasks connected to the original idea. For example, R5 required the application to distinguish documented impacts from assumptions or estimates, and that requirement eventually became ADR-03 and T9. Having that connection made it easier to check whether I was actually building what I originally planned instead of just adding features as I went.

The Specification was also useful when working with AI because I could give it specific requirement IDs instead of relying on a general explanation of the project. That made it easier to review AI-generated work and recognize when something did not match the approved scope.

## 2. Which document needed the most improvement? Why, and what would you change?

The **Design System** needed the most improvement. It gave me a basic direction for colors, typography, spacing, components, and accessibility, but compared with my other project documents, it was not very detailed. For example, it says that positive and negative impacts should be visually distinguishable and that the design should not rely only on color, but it does not define exactly how those labels, cards, and impact sections should look in different situations.

If I improved the Design System, I would add examples of the actual Elsewhere components, including the decision cards, impact labels, documented/assumption labels, and the detail view. I would also define things such as button states, card spacing, label styles, and how the interface should behave on smaller screens. That would make the document more useful during development and give AI clearer design rules to follow instead of leaving those decisions to be made while coding.

# Appendix: Aggregated Documents

## Business Case

# Business Case — Elsewhere: Business Decision Impact Explorer

## 1. Problem / Opportunity

Business decisions are often evaluated based on their immediate benefits, while their effects on other departments, employees, customers, and operating costs may be scattered across reports, meetings, and conversations. Without a clear way to view these connections together, decision-makers may overlook secondary impacts that change whether a decision is actually beneficial.

## 2. Proposed Solution

Elsewhere is a web application that brings the potential impacts of proposed business decisions into one view. Users can browse decisions under consideration and select one to review its goal, expected benefits, affected departments, risks, and possible secondary effects on employees, customers, costs, and operations. This gives decision-makers a clearer picture of the tradeoffs involved before deciding whether to move forward.

## 3. Options Considered

| Option | Description | Pros | Cons |
|---|---|---|---|
| Option A — Continue with existing tools | Use current reports, spreadsheets, email, and meetings to evaluate proposed business decisions. | Little or no new cost; employees are already familiar with the tools. | Information remains scattered; secondary impacts may be harder to identify; comparing decisions can be inconsistent. |
| Option B — Elsewhere (recommended) | Use a dedicated web application to organize proposed decisions and their potential impacts in one place. | Provides a consistent view of benefits, risks, affected groups, and secondary effects; makes decisions easier to review and compare. | Requires development and maintenance; users must adopt a new tool and keep decision information current. |

## 4. Feasibility

| Type | Assessment |
|---|---|
| Operational — will people actually use/support this? | Elsewhere could be useful to managers, analysts, and project teams that need to evaluate decisions involving multiple parts of an organization. Its value depends on users entering accurate information and keeping decision impacts current. |
| Technical — can we build it with what we have/can get? | Yes. A functional prototype can be developed using the existing web application template. The core design requires displaying a collection of proposed decisions and allowing users to select an individual decision for a more detailed view. |
| Economic — does the payoff justify the cost? | Potentially. Elsewhere could reduce time spent gathering decision information from separate sources and help organizations identify costly secondary effects before changes are approved. A cost-benefit analysis is needed to determine whether those savings justify development and operating costs. |
| Schedule — can it be done in a useful timeframe? | Yes. The prototype remains close to the structure of the provided application, which limits the amount of new functionality required and makes a usable version achievable within the project timeframe. |

## 5. Costs & Benefits

**Costs** (one-time + ongoing):

| Item | One-time | Ongoing/year |
|---|---:|---:|
| Development labor (estimated 100 hours at $50/hour) | $5,000 | — |
| Initial testing, training, and documentation | $1,000 | — |
| Hosting | — | $600 |
| Maintenance and updates (estimated 20 hours at $50/hour) | — | $1,000 |
| **Total** | **$6,000** | **$1,600** |

**Benefits** (tangible + intangible):

| Benefit | Tangible ($/time saved)? | Notes |
|---|---|---|
| Reduced time gathering decision information | Yes — estimated $10,400/year | Assumes 10 users each save 0.5 hour per week at an average labor cost of $40/hour. |
| Earlier identification of secondary costs | Potential cost avoidance | Seeing impacts across departments may reveal costs that could otherwise be overlooked before a decision is approved. |
| More consistent decision review | Intangible | Gives teams a common structure for considering benefits, risks, affected groups, and secondary effects. |
| Improved visibility across departments | Intangible | Helps decision-makers see how a proposed change may affect areas outside their own department. |

**Payback period:** Approximately 8.2 months. This estimate is based on an initial investment of 6,000 dollars and an estimated annual net benefit of 8,800 dollars after ongoing operating costs.

**ROI:** Approximately 36.8% for the first year. Estimated first-year benefits are 10,400 dollars and first-year costs are 7,600 dollars (6,000 dollars initial cost + 1,600 dollars operating cost). ROI = (10,400 − 7,600) / 7,600.

*(See Toolkit Part C — Financial Analysis Tools document for payback, ROI, and present value formulas.)*

## 6. Priority & Urgency

As business decisions increasingly affect multiple departments and stakeholders, evaluating only the immediate benefit can leave important consequences unnoticed. Developing Elsewhere now provides an opportunity to create a more consistent decision-review process; without it, organizations may continue relying on scattered information and discover secondary costs or operational effects only after a decision has been implemented.

## 7. Recommendation

Proceed with Option B and develop a functional prototype of Elsewhere to evaluate its usefulness as a centralized tool for reviewing the broader impacts of business decisions.

## 8. Approval

| Role | Name | Date | Decision |
|---|---|---|---|
| Sponsor | | | Go / No-go |

---

### Primary sources

- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Ch. 2 "Analyzing the Business Case" and Toolkit Part C "Financial Analysis Tools"

## Specification

# Elsewhere: Business Decision Impact Explorer — Specification

## 0. Constitution

| # | Principle | Why it exists |
|---|---|---|
| 1 | Show the full impact of a decision | Business decisions can create benefits in one area while causing problems in another, so Elsewhere should show both positive and negative impacts. |
| 2 | Separate facts from assumptions | Users should be able to tell which impacts are supported by known information and which are estimates or assumptions. |
| 3 | Keep decision analysis easy to understand | Elsewhere should present complex business impacts in a clear way that a nontechnical user can understand without special training. |

## 1. Problem & Intent

**Who is this for?** Business managers and team leaders who need to evaluate how a proposed decision could affect different areas of an organization before moving forward.

**What problem do they have today?** Business decisions often focus on the most obvious benefit while secondary effects on employees, customers, costs, and operations are overlooked or discovered after the decision has already been made.

**Why now / why us?** Organizations make decisions that can affect multiple departments at once, but those effects are not always considered together. Elsewhere provides one place to examine the broader impact before a decision is made.

**What does success look like?** During prototype testing, at least 80% of users should be able to review a proposed business decision, identify its primary benefit, and recognize at least one secondary impact without assistance.

## 2. Scope

**In scope**
- Display a collection of proposed business decisions.
- Allow users to select a decision and view its details.
- Show the primary benefit of each decision.
- Show potential secondary impacts on areas such as employees, customers, costs, and operations.
- Clearly distinguish documented impacts from assumptions or estimates.

**Out of scope**
- Make business decisions automatically for the user.
- Predict exact financial outcomes or guarantee that an impact will occur.
- Integrate with external company systems or live business data.
- Provide employee accounts, permissions, or advanced collaboration features.
- Replace human judgment when making a final business decision.

## 3. User Scenarios

### Scenario 1: Review a proposed business decision
- **Actor:** Business manager
- **Trigger:** A business decision is being considered and the manager wants to understand its possible impact.
- **Steps:** Open Elsewhere; view the list; select a decision; review its primary benefit; review secondary impacts; review whether each impact is documented or assumption-based.
- **Success outcome:** The manager can identify the main benefit and at least one secondary impact before deciding how to move forward.
- **Failure outcome:** The manager cannot clearly understand the broader effects of the proposed decision.

### Scenario 2: Compare impacts across business areas
- **Actor:** Team leader
- **Trigger:** A team leader wants to see how a proposed decision could affect different areas of the organization.
- **Steps:** Open Elsewhere; select a decision; review impacts on employees, customers, costs, and operations; compare positive and negative impacts.
- **Success outcome:** The team leader can identify which areas may benefit and which may experience negative effects.
- **Failure outcome:** The team leader cannot clearly determine which areas are affected or how the impacts differ.

### Scenario 3: Identify assumptions before making a decision
- **Actor:** Business manager
- **Trigger:** The manager wants to know how reliable the listed impacts are before using them to evaluate a decision.
- **Steps:** Open Elsewhere; select a decision; review impacts; identify documented versus assumptions/estimates; consider uncertainty.
- **Success outcome:** The manager can clearly distinguish documented impacts from assumptions or estimates.

## 4. Requirements (EARS notation)

| ID | Requirement | Pattern |
|---|---|---|
| R1 | The system shall display a collection of proposed business decisions. | Ubiquitous |
| R2 | When a user selects a proposed business decision, the system shall display the details of that decision. | Event-driven |
| R3 | When a user views a proposed business decision, the system shall display its primary benefit and potential secondary impacts. | Event-driven |
| R4 | When a user views the secondary impacts of a decision, the system shall identify the affected business area, such as employees, customers, costs, or operations. | Event-driven |
| R5 | The system shall clearly distinguish documented impacts from assumptions or estimates. | Ubiquitous |
| R6 | The system shall clearly indicate whether each secondary impact is positive or negative. | Ubiquitous |
| R7 | When documented or assumption labels are displayed, the system shall provide a clear explanation of what those labels mean. | Event-driven |

## 5. Acceptance Criteria

| Requirement | Test | Pass condition |
|---|---|---|
| R1 | Open Elsewhere and view the main collection page. | A collection of proposed business decisions is displayed. |
| R2 | Select a proposed business decision from the collection. | The details for the selected decision are displayed. |
| R3 | Select a proposed business decision and review its impact information. | The primary benefit and potential secondary impacts are displayed. |
| R4 | View the secondary impacts for a proposed decision. | Each secondary impact identifies the affected area, such as employees, customers, costs, or operations. |
| R5 | Review the impact information for a proposed decision. | Documented impacts are clearly distinguishable from assumptions or estimates. |
| R6 | Review the secondary impacts for a proposed decision. | Each secondary impact is clearly identified as positive or negative. |
| R7 | View a decision containing documented and assumption labels. | The user can access a clear explanation of what each label means. |

## 6. Constraints & Non-Functional Requirements

### Performance
Elsewhere should load decision information quickly and respond to user selections without noticeable delays.

### Security / Privacy
The prototype will not collect or store sensitive personal, financial, or confidential company information.

### Accessibility
Elsewhere should use clear text, readable contrast, descriptive labels, and navigation that can be understood without relying only on color.

### Compliance / Legal
The application should clearly communicate that impacts are informational and should not be treated as guaranteed business outcomes.

### Budget / Timeline
The initial version will use the existing course web application template and available development tools to keep the project manageable within the course timeline and without additional software costs.

## 7. Open Questions

| Question | Owner | Status |
|---|---|---|
| Which business impact categories are most useful to users? | Marla Rush | To be evaluated during research and prototype testing |
| What is the clearest way to distinguish documented impacts from assumptions? | Marla Rush | To be evaluated during prototype testing |
| Do users understand positive and negative secondary impacts without additional explanation? | Marla Rush | To be evaluated during prototype testing |

## 8. Plan (derived from this spec — separate document once approved)

Once the spec above is approved, translate it into:
- **`plan.md`** — the approach and key decisions, each traced back to a requirement ID above
- **`tasks.md`** — atomic, ordered, checkable tasks derived from the plan

Do not skip from spec straight to a build without reviewing the plan first.

## 9. Approval

| Role | Name | Date | Signed off? |
|---|---|---|---|
| Spec owner | Marla Rush | September 14, 2026 | Yes |
| Reviewer | | | |

## Plan

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
|---|---|---|---|---|
| ADR-00 | Use the existing course web application template for the front-end prototype instead of building a new framework from scratch | R1, R2, R3, R4, R5, R6, R7 | Build a custom app structure; use a different framework | The template already matches the project requirements, keeps the scope manageable, and supports a quick prototype within the course timeline |
| ADR-01 | Use placeholder decision data for the initial prototype instead of live company data | R1, R2, R3, R4, R5, R6, R7 | Connect to live business data; use an external database | The prototype is intended to demonstrate the user experience and information structure, not to run production analytics or a live business system |
| ADR-02 | Present each decision with a primary benefit and a grouped set of secondary impacts by affected business area | R3, R4 | Show only a single summary sentence; list impacts without grouping by area | Grouping by employees, customers, costs, and operations makes comparisons easier and matches the requirement to identify affected areas clearly |
| ADR-03 | Clearly label each impact as documented or assumption/estimate, and explain the meaning of those labels in the interface | R5, R7 | Use only raw impact text with no labeling; hide the explanation in documentation | Users must be able to distinguish supported information from estimated information before making a judgment, which is a core principle of the product |
| ADR-04 | Use explicit text labels such as “Positive” and “Negative” for secondary impacts, not color alone | R6 | Use only green/red color coding | This improves clarity and accessibility, and it ensures the meaning is understandable even without color perception |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|---|---|---|
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
|---|---|---|---|---|
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
|---|---|---|
| Marla Rush | 2026-09-22 | Yes |

**Gate:** Do not generate tasks until this plan is done.

## Tasks

# Tasks — Elsewhere: Business Decision Impact Explorer

> Derived from the plan document. Each task is small, checkable, and traceable to a requirement.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|---|---|---|---|---|
| T1 | Create the placeholder decision data structure for proposed decisions, primary benefits, and secondary impacts | R1, R3, R4, R5, R6, ADR-01 | — | Done |
| T2 | Add sample decision records to the app's front-end data source so the prototype can load realistic content | R1, ADR-01 | T1 | Done |
| T3 | Build the decision collection view to display all proposed decisions in the main page list | R1, ADR-00 | T2 | Done |
| T4 | Connect each decision item in the collection view to a selection action that loads the chosen decision | R2, ADR-00 | T3 | Done |
| T5 | Build the decision detail view to show the selected decision title and summary information | R2, ADR-00 | T4 | Done |
| T6 | Display the primary benefit section on the decision detail page | R3, ADR-02 | T5 | Done |
| T7 | Display the secondary impact list for the selected decision with each impact description included | R3, ADR-02 | T5 | Done |
| T8 | Group secondary impacts by affected business area so employees, customers, costs, and operations are clearly separated | R4, ADR-02 | T7 | Done |
| T9 | Label each impact as Documented or Assumption/Estimate so users can distinguish the source of the information | R5, ADR-03 | T7 | Done |
| T10 | Add a short explanation in the UI that defines what the Documented and Assumption/Estimate labels mean | R7, ADR-03 | T9 | Done |
| T11 | Add explicit text labels for each secondary impact to show whether it is Positive or Negative | R6, ADR-04 | T7 | Done |
| T12 | Review the prototype against the acceptance criteria for R1-R7 and check accessibility and readability requirements | R1, R2, R3, R4, R5, R6, R7, ADR-00, ADR-02, ADR-03, ADR-04 | T6, T8, T9, T10, T11 | Done |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done (applies to every task)

- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done
- No task marked done without a test passing

## Blocked / Questions

| Task | Blocker | Raised | Resolved |
|---|---|---|---|
| | | | |

## Design System

# Design System

## Brand Principles

Elsewhere should feel clear, thoughtful, and professional without being overly complicated. The design should help users focus on understanding how business decisions can affect different areas of an organization.

## Color Palette

- Background: #F8F9FA
- Primary: #2C3E50
- Secondary: #5D6D7E
- Accent: #3498DB
- Text: #212529
- Success/Positive: #198754
- Warning/Negative: #DC3545

## Typography

- Font: Arial, sans-serif
- Headings: Bold and easy to distinguish from body text
- Body text: 16px with normal weight
- Keep text readable and consistent throughout the application.

## Logo Usage

The application will use the name "Elsewhere" as its main branding. A simple Bootstrap icon may be used with the name when appropriate. The branding should remain consistent and should not distract from the application's content.

## Spacing & Grid

Use standard Bootstrap spacing and grid patterns. Content should have enough space between sections to remain easy to read and should adjust appropriately for different screen sizes.

## Core Components

- Buttons should have clear labels and consistent styling.
- Cards should organize business decisions and their impacts in an easy-to-read format.
- Positive and negative impacts should be visually distinguishable.
- Form fields should include clear labels.
- Components should remain consistent across pages.

## Voice & Tone

Use clear, professional, and concise language. Avoid unnecessary technical language so business information is understandable to different users.

## Accessibility Standards

- Maintain sufficient contrast between text and backgrounds.
- Use readable font sizes.
- Form fields should have labels.
- Interactive elements should be usable with a keyboard.
- Do not rely only on color to communicate meaning.

## Version & Change Log

### Version 1.0

- Initial design system created for the Elsewhere front-end prototype.
