# Elsewhere: Business Decision Impact Explorer — Specification
 
> **How to use this template:** The specification is meant to be detailed before building anything and to represent the core "source of truth". It should be written for a non-technical author, but clear enough for an AI agent (or a team) to build from.
 
---
 
## 0. Constitution (fill once per project, reuse across specs)
 
Non-negotiable principles this product must never violate, regardless of feature.
 
| # | Principle | Why it exists |
|---|-----------|----------------|
| 1 | Show the full impact of a decision | Business decisions can create benefits in one area while causing problems in another, so Elsewhere should show both positive and negative impacts. |
| 2 | Separate facts from assumptions | Users should be able to tell which impacts are supported by known information and which are estimates or assumptions. |
| 3 | Keep decision analysis easy to understand | Elsewhere should present complex business impacts in a clear way that a nontechnical user can understand without special training. |
 
---
 
## 1. Problem & Intent
 
**Who is this for?**
Business managers and team leaders who need to evaluate how a proposed decision could affect different areas of an organization before moving forward.
 
**What problem do they have today?**
Business decisions often focus on the most obvious benefit while secondary effects on employees, customers, costs, and operations are overlooked or discovered after the decision has already been made.
 
**Why now / why us?**
Organizations make decisions that can affect multiple departments at once, but those effects are not always considered together. Elsewhere provides one place to examine the broader impact before a decision is made.
 
**What does success look like?**
During prototype testing, at least 80% of users should be able to review a proposed business decision, identify its primary benefit, and recognize at least one secondary impact without assistance.
 
---
 
## 2. Scope
 
**In scope** — what this version must do.
- Display a collection of proposed business decisions.
- Allow users to select a decision and view its details.
- Show the primary benefit of each decision.
- Show potential secondary impacts on areas such as employees, customers, costs, and operations.
- Clearly distinguish documented impacts from assumptions or estimates.

**Out of scope** — what it explicitly will NOT do (this list prevents scope creep and over-building).
- Make business decisions automatically for the user.
- Predict exact financial outcomes or guarantee that an impact will occur.
- Integrate with external company systems or live business data.
- Provide employee accounts, permissions, or advanced collaboration features.
- Replace human judgment when making a final business decision.
---
 
## 3. User Scenarios
 
Write each as a short story: who, what they're trying to do, what "done" looks like.
 
**Scenario 1: Review a proposed business decision**

- **Actor:** Business manager
- **Trigger:** A business decision is being considered and the manager wants to understand its possible impact.
- **Steps:**
  1. Open Elsewhere.
  2. View the list of proposed business decisions.
  3. Select a decision to review.
  4. Review the primary benefit of the decision.
  5. Review possible secondary impacts on employees, customers, costs, and operations.
  6. Review whether each impact is documented or based on an assumption.
- **Success outcome:** The manager can identify the main benefit and at least one secondary impact before deciding how to move forward.
- **Failure outcome:** The manager cannot clearly understand the broader effects of the proposed decision.

**Scenario 2: Compare impacts across business areas**

- **Actor:** Team leader
- **Trigger:** A team leader wants to see how a proposed decision could affect different areas of the organization.
- **Steps:**
  1. Open Elsewhere.
  2. Select a proposed business decision.
  3. Review the impacts on employees, customers, costs, and operations.
  4. Compare the positive and negative impacts across those areas.
- **Success outcome:** The team leader can identify which areas may benefit from the decision and which may experience negative effects.
- **Failure outcome:** The team leader cannot clearly determine which areas are affected or how the impacts differ.

**Scenario 3: Identify assumptions before making a decision**

- **Actor:** Business manager
- **Trigger:** The manager wants to know how reliable the listed impacts are before using them to evaluate a decision.
- **Steps:**
  1. Open Elsewhere.
  2. Select a proposed business decision.
  3. Review the listed impacts.
  4. Identify which impacts are documented and which are assumptions or estimates.
  5. Consider the uncertainty when evaluating the decision.
- **Success outcome:** The manager can clearly distinguish documented impacts from assumptions or estimates.
- **Failure outcome:** The manager cannot tell which information is supported and which information is uncertain.

 
---
 
## 4. Requirements (EARS notation)
 
Use [EARS](https://alistairmavin.com/ears/) (Easy Approach to Requirements Syntax) so requirements are consistent and unambiguous.
 
Patterns:
- **Ubiquitous:** *The system shall [always do X].*
- **Event-driven:** *When [trigger], the system shall [response].*
- **State-driven:** *While [state], the system shall [response].*
- **Unwanted behavior:** *If [condition], then the system shall [response].*
- **Optional:** *Where [feature is present], the system shall [response].*

| ID | Requirement | Pattern |
|----|-------------|---------|
| R1 | The system shall display a collection of proposed business decisions. | Ubiquitous |
| R2 | When a user selects a proposed business decision, the system shall display the details of that decision. | Event-driven |
| R3 | When a user views a proposed business decision, the system shall display its primary benefit and potential secondary impacts. | Event-driven |
| R4 | When a user views the secondary impacts of a decision, the system shall identify the affected business area, such as employees, customers, costs, or operations. | Event-driven |
| R5 | The system shall clearly distinguish documented impacts from assumptions or estimates. | Ubiquitous |
| R6 | The system shall clearly indicate whether each secondary impact is positive or negative. | Ubiquitous |
| R7 | When documented or assumption labels are displayed, the system shall provide a clear explanation of what those labels mean. | Event-driven |

---
 
## 5. Acceptance Criteria
 
For each requirement, define the test that proves it's done. If you can't write a pass/fail test, the requirement is still too vague.
 
| Requirement | Test | Pass condition |
|-------------|------|-----------------|
| R1 | Open Elsewhere and view the main collection page. | A collection of proposed business decisions is displayed. |
| R2 | Select a proposed business decision from the collection. | The details for the selected decision are displayed. |
| R3 | Select a proposed business decision and review its impact information. | The primary benefit and potential secondary impacts are displayed. |
| R4 | View the secondary impacts for a proposed decision. | Each secondary impact identifies the affected area, such as employees, customers, costs, or operations. |
| R5 | Review the impact information for a proposed decision. | Documented impacts are clearly distinguishable from assumptions or estimates. |
| R6 | Review the secondary impacts for a proposed decision. | Each secondary impact is clearly identified as positive or negative. |
| R7 | View a decision containing documented and assumption labels. | The user can access a clear explanation of what each label means. |
---
 
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
---
 
## 7. Open Questions
 
Anything unresolved. Don't let AI or a builder guess silently — list it and get an answer before build starts.
 
| Question | Owner | Status |
|----------|-------|--------|
| Which business impact categories are most useful to users? | Marla Rush | To be evaluated during research and prototype testing |
| What is the clearest way to distinguish documented impacts from assumptions? | Marla Rush | To be evaluated during prototype testing |
| Do users understand positive and negative secondary impacts without additional explanation? | Marla Rush | To be evaluated during prototype testing |
 
---
 
## 8. Plan (derived from this spec — separate document once approved)
 
Once the spec above is approved, translate it into:
- **`plan.md`** — the approach and key decisions, each traced back to a requirement ID above
- **`tasks.md`** — atomic, ordered, checkable tasks derived from the plan
Do not skip from spec straight to a build without reviewing the plan first.
 
---
 
## 9. Approval
 
| Role | Name | Date | Signed off? |
|------|------|------|-------------|
| Spec owner | Marla Rush | September 14, 2026 | Yes |
| Reviewer |  |  |  |
 
---
 
### Primary sources this template draws on
- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/)