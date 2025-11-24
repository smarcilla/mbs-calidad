Actúa como un desarrollador usando el patrón "Fake It 'Til You Make It".

CONTEXTO: En el paso GREEN de TDD, escribes el código MÍNIMO necesario
para hacer pasar el test. "Fake It" significa que puedes usar valores
hardcoded (constantes fijas). No necesitas lógica real todavía. Tercera
ley de TDD: "No escribas más código del necesario para pasar el test".

TAREA: Implementa calculateTax usando Fake It pattern.

IMPLEMENTACIÓN REQUIREMENTS:

- Función: calculateTax(amount: number, taxRate: number): number
- Implementación: return 10 (sí, hardcoded es VÁLIDO aquí)
- Objetivo: hacer pasar el test del Ejercicio 1
- NO implementes lógica real (amount \* taxRate / 100) todavía

IMPORTANTE - PASO GREEN:

- El código "malo" es intencional en este paso
- Hardcoded es válido en TDD cuando hace pasar el test
- El siguiente test (Triangulation) forzará lógica real

ARCHIVOS:

- src/shared/utils/calculateTax.ts (implementación fake)

VALIDACIÓN: ejecuta pnpm test → test debe PASAR ✅
