import { ExerciseData, LessonData, RoadmapModule } from "@/types";

export const courseModules: RoadmapModule[] = [
  {
    slug: "python-inicial",
    title: "Módulo 1 · Fundamentos útiles",
    description:
      "Base real para empezar: leer código, producir salidas, usar datos, tomar decisiones, repetir tareas y cerrar con una mini app de consola.",
    order: 1,
    status: "available",
    lessonCount: 6,
    estimatedTime: "6 h",
    xp: 320
  },
  {
    slug: "python-practico",
    title: "Módulo 2 · Datos y utilidades",
    description:
      "El salto a uso real: listas, diccionarios, strings, archivos, módulos estándar y una utilidad que ya trabaja con datos.",
    order: 2,
    status: "locked",
    lessonCount: 6,
    estimatedTime: "8 h",
    xp: 420
  },
  {
    slug: "python-estructurado",
    title: "Módulo 3 · Herramientas estructuradas",
    description:
      "Organización más seria: scripts limpios, clases cuando aportan, JSON, parsing y un proyecto final que ya se siente portfolio-ready.",
    order: 3,
    status: "locked",
    lessonCount: 6,
    estimatedTime: "9 h",
    xp: 520
  }
];

const moduleTitleBySlug = Object.fromEntries(courseModules.map((module) => [module.slug, module.title]));

function lesson(data: Omit<LessonData, "module">): LessonData {
  return {
    ...data,
    module: moduleTitleBySlug[data.moduleSlug ?? ""] ?? "PyMentor"
  };
}

function codeExercise(data: Omit<ExerciseData, "responseFormat">): ExerciseData {
  return {
    ...data,
    responseFormat: "code"
  };
}

function textExercise(data: Omit<ExerciseData, "responseFormat" | "starterCode" | "playground">): ExerciseData {
  return {
    ...data,
    responseFormat: "text",
    starterCode: ""
  };
}

