/* ============================================
   SDLC Orchestrator — Interactive Demo
   10 steps · QA bug-loop · auto-play default
   ============================================ */

const STEPS = [
  {
    title: "Engineer triggers the orchestrator",
    desc: "In their terminal, the engineer opens their AI Coding CLI and types one prompt: <code>start working on PROJ-1842</code>. That's the entire invocation. The orchestrator runs in the same CLI surface they already use for coding — no new tool to learn.",
    meta: {
      typed: "start working on PROJ-1842",
      agent: "Lead Agent (reading ticket)",
      approval: "none yet"
    },
    cliBlocks: [1],
    leadActive: true,
    subsActive: [],
    subsDone: [],
    subsError: [],
    extActive: [],
    jiraShow: [],
    ghShow: [],
    showGH: false,
    deployed: false,
    jiraStatus: "Status: To Do"
  },
  {
    title: "Lead Agent asks clarifying questions on Jira — and pauses",
    desc: "Like a real tech lead, the Lead Agent reads the ticket plus codebase context plus similar past tickets. Before bringing in the team, it identifies what's unclear. It posts clarifying questions on Jira and <em>pauses</em>. It does not assume.",
    meta: {
      typed: "—",
      agent: "Lead Agent (paused)",
      approval: "waiting on PM"
    },
    cliBlocks: [1, 2],
    leadActive: true,
    subsActive: [],
    subsDone: [],
    subsError: [],
    extActive: [],
    jiraShow: ["jira-lead-q"],
    ghShow: [],
    showGH: false,
    deployed: false,
    jiraStatus: "Status: In Refinement (paused — awaiting answers)"
  },
  {
    title: "PM answers. Engineer continues. BA writes stories.",
    desc: "The PM answers on Jira between meetings. The engineer reads, decides the answers are clear enough, and types <code>continue</code>. The Lead Agent resumes — and like a tech lead, delegates first to the Business Analysis sub-agent. Product Owner approves the stories.",
    meta: {
      typed: "continue on PROJ-1842",
      agent: "BA Sub-agent → PO approved",
      approval: "✔ Product Owner"
    },
    cliBlocks: [1, 2, 3],
    leadActive: true,
    subsActive: ["ba"],
    subsDone: [],
    subsError: [],
    extActive: [],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba"],
    ghShow: [],
    showGH: false,
    deployed: false,
    jiraStatus: "Status: In Progress"
  },
  {
    title: "Architecture planned. Developer codes.",
    desc: "The Architecture sub-agent loads the codebase, identifies impacted modules, drafts the plan against your team's ADRs — Tech Lead approves. The Developer sub-agent picks up the work, following your team's conventions and patterns.",
    meta: {
      typed: "—",
      agent: "Architecture → TL approved → Developer coding",
      approval: "✔ Product Owner · ✔ Tech Lead"
    },
    cliBlocks: [1, 2, 3, 4],
    leadActive: true,
    subsActive: ["dev"],
    subsDone: ["ba", "arc"],
    subsError: [],
    extActive: [],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc"],
    ghShow: [],
    showGH: false,
    deployed: false,
    jiraStatus: "Status: In Progress"
  },
  {
    title: "QA finds bugs. Lead Agent routes back to Developer.",
    desc: "This is real orchestration. The QA sub-agent runs the test suite and finds two failures — a date-range edge case and a missing audit log event. The Lead Agent doesn't paper over this. It routes back to the Developer sub-agent, exactly as a real tech lead would.",
    meta: {
      typed: "—",
      agent: "QA Sub-agent — 2 FAILURES",
      approval: "Lead Agent routing back to Developer"
    },
    cliBlocks: [1, 2, 3, 4, 5],
    leadActive: true,
    subsActive: [],
    subsDone: ["ba", "arc", "dev"],
    subsError: ["qa"],
    extActive: [],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc", "jira-bug"],
    ghShow: [],
    showGH: false,
    deployed: false,
    jiraStatus: "Status: In Progress (rework — QA found 2 issues)"
  },
  {
    title: "Developer fixes. QA re-validates. All green.",
    desc: "The Developer sub-agent patches the failing cases. QA re-runs the full suite — 47/47 passing, 91% coverage on new code. This back-and-forth between agents is what makes the orchestrator a real engineering team, not a one-shot code generator.",
    meta: {
      typed: "—",
      agent: "Developer → QA (re-validated all green)",
      approval: "✔ rework complete"
    },
    cliBlocks: [1, 2, 3, 4, 5, 6],
    leadActive: true,
    subsActive: [],
    subsDone: ["ba", "arc", "dev", "qa"],
    subsError: [],
    extActive: [],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc", "jira-bug"],
    ghShow: [],
    showGH: false,
    deployed: false,
    jiraStatus: "Status: In Progress (QA passed after rework)"
  },
  {
    title: 'Security + Docs done. Lead Agent asks "Raise the PR?"',
    desc: "Security scans run — all clean. Docs sub-agent updates help center and release notes. With everything ready, the Lead Agent surfaces the most consequential decision back to the engineer: <em>should I raise the PR?</em> It never raises PRs unprompted. Engineer types <code>y</code>. PR opens.",
    meta: {
      typed: "y",
      agent: "Developer (raising PR)",
      approval: "✔ Engineer authorizes PR"
    },
    cliBlocks: [1, 2, 3, 4, 5, 6, 7],
    leadActive: true,
    subsActive: [],
    subsDone: ["ba", "arc", "dev", "qa", "sec", "doc"],
    subsError: [],
    extActive: [],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc", "jira-bug", "jira-done"],
    ghShow: [],
    showGH: true,
    deployed: false,
    jiraStatus: "Status: In Review"
  },
  {
    title: "Tech Lead invokes the PR Reviewer Agent",
    desc: "The PR is open. The PR Reviewer Agent is <em>separate</em> — invoked by the Tech Lead on demand: <code>@pr-reviewer review PR #4522</code>. It posts inline comments with confidence indicators. The Tech Lead adds their own judgment notes. AI assists; humans decide.",
    meta: {
      typed: "@pr-reviewer review PR #4522",
      agent: "PR Reviewer Agent (★ separate)",
      approval: "Tech Lead reviewing"
    },
    cliBlocks: [1, 2, 3, 4, 5, 6, 7, 8],
    leadActive: false,
    subsActive: [],
    subsDone: ["ba", "arc", "dev", "qa", "sec", "doc"],
    subsError: [],
    extActive: ["prr"],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc", "jira-bug", "jira-done"],
    ghShow: ["gh-prr", "gh-tl"],
    showGH: true,
    deployed: false,
    jiraStatus: "Status: In Review"
  },
  {
    title: "Engineer resolves PR comments via the same AI Coding CLI",
    desc: "In the same CLI they triggered the work, the engineer types: <code>resolve comments on PR #4522</code>. The CLI fetches every open comment, reads the code, applies fixes, replies inline, and pushes. Engineer reviews the diff and approves. They directed — they did not type code.",
    meta: {
      typed: "resolve comments on PR #4522",
      agent: "AI Coding CLI (★ external)",
      approval: "Engineer directs · Tech Lead re-approves"
    },
    cliBlocks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    leadActive: false,
    subsActive: [],
    subsDone: ["ba", "arc", "dev", "qa", "sec", "doc"],
    subsError: [],
    extActive: ["cli"],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc", "jira-bug", "jira-done"],
    ghShow: ["gh-prr", "gh-tl", "gh-pushed", "gh-approved"],
    showGH: true,
    deployed: false,
    jiraStatus: "Status: In Review (resolved)"
  },
  {
    title: "DevOps prepares. Release Manager approves. DEPLOYED.",
    desc: "On merge, the DevOps sub-agent prepares the deployment checklist, generates the rollback plan, and validates environments. Release Manager approves in Slack. Deploy executes. The Reporting sub-agent posts the delivery summary. <strong>~4 hours · ~5 short prompts by the engineer · 0 lines of code typed.</strong>",
    meta: {
      typed: "—",
      agent: "DevOps + Reporting (complete)",
      approval: "✔ Release Manager approved deploy"
    },
    cliBlocks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    leadActive: false,
    subsActive: [],
    subsDone: ["ba", "arc", "dev", "qa", "sec", "doc", "ops", "rpt"],
    subsError: [],
    extActive: [],
    jiraShow: ["jira-lead-q", "jira-pm-a", "jira-ba", "jira-arc", "jira-bug", "jira-done"],
    ghShow: ["gh-prr", "gh-tl", "gh-pushed", "gh-approved"],
    showGH: true,
    deployed: true,
    jiraStatus: "Status: Done ✔"
  }
];

