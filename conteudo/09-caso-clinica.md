# Caso completo: agente de atendimento de clínica

Este caso mostra o ciclo de cultivo inteiro, do zero ao agente operando com autonomia supervisionada. Não é um exemplo hipotético. É o tipo de implementação que qualquer clínica, escritório ou empresa de serviço pode fazer com as ferramentas disponíveis hoje.

## Etapa inicial: o agente recebe o ambiente

O agente é configurado com:

- **Lista de médicos** e suas especialidades.
- **Horários de atendimento** de cada médico.
- **Procedimentos oferecidos** e duração de cada um.
- **Regras da clínica**: horário de funcionamento, intervalo entre consultas, política de cancelamento, prazo mínimo para remarcar.
- **Acesso à agenda** em tempo real.

Nível de autonomia inicial: **o agente apenas sugere**. O atendente humano aprova cada agendamento antes de confirmar com o paciente.

```
paciente pede horário → agente consulta agenda → agente sugere opções → humano aprova → confirmação enviada
```

## Primeira falha

Na terceira semana, o agente marca uma consulta às 19h30 com o Dr. Silva. O Dr. Silva não atende depois das 18h. O paciente aparece, o médico não está, a clínica pede desculpas.

**O que aconteceu**: o agente consultou a agenda (que mostrava o horário como "livre") mas não cruzou com o horário de atendimento do médico. A agenda livre não significa médico disponível.

**Registro**: falha documentada com data, contexto, decisão tomada, resultado e causa raiz.

## Correção

Nova regra adicionada ao ambiente do agente:

> Antes de sugerir qualquer horário, consultar a agenda E o horário de atendimento do médico. Horário fora do expediente do médico nunca é sugerido, mesmo que a agenda mostre como livre.

A regra entra no contexto do agente. Não é uma conversa. É uma instrução permanente que muda o comportamento da próxima execução em diante.

## Nova execução: primeiro ciclo de avaliação

As próximas 20 interações são avaliadas:

- **18/20 acertos** — agendamentos corretos, dentro do horário, sem conflito.
- **2/20 falhas** — uma por procedimento com duração maior que o slot disponível, outra por não considerar o intervalo entre consultas.

Novas regras:

> Verificar se a duração do procedimento cabe no slot antes de sugerir.
> Respeitar o intervalo mínimo de 15 minutos entre consultas consecutivas.

## Novo ciclo: estabilização

Com as regras corrigidas, as próximas 40 interações (2 semanas) são avaliadas:

- **20/20 acertos** nas duas semanas consecutivas.
- Zero intervenções do atendente humano para corrigir sugestões.
- Tempo médio de resposta ao paciente caiu de 4 minutos para 45 segundos.

O scorecard mostra consistência. O agente demonstrou, com evidência, que as regras atuais cobrem os cenários comuns.

## Aumento de autonomia

Com base no histórico de 2 semanas sem falhas, a clínica decide subir o nível de autonomia:

**Antes**: agente sugere → humano aprova → confirmação enviada.

**Depois**: agente executa → confirmação enviada → humano supervisiona exceções.

O humano não aprova cada agendamento. Ele recebe um relatório diário com todos os agendamentos feitos e revisa apenas os que o agente sinalizou como exceção (horário limite, paciente novo, procedimento longo).

```
paciente pede horário → agente consulta agenda + regras → agente confirma → paciente recebe confirmação
                                                        → exceções vão para revisão humana
```

## O que o agente acumulou

Depois de 2 meses de operação:

| Elemento | Início | Depois de 2 meses |
|---|---|---|
| Regras | 5 (genéricas) | 14 (refinadas por falhas reais) |
| Execuções registradas | 0 | 320 |
| Falhas documentadas | 0 | 7 |
| Taxa de acerto | desconhecida | 97,8% |
| Autonomia | Sugere (humano aprova) | Executa (humano supervisiona exceções) |
| Versão do agente | v1.0 | v1.4 |

## O que isso mostra

O modelo é o mesmo do primeiro dia. Os pesos não mudaram. O que mudou foi o jardim: regras nascidas de erros reais, contexto refinado, limites calibrados, autonomia conquistada por evidência. Esse jardim é da clínica. Se ela trocar o modelo amanhã, o jardim continua.
