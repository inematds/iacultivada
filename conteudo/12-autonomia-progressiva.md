# Critérios para aumentar autonomia

> **Autonomia deve ser conquistada por evidência, não por confiança.**

A tentação é dar autonomia cedo demais. O agente parece inteligente, as respostas parecem boas, e alguém decide: "deixa ele rodar sozinho". Sem dados, sem histórico, sem scorecard. É o equivalente a promover um estagiário no segundo dia porque ele fez uma boa pergunta na reunião.

## As métricas que importam

Antes de aumentar a autonomia de qualquer agente, essas métricas precisam existir e ser consultadas:

- **Histórico de execuções** — quantas vezes o agente operou nesse cenário.
- **Scorecard** — taxa de acerto medida por avaliação (humana ou automatizada).
- **Taxa de erro** — percentual de falhas sobre o total de execuções.
- **Gravidade do erro** — nem todo erro é igual. Errar o tom de uma mensagem é diferente de errar o valor de uma fatura.
- **Custo do erro** — quanto custa cada falha em dinheiro, tempo, reputação ou retrabalho.
- **Estabilidade** — a taxa de acerto se mantém ao longo do tempo ou oscila.
- **Necessidade de intervenção humana** — com que frequência alguém precisa corrigir o agente.
- **Consistência** — o agente mantém o mesmo nível de qualidade em cenários variados, não só nos mais simples.

## Os quatro níveis de autonomia

### Nível 1 — Agente apenas recomenda

```
pedido → agente analisa → agente sugere → humano decide → humano executa
```

O agente não age. Ele analisa o cenário e apresenta opções. O humano avalia, decide e executa. O agente é um consultor.

**Quando usar**: início da operação, cenários de alto risco, domínios onde o agente ainda não tem histórico.

### Nível 2 — Agente executa com aprovação humana

```
pedido → agente analisa → agente executa (pendente) → humano aprova → ação confirmada
```

O agente faz o trabalho, mas nada sai sem aprovação. O humano revisa cada ação antes que ela tenha efeito. O agente é um executor supervisionado.

**Quando subir para cá**: scorecard acima de 90% no nível 1, pelo menos 50 execuções avaliadas, zero erros graves nas últimas 2 semanas.

### Nível 3 — Agente executa, humano revisa exceções

```
pedido → agente analisa → agente executa → ação confirmada automaticamente
                                         → exceções vão para revisão humana
```

O agente opera sozinho nos casos comuns. Apenas as exceções (cenários novos, valores altos, conflitos de regra) são encaminhadas para revisão. O humano supervisiona, não aprova.

**Quando subir para cá**: scorecard acima de 95% no nível 2, pelo menos 200 execuções avaliadas, zero erros graves no último mês, intervenções humanas abaixo de 5%.

### Nível 4 — Agente opera automaticamente dentro de limites definidos

```
pedido → agente analisa → agente executa → resultado entregue
                                         → relatório periódico para humano
```

O agente opera de forma autônoma dentro de limites claros (valores máximos, tipos de decisão permitidos, horários, escopo). O humano recebe relatórios periódicos e ajusta os limites conforme necessário.

**Quando subir para cá**: scorecard acima de 98% no nível 3, pelo menos 500 execuções avaliadas, zero erros graves nos últimos 2 meses, custo dos erros restantes dentro do tolerável, limites de operação bem definidos e testados.

## O caminho inverso

Autonomia não é só para cima. Se um agente no nível 3 começa a apresentar erros novos (mudança de cenário, regra desatualizada, integração quebrada), ele desce para o nível 2 até estabilizar. A descida não é punição. É o ciclo funcionando.

## Resumo

| Nível | O agente faz | O humano faz | Critério para subir |
|---|---|---|---|
| 1 | Recomenda | Decide e executa | Início (sem histórico) |
| 2 | Executa (pendente) | Aprova cada ação | 90%+ acerto, 50+ execuções |
| 3 | Executa | Revisa exceções | 95%+ acerto, 200+ execuções |
| 4 | Opera nos limites | Supervisiona por relatório | 98%+ acerto, 500+ execuções |

A coluna "critério para subir" não é sugestão. É exigência. Sem os números, a promoção não acontece. Confiança sem dados é aposta.
