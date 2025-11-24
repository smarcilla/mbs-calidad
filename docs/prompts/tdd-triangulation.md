Actúa como un desarrollador usando el patrón Triangulation.

CONTEXTO: Triangulation es usar múltiples tests para forzar la
implementación correcta. Un solo test permite "Fake It" (hardcoded).
Dos o más tests diferentes obligan a generalizar la lógica. Los tests
"triangular" hacia la solución real.

TAREA: Agrega segundo test y refactoriza hacia implementación real.

TEST SPECIFICATIONS:

- Nuevo test case: calculateTax(200, 15) debe retornar 30
- Mantén el test anterior: calculateTax(100, 10) debe retornar 10
- Ambos tests deben estar en el mismo describe block

CICLO TDD:

1. 🔴 RED: Agregar segundo test → FALLA (hardcoded retorna 10, no 30)
2. 🟢 GREEN: Refactorizar implementación a lógica real
3. Fórmula correcta: amount \* (taxRate / 100)
4. ✅ Ambos tests deben PASAR

IMPORTANTE - TRIANGULATION:

- El hardcoded YA NO funciona con 2 tests diferentes
- Los tests fuerzan la implementación correcta
- Esto es más confiable que adivinar la lógica

ARCHIVOS:

- src/shared/utils/calculateTax.test.ts (agregar segundo test)
- src/shared/utils/calculateTax.ts (refactorizar a lógica real)

VALIDACIÓN: ejecuta pnpm test → ambos tests deben PASAR ✅
