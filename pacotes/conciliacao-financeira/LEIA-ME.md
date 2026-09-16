# Pacote: Conciliação financeira

Agente que lê o extrato bancário e o contas a receber/pagar, classifica cada lançamento, casa o que bate e aponta as divergências. Nível 1: o agente propõe a classificação e o casamento; o financeiro confirma cada linha antes de lançar.

> Modelo para importar e ligar; não foi executado contra um ERP ou banco real. Teste com um extrato fictício primeiro.

## O que tem aqui
- `ficha-do-agente.md`: função, regras, limites.
- `system-prompt.md`: prompt com saída em JSON, um objeto por lançamento.
- `exemplos.md`: 10 lançamentos fictícios anotados.
- `scorecard.md`: avaliação quinzenal.

## O que você precisa acrescentar
- **Contexto:** plano de contas resumido, lista de fornecedores e clientes recorrentes, regras de tolerância (centavos, tarifas), calendário de pagamentos fixos. Use `qualificador-de-leads/contexto.md` como molde.
- **Ferramentas:** exportação do extrato (CSV/OFX) e do contas a pagar/receber (CSV). Só leitura.
- **Diário de falhas:** copie `qualificador-de-leads/FALHAS.md`.

## Como ligar
1. Exporte o extrato e o contas do período em CSV.
2. Passe contexto + os dois arquivos ao agente com o prompt. Peça o JSON.
3. Importe o resultado numa planilha de revisão. Cada linha marcada `confirmar` é lida pelo financeiro antes de qualquer lançamento.
4. Nada é lançado no ERP pelo agente enquanto estiver no nível 1.

## Níveis
- **1:** propõe classificação e casamento; humano lança.
- **2:** lança automaticamente só lançamentos recorrentes já vistos 3 vezes; humano revisa amostra.
- **3:** não recomendado.
