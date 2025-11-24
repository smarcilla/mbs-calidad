Actúa como un desarrollador que practica testing user-centric.

CONTEXTO: Testing Library prioriza queries que simulan cómo usuarios
reales interactúan con la app. Query Priority: 1) getByRole (más
accesible), 2) getByLabelText, 3) getByText, 4) getByTestId (último
recurso). getByRole busca elementos por su rol ARIA, como lo haría un
screen reader (lector de pantalla para usuarios con discapacidad visual).

TAREA: Crea componente LikeButton y su integration test.

COMPONENTE REQUIREMENTS:
- Estado inicial: likes = 0
- UI: botón con texto "Like (0)"
- Acción: click incrementa likes y actualiza texto a "Like (1)"
- Framework: React con useState

TEST REQUIREMENTS:
- Framework: Vitest + Testing Library
- Imports: render, screen, userEvent desde @testing-library/react
- Query: getByRole('button', { name: /like \(0\)/i })
- NO uses getByTestId (menos semántico)
- Interacción: userEvent.click() para simular click real
- Assertion: verificar texto cambió a "Like (1)"
- Estructura: AAA pattern

ARCHIVOS:
- src/features/likes/LikeButton.tsx (componente)
- src/features/likes/LikeButton.test.tsx (test)

VALIDACIÓN: ejecuta pnpm test para verificar