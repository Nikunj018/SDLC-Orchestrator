# Technical Architecture
## The SDLC Orchestrator

*For: CTOs, Principal Engineers, Architects*

---

## 1. Design Principles

1. **Engineer-triggered, never autonomous.** Work flows only when an engineer types a prompt in their AI Coding CLI.
2. **Lead Agent = the tech lead of an AI team.** A reasoning agent that coordinates specialists, just like a real engineering lead.
3. **Questions before work.** The Lead Agent's default is to clarify on Jira and wait.
4. **Real orchestration includes rework.** When QA finds bugs, the Lead Agent routes back to the Developer sub-agent — like a real team would.
5. **Asks before raising PRs.** Most consequential action requires explicit consent.
6. **Bespoke per client.** Built around the client's codebase, tools, MCPs, and conventions. That customization is the value.

---

## 2. The Trigger Surface — AI Coding CLI

The engineer's interface to the entire system is their **AI Coding CLI in the terminal**. The same CLI the engineer already uses for ad-hoc coding tasks becomes the trigger surface for the orchestrator. No new tool to learn.

The engineer types prompts like:
- `start working on TICKET-X` — invoke the Lead Agent to begin orchestration
- `continue on TICKET-X` — resume after the Lead Agent paused on clarification
- `y` (or `yes`) — confirm "Raise the PR?" prompt
- `resolve comments on PR #N` — close the PR review loop

All output streams to the same CLI. Lead Agent narration, sub-agent updates, errors, and final summary all appear in the engineer's terminal.

---

## 3. The Architecture

```
                  ENGINEER (in AI Coding CLI)
                          │
                          ▼
              ┌─────────────────────────┐
              │     LEAD AGENT          │  reads · asks · plans
              │ (tech lead of AI team)  │  delegates · synthesizes
              └────────────┬────────────┘  routes rework · asks "raise PR?"
                           │
   ┌──────┬──────┬──────┬──┴───┬──────┬──────┬──────┐
   ▼      ▼      ▼      ▼      ▼      ▼      ▼      ▼
  ┌──┐  ┌──┐  ┌──┐  ┌──┐    ┌──┐  ┌──┐  ┌──┐  ┌──┐
  │BA│  │Ar│  │Dv│  │QA│    │Sc│  │Dc│  │Op│  │Rp│
  └──┘  └──┘  └──┘  └──┘    └──┘  └──┘  └──┘  └──┘

  ─── invoked separately by humans ───

  ★ PR Reviewer Agent     Tech Lead: "@pr-reviewer review PR #X"
  ★ AI Coding CLI         Engineer in terminal: "resolve PR comments"
                          (same CLI that triggered the work)
```

---

## 4. The Lead Agent

The reasoning layer of the system. A real tech lead, but AI.

- **Receives the trigger** from the engineer's CLI
- **Reads the ticket + codebase context + similar past work**
- **Decides to ask or act.** Default = ask. Posts clarifying questions on Jira. Pauses.
- **Waits for re-trigger** — does not auto-resume
- **Plans and delegates** to sub-agents in the right order
- **Routes rework** — when QA finds bugs, routes back to Developer
- **Synthesizes** sub-agent outputs into single Jira updates
- **Surfaces approvals** to humans at consequential gates (BA, Architecture, PR raise, Deploy)
- **Asks before raising PRs** — explicit yes required from the engineer
- **Escalates ambiguity** to humans rather than guessing

---

## 5. Sub-Agents

| Sub-Agent | Function | Approval gate |
|-----------|----------|---------------|
| **Business Analysis** | User stories, acceptance criteria, edge cases | Product Owner |
| **Architecture** | Impact analysis, implementation plan | Tech Lead |
| **Developer** | Branch code, commits, raises PR on approval | PR raised only on engineer's `y` |
| **QA & Testing** | Unit/API/UI tests, coverage, regression analysis · routes failures back through Lead | Merge gate |
| **Security** | SAST, secrets, compliance, isolation checks | Required for high-severity findings |
| **Documentation** | Docs, release notes, OpenAPI annotations | Optional |
| **DevOps** | Deploy checklist, rollback plan | Release Manager |
| **Reporting** | Jira, Slack, metrics | None (read/comm only) |

Sub-agents do **not** talk to each other. They report only to the Lead Agent.

Every sub-agent is built bespoke per client — using the client's MCPs, conventions, and codebase as context.

---

## 6. The Two Human-Invoked Helpers

### PR Reviewer Agent
- **Invoked by humans** (Tech Lead) on demand
- Posts inline comments + structured summary with confidence indicators
- Augments — does not replace — the human reviewer
- Never approves or merges

### AI Coding CLI — Resolution Mode
- **Same CLI the engineer triggered the work with**
- Engineer types: `resolve comments on PR #X`
- CLI fetches PR comments, applies fixes, replies inline, pushes
- Engineer reviews the diff and approves the change
- The engineer remains the conductor of code changes — they direct, verify, approve

