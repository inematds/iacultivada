# O que NAO é IA cultivada

> **Usar IA não é cultivar IA.**

Muita coisa que parece sofisticada é, na prática, o nível 1 ou 2 da escada de maturidade. Funciona, resolve, mas não evolui. Reconhecer o que não é cultivo é tão importante quanto entender o que é.

## Prompt simples

Você manda uma pergunta, recebe uma resposta. Não há memória, não há avaliação, não há ciclo. Se a resposta veio errada, você reformula o prompt e tenta de novo. O modelo não aprendeu nada. Você aprendeu a pedir melhor, mas o sistema continua o mesmo.

## RAG simples

Retrieval-Augmented Generation: o modelo consulta uma base de documentos antes de responder. Melhora a precisão factual, mas não há avaliação do resultado. Se o documento errado foi recuperado, ninguém registra. Se a resposta foi boa, ninguém sabe qual documento ajudou. O sistema não se corrige.

## n8n / Make com fluxo fixo

Automação com passos definidos: "quando chegar e-mail, extraia dados, salve na planilha". O fluxo roda sempre igual. Se o formato do e-mail mudar, o fluxo quebra. Não há raciocínio, não há adaptação, não há avaliação. É automação tradicional com um nó de LLM no meio.

## Agente sem avaliação

Um agente que raciocina, usa ferramentas e entrega resultados, mas ninguém mede se o resultado foi bom. Sem scorecard, sem registro de falhas, sem feedback estruturado. O agente opera, mas não melhora. Repete os mesmos erros com a mesma confiança.

## Onde o cultivo começa

O cultivo começa quando você adiciona, ao mesmo tempo:

- **Memória** — o sistema lembra o que aconteceu.
- **Avaliação** — alguém (humano ou sistema) mede se o resultado foi bom.
- **Feedback** — a avaliação produz uma ação concreta: regra nova, exemplo adicionado, limite ajustado.
- **Observabilidade** — cada execução é registrada com objetivo, decisão, resultado, erro e intervenção.
- **Histórico** — as execuções anteriores informam as próximas.
- **Versionamento** — o ambiente do agente tem versões; você sabe o que mudou e quando.
- **Nova execução** — o ciclo só fecha quando o agente roda de novo com o ambiente ajustado e o resultado é comparado com o anterior.

Tirar qualquer um desses elementos quebra o ciclo. Sem avaliação, a memória é só arquivo morto. Sem nova execução, o feedback é só anotação. Sem observabilidade, você não sabe o que corrigir.

## O teste rápido

Pergunte: "se o agente errar amanhã da mesma forma que errou hoje, o que no sistema vai impedir isso?"

Se a resposta for "nada", não é IA cultivada. É IA que funciona até parar de funcionar.