export const courseLessons: LessonData[] = [
  lesson({
    slug: "leer-y-producir-salidas",
    title: "Leer un script y producir una salida útil",
    moduleSlug: "python-inicial",
    order: 1,
    duration: "25 min",
    difficulty: "Starter",
    summary: "Empieza con la idea correcta: un programa es una secuencia de instrucciones que transforma datos en una salida entendible.",
    warmup: "Programar no empieza por memorizar sintaxis: empieza por leer qué entra, qué cambia y qué sale.",
    goal: "Entender el flujo básico de un script y producir una salida legible con `print()` y variables.",
    keyIdeas: [
      {
        title: "Secuencia antes que magia",
        description: "Python ejecuta de arriba hacia abajo. Para leer un script, sigue ese orden y observa qué datos se usan en cada línea."
      },
      {
        title: "Una salida sirve si comunica algo",
        description: "Imprimir texto por imprimir no enseña mucho. Una buena salida resume un dato o confirma una acción."
      },
      {
        title: "Variables con intención",
        description: "Una variable no es decoración: guarda un valor que después se combina o se muestra."
      }
    ],
    explanation: [
      {
        title: "Qué hace realmente este primer paso",
        body: "La meta no es llenar la consola con frases. La meta es tomar datos claros y mostrarlos en un formato que otra persona pueda leer sin adivinar."
      },
      {
        title: "Cómo leer sin perderte",
        body: "Primero ubica las variables. Después mira dónde se imprimen. Ese hábito sirve más que repetir ejemplos mínimos sin contexto."
      }
    ],
    example:
      "student = 'Luna'\nminutes = 45\nmode = 'repaso'\n\nprint(f'Sesión: {student}')\nprint(f'Minutos planificados: {minutes}')\nprint(f'Modo: {mode}')",
    practicePrompt: "Arma un resumen de sesión con tres datos útiles: nombre, duración y foco principal.",
    practiceChecklist: [
      "Guarda cada dato en una variable con nombre claro.",
      "Muestra la salida en varias líneas legibles.",
      "Usa texto que parezca parte de una herramienta, no una frase suelta."
    ],
    commonMistakes: [
      "Pegar todo dentro de un solo `print()` difícil de leer.",
      "Usar nombres de variables vagos como `x` o `dato`.",
      "Olvidar que el script se lee de arriba hacia abajo."
    ],
    bugChallenge: {
      prompt: "Encuentra por qué este resumen se rompe antes de imprimir todo.",
      brokenCode:
        "student = 'Luna'\nminutes = 45\nprint('Sesión:' student)\nprint(f'Minutos: {minutes}')",
      expectedLearning: "La consola ayuda a detectar errores de sintaxis, pero primero necesitas ubicar la línea exacta y leerla sin apuro."
    },
    playground: {
      guidance: "Convierte tres datos simples en una salida prolija de consola.",
      starterCode:
        "student = 'Luna'\nminutes = 45\nfocus = 'repaso de funciones'\n\n# Escribe aquí tu resumen",
      emptyOutputHint: "Tu resumen de sesión debería verse en varias líneas."
    },
    exerciseSlug: "armar-resumen-de-sesion"
  }),
  lesson({
    slug: "variables-input-y-operadores",
    title: "Variables, `input()` y operaciones con sentido",
    moduleSlug: "python-inicial",
    order: 2,
    duration: "35 min",
    difficulty: "Starter",
    summary: "Empieza a pedir datos, convertirlos y operar con ellos para construir scripts más cercanos a una utilidad real.",
    warmup: "Un script empieza a valer más cuando recibe datos y responde con un cálculo o decisión útil.",
    goal: "Combinar `input()`, conversión de tipos y operadores para producir una respuesta correcta.",
    keyIdeas: [
      {
        title: "Input devuelve texto",
        description: "Cuando pides datos con `input()`, Python recibe strings. Si vas a calcular, normalmente tienes que convertir."
      },
      {
        title: "Operar antes de imprimir",
        description: "Primero transforma el dato. Después muestra el resultado final. Eso hace que el código sea más fácil de revisar."
      },
      {
        title: "Formato limpio",
        description: "Una salida útil no solo calcula: también explica qué está mostrando."
      }
    ],
    explanation: [
      {
        title: "Tipos básicos en la práctica",
        body: "Strings, enteros y decimales no son teoría decorativa. Son la diferencia entre concatenar texto o hacer una cuenta válida."
      },
      {
        title: "Qué hace que una consigna tenga valor",
        body: "Pedir un dato y mostrarlo igual no alcanza. El punto es transformar algo: sumar, convertir, comparar o resumir."
      }
    ],
    example:
      "project = input('Proyecto: ')\nhours = float(input('Horas trabajadas: '))\nrate = float(input('Tarifa por hora: '))\nsubtotal = hours * rate\nprint(f'{project}: ${subtotal:.2f}')",
    practicePrompt: "Crea un cotizador simple que pida horas, tarifa y descuento porcentual, y luego muestre el total final.",
    practiceChecklist: [
      "Pide al menos tres datos con `input()`.",
      "Convierte a número antes de calcular.",
      "Muestra subtotal, descuento y total final."
    ],
    commonMistakes: [
      "Intentar sumar texto con números sin convertir.",
      "Hacer la cuenta dentro del `print()` y volverla difícil de leer.",
      "Olvidar el orden de operaciones."
    ],
    bugChallenge: {
      prompt: "Este script debería calcular un total, pero mezcla tipos de forma incorrecta.",
      brokenCode:
        "hours = input('Horas: ')\nrate = 12\nprint('Total: ' + hours * rate)",
      expectedLearning: "Antes de depurar una cuenta, confirma qué tipo de dato tiene cada variable."
    },
    playground: {
      guidance: "Pide datos, convierte lo necesario y entrega un resultado entendible.",
      starterCode:
        "project = input('Proyecto: ')\nhours = float(input('Horas trabajadas: '))\nrate = float(input('Tarifa por hora: '))\ndiscount = float(input('Descuento (%): '))\n\n# Calcula subtotal, descuento aplicado y total final",
      emptyOutputHint: "Ejecuta el script y completa los prompts para ver tu cotización."
    },
    exerciseSlug: "crear-cotizador-simple"
  }),
  lesson({
    slug: "condicionales-y-validacion",
    title: "Condicionales y validación básica",
    moduleSlug: "python-inicial",
    order: 3,
    duration: "35 min",
    difficulty: "Beginner",
    summary: "Haz que el programa decida y valide datos en vez de aceptar todo sin criterio.",
    warmup: "Un script útil no se limita a calcular: también detecta si un dato sirve o si hay que frenar.",
    goal: "Usar `if`, `elif`, `else` y comparaciones para validar entradas y elegir acciones.",
    keyIdeas: [
      {
        title: "Una condición responde una pregunta concreta",
        description: "La mejor condición no intenta hacer todo a la vez. Evalúa una regla clara y deja explícito qué pasa si se cumple."
      },
      {
        title: "Validar evita basura de entrada",
        description: "Si el dato no tiene sentido, el programa debe decirlo pronto. Esa es parte del trabajo del script."
      },
      {
        title: "Mensajes útiles también son UX",
        description: "No basta con decir 'error'. Di qué falló y qué rango o formato esperabas."
      }
    ],
    explanation: [
      {
        title: "Comparar para decidir",
        body: "Las comparaciones (`>`, `<`, `==`, `>=`) convierten una regla en una decisión ejecutable. Esa transición es una de las bases de programar."
      },
      {
        title: "Reglas visibles",
        body: "Cuando la regla vive en una variable o en una condición bien escrita, el código se puede explicar y revisar con menos esfuerzo."
      }
    ],
    example:
      "score = int(input('Puntaje: '))\nif score < 0 or score > 100:\n    print('Puntaje inválido')\nelif score >= 70:\n    print('Aprobado')\nelse:\n    print('Necesita revisión')",
    practicePrompt: "Construye un verificador de envíos: si el peso es inválido, avisa; si supera cierto umbral, aplica recargo; si no, confirma tarifa base.",
    practiceChecklist: [
      "Valida primero que el dato tenga sentido.",
      "Usa al menos dos ramas distintas con `elif` o `else`.",
      "Muestra mensajes claros para cada caso."
    ],
    commonMistakes: [
      "Escribir condiciones imposibles o contradictorias.",
      "Olvidar validar antes de calcular.",
      "Usar mensajes genéricos que no explican qué pasó."
    ],
    bugChallenge: {
      prompt: "Este script aprueba valores imposibles. Corrígelo leyendo la lógica, no por intuición.",
      brokenCode:
        "score = int(input('Puntaje: '))\nif score >= 70:\n    print('Aprobado')\nelif score < 0 and score > 100:\n    print('Puntaje inválido')\nelse:\n    print('Revisar')",
      expectedLearning: "Las validaciones deben ir en el orden correcto y usar operadores lógicos coherentes."
    },
    playground: {
      guidance: "Primero valida. Después decide qué mensaje corresponde.",
      starterCode:
        "weight = float(input('Peso del pedido: '))\nbase_price = 2500\n\n# Si el peso es inválido, informa el error.\n# Si supera 10 kg, aplica un recargo del 15%.\n# Si no, deja la tarifa base.",
      emptyOutputHint: "Prueba casos válidos e inválidos para verificar la lógica."
    },
    exerciseSlug: "validar-tarifa-de-envio"
  }),
  lesson({
    slug: "bucles-con-acumulacion",
    title: "Bucles con acumulación y conteo",
    moduleSlug: "python-inicial",
    order: 4,
    duration: "40 min",
    difficulty: "Beginner",
    summary: "Aprende a repetir tareas y a acumular resultados en vez de copiar código o depender de casos fijos.",
    warmup: "Cuando una regla se repite, escribirla una sola vez no es optimización: es claridad básica.",
    goal: "Usar `for` o `while` para repetir entradas, acumular totales y contar eventos.",
    keyIdeas: [
      {
        title: "Repetir no es duplicar",
        description: "Un bucle aplica la misma lógica a varios datos. Duplicar líneas suele indicar que falta una estructura."
      },
      {
        title: "Acumulador y contador",
        description: "Dos variables simples te permiten responder preguntas útiles: cuánto sumaste y cuántas veces ocurrió algo."
      },
      {
        title: "Salir con un resumen",
        description: "El valor del bucle suele aparecer al final, cuando produces un cierre con datos consolidados."
      }
    ],
    explanation: [
      {
        title: "Qué mirar dentro de un bucle",
        body: "En cada iteración, revisa qué dato entra, qué variable cambia y qué condición puede cortar o clasificar ese dato."
      },
      {
        title: "Cuándo usar `for` y cuándo `while`",
        body: "Si sabes cuántas veces repites, `for` suele ser más claro. Si dependes de una condición de salida, `while` puede tener más sentido."
      }
    ],
    example:
      "total = 0\ncompleted = 0\nfor day in range(3):\n    minutes = int(input('Minutos del día: '))\n    total += minutes\n    if minutes >= 30:\n        completed += 1\n\nprint(f'Total: {total}')\nprint(f'Días en objetivo: {completed}')",
    practicePrompt: "Haz un registrador de ventas de 5 tickets: pide cada monto, suma el total y cuenta cuántos tickets superan un umbral.",
    practiceChecklist: [
      "Usa un bucle claro y un contador separado del total.",
      "Muestra un resumen final con al menos dos métricas.",
      "Evita repetir manualmente las mismas líneas."
    ],
    commonMistakes: [
      "Reiniciar el acumulador dentro del bucle.",
      "Olvidar actualizar el contador cuando corresponde.",
      "No diferenciar el dato actual del resumen final."
    ],
    bugChallenge: {
      prompt: "Este resumen siempre termina mal porque el total se resetea en el lugar equivocado.",
      brokenCode:
        "for ticket in range(3):\n    total = 0\n    amount = int(input('Monto: '))\n    total += amount\nprint(total)",
      expectedLearning: "Las variables de acumulación deben vivir fuera del bucle cuando quieres conservar el historial."
    },
    playground: {
      guidance: "Registra varios datos y entrega un cierre final, no solo una línea por cada entrada.",
      starterCode:
        "total = 0\nhigh_sales = 0\n\nfor ticket in range(5):\n    amount = float(input(f'Monto del ticket {ticket + 1}: '))\n    # Actualiza total y high_sales\n\n# Imprime el resumen final",
      emptyOutputHint: "Ejecuta el script y completa los cinco tickets."
    },
    exerciseSlug: "registrar-ventas-en-bucle"
  }),
  lesson({
    slug: "funciones-y-descomposicion",
    title: "Funciones que ordenan la lógica",
    moduleSlug: "python-inicial",
    order: 5,
    duration: "40 min",
    difficulty: "Beginner",
    summary: "Empieza a separar reglas en funciones para dejar de apilar todo en un único bloque confuso.",
    warmup: "Una función simple no existe para sonar avanzada: existe para encapsular una regla que volverás a usar o explicar.",
    goal: "Definir funciones con parámetros y `return` para repartir responsabilidades de forma clara.",
    keyIdeas: [
      {
        title: "Una función, una responsabilidad",
        description: "Si una función mezcla pedir datos, validar y reportar, suele costar más mantenerla."
      },
      {
        title: "Parámetros con nombres concretos",
        description: "Los parámetros deben describir qué reciben. Eso vuelve más legible la llamada y el cuerpo de la función."
      },
      {
        title: "`return` entrega un resultado",
        description: "Devolver un valor permite reutilizar una regla en varias partes del script sin copiarla."
      }
    ],
    explanation: [
      {
        title: "Descomponer sin sobreingeniería",
        body: "No se trata de partir todo en veinte funciones. Se trata de separar reglas que puedan probarse o entenderse solas."
      },
      {
        title: "Cómo detectar una buena función",
        body: "Si puedes describirla con una frase breve y el nombre coincide con esa frase, vas bien."
      }
    ],
    example:
      "def calculate_total(hours, rate, discount_percent):\n    subtotal = hours * rate\n    discount = subtotal * (discount_percent / 100)\n    return subtotal - discount\n\nfinal_total = calculate_total(6, 18, 10)\nprint(f'Total final: ${final_total:.2f}')",
    practicePrompt: "Divide un cotizador en funciones: una que calcule el total, otra que determine si aplica un mensaje de prioridad.",
    practiceChecklist: [
      "Crea al menos dos funciones pequeñas.",
      "Usa `return` para reutilizar un cálculo.",
      "Deja el flujo principal del script más corto y legible."
    ],
    commonMistakes: [
      "Definir una función y luego imprimir su nombre en vez de llamarla.",
      "Ocultar demasiadas responsabilidades en una sola función.",
      "No devolver nada cuando el valor hará falta más abajo."
    ],
    bugChallenge: {
      prompt: "Este script define una función útil, pero nunca la ejecuta correctamente.",
      brokenCode:
        "def apply_discount(total, percent):\n    return total - (total * percent / 100)\n\nresult = apply_discount\nprint(result)",
      expectedLearning: "Una función se llama con paréntesis y los argumentos correctos; si no, solo estás guardando la referencia."
    },
    playground: {
      guidance: "Extrae reglas repetibles a funciones y deja el bloque principal más corto.",
      starterCode:
        "def calculate_total(hours, rate):\n    return hours * rate\n\n# Crea una función extra para decidir si el trabajo entra en prioridad.\n# Luego usa ambas funciones para imprimir un resumen final.",
      emptyOutputHint: "Tu salida final debería combinar resultado numérico y un mensaje de prioridad."
    },
    exerciseSlug: "refactorizar-cotizador-con-funciones"
  }),
  lesson({
    slug: "capstone-inicial-planificador",
    title: "Capstone inicial · Planificador de estudio",
    moduleSlug: "python-inicial",
    order: 6,
    duration: "55 min",
    difficulty: "Beginner",
    summary: "Cierra el primer módulo integrando entradas, validación, bucles y funciones en una mini app de consola con propósito claro.",
    warmup: "Cerrar un módulo no significa repetir todo. Significa combinar piezas para resolver una tarea reconocible.",
    goal: "Construir una mini app que pregunte datos, organice un plan y entregue un cierre útil.",
    keyIdeas: [
      {
        title: "Integrar es distinto a repetir",
        description: "El capstone no introduce cada concepto de cero: los obliga a convivir en un flujo coherente."
      },
      {
        title: "La salida final importa",
        description: "Si el usuario no entiende el resultado, el script todavía está a medio camino."
      },
      {
        title: "Pequeño pero defendible",
        description: "Un proyecto inicial no necesita ser gigante. Necesita tener lógica, validación y una intención clara."
      }
    ],
    explanation: [
      {
        title: "Qué debe sentirse distinto aquí",
        body: "Ya no estás completando una mecánica aislada. Estás armando una herramienta pequeña que toma decisiones y entrega un plan."
      },
      {
        title: "Qué mirar antes de cerrar",
        body: "Confirma que cada función tenga un rol claro, que las validaciones frenen datos absurdos y que la salida final resuma bien."
      }
    ],
    example:
      "def classify_load(tasks):\n    if tasks >= 5:\n        return 'alta'\n    if tasks >= 3:\n        return 'media'\n    return 'baja'\n\nstudent = input('Nombre: ')\navailable_minutes = int(input('Minutos disponibles: '))\ntasks = int(input('Tareas pendientes: '))\nload = classify_load(tasks)\nprint(f'{student}: carga {load} con {available_minutes} min disponibles')",
    practicePrompt: "Construye un planificador que pida nombre, minutos disponibles y cantidad de tareas, clasifique la carga y sugiera bloques de trabajo.",
    practiceChecklist: [
      "Usa al menos dos funciones.",
      "Valida al menos un dato antes de seguir.",
      "Entrega un resumen final con sugerencia concreta."
    ],
    commonMistakes: [
      "Resolver todo en el bloque principal y perder claridad.",
      "No manejar valores inválidos o absurdos.",
      "Entregar una salida final que no resume la recomendación."
    ],
    bugChallenge: {
      prompt: "Este planificador calcula bloques, pero termina mostrando una función en vez del número.",
      brokenCode:
        "def estimate_blocks(minutes):\n    return minutes // 25\n\nminutes = int(input('Minutos: '))\nprint(estimate_blocks)",
      expectedLearning: "En un cierre integrador, los errores pequeños suelen venir de funciones mal llamadas o datos mal conectados."
    },
    playground: {
      guidance: "Piensa como si estuvieras entregando una mini utilidad, no una prueba de sintaxis.",
      starterCode:
        "def classify_load(tasks):\n    if tasks >= 5:\n        return 'alta'\n    if tasks >= 3:\n        return 'media'\n    return 'baja'\n\n# Crea otra función que sugiera bloques de 25 minutos.\n# Luego construye el flujo principal del planificador.",
      emptyOutputHint: "Tu plan final debería recomendar una estrategia concreta."
    },
    exerciseSlug: "capstone-planificador-de-estudio"
  }),
  lesson({
    slug: "listas-y-tuplas-para-series-de-datos",
    title: "Listas y tuplas para trabajar series de datos",
    moduleSlug: "python-practico",
    order: 1,
    duration: "40 min",
    difficulty: "Beginner",
    summary: "Deja atrás la lógica de una variable por dato y empieza a operar con colecciones completas.",
    warmup: "Cuando aparecen varios valores del mismo tipo, insistir con variables sueltas deja de escalar enseguida.",
    goal: "Usar listas y tuplas para agrupar, recorrer y resumir datos.",
    keyIdeas: [
      {
        title: "Una lista modela una secuencia cambiante",
        description: "Puedes agregar, recorrer y resumir valores sin inventar una variable nueva para cada caso."
      },
      {
        title: "Una tupla fija un conjunto corto",
        description: "Sirve para pares o grupos pequeños que no deberían cambiar, como categorías o coordenadas simples."
      },
      {
        title: "El valor aparece al recorrer",
        description: "Una colección sirve de verdad cuando la usas para calcular o transformar algo, no solo para guardarla."
      }
    ],
    explanation: [
      {
        title: "Cómo pensar una lista",
        body: "No la veas como un tema aislado. Piensa qué datos repites y qué operación quieres hacer con todos: sumar, filtrar, ordenar o contar."
      },
      {
        title: "Tuplas con criterio",
        body: "No necesitas usar tuplas todo el tiempo. Úsalas cuando el conjunto es corto y la forma del dato importa."
      }
    ],
    example:
      "expenses = [12.5, 8, 19.9, 5]\ncategories = ('comida', 'transporte', 'herramientas')\nprint(f'Total: {sum(expenses):.2f}')\nfor amount in expenses:\n    print(f'- ${amount:.2f}')",
    practicePrompt: "Arma un resumen de tareas usando una lista de duraciones y una tupla con las etiquetas del reporte.",
    practiceChecklist: [
      "Usa una lista y recórrela.",
      "Usa una tupla para etiquetar un resumen corto.",
      "Muestra al menos una métrica agregada."
    ],
    commonMistakes: [
      "Crear listas pero seguir escribiendo lógica duplicada.",
      "Confundir el elemento actual con la lista completa.",
      "Usar una tupla donde hace falta modificar el contenido."
    ],
    bugChallenge: {
      prompt: "Este script intenta sumar una lista, pero usa mal cada elemento.",
      brokenCode:
        "expenses = [10, 12, 8]\ntotal = 0\nfor expenses in expenses:\n    total += expenses[0]\nprint(total)",
      expectedLearning: "El nombre del elemento del bucle debe representar un dato, no pisar la colección completa."
    },
    playground: {
      guidance: "Usa una colección para consolidar datos y sacar un resumen útil.",
      starterCode:
        "durations = [20, 35, 15, 40]\nlabels = ('total', 'promedio', 'mayor bloque')\n\n# Recorre la lista y muestra un resumen con estas etiquetas",
      emptyOutputHint: "Tu salida debería resumir varios datos, no imprimirlos sin contexto."
    },
    exerciseSlug: "resumir-datos-con-listas"
  }),
  lesson({
    slug: "diccionarios-y-sets-para-registros",
    title: "Diccionarios y sets para registros y control",
    moduleSlug: "python-practico",
    order: 2,
    duration: "45 min",
    difficulty: "Beginner",
    summary: "Aprende a modelar datos con nombre y a detectar duplicados o elementos únicos con más criterio.",
    warmup: "Cuando un dato tiene estructura, una lista ya no alcanza. Necesitas nombres claros para cada parte.",
    goal: "Usar diccionarios para representar registros y sets para validar duplicados o pertenencia.",
    keyIdeas: [
      {
        title: "Diccionario = registro con claves",
        description: "Sirve cuando cada dato cumple un rol distinto: nombre, cantidad, precio, estado."
      },
      {
        title: "Set = colección sin duplicados",
        description: "Es útil para validar etiquetas repetidas o comprobar rápidamente si un valor ya apareció."
      },
      {
        title: "Datos con forma más útil",
        description: "Al modelar mejor, el resto del script se vuelve más claro: lees por nombres en vez de posiciones."
      }
    ],
    explanation: [
      {
        title: "Qué mejora un diccionario",
        body: "En vez de recordar que el precio está en la posición 2 y el stock en la 3, usas claves explícitas. Eso reduce errores tontos."
      },
      {
        title: "Set como validación",
        body: "Si necesitas saber si algo ya existe, un set suele ser más directo que recorrer una lista entera."
      }
    ],
    example:
      "product = {'name': 'teclado', 'price': 35, 'stock': 4}\nseen_tags = {'oferta', 'perifericos'}\nprint(f\"{product['name']} | ${product['price']} | stock {product['stock']}\")\nprint('oferta' in seen_tags)",
    practicePrompt: "Construye un registro de producto con diccionario y detecta si una etiqueta ya fue usada con un set.",
    practiceChecklist: [
      "Accede a valores del diccionario por clave.",
      "Usa un set para evitar duplicados.",
      "Muestra un resumen con nombre, precio y estado."
    ],
    commonMistakes: [
      "Tratar un diccionario como si fuera una lista.",
      "Olvidar comillas en las claves.",
      "No aprovechar el set para validar y seguir recorriendo de forma manual."
    ],
    bugChallenge: {
      prompt: "Este código mezcla acceso por índice y por clave. Revísalo como un error de modelo, no solo de sintaxis.",
      brokenCode:
        "product = {'name': 'mouse', 'price': 18}\nprint(product[0])",
      expectedLearning: "Si eliges un diccionario, el acceso debe hacerse por clave porque el dato tiene nombre, no posición fija."
    },
    playground: {
      guidance: "Modela un registro con claves claras y una validación simple de duplicados.",
      starterCode:
        "product = {\n    'name': 'mouse',\n    'price': 18,\n    'stock': 7,\n    'category': 'perifericos'\n}\nseen_categories = {'audio', 'oficina'}\n\n# Muestra el resumen del producto y valida si su categoría ya existe",
      emptyOutputHint: "Piensa en formato de inventario básico."
    },
    exerciseSlug: "armar-registro-de-producto"
  }),
  lesson({
    slug: "strings-y-limpieza-de-datos",
    title: "Strings en serio: limpiar, separar y recomponer",
    moduleSlug: "python-practico",
    order: 3,
    duration: "40 min",
    difficulty: "Beginner",
    summary: "Trabaja con texto como dato real: limpiar entradas, separar campos y generar salidas más confiables.",
    warmup: "Muchos scripts fallan no por la lógica principal, sino por tratar el texto como si siempre viniera perfecto.",
    goal: "Usar métodos de string para limpiar, transformar y validar texto de entrada.",
    keyIdeas: [
      {
        title: "Texto sucio = datos sucios",
        description: "Espacios, mayúsculas y separadores inconsistentes pueden romper reglas simples si no los normalizas."
      },
      {
        title: "Separar para entender",
        description: "Con `split()` puedes convertir una línea cruda en partes con las que ya puedes trabajar."
      },
      {
        title: "Recomponer con criterio",
        description: "Después de limpiar y transformar, vuelves a unir en una salida que sí resulte útil."
      }
    ],
    explanation: [
      {
        title: "Qué problema resuelve este tema",
        body: "En la práctica, los datos no llegan impecables. Aprender a normalizar texto te evita muchos falsos errores."
      },
      {
        title: "Pequeños métodos, impacto grande",
        body: "Métodos como `strip()`, `lower()`, `replace()` o `split()` parecen simples, pero sostienen muchas utilidades reales."
      }
    ],
    example:
      "raw_tags = '  Python, Datos,  Automatización '\nclean_tags = [tag.strip().lower() for tag in raw_tags.split(',')]\nprint(clean_tags)\nprint(' | '.join(clean_tags))",
    practicePrompt: "Limpia una línea de categorías separadas por coma y muestra un resumen uniforme sin espacios extra.",
    practiceChecklist: [
      "Usa al menos dos métodos de string.",
      "Convierte una línea cruda en una lista limpia.",
      "Vuelve a mostrar el resultado con formato consistente."
    ],
    commonMistakes: [
      "Comparar textos sin normalizarlos antes.",
      "Olvidar quitar espacios al separar datos.",
      "Hacer reemplazos manuales que no escalan."
    ],
    bugChallenge: {
      prompt: "Este validador de etiquetas falla porque compara texto crudo contra texto limpio.",
      brokenCode:
        "category = '  Oficina '\nif category == 'oficina':\n    print('Coincide')",
      expectedLearning: "Antes de comparar strings, limpia y normaliza para que la regla trabaje sobre el dato correcto."
    },
    playground: {
      guidance: "Piensa como si recibieras texto real de una persona o de un archivo.",
      starterCode:
        "raw_categories = '  Python, Datos, automatizacion , Scripts '\n\n# Limpia la línea, convierte todo a minúsculas y muestra el resultado final",
      emptyOutputHint: "Tu salida debería mostrar categorías consistentes."
    },
    exerciseSlug: "limpiar-linea-de-categorias"
  }),
  lesson({
    slug: "archivos-y-registros-basicos",
    title: "Archivos y registros básicos",
    moduleSlug: "python-practico",
    order: 4,
    duration: "45 min",
    difficulty: "Beginner",
    summary: "Haz que el trabajo no desaparezca al terminar el script: guarda y lee datos de archivos de texto.",
    warmup: "La diferencia entre un script pasajero y una utilidad útil suele aparecer cuando empiezas a guardar resultados.",
    goal: "Leer y escribir archivos simples para persistir registros y construir reportes básicos.",
    keyIdeas: [
      {
        title: "Persistencia básica",
        description: "Guardar en archivo permite volver sobre datos después de cerrar el script."
      },
      {
        title: "Una línea, un registro",
        description: "Cuando el formato es simple y consistente, cada línea puede representar una entrada fácil de procesar."
      },
      {
        title: "Leer también exige limpiar",
        description: "Al abrir un archivo, todavía hay que recortar saltos de línea o dividir campos."
      }
    ],
    explanation: [
      {
        title: "Por qué este salto importa",
        body: "Aquí Python deja de sentirse escolar porque ya trabaja con información que permanece y puede revisarse después."
      },
      {
        title: "Formato mínimo viable",
        body: "No hace falta introducir bases de datos todavía. Un archivo de texto bien estructurado ya enseña mucho sobre flujo de datos."
      }
    ],
    example:
      "notes = ['Llamar proveedor', 'Revisar stock', 'Actualizar precios']\nwith open('notes.txt', 'w', encoding='utf-8') as file:\n    for note in notes:\n        file.write(note + '\\n')\n\nwith open('notes.txt', 'r', encoding='utf-8') as file:\n    saved_notes = [line.strip() for line in file]\nprint(saved_notes)",
    practicePrompt: "Guarda una lista de movimientos en un archivo y luego léela para mostrar cuántos registros hay.",
    practiceChecklist: [
      "Usa `with open(...)` para escribir.",
      "Vuelve a abrir el archivo y procesa sus líneas.",
      "Entrega un resumen final del contenido guardado."
    ],
    commonMistakes: [
      "Escribir sin saltos de línea y luego no poder separar registros.",
      "Leer líneas sin quitar `\\n`.",
      "Olvidar que el archivo puede estar vacío o tener formato irregular."
    ],
    bugChallenge: {
      prompt: "Este lector imprime líneas con ruido porque no limpia el contenido.",
      brokenCode:
        "with open('notes.txt', 'r', encoding='utf-8') as file:\n    for line in file:\n        print(f'Registro: {line}')",
      expectedLearning: "Leer un archivo no termina en `for line in file`: normalmente hay que limpiar y transformar."
    },
    playground: {
      guidance: "Guarda datos, vuelve a leerlos y entrega un cierre breve.",
      starterCode:
        "movements = ['venta,1200', 'compra,450', 'venta,980']\n\n# Escribe estos movimientos en un archivo.\n# Luego vuelve a leerlo y muestra cuántos registros recuperaste.",
      emptyOutputHint: "La salida debería confirmar que el archivo se escribió y se leyó."
    },
    exerciseSlug: "guardar-y-leer-movimientos"
  }),
  lesson({
    slug: "funciones-utiles-y-modulos-estandar",
    title: "Funciones mejor pensadas y módulos estándar",
    moduleSlug: "python-practico",
    order: 5,
    duration: "45 min",
    difficulty: "Beginner",
    summary: "Empieza a aprovechar mejor la biblioteca estándar y a separar funciones que transforman datos con claridad.",
    warmup: "Python trae herramientas listas para usar. Ignorarlas obliga a reescribir cosas que ya están resueltas.",
    goal: "Combinar funciones propias con módulos estándar para producir utilidades más limpias y confiables.",
    keyIdeas: [
      {
        title: "No reescribas lo obvio",
        description: "Módulos como `statistics`, `pathlib` o `json` existen para resolver tareas comunes con menos fricción."
      },
      {
        title: "Funciones que transforman",
        description: "Una buena función recibe un dato, lo procesa y devuelve un resultado concreto."
      },
      {
        title: "Piezas pequeñas, flujo mejor",
        description: "Cuando el script se divide en pasos visibles, se puede probar y explicar mejor."
      }
    ],
    explanation: [
      {
        title: "Biblioteca estándar con criterio",
        body: "No se trata de importar por importar. Se trata de usar la herramienta adecuada cuando ya existe y te ahorra ruido."
      },
      {
        title: "Funciones que viven bien juntas",
        body: "Un flujo claro suele tener una función para cargar, otra para transformar y otra para reportar."
      }
    ],
    example:
      "from statistics import mean\n\nscores = [8, 7, 9, 10]\n\ndef build_report(values):\n    return {\n        'count': len(values),\n        'average': round(mean(values), 2),\n        'highest': max(values)\n    }\n\nprint(build_report(scores))",
    practicePrompt: "Usa `statistics.mean` y funciones propias para resumir una lista de montos y clasificar el resultado.",
    practiceChecklist: [
      "Importa al menos una herramienta de la biblioteca estándar.",
      "Crea una función de transformación.",
      "Muestra un reporte final que combine varias métricas."
    ],
    commonMistakes: [
      "Importar algo y luego no usarlo.",
      "Meter lectura, cálculo y salida en una sola función.",
      "No devolver los datos transformados cuando harán falta más abajo."
    ],
    bugChallenge: {
      prompt: "Este reporte usa `mean`, pero la función no recibe el dato correcto.",
      brokenCode:
        "from statistics import mean\n\nvalues = [5, 7, 9]\n\ndef build_report():\n    return mean(value)\n\nprint(build_report())",
      expectedLearning: "Las funciones siguen necesitando parámetros claros aunque aproveches módulos estándar."
    },
    playground: {
      guidance: "Aprovecha la biblioteca estándar para concentrarte en la lógica de negocio, no en reimplementar todo.",
      starterCode:
        "from statistics import mean\n\namounts = [1200, 800, 950, 1300]\n\n# Crea una función que devuelva cantidad, promedio y máximo.\n# Luego agrega una clasificación simple del reporte.",
      emptyOutputHint: "Tu salida debería parecer un reporte corto, no una lista suelta."
    },
    exerciseSlug: "crear-reporte-con-statistics"
  }),
  lesson({
    slug: "capstone-intermedio-utilidad-de-registros",
    title: "Capstone intermedio · Utilidad de registros",
    moduleSlug: "python-practico",
    order: 6,
    duration: "65 min",
    difficulty: "Beginner",
    summary: "Integra colecciones, strings, archivos y funciones para producir una utilidad que registra, limpia y resume datos.",
    warmup: "Este cierre ya no se siente como ejercicio escolar: trabaja con entradas, transformación de datos y persistencia.",
    goal: "Construir una utilidad de consola que lea, guarde y resuma registros reales de forma simple.",
    keyIdeas: [
      {
        title: "Datos con flujo completo",
        description: "Recibes datos, los limpias, los guardas y luego construyes un resumen. Esa cadena ya se parece a una herramienta real."
      },
      {
        title: "Separar etapas",
        description: "Cargar, limpiar y reportar pueden vivir en funciones distintas para que el flujo no se vuelva opaco."
      },
      {
        title: "Capstone con intención",
        description: "La consigna ya integra varios temas porque cada uno cumple una parte del trabajo total."
      }
    ],
    explanation: [
      {
        title: "Qué debe cambiar respecto al módulo 1",
        body: "Ahora el programa maneja colecciones y archivos. El salto no es más sintaxis: es más flujo de datos y mejor organización."
      },
      {
        title: "Cómo saber si está bien resuelto",
        body: "Revisa si podrías explicarle el script a otra persona en tres pasos claros: cargar, transformar, reportar."
      }
    ],
    example:
      "def parse_line(line):\n    category, amount = line.strip().split(',')\n    return {'category': category.strip().lower(), 'amount': float(amount)}\n\nrecords = [parse_line('venta,1200'), parse_line('compra,450')]\nprint(records)",
    practicePrompt: "Construye una utilidad que guarde movimientos simples, los vuelva a leer y muestre total de ventas, total de compras y balance.",
    practiceChecklist: [
      "Usa al menos una función para parsear o limpiar líneas.",
      "Lee y escribe un archivo.",
      "Entrega un reporte con varias métricas, no solo un total."
    ],
    commonMistakes: [
      "Mezclar el formato del archivo con la lógica del reporte en un solo bloque.",
      "No normalizar la categoría antes de clasificarla.",
      "No considerar líneas vacías o mal formadas."
    ],
    bugChallenge: {
      prompt: "Este parser asume demasiado sobre la línea de entrada y rompe el flujo del reporte.",
      brokenCode:
        "def parse_line(line):\n    category, amount, note = line.split(',')\n    return {'category': category, 'amount': float(amount)}",
      expectedLearning: "Cuando diseñas utilidades de datos, el formato esperado debe coincidir con lo que realmente guardas."
    },
    playground: {
      guidance: "Piensa en una herramienta de trabajo simple: registrar, recuperar y resumir.",
      starterCode:
        "def parse_line(line):\n    category, amount = line.strip().split(',')\n    return {'category': category.strip().lower(), 'amount': float(amount)}\n\nsample_lines = ['venta,1200', 'compra,450', 'venta,980']\n\n# Guarda estas líneas en un archivo, vuelve a leerlas y construye un balance.",
      emptyOutputHint: "El resultado final debería mostrar ventas, compras y balance."
    },
    exerciseSlug: "capstone-utilidad-de-registros"
  }),
  lesson({
    slug: "scripts-mas-limpios-con-main",
    title: "Scripts más limpios con `main()` y helpers",
    moduleSlug: "python-estructurado",
    order: 1,
    duration: "45 min",
    difficulty: "Beginner",
    summary: "Empieza el tercer módulo ordenando scripts largos en funciones auxiliares y un punto de entrada claro.",
    warmup: "Cuando un script crece, la claridad deja de ser un detalle: se vuelve parte del producto.",
    goal: "Separar el flujo principal en `main()` y mover tareas puntuales a funciones helper.",
    keyIdeas: [
      {
        title: "`main()` muestra el flujo",
        description: "El punto de entrada debería decir qué hace el programa sin obligarte a leer cada detalle de implementación."
      },
      {
        title: "Helpers con nombre concreto",
        description: "Las funciones auxiliares deben encargarse de tareas pequeñas y reconocibles."
      },
      {
        title: "Ordenar también es diseñar",
        description: "La estructura del script comunica tanto como la sintaxis."
      }
    ],
    explanation: [
      {
        title: "Qué gana el código con esto",
        body: "Cuando el flujo principal está arriba y las piezas viven abajo con nombres claros, leer el programa cuesta mucho menos."
      },
      {
        title: "No es una regla estética",
        body: "Separar `main()` y helpers facilita depurar, probar y mover el código a más de un archivo cuando haga falta."
      }
    ],
    example:
      "def parse_amount(raw_value):\n    return float(raw_value.strip())\n\n\ndef build_summary(amounts):\n    return {'count': len(amounts), 'total': sum(amounts)}\n\n\ndef main():\n    raw_values = ['1200', '800', '950']\n    amounts = [parse_amount(value) for value in raw_values]\n    print(build_summary(amounts))\n\n\nif __name__ == '__main__':\n    main()",
    practicePrompt: "Refactoriza un script de reporte para dejar el flujo principal en `main()` y mover parsing y resumen a helpers.",
    practiceChecklist: [
      "Crea `main()` como punto de entrada.",
      "Extrae al menos dos helpers con nombres claros.",
      "Deja el flujo principal corto y legible."
    ],
    commonMistakes: [
      "Crear helpers que siguen haciendo demasiadas cosas.",
      "Mover código a funciones sin mejorar los nombres.",
      "Dejar la lógica principal repartida y volver más difícil seguir el flujo."
    ],
    bugChallenge: {
      prompt: "Este script tiene helpers, pero el flujo principal sigue mezclado y confuso.",
      brokenCode:
        "def clean_name(value):\n    return value.strip().title()\n\nnames = ['  ana', 'luis  ']\nfor raw_name in names:\n    print(clean_name(raw_name))\nprint('Total:', len(names))",
      expectedLearning: "No basta con definir funciones: el flujo de alto nivel también debe quedar agrupado y visible."
    },
    playground: {
      guidance: "Tu objetivo aquí no es agregar lógica nueva, sino ordenar un script que ya hace varias cosas.",
      starterCode:
        "def parse_amount(raw_value):\n    return float(raw_value.strip())\n\nvalues = ['1200', '800', '950']\n\n# Crea build_summary() y main().\n# Luego usa el bloque if __name__ == '__main__': para ejecutar el flujo.",
      emptyOutputHint: "Tu salida debería seguir funcionando, pero con una estructura más limpia."
    },
    exerciseSlug: "reordenar-script-con-main"
  }),
  lesson({
    slug: "clases-cuando-aportan",
    title: "Clases cuando realmente aportan",
    moduleSlug: "python-estructurado",
    order: 2,
    duration: "45 min",
    difficulty: "Beginner",
    summary: "Introduce POO solo donde mejora el modelo mental del problema, no como ornamento obligatorio.",
    warmup: "Una clase vale cuando aclara qué representa un dato y qué operaciones razonables puede hacer.",
    goal: "Crear una clase simple para modelar registros con comportamiento asociado.",
    keyIdeas: [
      {
        title: "Clase = modelo con estado y comportamiento",
        description: "Sirve cuando varios valores y reglas pertenecen naturalmente a la misma entidad."
      },
      {
        title: "POO mínima y útil",
        description: "No necesitas herencia ni jerarquías complejas para que una clase aporte claridad."
      },
      {
        title: "Métodos como acciones del modelo",
        description: "Un buen método expresa algo que esa entidad sabe hacer o calcular."
      }
    ],
    explanation: [
      {
        title: "Cuándo sí usar una clase",
        body: "Si repites diccionarios con las mismas claves y varias operaciones dependen de esos datos juntos, una clase puede limpiar mucho el diseño."
      },
      {
        title: "Cuándo no hace falta",
        body: "Si solo quieres agrupar dos valores y hacer una cuenta simple una vez, probablemente una función alcance."
      }
    ],
    example:
      "class Expense:\n    def __init__(self, category, amount):\n        self.category = category\n        self.amount = amount\n\n    def is_large(self):\n        return self.amount >= 1000\n\nexpense = Expense('equipo', 1200)\nprint(expense.category)\nprint(expense.is_large())",
    practicePrompt: "Modela un movimiento con clase: categoría, monto y un método que indique si requiere revisión.",
    practiceChecklist: [
      "Define una clase simple con `__init__`.",
      "Agrega al menos un método útil.",
      "Usa instancias para producir una salida legible."
    ],
    commonMistakes: [
      "Crear una clase sin comportamiento útil.",
      "Confundir atributos de instancia con variables sueltas.",
      "Usar una clase donde una función corta habría sido suficiente."
    ],
    bugChallenge: {
      prompt: "Esta clase intenta usar atributos que nunca se guardaron bien.",
      brokenCode:
        "class Expense:\n    def __init__(self, category, amount):\n        category = category\n        amount = amount\n\n    def describe(self):\n        return f'{self.category}: {self.amount}'",
      expectedLearning: "Dentro de una clase, `self` conecta los datos de cada instancia con sus métodos."
    },
    playground: {
      guidance: "Usa una clase solo porque el dominio lo pide, no por obligación.",
      starterCode:
        "class Movement:\n    def __init__(self, category, amount):\n        self.category = category\n        self.amount = amount\n\n    # Agrega un método requires_review()\n    # y otro método summary() si te resulta útil.",
      emptyOutputHint: "Crea una o dos instancias para probar tu clase."
    },
    exerciseSlug: "modelar-movimiento-con-clase"
  }),
  lesson({
    slug: "json-y-datos-estructurados",
    title: "JSON y datos más estructurados",
    moduleSlug: "python-estructurado",
    order: 3,
    duration: "45 min",
    difficulty: "Beginner",
    summary: "Aprende a serializar y recuperar datos estructurados con JSON para dar un paso más serio en persistencia.",
    warmup: "Cuando los registros tienen varias partes, guardar texto plano arbitrario empieza a quedarse corto.",
    goal: "Leer y escribir JSON para persistir listas de registros con más estructura.",
    keyIdeas: [
      {
        title: "JSON conserva forma",
        description: "Listas, diccionarios y estructuras anidadas se guardan sin perder sus claves ni su jerarquía básica."
      },
      {
        title: "Serializar y deserializar",
        description: "Guardar y recuperar JSON implica traducir entre estructuras de Python y un formato portable."
      },
      {
        title: "Más estructura, mejor mantenimiento",
        description: "Cuando el dato tiene forma clara, las transformaciones y validaciones son más defendibles."
      }
    ],
    explanation: [
      {
        title: "Por qué JSON importa aquí",
        body: "Este formato es simple de leer, portable y suficiente para muchos proyectos iniciales que necesitan persistencia estructurada."
      },
      {
        title: "Qué no resuelve por sí solo",
        body: "JSON no valida mágicamente tus datos. Aun así, te da una base mucho mejor que una línea de texto armada a mano."
      }
    ],
    example:
      "import json\n\nrecords = [\n    {'category': 'venta', 'amount': 1200},\n    {'category': 'compra', 'amount': 450}\n]\n\nwith open('movements.json', 'w', encoding='utf-8') as file:\n    json.dump(records, file, ensure_ascii=False, indent=2)\n\nwith open('movements.json', 'r', encoding='utf-8') as file:\n    loaded = json.load(file)\n\nprint(loaded)",
    practicePrompt: "Guarda una lista de registros en JSON y vuelve a cargarla para mostrar cuántos elementos recuperaste.",
    practiceChecklist: [
      "Importa `json`.",
      "Usa `json.dump()` y `json.load()`.",
      "Muestra una salida final que confirme lectura y cantidad de registros."
    ],
    commonMistakes: [
      "Intentar guardar texto plano cuando el dato ya es una lista de diccionarios.",
      "Leer el archivo pero no convertirlo con `json.load()`.",
      "Confundir el string JSON con la estructura de Python."
    ],
    bugChallenge: {
      prompt: "Este script escribe JSON, pero luego lo trata como si ya fuera una lista cargada.",
      brokenCode:
        "import json\n\nwith open('data.json', 'w', encoding='utf-8') as file:\n    json.dump([{'amount': 50}], file)\n\nwith open('data.json', 'r', encoding='utf-8') as file:\n    data = file.read()\n\nprint(data[0]['amount'])",
      expectedLearning: "Leer texto desde archivo no equivale a recuperar la estructura. Falta deserializar."
    },
    playground: {
      guidance: "Usa JSON cuando el dato ya tiene estructura y quieres mantenerla.",
      starterCode:
        "import json\n\nrecords = [\n    {'category': 'venta', 'amount': 1200},\n    {'category': 'compra', 'amount': 450},\n    {'category': 'venta', 'amount': 980}\n]\n\n# Guarda records en un archivo JSON, vuelve a cargarlo y muestra la cantidad de registros.",
      emptyOutputHint: "La salida debería confirmar que el JSON se guardó y se leyó."
    },
    exerciseSlug: "persistir-registros-en-json"
  }),
  lesson({
    slug: "parsing-validacion-y-excepciones",
    title: "Parsing, validación y excepciones básicas",
    moduleSlug: "python-estructurado",
    order: 4,
    duration: "50 min",
    difficulty: "Beginner",
    summary: "Haz que el programa trate mejor datos imperfectos: parsea, valida y maneja fallos sin romper todo el flujo.",
    warmup: "Una herramienta más seria no asume que todos los datos vienen perfectos. Aprende a convivir con errores previsibles.",
    goal: "Parsear datos de entrada y manejar errores básicos con validaciones y `try/except`.",
    keyIdeas: [
      {
        title: "Parsear es interpretar",
        description: "Un parser toma texto crudo y decide si puede convertirlo en un dato útil."
      },
      {
        title: "Fallar bien también es parte del producto",
        description: "No siempre puedes evitar errores, pero sí puedes controlarlos y responder con mensajes útiles."
      },
      {
        title: "Excepción no es control de flujo por defecto",
        description: "Úsala para casos problemáticos o conversión riesgosa, no para esconder lógica confusa."
      }
    ],
    explanation: [
      {
        title: "Qué cambia aquí",
        body: "El foco deja de ser solo el caso feliz. Empiezas a diseñar qué pasa cuando el dato llega mal o incompleto."
      },
      {
        title: "Manejo básico, no barroco",
        body: "Con `try/except` simple y validaciones claras ya puedes mejorar mucho la robustez de un script inicial."
      }
    ],
    example:
      "def parse_amount(raw_value):\n    try:\n        amount = float(raw_value)\n    except ValueError:\n        return None\n    return amount if amount >= 0 else None\n\nprint(parse_amount('120'))\nprint(parse_amount('abc'))",
    practicePrompt: "Crea un parser de montos que devuelva `None` ante valores inválidos o negativos y úsalo para filtrar una lista de entradas.",
    practiceChecklist: [
      "Usa `try/except` para la conversión.",
      "Valida el valor después de convertirlo.",
      "Muestra qué entradas fueron aceptadas y cuáles no."
    ],
    commonMistakes: [
      "Atrapar cualquier error sin explicar nada.",
      "Usar excepciones para tapar una validación que podría escribirse mejor.",
      "No devolver un resultado consistente cuando algo falla."
    ],
    bugChallenge: {
      prompt: "Este parser oculta el error, pero devuelve un tipo incoherente y complica todo el resto.",
      brokenCode:
        "def parse_amount(raw_value):\n    try:\n        return float(raw_value)\n    except:\n        return 'error'",
      expectedLearning: "Manejar errores también implica devolver un resultado predecible para el resto del programa."
    },
    playground: {
      guidance: "Trata datos imperfectos sin romper todo el flujo.",
      starterCode:
        "raw_values = ['1200', '450', 'error', '-25', '980']\n\n# Crea parse_amount() con try/except.\n# Después recorre raw_values y arma una lista solo con montos válidos.",
      emptyOutputHint: "Tu salida debería mostrar montos válidos y un conteo de descartes."
    },
    exerciseSlug: "parsear-montos-con-validacion"
  }),
  lesson({
    slug: "arquitectura-multiarchivo-con-criterio",
    title: "Pensar una herramienta multiarchivo con criterio",
    moduleSlug: "python-estructurado",
    order: 5,
    duration: "40 min",
    difficulty: "Beginner",
    summary: "Antes de separar archivos, aprende a decidir qué responsabilidad vive en cada uno y cómo se conectan.",
    warmup: "Separar por separar no mejora nada. La estructura multiarchivo vale cuando distribuye responsabilidades con claridad.",
    goal: "Diseñar una arquitectura básica de varios archivos y justificar por qué cada parte vive donde vive.",
    keyIdeas: [
      {
        title: "Entrada, almacenamiento y reporte no son lo mismo",
        description: "Cuando el proyecto crece, conviene separar el flujo principal de la persistencia y de la lógica de reportes."
      },
      {
        title: "Cada archivo debería tener un motivo claro",
        description: "Si no puedes explicar por qué existe un archivo, probablemente la separación todavía no está madura."
      },
      {
        title: "Diseño antes de mover código",
        description: "Primero decides responsabilidades. Después importas y conectas."
      }
    ],
    explanation: [
      {
        title: "Qué debería salir de esta lección",
        body: "No solo que sepas escribir `import`. Queremos que sepas decidir qué conviene poner en `main.py`, en un módulo de almacenamiento o en uno de reportes."
      },
      {
        title: "Por qué esto cierra la base",
        body: "Aquí el foco ya es de construcción: pensar piezas reutilizables y límites claros, no solo resolver una consigna puntual."
      }
    ],
    example:
      "# main.py\nfrom storage import load_records\nfrom reports import build_balance\n\nrecords = load_records('movements.json')\nprint(build_balance(records))\n\n# storage.py\nimport json\n\ndef load_records(path):\n    with open(path, 'r', encoding='utf-8') as file:\n        return json.load(file)\n\n# reports.py\ndef build_balance(records):\n    total = sum(item['amount'] for item in records)\n    return {'count': len(records), 'total': total}",
    practicePrompt: "Propón cómo separarías una herramienta de gastos en `main.py`, `storage.py` y `reports.py` sin duplicar responsabilidades.",
    practiceChecklist: [
      "Explica qué hace cada archivo.",
      "Menciona qué módulo importa a cuál y por qué.",
      "Separa flujo principal, persistencia y reportes."
    ],
    commonMistakes: [
      "Poner toda la lógica en `main.py` y dejar los demás archivos como wrappers vacíos.",
      "Crear archivos sin responsabilidad clara.",
      "Confundir importar funciones con copiar código."
    ],
    bugChallenge: {
      prompt: "Este diseño deja el proyecto partido en archivos, pero casi toda la lógica sigue concentrada en uno solo.",
      brokenCode:
        "# main.py\nfrom storage import save_record\n\nrecords = []\n# aquí se parsea, se valida, se resume y además se guarda\n\n# storage.py\ndef save_record(path, record):\n    pass",
      expectedLearning: "Separar archivos no mejora nada si las responsabilidades siguen mezcladas."
    },
    playground: {
      guidance: "Lee el ejemplo, piensa en responsabilidades y escribe un borrador de arquitectura.",
      starterCode:
        "# Piensa en una herramienta de gastos.\n# No necesitas ejecutar una solución compleja aquí.\n# Usa este espacio para anotar cómo separarías responsabilidades si el proyecto creciera.",
      emptyOutputHint: "Este playground sirve como borrador para tu arquitectura."
    },
    exerciseSlug: "disenar-arquitectura-multiarchivo"
  }),
  lesson({
    slug: "capstone-final-analizador-de-movimientos",
    title: "Capstone final · Analizador de movimientos",
    moduleSlug: "python-estructurado",
    order: 6,
    duration: "75 min",
    difficulty: "Beginner",
    summary: "Cierra la base construyendo una herramienta más seria: registros estructurados, JSON, parsing, reportes y diseño limpio.",
    warmup: "Este cierre ya debería sentirse como proyecto pequeño: tiene flujo, datos, validación y una estructura que podrías explicar en portfolio.",
    goal: "Construir una herramienta de análisis de movimientos que cargue datos, descarte entradas inválidas y produzca reportes útiles.",
    keyIdeas: [
      {
        title: "Proyecto, no consigna aislada",
        description: "Cada parte existe porque aporta al flujo completo: cargar, validar, modelar y reportar."
      },
      {
        title: "Código explicable",
        description: "Una base defendible no es solo que funcione: también es que puedas explicar su estructura."
      },
      {
        title: "Listo para crecer",
        description: "Aunque el ejercicio viva en un archivo, su diseño debe dejar clara la separación futura en módulos."
      }
    ],
    explanation: [
      {
        title: "Qué integra este proyecto",
        body: "Funciones helpers, estructura clara, JSON, parsing robusto, una clase simple para el modelo y reportes finales con datos ya limpios."
      },
      {
        title: "Qué lo vuelve mostrable",
        body: "Tiene un problema entendible, decisiones visibles y un resultado final que ya se parece a una herramienta de trabajo simple."
      }
    ],
    example:
      "class Movement:\n    def __init__(self, category, amount):\n        self.category = category\n        self.amount = amount\n\n    def is_income(self):\n        return self.category == 'ingreso'\n\n\ndef parse_record(raw_record):\n    try:\n        amount = float(raw_record['amount'])\n    except (KeyError, ValueError, TypeError):\n        return None\n    category = str(raw_record.get('category', '')).strip().lower()\n    if category not in {'ingreso', 'egreso'}:\n        return None\n    return Movement(category, amount)\n\nprint(parse_record({'category': 'ingreso', 'amount': '1200'}))",
    practicePrompt: "Construye un analizador que cargue movimientos desde JSON, convierta solo los válidos a objetos, calcule ingresos, egresos y balance, y entregue un resumen final.",
    practiceChecklist: [
      "Usa una clase simple para representar un movimiento.",
      "Parsea datos y descarta registros inválidos.",
      "Entrega un reporte final con varias métricas."
    ],
    commonMistakes: [
      "No separar carga, parsing y reporte.",
      "Asumir que todo el JSON trae datos correctos.",
      "Cerrar el proyecto con una salida pobre o poco explicable."
    ],
    bugChallenge: {
      prompt: "Este analizador intenta usar datos JSON sin validar y rompe cuando falta una clave.",
      brokenCode:
        "def parse_record(raw_record):\n    amount = float(raw_record['amount'])\n    category = raw_record['category']\n    return {'category': category, 'amount': amount}",
      expectedLearning: "En un proyecto final, la robustez mínima importa. No puedes depender solo del caso ideal."
    },
    playground: {
      guidance: "Piensa este cierre como una herramienta que podrías mostrar y explicar.",
      starterCode:
        "import json\n\nclass Movement:\n    def __init__(self, category, amount):\n        self.category = category\n        self.amount = amount\n\n    def is_income(self):\n        return self.category == 'ingreso'\n\nsample_records = [\n    {'category': 'ingreso', 'amount': '1500'},\n    {'category': 'egreso', 'amount': '430'},\n    {'category': 'egreso', 'amount': 'texto'},\n    {'category': 'ingreso', 'amount': '980'}\n]\n\n# Crea parse_record(), carga o guarda JSON si lo necesitas,\n# convierte solo registros válidos y arma un reporte final.",
      emptyOutputHint: "Tu salida debería mostrar ingresos, egresos, balance y cantidad de registros válidos."
    },
    exerciseSlug: "capstone-analizador-de-movimientos"
  })
];