---

## 7. Triggers Summary

| Trigger | Who | Starts |
|---------|-----|--------|
| `start working on TICKET-X` | Engineer (AI Coding CLI) | Lead Agent reads ticket, decides to ask or proceed |
| `continue on TICKET-X` | Engineer (AI Coding CLI) | Lead Agent resumes after Jira questions resolved |
| `y` to "Raise PR?" prompt | Engineer (AI Coding CLI) | Developer sub-agent raises PR |
| `@pr-reviewer review PR #N` | Tech Lead (Slack) | PR Reviewer Agent comments |
| `resolve comments on PR #N` | Engineer (AI Coding CLI) | CLI resolves PR comments |
| "Approve deployment" | Release Manager (Slack) | DevOps sub-agent deploys |

**The orchestrator never auto-triggers itself.** Every consequential transition is human-initiated.

---

## 8. Custom-Built Per Client (Phase 3)

This is the work we do in Phase 3 that distinguishes us from a DIY effort:

- **Codebase parallel context.** Symbol-aware retrieval, ADR indexing, runbook coverage. The orchestrator knows your code.
- **Custom sub-agents.** Each sub-agent's prompts, tools, retrieval surface, and guardrails are tuned to your stack. The Developer sub-agent knows your test patterns. The Security sub-agent knows your compliance regime.
- **Bespoke MCP servers.** We build custom MCPs for your internal systems where the standard set doesn't fit.
- **Workflow tuning.** Lead Agent's clarifying-question library, approval flows, and escalation rules tuned to your team's operating style.
- **Convention-aware code generation.** Every output follows your team's style — not a generic AI's style.

---

## 9. Integration Layer

All integrations via **MCP (Model Context Protocol)** servers — standard surface, versioned, scoped, testable, observable.

Standard set: Jira/Linear · GitHub/GitLab · CI/CD (GHA, CircleCI, Jenkins) · Slack/Teams · Confluence/Notion · Datadog/Grafana · Snyk/SonarQube/Semgrep · AWS/GCP/Azure.

Bespoke MCP servers built for client-specific internal systems.

---

## 10. Governance & Security

- **Identity & RBAC.** Agents authenticate as scoped service identities. Inherit existing RBAC.
- **Policy-as-code.** Approval requirements and scope restrictions version-controlled.
- **Audit log.** Every action emits a structured event (agent, workflow, target, scope, result, cost).
- **Secrets.** Short-lived tokens fetched at runtime from your secret store. Never embedded.
- **Killswitch.** Per-workflow and global. Roll back configurations without code deploys.
- **Cost controls.** Per-workflow / per-team budgets enforced.

---

## 11. Deployment Topology

- **Client cloud (default).** Platform runs in your AWS/GCP/Azure account. Models accessed via API.
- **Hybrid.** Sensitive workloads use private models; less-sensitive use commercial frontier.
- **Air-gapped.** All components including models in private infrastructure. For regulated environments.

---

## 12. Resilience

| Failure mode | Mitigation |
|--------------|------------|
| Model API outage | Failover to alternate provider |
| Integration outage | Workflows queue, resume; humans notified |
| Hallucinated tool calls | Tool registry rejects unknown calls |
| Cost spike | Per-workflow budget; circuit breaker |
| Confidently wrong agent | Human approval gates; cross-checks where critical |
| QA finds bugs | Lead Agent routes back to Developer; loops until clean |

---

## 13. Why This, Not Off-the-Shelf

| | Off-the-shelf (coding assistants, autonomous-agent SaaS) | This Orchestrator |
|---|---|---|
| **Scope** | Single task | Whole-SDLC orchestration with rework loops |
| **Trigger** | Per-prompt | One prompt in your existing CLI → entire team |
| **Coordination** | None or generic | Lead Agent tuned to your team |
| **Codebase context** | Generic / limited | Parallel to your repos, your conventions |
| **Customization** | None | Bespoke from week one |
| **Governance** | Vendor's | Yours |
| **Ownership** | Vendor | You |

Off-the-shelf coding assistants accelerate individual typing. The orchestrator changes the role.

---

## 14. Tech Choices (Representative)

- **Models:** Best-fit per workload — frontier models for reasoning, smaller models for classification, OSS for air-gapped
- **Orchestration runtime:** Temporal / Prefect / LangGraph (chosen per durability needs)
- **Vector store:** pgvector / Weaviate / Pinecone / Qdrant
- **Tool protocol:** MCP
- **Deployment:** Containerized; orchestrated via your existing platform (K8s / ECS / Cloud Run)
- **Observability:** OpenTelemetry; integrated with your existing stack
- **Secrets:** Vault / AWS Secrets Manager / GCP Secret Manager

Every choice justified during Phase 2.

---

The architecture above is the foundation. Adapted per client; principles non-negotiable. Bring your architects and security lead to the technical deep-dive.
