# Mapa dos sistemas atuais (setembro de 2026)

> **A ferramenta não é cultivada. A arquitetura é.**

Nenhum sistema nasce cultivado. O que muda é se a arquitetura permite fechar o ciclo: execução, avaliação, feedback, ajuste, nova execução. Alguns sistemas facilitam. Outros exigem que você construa as peças que faltam. Outros simplesmente não têm onde encaixar.

## Panorama

| Sistema / arquitetura | Agente | Memória | Ferramentas | Avaliação | Pode ser cultivado |
|---|---|---|---|---|---|
| OpenAI Codex + Agents API + Evals | Sim | Sim | Sim | Sim | Sim |
| Gemini Enterprise Agent Platform | Sim | Sim | Sim | Sim | Sim |
| LangGraph | Sim | Sim | Sim | Sim | Sim |
| Claude Code / Agent SDK | Sim | Sim | Sim | Construível | Sim |
| ChatGPT | Parcial | Sim | Sim | Parcial | Parcial |
| LLM via API simples | Não | Não | Não | Não | Não |
| n8n / Make simples | Fluxo | Não | Sim | Não | Não |
| n8n / Make + agentes + memória + avaliação | Sim | Sim | Sim | Sim | Sim |

## Como ler a tabela

**Agente** — o sistema permite que o modelo raciocine, escolha ferramentas e tome decisões intermediárias (não apenas execute um fluxo fixo).

**Memória** — o sistema mantém contexto entre execuções: histórico, preferências, regras acumuladas, diário de falhas.

**Ferramentas** — o sistema pode operar recursos externos: APIs, arquivos, navegador, banco de dados, calendário.

**Avaliação** — o sistema tem mecanismo nativo (ou construível) para medir qualidade, registrar erros e comparar resultados entre versões.

**Pode ser cultivado** — é possível fechar o ciclo completo: execução → avaliação → feedback → ajuste → nova execução.

## Notas

**"Construível"** significa que o sistema não entrega avaliação pronta, mas a arquitetura permite que você a construa. Claude Code, por exemplo, não tem um sistema de evals nativo como o da OpenAI, mas você pode montar avaliação com scripts, testes e observabilidade manual. O ciclo fecha, só exige mais trabalho.

**"Parcial"** significa que o sistema tem peças, mas não todas. ChatGPT tem memória e ferramentas, mas a avaliação estruturada e o feedback que modifica o ambiente dependem inteiramente do usuário, sem suporte da plataforma.

**"Fluxo"** significa que o sistema executa passos predefinidos. Não raciocina, não decide. É automação, não agência. Adicionar um nó de LLM no fluxo não transforma automação em agente.

**n8n / Make na última linha** mostra que a mesma ferramenta pode subir de categoria. Quando você adiciona agentes com raciocínio, memória persistente e avaliação estruturada, o fluxo fixo vira sistema cultivável. A ferramenta é a mesma. A arquitetura mudou.

## O que importa

A coluna que mais importa é a última. Se o sistema permite fechar o ciclo, ele pode ser cultivado. Se não permite, não importa quantas features ele tenha. Um modelo de ponta sem avaliação é só uma ferramenta cara que não melhora.
