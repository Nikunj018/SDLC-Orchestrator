# Sales Pitches

*Two variants. Use the right one for the room.*

---

## A. Long Pitch — Leadership Meeting (10–12 min)

Pair with the live website demo at `website/index.html`.

### 1. Hook (1 min)

> One sentence first: ***Stop writing code. Start orchestrating SDLC automation.***
>
> Your engineers already use AI tactically — coding assistants in editors, chat in browsers. Useful — it makes individuals type faster. But it doesn't change how work flows through your organization. A measurable portion of every senior engineer's week still goes to operational work that doesn't need their judgment — drafting tickets, generating boilerplate, running standard checks, updating documentation, chasing status.
>
> What we build changes the engineer's job description. Instead of typing code, your engineers open their AI Coding CLI and type things like *"start working on PROJ-1842."* A Lead Agent — the tech lead of an AI team — picks it up. It reads the ticket. Asks clarifying questions. Orchestrates a team of specialized sub-agents. Handles rework when QA finds bugs. Humans approve the consequential moments. The engineer becomes a conductor.

### 2. The Lead Agent analogy (2 min)

> Think about what a real tech lead does when a ticket comes in. They don't start typing code. They read the ticket. They ask the team questions to understand. They plan: who writes the analysis, who designs the architecture, who codes, who tests, who reviews security. They orchestrate the team. They handle the rework when QA finds bugs. They escalate judgment calls to product or release management.
>
> The Lead Agent does exactly that — except its team members are specialized AI sub-agents, custom-built around your codebase and your conventions. That's the architecture. A tech lead, but AI. A team, but AI. Your engineer manages this team.

### 3. The demo (4 min)

> Let me show you. *[Walk through `website/index.html` — 10 steps, auto-plays at 5 sec each]*
>
> Engineer types `start working on PROJ-1842` in their CLI. Lead Agent reads the ticket and posts three clarifying questions on Jira — does not start work. PM answers in Jira. Engineer types `continue`. Lead Agent orchestrates: BA → PO approves. Architecture → TL approves. Developer codes.
>
> Then this happens — QA finds 2 bugs. Watch what the Lead Agent does. It routes the work back to the Developer sub-agent. Like a real tech lead would. Developer fixes. QA re-validates. All green. Security and Docs finalize.
>
> Lead Agent asks: *raise PR?* Engineer types `y`. PR opens. Tech Lead invokes the PR Reviewer Agent. Engineer resolves comments by typing `resolve comments on PR #4522` in the same CLI — the CLI fetches, fixes, pushes. DevOps prepares deploy. Release Manager approves. Shipped.
>
> Total: ~4 hours, ~5 short prompts, ~30 min of human attention, zero lines of code typed.

### 4. Why it's bespoke (1.5 min)

> This only works because we build it custom for you. Off-the-shelf AI agents don't know your codebase. They don't know your conventions. They don't know your ADRs, your past incidents, your security policies, your deployment patterns.
>
> Phase 3 is bespoke from week one — the orchestrator lives parallel to your codebase. Every sub-agent is tailored to your stack, your test patterns, your security regime. We build custom MCP servers for your internal systems. The Lead Agent's clarifying questions and approval flows are tuned to how your tech leads actually operate.
>
> That bespoke build *is* the value. Otherwise you could chain agents yourself.

### 5. What stays with humans (1 min)

> Look at what we did *not* automate. PM defined requirements. Product Owner approved stories. Tech Lead approved architecture. Tech Lead reviewed the PR. Engineer authorized the PR raise. Engineer directed the AI CLI on PR comments. Release Manager approved the deploy. Every consequential decision was a human's. The orchestrator handled the connective tissue.

### 6. Engagement model (1.5 min)

> Five phases. Six weeks for initial build.
>
> Week 1 — Discovery. We embed and produce an SDLC diagnostic.
> Week 2 — Strategy. Prioritized roadmap. You see what we propose to build.
> Weeks 3–5 — Custom Build. The bespoke orchestrator, live in your environment.
> Week 6 — Training. Operational ownership transferred.
> Beyond — Ongoing optimization and expansion to additional workflows.

### 7. Close (1 min)

> Next step is a demo call. Easiest way to set it up is to connect on LinkedIn — [linkedin.com/in/harshpatel4905](https://www.linkedin.com/in/harshpatel4905/) — send a quick message about your team and stack, and we'll schedule it. After the demo, we'll provide a phase-by-phase estimate for the bespoke build.

---

## B. Concise Pitch — 90 Seconds

> ***Stop writing code. Start orchestrating SDLC automation.***
>
> Most teams use AI as a typing accelerator. Useful, but it doesn't change what your engineers *do*. We build something different.
>
> Your engineer opens their AI Coding CLI and types one prompt — *"start working on TICKET-X."* A Lead Agent — the tech lead of an AI team — picks it up. It reads the ticket, posts clarifying questions on Jira, and waits. Does not start work.
>
> Engineer answers, types `continue`. Lead Agent orchestrates sub-agents: BA, Architecture, Developer, QA, Security, Docs, DevOps, Reporting. When QA finds bugs, the Lead Agent routes back to the Developer — real orchestration with real rework loops. Humans approve consequential gates. Lead Agent asks *"raise PR?"* — waits for explicit yes.
>
> Tech Lead invokes a separate PR Reviewer Agent for AI-assisted review. Engineer resolves comments via the same CLI: `resolve comments on PR #X` — CLI fetches, fixes, pushes.
>
> The engineer never writes code. They orchestrate.
>
> Custom-built around your codebase, your tools, your conventions. That bespoke build is the value — otherwise you could chain agents yourself. Six weeks for the foundational orchestrator. Owned by you. No autonomous-shipping promises. No headcount-cut promises.
>
> Next step — connect on LinkedIn ([linkedin.com/in/harshpatel4905](https://www.linkedin.com/in/harshpatel4905/)), send a quick message, and we'll set up a demo. After the demo we provide a phase-by-phase estimate for your bespoke build.

---

## Common Objections & Responses

**"We've tried AI tools and they didn't stick."**
> Point tools without integration don't stick. The orchestrator is bespoke — integrated with the tools your team uses every day, parallel to your codebase, trained on your conventions. The work it does is what your engineers would have to do anyway. Adoption is "the work shows up already started in your CLI," not "remember to use the AI tool."

**"Our code is sensitive."**
> Reasonable. We support hybrid and fully air-gapped deployments. Data flow is designed during Phase 1 around your constraints.

**"How is this different from a coding assistant?"**
> A coding assistant helps the engineer type a function faster. The orchestrator coordinates a whole team of AI agents across the entire SDLC — analysis, architecture, dev, QA with rework loops, security, docs, deploy. Many of our clients use both.

**"Won't AI produce low-quality work we have to clean up?"**
> If it were a generic generator, yes. Ours is bespoke — sub-agents trained on your conventions, your codebase, your standards. Plus humans approve every consequential gate. Plus QA loops route bugs back automatically. Quality compounds, not degrades.

**"Six weeks sounds aggressive."**
> Six weeks for the *initial scope* — 3–5 high-leverage workflows identified in Phase 1. Not the entire SDLC. The platform expands in Phase 5.

**"How do we know it won't break things?"**
> Every action is proposed for human approval at consequential gates. Code goes through PR review. Deploys go through Release Manager approval. Cost circuit breakers prevent runaway. Audit logs make every action traceable. Killswitches stop activity instantly.

**"Price?"**
> Phase 1 fixed-price. Phases 2–4 sized after Phase 1 — we don't quote blind. Phase 5 retainer based on observed outcomes.
