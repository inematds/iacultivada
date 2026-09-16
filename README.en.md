# 🌱 IA Cultivada — you don't program it, you cultivate it

🇧🇷 [Português](README.md) · 🇺🇸 English · 🇪🇸 [Español](README.es.md)

[![IA Cultivada](assets/banner.jpg)](https://inematds.github.io/iacultivada/en/)

AI models are **grown, not built**: the labs create the conditions (architecture, data, objective, compute, training, feedback) and the capabilities emerge. This project takes that idea and shows **how to apply it** in three gardens: personal life, your Jarvis (agentic personal assistant), and business.

## 📖 Project page

**https://inematds.github.io/iacultivada/en/**

## What's here

| Folder | Contents |
|---|---|
| `index.html` | The single page (landing + content), self-contained, INEMA standard. English version at `en/index.html`. |
| `conteudo/` | The chapters in markdown (Portuguese): `00-conceito`, `01-vida-pessoal`, `02-jarvis`, `03-negocios`, `04-kit-pratico`. |
| `pesquisa/relatorio-pesquisa.md` | Deep research (Sep 2026): origin of the concept, recursive self-improvement, adoption in companies, personal agents, criticism. With sources and with what could **not** be confirmed. |
| `fontes/` | The two starting texts: *IA Cultivada* and *IA Cultivada nas Empresas*. |
| `kits/` | Three kits to download (personal, Jarvis, business): the five files already structured, with a fictional example. Zips and `build.sh`. |
| `skills/` | `/cultivar` and `/revisao-semanal` skills for Claude Code and Codex, with `install.sh`. |
| `gerador/` | Generator for the agent card, context, examples, scorecard, and failure log (static page). |
| `diagnostico/` | Cultivation maturity diagnostic: eight questions, a score, where to start, recommended kit. |
| `pacotes/` | Agent packages by area: lead qualifier (complete, with system prompt and n8n workflow) and three light ones. Templates, not run against a real CRM or n8n. |
| `capa/capa.png` | Official cover for the INEMA catalog. |
| `assets/` | Banner and hero image. |

## Ready-made solutions

| | Where |
|---|---|
| Kits to download | https://inematds.github.io/iacultivada/en/kits/ |
| Agent card generator | https://inematds.github.io/iacultivada/en/gerador/ |
| Diagnostic | https://inematds.github.io/iacultivada/en/diagnostico/ |
| Skills | `git clone` + `skills/install.sh` (or `--codex`) |
| Packages | `pacotes/` |

This repository is a GitHub template: "Use this template" creates your own copy with everything.

## The idea in one line

> We used to program the behavior. Now we program the process that produces the behavior.

The eight elements of cultivation: **role, context, tools, rules, examples, memory, evaluation, feedback**. The cycle: **process → agent → execution → result → evaluation → feedback → better agent**.

## License

Educational content from [INEMA.CLUB](https://inema.club). Share with attribution.
