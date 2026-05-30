# SDLC Orchestrator — Demo Video Script

**Duration:** ~2:18 (138 seconds)
**Companion file:** `docs/video-demo.html` — auto-plays the visual animation
**Voiceover:** record live OR feed this script to Synthesia / ElevenLabs / Descript

---

## How to produce the video

### Option A — In-browser self-record (fastest)
1. Open `docs/video-demo.html` in Chrome or Edge.
2. Click **"Record & Download .webm"**.
3. Browser asks which window/tab to share — pick **"This tab"** (the demo tab).
4. Recording starts. Demo auto-plays. ~2:18 later, `.webm` file downloads.
5. Convert to .mp4 if needed: any online converter, HandBrake, or CloudConvert.

### Option B — OBS / Win+G / Loom (best quality)
1. Open `docs/video-demo.html` fullscreen (F11).
2. Start your screen-recorder.
3. Click **"▶ Play (no recording)"**.
4. Stop recording when end card appears.

### Option C — Voiceover sync
1. Use Option B with OBS.
2. Read the lines below into your mic, watching the on-screen timer (top-right of stage).
3. Each line is anchored to its scene's `t=` timestamp from the HTML script.

---

## Voiceover Script (timed)

### 0:00 — COLD OPEN (4.5s)
> "From a Jira ticket to deployed code. Zero lines typed by hand. This is the SDLC Orchestrator — a real engineering team, orchestrated by AI agents."

### 0:05 — SCENE 01 · TRIGGER
> "PROJ-1842. Bulk invoice CSV export. The orchestrator doesn't chase tickets — it waits for an engineer. The engineer opens their AI Coding CLI and types one prompt: `start working on PROJ-1842`. That's the entire invocation."

### 0:15 — SCENE 02 · CLARIFY
> "The Lead Agent reads the ticket, the codebase, twelve similar past tickets. It finds three things unclear. It does not assume. It posts clarifying questions on Jira — and pauses. Like a real tech lead would."

### 0:24 — SCENE 03 · RESUME
> "The PM answers between meetings. The engineer types one word: `continue`. The Lead Agent resumes — and delegates first to the Business Analyst sub-agent. Stories drafted. The Product Owner approves in Slack. First human gate complete."

### 0:40 — SCENE 04 · DESIGN + BUILD
> "Architecture sub-agent now. Three services impacted. The plan follows the team's own ADR for background jobs — not a generic template. The Tech Lead approves. The Developer sub-agent picks up the work. Fourteen files modified. Four added. Six commits pushed."

### 0:54 — SCENE 05 · QA LOOP
> "This is where one-shot generators fail. The QA sub-agent runs the test suite — and finds two bugs. An off-by-one on a date boundary. A missing audit event on the background path. The Lead Agent does not paper over this. It routes back to the Developer — exactly as a real tech lead would."

### 1:04 — SCENE 06 · FIX + RE-VALIDATE
> "Two precise fixes. Line 84. Line 142. QA re-runs. Forty-seven of forty-seven tests pass. Coverage on new code: ninety-one percent. This back-and-forth is what makes the orchestrator a team — not a code generator."

### 1:14 — SCENE 07 · GATE
> "Security sub-agent — SAST clean, secrets clean, multi-tenant isolation verified. Docs sub-agent — help center updated, release notes drafted. The Lead Agent now surfaces the most consequential decision back to the engineer: *should I raise the PR?* The engineer types `y`. Never unprompted."

### 1:29 — SCENE 08 · ON-DEMAND REVIEW
> "The PR Reviewer Agent is not auto-triggered. The Tech Lead pulls it in from Slack on demand. Three actionable items. Two needing human judgment — rate-limit copy, customer-facing wording. AI assists. The Tech Lead decides."

### 1:38 — SCENE 09 · RESOLVE
> "The engineer doesn't manually type fixes. In the same CLI, one prompt: `resolve comments on PR #4522`. Four comments fetched. Four fixes applied. Replied inline. Three commits pushed. Tech Lead re-reviews. Merged."