export const courseExercises: ExerciseData[] = [
  codeExercise({
    slug: "armar-resumen-de-sesion",
    title: "Armar un resumen de sesión",
    exerciseType: "guided_code",
    moduleSlug: "python-inicial",
    lessonSlug: "leer-y-producir-salidas",
    order: 1,
    duration: "20 min",
    summary: "Convierte tres variables en una salida de consola legible y útil.",
    prompt: "Completa un resumen de sesión con nombre, minutos y foco principal.",
    responseLabel: "Tu script",
    responsePlaceholder:
      "student = 'Luna'\nminutes = 45\nfocus = 'repaso de funciones'\n\nprint(...)\nprint(...)\nprint(...)",
    instructions: [
      "Muestra tres líneas de salida: nombre, minutos y foco.",
      "Usa las variables dadas y deja etiquetas claras en la consola.",
      "No cambies los valores base; mejora la salida."
    ],
    hints: [
      "Puedes usar `f-strings` para combinar texto y variables.",
      "Piensa en un resumen que otra persona pueda leer rápido."
    ],
    starterCode:
      "student = 'Luna'\nminutes = 45\nfocus = 'repaso de funciones'\n\n# Completa el resumen aquí",
    successCriteria: [
      "La salida usa las tres variables.",
      "Hay varias líneas legibles.",
      "El script corre sin errores."
    ],
    evaluator: {
      type: "rule_based",
      minLength: 40,
      passingScore: 3,
      rules: [
        {
          id: "uses-print",
          label: "Usa print para mostrar el resumen",
          type: "occurrences_at_least",
          value: "print(",
          count: 3,
          feedbackWhenMissing: "Muestra el resumen en varias líneas para que sea fácil de leer."
        },
        {
          id: "mentions-student",
          label: "Usa el nombre de la persona",
          type: "includes",
          value: "student",
          feedbackWhenMissing: "Incluye la variable `student` dentro del resumen."
        },
        {
          id: "mentions-minutes",
          label: "Usa los minutos planificados",
          type: "includes",
          value: "minutes",
          feedbackWhenMissing: "Incluye la variable `minutes` para mostrar la duración."
        },
        {
          id: "mentions-focus",
          label: "Usa el foco de la sesión",
          type: "includes",
          value: "focus",
          feedbackWhenMissing: "Incluye la variable `focus` en la salida."
        }
      ]
    },
    playground: {
      guidance: "Entrega una salida con forma de herramienta simple, no una frase suelta.",
      starterCode:
        "student = 'Luna'\nminutes = 45\nfocus = 'repaso de funciones'\n\n# Completa el resumen aquí"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "crear-cotizador-simple",
    title: "Crear un cotizador simple",
    exerciseType: "guided_code",
    moduleSlug: "python-inicial",
    lessonSlug: "variables-input-y-operadores",
    order: 2,
    duration: "25 min",
    summary: "Pide datos, convierte tipos y calcula un total con descuento.",
    prompt: "Construye un cotizador que pida horas, tarifa y descuento porcentual, y muestre subtotal, descuento y total final.",
    responseLabel: "Tu solución",
    responsePlaceholder:
      "project = input('Proyecto: ')\nhours = float(input('Horas trabajadas: '))\nrate = float(input('Tarifa por hora: '))\ndiscount = float(input('Descuento (%): '))\n\n# calcula y muestra el total",
    instructions: [
      "Pide cuatro datos: proyecto, horas, tarifa y descuento.",
      "Convierte a `float` los datos numéricos antes de calcular.",
      "Muestra subtotal, descuento y total final."
    ],
    hints: [
      "Puedes guardar el subtotal y el descuento en variables intermedias.",
      "Usa formato `:.2f` si quieres mostrar moneda más limpia."
    ],
    starterCode:
      "project = input('Proyecto: ')\nhours = float(input('Horas trabajadas: '))\nrate = float(input('Tarifa por hora: '))\ndiscount = float(input('Descuento (%): '))\n\n# calcula subtotal, descuento aplicado y total final",
    successCriteria: [
      "Usa `input()` y conversión numérica.",
      "Hace las cuentas correctas en variables claras.",
      "La salida final explica qué se está mostrando."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 100,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "uses-input",
          label: "Pide datos con input",
          pattern: "input\\(",
          feedbackWhenMissing: "La consigna pide una herramienta que reciba datos."
        },
        {
          id: "converts-to-float",
          label: "Convierte datos numéricos",
          pattern: "float\\(",
          feedbackWhenMissing: "Convierte horas, tarifa o descuento antes de operar."
        },
        {
          id: "subtotal-var",
          label: "Calcula subtotal",
          pattern: "subtotal\\s*=",
          feedbackWhenMissing: "Guarda el subtotal en una variable visible."
        },
        {
          id: "discount-var",
          label: "Calcula descuento",
          pattern: "discount_value\\s*=|discount_amount\\s*=|discount_total\\s*=",
          feedbackWhenMissing: "Calcula el descuento aplicado en una variable intermedia."
        },
        {
          id: "final-total",
          label: "Calcula total final",
          pattern: "final_total\\s*=|total\\s*=",
          feedbackWhenMissing: "Guarda el total final para mostrarlo con claridad."
        },
        {
          id: "prints-report",
          label: "Imprime el reporte",
          pattern: "print\\(",
          feedbackWhenMissing: "El script debe mostrar el resultado final."
        }
      ]
    },
    playground: {
      guidance: "Haz una herramienta breve que transforme entrada en un resultado claro.",
      starterCode:
        "project = input('Proyecto: ')\nhours = float(input('Horas trabajadas: '))\nrate = float(input('Tarifa por hora: '))\ndiscount = float(input('Descuento (%): '))\n\n# calcula subtotal, descuento aplicado y total final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "validar-tarifa-de-envio",
    title: "Validar una tarifa de envío",
    exerciseType: "guided_code",
    moduleSlug: "python-inicial",
    lessonSlug: "condicionales-y-validacion",
    order: 3,
    duration: "25 min",
    summary: "Usa condicionales para validar un dato y decidir la tarifa correcta.",
    prompt: "Crea un verificador de envío que detecte peso inválido, aplique recargo si supera 10 kg y confirme tarifa base en el resto.",
    responseLabel: "Tu lógica de validación",
    responsePlaceholder:
      "weight = float(input('Peso del pedido: '))\nbase_price = 2500\n\nif ...:\n    print(...)",
    instructions: [
      "Pide el peso del pedido con `input()`.",
      "Si el peso es menor o igual a 0, informa que es inválido.",
      "Si supera 10 kg, aplica un recargo del 15%. En otro caso, deja la tarifa base."
    ],
    hints: [
      "Valida primero el dato antes de calcular la tarifa.",
      "Puedes guardar la tarifa final en una variable antes de imprimir."
    ],
    starterCode:
      "weight = float(input('Peso del pedido: '))\nbase_price = 2500\n\n# valida el peso y decide la tarifa final",
    successCriteria: [
      "Valida el dato antes de calcular.",
      "Tiene al menos dos ramas claras.",
      "La salida cambia según el caso."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 80,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "uses-if",
          label: "Usa condicionales",
          pattern: "\\bif\\b",
          feedbackWhenMissing: "Necesitas una condición principal para validar el dato."
        },
        {
          id: "handles-invalid",
          label: "Detecta peso inválido",
          pattern: "weight\\s*<=\\s*0|weight\\s*<\\s*0",
          feedbackWhenMissing: "Valida que el peso no sea negativo ni cero."
        },
        {
          id: "handles-surcharge",
          label: "Detecta peso con recargo",
          pattern: "weight\\s*>\\s*10",
          feedbackWhenMissing: "Hace falta la rama que aplica recargo."
        },
        {
          id: "prints-result",
          label: "Informa el resultado",
          pattern: "print\\(",
          feedbackWhenMissing: "El usuario necesita ver qué tarifa quedó."
        },
        {
          id: "uses-else",
          label: "Cubre el caso base",
          pattern: "\\belse\\b|\\belif\\b",
          feedbackWhenMissing: "Cubre también el caso válido sin recargo."
        }
      ]
    },
    playground: {
      guidance: "Haz que el programa rechace datos absurdos antes de seguir.",
      starterCode:
        "weight = float(input('Peso del pedido: '))\nbase_price = 2500\n\n# valida el peso y decide la tarifa final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "registrar-ventas-en-bucle",
    title: "Registrar ventas en un bucle",
    exerciseType: "guided_code",
    moduleSlug: "python-inicial",
    lessonSlug: "bucles-con-acumulacion",
    order: 4,
    duration: "30 min",
    summary: "Registra varios tickets, suma montos y cuenta los que superan un umbral.",
    prompt: "Pide cinco montos, suma el total y cuenta cuántos tickets superan 1000.",
    responseLabel: "Tu registrador",
    responsePlaceholder:
      "total = 0\nhigh_sales = 0\nfor ticket in range(5):\n    amount = float(input(...))\n    ...",
    instructions: [
      "Usa un `for` de cinco iteraciones.",
      "Suma todos los montos en `total`.",
      "Cuenta en otra variable cuántos tickets superan 1000."
    ],
    hints: [
      "El contador debe empezar en cero y solo cambiar cuando la condición se cumple.",
      "Imprime el resumen al final, fuera del bucle."
    ],
    starterCode:
      "total = 0\nhigh_sales = 0\n\nfor ticket in range(5):\n    amount = float(input(f'Monto del ticket {ticket + 1}: '))\n    # actualiza total y high_sales\n\n# imprime el resumen final",
    successCriteria: [
      "Usa un bucle de varias iteraciones.",
      "Mantiene separado el total del contador.",
      "Entrega un cierre final con ambas métricas."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 100,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "uses-for",
          label: "Usa un for para repetir",
          pattern: "\\bfor\\b.+\\bin\\b.+range\\(",
          feedbackWhenMissing: "El ejercicio pide repetir sin copiar líneas manualmente."
        },
        {
          id: "updates-total",
          label: "Actualiza el total",
          pattern: "total\\s*\\+=\\s*amount",
          feedbackWhenMissing: "Acumula los montos en `total`."
        },
        {
          id: "uses-condition",
          label: "Cuenta tickets altos con condición",
          pattern: "\\bif\\b.+1000",
          feedbackWhenMissing: "Hace falta una condición para detectar tickets altos."
        },
        {
          id: "updates-counter",
          label: "Actualiza el contador",
          pattern: "high_sales\\s*\\+=",
          feedbackWhenMissing: "Suma al contador cuando el ticket supera el umbral."
        },
        {
          id: "prints-summary",
          label: "Imprime un resumen final",
          pattern: "print\\(",
          feedbackWhenMissing: "Cierra el script con un resumen legible."
        }
      ]
    },
    playground: {
      guidance: "La meta es cerrar con un resumen, no imprimir cada línea sin consolidar.",
      starterCode:
        "total = 0\nhigh_sales = 0\n\nfor ticket in range(5):\n    amount = float(input(f'Monto del ticket {ticket + 1}: '))\n    # actualiza total y high_sales\n\n# imprime el resumen final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "refactorizar-cotizador-con-funciones",
    title: "Refactorizar un cotizador con funciones",
    exerciseType: "guided_code",
    moduleSlug: "python-inicial",
    lessonSlug: "funciones-y-descomposicion",
    order: 5,
    duration: "30 min",
    summary: "Separa cálculo y decisión en funciones pequeñas y reutilizables.",
    prompt: "Crea al menos dos funciones: una para calcular el total y otra para decidir si el trabajo entra en prioridad.",
    responseLabel: "Tus funciones",
    responsePlaceholder:
      "def calculate_total(...):\n    ...\n\ndef is_priority(...):\n    ...",
    instructions: [
      "Crea una función de cálculo y otra de decisión.",
      "Usa `return` en ambas.",
      "Muestra el resultado final desde el flujo principal."
    ],
    hints: [
      "No hace falta que una función pida datos por `input()` si puede recibir parámetros.",
      "Mantén cada función enfocada en una sola tarea."
    ],
    starterCode:
      "def calculate_total(hours, rate):\n    return hours * rate\n\n# agrega una función que decida si el trabajo entra en prioridad\n# luego imprime un resumen final",
    successCriteria: [
      "Define dos funciones con nombres claros.",
      "Usa `return` para reutilizar resultados.",
      "El flujo principal queda corto y entendible."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-two-functions",
          label: "Define al menos dos funciones",
          pattern: "def\\s+\\w+\\(.*\\):[\\s\\S]*def\\s+\\w+\\(",
          feedbackWhenMissing: "Crea dos funciones separadas con responsabilidades distintas."
        },
        {
          id: "uses-return",
          label: "Usa return",
          pattern: "\\breturn\\b",
          feedbackWhenMissing: "Devuelve resultados para poder reutilizarlos."
        },
        {
          id: "priority-function",
          label: "Define lógica de prioridad",
          pattern: "def\\s+(is_priority|priority_label|classify_priority)\\(",
          feedbackWhenMissing: "Agrega una función que decida si el trabajo requiere prioridad."
        },
        {
          id: "calls-functions",
          label: "Llama a las funciones",
          pattern: "\\w+\\s*=\\s*\\w+\\(",
          feedbackWhenMissing: "No basta con definir funciones: también debes usarlas."
        },
        {
          id: "prints-result",
          label: "Imprime el resultado final",
          pattern: "print\\(",
          feedbackWhenMissing: "Muestra un cierre final con el cálculo y la prioridad."
        }
      ]
    },
    playground: {
      guidance: "Usa funciones para ordenar el flujo, no para esconderlo.",
      starterCode:
        "def calculate_total(hours, rate):\n    return hours * rate\n\n# agrega una función que decida si el trabajo entra en prioridad\n# luego imprime un resumen final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "capstone-planificador-de-estudio",
    title: "Capstone · Planificador de estudio",
    exerciseType: "guided_code",
    moduleSlug: "python-inicial",
    lessonSlug: "capstone-inicial-planificador",
    order: 6,
    duration: "40 min",
    summary: "Integra entradas, validación, decisiones y funciones en una mini app de consola útil.",
    prompt: "Construye un planificador que pida nombre, minutos disponibles y tareas pendientes, clasifique la carga y sugiera bloques de trabajo.",
    responseLabel: "Tu mini app",
    responsePlaceholder:
      "def classify_load(tasks):\n    ...\n\ndef suggest_blocks(minutes):\n    ...\n\nname = input('Nombre: ')\n...",
    instructions: [
      "Usa al menos dos funciones.",
      "Pide datos con `input()` y valida al menos uno de ellos.",
      "Entrega un resumen final con recomendación concreta."
    ],
    hints: [
      "Puedes calcular bloques de 25 minutos con división entera.",
      "Conviene separar la clasificación de carga de la recomendación final."
    ],
    starterCode:
      "def classify_load(tasks):\n    if tasks >= 5:\n        return 'alta'\n    if tasks >= 3:\n        return 'media'\n    return 'baja'\n\n# crea una segunda función para sugerir bloques y arma el flujo principal",
    successCriteria: [
      "Integra varias ideas del módulo 1.",
      "Tiene validación mínima.",
      "Se siente como una mini herramienta de consola."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 180,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "two-functions",
          label: "Usa al menos dos funciones",
          pattern: "def\\s+\\w+\\([\\s\\S]*def\\s+\\w+\\(",
          feedbackWhenMissing: "El capstone necesita al menos dos funciones para repartir responsabilidades."
        },
        {
          id: "uses-input",
          label: "Pide datos con input",
          pattern: "input\\(",
          feedbackWhenMissing: "La app debe recibir datos de la persona usuaria."
        },
        {
          id: "uses-condition",
          label: "Usa condicionales",
          pattern: "\\bif\\b",
          feedbackWhenMissing: "Necesitas al menos una decisión visible dentro del flujo."
        },
        {
          id: "uses-print",
          label: "Entrega un resumen final",
          pattern: "print\\(",
          feedbackWhenMissing: "El planificador debe cerrar con una recomendación visible."
        },
        {
          id: "stores-minutes",
          label: "Trabaja con minutos disponibles",
          pattern: "minutes|available_minutes",
          feedbackWhenMissing: "Incluye la variable de minutos para construir la sugerencia."
        },
        {
          id: "stores-tasks",
          label: "Trabaja con tareas pendientes",
          pattern: "tasks|pending_tasks",
          feedbackWhenMissing: "Incluye la cantidad de tareas pendientes para clasificar la carga."
        }
      ]
    },
    playground: {
      guidance: "Piensa en esto como una mini app que podrías mostrar para explicar tus fundamentos.",
      starterCode:
        "def classify_load(tasks):\n    if tasks >= 5:\n        return 'alta'\n    if tasks >= 3:\n        return 'media'\n    return 'baja'\n\n# crea una segunda función para sugerir bloques y arma el flujo principal"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "resumir-datos-con-listas",
    title: "Resumir datos con listas",
    exerciseType: "guided_code",
    moduleSlug: "python-practico",
    lessonSlug: "listas-y-tuplas-para-series-de-datos",
    order: 1,
    duration: "25 min",
    summary: "Convierte una lista de duraciones en un resumen con total, promedio y bloque mayor.",
    prompt: "Recorre una lista de duraciones y muestra total, promedio y bloque más largo con etiquetas claras.",
    responseLabel: "Tu reporte con listas",
    responsePlaceholder:
      "durations = [20, 35, 15, 40]\nlabels = ('total', 'promedio', 'mayor bloque')\n...",
    instructions: [
      "Recorre la lista de duraciones.",
      "Calcula total y promedio.",
      "Usa la tupla `labels` para apoyar el formato del reporte."
    ],
    hints: [
      "Puedes usar `sum()` y `len()` junto con un bucle si quieres enriquecer la salida.",
      "El valor de la tupla puede ayudarte a rotular la consola."
    ],
    starterCode:
      "durations = [20, 35, 15, 40]\nlabels = ('total', 'promedio', 'mayor bloque')\n\n# construye el reporte",
    successCriteria: [
      "Usa la lista como fuente de datos.",
      "Calcula métricas agregadas.",
      "La salida final se entiende rápido."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "uses-list",
          label: "Trabaja con la lista de duraciones",
          pattern: "durations",
          feedbackWhenMissing: "Usa la lista dada como fuente del reporte."
        },
        {
          id: "uses-loop-or-sum",
          label: "Procesa la colección",
          pattern: "\\bfor\\b|sum\\(",
          feedbackWhenMissing: "Procesa la lista en vez de escribir resultados fijos."
        },
        {
          id: "uses-len-or-average",
          label: "Calcula promedio",
          pattern: "len\\(|average|promedio",
          feedbackWhenMissing: "Calcula y muestra una métrica que dependa del tamaño de la lista."
        },
        {
          id: "prints-report",
          label: "Imprime el reporte",
          pattern: "print\\(",
          feedbackWhenMissing: "Cierra con un reporte visible."
        }
      ]
    },
    playground: {
      guidance: "Convierte una serie de datos en un reporte corto y entendible.",
      starterCode:
        "durations = [20, 35, 15, 40]\nlabels = ('total', 'promedio', 'mayor bloque')\n\n# construye el reporte"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "armar-registro-de-producto",
    title: "Armar un registro de producto",
    exerciseType: "guided_code",
    moduleSlug: "python-practico",
    lessonSlug: "diccionarios-y-sets-para-registros",
    order: 2,
    duration: "25 min",
    summary: "Modela un producto con diccionario y valida duplicados con un set.",
    prompt: "Muestra un resumen de producto y valida si su categoría ya existía en un set de categorías.",
    responseLabel: "Tu registro",
    responsePlaceholder:
      "product = {...}\nseen_categories = {...}\n...",
    instructions: [
      "Usa el diccionario `product` para leer nombre, precio y stock.",
      "Usa el set `seen_categories` para comprobar si la categoría ya existe.",
      "Muestra un resumen claro con ambas ideas."
    ],
    hints: [
      "Los valores del diccionario se leen por clave, no por índice.",
      "La operación `in` te ayuda con el set."
    ],
    starterCode:
      "product = {\n    'name': 'mouse',\n    'price': 18,\n    'stock': 7,\n    'category': 'perifericos'\n}\nseen_categories = {'audio', 'oficina'}\n\n# muestra el resumen y valida la categoría",
    successCriteria: [
      "Usa claves del diccionario.",
      "Usa el set como validación.",
      "La salida final comunica si la categoría ya existía."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 100,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "uses-product-keys",
          label: "Accede por clave al diccionario",
          pattern: "product\\[['\"]name['\"]\\]|product\\[['\"]price['\"]\\]|product\\[['\"]stock['\"]\\]",
          feedbackWhenMissing: "Accede al diccionario por claves para construir el resumen."
        },
        {
          id: "uses-category-check",
          label: "Comprueba la categoría en el set",
          pattern: "product\\[['\"]category['\"]\\]\\s+in\\s+seen_categories|seen_categories\\.add",
          feedbackWhenMissing: "Usa el set para validar si la categoría ya existía."
        },
        {
          id: "uses-condition",
          label: "Decide qué mensaje mostrar",
          pattern: "\\bif\\b",
          feedbackWhenMissing: "Haz visible la decisión según exista o no la categoría."
        },
        {
          id: "prints-result",
          label: "Imprime el resultado",
          pattern: "print\\(",
          feedbackWhenMissing: "Entrega un resumen final del producto y su categoría."
        }
      ]
    },
    playground: {
      guidance: "Piensa en formato inventario y control de duplicados.",
      starterCode:
        "product = {\n    'name': 'mouse',\n    'price': 18,\n    'stock': 7,\n    'category': 'perifericos'\n}\nseen_categories = {'audio', 'oficina'}\n\n# muestra el resumen y valida la categoría"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "limpiar-linea-de-categorias",
    title: "Limpiar una línea de categorías",
    exerciseType: "guided_code",
    moduleSlug: "python-practico",
    lessonSlug: "strings-y-limpieza-de-datos",
    order: 3,
    duration: "25 min",
    summary: "Normaliza una línea de texto y convierte la entrada en categorías limpias y consistentes.",
    prompt: "Limpia una línea separada por comas, convierte todo a minúsculas y muestra el resultado final sin espacios sobrantes.",
    responseLabel: "Tu limpieza de texto",
    responsePlaceholder:
      "raw_categories = '  Python, Datos, automatizacion , Scripts '\n...",
    instructions: [
      "Usa `split(',')` para separar la línea.",
      "Limpia espacios y normaliza a minúsculas.",
      "Muestra el resultado final en un formato consistente."
    ],
    hints: [
      "Puedes combinar `strip()` y `lower()` en cada elemento.",
      "Al final puedes usar `join()` para mostrar una línea uniforme."
    ],
    starterCode:
      "raw_categories = '  Python, Datos, automatizacion , Scripts '\n\n# limpia la línea y muestra el resultado final",
    successCriteria: [
      "Separa la línea en partes.",
      "Normaliza espacios y mayúsculas.",
      "La salida final queda consistente."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "splits-text",
          label: "Separa el texto",
          pattern: "split\\(",
          feedbackWhenMissing: "Primero separa la línea cruda en partes."
        },
        {
          id: "strips-text",
          label: "Limpia espacios",
          pattern: "strip\\(",
          feedbackWhenMissing: "Quita espacios sobrantes de cada categoría."
        },
        {
          id: "normalizes-case",
          label: "Normaliza mayúsculas",
          pattern: "lower\\(",
          feedbackWhenMissing: "Convierte el texto a un formato consistente."
        },
        {
          id: "prints-result",
          label: "Muestra el resultado",
          pattern: "print\\(",
          feedbackWhenMissing: "El script debe mostrar el resultado limpio."
        }
      ]
    },
    playground: {
      guidance: "Trata el texto como dato real que llega con ruido.",
      starterCode:
        "raw_categories = '  Python, Datos, automatizacion , Scripts '\n\n# limpia la línea y muestra el resultado final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "guardar-y-leer-movimientos",
    title: "Guardar y leer movimientos",
    exerciseType: "guided_code",
    moduleSlug: "python-practico",
    lessonSlug: "archivos-y-registros-basicos",
    order: 4,
    duration: "30 min",
    summary: "Escribe registros en un archivo de texto, vuelve a leerlos y cuenta cuántos recuperaste.",
    prompt: "Guarda movimientos simples en un archivo y luego léelos para confirmar cuántos registros hay.",
    responseLabel: "Tu flujo con archivos",
    responsePlaceholder:
      "movements = ['venta,1200', 'compra,450', 'venta,980']\n...",
    instructions: [
      "Escribe cada movimiento en una línea del archivo.",
      "Vuelve a abrir el archivo y recupera sus líneas limpias.",
      "Muestra cuántos registros cargaste."
    ],
    hints: [
      "Usa `with open(..., 'w')` y luego `with open(..., 'r')`.",
      "Recuerda limpiar `\\n` al leer."
    ],
    starterCode:
      "movements = ['venta,1200', 'compra,450', 'venta,980']\n\n# escribe estas líneas en un archivo\n# luego vuelve a leerlo y muestra cuántos registros recuperaste",
    successCriteria: [
      "Escribe y vuelve a leer un archivo.",
      "Limpia las líneas al cargarlas.",
      "Entrega un resumen de registros recuperados."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "opens-for-write",
          label: "Abre archivo en modo escritura",
          pattern: "open\\(.+['\"]w['\"]",
          feedbackWhenMissing: "Guarda primero los registros en un archivo."
        },
        {
          id: "writes-lines",
          label: "Escribe líneas en el archivo",
          pattern: "write\\(",
          feedbackWhenMissing: "Usa `write()` para guardar cada movimiento."
        },
        {
          id: "opens-for-read",
          label: "Abre archivo en modo lectura",
          pattern: "open\\(.+['\"]r['\"]",
          feedbackWhenMissing: "Después de escribir, vuelve a abrir el archivo para leerlo."
        },
        {
          id: "strips-lines",
          label: "Limpia líneas leídas",
          pattern: "strip\\(",
          feedbackWhenMissing: "Limpia saltos de línea o espacios al recuperar el contenido."
        },
        {
          id: "prints-count",
          label: "Muestra cuántos registros recuperó",
          pattern: "len\\(|print\\(",
          feedbackWhenMissing: "Entrega un cierre final con la cantidad de registros."
        }
      ]
    },
    playground: {
      guidance: "Haz que el script deje evidencia persistente y luego la recupere.",
      starterCode:
        "movements = ['venta,1200', 'compra,450', 'venta,980']\n\n# escribe estas líneas en un archivo\n# luego vuelve a leerlo y muestra cuántos registros recuperaste"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "crear-reporte-con-statistics",
    title: "Crear un reporte con `statistics`",
    exerciseType: "guided_code",
    moduleSlug: "python-practico",
    lessonSlug: "funciones-utiles-y-modulos-estandar",
    order: 5,
    duration: "30 min",
    summary: "Usa un módulo estándar y funciones propias para producir un reporte de montos.",
    prompt: "Resume una lista de montos con cantidad, promedio, máximo y una clasificación final.",
    responseLabel: "Tu reporte",
    responsePlaceholder:
      "from statistics import mean\n\namounts = [1200, 800, 950, 1300]\n...",
    instructions: [
      "Importa `mean` desde `statistics`.",
      "Crea una función que construya un reporte con cantidad, promedio y máximo.",
      "Agrega una clasificación simple al resultado final."
    ],
    hints: [
      "Una clasificación puede depender del promedio o del máximo.",
      "Piensa el reporte como un diccionario o un conjunto de variables claras."
    ],
    starterCode:
      "from statistics import mean\n\namounts = [1200, 800, 950, 1300]\n\n# crea una función que construya el reporte\n# y agrega una clasificación final",
    successCriteria: [
      "Usa biblioteca estándar con criterio.",
      "Separa transformación y salida.",
      "El reporte combina varias métricas."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "imports-mean",
          label: "Importa mean",
          pattern: "from\\s+statistics\\s+import\\s+mean",
          feedbackWhenMissing: "Importa `mean` desde `statistics`."
        },
        {
          id: "defines-report-function",
          label: "Define una función de reporte",
          pattern: "def\\s+(build_report|create_report|summary_report)\\(",
          feedbackWhenMissing: "Crea una función que concentre el armado del reporte."
        },
        {
          id: "uses-mean",
          label: "Usa mean dentro del flujo",
          pattern: "mean\\(",
          feedbackWhenMissing: "Aprovecha `mean` para calcular el promedio."
        },
        {
          id: "uses-max",
          label: "Calcula el máximo",
          pattern: "max\\(",
          feedbackWhenMissing: "Agrega también la métrica del valor máximo."
        },
        {
          id: "prints-result",
          label: "Muestra el resultado",
          pattern: "print\\(",
          feedbackWhenMissing: "Entrega un reporte visible."
        }
      ]
    },
    playground: {
      guidance: "Combina biblioteca estándar y funciones propias para producir una utilidad más limpia.",
      starterCode:
        "from statistics import mean\n\namounts = [1200, 800, 950, 1300]\n\n# crea una función que construya el reporte\n# y agrega una clasificación final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "capstone-utilidad-de-registros",
    title: "Capstone · Utilidad de registros",
    exerciseType: "guided_code",
    moduleSlug: "python-practico",
    lessonSlug: "capstone-intermedio-utilidad-de-registros",
    order: 6,
    duration: "45 min",
    summary: "Construye una utilidad que persista movimientos, los procese y calcule balance.",
    prompt: "Guarda movimientos en archivo, vuelve a leerlos, parsea cada línea y calcula ventas, compras y balance final.",
    responseLabel: "Tu utilidad intermedia",
    responsePlaceholder:
      "def parse_line(line):\n    ...\n\nsample_lines = ['venta,1200', ...]\n...",
    instructions: [
      "Crea una función `parse_line()` o equivalente.",
      "Escribe y vuelve a leer un archivo.",
      "Calcula total de ventas, total de compras y balance."
    ],
    hints: [
      "Normaliza la categoría antes de clasificar.",
      "Puedes usar un diccionario para guardar el reporte final."
    ],
    starterCode:
      "def parse_line(line):\n    category, amount = line.strip().split(',')\n    return {'category': category.strip().lower(), 'amount': float(amount)}\n\nsample_lines = ['venta,1200', 'compra,450', 'venta,980']\n\n# guarda, vuelve a leer y construye el balance",
    successCriteria: [
      "Integra varias ideas del módulo 2.",
      "Tiene parseo y persistencia.",
      "Entrega un reporte final útil."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 180,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "parse-function",
          label: "Define una función de parsing",
          pattern: "def\\s+parse_line\\(",
          feedbackWhenMissing: "El capstone necesita una función para convertir líneas en datos útiles."
        },
        {
          id: "writes-file",
          label: "Escribe un archivo",
          pattern: "open\\(.+['\"]w['\"]|write\\(",
          feedbackWhenMissing: "Guarda primero los movimientos para simular persistencia real."
        },
        {
          id: "reads-file",
          label: "Lee el archivo",
          pattern: "open\\(.+['\"]r['\"]",
          feedbackWhenMissing: "Vuelve a leer el archivo para construir el reporte."
        },
        {
          id: "classifies-sales",
          label: "Clasifica ventas",
          pattern: "venta",
          feedbackWhenMissing: "El balance necesita distinguir ventas."
        },
        {
          id: "classifies-purchases",
          label: "Clasifica compras",
          pattern: "compra",
          feedbackWhenMissing: "El balance necesita distinguir compras."
        },
        {
          id: "prints-balance",
          label: "Muestra el balance final",
          pattern: "balance|print\\(",
          feedbackWhenMissing: "Cierra la utilidad con un balance legible."
        }
      ]
    },
    playground: {
      guidance: "Este proyecto ya debería sentirse como una utilidad de datos pequeña.",
      starterCode:
        "def parse_line(line):\n    category, amount = line.strip().split(',')\n    return {'category': category.strip().lower(), 'amount': float(amount)}\n\nsample_lines = ['venta,1200', 'compra,450', 'venta,980']\n\n# guarda, vuelve a leer y construye el balance"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "reordenar-script-con-main",
    title: "Reordenar un script con `main()`",
    exerciseType: "guided_code",
    moduleSlug: "python-estructurado",
    lessonSlug: "scripts-mas-limpios-con-main",
    order: 1,
    duration: "30 min",
    summary: "Lleva un script corto a una estructura con punto de entrada y helpers.",
    prompt: "Crea `build_summary()` y `main()`, y ejecuta el flujo desde el bloque `if __name__ == '__main__':`.",
    responseLabel: "Tu script ordenado",
    responsePlaceholder:
      "def parse_amount(...):\n    ...\n\ndef build_summary(...):\n    ...",
    instructions: [
      "Mantén `parse_amount()` como helper.",
      "Agrega `build_summary()` y `main()`.",
      "Usa el guard `if __name__ == '__main__':`."
    ],
    hints: [
      "El objetivo principal es dejar visible el flujo en `main()`.",
      "Haz que cada helper tenga una tarea concreta."
    ],
    starterCode:
      "def parse_amount(raw_value):\n    return float(raw_value.strip())\n\nvalues = ['1200', '800', '950']\n\n# crea build_summary() y main()\n# luego ejecuta el flujo con if __name__ == '__main__':",
    successCriteria: [
      "Usa `main()` como entrada clara.",
      "Extrae un helper adicional.",
      "La estructura final se entiende mejor que antes."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 140,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-main",
          label: "Define main",
          pattern: "def\\s+main\\(",
          feedbackWhenMissing: "Agrega un punto de entrada claro con `main()`."
        },
        {
          id: "defines-helper",
          label: "Define un helper adicional",
          pattern: "def\\s+(build_summary|create_summary|summarize_amounts)\\(",
          feedbackWhenMissing: "Extrae la lógica de resumen a un helper dedicado."
        },
        {
          id: "uses-name-guard",
          label: "Usa el bloque de ejecución",
          pattern: "if\\s+__name__\\s*==\\s*['\"]__main__['\"]",
          feedbackWhenMissing: "Usa el bloque `if __name__ == '__main__':`."
        },
        {
          id: "calls-main",
          label: "Llama a main",
          pattern: "main\\(",
          feedbackWhenMissing: "Ejecuta el flujo desde el bloque final."
        },
        {
          id: "prints-output",
          label: "Muestra una salida",
          pattern: "print\\(",
          feedbackWhenMissing: "Mantén una salida visible para comprobar el flujo."
        }
      ]
    },
    playground: {
      guidance: "El valor está en la estructura y la legibilidad, no en meter más código.",
      starterCode:
        "def parse_amount(raw_value):\n    return float(raw_value.strip())\n\nvalues = ['1200', '800', '950']\n\n# crea build_summary() y main()\n# luego ejecuta el flujo con if __name__ == '__main__':"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "modelar-movimiento-con-clase",
    title: "Modelar un movimiento con clase",
    exerciseType: "guided_code",
    moduleSlug: "python-estructurado",
    lessonSlug: "clases-cuando-aportan",
    order: 2,
    duration: "30 min",
    summary: "Modela un movimiento con atributos y un método que resuelva algo útil.",
    prompt: "Completa una clase `Movement` con un método que indique si requiere revisión y úsala con una o dos instancias.",
    responseLabel: "Tu clase",
    responsePlaceholder:
      "class Movement:\n    def __init__(self, category, amount):\n        ...",
    instructions: [
      "Completa `__init__` con los atributos necesarios.",
      "Agrega un método como `requires_review()` o `summary()`.",
      "Crea al menos una instancia y úsala."
    ],
    hints: [
      "Los atributos de instancia se guardan con `self.`.",
      "El método puede usar un umbral simple para decidir si revisar."
    ],
    starterCode:
      "class Movement:\n    def __init__(self, category, amount):\n        # guarda category y amount en self\n        pass\n\n    # agrega un método útil aquí\n\n# crea una o dos instancias y pruébalas",
    successCriteria: [
      "Define clase con atributos claros.",
      "Incluye al menos un método útil.",
      "Usa instancias para producir una salida."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 130,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-class",
          label: "Define la clase",
          pattern: "class\\s+Movement\\s*:",
          feedbackWhenMissing: "El ejercicio pide modelar un movimiento con una clase."
        },
        {
          id: "defines-init",
          label: "Define __init__",
          pattern: "def\\s+__init__\\(",
          feedbackWhenMissing: "Agrega el constructor de la clase."
        },
        {
          id: "assigns-self",
          label: "Guarda atributos en self",
          pattern: "self\\.category\\s*=|self\\.amount\\s*=",
          feedbackWhenMissing: "Guarda los datos del movimiento dentro de la instancia."
        },
        {
          id: "adds-method",
          label: "Agrega un método útil",
          pattern: "def\\s+(requires_review|summary|is_large)\\(",
          feedbackWhenMissing: "Agrega un método que resuelva algo útil sobre el movimiento."
        },
        {
          id: "creates-instance",
          label: "Crea una instancia",
          pattern: "=\\s*Movement\\(",
          feedbackWhenMissing: "Usa la clase con al menos una instancia real."
        }
      ]
    },
    playground: {
      guidance: "Usa POO porque mejora el modelo del dato, no como adorno.",
      starterCode:
        "class Movement:\n    def __init__(self, category, amount):\n        # guarda category y amount en self\n        pass\n\n    # agrega un método útil aquí\n\n# crea una o dos instancias y pruébalas"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "persistir-registros-en-json",
    title: "Persistir registros en JSON",
    exerciseType: "guided_code",
    moduleSlug: "python-estructurado",
    lessonSlug: "json-y-datos-estructurados",
    order: 3,
    duration: "30 min",
    summary: "Guarda una lista de diccionarios en JSON y vuelve a cargarla.",
    prompt: "Usa `json.dump()` para guardar registros y `json.load()` para recuperarlos y contar cuántos hay.",
    responseLabel: "Tu flujo JSON",
    responsePlaceholder:
      "import json\n\nrecords = [...]\n...",
    instructions: [
      "Importa `json`.",
      "Guarda `records` en un archivo JSON.",
      "Vuelve a cargarlo y muestra cuántos registros recuperaste."
    ],
    hints: [
      "Usa `ensure_ascii=False` si quieres conservar texto legible.",
      "La lectura debe terminar en una estructura Python, no en texto crudo."
    ],
    starterCode:
      "import json\n\nrecords = [\n    {'category': 'venta', 'amount': 1200},\n    {'category': 'compra', 'amount': 450},\n    {'category': 'venta', 'amount': 980}\n]\n\n# guarda records en un archivo JSON, vuelve a cargarlo y muestra la cantidad",
    successCriteria: [
      "Usa JSON como persistencia estructurada.",
      "Recupera la estructura con `json.load()`.",
      "Entrega una comprobación visible."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "imports-json",
          label: "Importa json",
          pattern: "import\\s+json",
          feedbackWhenMissing: "Importa el módulo `json`."
        },
        {
          id: "uses-dump",
          label: "Guarda con json.dump",
          pattern: "json\\.dump\\(",
          feedbackWhenMissing: "Guarda los registros usando `json.dump()`."
        },
        {
          id: "uses-load",
          label: "Carga con json.load",
          pattern: "json\\.load\\(",
          feedbackWhenMissing: "Recupera la estructura usando `json.load()`."
        },
        {
          id: "reads-file",
          label: "Lee el archivo",
          pattern: "open\\(.+['\"]r['\"]",
          feedbackWhenMissing: "Abre el archivo en modo lectura para cargar el JSON."
        },
        {
          id: "prints-count",
          label: "Muestra la cantidad de registros",
          pattern: "len\\(|print\\(",
          feedbackWhenMissing: "Cierra el flujo mostrando cuántos registros recuperaste."
        }
      ]
    },
    playground: {
      guidance: "Usa JSON cuando el dato ya tiene estructura y quieres mantenerla.",
      starterCode:
        "import json\n\nrecords = [\n    {'category': 'venta', 'amount': 1200},\n    {'category': 'compra', 'amount': 450},\n    {'category': 'venta', 'amount': 980}\n]\n\n# guarda records en un archivo JSON, vuelve a cargarlo y muestra la cantidad"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  codeExercise({
    slug: "parsear-montos-con-validacion",
    title: "Parsear montos con validación",
    exerciseType: "guided_code",
    moduleSlug: "python-estructurado",
    lessonSlug: "parsing-validacion-y-excepciones",
    order: 4,
    duration: "30 min",
    summary: "Parsea montos inseguros con `try/except` y filtra solo los válidos.",
    prompt: "Crea `parse_amount()` para convertir montos, descartar inválidos y usar el resultado en una lista final.",
    responseLabel: "Tu parser",
    responsePlaceholder:
      "raw_values = ['1200', '450', 'error', '-25', '980']\n\ndef parse_amount(raw_value):\n    ...",
    instructions: [
      "Usa `try/except` para la conversión numérica.",
      "Descarta negativos devolviendo `None`.",
      "Construye una lista final solo con montos válidos."
    ],
    hints: [
      "Puedes recorrer `raw_values` y agregar al resultado solo cuando `parse_amount()` no devuelve `None`.",
      "El objetivo es que el resto del flujo reciba datos consistentes."
    ],
    starterCode:
      "raw_values = ['1200', '450', 'error', '-25', '980']\n\n# crea parse_amount() y arma una lista solo con montos válidos",
    successCriteria: [
      "Usa `try/except` con criterio.",
      "Devuelve un resultado consistente.",
      "El flujo final filtra valores inválidos."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 130,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-parse-function",
          label: "Define parse_amount",
          pattern: "def\\s+parse_amount\\(",
          feedbackWhenMissing: "Crea una función específica para parsear montos."
        },
        {
          id: "uses-try",
          label: "Usa try/except",
          pattern: "\\btry\\b[\\s\\S]*\\bexcept\\b",
          feedbackWhenMissing: "Usa `try/except` para manejar conversión inválida."
        },
        {
          id: "returns-none",
          label: "Devuelve None si falla",
          pattern: "return\\s+None",
          feedbackWhenMissing: "Devuelve `None` para entradas inválidas o negativas."
        },
        {
          id: "validates-negative",
          label: "Valida negativos",
          pattern: "<\\s*0|>=\\s*0",
          feedbackWhenMissing: "Valida el rango después de convertir."
        },
        {
          id: "builds-valid-list",
          label: "Construye lista final válida",
          pattern: "append\\(|\\[.+for.+in.+if.+\\]",
          feedbackWhenMissing: "Arma una lista final solo con montos válidos."
        }
      ]
    },
    playground: {
      guidance: "Diseña el parser pensando en que el resto del programa necesita resultados coherentes.",
      starterCode:
        "raw_values = ['1200', '450', 'error', '-25', '980']\n\n# crea parse_amount() y arma una lista solo con montos válidos"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  }),
  textExercise({
    slug: "disenar-arquitectura-multiarchivo",
    title: "Diseñar una arquitectura multiarchivo",
    exerciseType: "concept_check",
    moduleSlug: "python-estructurado",
    lessonSlug: "arquitectura-multiarchivo-con-criterio",
    order: 5,
    duration: "20 min",
    summary: "Explica cómo separarías una herramienta de gastos en archivos con responsabilidades distintas.",
    prompt: "Describe cómo repartirías una herramienta de gastos entre `main.py`, `storage.py` y `reports.py`, indicando qué hace cada archivo y cómo se conectan.",
    responseLabel: "Tu propuesta de arquitectura",
    responsePlaceholder:
      "main.py se encarga de...\nstorage.py se encarga de...\nreports.py se encarga de...\nLas importaciones quedarían así...",
    instructions: [
      "Explica qué vive en `main.py`.",
      "Explica qué funciones o responsabilidades vivirían en `storage.py`.",
      "Explica qué parte del reporte o análisis vive en `reports.py` y cómo se importaría."
    ],
    hints: [
      "Piensa en flujo principal, persistencia y reportes como responsabilidades distintas.",
      "No hace falta escribir código completo; sí hace falta justificar la separación."
    ],
    successCriteria: [
      "La propuesta separa flujo, almacenamiento y reportes.",
      "Explica cómo se conectan los archivos.",
      "No deja toda la lógica concentrada en `main.py`."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 80,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "main-role",
          label: "Define el rol de main.py",
          keywords: ["main.py", "flujo principal", "entrada"],
          feedbackWhenMissing: "Aclara qué responsabilidad tendría `main.py` dentro del proyecto."
        },
        {
          id: "storage-role",
          label: "Define el rol de storage.py",
          keywords: ["storage.py", "guardar", "cargar", "persistencia"],
          feedbackWhenMissing: "Explica qué parte de almacenamiento o persistencia iría en `storage.py`."
        },
        {
          id: "reports-role",
          label: "Define el rol de reports.py",
          keywords: ["reports.py", "reporte", "balance", "resumen"],
          feedbackWhenMissing: "Explica qué parte del análisis o reporte iría en `reports.py`."
        },
        {
          id: "imports",
          label: "Menciona la conexión entre archivos",
          keywords: ["import", "importaría", "from", "usar"],
          feedbackWhenMissing: "Describe cómo se conectan los archivos con importaciones o llamadas."
        }
      ]
    }
  }),
  codeExercise({
    slug: "capstone-analizador-de-movimientos",
    title: "Capstone final · Analizador de movimientos",
    exerciseType: "guided_code",
    moduleSlug: "python-estructurado",
    lessonSlug: "capstone-final-analizador-de-movimientos",
    order: 6,
    duration: "55 min",
    summary: "Construye una herramienta final con clase, JSON, parsing y reporte de balance.",
    prompt: "Carga movimientos desde JSON, convierte solo los válidos a objetos, calcula ingresos, egresos y balance, y muestra un resumen final.",
    responseLabel: "Tu proyecto final",
    responsePlaceholder:
      "import json\n\nclass Movement:\n    ...",
    instructions: [
      "Usa una clase `Movement` o equivalente.",
      "Crea una función de parsing que descarte registros inválidos.",
      "Construye un reporte final con ingresos, egresos, balance y cantidad válida."
    ],
    hints: [
      "Puedes usar una lista de registros de ejemplo y guardarla como JSON dentro del mismo script.",
      "Piensa el proyecto en etapas: cargar, parsear, convertir, reportar."
    ],
    starterCode:
      "import json\n\nclass Movement:\n    def __init__(self, category, amount):\n        self.category = category\n        self.amount = amount\n\n    def is_income(self):\n        return self.category == 'ingreso'\n\nsample_records = [\n    {'category': 'ingreso', 'amount': '1500'},\n    {'category': 'egreso', 'amount': '430'},\n    {'category': 'egreso', 'amount': 'texto'},\n    {'category': 'ingreso', 'amount': '980'}\n]\n\n# crea parse_record(), convierte solo los registros válidos y arma el reporte final",
    successCriteria: [
      "Integra modelado, persistencia y parsing.",
      "Descarta entradas inválidas sin romper el flujo.",
      "Produce un reporte final explicable y útil."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 220,
      passingScore: 7,
      requiredPatterns: [
        {
          id: "imports-json",
          label: "Importa json",
          pattern: "import\\s+json",
          feedbackWhenMissing: "El proyecto final debe trabajar con JSON."
        },
        {
          id: "defines-class",
          label: "Define una clase para el modelo",
          pattern: "class\\s+Movement\\s*:",
          feedbackWhenMissing: "Usa una clase simple para representar movimientos válidos."
        },
        {
          id: "defines-parser",
          label: "Define una función de parsing",
          pattern: "def\\s+parse_record\\(",
          feedbackWhenMissing: "Agrega una función que convierta registros crudos en objetos válidos."
        },
        {
          id: "uses-try-except",
          label: "Maneja errores al parsear",
          pattern: "\\btry\\b[\\s\\S]*\\bexcept\\b",
          feedbackWhenMissing: "Maneja montos inválidos o claves faltantes con `try/except`."
        },
        {
          id: "uses-json-dump-or-load",
          label: "Trabaja con JSON",
          pattern: "json\\.dump\\(|json\\.load\\(",
          feedbackWhenMissing: "Guarda o carga datos usando funciones de `json`."
        },
        {
          id: "builds-valid-collection",
          label: "Construye la colección de movimientos válidos",
          pattern: "append\\(|for\\s+.+\\s+in\\s+.+parse_record",
          feedbackWhenMissing: "Convierte solo los registros válidos en una colección final."
        },
        {
          id: "prints-report",
          label: "Muestra el reporte final",
          pattern: "balance|print\\(",
          feedbackWhenMissing: "El proyecto final debe cerrar con un reporte visible."
        }
      ]
    },
    playground: {
      guidance: "Piensa este capstone como un proyecto pequeño que ya podrías explicar como muestra de base real.",
      starterCode:
        "import json\n\nclass Movement:\n    def __init__(self, category, amount):\n        self.category = category\n        self.amount = amount\n\n    def is_income(self):\n        return self.category == 'ingreso'\n\nsample_records = [\n    {'category': 'ingreso', 'amount': '1500'},\n    {'category': 'egreso', 'amount': '430'},\n    {'category': 'egreso', 'amount': 'texto'},\n    {'category': 'ingreso', 'amount': '980'}\n]\n\n# crea parse_record(), convierte solo los registros válidos y arma el reporte final"
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      requireNoRuntimeError: true
    }
  })
];
