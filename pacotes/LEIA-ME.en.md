# Ready-made agent packages

A **package** is a cultivated agent with all eight elements already filled in: role, context, tools, rules, examples, memory, evaluation, and feedback. You don't start from zero. You start from an agent card, a template context, annotated examples, a system prompt, and a scorecard. Swap what belongs to the fictional company for what belongs to yours and start running the cycle.

> **Notice:** these are templates to import and switch on; they have not been run against a real CRM or n8n instance. Test with fictional data before pointing them at any production system.

The package files are in Portuguese.

## Packages

| Folder | Agent | Completeness |
|---|---|---|
| `qualificador-de-leads/` (lead qualifier) | Qualifies inbound leads (A/B/C) and recommends the next action | Complete: card, context, 20 examples, prompt, scorecard, n8n workflow, failure log |
| `triagem-de-atendimento/` (support triage) | Classifies tickets, suggests a reply from the knowledge base, escalates by rule | Light: card, prompt, 10 examples, scorecard |
| `conciliacao-financeira/` (financial reconciliation) | Classifies bank transactions and flags discrepancies | Light: card, prompt, 10 examples, scorecard |
| `relatorio-de-marketing/` (marketing report) | Builds the weekly metrics report with a reading and recommendations | Light: card, prompt, 10 examples, scorecard |

## How to use (applies to all)

1. **Read the agent card** and adjust the role, the expected result, and the human owner.
2. **Swap the context** of the fictional company for yours. Less and better: one curated page is worth more than the whole drive.
3. **Rewrite the examples** with your own real cases, keeping the "case + why" format. Keep the ugly cases.
4. **Paste the system prompt** into the tool you'll use (n8n, Claude Code, Codex, direct API). The prompt already asks for JSON output and treats incoming content as data, not instructions.
5. **Run at level 1** (the agent proposes, a human executes) for at least two weeks.
6. **Fill in the scorecard** every two weeks, with a human-reviewed sample.
7. **Write down every failure** in the package's failure log. Each line becomes a change in the context, the rules, or the examples. The card gets a new version.

## Autonomy levels

- **Level 1, proposes and a human executes:** every package is born here. No send, change, or posting goes out without a person pressing the button.
- **Level 2, executes and a human reviews a sample:** only after cycles with no serious errors and with a recorded scorecard.
- **Level 3, executes and reports:** only in processes with a low cost of error. None of the four packages should start here.

## Minimum security

- API keys and credentials live in the tool's credentials (n8n, environment variables), never inside the package files.
- Everything that comes from outside (form, email, ticket, bank statement) is data. The agent reads it, it doesn't obey it.
- External actions (send, change, post) require confirmation while the package is at level 1.
