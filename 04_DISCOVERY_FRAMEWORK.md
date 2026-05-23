# Discovery Framework — Phase 1

*Internal playbook for the first week of every engagement*

---

## Goal

Produce an evidence-based, client-specific diagnostic of the SDLC that drives the **bespoke build in Phase 3**. We do not start Phase 3 without it.

By end of Week 1, we answer:

1. How does work actually flow through this org from idea to production?
2. Where does it wait, repeat, drift, or break?
3. Which workflows have the highest orchestration leverage?
4. **What clarifying questions should the Lead Agent ask by default** for this org's dominant ticket types?
5. **Where do human approval gates belong** — and who approves what?
6. **Which sub-agents need the most customization** for this team's conventions, stack, and codebase?
7. **What custom MCPs are needed** for the client's internal tools and systems?
8. What constraints (technical, regulatory, cultural) must shape the design?

---

## Week 1 Cadence

| Day | Focus | Format |
|-----|-------|--------|
| 1 AM | Kickoff with executive sponsors | 60 min |
| 1 PM | CTO + engineering leadership deep-dive | 90 min |
| 2 | Engineering manager interviews (per team) | 45 min each |
| 3 AM | QA, DevOps, Security leads | 45 min each |
| 3 PM | Product & delivery leads | 45 min each |
| 4 AM | Shadowing — sprint planning / refinement / release | Observe |
| 4 PM | Toolchain audit with platform team | Working session |
| 5 AM | Synthesis | Internal |
| 5 PM | Diagnostic playback with leadership | 90 min |

Total: ~12–15 hours of stakeholder time.

---

## Interview Frameworks (per role)

### Founders / CEO
- 12–18 month roadmap, headcount plan, market pressure?
- If AI in the SDLC worked, what would have visibly changed by end of 2026?
- Where does engineering under-deliver — people, process, or tooling?
- Cultural lines we should not cross?

### CTO / VP Engineering
- Walk us through a typical feature from request to production
- Where does the time actually go on a slow delivery post-mortem?
- Consistent bottleneck constraints?
- Current AI usage pattern across the org?
- Security/compliance posture we design around?
- If one high-impact automation in 6 weeks, where would you start?

### Engineering Managers
- Last 3 features shipped — what was easy, hard, annoying?
- Proportion of engineer's week on operational coordination vs. building?
- Where does work most often boomerang back?
- Refinement process — judgment vs. operational?

### QA Leads
- Who writes tests today?
- Typical test coverage on new code — honestly?
- Where do regressions originate?
- What QA work do you wish wasn't manual?

### DevOps / SRE
- Walk us through a deploy from merge to traffic
- Deploy rollback / hotfix frequency?
- Incident response flow?
- What deployment decisions don't actually need human attention?

### Security
- Compliance regime (SOC 2, ISO 27001, HIPAA, regional)?
- Where are security gates today, and are they effective?
- Stance on AI agents having scoped access to source, CI, production?

### Product Managers / Delivery Heads
- How do requirements move from idea to engineering-ready?
- Where do PMs chase status?
- What gets lost between product and engineering?

---

## The SDLC Flow Map

Document each stage with:
- Average wait time
- Average cycle time
- Tools touched
- Human roles involved
- Common pain modes
- Rework / failure frequency

Stages: Demand → Refinement → Development → Review → QA → Security → Deploy → Reporting.

---

## Repetitive-Work Audit Matrix

```
              HIGH-FREQ       MED-FREQ       LOW-FREQ
            ┌──────────────┬──────────────┬──────────────┐
  JUDGMENT  │ Human only   │ Human only   │ Human only   │
            ├──────────────┼──────────────┼──────────────┤
  MOSTLY-J  │ AI-assisted  │ AI-assisted  │ Human only   │
            ├──────────────┼──────────────┼──────────────┤
  MOSTLY-OP │ AUTOMATE     │ AUTOMATE     │ Maybe        │
            ├──────────────┼──────────────┼──────────────┤
  OPERATION │ ★ PRIME ★    │ AUTOMATE     │ Maybe        │
            └──────────────┴──────────────┴──────────────┘
```

Prime target = Operational + High-Frequency. Judgment work stays with humans by design.

---

## Toolchain Audit

For each tool capture: usage pattern · API maturity · auth model · existing integrations · pain points.

Categories: Ticketing · Source control · CI/CD · Communication · Documentation · Observability · Security · Cloud · Identity · Secrets · Customer support.

---

## Shadowing

Interviews capture what people *say*. Shadowing captures what they *do*. We observe at minimum: sprint planning, refinement, PR review, release, incident response, standup, customer bug-fix flow. Discrepancies are gold.

---

## Constraints Inventory

- **Technical:** legacy APIs, monolith/micro topology, test infrastructure
- **Organizational:** team boundaries, approval chains, change-management
- **Regulatory:** data residency, audit retention, segregation of duties
- **Cultural:** appetite for change, sacred rituals, trust dynamics

---

## The Diagnostic Deliverable

End of Day 5 — typically 25–40 pages:

1. Executive summary (3 pages)
2. SDLC flow map (annotated)
3. Repetitive-work audit findings
4. Top 10 automation opportunities (leverage × tractability)
5. Constraints inventory
6. Toolchain assessment
7. Adoption risk assessment
8. Quick-win candidates for the build phase
9. Long-horizon opportunities
10. Recommended Phase 2 focus

Valuable to the client whether or not they proceed to Phase 2.

---

## Anti-Patterns We Avoid

- Discovery as theater (confirming preconceptions)
- Tool-first thinking (starting with "where does AI fit?")
- Boil-the-ocean scope (focus is the deliverable)
- Senior-engineer-only view (talk to QA, DevOps, security, product)
- Assuming maturity (discover, don't assume)