const TOTAL_STEPS = STEPS.length;
const AUTO_INTERVAL_MS = 5500;
const AUTO_START_DELAY_MS = 1500;

let currentStep = 1;
let autoPlay = true;
let autoPlayTimer = null;
let autoStarted = false;

// ============================================
// RENDER
// ============================================
function renderStep(n) {
  const step = STEPS[n - 1];
  if (!step) return;

  document.getElementById("step-num").textContent = String(n).padStart(2, "0");
  document.getElementById("step-title").textContent = step.title;
  document.getElementById("step-desc").innerHTML = step.desc;
  document.getElementById("meta-typed").textContent = step.meta.typed;
  document.getElementById("meta-agent").textContent = step.meta.agent;
  document.getElementById("meta-approval").textContent = step.meta.approval;

  // dots
  document.querySelectorAll(".dot-step").forEach((d, i) => {
    d.classList.remove("active", "done");
    if (i + 1 === n) d.classList.add("active");
    else if (i + 1 < n) d.classList.add("done");
  });

  // CLI blocks
  const visibleBlocks = new Set(step.cliBlocks);
  document.querySelectorAll(".cli-block").forEach((b) => {
    const id = parseInt(b.dataset.block, 10);
    if (visibleBlocks.has(id)) b.classList.add("visible");
    else b.classList.remove("visible");
  });

  // auto-scroll CLI to bottom
  const cliBody = document.getElementById("cli-body");
  if (cliBody) {
    setTimeout(() => { cliBody.scrollTop = cliBody.scrollHeight; }, 100);
  }

  // Lead Agent active
  const leadNode = document.getElementById("node-lead");
  if (step.leadActive) leadNode.classList.add("active");
  else leadNode.classList.remove("active");

  // sub-agents
  const subIds = ["ba", "arc", "dev", "qa", "sec", "doc", "ops", "rpt"];
  subIds.forEach((id) => {
    const el = document.getElementById("node-" + id);
    el.classList.remove("active", "done", "error");
    if (step.subsError && step.subsError.includes(id)) el.classList.add("error");
    else if (step.subsActive.includes(id)) el.classList.add("active");
    else if (step.subsDone.includes(id)) el.classList.add("done");
  });

  // external agents
  ["prr", "cli"].forEach((id) => {
    const el = document.getElementById("node-" + id);
    if (step.extActive.includes(id)) el.classList.add("active");
    else el.classList.remove("active");
  });

  // Jira
  const jiraStatus = document.getElementById("jira-status");
  if (jiraStatus) jiraStatus.textContent = step.jiraStatus;

  document.querySelectorAll(".jira-comment").forEach((c) => {
    const key = c.dataset.msg;
    if (step.jiraShow.includes(key)) c.classList.add("visible");
    else c.classList.remove("visible");
  });

  // GitHub
  const gh = document.getElementById("surface-github");
  gh.style.opacity = step.showGH ? "1" : "0.35";
  gh.style.filter = step.showGH ? "none" : "grayscale(0.5)";

  document.querySelectorAll(".gh-comment").forEach((c) => {
    const key = c.dataset.msg;
    if (step.ghShow.includes(key)) c.classList.add("visible");
    else c.classList.remove("visible");
  });

  // Deploy banner
  const banner = document.getElementById("deploy-banner");
  if (step.deployed) banner.classList.add("visible");
  else banner.classList.remove("visible");

  // Controls
  document.getElementById("btn-prev").disabled = n === 1;
  const nextBtn = document.getElementById("btn-next");
  nextBtn.disabled = n === TOTAL_STEPS;
  nextBtn.textContent = n === TOTAL_STEPS ? "Done ✓" : "Next →";
}

