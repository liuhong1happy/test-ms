<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  Machine Society — Product Content File                     ║
  ║  File: client/src/content/products/ms-agent.md              ║
  ║                                                              ║
  ║  HOW TO EDIT THIS FILE                                       ║
  ║  ─────────────────────                                       ║
  ║  Replace the content below with your actual product info.    ║
  ║  Metadata (name, tagline, image, status) → content.ts        ║
  ║                                                              ║
  ║  RICH MEDIA SYNTAX                                           ║
  ║  ─────────────────────                                       ║
  ║  Image:  ![Alt](URL "Caption")                              ║
  ║  Video:  <!-- video: https://youtube.com/watch?v=ID -->     ║
  ║  Table:  | Col 1 | Col 2 |  (GFM)                           ║
  ║  Code:   ```python ... ```                                   ║
  ╚══════════════════════════════════════════════════════════════╝
-->

MS-Agent is Machine Society's autonomous agent framework, built on top of MS-1. It enables reliable multi-step task execution across web interfaces, code environments, and data pipelines — without brittle scripting or manual orchestration.

## How It Works

Unlike rule-based automation, MS-Agent reasons about its environment dynamically. It observes the current state, plans a sequence of actions, executes them, and adapts when the environment behaves unexpectedly.

The agent loop:

1. **Observe** — Parse the current environment state (DOM, API response, file system, etc.)
2. **Plan** — Generate a step-by-step action plan using MS-1's reasoning capabilities
3. **Act** — Execute the next action via available tools
4. **Verify** — Check whether the action succeeded; retry or replan if not
5. **Report** — Produce a structured audit trail of every action taken

<!-- ── IMAGE EXAMPLE ──────────────────────────────────────────────
     Replace with your actual product screenshot or diagram.
     Upload: manus-upload-file ‑‑webdev path/to/screenshot.png
     ─────────────────────────────────────────────────────────── -->
![MS-Agent workflow diagram](/images/card_agent.webp "MS-Agent observe-plan-act loop")

## Supported Environments

| Environment     | Status    | Notes                                      |
|-----------------|-----------|--------------------------------------------|
| Web browsers    | Available | Chromium-based via Playwright integration  |
| Terminal / CLI  | Available | Bash, Python, Node.js execution            |
| REST APIs       | Available | JSON/XML, OAuth 2.0 support                |
| File systems    | Available | Read, write, transform structured files    |
| Databases       | Beta      | SQL via natural language queries           |
| Custom tools    | Available | Register any function via tool-use schema  |

## Demo

<!-- ── VIDEO EXAMPLE ──────────────────────────────────────────────
     Replace with your actual demo video URL.
     ─────────────────────────────────────────────────────────── -->
<!-- video: https://www.youtube.com/watch?v=dQw4w9WgXcQ -->

## Integration

MS-Agent exposes a simple REST API and supports tool-use via a standardized function-calling interface compatible with existing LLM toolchains.

```python
import ms_client

agent = ms_client.Agent(
    model="ms-agent-v1",
    tools=["browser", "terminal", "file_system"],
    api_key="YOUR_API_KEY"
)

result = agent.run(
    task="Go to our analytics dashboard, download last month's CSV, and summarize the top 5 metrics.",
    max_steps=20
)

print(result.summary)
print(result.audit_trail)   # Full step-by-step log
```

## Use Cases

- **Software engineering** — Code review, test generation, automated refactoring
- **Data pipelines** — Ingestion, transformation, report generation
- **Research assistance** — Literature synthesis, hypothesis generation, citation management
- **Customer operations** — Ticket triage, response drafting, CRM updates

## Safety & Control

MS-Agent includes configurable guardrails:

- **Action allowlists** — Restrict which tools and domains the agent can access
- **Human-in-the-loop** — Pause and request confirmation before irreversible actions
- **Audit trails** — Every action is logged with timestamp, rationale, and outcome
- **Rollback support** — File system and database actions can be undone

## Availability

MS-Agent is currently in **Beta**. Access is available to select partners. [Contact us](#) to join the waitlist.

---

*Last updated: January 2026*
