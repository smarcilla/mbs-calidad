Actúa como un desarrollador que testa flujos de formularios con userEvent.

CONTEXTO: userEvent simula interacciones reales del usuario mejor que
fireEvent. Por ejemplo, userEvent.type() dispara eventos keyDown, keyPress,
keyUp, input, change (como usuario real), mientras fireEvent.change() solo
dispara change. Query Priority #2 es getByLabelText, ideal para formularios
con <label> asociados a inputs (mejor accesibilidad).

TAREA: Crea componente PriceCalculator con formulario y su integration test

COMPONENTE REQUIREMENTS:
- 2 inputs tipo number: "Quantity" y "Unit Price"
- Cada input debe tener <label> asociado (para getByLabelText)
- Cálculo: total = quantity × unitPrice
- UI: párrafo mostrando "Total: $XX.XX" (formato 2 decimales)
- Framework: React con useState

TEST REQUIREMENTS:
- Framework: Vitest + Testing Library
- Setup: const user = userEvent.setup()
- Query: getByLabelText(/quantity/i) y getByLabelText(/unit price/i)
- Interacción: await user.type() para ingresar valores
- Test data: quantity = 3, unitPrice = 10.50
- Assertion: verificar "Total: $31.50" en el documento
- Estructura: AAA pattern

ARCHIVOS:
- src/features/calculator/PriceCalculator.tsx (componente)
- src/features/calculator/PriceCalculator.test.tsx (test)

VALIDACIÓN: ejecuta pnpm test para verificar