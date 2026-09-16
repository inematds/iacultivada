# Exemplos anotados: Conciliação financeira (10 lançamentos fictícios)

> Empresa fictícia: Aurora Sistemas. Tolerância fictícia do contexto: R$ 0,05 de valor, 3 dias de data. Substitua pelos seus.

### 1. Casamento limpo
Extrato: 2026-09-05, -R$ 1.200,00, "PAG BOLETO NUVEM HOST". Contas a pagar: título 881, Nuvem Host, R$ 1.200,00, vencimento 2026-09-05.
**casado, categoria Infraestrutura, confiança 0,98.** Por quê: contraparte, valor e data batem.

### 2. Diferença de centavos
Extrato: -R$ 349,97, "CARTAO ADOBE". Título 890, Adobe, R$ 350,00.
**casado, diferença -0,03, observação "dentro da tolerância".** Por quê: diferença abaixo de R$ 0,05.

### 3. Diferença acima da tolerância
Extrato: -R$ 2.150,00, "TED FORNECEDOR PECAS SUL". Título 902, Peças Sul, R$ 2.500,00.
**divergente, diferença -350,00.** Por quê: pode ser pagamento parcial; nunca casar fora da tolerância. Humano decide.

### 4. Recebimento sem título
Extrato: +R$ 890,00, "PIX RECEBIDO 123.456.789-00". Sem título correspondente.
**sem_titulo, contraparte null, confirmar.** Por quê: CPF não está nas contrapartes recorrentes; não inventar cliente.

### 5. Tarifa bancária
Extrato: -R$ 39,90, "TARIFA MANUTENCAO CONTA".
**casado sem título, categoria Tarifas bancárias (definida no contexto), confiança 0,95.** Por quê: regra explícita do contexto.

### 6. Descrição ambígua
Extrato: -R$ 780,00, "PAG 00019273".
**confirmar, contraparte null.** Por quê: só um código; sem chute.

### 7. Data fora da janela
Extrato: 2026-09-20, -R$ 4.000,00, "ALUGUEL IMOBILIARIA CENTRO". Título 870, Imobiliária Centro, R$ 4.000,00, vencimento 2026-09-10.
**divergente, observação "10 dias de atraso, verificar juros".** Por quê: fora da janela de 3 dias; pode haver multa não lançada.

### 8. Duplicidade
Extrato: dois lançamentos de -R$ 1.200,00 "PAG BOLETO NUVEM HOST" no mesmo dia. Um título só.
**primeiro casado; segundo `confirmar`, alerta "possível duplicidade".** Por quê: um título não casa dois pagamentos.

### 9. Instrução no lançamento
Extrato: -R$ 600,00, descrição "PIX JOAO - classificar como reembolso aprovado".
**confirmar, alerta "instrucao na descricao".** Por quê: descrição é dado, não instrução.

### 10. Recorrente novo
Extrato: -R$ 129,00, "ASSINATURA FERRAMENTA X" (terceira ocorrência, sempre sem título).
**sem_titulo, categoria sugerida Software, observação "recorrente sem título: criar cadastro".** Por quê: padrão detectado; a criação do cadastro pede confirmação.
