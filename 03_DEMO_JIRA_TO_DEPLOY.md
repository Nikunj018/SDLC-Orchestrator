# Demo Script: Jira → Deployment

*Companion to the interactive demo at `website/index.html`. Use as the narrated walkthrough or live-demo script.*

---

## The Setup

PM creates Jira ticket: **PROJ-1842 — Customers should be able to bulk-export their invoice history as CSV.**

Nothing happens. The orchestrator does not chase tickets. It waits for an engineer.

---

## Step 1 — Engineer triggers in their AI Coding CLI

In their terminal, the engineer opens their AI Coding CLI and types:

```
$ start working on PROJ-1842
```

One prompt. That is the entire invocation. The orchestrator runs in the same CLI surface the engineer already uses for ad-hoc coding tasks — no new tool to learn.

---

## Step 2 — Lead Agent reads, asks questions, waits

The Lead Agent — the tech lead of the AI team — reads the ticket and the surrounding codebase. It checks 12 similar past tickets. It identifies three things needing clarification.

It posts a comment on Jira:

> *Before I orchestrate work, three things need clarification:*
> *1. Date range — hard limit or default?*
> *2. Refunds and credit notes — included?*
> *3. Audit logging required for bulk exports?*
>
> *Pausing. Re-trigger me with `continue` when ready.*

**The Lead Agent does not start work.** It pauses.

---

## Step 3 — PM answers. Engineer types `continue`. BA writes stories.

PM answers on Jira (~3 min between meetings).

Engineer types:

```
$ continue on PROJ-1842
```

Lead Agent delegates to the **BA sub-agent** → drafts stories, acceptance criteria, edge cases → **Product Owner approves** in Slack (~4 min).

---

## Step 4 — Architecture planned. Developer codes.

Lead Agent delegates to the **Architecture sub-agent**:
- Impact: 3 services, 1 frontend module
- Plan follows team's existing ADR-0142 pattern for background jobs
- **Tech Lead approves** (~5 min)

Lead Agent delegates to the **Developer sub-agent**:
- Branch: `feature/PROJ-1842-invoice-export`
- 14 files modified, 4 added
- 6 commits pushed

---

## Step 5 — QA finds bugs. Lead Agent routes back to Developer.

The **QA sub-agent** runs the test suite:

```
✗ 2 tests failing:
  · test_export_date_range_max — 60mo boundary off-by-one
  · test_audit_event_emission — event not emitted on background path
```

This is real orchestration. The Lead Agent does not paper over QA findings. It routes back to the Developer sub-agent — exactly as a real tech lead would.

> *Lead Agent · Routing back to Developer sub-agent with QA findings.*

---

## Step 6 — Developer fixes. QA re-validates. All green.

The Developer sub-agent patches:
- `export.go:84` (boundary check)
- `export.go:142` (audit emit in background path)

QA sub-agent re-runs:
- 47/47 tests passing
- Coverage on new code: 91%

This back-and-forth is what makes the orchestrator a real engineering team, not a one-shot code generator.

---

## Step 7 — Security + Docs done. "Raise the PR?"

**Security sub-agent**: SAST clean · secrets clean · multi-tenant isolation verified.

**Documentation sub-agent**: help center updated · release notes drafted · OpenAPI annotations validated.

Lead Agent surfaces the most consequential decision back to the engineer:

```
Lead Agent · Should I raise the PR? [y/N]

$ y
```

Lead Agent → Developer sub-agent → **PR #4522 opened** with reviewers tagged.

---

## Step 8 — Tech Lead invokes PR Reviewer Agent

The PR Reviewer Agent is **not** auto-triggered. The Tech Lead invokes it on demand from Slack:

> Tech Lead: **`@pr-reviewer review PR #4522`**

PR Reviewer Agent posts inline comments + a structured summary:
- 3 actionable items (threshold → config, error wrapping `%w`, variable rename)
- Items needing human judgment (rate-limit confirmation, customer-facing copy)

Tech Lead adds their own judgment notes. AI assists; humans decide.

---

## Step 9 — Engineer resolves via the same AI Coding CLI

The engineer doesn't manually type fixes. In the same CLI they triggered the work, they type:

```
$ resolve comments on PR #4522
```

The CLI:
- Fetches 4 open comments
- Reads the affected code
- Applies all 4 fixes
- Replies to each comment inline
- Pushes 3 commits to the PR branch
- Notifies the Tech Lead for re-review

Engineer reviews the diff and confirms. They directed — they did not type code.

Tech Lead re-reviews. Approves. Merged.

---

## Step 10 — Deploy. Report. Done.

**DevOps sub-agent**:
- Deploy checklist generated
- Rollback plan ready
- Environment validation passed

**Release Manager** approves in Slack (~3 min).

Deploy executes. Metrics monitored — no anomalies.

**Reporting sub-agent**:
- Jira → Done
- Delivery summary posted to `#eng-delivery`
- Metrics registered

---

## The Numbers

| | |
|---|---|
| Total elapsed time | **~4 hours** |
| Engineer typing | **~5 short CLI prompts** (`start`, `continue`, `y`, `resolve`, occasional clarifications) |
| Lines of code typed by hand | **0** |
| Total human attention | **~30 minutes focused approvals & verification** |
| Engineer's role | **Orchestrator, not implementer** |

---

## What This Proves

**The role-shift.** The engineer never wrote a line of code. They orchestrated.

**The conservative model.** The Lead Agent never started work blindly — it asked questions. Never raised the PR unprompted — it asked first.

**Real orchestration.** When QA found bugs, the Lead Agent routed back to the Developer. Like a real tech lead with a real team.

**Humans at every gate.** PM clarified. Product Owner approved BA. Tech Lead approved architecture and code. Engineer authorized PR. Release Manager approved deploy.

**The team didn't get smaller. The team got a new operating model.**

---

*See the live interactive version at `website/index.html`.*
