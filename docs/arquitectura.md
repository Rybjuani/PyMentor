# Arquitectura de PyMentor

## Visión general

PyMentor es una plataforma full-stack construida con Next.js para acompañar a principiantes absolutos en una primera gran ruta de Python y abrir después una segunda etapa más práctica sin romper la continuidad del producto. La arquitectura busca mantener tres cosas al mismo tiempo:

- claridad de producto
- bajo nivel de complejidad operativa
- espacio para crecer hacia persistencia y tracks más avanzados

## Capas principales

## 1. Experiencia de producto

Superficies principales:

- landing
- login y signup
- onboarding
- dashboard
- roadmap
- lesson
- exercise

Estas páginas viven en `app/` y consumen helpers de `lib/` para calcular estado de progreso, navegación y contenido.

## 2. Currículo

El contenido vive en:

- `lib/course-content.ts`

Ahí están definidos:

- módulos
- lecciones
- ejercicios
- orden de la ruta
- prompts, hints, objetivos y validaciones

Por ahora el currículo es file-based. La estructura ya está pensada para migrarse más adelante a una capa administrable o persistida sin romper la UI principal.

## 3. Progreso y actividad

Persistencia actual:

- PostgreSQL
- Prisma

Entidades relevantes:

- `User`
- `LessonProgress`
- `ExerciseProgress`
- `ActivityEvent`
- `Draft`

Helpers relevantes:

- `lib/user-progress.ts`
- `lib/activity.ts`
- `lib/drafts.ts`

## 4. Mentor IA

La integración del mentor vive en:

- `app/api/mentor/route.ts`
- `lib/mentor.ts`

Características:

- prompt orientado a principiantes
- contexto de lesson o exercise
- historial local de la conversación en cliente
- fallback amigable si Groq no responde

## 5. Ejercicios y validación

La evaluación no depende de ejecutar Python en el servidor.

Piezas principales:

- `app/api/exercises/evaluate/route.ts`
- `lib/exercise-evaluation.ts`

Tipos de validación actuales:

- rule based
- exact answer
- ordered concepts
- structure check

Además, algunos ejercicios usan output del playground en navegador como parte de la validación.

## 6. Playground de Python

La práctica en código vive en:

- `components/python-playground.tsx`
- `lib/pyodide-client.ts`

Características:

- ejecución browser-only con Pyodide
- sin ejecución arbitraria server-side
- salida visible y errores legibles
- recuperación y guardado automático de borradores

## Flujo del usuario

1. crea cuenta o inicia sesión
2. completa onboarding
3. entra al dashboard
4. avanza por la ruta
5. completa lecciones y ejercicios
6. guarda borradores automáticamente en práctica de código
7. cierra la primera gran etapa en el módulo `Cierre de fundamentos`
8. abre la segunda etapa en el módulo `Archivos básicos`
9. entra en un bloque más práctico con `Utilidades pequeñas y útiles`

## Decisiones intencionales

- una sola ruta en vez de múltiples caminos simultáneos
- apoyo fuerte al principio, más autonomía al final
- progresión visible como parte del producto
- browser runner con Pyodide en vez de runner server-side
- backend simple y Railway-friendly

## Puntos todavía débiles

- la segunda gran ruta recién está abierta y todavía tiene poco volumen
- logros y metas semanales siguen siendo livianos
- el mentor no guarda memoria persistente por usuario
- los evaluadores todavía no hacen análisis profundo de código
