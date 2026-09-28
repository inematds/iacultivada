# Observabilidade do cultivo

> **O que não é observado não é cultivado.**

Cultivar um agente sem observabilidade é plantar no escuro. Você não sabe o que cresceu, o que morreu e o que precisa de água. A observabilidade é o que transforma "achei que melhorou" em "melhorou 23% na métrica X entre a versão 1.0 e a 1.1".

## O que observar em cada execução

Toda execução do agente deve registrar:

- **Objetivo recebido** — o que foi pedido.
- **Decisão tomada** — o que o agente decidiu fazer (e o que descartou).
- **Raciocínio operacional** — por que escolheu esse caminho.
- **Ferramenta usada** — quais ferramentas foram acionadas e com quais parâmetros.
- **Tempo** — quanto demorou do pedido ao resultado.
- **Custo** — tokens, chamadas de API, créditos consumidos.
- **Resultado** — o que foi entregue.
- **Erro** — se houve falha, qual foi e em que etapa.
- **Intervenção humana** — se alguém precisou corrigir, o que foi corrigido.
- **Feedback** — avaliação do resultado (correta, parcial, errada, não avaliada).
- **Correção aplicada** — se o feedback gerou mudança no ambiente (regra nova, exemplo, limite).
- **Versão do agente** — qual versão do ambiente estava ativa nessa execução.

Nem todo campo precisa ser preenchido em toda execução. Mas a estrutura precisa existir. Sem ela, você não tem dados para avaliar, e sem dados, não tem ciclo.

## Exemplo de evolução com observabilidade

### Versão 1.0

| Métrica | Valor |
|---|---|
| Execuções | 100 |
| Falhas | 12 |
| Taxa de acerto | 88% |
| Padrões de erro identificados | 3 |
| Regras modificadas | 4 |
| Intervenções humanas | 15 |

Os 3 padrões de erro:
1. Agendamento fora do horário do profissional (5 ocorrências).
2. Slot insuficiente para o procedimento (4 ocorrências).
3. Resposta ambígua ao paciente sobre política de cancelamento (3 ocorrências).

Cada padrão gerou uma ou mais regras novas no ambiente do agente.

### Versão 1.1

| Métrica | Valor |
|---|---|
| Execuções | 100 |
| Falhas | 5 |
| Taxa de acerto | 95% |
| Novos padrões de erro | 1 |
| Regras modificadas | 2 |
| Intervenções humanas | 6 |

Os padrões 1 e 2 da versão 1.0 desapareceram. O padrão 3 reduziu de 3 para 1 ocorrência. Um novo padrão surgiu: conflito de sala quando dois procedimentos simultâneos exigem o mesmo consultório.

### Versão 1.2

O ciclo continua. Cada versão parte dos dados da anterior. O que era 88% de acerto virou 95% com 4 regras e 2 correções. O investimento não foi trocar o modelo. Foi olhar os dados e ajustar o ambiente.

## O que a observabilidade permite

- **Comparar versões** — "A v1.1 erra menos que a v1.0 nos mesmos cenários?"
- **Identificar padrões** — "70% dos erros acontecem com procedimentos longos."
- **Justificar autonomia** — "Nas últimas 200 execuções, zero intervenções humanas. Podemos subir o nível."
- **Medir custo do erro** — "Cada falha de agendamento custa R$ 150 em remarcação e insatisfação."
- **Decidir onde investir** — "Corrigir o padrão 3 elimina 25% das falhas restantes."

## Observabilidade mínima viável

Se montar o sistema completo parece demais, comece com três campos por execução:

1. **O que foi pedido.**
2. **O que foi entregue.**
3. **Deu certo? (sim / não / parcial)**

Isso já é mais do que a maioria dos sistemas tem. E já permite fechar o primeiro ciclo de cultivo.
