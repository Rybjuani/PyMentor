# PyMentor

PyMentor es una plataforma de aprendizaje de Python pensada para principiantes absolutos. El producto combina una progresión por etapas, práctica guiada, ejercicios con feedback, proyectos graduales, un mentor IA en español y un playground de Python en el navegador con Pyodide.

El estado actual del proyecto cubre dos etapas completas y claramente diferenciadas, y además ya abrió una tercera etapa práctica inicial centrada en herramientas más estructuradas.

## Qué incluye hoy

- Dos rutas completas con cierre formal: fundamentos y Python práctico 2.
- Una Ruta 3 ya abierta para empezar a trabajar con programas multiarchivo simples.
- Lecciones, ejercicios, proyectos guiados, proyectos con más autonomía, capstones de Ruta 1 y capstones de Ruta 2.
- Progreso persistido por usuario con autenticación real.
- Mentor IA con Groq integrado server-side.
- Playground de Python en el navegador con Pyodide.
- Validación de ejercicios en servidor, incluyendo revisión basada en output del navegador para ejercicios seleccionados.
- Guardado automático de borradores de código por usuario en PostgreSQL.
- Dashboard, roadmap, streak, actividad reciente y señales de progreso.

## Stack actual

- `Next.js 14.2.35` con App Router
- `TypeScript`
- `Tailwind CSS`
- `NextAuth` con credenciales
- `Prisma` + `PostgreSQL`
- `Groq API` para el mentor
- `Pyodide` para ejecutar Python en el navegador

## Estado del producto

PyMentor ya tiene dos rutas completas y una tercera etapa recién abierta, todo localizado en español:

1. Introducción
2. Variables
3. Condicionales
4. Bucles
5. Funciones
6. Mini proyectos
7. Listas
8. Diccionarios
9. Strings
10. Proyectos guiados
11. Consolidación práctica
12. Proyectos con más autonomía
13. Proyectos iniciales más libres
14. Cierre de fundamentos
15. Archivos básicos
16. Funciones y organización simple
17. Utilidades pequeñas y útiles
18. Utilidades organizadas con flujo completo
19. Consulta y actualización simple de datos
20. Herramientas con entradas y cambios simples
21. Proyectos prácticos de Ruta 2
22. Cierre de Ruta 2
23. Programas multiarchivo simples
24. Utilidades multiarchivo con flujo claro

## Etapas del producto

### Ruta 1 · Fundamentos de Python

Lleva a la persona desde cero absoluto hasta un cierre de fundamentos con capstone.

### Ruta 2 · Python práctico 2

Empieza justo después del cierre de fundamentos.
Sus primeras aperturas son `Archivos básicos`, `Funciones y organización simple`, `Utilidades pequeñas y útiles`, `Utilidades organizadas con flujo completo`, `Consulta y actualización simple de datos`, `Herramientas con entradas y cambios simples`, `Proyectos prácticos de Ruta 2` y `Cierre de Ruta 2`, donde el foco pasa a programas que guardan información, la consultan, la ajustan, piden decisiones con `input()` y ya se sienten como herramientas pequeñas más completas e interactivas, hasta cerrar una segunda etapa práctica con capstones propios.

### Ruta 3 · Herramientas estructuradas

Empieza justo después del cierre de Ruta 2.
Sus primeros bloques son `Programas multiarchivo simples` y `Utilidades multiarchivo con flujo claro`, donde el foco ya no está solo en construir utilidades prácticas, sino en repartir mejor un programa entre un archivo principal y archivos de apoyo para que siga siendo legible, ordenado y más cercano a una herramienta real.

## Estado de progresión actual

- Ruta 1 se lee como una etapa completa de fundamentos, con cierre formal en `Cierre de fundamentos`.
- Ruta 2 se lee como una etapa práctica distinta, con cierre formal en `Cierre de Ruta 2`.
- Ruta 3 ya aparece como la siguiente gran etapa del producto, abierta con su primer módulo y presentada como un cambio real de nivel dentro del recorrido.

## Requisitos

- Node.js 18+
- npm 9+
- PostgreSQL accesible desde la app

## Variables de entorno

Crea un archivo `.env.local` con estas variables:

