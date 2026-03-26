# Despliegue en Railway

## Resumen

Railway es el destino principal del proyecto. El flujo actual está preparado para:

- instalar dependencias
- generar Prisma Client
- construir Next.js
- aplicar migraciones productivas
- levantar la app

## Variables requeridas

Configura estas variables en Railway:

```bash
DATABASE_URL=postgresql://usuario:password@host:5432/pymentor
NEXTAUTH_SECRET=una_clave_larga_y_segura
NEXTAUTH_URL=https://tu-dominio-o-url-de-railway
GROQ_API_KEY=tu_clave_de_groq
```

## Comandos relevantes

### Build

```bash
npm run build
```

### Start en Railway

```bash
npm run start:railway
```

`start:railway` ejecuta:

```bash
prisma migrate deploy && next start
```

Eso asegura que producción use el flujo correcto de migraciones de Prisma.

## Notas importantes

- No usar `prisma migrate dev` en Railway.
- `postinstall` ya ejecuta `prisma generate`.
- El mentor usa `GROQ_API_KEY` solo del lado servidor.
- Pyodide corre del lado cliente; Railway no ejecuta Python arbitrario para el playground.

## Checklist de despliegue

1. base PostgreSQL conectada
2. variables de entorno configuradas
3. migraciones presentes en `prisma/migrations`
4. `npm run build` pasa
5. `npm run typecheck` pasa

## Problemas comunes

### La app arranca pero Prisma falla

Revisar:

- `DATABASE_URL`
- acceso de red a PostgreSQL
- que existan las migraciones en el repo

### El login no funciona en producción

Revisar:

- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- cookies y dominio de la app

### El mentor no responde

Revisar:

- `GROQ_API_KEY`
- límites o disponibilidad del proveedor

### El playground no corre Python

Eso no depende de Railway directamente. El runner es browser-only con Pyodide, así que el problema suele estar en:

- carga del runtime en el navegador
- compatibilidad del browser
- bloqueos temporales de red del cliente al descargar Pyodide