// ============================================
// CONTROLS
// ============================================
function next() {
  if (currentStep < TOTAL_STEPS) {
    currentStep++;
    renderStep(currentStep);
  } else if (autoPlay) {
    stopAutoPlay();
  }
}

function prev() {
  stopAutoPlay();
  if (currentStep > 1) {
    currentStep--;
    renderStep(currentStep);
  }
}

function reset() {
  stopAutoPlay();
  currentStep = 1;
  renderStep(currentStep);
}

function toggleAutoPlay() {
  if (autoPlay) stopAutoPlay();
  else startAutoPlay();
}

function startAutoPlay() {
  autoPlay = true;
  document.getElementById("btn-play").textContent = "⏸ Pause";
  if (currentStep >= TOTAL_STEPS) {
    currentStep = 1;
    renderStep(currentStep);
  }
  if (autoPlayTimer) clearInterval(autoPlayTimer);
  autoPlayTimer = setInterval(() => {
    if (currentStep >= TOTAL_STEPS) {
      stopAutoPlay();
      return;
    }
    next();
  }, AUTO_INTERVAL_MS);
}

function stopAutoPlay() {
  autoPlay = false;
  document.getElementById("btn-play").textContent = "⏵ Auto";
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

// ============================================
// WIRING
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-next").addEventListener("click", () => {
    stopAutoPlay();
    next();
  });
  document.getElementById("btn-prev").addEventListener("click", prev);
  document.getElementById("btn-play").addEventListener("click", toggleAutoPlay);
  document.getElementById("btn-reset").addEventListener("click", reset);

  document.querySelectorAll(".dot-step").forEach((d) => {
    d.addEventListener("click", () => {
      stopAutoPlay();
      currentStep = parseInt(d.dataset.step, 10);
      renderStep(currentStep);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowRight") { stopAutoPlay(); next(); }
    if (e.key === "ArrowLeft")  { stopAutoPlay(); prev(); }
    if (e.key === " ")          { e.preventDefault(); toggleAutoPlay(); }
    if (e.key === "r" || e.key === "R") reset();
  });

  // initial render
  renderStep(1);

  // auto-play kicks in when demo is visible
  const demoEl = document.getElementById("demo");
  if (demoEl && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !autoStarted) {
          autoStarted = true;
          setTimeout(() => {
            if (autoPlay) startAutoPlay();
          }, AUTO_START_DELAY_MS);
        }
      });
    }, { threshold: 0.25 });
    obs.observe(demoEl);
  } else {
    setTimeout(() => { if (autoPlay) startAutoPlay(); }, AUTO_START_DELAY_MS);
  }
});
