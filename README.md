# SDLC Automation Orchestrator
### Proposal Package + Interactive Website

> **Stop writing code. Start orchestrating it.**
>
> Convert your SDLC team into an AI-orchestrated engineering team. An engineer opens their AI coding CLI and types one prompt — `start working on TICKET-X`. A **Lead Agent** — the tech lead of an AI team — coordinates specialized sub-agents through the SDLC. When QA finds bugs, the Lead Agent routes work back to the Developer sub-agent. Humans approve every consequential moment.

---

## 🌐 Live Site

Once GitHub Pages is enabled (instructions below), the site is at:

**https://nikunj018.github.io/SDLC-Orchestrator/**

Direct doc URLs (shareable with prospects):

| URL | Document |
|-----|----------|
| `/` or `/index.html` | Marketing site with live demo |
| `/library.html` | Document library (index of all docs) |
| `/proposal.html` | Executive Proposal |
| `/architecture.html` | Technical Architecture |
| `/demo.html` | Demo Script (Jira → Deployment) |
| `/discovery.html` | Phase 1 Discovery Framework |
| `/pitches.html` | Sales Positioning & Objections |

---

## 📁 Repository Structure

```
/
├── README.md                          (this file)
├── 01_EXECUTIVE_PROPOSAL.md           (source — markdown)
├── 02_TECHNICAL_ARCHITECTURE.md       (source — markdown)
├── 03_DEMO_JIRA_TO_DEPLOY.md          (source — markdown)
├── 04_DISCOVERY_FRAMEWORK.md          (source — markdown)
├── 05_SALES_PITCH_VARIANTS.md         (source — markdown)
└── docs/                              (GitHub Pages root)
    ├── index.html                     (main marketing site + interactive demo)
    ├── library.html                   (document library index)
    ├── proposal.html                  (rendered HTML doc)
    ├── architecture.html              (rendered HTML doc)
    ├── demo.html                      (rendered HTML doc)
    ├── discovery.html                 (rendered HTML doc)
    ├── pitches.html                   (rendered HTML doc)
    ├── styles.css                     (main styles)
    ├── doc.css                        (doc-page prose styles)
    ├── script.js                      (demo logic)
    └── .nojekyll                      (disables Jekyll processing)
```

---

## 🚀 Enable GitHub Pages

After pushing, enable Pages from the repo settings:

1. Go to **https://github.com/Nikunj018/SDLC-Orchestrator/settings/pages**
2. Under **Source**, select **Deploy from a branch**
3. Under **Branch**, select **main** and **/docs**
4. Click **Save**
5. Wait ~30 seconds. Site live at **https://nikunj018.github.io/SDLC-Orchestrator/**

---

## 🖥 Local Preview

```
Double-click docs/index.html
```

No build. No server. Works in any modern browser.

For a local server (better for clean URLs):

```bash
cd docs
python -m http.server 8000
# open http://localhost:8000
```

---

## 📑 How to Share Internal Docs (Without Sending MD Files)

The HTML doc pages in `/docs/` are designed for sharing with clients without sending raw `.md` files.

**Three ways to share:**

1. **Direct URL** — after Pages is enabled, share `https://nikunj018.github.io/SDLC-Orchestrator/proposal.html` (or any other doc URL). Renders beautifully in any browser.
2. **PDF export** — open the HTML doc in Chrome → Print → Save as PDF. The doc styles are print-aware and produce clean PDFs.
3. **Local HTML** — send the `/docs/` folder as a zip. Recipient double-clicks `index.html` to open the site offline.

The MD files at repo root remain the source of truth for editing — when changes are needed, edit the MD then update the corresponding HTML doc page.

---

## 🎯 The Operating Model (One Paragraph)

The engineer opens their AI Coding CLI in the terminal and types `start working on TICKET-X`. A **Lead Agent** — the tech lead of an AI team — reads the ticket, the codebase, and similar past work. It posts clarifying questions on Jira and **waits**. The orchestrator never starts work blindly. Engineer answers via PM, re-triggers with `continue`. Lead Agent delegates to sub-agents: BA (Product Owner approves), Architecture (Tech Lead approves), Developer. QA runs tests — and when it finds bugs, **the Lead Agent routes back to the Developer sub-agent** for fixes. QA re-validates. Security and Docs finalize. Lead Agent asks the engineer **"Raise the PR?"** — waits for explicit yes. PR opens. Tech Lead invokes the separate **PR Reviewer Agent** for AI-assisted review. Engineer resolves comments by typing `resolve comments on PR #X` in the same AI Coding CLI. DevOps sub-agent prepares deploy. Release Manager approves. Shipped. Engineer typed ~5 short prompts. Wrote zero lines of code.

---

## 💼 Why Bespoke

Off-the-shelf agents don't know your codebase, your ADRs, your conventions, or your tools. We build:

- **Parallel to your codebase** with full read context
- **Custom MCPs** for your internal systems
- **Conventions baked in** — coding style, testing patterns, security policies, deployment rituals
- **Lead Agent tuned** to how your tech leads actually operate

That bespoke build *is* the value. Otherwise you could chain agents yourself.

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

## 🤝 First Contact

All client outreach lands on the same first step: **LinkedIn connect → demo call → phase-by-phase estimate**.

LinkedIn (Harsh Patel): **https://www.linkedin.com/in/harshpatel4905/**

The website's CTAs and doc-page footers route prospects to LinkedIn. Sales team can also share direct URLs to specific documents (proposal, architecture, demo, etc.) for asynchronous review before the demo call.

---

> *Stop writing code. Start orchestrating it.*
