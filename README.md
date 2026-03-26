# PyMentor

PyMentor es una plataforma de aprendizaje de Python pensada para principiantes absolutos. El producto combina una ruta única de progreso, práctica guiada, ejercicios con feedback, proyectos graduales, un mentor IA en español y un playground de Python en el navegador con Pyodide.

El estado actual del proyecto cubre una primera gran etapa de fundamentos de Python, desde la introducción hasta un cierre de fundamentos con proyectos capstone.

## Qué incluye hoy

- Ruta completa de aprendizaje para principiantes en español.
- Lecciones, ejercicios, proyectos guiados, proyectos con más autonomía y capstone final.
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

La primera gran ruta de PyMentor ya está construida y localizada en español:

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
- No existe todavía una segunda gran ruta después del cierre de fundamentos.
- Los logros siguen siendo una capa de producto liviana, no un sistema completo de gamificación persistida.

## Documentación adicional

- [Arquitectura y recorridos](./docs/arquitectura.md)
- [Notas de despliegue en Railway](./docs/despliegue-railway.md)

## Próximo paso lógico del producto

Después de esta primera gran etapa, el siguiente paso natural es abrir un track de nivel siguiente todavía guiado, con proyectos un poco más amplios y nuevos temas prácticos, sin saltar todavía a complejidad intermedia dura.
