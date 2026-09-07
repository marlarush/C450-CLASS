# Business Case — Elsewhere: Business Decision Impact Explorer

## 1. Problem / Opportunity
Business decisions are often evaluated based on their immediate benefits, while their effects on other departments, employees, customers, and operating costs may be scattered across reports, meetings, and conversations. Without a clear way to view these connections together, decision-makers may overlook secondary impacts that change whether a decision is actually beneficial.

## 2. Proposed Solution
Elsewhere is a web application that brings the potential impacts of proposed business decisions into one view. Users can browse decisions under consideration and select one to review its goal, expected benefits, affected departments, risks, and possible secondary effects on employees, customers, costs, and operations. This gives decision-makers a clearer picture of the tradeoffs involved before deciding whether to move forward.

## 3. Options Considered

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| Option A — Continue with existing tools | Use current reports, spreadsheets, email, and meetings to evaluate proposed business decisions. | Little or no new cost; employees are already familiar with the tools. | Information remains scattered; secondary impacts may be harder to identify; comparing decisions can be inconsistent. |
| Option B — Elsewhere (recommended) | Use a dedicated web application to organize proposed decisions and their potential impacts in one place. | Provides a consistent view of benefits, risks, affected groups, and secondary effects; makes decisions easier to review and compare. | Requires development and maintenance; users must adopt a new tool and keep decision information current. |

## 4. Feasibility

| Type | Assessment |
|------|------------|
| Operational — will people actually use/support this? | Elsewhere could be useful to managers, analysts, and project teams that need to evaluate decisions involving multiple parts of an organization. Its value depends on users entering accurate information and keeping decision impacts current. |
| Technical — can we build it with what we have/can get? | Yes. A functional prototype can be developed using the existing web application template. The core design requires displaying a collection of proposed decisions and allowing users to select an individual decision for a more detailed view. |
| Economic — does the payoff justify the cost? | Potentially. Elsewhere could reduce time spent gathering decision information from separate sources and help organizations identify costly secondary effects before changes are approved. A cost-benefit analysis is needed to determine whether those savings justify development and operating costs. |
| Schedule — can it be done in a useful timeframe? | Yes. The prototype remains close to the structure of the provided application, which limits the amount of new functionality required and makes a usable version achievable within the project timeframe. |

## 5. Costs & Benefits

**Costs** (one-time + ongoing):

| Item | One-time | Ongoing/year |
|------|----------|--------------|
| Development labor (estimated 100 hours at $50/hour) | $5,000 | — |
| Initial testing, training, and documentation | $1,000 | — |
| Hosting | — | $600 |
| Maintenance and updates (estimated 20 hours at $50/hour) | — | $1,000 |
| **Total** | **$6,000** | **$1,600** |

**Benefits** (tangible + intangible):

| Benefit | Tangible ($/time saved)? | Notes |
|---------|--------------------------|-------|
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
|------|------|------|----------|
| Sponsor | | | Go / No-go |

---

### Primary sources
- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Ch. 2 "Analyzing the Business Case" and Toolkit Part C "Financial Analysis Tools"