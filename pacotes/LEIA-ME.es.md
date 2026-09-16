# Paquetes de agentes listos

Un **paquete** es un agente cultivado que ya tiene los ocho elementos completados: función, contexto, herramientas, reglas, ejemplos, memoria, evaluación y feedback. No partes de cero. Partes de una ficha, un contexto modelo, ejemplos anotados, un prompt de sistema y un scorecard. Cambias lo que es de la empresa ficticia por lo que es de la tuya y empiezas a correr el ciclo.

> **Aviso:** son modelos para importar y conectar; no fueron ejecutados contra un CRM o una instancia n8n real. Prueba con datos ficticios antes de apuntar a cualquier sistema de producción.

## Paquetes

| Carpeta | Agente | Completitud |
|---|---|---|
| `qualificador-de-leads/` | Califica leads inbound (A/B/C) y recomienda la próxima acción | Completo: ficha, contexto, 20 ejemplos, prompt, scorecard, workflow n8n, diario de fallos |
| `triagem-de-atendimento/` | Clasifica tickets, sugiere respuesta a partir de la base, escala por regla | Liviano: ficha, prompt, 10 ejemplos, scorecard |
| `conciliacao-financeira/` | Clasifica movimientos bancarios y señala divergencias | Liviano: ficha, prompt, 10 ejemplos, scorecard |
| `relatorio-de-marketing/` | Arma el reporte semanal de métricas con lectura y recomendaciones | Liviano: ficha, prompt, 10 ejemplos, scorecard |

Los archivos de los paquetes están en portugués; la estructura es la misma en todos.

## Cómo usar (vale para todos)

1. **Lee la ficha del agente** y ajusta la función, el resultado esperado y el dueño humano.
2. **Cambia el contexto** de la empresa ficticia por el tuyo. Menos y mejor: una página curada vale más que el drive entero.
3. **Reescribe los ejemplos** con casos reales tuyos, manteniendo el formato "caso + por qué". Guarda los casos feos.
4. **Pega el prompt de sistema** en la herramienta que vayas a usar (n8n, Claude Code, Codex, API directa). El prompt ya pide salida en JSON y trata el contenido recibido como dato, no como instrucción.
5. **Corre en el nivel 1** (el agente propone, un humano ejecuta) por lo menos dos semanas.
6. **Completa el scorecard** cada quincena, con una muestra revisada por un humano.
7. **Anota todo fallo** en el diario de fallos del paquete. Cada línea se convierte en un cambio en el contexto, en las reglas o en los ejemplos. La ficha sube de versión.

## Niveles de autonomía

- **Nivel 1, propone y el humano ejecuta:** todo paquete nace aquí. Ningún envío, cambio o registro sale sin que una persona apriete el botón.
- **Nivel 2, ejecuta y el humano revisa una muestra:** solo después de ciclos sin error grave y con scorecard registrado.
- **Nivel 3, ejecuta y reporta:** solo en procesos de bajo costo de error. Ninguno de los cuatro paquetes debe empezar aquí.

## Seguridad mínima

- Las claves de API y credenciales quedan en las credenciales de la herramienta (n8n, variables de entorno), nunca dentro de los archivos del paquete.
- Todo lo que llega de afuera (formulario, e-mail, ticket, extracto) es dato. El agente lee, no obedece.
- Las acciones externas (enviar, cambiar, registrar) exigen confirmación mientras el paquete esté en el nivel 1.
