# SDLC Automation Orchestrator
### Proposal Package + Interactive Website

> **Stop writing code. Start orchestrating it.**
>
> Convert your SDLC team into an AI-orchestrated engineering team. An engineer opens their AI coding CLI and types one prompt — `start working on TICKET-X`. A **Lead Agent** — the tech lead of an AI team — coordinates specialized sub-agents through the SDLC. When QA finds bugs, the Lead Agent routes work back to the Developer sub-agent. Humans approve every consequential moment.

---

## 🌐 Public vs Internal — Two Separate Surfaces

The repo serves **two distinct audiences** at two URL paths:

| Surface | URL | Audience | What it shows |
|---------|-----|----------|---------------|
| **Public website** | `/` | Clients, prospects | Marketing site, live demo, impact, how it works, engagement, CTA |
| **Internal docs** | `/internal/library.html` | Sales team only | Full proposal, architecture, demo script, discovery framework, pitch scripts |

**The public site has NO links to the internal docs.** Internal docs are accessed only via the direct URL — which the sales team keeps private.

---

## 🔗 URLs (After GitHub Pages Enabled)

### Public (share freely with clients)

| URL | Page |
|-----|------|
| `https://nikunj018.github.io/SDLC-Orchestrator/` | **Main website** with live demo |

### Internal (sales team only — do not share with clients)

| URL | Document |
|-----|----------|
| `https://nikunj018.github.io/SDLC-Orchestrator/internal/library.html` | **Internal hub** — index of all docs |
| `https://nikunj018.github.io/SDLC-Orchestrator/internal/proposal.html` | Executive Proposal |
| `https://nikunj018.github.io/SDLC-Orchestrator/internal/architecture.html` | Technical Architecture |
| `https://nikunj018.github.io/SDLC-Orchestrator/internal/demo.html` | Demo Script |
| `https://nikunj018.github.io/SDLC-Orchestrator/internal/discovery.html` | Discovery Framework |
| `https://nikunj018.github.io/SDLC-Orchestrator/internal/pitches.html` | Sales Positioning & Objections |

> ⚠️ **Internal URLs are obscure but not password-protected.** Anyone with the URL can view them. Keep the `/internal/` path private — do not link from emails, social, or LinkedIn posts. Share only person-to-person within the sales team.

---

## 📁 Repository Structure

```
/
├── README.md                          (this file)
├── 01_EXECUTIVE_PROPOSAL.md           (markdown source)
├── 02_TECHNICAL_ARCHITECTURE.md       (markdown source)
├── 03_DEMO_JIRA_TO_DEPLOY.md          (markdown source)
├── 04_DISCOVERY_FRAMEWORK.md          (markdown source)
├── 05_SALES_PITCH_VARIANTS.md         (markdown source)
└── docs/                              (GitHub Pages root)
    ├── index.html                     (PUBLIC main marketing site)
    ├── styles.css
    ├── doc.css
    ├── script.js
    ├── .nojekyll
    └── internal/                      (INTERNAL — sales team only)
        ├── library.html               (internal docs hub)
        ├── proposal.html
        ├── architecture.html
        ├── demo.html
        ├── discovery.html
        └── pitches.html
```

---

## 🚀 Enable GitHub Pages (one-time)

1. Open https://github.com/Nikunj018/SDLC-Orchestrator/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `main` · **Folder:** `/docs`
4. **Save**
5. Wait ~30 sec. Live at `https://nikunj018.github.io/SDLC-Orchestrator/`

---

## 🖥 Local Preview

```
Double-click docs/index.html
```

For internal docs hub:
```
Double-click docs/internal/library.html
```

---

## 📑 How to Share

### With clients
- Share the **public URL** only: `https://nikunj018.github.io/SDLC-Orchestrator/`
- Drives them to: live demo → impact → how it works → engagement → LinkedIn connect for demo

### With sales team (internal)
- Share the **internal library URL**: `https://nikunj018.github.io/SDLC-Orchestrator/internal/library.html`
- Sales team uses this as their working reference
- For asynchronous client review of a specific doc, individual URLs can be shared one-off:
  - e.g., `.../internal/proposal.html` — but bear in mind these are technically reachable by anyone with the link

### As PDFs
- Open any HTML doc in Chrome → Print → Save as PDF
- Doc styles are print-aware → clean PDFs for email attachments

---

## 🎯 The Operating Model (One Paragraph)

The engineer opens their AI Coding CLI and types `start working on TICKET-X`. A **Lead Agent** — the tech lead of an AI team — reads the ticket, the codebase, and similar past work. It posts clarifying questions on Jira and **waits**. The orchestrator never starts work blindly. Engineer answers via PM, re-triggers with `continue`. Lead Agent delegates to sub-agents: BA (PO approves), Architecture (TL approves), Developer. QA runs tests — and when it finds bugs, **the Lead Agent routes back to the Developer sub-agent** for fixes. QA re-validates. Security and Docs finalize. Lead Agent asks the engineer **"Raise the PR?"** — waits for explicit yes. PR opens. Tech Lead invokes the separate **PR Reviewer Agent** for AI-assisted review. Engineer resolves comments by typing `resolve comments on PR #X` in the same AI Coding CLI. DevOps prepares deploy. Release Manager approves. Shipped. Engineer typed ~5 short prompts. Wrote zero lines of code.

---

## 📊 Engagement at a Glance

| | |
|---|---|
| **Phase 1** | Discovery week (fixed price) |
| **Phase 2** | Strategy & roadmap (week 2) |
| **Phase 3** | Custom build of bespoke orchestrator (weeks 3–5) |
| **Phase 4** | Training & adoption (week 6) |
| **Phase 5** | Ongoing optimization & expansion |
| **Owned by** | The client — code, configs, agents, integrations |
| **Pricing** | Phase-by-phase estimate after demo. No blind quotes. |

---

## 🤝 First Contact (For Clients)

Public CTA flow: **LinkedIn connect → demo call → phase-by-phase estimate**.

LinkedIn (Harsh Patel): **https://www.linkedin.com/in/harshpatel4905/**

---

> *Stop writing code. Start orchestrating it.*