```bash
DATABASE_URL=postgresql://usuario:password@host:5432/pymentor
NEXTAUTH_SECRET=una_clave_larga_y_segura
NEXTAUTH_URL=http://localhost:3000
GROQ_API_KEY=tu_clave_de_groq
```

### Para qué sirve cada variable

- `DATABASE_URL`: conexión a PostgreSQL para usuarios, progreso, actividad y borradores.
- `NEXTAUTH_SECRET`: secreto usado por NextAuth para firmar sesiones.
- `NEXTAUTH_URL`: URL base de la app.
- `GROQ_API_KEY`: clave privada usada solo del lado servidor para el mentor IA.

## Puesta en marcha local

1. Instala dependencias:

```bash
npm install
```

2. Genera Prisma Client:

```bash
npm run prisma:generate
```

3. Aplica migraciones:

```bash
npm run prisma:migrate
```

4. Levanta el entorno local:

```bash
npm run dev
```

## Scripts principales

```bash
npm run dev
npm run build
npm run start
npm run start:railway
npm run typecheck
npm run prisma:generate
npm run prisma:migrate
```

## Flujo de despliegue en Railway

PyMentor está preparado para Railway como destino principal.

### Comportamiento esperado

- `postinstall` genera Prisma Client automáticamente.
- `start:railway` ejecuta `prisma migrate deploy && next start`.
- El flujo productivo usa `prisma migrate deploy`, no comandos de desarrollo.

### Variables que Railway debe tener

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GROQ_API_KEY`

### Comando recomendado de inicio

```bash
npm run start:railway
```

## Arquitectura resumida

### App

- `app/page.tsx`: landing.
- `app/dashboard/page.tsx`: panel principal del usuario.
- `app/roadmap/page.tsx`: ruta completa de aprendizaje.
- `app/lesson/[slug]/page.tsx`: experiencia de lección.
- `app/exercise/[slug]/page.tsx`: experiencia de ejercicio.

### Lógica de producto

- `lib/course-content.ts`: currículo completo, módulos, lecciones y ejercicios.
- `lib/course.ts`: navegación, progreso del roadmap y siguiente paso.
- `lib/exercise-evaluation.ts`: evaluadores server-side por tipo de ejercicio.
- `lib/mentor.ts`: prompting y reglas del mentor.
- `lib/user-progress.ts`: persistencia de progreso por usuario.
- `lib/drafts.ts`: persistencia de borradores.
- `lib/activity.ts`: actividad y base de racha.

### UI reutilizable

- `components/mentor-widget.tsx`
- `components/python-playground.tsx`
- `components/exercise-workspace.tsx`
- `components/roadmap-module-card.tsx`
- `components/app-shell.tsx`

## Cómo funciona el progreso

- El progreso ya no vive en cookies.
- Las lecciones y ejercicios se guardan por usuario en PostgreSQL.
- Los ejercicios pueden requerir revisión antes de marcarse como completos.
- Los borradores de código se recuperan por cuenta en lessons y exercises.
- El dashboard y la ruta reflejan el estado real del usuario.

## Cómo funciona el mentor

- El mentor usa Groq desde una ruta server-side.
- El `GROQ_API_KEY` no sale al cliente.
- La UI mantiene historial local por sesión de página.
- El comportamiento está diseñado para principiantes absolutos y responde en español por defecto.

## Cómo funciona la práctica de Python

- PyMentor usa Pyodide para ejecutar Python en el navegador.
- No hay ejecución arbitraria de Python en el servidor.
- Algunos ejercicios usan la salida real del navegador como parte de la validación.
- La experiencia está pensada para tareas tempranas y seguras, no para ejecución compleja o arbitraria.

## Limitaciones actuales

- No hay streaming en el mentor todavía.
- No hay ejecución server-side de Python.
- No hay code runner completo ni evaluación semántica profunda.
- Ruta 3 recién empieza y todavía tiene poco volumen de contenido frente a las dos primeras rutas.
- Los logros siguen siendo una capa de producto liviana, no un sistema completo de gamificación persistida.

## Documentación adicional

- [Arquitectura y recorridos](./docs/arquitectura.md)
- [Notas de despliegue en Railway](./docs/despliegue-railway.md)

## Próximo paso lógico del producto

El siguiente paso natural es expandir Ruta 3 con más módulos centrados en herramientas algo más amplias y programas mejor repartidos, sin salir todavía del nivel temprano-práctico.