### 1:50 — SCENE 10 · DEPLOY
> "DevOps sub-agent. Deploy checklist. Rollback plan. Release Manager approves in Slack. Canary five percent, twenty-five, one hundred. Zero anomalies. Jira ticket moves to Done. The Reporting sub-agent posts the delivery summary."

### 2:08 — END CARD (10s hold)
> "One hour. Five short CLI prompts. Zero lines of code typed by hand. Humans approved every gate. The team didn't get smaller. The team got a new operating model."

---

## Per-scene shot list (what the eye sees)

| Time | Scene | Left (Jira) | Centre (CLI + Agents) | Right (GitHub + Slack) | Banner |
|------|-------|-------------|-----------------------|------------------------|--------|
| 0:00 | Cold | (hidden) | (hidden — title card) | (hidden) | — |
| 0:05 | 01 Trigger | Ticket: To Do | CLI: `start working on PROJ-1842` · Lead Agent activates | empty | Trigger |
| 0:15 | 02 Clarify | Status → In Refinement · Lead Agent comment posts | CLI: pause notice | empty | Clarify |
| 0:24 | 03 Resume | PM answer appears · BA agent comment | CLI: `continue` typed · BA sub-agent activates | Slack: PO approves | Resume |
| 0:40 | 04 Design+Build | Architect plan posted | Architect → done · Developer → active | Slack: TL approves | Design+Build |
| 0:54 | 05 QA Loop | — | CLI: red ✗ failures · QA flashes red | — | QA Loop |
| 1:04 | 06 Fix+Re-validate | — | Developer reactivates · QA goes green · 47/47 | — | Fix+Re-validate |
| 1:14 | 07 Gate | Status → In Review | Security · Docs activate-done · "Raise PR? [y/N]" · engineer types `y` | PR #4522 card appears, OPEN | Gate |
| 1:29 | 08 On-demand Review | — | — | PR Reviewer Agent inline comments · Slack: TL notes | On-demand Review |
| 1:38 | 09 Resolve | — | CLI: `resolve comments on PR #4522` · 4 fixes | PR comment from CLI · status → MERGED | Resolve |
| 1:50 | 10 Deploy | Status → Done | DevOps active · Reporting active · final ✓ | Slack: RM approves · Reporting summary | Deploy |
| 2:08 | End card | (hidden) | (hidden) | (hidden) | — |

---

## Production tips

- **Frame:** 1920×1080. The stage scales — at full-screen the demo fills the viewport precisely.
- **Audio:** record voiceover separately, line up against the on-screen timer (top-right). Add subtle synth pad + soft keystroke SFX for CLI typing if doing post.
- **Background music:** instrumental, ~80–95 BPM, building. LoFi house or cinematic minimal works. Keep under −18 dB so voiceover sits clearly.
- **Captions:** burn-in the scene title + step number from each banner for silent-viewing (LinkedIn auto-plays muted).
- **Cuts:** the HTML already paces scene-to-scene fades. No editing needed unless you want extra emphasis on the QA loop (Scene 5) — that's the single most differentiating moment vs. one-shot code generators. Consider a 1-second freeze + zoom on the red `✗ 2 tests failing` line.

---

## Distribution variants

| Variant | Length | Cut | Use |
|---------|--------|-----|-----|
| Full | 2:18 | as-is | Sales demos, landing page |
| LinkedIn | 0:60 | Cold open + scenes 1, 5, 9, 10 + end card | Social |
| Sizzle | 0:20 | Cold open + end card stats only | Hero loop |
| Engineer cut | 2:18 | Same visual, swap voiceover for technical depth (commit SHAs, test names, ADR refs) | Tech buyer call |

---

*See live page at `docs/video-demo.html`. Voiceover lines are anchored to `t=` timestamps in the embedded SCRIPT array — adjust there if you want to retime.*
