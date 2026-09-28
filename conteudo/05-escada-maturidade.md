# Escada de Maturidade: da IA executora à IA cultivada

> **Nem toda IA com memória é cultivada e nem todo agente é cultivado.**

A maior parte do que se chama "IA" hoje opera nos dois primeiros degraus. A diferença entre cada nível não é o modelo. É o que existe em volta dele.

## Nível 1 — IA executora

```
pedido → resposta
```

Sem memória, sem avaliação, sem contexto persistente. Cada interação começa do zero. O modelo responde o que pode com o que recebeu naquele momento. Se errou, ninguém registra. Se acertou, ninguém sabe por quê.

Exemplo: um chatbot de FAQ que recebe a pergunta e devolve a resposta mais provável. Não lembra da conversa anterior, não aprende com os erros, não melhora sozinho.

## Nível 2 — IA contextual

```
pedido → contexto / memória → resposta
```

O modelo recebe contexto persistente: quem é o usuário, o que já foi dito, preferências, histórico. A resposta é personalizada. Mas não há ciclo de melhoria. Se o agente erra da mesma forma dez vezes, ninguém corrige o ambiente. A memória guarda informação, não transforma comportamento.

Exemplo: um assistente que lembra seu nome, seu cargo e suas preferências de agenda. Personaliza, mas não evolui.

## Nível 3 — Agente

```
objetivo → raciocínio → ferramentas → ações → resultado
```

O agente recebe um objetivo, raciocina sobre ele, escolhe ferramentas, executa ações e entrega um resultado. Tem autonomia operacional. Pode consultar APIs, navegar, criar arquivos, tomar decisões intermediárias.

O problema: sem avaliação e feedback estruturado, o agente pode repetir os mesmos erros indefinidamente. Ele age, mas não aprende com o que fez. A autonomia sem ciclo de melhoria é só automação sofisticada.

Exemplo: um agente que agenda reuniões, consulta calendário e envia convites. Funciona, mas se marca reunião no horário errado cinco vezes seguidas, nada muda.

## Nível 4 — IA cultivada

```
objetivo → ação → resultado → avaliação → feedback → ajuste → nova execução
```

Tudo que o agente tem, mais o ciclo completo: cada execução é avaliada, os erros são registrados, o ambiente é ajustado (regras, exemplos, contexto, limites) e a próxima execução parte de uma base melhor. O agente não muda seus pesos. O que muda é o jardim em volta dele.

Exemplo: o mesmo agente de agenda, mas agora com registro de falhas, regras corrigidas após cada erro, scorecard de acertos, e aumento progressivo de autonomia conforme demonstra consistência.

## O salto entre os níveis

| De | Para | O que muda |
|---|---|---|
| Nível 1 → 2 | Adiciona memória e contexto | A resposta fica personalizada |
| Nível 2 → 3 | Adiciona raciocínio, ferramentas e autonomia | O sistema age, não só responde |
| Nível 3 → 4 | Adiciona avaliação, feedback e ajuste do ambiente | O sistema melhora a cada ciclo |

A maioria das implementações para no nível 2 ou 3 e chama isso de "IA avançada". O cultivo começa quando o ciclo fecha.
