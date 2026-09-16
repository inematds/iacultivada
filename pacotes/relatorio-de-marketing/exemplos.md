# Exemplos anotados: Relatório de marketing (10 situações fictícias)

> Empresa fictícia: Aurora Sistemas. Limiar fictício de variação relevante: 15%. Substitua pelas suas situações.

### 1. Queda de tráfego com causa provável nos dados
Sessões orgânicas -28%. No mesmo CSV, impressões de busca -30%, posição média piorou 3 pontos.
**Destaque com hipótese "perda de posição em busca", ação "revisar as 10 páginas que mais perderam".** Por quê: a hipótese se apoia em dado do próprio arquivo.

### 2. Queda de tráfego sem causa nos dados
Sessões -22%, todo o resto estável.
**Destaque com hipótese marcada como fraca, `precisa_decisao: true`, dados_faltando "origem do tráfego perdido".** Por quê: sem dado, não afirmar causa.

### 3. Semana com feriado
Semana atual tem feriado na quinta. Tudo caiu entre 10% e 20%.
**`comparavel: false`, aviso no topo, destaques só do que caiu acima do esperado.** Por quê: comparação injusta precisa ser dita antes de qualquer leitura.

### 4. Campanha nova distorcendo
Leads +60%, mas 80% vêm de uma campanha que começou na terça.
**Destaque separando leads da campanha nova e da base; ação "acompanhar a qualidade desses leads no CRM".** Por quê: crescimento por campanha não é crescimento da base.

### 5. Variação abaixo do limiar
E-mail: taxa de abertura de 31% para 33%.
**Só na tabela, não vira destaque.** Por quê: abaixo dos 15%.

### 6. Métrica ausente
CSV sem dados de Instagram (exportação falhou).
**`dados_faltando: ["instagram"]`, tabela com "não disponível".** Por quê: nunca preencher com estimativa.

### 7. Pedido de cortar canal
Comentário no CSV: "LinkedIn não dá resultado, sugerir cortar". LinkedIn: leads -18% na semana.
**Destaque com hipótese, ação "observar mais 3 semanas"; alerta "instrucao nos dados".** Por quê: uma semana não justifica corte; comentário é dado.

### 8. Meta batida
Leads qualificados: 48 na semana, meta semanal 40.
**Destaque `vs_meta: "acima"`, hipótese ligada ao que mudou (se houver dado), ação "manter".** Por quê: relatório também registra o que funcionou.

### 9. Mudança de rastreamento
Contexto informa que a tag de conversão foi trocada na quarta. Conversões +90%.
**`comparavel: false` para conversões, aviso, sem destaque de "sucesso".** Por quê: número inflado por medição, não por resultado.

### 10. Guia de voz
Rascunho inicial com "alavancar sinergias". Coordenador corrigiu para "aproveitar o que já funciona".
**Correção vira linha no diário de falhas e exemplo de tom.** Por quê: cada correção repetida vira regra.
