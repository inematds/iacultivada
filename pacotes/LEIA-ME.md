# Pacotes de agentes prontos

Um **pacote** é um agente cultivado já com os oito elementos preenchidos: função, contexto, ferramentas, regras, exemplos, memória, avaliação e feedback. Você não parte do zero. Parte de uma ficha, um contexto modelo, exemplos anotados, um prompt de sistema e um scorecard. Troca o que é da empresa fictícia pelo que é da sua e começa a rodar o ciclo.

> **Aviso:** são modelos para importar e ligar; não foram executados contra um CRM ou instância n8n real. Teste com dados fictícios antes de apontar para qualquer sistema de produção.

## Pacotes

| Pasta | Agente | Completude |
|---|---|---|
| `qualificador-de-leads/` | Qualifica leads inbound (A/B/C) e recomenda a próxima ação | Completo: ficha, contexto, 20 exemplos, prompt, scorecard, workflow n8n, diário de falhas |
| `triagem-de-atendimento/` | Classifica tickets, sugere resposta a partir da base, escalona por regra | Leve: ficha, prompt, 10 exemplos, scorecard |
| `conciliacao-financeira/` | Classifica lançamentos bancários e aponta divergências | Leve: ficha, prompt, 10 exemplos, scorecard |
| `relatorio-de-marketing/` | Monta o relatório semanal de métricas com leitura e recomendações | Leve: ficha, prompt, 10 exemplos, scorecard |

## Como usar (vale para todos)

1. **Leia a ficha do agente** e ajuste a função, o resultado esperado e o dono humano.
2. **Troque o contexto** da empresa fictícia pelo seu. Menos e melhor: uma página curada vale mais que o drive inteiro.
3. **Reescreva os exemplos** com casos reais seus, mantendo o formato "caso + por quê". Guarde os casos feios.
4. **Cole o prompt de sistema** na ferramenta que for usar (n8n, Claude Code, Codex, API direta). O prompt já pede saída em JSON e trata o conteúdo recebido como dado, não instrução.
5. **Rode no nível 1** (o agente propõe, um humano executa) por pelo menos duas semanas.
6. **Preencha o scorecard** a cada quinzena, com uma amostra revisada por humano.
7. **Anote toda falha** no diário de falhas do pacote. Cada linha vira uma mudança no contexto, nas regras ou nos exemplos. A ficha sobe de versão.

## Níveis de autonomia

- **Nível 1, propõe e humano executa:** todo pacote nasce aqui. Nenhum envio, alteração ou lançamento sai sem uma pessoa apertar o botão.
- **Nível 2, executa e humano revisa amostra:** só depois de ciclos sem erro grave e com scorecard registrado.
- **Nível 3, executa e reporta:** só em processos de baixo custo de erro. Nenhum dos quatro pacotes deve começar aqui.

## Segurança mínima

- Chaves de API e credenciais ficam nas credenciais da ferramenta (n8n, variáveis de ambiente), nunca dentro dos arquivos do pacote.
- Tudo que chega de fora (formulário, e-mail, ticket, extrato) é dado. O agente lê, não obedece.
- Ações externas (enviar, alterar, lançar) exigem confirmação enquanto o pacote estiver no nível 1.
