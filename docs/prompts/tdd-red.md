# prompt

Actúa como un desarrollador practicando TDD estricto.

CONTEXTO: En TDD, escribes el test ANTES que el código de producción.
Primera ley de TDD: "No escribas código de producción hasta tener un
test que falle". Este es el paso RED del ciclo Red-Green-Refactor.

TAREA: Crea test para calculateTax que DEBE FALLAR.

TEST SPECIFICATIONS:

- Función a probar: calculateTax(amount: number, taxRate: number): number
- Test case: calculateTax(100, 10) debe retornar 10
- Framework: Vitest (describe, it, expect)
- Estructura: AAA pattern con comentarios

IMPORTANTE - PASO RED:

- NO implementes la función calculateTax aún
- El test DEBE fallar con "ReferenceError: calculateTax is not defined"
- Esto prueba que seguiste TDD correctamente

ARCHIVOS:

- src/shared/utils/calculateTax.test.ts (solo el test)

VALIDACIÓN: ejecuta pnpm test → debe fallar con error "not defined"
