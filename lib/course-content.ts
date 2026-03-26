import { ExerciseData, LessonData, RoadmapModule } from "@/types";

export const courseModules: RoadmapModule[] = [
  {
    slug: "introduction-to-programming",
    title: "Introducción a la programación",
    description: "Empieza entendiendo qué es el código, cómo Python se ejecuta línea por línea y cómo arreglar errores pequeños sin entrar en pánico.",
    order: 1,
    status: "available",
    lessonCount: 3,
    estimatedTime: "45 min",
    xp: 120
  },
  {
    slug: "variables",
    title: "Variables",
    description: "Aprende cómo Python guarda información, la actualiza y la usa en programas interactivos simples.",
    order: 2,
    status: "available",
    lessonCount: 3,
    estimatedTime: "50 min",
    xp: 150
  },
  {
    slug: "conditionals",
    title: "Condicionales",
    description: "Enséñale a Python a tomar decisiones con comparaciones, `if`, `elif` y `else`.",
    order: 3,
    status: "available",
    lessonCount: 3,
    estimatedTime: "55 min",
    xp: 180
  },
  {
    slug: "loops",
    title: "Bucles",
    description: "Aprende cómo Python repite acciones con bucles `for` claros y patrones simples de conteo.",
    order: 4,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "55 min",
    xp: 180
  },
  {
    slug: "functions",
    title: "Funciones",
    description: "Convierte pasos repetidos en acciones con nombre para que tus programas sean más claros, tranquilos y fáciles de hacer crecer.",
    order: 5,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "58 min",
    xp: 190
  },
  {
    slug: "mini-projects",
    title: "Mini proyectos",
    description: "Une lo que ya aprendiste para crear programas pequeños, útiles y reales que se sienten como un primer logro importante.",
    order: 6,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "70 min",
    xp: 240
  },
  {
    slug: "lists",
    title: "Listas",
    description: "Aprende a guardar varios valores relacionados en un solo lugar, leerlos con calma y recorrerlos en programas pequeños.",
    order: 7,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "68 min",
    xp: 230
  },
  {
    slug: "dictionaries",
    title: "Diccionarios",
    description: "Aprende a guardar datos relacionados usando claves y valores, leerlos con claridad y recorrerlos en programas un poco más útiles.",
    order: 8,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "72 min",
    xp: 240
  },
  {
    slug: "strings",
    title: "Strings",
    description: "Aprende a trabajar mejor con texto: unirlo, compararlo y transformarlo de forma útil para programas reales con input y salida.",
    order: 9,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "70 min",
    xp: 235
  },
  {
    slug: "guided-projects",
    title: "Proyectos guiados",
    description: "Combina texto, decisiones, bucles, funciones, listas y diccionarios para construir programas pequeños que ya se sienten útiles de verdad.",
    order: 10,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "85 min",
    xp: 280
  },
  {
    slug: "practice-consolidation",
    title: "Consolidación práctica",
    description: "Refuerza lo que ya aprendiste combinando ideas clave en ejercicios guiados que se sienten como un cierre sólido de tu base en Python.",
    order: 11,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "82 min",
    xp: 290
  },
  {
    slug: "semi-open-projects",
    title: "Proyectos con más autonomía",
    description: "Resuelve programas pequeños con más libertad de decisión, manteniendo pistas, límites claros y una meta concreta para seguir avanzando con seguridad.",
    order: 12,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "90 min",
    xp: 310
  },
  {
    slug: "early-freeform-projects",
    title: "Proyectos iniciales más libres",
    description: "Trabaja a partir de briefs y criterios de éxito claros para construir soluciones pequeñas con más independencia, sin perder apoyo ni enfoque.",
    order: 13,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "95 min",
    xp: 330
  },
  {
    slug: "foundations-capstone",
    title: "Cierre de fundamentos",
    description: "Completa proyectos finales de nivel principiante que reúnen tu base en Python y marcan el cierre de una primera etapa importante dentro de PyMentor.",
    order: 14,
    status: "locked",
    lessonCount: 2,
    estimatedTime: "100 min",
    xp: 360
  },
  {
    slug: "basic-files",
    title: "Archivos básicos",
    description: "Empieza la segunda ruta aprendiendo a guardar y recuperar texto desde archivos, para que tus programas se sientan más útiles y menos efímeros.",
    order: 15,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "78 min",
    xp: 320
  },
  {
    slug: "simple-program-organization",
    title: "Funciones y organización simple",
    description: "Aprende a dividir programas un poco más grandes en funciones claras y a dar los primeros pasos hacia una organización más legible entre archivos simples.",
    order: 16,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "82 min",
    xp: 330
  },
  {
    slug: "small-organized-utilities",
    title: "Utilidades pequeñas y útiles",
    description: "Construye herramientas simples que ya se sienten prácticas: guardan datos, los leen con claridad y reparten mejor cada tarea entre funciones.",
    order: 17,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "88 min",
    xp: 340
  },
  {
    slug: "fuller-organized-utilities",
    title: "Utilidades organizadas con flujo completo",
    description: "Da un paso más y arma herramientas pequeñas con varias partes coordinadas: guardan, consultan, resumen y se leen como programas más completos.",
    order: 18,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "92 min",
    xp: 360
  },
  {
    slug: "simple-data-consultation-and-updates",
    title: "Consulta y actualización simple de datos",
    description: "Aprende a consultar, modificar y volver a mostrar información guardada para que tus herramientas pequeñas se sientan más interactivas y útiles.",
    order: 19,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "96 min",
    xp: 380
  },
  {
    slug: "input-driven-data-tools",
    title: "Herramientas con entradas y cambios simples",
    description: "Usa `input()` de forma más activa para decidir acciones, consultar, actualizar y reorganizar datos guardados dentro de herramientas pequeñas más útiles.",
    order: 20,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "98 min",
    xp: 390
  },
  {
    slug: "route2-practical-projects",
    title: "Proyectos prácticos de Ruta 2",
    description: "Convierte archivos, funciones, organización e input() en herramientas pequeñas más completas que ya se sienten como utilidades reales y ordenadas.",
    order: 21,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "110 min",
    xp: 430
  },
  {
    slug: "route2-capstone",
    title: "Cierre de Ruta 2",
    description: "Cierra la etapa práctica construyendo utilidades pequeñas más completas, con persistencia, decisiones, cambios útiles y reportes finales claros.",
    order: 22,
    status: "locked",
    lessonCount: 2,
    estimatedTime: "120 min",
    xp: 470
  },
  {
    slug: "simple-multi-file-programs",
    title: "Programas multiarchivo simples",
    description: "Abre Ruta 3 aprendiendo a separar un programa en archivos claros para que herramientas más reales sigan siendo fáciles de leer, cambiar y crecer.",
    order: 23,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "96 min",
    xp: 420
  },
  {
    slug: "practical-multi-file-utilities",
    title: "Utilidades multiarchivo con flujo claro",
    description: "Aplica la idea multiarchivo en herramientas pequeñas donde `principal.py` coordina, `utilidades.py` guarda o consulta y todo el programa se siente más claro y más real.",
    order: 24,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "102 min",
    xp: 440
  }
];

export const courseLessons: LessonData[] = [
  {
    slug: "what-is-programming",
    module: "Introducción a la programación",
    moduleSlug: "introduction-to-programming",
    order: 1,
    title: "Qué es programar de verdad",
    duration: "10 min",
    difficulty: "Beginner",
    summary: "Entiende programar como darle instrucciones claras a una computadora, un paso pequeño a la vez.",
    warmup: "Una receta funciona porque sus pasos son claros. Con el código pasa lo mismo.",
    goal: "Al final de esta lección, deberías entender qué es un programa y por qué las computadoras necesitan instrucciones muy claras.",
    keyIdeas: [
      {
        title: "Los programas son instrucciones",
        description: "Un programa es una lista de pasos que le dice a la computadora qué hacer."
      },
      {
        title: "Las computadoras entienden todo de forma literal",
        description: "Hacen exactamente lo que escribes, no lo que quisiste decir."
      },
      {
        title: "Los pasos pequeños ayudan",
        description: "Quien empieza aprende más rápido cuando divide una idea grande en acciones pequeñas."
      }
    ],
    explanation: [
      {
        title: "Una computadora necesita instrucciones precisas",
        body: "Las computadoras son rápidas, pero no adivinan lo que pensabas. Siguen exactamente las instrucciones que escribes, en el orden en que las escribes."
      },
      {
        title: "Programar es resolver problemas por pasos",
        body: "Cuando escribes código, conviertes un problema en instrucciones pequeñas. Por eso al principio importa más pensar con claridad que conocer sintaxis complicada."
      },
      {
        title: "Python es un lenguaje amigable para empezar",
        body: "Python es popular para principiantes porque su código suele leerse de forma más cercana al lenguaje natural que muchos otros lenguajes."
      },
      {
        title: "El progreso inicial debe sentirse simple",
        body: "Tus primeras victorias no tienen que ser impresionantes. Tienen que ser entendibles. Ejecutar dos líneas claras de código ya es un primer paso real."
      }
    ],
    example: "print('Hola, principiante')\nprint('Acabas de ejecutar tus primeras instrucciones en Python.')",
    practicePrompt: "Escribe dos líneas con `print()`. En la primera, di tu nombre. En la segunda, di una razón por la que quieres aprender Python.",
    practiceChecklist: [
      "Usa `print()` dos veces.",
      "Pon tu texto entre comillas.",
      "Ejecuta el código y confirma que aparezcan las dos líneas."
    ],
    commonMistakes: [
      "Olvidar las comillas alrededor del texto.",
      "Escribir mal `print`.",
      "Usar comillas curvas copiadas de otra app en lugar de comillas simples o dobles normales."
    ],
    bugChallenge: {
      prompt: "Este código debería mostrar un mensaje de bienvenida, pero un detalle de sintaxis lo rompe.",
      brokenCode: "print('Bienvenido a PyMentor)\nprint('Vamos a aprender Python')",
      expectedLearning: "Los textos necesitan comillas que se abran y se cierren correctamente."
    },
    playground: {
      title: "Tu primer espacio para probar Python",
      guidance: "Edita las dos líneas con `print()` y ejecútalas. Este es tu espacio seguro para probar cambios pequeños en Python.",
      starterCode: "print('Hola, principiante')\nprint('Estoy aprendiendo Python paso a paso.')",
      emptyOutputHint: "Prueba agregar o cambiar una línea con `print()` y vuelve a ejecutar el código."
    },
    exerciseSlug: "welcome-message-fix"
  },
  {
    slug: "running-python-step-by-step",
    module: "Introducción a la programación",
    moduleSlug: "introduction-to-programming",
    order: 2,
    title: "Ejecutar Python paso a paso",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "Mira cómo Python lee el código de arriba hacia abajo y por qué el orden importa.",
    warmup: "Si te cepillas los dientes antes de agarrar el cepillo, los pasos no tienen sentido. En el código, el orden también importa.",
    goal: "Al final, deberías poder explicar que Python sigue instrucciones de arriba hacia abajo.",
    keyIdeas: [
      {
        title: "El orden importa",
        description: "Python normalmente ejecuta la primera línea antes que la segunda, y así sucesivamente."
      },
      {
        title: "Una línea a la vez",
        description: "Leer el código despacio hace más fácil notar errores."
      },
      {
        title: "La salida muestra el resultado",
        description: "Lo que ves en pantalla es el resultado de los pasos que escribiste."
      }
    ],
    explanation: [
      {
        title: "Ejecución de arriba hacia abajo",
        body: "Cuando Python ejecuta un archivo, normalmente empieza arriba y avanza hacia abajo. Por eso el orden del código es una parte importante para entender qué hace."
      },
      {
        title: "Leer el código como una historia",
        body: "Quien empieza suele avanzar más rápido cuando lee el código línea por línea y se pregunta: '¿Qué pasa ahora mismo?'"
      },
      {
        title: "La salida te ayuda a revisar tu idea",
        body: "Si la salida te sorprende, eso es información útil. Significa que alguna de tus suposiciones sobre el orden estaba equivocada."
      },
      {
        title: "Esta idea te sigue ayudando después",
        body: "Entender el orden de ejecución hace mucho más fácil aprender variables, condicionales y bucles."
      }
    ],
    example: "print('Paso 1')\nprint('Paso 2')\nprint('Paso 3')",
    practicePrompt: "Escribe tres líneas con `print()` que muestren una rutina simple de la mañana en el orden correcto.",
    practiceChecklist: [
      "Usa tres líneas.",
      "Haz que el orden sea realista.",
      "Lee la salida de arriba hacia abajo."
    ],
    commonMistakes: [
      "Esperar que la última línea se ejecute primero.",
      "Confundir el orden de los pasos.",
      "Cambiar muchas cosas a la vez y perder de vista qué pasó."
    ],
    bugChallenge: {
      prompt: "Este código debería mostrar los pasos en orden, pero una línea está mal escrita.",
      brokenCode: "print('Despertar')\npritn('Lavarse los dientes')\nprint('Desayunar')",
      expectedLearning: "Un error pequeño de escritura puede detener el programa aunque la idea general sea correcta."
    },
    exerciseSlug: "morning-routine-output"
  },
  {
    slug: "reading-python-errors-calmly",
    module: "Introducción a la programación",
    moduleSlug: "introduction-to-programming",
    order: 3,
    title: "Leer pequeños errores de Python con calma",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "Aprende a leer un mensaje de error simple de Python sin entrar en pánico y a arreglar un problema pequeño a la vez.",
    warmup: "Cuando una receta sale mal, no dejas de cocinar para siempre. Buscas el primer paso que falló. Con los errores de código pasa lo mismo.",
    goal: "Al final, deberías poder tratar un error de principiante como una pista y no como una prueba de que no sirves para programar.",
    keyIdeas: [
      {
        title: "Los errores son pistas",
        description: "Un mensaje de error es Python diciéndote dónde se confundió."
      },
      {
        title: "Arregla primero el primer problema",
        description: "Un error de sintaxis puede provocar varios efectos confusos más adelante en el archivo."
      },
      {
        title: "Los errores pequeños son normales",
        description: "Olvidar comillas, dos puntos o letras le pasa a todo el mundo."
      }
    ],
    explanation: [
      {
        title: "Un mensaje de error no es un juicio",
        body: "Cuando Python se detiene y muestra un error, no te está diciendo que fracasaste. Te está mostrando el punto donde el programa dejó de tener sentido."
      },
      {
        title: "Empieza por la primera línea que Python señala",
        body: "No revises todo el archivo intentando arreglarlo todo al mismo tiempo. Empieza donde Python se detuvo, corrige eso y vuelve a ejecutar."
      },
      {
        title: "Primero revisa puntuación y escritura",
        body: "Para quienes empiezan, muchos errores iniciales vienen de comillas faltantes, dos puntos faltantes, errores de escritura o una indentación inconsistente."
      },
      {
        title: "Puedes mantener la calma y avanzar con método",
        body: "Un buen hábito para depurar es simple: lee la línea, di qué debería hacer y cambia una sola cosa a la vez."
      }
    ],
    example: "name = 'Maya'\nprint(name)\nprint('Lista para aprender')",
    practicePrompt: "Toma un programa pequeño roto y busca primero un solo problema. Explica con palabras simples qué podría estar confundiendo a Python.",
    practiceChecklist: [
      "Lee la línea que Python señala.",
      "Revisa escritura y puntuación antes de cambiar la lógica.",
      "Arregla un problema y luego ejecuta de nuevo."
    ],
    commonMistakes: [
      "Intentar arreglar todo al mismo tiempo.",
      "Ignorar el número o la línea que Python señala.",
      "Cambiar tanto el código que pierdes de vista el objetivo original."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir un nombre guardado, pero un error de escritura lo rompe.",
      brokenCode: "name = 'Maya'\nprnit(name)",
      expectedLearning: "La idea general puede estar bien aunque un error pequeño de escritura detenga el programa."
    },
    exerciseSlug: "fix-the-name-print"
  },
  {
    slug: "variables-hold-values",
    module: "Variables",
    moduleSlug: "variables",
    order: 1,
    title: "Las variables guardan valores",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Aprende cómo las variables permiten que Python recuerde información como nombres, puntajes y edades.",
    warmup: "Una caja con etiqueta te ayuda a recordar qué hay dentro. Una variable funciona como una etiqueta para un valor.",
    goal: "Al final, deberías poder crear una variable y explicar qué valor está guardando.",
    keyIdeas: [
      {
        title: "Una variable es una etiqueta",
        description: "Le pone un nombre a un valor para que puedas usarlo más tarde."
      },
      {
        title: "Los valores pueden ser texto o números",
        description: "Python puede guardar distintos tipos de información."
      },
      {
        title: "Los nombres deben ser claros",
        description: "Los nombres simples de variables hacen que el código sea más fácil de leer."
      }
    ],
    explanation: [
      {
        title: "Por qué importan las variables",
        body: "Sin variables, tendrías que repetir valores sueltos una y otra vez. Las variables hacen que el código sea más fácil de leer y actualizar."
      },
      {
        title: "Cómo leer una asignación de variable",
        body: "Puedes leer `name = 'Avery'` así: 'Guarda el texto Avery dentro de la variable llamada name'."
      },
      {
        title: "Las variables muestran mejor el significado",
        body: "Un buen nombre de variable te ayuda a ver qué intenta recordar el programa. `favorite_color` dice mucho más que `x`."
      },
      {
        title: "Aquí empiezan los programas de verdad",
        body: "En cuanto un programa puede recordar información, se vuelve más útil y más personal."
      }
    ],
    example: "name = 'Avery'\nscore = 10\n\nprint(name)\nprint(score)",
    practicePrompt: "Crea una variable llamada `favorite_color` y otra llamada `age`. Imprime ambos valores.",
    practiceChecklist: [
      "Usa nombres de variables con sentido.",
      "Pon el texto entre comillas.",
      "Imprime cada variable después de crearla."
    ],
    commonMistakes: [
      "Olvidar las comillas alrededor de valores de texto.",
      "Agregar espacios dentro del nombre de una variable.",
      "Usar un valor antes de crear la variable."
    ],
    bugChallenge: {
      prompt: "Este código debería guardar una comida favorita, pero tiene un problema de sintaxis.",
      brokenCode: "favorite food = 'Pizza'\nprint(favorite food)",
      expectedLearning: "Los nombres de variables no pueden tener espacios."
    },
    exerciseSlug: "variable-label-check"
  },
  {
    slug: "changing-variable-values",
    module: "Variables",
    moduleSlug: "variables",
    order: 2,
    title: "Cambiar el valor de una variable",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "Mira cómo Python puede actualizar información guardada cuando una variable recibe un valor nuevo.",
    warmup: "Un puntaje cambia durante un juego. Las variables también pueden cambiar.",
    goal: "Al final, deberías entender que una variable puede actualizarse y quedarse con el valor más reciente.",
    keyIdeas: [
      {
        title: "Las variables pueden cambiar",
        description: "Una asignación posterior reemplaza el valor anterior."
      },
      {
        title: "El valor más nuevo es el que cuenta",
        description: "Python conserva el valor más reciente guardado en esa variable."
      },
      {
        title: "Imprimir ayuda a comprobar",
        description: "Imprimir después de un cambio te ayuda a confirmar qué pasó."
      }
    ],
    explanation: [
      {
        title: "Actualizar una variable",
        body: "Cuando escribes una nueva asignación, Python reemplaza el valor anterior. La variable sigue teniendo el mismo nombre, pero cambia el valor guardado."
      },
      {
        title: "Por qué esto es útil",
        body: "Muchos programas necesitan datos que cambian, como puntajes, contadores o elecciones de una persona."
      },
      {
        title: "Lee cada asignación en orden",
        body: "Si una variable cambia más de una vez, lee el archivo de arriba hacia abajo y pregúntate qué valor tiene en cada momento."
      },
      {
        title: "Imprimir reduce la confusión",
        body: "Si no estás seguro de qué valor guarda una variable, imprímela justo después de actualizarla. Eso te da una respuesta inmediata."
      }
    ],
    example: "score = 5\nprint(score)\n\nscore = 8\nprint(score)",
    practicePrompt: "Crea una variable llamada `coins`, asígnale 3, luego cámbiala a 5 e imprímela después de cada paso.",
    practiceChecklist: [
      "Asigna el primer valor.",
      "Imprime la variable.",
      "Asigna un valor nuevo y vuelve a imprimir."
    ],
    commonMistakes: [
      "Pensar que el valor viejo sigue activo después de reasignar.",
      "Imprimir el texto `coins` en lugar de la variable `coins`.",
      "Cambiar el nombre de la variable sin querer."
    ],
    bugChallenge: {
      prompt: "Este código debería actualizar el puntaje, pero la segunda línea usa el símbolo equivocado.",
      brokenCode: "score = 5\nscore == 8\nprint(score)",
      expectedLearning: "Usa `=` para asignar un valor. `==` sirve para comparar valores."
    },
    playground: {
      title: "Mira cómo cambia una variable",
      guidance: "Ejecuta el código, luego cambia los números y vuelve a ejecutarlo. Observa cómo Python conserva el valor más nuevo de la variable.",
      starterCode: "coins = 3\nprint(coins)\n\ncoins = 5\nprint(coins)",
      emptyOutputHint: "Este espacio muestra todo lo que tus líneas con `print()` envían a la pantalla."
    },
    exerciseSlug: "coins-after-update"
  },
  {
    slug: "using-input-to-store-text",
    module: "Variables",
    moduleSlug: "variables",
    order: 3,
    title: "Usar input para guardar texto",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Recoge una respuesta simple de la persona usuaria y guárdala en una variable.",
    warmup: "Un programa se vuelve más interesante cuando puede responder a una persona real en lugar de solo imprimir texto fijo.",
    goal: "Al final, deberías poder usar `input()` para recibir texto, guardarlo en una variable e imprimir una respuesta simple.",
    keyIdeas: [
      {
        title: "`input()` espera una respuesta",
        description: "Permite que la persona escriba algo dentro del programa."
      },
      {
        title: "La respuesta se puede guardar",
        description: "Puedes guardar el resultado de `input()` dentro de una variable."
      },
      {
        title: "Después puedes usarla",
        description: "Imprimir el valor guardado hace que el programa se sienta interactivo."
      }
    ],
    explanation: [
      {
        title: "Qué hace `input()`",
        body: "Cuando Python llega a `input()`, se detiene y espera a que alguien escriba algo. Lo que esa persona escriba vuelve como texto."
      },
      {
        title: "Guarda la respuesta en una variable",
        body: "Un patrón común al empezar es `name = input('¿Cómo te llamas? ')`. Estás haciendo una pregunta y guardando la respuesta."
      },
      {
        title: "Usa la variable en una respuesta",
        body: "Después de guardar la respuesta, puedes imprimirla de vuelta. Es una interacción simple, pero real."
      },
      {
        title: "Mantén la primera versión pequeña",
        body: "Por ahora, una pregunta y una respuesta son suficientes. Claro y simple es mejor que complicado y confuso."
      }
    ],
    example: "name = input('¿Cómo te llamas? ')\nprint('Hola, ' + name)",
    practicePrompt: "Pide a la persona su snack favorito, guarda la respuesta en `snack` e imprime una respuesta amable usando esa variable.",
    practiceChecklist: [
      "Usa `input()` una vez.",
      "Guarda la respuesta en una variable con un nombre claro.",
      "Imprime una respuesta corta que incluya lo que se guardó."
    ],
    commonMistakes: [
      "Olvidar guardar el resultado de `input()` en una variable.",
      "Intentar usar una variable que nunca fue creada.",
      "Hacer el programa demasiado largo antes de que funcione la versión simple."
    ],
    bugChallenge: {
      prompt: "Este programa debería pedir un nombre y saludar, pero un detalle de sintaxis rompe la primera línea.",
      brokenCode: "name = input('¿Cómo te llamas? '\nprint('Hola, ' + name)",
      expectedLearning: "Las llamadas a funciones necesitan paréntesis que se abran y se cierren correctamente, además de comillas."
    },
    playground: {
      title: "Prueba `input()` en el navegador",
      guidance: "Ejecuta el código y responde la ventana del navegador. PyMentor pasará tu respuesta a Python para que veas volver el saludo.",
      starterCode: "name = input('¿Cómo te llamas? ')\nprint('Hola, ' + name)",
      emptyOutputHint: "Si tu código usa `input()`, el navegador te pedirá ese valor antes de que Python continúe."
    },
    exerciseSlug: "friendly-intro-input"
  },
  {
    slug: "python-conditionals-basics",
    module: "Condicionales",
    moduleSlug: "conditionals",
    order: 1,
    title: "Condicionales: ayudar a Python a elegir",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "Aprende cómo Python toma decisiones para que tu programa pueda responder distinto según lo que sea verdadero.",
    warmup: "Si una amistad te pregunta si necesita paraguas, tu respuesta depende del clima. Los programas toman decisiones de una forma parecida.",
    goal: "Al final de esta lección, deberías poder leer y escribir un `if` simple y detectar dos errores muy comunes al empezar.",
    keyIdeas: [
      {
        title: "Una condición es una pregunta",
        description: "Python comprueba si algo es verdadero o falso antes de decidir qué hacer."
      },
      {
        title: "Los bloques van juntos",
        description: "Las líneas indentadas forman parte de la decisión. Python usa el espaciado para entender la estructura."
      },
      {
        title: "Puedes probar más de un camino",
        description: "Usa `elif` para otra opción y `else` como salida final cuando nada de lo anterior coincide."
      }
    ],
    explanation: [
      {
        title: "Qué hace un condicional",
        body: "Un condicional es un punto de decisión. Tu programa revisa una condición, por ejemplo si un puntaje está por encima de 70, y luego elige el camino que corresponde."
      },
      {
        title: "Léelo como una pregunta",
        body: "Puedes leer `if age >= 18` así: 'Si age es al menos 18, ejecuta este bloque de código'. Leerlo primero en lenguaje normal hace que la lógica asuste menos."
      },
      {
        title: "La indentación importa",
        body: "En Python, las líneas indentadas debajo de `if` pertenecen a esa decisión. Si el espaciado es inconsistente, Python puede mostrar un error aunque la idea esté bien."
      },
      {
        title: "Solo se ejecuta una rama",
        body: "Python revisa las ramas de arriba hacia abajo. En cuanto una condición es verdadera, ejecuta ese bloque y salta el resto."
      }
    ],
    example: "score = 82\n\nif score >= 90:\n    print('Excelente trabajo')\nelif score >= 70:\n    print('Vas muy bien')\nelse:\n    print('Sigue practicando')\n\n# Salida: Vas muy bien",
    practicePrompt: "Crea un programa que revise un valor de temperatura. Imprime `Frío` si es menor a 15, `Templado` si va de 15 a 25 y `Calor` si es mayor a 25.",
    practiceChecklist: [
      "Empieza con una variable llamada `temperature`.",
      "Escribe una rama `if`, una `elif` y una `else`.",
      "Lee tu condición en voz alta antes de ejecutarla.",
      "Comprueba que la indentación sea consistente."
    ],
    commonMistakes: [
      "Usar `=` en lugar de `==` al comparar valores. `=` asigna un valor, mientras que `==` compara dos valores.",
      "Olvidar los dos puntos `:` al final de la línea con `if`. Python usa ese signo para empezar un bloque.",
      "Mezclar tabulaciones y espacios o cambiar el ancho de la indentación dentro del mismo bloque."
    ],
    bugChallenge: {
      prompt: "Este programa debería imprimir `Adulto` cuando age es 18 o más. Ahora tiene errores de sintaxis que frenan a Python antes de que la lógica pueda correr.",
      brokenCode: "age = 18\n\nif age => 18\n    print('Adulto')\nelse:\n    print('Menor')",
      expectedLearning: "Fíjate que al empezar muchas veces primero hay que arreglar la sintaxis: usar el operador correcto y terminar la línea de `if` con dos puntos."
    },
    exerciseSlug: "fix-the-conditional"
  },
  {
    slug: "elif-and-else-paths",
    module: "Condicionales",
    moduleSlug: "conditionals",
    order: 2,
    title: "Usar `elif` y `else` para más caminos",
    duration: "13 min",
    difficulty: "Beginner",
    summary: "Amplía decisiones simples dándole a Python más de un camino posible.",
    warmup: "Si un semáforo puede estar en rojo, amarillo o verde, un solo `if` no alcanza. Necesitas más caminos.",
    goal: "Al final, deberías saber cuándo usar `elif` y cuándo `else` tiene sentido como camino final.",
    keyIdeas: [
      {
        title: "Usa `elif` para otra comprobación",
        description: "Le da a Python otra condición para revisar."
      },
      {
        title: "Usa `else` como salida final",
        description: "Se ejecuta cuando ninguna condición anterior coincide."
      },
      {
        title: "De arriba hacia abajo sigue importando",
        description: "Python revisa cada rama en orden hasta que una coincide."
      }
    ],
    explanation: [
      {
        title: "Cuando un `if` no alcanza",
        body: "A veces un programa necesita más de dos resultados posibles. `elif` te deja probar otra condición después de la primera."
      },
      {
        title: "Qué significa `else`",
        body: "`else` es la salida final. No hace una nueva pregunta. Simplemente se ejecuta si las condiciones anteriores dieron falso."
      },
      {
        title: "El orden cambia el resultado",
        body: "Si un umbral más bajo aparece primero, Python puede detenerse ahí antes de llegar a la rama más específica que querías."
      },
      {
        title: "Las ramas claras facilitan depurar",
        body: "Las ramas cortas y claras te ayudan a anticipar qué camino debería ejecutarse y a notar cuando el orden está mal."
      }
    ],
    example: "age = 16\n\nif age >= 18:\n    print('Adulto')\nelif age >= 13:\n    print('Adolescente')\nelse:\n    print('Niñez')",
    practicePrompt: "Escribe un programa que imprima `Alto` para un puntaje de 90 o más, `Medio` para 60 o más, y `Bajo` en cualquier otro caso.",
    practiceChecklist: [
      "Usa `if`, `elif` y `else` en ese orden.",
      "Coloca primero la comprobación más alta.",
      "Lee cada rama y pregúntate cuándo se ejecutará."
    ],
    commonMistakes: [
      "Poner primero un umbral bajo y hacer que el alto nunca se ejecute.",
      "Agregar una condición después de `else`.",
      "Indentar una rama distinto de las demás."
    ],
    bugChallenge: {
      prompt: "Este programa debería clasificar un puntaje, pero el orden de las comprobaciones está mal.",
      brokenCode: "score = 95\n\nif score >= 60:\n    print('Medio')\nelif score >= 90:\n    print('Alto')\nelse:\n    print('Bajo')",
      expectedLearning: "Cuando el orden cambia el resultado, conviene poner primero la condición más específica o más alta."
    },
    exerciseSlug: "score-band-order"
  },
  {
    slug: "comparison-questions-in-python",
    module: "Condicionales",
    moduleSlug: "conditionals",
    order: 3,
    title: "Preguntas de comparación en Python",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Entiende qué preguntan comparaciones como `==`, `>` y `>=` antes de que Python tome una decisión.",
    warmup: "Antes de decidir qué hacer, un programa necesita revisar una pregunta clara de sí o no.",
    goal: "Al final, deberías poder explicar qué pregunta hace una comparación y por qué su respuesta se vuelve `True` o `False`.",
    keyIdeas: [
      {
        title: "Las comparaciones hacen preguntas de sí o no",
        description: "Producen un resultado que es verdadero o falso."
      },
      {
        title: "Cada operador hace una pregunta distinta",
        description: "`==` revisa igualdad, `>` pregunta si es mayor y `>=` pregunta si es mayor o igual."
      },
      {
        title: "Los condicionales dependen de esas respuestas",
        description: "Una rama `if` se ejecuta cuando su comparación da verdadero."
      }
    ],
    explanation: [
      {
        title: "Qué significa `==`",
        body: "El operador `==` pregunta si dos valores son iguales. No guarda nada. Revisa la relación entre dos valores."
      },
      {
        title: "Qué significan `>` y `>=`",
        body: "`>` pregunta si el valor de la izquierda es mayor. `>=` pregunta si es mayor o exactamente igual."
      },
      {
        title: "Por qué importa la respuesta",
        body: "El resultado de una comparación se vuelve `True` o `False`. Esa respuesta es la que usa tu condicional para decidir qué rama ejecutar."
      },
      {
        title: "Primero lee la pregunta con palabras normales",
        body: "Si puedes decir la comparación en voz alta con palabras comunes, casi siempre el código se vuelve más fácil de razonar."
      }
    ],
    example: "score = 70\n\nprint(score == 70)\nprint(score > 70)\nprint(score >= 70)\n\n# Salida:\n# True\n# False\n# True",
    practicePrompt: "Elige un número para `coins` y escribe tres comparaciones: una que dé `True`, una que dé `False` y una que revise igualdad.",
    practiceChecklist: [
      "Usa al menos dos operadores de comparación distintos.",
      "Di cada comparación en voz alta con palabras simples.",
      "Comprueba si el resultado `True` o `False` que esperabas tiene sentido."
    ],
    commonMistakes: [
      "Usar `=` cuando querías poner `==`.",
      "Olvidar que `>=` incluye el caso de igualdad.",
      "Leer los símbolos demasiado rápido sin traducirlos a palabras."
    ],
    bugChallenge: {
      prompt: "Este código debería revisar si un puntaje es al menos 10, pero el operador cambia la pregunta.",
      brokenCode: "score = 10\n\nif score > 10:\n    print('Puntos suficientes')",
      expectedLearning: "Cambiar `>` por `>=` cambia de forma importante el sentido de la condición."
    },
    playground: {
      title: "Prueba preguntas de comparación",
      guidance: "Cambia el número y el operador de comparación, luego ejecuta el código para ver cómo cambia el resultado.",
      starterCode:
        "score = 70\n\nprint(score == 70)\nprint(score > 70)\nprint(score >= 70)",
      emptyOutputHint: "Unas pocas líneas con `print()` alcanzan para hacer visibles los resultados de la comparación."
    },
    exerciseSlug: "comparison-question-check"
  },
  {
    slug: "why-loops-help",
    module: "Bucles",
    moduleSlug: "loops",
    order: 1,
    title: "Por qué los bucles ayudan con la repetición",
    duration: "13 min",
    difficulty: "Beginner",
    summary: "Aprende qué es la repetición y por qué los bucles te ahorran escribir la misma línea una y otra vez.",
    warmup: "Si necesitas aplaudir tres veces, no escribes tres reglas distintas para aplaudir. Un bucle funciona igual en el código.",
    goal: "Al final, deberías entender que un bucle repite un bloque de código y que es útil cuando una misma acción debe ocurrir más de una vez.",
    keyIdeas: [
      {
        title: "Los bucles repiten trabajo",
        description: "Un bucle le permite a Python hacer la misma acción muchas veces."
      },
      {
        title: "La repetición puede seguir siendo legible",
        description: "Un bucle corto suele ser más claro que copiar la misma línea una y otra vez."
      },
      {
        title: "El cuerpo del bucle es el bloque que se repite",
        description: "Las líneas indentadas debajo del bucle son los pasos que se repiten."
      }
    ],
    explanation: [
      {
        title: "Por qué la repetición aparece tan pronto",
        body: "Apenas empiezas a crear programas, aparecen tareas que se repiten: imprimir varias líneas, contar elementos o hacer la misma comprobación muchas veces."
      },
      {
        title: "Qué cambia un bucle",
        body: "En lugar de copiar una línea tres o cuatro veces, le dices a Python que la repita por ti. Eso hace que tu código sea más corto y más fácil de cambiar después."
      },
      {
        title: "Un bucle igual se lee de arriba hacia abajo",
        body: "Python llega a la línea del bucle y luego ejecuta el bloque indentado una y otra vez hasta que el bucle termina. Leerlo con calma ayuda a entenderlo."
      },
      {
        title: "Empieza con una repetición simple",
        body: "Al principio los bucles no tienen que ser sofisticados. Repetir una sola línea corta con `print()` ya alcanza para aprender la idea principal."
      }
    ],
    example: "for _ in range(3):\n    print('Practicar también es avanzar')",
    practicePrompt: "Escribe un bucle que imprima `Los pasos pequeños importan` tres veces.",
    practiceChecklist: [
      "Empieza con `for` y `range(3)`.",
      "Indenta la línea con `print()` debajo del bucle.",
      "Ejecuta el código y cuenta cuántas veces aparece el mensaje."
    ],
    commonMistakes: [
      "Olvidar indentar la línea que se repite.",
      "Esperar que el bucle se ejecute para siempre en vez de una cantidad fija de veces.",
      "Escribir el código repetido a mano en lugar de ponerlo dentro del bucle."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir el mismo mensaje tres veces, pero la línea repetida no está dentro del cuerpo del bucle.",
      brokenCode: "for _ in range(3):\nprint('Sigue avanzando')",
      expectedLearning: "Las líneas indentadas pertenecen al bucle. Sin indentación, Python no puede ver qué debe repetirse."
    },
    playground: {
      title: "Mira la repetición en acción",
      guidance: "Ejecuta el bucle, luego cambia el mensaje o el número en `range()` y observa cómo cambia la repetición.",
      starterCode: "for _ in range(3):\n    print('Practicar también es avanzar')",
      emptyOutputHint: "Un bucle suele entenderse mejor cuando ves la salida repetida."
    },
    exerciseSlug: "read-cheer-loop-output"
  },
  {
    slug: "for-loops-with-range",
    module: "Bucles",
    moduleSlug: "loops",
    order: 2,
    title: "Contar con bucles `for` y `range()`",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Usa `range()` para repetir un bucle una cantidad específica de veces y construir una salida simple de conteo.",
    warmup: "Si quieres que Python recorra una pequeña secuencia de números, `range()` le da esos pasos.",
    goal: "Al final, deberías poder usar `for` con `range()` para imprimir una secuencia simple como 1, 2, 3.",
    keyIdeas: [
      {
        title: "`range()` da los pasos del conteo",
        description: "Le entrega al bucle los valores por los que va pasando."
      },
      {
        title: "La variable del bucle cambia en cada vuelta",
        description: "Dentro del bucle, la variable guarda el paso actual."
      },
      {
        title: "Leer la salida revela el patrón",
        description: "Un bucle de conteo debería mostrar una secuencia visible cuando imprimes la variable del bucle."
      }
    ],
    explanation: [
      {
        title: "Qué significa `range(3)`",
        body: "Cuando usas `range(3)`, Python le da al bucle tres pasos: 0, 1 y 2. Por eso el bucle se repite tres veces."
      },
      {
        title: "Imprimir la variable del bucle",
        body: "Si escribes `for number in range(3): print(number)`, Python imprime el valor actual en cada vuelta del bucle."
      },
      {
        title: "Empezar en 1 en vez de 0",
        body: "Puedes usar `range(1, 4)` cuando quieres 1, 2, 3. El primer número indica dónde empieza el conteo y el último no se incluye."
      },
      {
        title: "Este patrón aparece en muchos lados",
        body: "Los bucles simples de conteo son el comienzo de barras de progreso, rondas repetidas de práctica y muchos otros programas amigables para principiantes."
      }
    ],
    example: "for number in range(1, 4):\n    print(number)",
    practicePrompt: "Escribe un bucle que imprima los números 1, 2, 3 y 4, uno por línea.",
    practiceChecklist: [
      "Usa una variable de bucle como `number`.",
      "Elige un `range()` que empiece y termine en el lugar correcto.",
      "Ejecuta el código y compara la secuencia impresa con lo que esperabas."
    ],
    commonMistakes: [
      "Olvidar que el último número de `range()` no se incluye.",
      "Indentar mal la línea con `print()`.",
      "Imprimir la variable equivocada o un número fijo en cada vuelta."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir 1, 2 y 3, pero el punto de corte hace que la salida sea demasiado corta.",
      brokenCode: "for number in range(1, 3):\n    print(number)",
      expectedLearning: "El último número de `range()` no se incluye, así que muchas veces necesitas llegar uno más arriba de lo que piensas al principio."
    },
    playground: {
      title: "Prueba a contar con range",
      guidance: "Ejecuta el bucle y luego cambia los valores de inicio y fin para ver cómo cambia la secuencia impresa.",
      starterCode: "for number in range(1, 4):\n    print(number)",
      emptyOutputHint: "Un bucle de conteo debería mostrar un número impreso en cada línea."
    },
    exerciseSlug: "build-counting-loop"
  },
  {
    slug: "reading-loop-output-calmly",
    module: "Bucles",
    moduleSlug: "loops",
    order: 3,
    title: "Leer la salida de un bucle con calma",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Practica leer una salida repetida, detectar errores de una vuelta de más o de menos y corregir fallos simples en la estructura de un bucle.",
    warmup: "Los bucles pueden parecer intimidantes al principio porque un bloque corto produce muchas líneas de salida. El truco es leer una vuelta a la vez.",
    goal: "Al final, deberías poder seguir un bucle simple, predecir su salida y corregir un bug pequeño sin perderte.",
    keyIdeas: [
      {
        title: "Una vuelta a la vez",
        description: "Imagina el cuerpo del bucle ejecutándose una vez y luego otra, en lugar de intentar ver todo a la vez."
      },
      {
        title: "Los errores de una vuelta de más o de menos son comunes",
        description: "Un bucle puede repetirse una vez de más o una vez de menos si el `range()` está apenas corrido."
      },
      {
        title: "La indentación sigue importando",
        description: "Los bucles usan la indentación del mismo modo que los condicionales."
      }
    ],
    explanation: [
      {
        title: "Seguir un bucle en cámara lenta",
        body: "Toma el primer valor que usa el bucle, lee el cuerpo una vez y después pasa al siguiente valor. Esa mirada paso a paso evita que la repetición se sienta caótica."
      },
      {
        title: "Qué significa un error de una vuelta de más o de menos",
        body: "Ese error aparece cuando el bucle se repite una vez extra o se detiene un paso antes. Es muy común con `range()` y suele ser fácil de corregir."
      },
      {
        title: "Usa la salida como pista",
        body: "Si la salida tiene demasiadas líneas o termina demasiado pronto, normalmente significa que la estructura del bucle está cerca de estar bien, pero tu `range()` o tu indentación necesitan un ajuste."
      },
      {
        title: "Mantén el foco en el patrón",
        body: "Una buena pregunta al empezar es: ¿qué debería pasar en cada vuelta y cuántas vueltas debería haber?"
      }
    ],
    example: "for step in range(1, 4):\n    print('Paso', step)\nprint('Listo')",
    practicePrompt: "Escribe un bucle que imprima `Paso 1`, `Paso 2` y `Paso 3`, y luego imprima `Listo` cuando el bucle termine.",
    practiceChecklist: [
      "Deja la línea `print('Listo')` fuera del bucle.",
      "Usa una variable de conteo dentro del bucle.",
      "Lee la salida final línea por línea para confirmar el patrón."
    ],
    commonMistakes: [
      "Indentar `Listo` dentro del bucle por accidente.",
      "Usar un `range()` que repite demasiadas o muy pocas veces.",
      "Intentar depurar todo el bucle de golpe en lugar de seguir una vuelta a la vez."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir tres pasos y luego `Listo`, pero un error de indentación cambia el patrón de salida.",
      brokenCode: "for step in range(1, 4):\n    print('Paso', step)\n    print('Listo')",
      expectedLearning: "Una línea que va fuera del bucle no debe estar indentada. Un cambio pequeño de indentación puede cambiar por completo la salida repetida."
    },
    playground: {
      title: "Sigue la salida del bucle",
      guidance: "Ejecuta el código, luego cambia el `range()` o la posición de la línea final para ver cómo cambia el patrón.",
      starterCode: "for step in range(1, 4):\n    print('Paso', step)\nprint('Listo')",
      emptyOutputHint: "La salida debería mostrar varias líneas de pasos y luego una sola línea final fuera del bucle."
    },
    exerciseSlug: "fix-step-loop"
  },
  {
    slug: "why-functions-help",
    module: "Funciones",
    moduleSlug: "functions",
    order: 1,
    title: "Por qué las funciones ayudan",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Aprende qué es una función con palabras simples y por qué las acciones con nombre te ayudan a no repetirte.",
    warmup: "Si preparas té cada mañana, probablemente piensas en eso como una rutina, no como diez instrucciones separadas. Una función es como ponerle nombre a esa rutina dentro del código.",
    goal: "Al final, deberías entender que una función es un bloque de código con nombre que puedes ejecutar cada vez que necesites esa acción.",
    keyIdeas: [
      {
        title: "Una función es una acción con nombre",
        description: "Agrupa algunos pasos y les da un nombre claro."
      },
      {
        title: "Las funciones reducen repetición",
        description: "Puedes llamar a la función en lugar de reescribir el mismo bloque."
      },
      {
        title: "Un buen nombre explica el trabajo",
        description: "Los nombres claros de funciones hacen que el código sea más fácil de leer."
      }
    ],
    explanation: [
      {
        title: "Por qué las funciones aparecen después de los bucles",
        body: "Los bucles te ayudaron a repetir la misma acción muchas veces. Las funciones te ayudan a empaquetar una acción útil para ejecutarla cuando la necesites en distintas partes del programa."
      },
      {
        title: "Piensa en rutinas con nombre",
        body: "Una función te permite decir: 'Aquí hay una tarea pequeña que mi programa sabe hacer'. Eso evita que tu código se convierta en una pared larguísima de instrucciones."
      },
      {
        title: "Las funciones facilitan los cambios",
        body: "Si ese comportamiento tiene que cambiar después, muchas veces puedes actualizar la función en un solo lugar en vez de buscar código repetido por todos lados."
      },
      {
        title: "Empieza con funciones pequeñas",
        body: "Tu primera función no tiene que ser ingeniosa. Incluso una función corta de saludo alcanza para aprender el patrón."
      }
    ],
    example: "def cheer():\n    print('Sigue adelante')\n\ncheer()\ncheer()",
    practicePrompt: "Escribe una función llamada `welcome()` que imprima una línea amable y luego llámala dos veces.",
    practiceChecklist: [
      "Empieza con `def welcome():`.",
      "Indenta la línea con `print()` dentro de la función.",
      "Llama a la función por su nombre después de definirla."
    ],
    commonMistakes: [
      "Olvidar los paréntesis al llamar a una función.",
      "Dejar el cuerpo de la función sin indentación.",
      "Usar un nombre poco claro como `thing()` en vez de uno que diga qué hace."
    ],
    bugChallenge: {
      prompt: "Este código debería definir una función y llamarla, pero dos detalles de sintaxis rompen el patrón.",
      brokenCode: "def welcome()\nprint('Hola')\n\nwelcome",
      expectedLearning: "Una definición de función necesita dos puntos, el cuerpo debe estar indentado y llamar a una función requiere paréntesis."
    },
    playground: {
      title: "Prueba tu primera función",
      guidance: "Ejecuta el código, luego cambia el nombre de la función o el mensaje. Observa cómo llamar dos veces a la misma función repite el comportamiento sin copiar la línea de `print()`.",
      starterCode: "def cheer():\n    print('Sigue adelante')\n\ncheer()\ncheer()",
      emptyOutputHint: "Un ejemplo correcto de función debería imprimir el mismo mensaje cada vez que la llames."
    },
    exerciseSlug: "read-greet-function-output"
  },
  {
    slug: "defining-and-calling-functions",
    module: "Funciones",
    moduleSlug: "functions",
    order: 2,
    title: "Definir y llamar una función básica",
    duration: "15 min",
    difficulty: "Beginner",
    summary: "Practica la forma exacta de una función pequeña: definirla, indentar el cuerpo y llamarla con claridad.",
    warmup: "Una función tiene dos partes: primero le enseñas la rutina a Python y luego le dices que la ejecute.",
    goal: "Al final, deberías poder definir una función simple y llamarla con seguridad sin confundir esos dos pasos.",
    keyIdeas: [
      {
        title: "Primero se define, después se llama",
        description: "Python necesita ver la definición de la función antes de que la llames."
      },
      {
        title: "La indentación marca el cuerpo de la función",
        description: "Las líneas indentadas pertenecen a la función, igual que en los bucles y condicionales."
      },
      {
        title: "Llamar usa el nombre de la función con paréntesis",
        description: "Los paréntesis le indican a Python que debe ejecutar la función."
      }
    ],
    explanation: [
      {
        title: "Qué hace `def`",
        body: "La palabra `def` le avisa a Python que estás definiendo una función. Le pones un nombre, agregas paréntesis y terminas la línea con dos puntos."
      },
      {
        title: "Por qué el cuerpo debe ir indentado",
        body: "Las líneas indentadas debajo de `def` son los pasos que Python debe recordar como parte de esa función. Sin indentación, Python no puede ver claramente el cuerpo de la función."
      },
      {
        title: "Qué significa llamar una función",
        body: "Después de definir la función, escribir `greet()` le dice a Python que ejecute ese bloque de código guardado. La definición explica la acción; la llamada la pone en marcha."
      },
      {
        title: "Separa la forma del significado",
        body: "Al principio las funciones pueden sentirse como un conjunto nuevo de signos. Es normal. Concéntrate en el patrón simple: definir, indentar, llamar."
      }
    ],
    example: "def greet():\n    print('Hola desde una función')\n\ngreet()",
    practicePrompt: "Crea una función llamada `show_tip()` que imprima `Los pasos pequeños importan` y luego llámala dos veces.",
    practiceChecklist: [
      "Escribe `def show_tip():` en su propia línea.",
      "Indenta la línea con `print()` debajo.",
      "Llama a `show_tip()` después de la definición."
    ],
    commonMistakes: [
      "Llamar la función antes de definirla.",
      "Escribir `show_tip` en lugar de `show_tip()`.",
      "Indentar la llamada como si todavía estuviera dentro de la función."
    ],
    bugChallenge: {
      prompt: "Este código debería definir `wave()` y llamarla, pero a la llamada le falta la parte que realmente ejecuta la función.",
      brokenCode: "def wave():\n    print('Hola')\n\nwave",
      expectedLearning: "El nombre de una función por sí solo no es lo mismo que llamarla. Los paréntesis importan."
    },
    playground: {
      title: "Construye y ejecuta una función básica",
      guidance: "Ejecuta el código, luego cambia el mensaje o llama a la función más de una vez. Es una forma simple de ver cómo una función se puede reutilizar.",
      starterCode: "def greet():\n    print('Hola desde una función')\n\ngreet()",
      emptyOutputHint: "Si no pasa nada, revisa si la función está siendo llamada con paréntesis."
    },
    exerciseSlug: "build-cheer-function"
  },
  {
    slug: "simple-parameters-and-function-mistakes",
    module: "Funciones",
    moduleSlug: "functions",
    order: 3,
    title: "Parámetros simples y errores comunes con funciones",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Aprende cómo una función puede recibir un dato pequeño y cómo depurar con calma errores comunes de funciones al empezar.",
    warmup: "Un saludo reutilizable se vuelve más útil cuando puedes elegir a quién saluda. Los parámetros permiten que la función reciba ese detalle.",
    goal: "Al final, deberías entender que un parámetro es una entrada con nombre para una función y poder detectar errores comunes de nombres, paréntesis e indentación.",
    keyIdeas: [
      {
        title: "Un parámetro es una entrada",
        description: "Le da a la función un valor para usar cuando se ejecuta."
      },
      {
        title: "La llamada entrega el valor real",
        description: "Pasas el valor dentro de los paréntesis cuando llamas a la función."
      },
      {
        title: "Los errores de funciones suelen ser fallos pequeños de forma",
        description: "Paréntesis faltantes, dos puntos ausentes y problemas de indentación son comunes y se pueden corregir."
      }
    ],
    explanation: [
      {
        title: "Por qué ayudan los parámetros",
        body: "Sin parámetros, podrías necesitar una función distinta para cada persona o cada valor. Con un parámetro, una sola función puede ser general y más útil."
      },
      {
        title: "Lee la definición con palabras simples",
        body: "Puedes leer `def greet(name):` así: 'Define una función llamada greet que espera un valor llamado name'."
      },
      {
        title: "Lee la llamada con palabras simples",
        body: "Puedes leer `greet('Maya')` así: 'Ejecuta greet usando Maya como valor para name'. Esa traducción simple hace que las llamadas de función se sientan mucho menos abstractas."
      },
      {
        title: "Mantén la calma con los errores de funciones",
        body: "Si una función no está funcionando, empieza revisando la forma: la línea con `def`, los dos puntos, la indentación, los paréntesis y si la llamada pasa el valor que esperabas."
      }
    ],
    example: "def greet(name):\n    print('Hola, ' + name)\n\ngreet('Maya')",
    practicePrompt: "Escribe una función llamada `cheer(name)` que imprima `Tú puedes, ` más el nombre dado, y luego llámala con un nombre.",
    practiceChecklist: [
      "Pon un nombre de parámetro dentro de los paréntesis de la función.",
      "Usa ese parámetro dentro de `print()`.",
      "Llama a la función con un valor entre comillas."
    ],
    commonMistakes: [
      "Definir el parámetro pero olvidar usarlo dentro de la función.",
      "Llamar a la función sin pasar el valor que necesita.",
      "Poner la llamada dentro del cuerpo de la función por accidente."
    ],
    bugChallenge: {
      prompt: "Este código debería saludar a una persona por nombre, pero la línea de la función y la llamada no están bien formadas.",
      brokenCode: "def greet(name)\n    print('Hola, ' + name)\n\ngreet",
      expectedLearning: "Las definiciones de funciones necesitan dos puntos, y para ejecutarlas hacen falta paréntesis en la llamada."
    },
    playground: {
      title: "Prueba una función con parámetro",
      guidance: "Ejecuta el código y luego cambia el nombre en la llamada. Este es el primer paso hacia funciones reutilizables que sirven con valores distintos.",
      starterCode: "def greet(name):\n    print('Hola, ' + name)\n\ngreet('Maya')",
      emptyOutputHint: "Una función con parámetro que esté bien debería imprimir el saludo usando el valor de la llamada."
    },
    exerciseSlug: "fix-name-greeter-function"
  },
  {
    slug: "mini-project-personal-greeter",
    module: "Mini proyectos",
    moduleSlug: "mini-projects",
    order: 1,
    title: "Mini proyecto: saludo personal reutilizable",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Construye un programa pequeño que pida un nombre y use una función para mostrar un saludo más personal.",
    warmup: "Hasta ahora ya viste piezas sueltas. Este proyecto te muestra cómo esas piezas se juntan para crear algo que ya se siente como un programa real.",
    goal: "Al final, deberías poder construir un saludo personal que combine `input()`, una variable y una función simple.",
    keyIdeas: [
      {
        title: "Un proyecto pequeño también es un proyecto real",
        description: "No hace falta construir algo enorme para sentir que terminaste algo útil."
      },
      {
        title: "Las funciones ayudan a ordenar",
        description: "Una función te permite separar el saludo del resto del programa."
      },
      {
        title: "La interacción hace que el programa se sienta vivo",
        description: "Pedir un nombre y responderlo crea una experiencia más real que imprimir texto fijo."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este proyecto pedirá un nombre y luego usará una función para mostrar un mensaje de bienvenida. Es corto, pero ya combina varias ideas importantes del camino."
      },
      {
        title: "Cómo dividirlo en pasos",
        body: "Primero pide el nombre con `input()`. Después define una función que reciba ese nombre. Por último, llama a la función con el valor que guardaste."
      },
      {
        title: "Por qué vale la pena usar una función",
        body: "Podrías escribir el `print()` directamente, pero usar una función hace que el programa quede mejor organizado y te prepara para proyectos un poco más grandes."
      },
      {
        title: "Busca una primera versión simple",
        body: "Tu objetivo no es hacer un sistema complicado. Tu objetivo es terminar un programa pequeño, claro y funcionando."
      }
    ],
    example: "def saludar(name):\n    print('Hola, ' + name)\n\nname = input('¿Cómo te llamas? ')\nsaludar(name)",
    practicePrompt: "Prueba cambiar el mensaje del saludo o el nombre de la función. Lo importante es que el programa siga pidiendo un nombre y respondiendo con ese valor.",
    practiceChecklist: [
      "Usa `input()` para pedir un nombre.",
      "Guarda la respuesta en una variable.",
      "Define una función que use ese nombre.",
      "Llama a la función después de pedir el dato."
    ],
    commonMistakes: [
      "Pedir el nombre pero no usarlo después.",
      "Definir la función y olvidar llamarla.",
      "Poner la llamada a la función dentro de la definición por accidente."
    ],
    bugChallenge: {
      prompt: "Este proyecto debería pedir un nombre y saludar, pero la función no está bien cerrada ni se llama correctamente.",
      brokenCode: "def saludar(name)\n    print('Hola, ' + name)\n\nname = input('¿Cómo te llamas? ')\nsaludar",
      expectedLearning: "En proyectos pequeños, casi siempre conviene revisar primero la forma de la función: dos puntos, indentación y llamada."
    },
    playground: {
      title: "Construye el saludo personal",
      guidance: "Ejecuta el proyecto, responde el nombre y observa cómo una función simple hace que el saludo se sienta más ordenado y reutilizable.",
      starterCode: "def saludar(name):\n    print('Hola, ' + name)\n\nname = input('¿Cómo te llamas? ')\nsaludar(name)",
      emptyOutputHint: "Si tu proyecto usa `input()`, primero responde la pregunta del navegador y luego mira la salida."
    },
    exerciseSlug: "build-personal-greeter-project"
  },
  {
    slug: "mini-project-score-checker",
    module: "Mini proyectos",
    moduleSlug: "mini-projects",
    order: 2,
    title: "Mini proyecto: verificador simple de puntajes",
    duration: "20 min",
    difficulty: "Beginner",
    summary: "Crea un pequeño verificador que clasifique un puntaje usando una función y decisiones claras.",
    warmup: "Un proyecto pequeño se siente más real cuando toma un dato y responde algo útil. Clasificar un puntaje es un buen primer ejemplo.",
    goal: "Al final, deberías poder construir un programa corto que use una función con un puntaje y responda con una categoría simple.",
    keyIdeas: [
      {
        title: "Las decisiones le dan utilidad al programa",
        description: "Un programa empieza a sentirse práctico cuando responde distinto según un valor."
      },
      {
        title: "Una función puede contener la lógica",
        description: "La clasificación puede vivir dentro de una función en lugar de quedar suelta en todo el archivo."
      },
      {
        title: "Empieza con un valor fijo antes de complicarlo",
        description: "Para un primer proyecto, está bien usar una variable fija y concentrarte en la lógica."
      }
    ],
    explanation: [
      {
        title: "Qué problema resuelve este mini proyecto",
        body: "Vas a construir un programa que mire un puntaje y diga algo como `Excelente`, `Buen trabajo` o `Sigue practicando`. No es complejo, pero ya se siente útil."
      },
      {
        title: "Cómo organizar la solución",
        body: "Primero guarda el puntaje en una variable. Después crea una función que revise ese valor con `if`, `elif` y `else`. Por último, llama a esa función."
      },
      {
        title: "Qué estás practicando de verdad",
        body: "Aquí estás uniendo variables, condicionales y funciones dentro de una sola pieza. Esa mezcla es justamente la base de muchos programas pequeños."
      },
      {
        title: "Menos ramas, más claridad",
        body: "No necesitas cinco categorías ni mensajes raros. Con tres caminos claros ya puedes terminar un proyecto que se entienda y funcione."
      }
    ],
    example: "def revisar_puntaje(score):\n    if score >= 90:\n        print('Excelente')\n    elif score >= 70:\n        print('Buen trabajo')\n    else:\n        print('Sigue practicando')\n\nscore = 85\nrevisar_puntaje(score)",
    practicePrompt: "Cambia el puntaje y vuelve a ejecutar el programa. Fíjate cómo cambia el mensaje sin tener que reescribir toda la lógica.",
    practiceChecklist: [
      "Guarda un puntaje en una variable.",
      "Define una función que reciba ese puntaje.",
      "Usa `if`, `elif` y `else` para clasificarlo.",
      "Llama a la función con el puntaje guardado."
    ],
    commonMistakes: [
      "Poner primero una condición más baja y esconder la más alta.",
      "Olvidar llamar a la función al final.",
      "Cambiar el nombre de la variable en un lugar y usar otro distinto después."
    ],
    bugChallenge: {
      prompt: "Este proyecto debería clasificar un puntaje alto como `Excelente`, pero el orden de las ramas hace que imprima otra cosa.",
      brokenCode: "def revisar_puntaje(score):\n    if score >= 70:\n        print('Buen trabajo')\n    elif score >= 90:\n        print('Excelente')\n    else:\n        print('Sigue practicando')\n\nscore = 95\nrevisar_puntaje(score)",
      expectedLearning: "En un mini proyecto real, el orden de las decisiones importa tanto como la sintaxis."
    },
    playground: {
      title: "Prueba el verificador de puntajes",
      guidance: "Ejecuta el proyecto con un puntaje fijo y luego cambia el número. Observa cómo una misma función responde distinto según el valor.",
      starterCode: "def revisar_puntaje(score):\n    if score >= 90:\n        print('Excelente')\n    elif score >= 70:\n        print('Buen trabajo')\n    else:\n        print('Sigue practicando')\n\nscore = 85\nrevisar_puntaje(score)",
      emptyOutputHint: "Un proyecto correcto debería imprimir una sola categoría según el puntaje."
    },
    exerciseSlug: "build-score-checker-project"
  },
  {
    slug: "mini-project-practice-counter",
    module: "Mini proyectos",
    moduleSlug: "mini-projects",
    order: 3,
    title: "Mini proyecto: contador de práctica",
    duration: "22 min",
    difficulty: "Beginner",
    summary: "Construye una pequeña herramienta que use una función y un bucle para mostrar pasos de progreso.",
    warmup: "Cuando un programa repite una secuencia clara, ya empieza a sentirse como una pequeña herramienta. Este proyecto busca justamente esa sensación.",
    goal: "Al final, deberías poder crear un contador corto que use una función, un bucle y una línea final de cierre.",
    keyIdeas: [
      {
        title: "Los bucles muestran progreso",
        description: "Un conteo repetido hace visible el avance paso a paso."
      },
      {
        title: "Una función puede envolver todo el patrón",
        description: "Puedes guardar la secuencia repetida dentro de una función y llamarla cuando quieras."
      },
      {
        title: "El cierre final también comunica",
        description: "Una línea final fuera del bucle hace que el proyecto se sienta más completo."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este mini proyecto imprimirá algo como `Paso 1`, `Paso 2`, `Paso 3` y luego una línea final que marque que terminaste. Es simple, pero tiene una estructura muy útil."
      },
      {
        title: "Por qué mezcla bien los fundamentos",
        body: "Estás usando una función para agrupar, un bucle para repetir y una línea final para cerrar el recorrido. Eso ya se parece bastante a la lógica de herramientas pequeñas reales."
      },
      {
        title: "Qué conviene vigilar",
        body: "Mira bien la indentación y recuerda que la línea final debe quedar fuera del bucle. También revisa el `range()` para que el conteo llegue hasta donde quieres."
      },
      {
        title: "Qué hace que se sienta terminado",
        body: "No se trata solo de que el código corra. Se trata de que la salida tenga un principio, un patrón claro y un final entendible."
      }
    ],
    example: "def mostrar_progreso():\n    for step in range(1, 4):\n        print('Paso', step)\n    print('Sesión lista')\n\nmostrar_progreso()",
    practicePrompt: "Prueba cambiar la cantidad de pasos o el mensaje final. La idea principal es que el patrón siga claro y que el cierre ocurra una sola vez.",
    practiceChecklist: [
      "Define una función para el progreso.",
      "Usa un bucle `for` dentro de la función.",
      "Imprime el número de paso en cada vuelta.",
      "Deja la línea final fuera del bucle, pero dentro de la función."
    ],
    commonMistakes: [
      "Poner la línea final dentro del bucle por accidente.",
      "Usar un `range()` que no llega al último paso esperado.",
      "Olvidar llamar a la función después de definirla."
    ],
    bugChallenge: {
      prompt: "Este proyecto debería mostrar tres pasos y un cierre final, pero una línea quedó mal indentada y cambia el resultado.",
      brokenCode: "def mostrar_progreso():\n    for step in range(1, 4):\n        print('Paso', step)\n        print('Sesión lista')\n\nmostrar_progreso()",
      expectedLearning: "En un proyecto pequeño, una sola indentación puede cambiar por completo la experiencia que ve la persona usuaria."
    },
    playground: {
      title: "Prueba el contador de práctica",
      guidance: "Ejecuta el proyecto y mira la secuencia completa. Luego cambia la cantidad de pasos o el mensaje final para seguir explorando el patrón.",
      starterCode: "def mostrar_progreso():\n    for step in range(1, 4):\n        print('Paso', step)\n    print('Sesión lista')\n\nmostrar_progreso()",
      emptyOutputHint: "La salida debería mostrar varios pasos y una sola línea final al terminar."
    },
    exerciseSlug: "build-practice-counter-project"
  },
  {
    slug: "what-a-list-is",
    module: "Listas",
    moduleSlug: "lists",
    order: 1,
    title: "Qué es una lista y por qué ayuda",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Aprende qué es una lista con palabras simples y por qué sirve cuando tienes varios valores relacionados.",
    warmup: "Si anotas tres meriendas favoritas, no necesitas tres variables separadas para entender la idea. Una lista te deja guardar ese grupo junto.",
    goal: "Al final, deberías poder explicar que una lista guarda varios valores relacionados dentro de una sola estructura.",
    keyIdeas: [
      {
        title: "Una lista agrupa valores",
        description: "Sirve para guardar varios datos relacionados en un mismo lugar."
      },
      {
        title: "Los corchetes muestran la lista",
        description: "En Python, las listas se escriben entre `[` y `]`."
      },
      {
        title: "No reemplaza todo lo anterior",
        description: "Las listas se suman a variables, bucles y funciones para hacer programas más útiles."
      }
    ],
    explanation: [
      {
        title: "Por qué aparece esta herramienta ahora",
        body: "Después de variables, condicionales, bucles, funciones y mini proyectos, ya conoces muchas piezas. Ahora necesitas una forma simple de guardar varios valores que pertenecen al mismo grupo."
      },
      {
        title: "Cómo pensar una lista en lenguaje normal",
        body: "Una lista es como una pequeña colección ordenada. En vez de guardar `fruta1`, `fruta2` y `fruta3`, puedes guardar `['manzana', 'pera', 'uva']` en un solo lugar."
      },
      {
        title: "Qué hace que sea útil",
        body: "Las listas son útiles porque te permiten mirar, recorrer y usar varios valores sin inventar una variable nueva para cada uno. Eso hace que los programas sean más claros."
      },
      {
        title: "Empieza con listas cortas",
        body: "No necesitas listas largas ni casos raros. Con dos o tres elementos ya puedes entender la idea principal y usarla en ejercicios reales."
      }
    ],
    example: "snacks = ['galletas', 'fruta', 'yogur']\nprint(snacks)",
    practicePrompt: "Crea una lista llamada `colores` con tres colores y luego imprímela completa.",
    practiceChecklist: [
      "Usa corchetes para crear la lista.",
      "Separa los elementos con comas.",
      "Imprime la variable que guarda la lista."
    ],
    commonMistakes: [
      "Olvidar un corchete de apertura o de cierre.",
      "Olvidar las comas entre elementos.",
      "Confundir una lista con una sola cadena larga de texto."
    ],
    bugChallenge: {
      prompt: "Este código debería guardar tres comidas en una lista, pero un detalle de sintaxis rompe la estructura.",
      brokenCode: "comidas = ['pizza', 'ensalada' 'sopa']\nprint(comidas)",
      expectedLearning: "En una lista, los elementos se separan con comas y los corchetes tienen que quedar completos."
    },
    playground: {
      title: "Prueba tu primera lista",
      guidance: "Ejecuta la lista, cambia los elementos y vuelve a correr el código. La idea es ver que varios valores pueden vivir juntos dentro de una sola variable.",
      starterCode: "snacks = ['galletas', 'fruta', 'yogur']\nprint(snacks)",
      emptyOutputHint: "Una lista correcta debería mostrarse entre corchetes cuando la imprimes completa."
    },
    exerciseSlug: "explain-what-a-list-holds"
  },
  {
    slug: "reading-values-from-a-list",
    module: "Listas",
    moduleSlug: "lists",
    order: 2,
    title: "Leer valores dentro de una lista",
    duration: "15 min",
    difficulty: "Beginner",
    summary: "Aprende a mirar un valor dentro de una lista usando un índice simple, sin convertirlo en algo abstracto.",
    warmup: "Si una lista es una colección ordenada, entonces cada elemento ocupa una posición. Leer una posición es el siguiente paso natural.",
    goal: "Al final, deberías poder leer un valor de una lista con un índice simple y entender por qué el primer índice es 0.",
    keyIdeas: [
      {
        title: "Cada elemento tiene una posición",
        description: "Python usa índices para señalar qué valor quieres leer."
      },
      {
        title: "El primer índice es 0",
        description: "Eso puede sorprender al principio, pero es una regla normal en Python."
      },
      {
        title: "Leer un valor no cambia la lista",
        description: "Solo estás mirando un elemento de la colección."
      }
    ],
    explanation: [
      {
        title: "Qué significa usar un índice",
        body: "Si escribes `frutas[0]`, le estás diciendo a Python: 'Muéstrame el primer valor de esta lista'. El número dentro de los corchetes indica qué posición quieres mirar."
      },
      {
        title: "Por qué empieza en 0",
        body: "En Python, la primera posición de muchas colecciones se cuenta desde 0. No necesitas pelearte con eso: al principio solo recuerda que `0` significa primer elemento, `1` segundo y `2` tercero."
      },
      {
        title: "Leer con calma evita confusiones",
        body: "Cuando una lista tiene pocos elementos, una buena práctica es leerla despacio: primero mira la lista completa y después revisa qué valor corresponde a cada índice."
      },
      {
        title: "Esto ayuda a programas más útiles",
        body: "Poder leer un valor concreto de una lista te prepara para mostrar mensajes, elegir datos y construir programas un poco más prácticos."
      }
    ],
    example: "frutas = ['manzana', 'pera', 'uva']\nprint(frutas[0])\nprint(frutas[2])",
    practicePrompt: "Crea una lista llamada `tareas` con tres tareas y luego imprime la primera y la tercera.",
    practiceChecklist: [
      "Crea una lista con tres elementos.",
      "Usa `0` para leer el primer valor.",
      "Usa `2` para leer el tercer valor."
    ],
    commonMistakes: [
      "Esperar que el primer índice sea 1.",
      "Usar paréntesis en lugar de corchetes.",
      "Pedir un índice que no existe en la lista."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir la primera fruta, pero el índice apunta al lugar equivocado.",
      brokenCode: "frutas = ['manzana', 'pera', 'uva']\nprint(frutas[1])",
      expectedLearning: "En Python, el primer elemento de una lista está en el índice 0."
    },
    playground: {
      title: "Lee posiciones de una lista",
      guidance: "Ejecuta el código, luego cambia los índices y mira cómo cambia el valor que aparece. Esa comparación ayuda mucho a fijar la idea.",
      starterCode: "frutas = ['manzana', 'pera', 'uva']\nprint(frutas[0])\nprint(frutas[2])",
      emptyOutputHint: "Prueba distintos índices y observa qué elemento de la lista aparece en la salida."
    },
    exerciseSlug: "pick-values-from-a-list"
  },
  {
    slug: "looping-through-a-list",
    module: "Listas",
    moduleSlug: "lists",
    order: 3,
    title: "Recorrer una lista con un bucle",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Aprende a recorrer una lista con un bucle `for` para mostrar cada valor sin escribir varias líneas separadas.",
    warmup: "Si ya sabes repetir con bucles, lo siguiente natural es repetir sobre una colección real. Ahí es donde las listas empiezan a sentirse útiles de verdad.",
    goal: "Al final, deberías poder recorrer una lista con un bucle `for` y leer la salida como una secuencia clara.",
    keyIdeas: [
      {
        title: "El bucle toma un elemento por vez",
        description: "En cada vuelta, la variable del bucle guarda un valor de la lista."
      },
      {
        title: "La lista se puede leer completa con repetición",
        description: "No necesitas escribir un `print()` separado para cada elemento."
      },
      {
        title: "La salida muestra el patrón",
        description: "Si el bucle está bien armado, verás aparecer los valores uno después del otro."
      }
    ],
    explanation: [
      {
        title: "Qué cambia cuando unes listas y bucles",
        body: "Hasta ahora usaste bucles para contar. Ahora el bucle puede ir pasando por cada valor de una lista. Eso abre la puerta a programas que trabajan con varios datos reales."
      },
      {
        title: "Cómo leer el patrón",
        body: "Si escribes `for fruta in frutas:`, puedes leerlo así: 'Para cada fruta dentro de la lista frutas, ejecuta este bloque'. Esa traducción simple evita que el código se sienta raro."
      },
      {
        title: "Por qué es útil",
        body: "Recorrer una lista permite mostrar opciones, imprimir recordatorios o procesar varios valores sin copiar el mismo código muchas veces."
      },
      {
        title: "Qué conviene revisar primero cuando falla",
        body: "Si el bucle no funciona, revisa la forma del `for`, los dos puntos al final y la indentación de la línea que se repite. Después mira si el nombre de la lista coincide."
      }
    ],
    example: "frutas = ['manzana', 'pera', 'uva']\nfor fruta in frutas:\n    print(fruta)",
    practicePrompt: "Crea una lista llamada `recordatorios` con tres mensajes y usa un bucle para imprimirlos uno por línea.",
    practiceChecklist: [
      "Crea una lista con varios valores.",
      "Usa `for` para recorrerla.",
      "Imprime la variable del bucle dentro del bloque."
    ],
    commonMistakes: [
      "Olvidar los dos puntos al final de la línea `for`.",
      "No indentar la línea con `print()`.",
      "Imprimir siempre la lista completa en lugar del valor actual del bucle."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir cada fruta por separado, pero una línea hace que el patrón no salga como esperas.",
      brokenCode: "frutas = ['manzana', 'pera', 'uva']\nfor fruta in frutas:\nprint(frutas)",
      expectedLearning: "Dentro del bucle debes imprimir el valor actual y mantener la indentación correcta."
    },
    playground: {
      title: "Recorre una lista con `for`",
      guidance: "Ejecuta el bucle y observa cómo aparece cada valor en una línea distinta. Luego cambia la lista para ver cómo el patrón se adapta.",
      starterCode: "frutas = ['manzana', 'pera', 'uva']\nfor fruta in frutas:\n    print(fruta)",
      emptyOutputHint: "Si el bucle está bien, deberías ver cada elemento de la lista en su propia línea."
    },
    exerciseSlug: "loop-through-a-list"
  },
  {
    slug: "what-a-dictionary-is",
    module: "Diccionarios",
    moduleSlug: "dictionaries",
    order: 1,
    title: "Qué es un diccionario y por qué ayuda",
    duration: "15 min",
    difficulty: "Beginner",
    summary: "Aprende qué es un diccionario con palabras simples y por qué sirve cuando quieres guardar datos relacionados con nombre y valor.",
    warmup: "Si quieres guardar nombre, edad y ciudad de una persona, usar variables sueltas funciona un rato. Un diccionario te da una forma más clara de mantener esos datos juntos.",
    goal: "Al final, deberías poder explicar que un diccionario guarda pares de clave y valor dentro de una sola estructura.",
    keyIdeas: [
      {
        title: "Un diccionario une nombres con valores",
        description: "Cada dato se guarda usando una clave que te ayuda a encontrarlo."
      },
      {
        title: "Las llaves muestran la estructura",
        description: "En Python, los diccionarios se escriben entre `{` y `}`."
      },
      {
        title: "Sirve cuando cada valor tiene una etiqueta clara",
        description: "Es útil para datos como nombre, edad, ciudad, puntaje o estado."
      }
    ],
    explanation: [
      {
        title: "Cómo pensar un diccionario en lenguaje normal",
        body: "Un diccionario guarda datos relacionados usando pequeñas etiquetas. En vez de recordar 'el primer valor es el nombre y el segundo es la edad', puedes escribir directamente `{'nombre': 'Ana', 'edad': 20}`."
      },
      {
        title: "Por qué aparece después de listas",
        body: "Las listas te ayudan cuando lo importante es el orden. Los diccionarios ayudan cuando lo importante es que cada dato tenga un nombre claro."
      },
      {
        title: "Qué hace que se sienta práctico",
        body: "Si un programa necesita guardar información de una persona, un juego o una tarea, un diccionario puede ser más claro que usar muchas variables separadas."
      },
      {
        title: "Empieza con ejemplos pequeños",
        body: "No necesitas estructuras grandes ni anidadas. Con dos o tres pares de clave y valor ya puedes entender la idea y usarla de forma real."
      }
    ],
    example: "perfil = {'nombre': 'Ana', 'edad': 20, 'ciudad': 'Córdoba'}\nprint(perfil)",
    practicePrompt: "Crea un diccionario llamado `mascota` con las claves `nombre`, `tipo` y `edad`, y luego imprímelo completo.",
    practiceChecklist: [
      "Usa llaves para crear el diccionario.",
      "Pon las claves de texto entre comillas.",
      "Separa cada par clave/valor con comas."
    ],
    commonMistakes: [
      "Olvidar las llaves de apertura o cierre.",
      "Olvidar los dos puntos entre la clave y el valor.",
      "Confundir un diccionario con una lista."
    ],
    bugChallenge: {
      prompt: "Este código debería guardar un perfil simple, pero un detalle de sintaxis rompe el diccionario.",
      brokenCode: "perfil = {'nombre': 'Ana', 'edad' 20}\nprint(perfil)",
      expectedLearning: "En un diccionario, cada clave necesita un `:` antes del valor y cada par debe quedar bien separado."
    },
    playground: {
      title: "Prueba tu primer diccionario",
      guidance: "Ejecuta el diccionario, cambia un dato y vuelve a correr el código. La idea es ver cómo varias piezas de información pueden vivir juntas con nombres claros.",
      starterCode: "perfil = {'nombre': 'Ana', 'edad': 20, 'ciudad': 'Córdoba'}\nprint(perfil)",
      emptyOutputHint: "Un diccionario correcto debería mostrarse entre llaves cuando lo imprimes completo."
    },
    exerciseSlug: "explain-what-a-dictionary-stores"
  },
  {
    slug: "reading-and-updating-dictionary-values",
    module: "Diccionarios",
    moduleSlug: "dictionaries",
    order: 2,
    title: "Leer y actualizar valores de un diccionario",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Aprende a leer valores por clave y a actualizar un dato simple dentro de un diccionario.",
    warmup: "Si un diccionario guarda datos con nombre, lo siguiente natural es pedir un dato por su clave y cambiarlo cuando haga falta.",
    goal: "Al final, deberías poder leer un valor por clave y actualizar un dato simple dentro de un diccionario.",
    keyIdeas: [
      {
        title: "La clave te lleva al valor",
        description: "Usas la clave entre corchetes para leer el dato que necesitas."
      },
      {
        title: "También puedes actualizar un dato",
        description: "Si usas una clave existente con `=`, Python reemplaza el valor anterior."
      },
      {
        title: "Las claves deben existir y estar bien escritas",
        description: "Un error pequeño en la clave puede hacer que el programa falle o lea otro dato."
      }
    ],
    explanation: [
      {
        title: "Cómo leer un valor por clave",
        body: "Si escribes `perfil['nombre']`, le estás diciendo a Python: 'Muéstrame el valor que está guardado bajo la clave nombre'. Eso hace que el código sea más claro que recordar posiciones."
      },
      {
        title: "Cómo actualizar un valor",
        body: "Si después escribes `perfil['edad'] = 21`, Python reemplaza el valor anterior de esa clave. El diccionario sigue siendo el mismo, pero uno de sus datos cambia."
      },
      {
        title: "Qué conviene revisar primero",
        body: "Al empezar, los errores más comunes vienen de comillas faltantes, llaves mal cerradas o claves escritas distinto a como se definieron."
      },
      {
        title: "Esto ya se parece a datos reales",
        body: "Leer y actualizar claves te prepara para programas un poco más útiles, donde una misma estructura guarda información que puede mostrarse o cambiarse."
      }
    ],
    example: "perfil = {'nombre': 'Ana', 'edad': 20}\nprint(perfil['nombre'])\nperfil['edad'] = 21\nprint(perfil['edad'])",
    practicePrompt: "Crea un diccionario `juego` con las claves `nombre` y `vidas`. Imprime `nombre`, actualiza `vidas` y luego vuelve a imprimirla.",
    practiceChecklist: [
      "Lee un valor usando su clave entre corchetes.",
      "Actualiza un valor usando la misma clave con `=`.",
      "Imprime el resultado para confirmar el cambio."
    ],
    commonMistakes: [
      "Olvidar las comillas alrededor de una clave de texto.",
      "Escribir una clave distinta de la que existe en el diccionario.",
      "Pensar que leer un valor y actualizarlo son exactamente la misma operación."
    ],
    bugChallenge: {
      prompt: "Este código debería leer el nombre y actualizar la edad, pero una clave está escrita de forma incorrecta.",
      brokenCode: "perfil = {'nombre': 'Ana', 'edad': 20}\nprint(perfil[nombre])\nperfil['edad'] = 21",
      expectedLearning: "Las claves de texto deben escribirse igual que en el diccionario y llevar comillas cuando las usas directamente."
    },
    playground: {
      title: "Lee y actualiza claves",
      guidance: "Ejecuta el código, luego cambia una clave o un valor y vuelve a correrlo. La meta es sentir que el diccionario guarda datos que puedes consultar y cambiar.",
      starterCode: "perfil = {'nombre': 'Ana', 'edad': 20}\nprint(perfil['nombre'])\nperfil['edad'] = 21\nprint(perfil['edad'])",
      emptyOutputHint: "La salida debería mostrar un valor leído del diccionario y luego el valor actualizado."
    },
    exerciseSlug: "read-and-update-dictionary-values"
  },
  {
    slug: "looping-through-dictionary-data",
    module: "Diccionarios",
    moduleSlug: "dictionaries",
    order: 3,
    title: "Recorrer datos de un diccionario con calma",
    duration: "17 min",
    difficulty: "Beginner",
    summary: "Aprende una forma simple de recorrer un diccionario para mostrar pares de clave y valor sin volverlo abstracto.",
    warmup: "Si un diccionario guarda varios datos con nombre, recorrerlo te permite mostrarlos todos de una forma ordenada y útil.",
    goal: "Al final, deberías poder recorrer un diccionario simple usando `items()` y leer la salida como pares de clave y valor.",
    keyIdeas: [
      {
        title: "El bucle toma una clave y un valor",
        description: "Con `items()`, cada vuelta te da ambas partes del diccionario."
      },
      {
        title: "La salida ayuda a entender el patrón",
        description: "Ver cada par impreso aclara qué está pasando en cada vuelta."
      },
      {
        title: "No hace falta aprender métodos avanzados todavía",
        description: "Con un recorrido simple ya puedes usar diccionarios en ejercicios y programas pequeños."
      }
    ],
    explanation: [
      {
        title: "Qué hace `items()` en una primera aproximación",
        body: "Por ahora puedes pensar `items()` como una forma de recorrer un diccionario y recibir dos cosas en cada vuelta: la clave y el valor correspondiente."
      },
      {
        title: "Cómo leer el bucle con palabras normales",
        body: "Si escribes `for clave, valor in perfil.items():`, puedes leerlo así: 'Para cada dato del diccionario, toma su clave y su valor y ejecuta este bloque'."
      },
      {
        title: "Por qué es útil",
        body: "Esto te sirve para mostrar información de una persona, un objeto o un pequeño estado del programa sin tener que imprimir cada dato por separado."
      },
      {
        title: "Qué revisar si falla",
        body: "Revisa el nombre del diccionario, la forma del `for`, los dos puntos al final y la indentación del `print()`. Después comprueba que estás usando `items()` correctamente."
      }
    ],
    example: "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}\nfor clave, valor in perfil.items():\n    print(clave, valor)",
    practicePrompt: "Crea un diccionario `juego` con dos claves y usa un bucle para imprimir cada par clave/valor en su propia línea.",
    practiceChecklist: [
      "Crea un diccionario pequeño con dos o tres datos.",
      "Usa `for clave, valor in ...items():`.",
      "Imprime la clave y el valor dentro del bucle."
    ],
    commonMistakes: [
      "Olvidar `items()` y recorrer el diccionario de una forma distinta a la esperada.",
      "No usar dos variables en el bucle cuando quieres clave y valor.",
      "Olvidar la indentación del `print()`."
    ],
    bugChallenge: {
      prompt: "Este código debería imprimir clave y valor, pero el bucle no está armado de una forma que permita mostrar ambos.",
      brokenCode: "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}\nfor clave in perfil:\n    print(clave, valor)",
      expectedLearning: "Si quieres clave y valor a la vez, una forma simple para empezar es usar `items()` y dos variables en el bucle."
    },
    playground: {
      title: "Recorre un diccionario con `items()`",
      guidance: "Ejecuta el bucle y mira cómo aparecen la clave y el valor en cada línea. Después cambia un dato del diccionario y vuelve a correrlo.",
      starterCode: "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}\nfor clave, valor in perfil.items():\n    print(clave, valor)",
      emptyOutputHint: "La salida debería mostrar un par de clave y valor por línea."
    },
    exerciseSlug: "loop-through-dictionary-items"
  },
  {
    slug: "working-with-text-comfortably",
    module: "Strings",
    moduleSlug: "strings",
    order: 1,
    title: "Qué es un string y por qué aparece en todos lados",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Aprende a pensar un string como texto dentro de Python y entiende por qué `input()` y la salida trabajan tanto con strings.",
    warmup: "Cuando escribes tu nombre, una ciudad o un mensaje de saludo, estás trabajando con texto. En Python, ese texto vive dentro de strings.",
    goal: "Al final, deberías poder explicar qué es un string y por qué aparece tanto en `input()`, `print()` y programas que hablan con personas.",
    keyIdeas: [
      {
        title: "Un string es texto",
        description: "Sirve para guardar palabras, frases, nombres y mensajes."
      },
      {
        title: "Las comillas marcan el texto",
        description: "Python necesita comillas para entender que estás escribiendo texto y no otra cosa."
      },
      {
        title: "Muchos programas hablan con texto",
        description: "Los saludos, preguntas y respuestas al usuario suelen estar hechos con strings."
      }
    ],
    explanation: [
      {
        title: "Cómo pensar un string en lenguaje simple",
        body: "Un string es texto que Python guarda como dato. Puede ser una palabra, una frase corta o un mensaje más largo, siempre que esté entre comillas."
      },
      {
        title: "Por qué `input()` y strings van juntos",
        body: "Cuando alguien escribe algo en `input()`, Python lo recibe como texto. Por eso trabajar con strings te ayuda a entender mejor programas que piden datos o muestran mensajes."
      },
      {
        title: "Por qué esto es práctico",
        body: "Muchos programas reales muestran instrucciones, saludos, avisos o preguntas. Saber manejar strings hace que esos programas sean más claros y más útiles."
      },
      {
        title: "Empieza por casos cotidianos",
        body: "No hace falta pensar en teoría rara. Nombres, ciudades, mensajes y respuestas simples ya alcanzan para aprender lo importante."
      }
    ],
    example: "mensaje = 'Hola, PyMentor'\nprint(mensaje)\nname = input('¿Cómo te llamas? ')\nprint('Mucho gusto, ' + name)",
    practicePrompt: "Guarda un mensaje en una variable `mensaje`, imprímelo y luego usa `input()` para pedir un nombre y responder con otro string.",
    practiceChecklist: [
      "Usa comillas correctamente.",
      "Guarda un texto en una variable.",
      "Combina `input()` con una salida simple."
    ],
    commonMistakes: [
      "Olvidar cerrar las comillas.",
      "Confundir texto con nombres de variables.",
      "Pensar que `input()` devuelve números por defecto en vez de texto."
    ],
    bugChallenge: {
      prompt: "Este código debería pedir un nombre y responder con un saludo, pero un detalle de comillas lo rompe.",
      brokenCode: "name = input('¿Cómo te llamas? )\nprint('Hola, ' + name)",
      expectedLearning: "Los strings necesitan comillas bien cerradas, especialmente cuando un programa usa texto para hablar con la persona usuaria."
    },
    playground: {
      title: "Prueba strings con input y salida",
      guidance: "Ejecuta el ejemplo, responde la pregunta y mira cómo el texto aparece otra vez en la salida. Esa ida y vuelta es una parte muy común de programar.",
      starterCode: "mensaje = 'Hola, PyMentor'\nprint(mensaje)\nname = input('¿Cómo te llamas? ')\nprint('Mucho gusto, ' + name)",
      emptyOutputHint: "Responde la pregunta del navegador y luego observa cómo el string vuelve a aparecer en la salida."
    },
    exerciseSlug: "explain-what-a-string-is"
  },
  {
    slug: "joining-and-comparing-text",
    module: "Strings",
    moduleSlug: "strings",
    order: 2,
    title: "Unir y comparar texto con calma",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Aprende a unir piezas de texto y a compararlas de forma clara para tomar decisiones simples.",
    warmup: "Muchos programas necesitan armar un mensaje y también comparar lo que una persona escribió. Unir texto y compararlo son dos movimientos muy comunes.",
    goal: "Al final, deberías poder unir texto con `+` y comparar strings con `==` dentro de un programa simple.",
    keyIdeas: [
      {
        title: "Se puede unir texto",
        description: "El operador `+` también sirve para juntar strings."
      },
      {
        title: "Los strings también se comparan",
        description: "Puedes usar `==` para revisar si un texto coincide con otro."
      },
      {
        title: "Los espacios y las mayúsculas importan",
        description: "Un string que parece parecido puede no coincidir si cambia una letra o un espacio."
      }
    ],
    explanation: [
      {
        title: "Qué significa unir texto",
        body: "Si escribes `'Hola, ' + name`, Python pega ambos textos y arma un solo mensaje. Eso sirve mucho para saludos, respuestas y mensajes personalizados."
      },
      {
        title: "Qué significa comparar texto",
        body: "Si escribes `respuesta == 'si'`, Python revisa si ambos textos son exactamente iguales. Esa comparación puede usarse dentro de un `if` para decidir qué hacer."
      },
      {
        title: "Por qué conviene leerlo despacio",
        body: "Con strings, un espacio extra o una letra distinta cambia el resultado. Por eso al principio conviene leer la comparación con calma y mirar los detalles."
      },
      {
        title: "Esto conecta muchas piezas del camino",
        body: "Aquí se juntan strings, `input()`, condicionales y salida personalizada. Es una combinación muy común en programas reales para principiantes."
      }
    ],
    example: "name = 'Ana'\nprint('Hola, ' + name)\nrespuesta = 'si'\nif respuesta == 'si':\n    print('Seguimos adelante')",
    practicePrompt: "Crea una variable `respuesta`, compárala con un string y muestra un mensaje distinto según el resultado. También arma un saludo uniendo texto con una variable.",
    practiceChecklist: [
      "Usa `+` para unir texto.",
      "Usa `==` para comparar strings.",
      "Lee la comparación con calma antes de ejecutar."
    ],
    commonMistakes: [
      "Olvidar un espacio dentro del string cuando el mensaje lo necesita.",
      "Usar `=` en lugar de `==`.",
      "Pensar que `si` y `Si` son el mismo texto."
    ],
    bugChallenge: {
      prompt: "Este código debería comparar una respuesta y mostrar un mensaje, pero un detalle cambia por completo el resultado.",
      brokenCode: "respuesta = 'si'\nif respuesta = 'si':\n    print('Seguimos adelante')",
      expectedLearning: "Los strings se comparan con `==`, no con `=`. Ese detalle es clave cuando un programa decide qué hacer."
    },
    playground: {
      title: "Une y compara texto",
      guidance: "Ejecuta el código, cambia la respuesta y observa cómo cambia la salida. Así se ve con claridad cómo el texto puede participar en una decisión.",
      starterCode: "name = 'Ana'\nprint('Hola, ' + name)\nrespuesta = 'si'\nif respuesta == 'si':\n    print('Seguimos adelante')",
      emptyOutputHint: "Prueba cambiar el texto de `respuesta` para ver cuándo se cumple la comparación."
    },
    exerciseSlug: "build-a-text-checker"
  },
  {
    slug: "simple-string-transformations",
    module: "Strings",
    moduleSlug: "strings",
    order: 3,
    title: "Transformaciones simples de texto que sí ayudan",
    duration: "17 min",
    difficulty: "Beginner",
    summary: "Aprende a usar `lower()`, `upper()` y `strip()` como herramientas concretas para limpiar o preparar texto.",
    warmup: "A veces una comparación falla no porque la idea esté mal, sino porque el texto llegó con espacios o con mayúsculas distintas. Unas pocas transformaciones simples ayudan mucho.",
    goal: "Al final, deberías poder usar `lower()`, `upper()` o `strip()` en situaciones pequeñas donde hacen el programa más claro o más resistente.",
    keyIdeas: [
      {
        title: "`lower()` baja el texto",
        description: "Sirve para comparar palabras sin depender tanto de las mayúsculas."
      },
      {
        title: "`upper()` convierte a mayúsculas",
        description: "Puede ayudar cuando quieres mostrar un texto con más énfasis visual."
      },
      {
        title: "`strip()` quita espacios extra en los bordes",
        description: "Es útil cuando una entrada llega con espacios delante o detrás."
      }
    ],
    explanation: [
      {
        title: "Qué problema resuelven estas transformaciones",
        body: "Si una persona escribe ` Si ` con espacios o con una mayúscula distinta, una comparación simple puede fallar. Estas transformaciones ayudan a preparar mejor el texto antes de usarlo."
      },
      {
        title: "Cómo leerlas sin asustarte",
        body: "Puedes pensar `respuesta.strip().lower()` como una cadena de pasos pequeños: primero quita espacios de los bordes y luego convierte el texto a minúsculas."
      },
      {
        title: "Qué conviene usar primero",
        body: "Para principiantes, `strip()` y `lower()` suelen ser las más útiles. `upper()` sirve más para mostrar texto transformado en la salida."
      },
      {
        title: "Mantén el uso simple y con propósito",
        body: "No hace falta usar muchas transformaciones a la vez. Lo importante es ver cómo ayudan a resolver problemas pequeños de texto en programas reales."
      }
    ],
    example: "respuesta = ' Si '\nlimpia = respuesta.strip().lower()\nprint(limpia)\nprint('python'.upper())",
    practicePrompt: "Toma un string con espacios y mayúsculas mezcladas, límpialo con `strip()` y `lower()`, y luego muestra otro string usando `upper()`.",
    practiceChecklist: [
      "Usa `strip()` para quitar espacios del borde.",
      "Usa `lower()` para comparar texto con menos fricción.",
      "Usa `upper()` en un caso simple de salida."
    ],
    commonMistakes: [
      "Olvidar los paréntesis al usar `lower()`, `upper()` o `strip()`.",
      "Esperar que la transformación ocurra sin volver a usar el resultado.",
      "Aplicar muchas transformaciones sin tener claro para qué sirven."
    ],
    bugChallenge: {
      prompt: "Este código debería limpiar una respuesta y compararla con `si`, pero un detalle en la llamada de método rompe la idea.",
      brokenCode: "respuesta = ' Si '\nif respuesta.strip.lower() == 'si':\n    print('Respuesta válida')",
      expectedLearning: "Los métodos como `strip()` y `lower()` necesitan paréntesis para ejecutarse."
    },
    playground: {
      title: "Prueba transformaciones simples",
      guidance: "Ejecuta el código y cambia el texto original. La idea es ver cómo unas transformaciones pequeñas vuelven más práctico trabajar con texto real.",
      starterCode: "respuesta = ' Si '\nlimpia = respuesta.strip().lower()\nprint(limpia)\nprint('python'.upper())",
      emptyOutputHint: "La salida debería mostrar el texto limpio en minúsculas y otro string convertido a mayúsculas."
    },
    exerciseSlug: "clean-and-compare-text"
  },
  {
    slug: "guided-project-profile-card",
    module: "Proyectos guiados",
    moduleSlug: "guided-projects",
    order: 1,
    title: "Proyecto guiado: tarjeta de perfil personal",
    duration: "20 min",
    difficulty: "Beginner",
    summary: "Construye un programa que reúna datos simples de una persona y los muestre como una tarjeta de perfil clara y ordenada.",
    warmup: "Ya aprendiste a guardar texto, usar `input()`, listas y diccionarios. Este proyecto junta esas piezas para mostrar información de una forma más real.",
    goal: "Al final, deberías poder crear una tarjeta de perfil sencilla que use `input()`, strings y un diccionario para organizar datos.",
    keyIdeas: [
      {
        title: "Un diccionario ayuda a ordenar datos del mismo perfil",
        description: "Nombre, ciudad y meta pueden vivir juntos con claves claras."
      },
      {
        title: "Los strings hacen visible el resultado",
        description: "El valor del proyecto está en mostrar texto claro y agradable para la persona que lo usa."
      },
      {
        title: "Un proyecto guiado sigue siendo paso a paso",
        description: "No necesitas resolver todo de golpe. Primero guardas datos, luego los muestras."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este proyecto pide algunos datos simples, los guarda en un diccionario y luego imprime una pequeña tarjeta de perfil. No es complicado, pero ya se siente más cercano a una herramienta real."
      },
      {
        title: "Cómo dividir el proyecto",
        body: "Primero pide el nombre, la ciudad y una meta corta con `input()`. Después guarda esos datos dentro de un diccionario. Por último, imprime una salida clara usando esas claves."
      },
      {
        title: "Por qué vale la pena usar un diccionario aquí",
        body: "Podrías usar variables sueltas, pero un diccionario hace más fácil entender que todos esos datos pertenecen a la misma persona."
      },
      {
        title: "Qué hace que se sienta terminado",
        body: "Cuando el programa pide datos y devuelve una tarjeta ordenada, ya no se siente como un ejercicio aislado. Se siente como algo pequeño pero completo."
      }
    ],
    example:
      "perfil = {\n    'nombre': input('Nombre: '),\n    'ciudad': input('Ciudad: '),\n    'meta': input('Meta: ')\n}\n\nprint('--- PERFIL ---')\nprint('Nombre:', perfil['nombre'])\nprint('Ciudad:', perfil['ciudad'])\nprint('Meta:', perfil['meta'])",
    practicePrompt: "Prueba cambiar el título de la tarjeta o agregar una línea final que anime a la persona. Lo importante es que el programa siga pidiendo datos y mostrándolos con claridad.",
    practiceChecklist: [
      "Pide al menos tres datos con `input()`.",
      "Guárdalos en un diccionario.",
      "Imprime una tarjeta clara usando las claves del diccionario."
    ],
    commonMistakes: [
      "Pedir los datos pero no guardarlos en la estructura final.",
      "Usar una clave distinta al momento de imprimir.",
      "Intentar hacer demasiadas cosas extra antes de cerrar la versión básica."
    ],
    bugChallenge: {
      prompt: "Este proyecto debería mostrar una tarjeta de perfil, pero una clave escrita de forma distinta rompe la salida.",
      brokenCode:
        "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Aprender Python'}\nprint('--- PERFIL ---')\nprint('Nombre:', perfil['nombre'])\nprint('Ciudad:', perfil['cuidad'])",
      expectedLearning: "Cuando usas diccionarios, una clave mal escrita basta para romper una salida que por lo demás estaba bien armada."
    },
    playground: {
      title: "Construye tu tarjeta de perfil",
      guidance: "Ejecuta el proyecto, completa los datos y revisa cómo el diccionario te ayuda a mostrar la información como un bloque ordenado.",
      starterCode:
        "perfil = {\n    'nombre': input('Nombre: '),\n    'ciudad': input('Ciudad: '),\n    'meta': input('Meta: ')\n}\n\nprint('--- PERFIL ---')\nprint('Nombre:', perfil['nombre'])\nprint('Ciudad:', perfil['ciudad'])\nprint('Meta:', perfil['meta'])",
      emptyOutputHint: "Primero responde las preguntas del navegador y luego mira cómo aparece la tarjeta completa."
    },
    exerciseSlug: "build-profile-card-project"
  },
  {
    slug: "guided-project-menu-helper",
    module: "Proyectos guiados",
    moduleSlug: "guided-projects",
    order: 2,
    title: "Proyecto guiado: asistente simple con menú",
    duration: "21 min",
    difficulty: "Beginner",
    summary: "Construye un pequeño asistente que muestre opciones, reciba una respuesta y actúe según esa elección.",
    warmup: "Los programas se sienten más útiles cuando ofrecen opciones. Un menú corto te deja combinar texto, decisiones y funciones sin perder claridad.",
    goal: "Al final, deberías poder crear un menú básico que use `input()`, condicionales y funciones para responder a una elección.",
    keyIdeas: [
      {
        title: "Un menú da estructura al programa",
        description: "Las opciones visibles ayudan a que la persona entienda qué puede hacer."
      },
      {
        title: "Las funciones ordenan respuestas distintas",
        description: "Cada acción pequeña puede vivir en su propia función."
      },
      {
        title: "Comparar texto guía el flujo",
        description: "La elección escrita por la persona se puede usar para decidir qué mensaje mostrar."
      }
    ],
    explanation: [
      {
        title: "Qué hace este proyecto",
        body: "Vas a construir un asistente simple que muestre un pequeño menú y responda según la opción elegida. No es un sistema complejo, pero ya se parece a la base de muchas herramientas interactivas."
      },
      {
        title: "Cómo organizarlo",
        body: "Primero define funciones cortas como `mostrar_saludo()` o `mostrar_consejo()`. Después imprime un menú, guarda la respuesta con `input()` y usa `if` o `elif` para llamar la función correcta."
      },
      {
        title: "Por qué este proyecto importa",
        body: "Aquí estás uniendo entrada de usuario, strings, decisiones y funciones dentro de un mismo recorrido. Esa mezcla te da mucha más sensación de programa real."
      },
      {
        title: "Qué conviene mantener simple",
        body: "Con dos o tres opciones claras alcanza. El objetivo es terminar un flujo legible, no inventar un menú gigante."
      }
    ],
    example:
      "def mostrar_saludo():\n    print('Hola, seguimos practicando')\n\ndef mostrar_consejo():\n    print('Consejo: avanza un paso a la vez')\n\nprint('1. Saludo')\nprint('2. Consejo')\nopcion = input('Elige una opción: ').strip()\n\nif opcion == '1':\n    mostrar_saludo()\nelif opcion == '2':\n    mostrar_consejo()\nelse:\n    print('Opción no válida')",
    practicePrompt: "Prueba cambiar los textos del menú o el mensaje de una función. La idea central es que el programa lea una opción y responda de forma distinta.",
    practiceChecklist: [
      "Define al menos dos funciones cortas.",
      "Muestra un menú con opciones visibles.",
      "Usa `input()` para leer la elección.",
      "Llama a la función correcta según la respuesta."
    ],
    commonMistakes: [
      "Comparar con el texto equivocado en el `if`.",
      "Olvidar llamar a la función y dejar solo su nombre.",
      "No limpiar la respuesta y confundir espacios alrededor de la opción."
    ],
    bugChallenge: {
      prompt: "Este menú debería responder a una opción, pero la llamada a la función quedó sin paréntesis y el flujo no hace lo esperado.",
      brokenCode:
        "def mostrar_saludo():\n    print('Hola')\n\nprint('1. Saludo')\nopcion = '1'\nif opcion == '1':\n    mostrar_saludo",
      expectedLearning: "En proyectos interactivos pequeños, una función sin paréntesis no se ejecuta aunque la lógica general parezca correcta."
    },
    playground: {
      title: "Prueba un menú guiado",
      guidance: "Ejecuta el proyecto, elige una opción y luego cambia los mensajes o agrega una tercera alternativa simple si quieres explorar un poco más.",
      starterCode:
        "def mostrar_saludo():\n    print('Hola, seguimos practicando')\n\ndef mostrar_consejo():\n    print('Consejo: avanza un paso a la vez')\n\nprint('1. Saludo')\nprint('2. Consejo')\nopcion = input('Elige una opción: ').strip()\n\nif opcion == '1':\n    mostrar_saludo()\nelif opcion == '2':\n    mostrar_consejo()\nelse:\n    print('Opción no válida')",
      emptyOutputHint: "Después de elegir una opción, la salida debería mostrar una respuesta clara del asistente."
    },
    exerciseSlug: "build-menu-helper-project"
  },
  {
    slug: "guided-project-habit-tracker",
    module: "Proyectos guiados",
    moduleSlug: "guided-projects",
    order: 3,
    title: "Proyecto guiado: rastreador simple de hábitos",
    duration: "22 min",
    difficulty: "Beginner",
    summary: "Construye un programa pequeño que recorra una lista de hábitos, muestre su estado y cierre con un mensaje final.",
    warmup: "Una lista y un diccionario se sienten mucho más útiles cuando representan algo cotidiano, como hábitos o tareas que quieres revisar.",
    goal: "Al final, deberías poder crear un rastreador simple que combine listas, diccionarios, bucles y decisiones para mostrar un resumen útil.",
    keyIdeas: [
      {
        title: "Las listas ayudan a recorrer varios elementos",
        description: "Te permiten revisar varios hábitos sin repetir el mismo bloque muchas veces."
      },
      {
        title: "Los diccionarios guardan detalles claros",
        description: "Cada hábito puede tener nombre y estado dentro de la misma estructura."
      },
      {
        title: "El proyecto gana fuerza cuando muestra un resumen final",
        description: "Un buen cierre hace que el programa se sienta más completo."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este proyecto recorre una lista de hábitos guardados como diccionarios. Cada vuelta muestra el nombre del hábito y su estado, y al final imprime un cierre simple."
      },
      {
        title: "Cómo pensarlo sin abrumarte",
        body: "No hace falta inventar datos dinámicos todavía. Empieza con una lista fija de dos o tres hábitos. Después recórrela con un `for` y usa una condición para decidir qué imprimir."
      },
      {
        title: "Qué estás conectando aquí",
        body: "Este proyecto une casi todo el camino reciente: strings, listas, diccionarios, bucles y condicionales. Eso lo convierte en un buen punto de consolidación."
      },
      {
        title: "Qué hace que se sienta útil",
        body: "Aunque sea pequeño, ya se parece a un resumen real de progreso. Eso cambia la sensación del aprendizaje: ya no solo practicas piezas, empiezas a armar herramientas."
      }
    ],
    example:
      "habitos = [\n    {'nombre': 'Leer', 'hecho': 'si'},\n    {'nombre': 'Practicar Python', 'hecho': 'no'}\n]\n\nfor habito in habitos:\n    if habito['hecho'] == 'si':\n        print(habito['nombre'] + ': completo')\n    else:\n        print(habito['nombre'] + ': pendiente')\n\nprint('Revisión terminada')",
    practicePrompt: "Prueba cambiar los hábitos o el estado de uno de ellos. La meta es ver cómo el programa adapta la salida sin reescribir toda la estructura.",
    practiceChecklist: [
      "Crea una lista con diccionarios simples.",
      "Usa un bucle para recorrerla.",
      "Compara el estado de cada hábito.",
      "Imprime un mensaje final fuera del bucle."
    ],
    commonMistakes: [
      "Olvidar que cada vuelta del bucle trabaja con un diccionario distinto.",
      "Escribir mal la clave `hecho` o `nombre`.",
      "Poner el mensaje final dentro del bucle por accidente."
    ],
    bugChallenge: {
      prompt: "Este rastreador debería revisar cada hábito y cerrar al final, pero una línea quedó dentro del bucle y hace que el cierre se repita.",
      brokenCode:
        "habitos = [\n    {'nombre': 'Leer', 'hecho': 'si'},\n    {'nombre': 'Practicar Python', 'hecho': 'no'}\n]\n\nfor habito in habitos:\n    print(habito['nombre'])\n    print('Revisión terminada')",
      expectedLearning: "Cuando una línea pertenece al cierre general del programa, no debe quedar indentada dentro del bucle."
    },
    playground: {
      title: "Prueba el rastreador de hábitos",
      guidance: "Ejecuta el proyecto y revisa la salida completa. Luego cambia un estado o agrega un hábito más para ver cómo el bucle mantiene el patrón.",
      starterCode:
        "habitos = [\n    {'nombre': 'Leer', 'hecho': 'si'},\n    {'nombre': 'Practicar Python', 'hecho': 'no'}\n]\n\nfor habito in habitos:\n    if habito['hecho'] == 'si':\n        print(habito['nombre'] + ': completo')\n    else:\n        print(habito['nombre'] + ': pendiente')\n\nprint('Revisión terminada')",
      emptyOutputHint: "La salida debería mostrar el estado de cada hábito y luego una sola línea final."
    },
    exerciseSlug: "build-habit-tracker-project"
  },
  {
    slug: "consolidation-read-and-fix-flow",
    module: "Consolidación práctica",
    moduleSlug: "practice-consolidation",
    order: 1,
    title: "Consolidación: leer, detectar y corregir con calma",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Practica una habilidad clave: leer un programa corto, detectar un error pequeño y corregirlo sin perder de vista la idea general.",
    warmup: "Saber programar no es solo escribir código. También es leerlo con calma cuando algo no sale como esperabas.",
    goal: "Al final, deberías poder revisar un programa pequeño, encontrar un error simple de forma y corregirlo sin entrar en pánico.",
    keyIdeas: [
      {
        title: "Los errores pequeños siguen siendo normales",
        description: "Una clave mal escrita, una indentación corrida o un paréntesis faltante no significan que hayas retrocedido."
      },
      {
        title: "Primero mira la forma general",
        description: "Antes de cambiar todo, revisa estructura, indentación, nombres y comparaciones."
      },
      {
        title: "Corregir también consolida",
        description: "Arreglar código te obliga a conectar ideas que ya conoces."
      }
    ],
    explanation: [
      {
        title: "Por qué esta práctica importa ahora",
        body: "Después de varios módulos, ya no solo importa escribir desde cero. También importa entender un programa corto, detectar qué parte se torció y devolverlo a una versión clara."
      },
      {
        title: "Qué tipo de fallos vas a revisar",
        body: "Aquí aparecen errores muy reales para principiantes: una comparación mal escrita, una línea fuera de lugar o una clave de diccionario que no coincide. Son errores comunes y totalmente arreglables."
      },
      {
        title: "Cómo revisar sin abrumarte",
        body: "Empieza por leer la intención del programa. Después recorre la forma general: funciones, bucles, condiciones y líneas finales. Eso suele revelar el primer problema con bastante rapidez."
      },
      {
        title: "Corregir te da más seguridad",
        body: "Cuando arreglas un programa corto y vuelve a funcionar, no solo resuelves un bug. También refuerzas que ya entiendes bastante más de lo que parecía al principio."
      }
    ],
    example:
      "def mostrar_estado(tareas):\n    for tarea in tareas:\n        if tarea['hecha'] == 'si':\n            print(tarea['nombre'] + ': lista')\n        else:\n            print(tarea['nombre'] + ': pendiente')\n    print('Revisión completa')",
    practicePrompt: "Lee el ejemplo y piensa qué revisarías primero si una tarea no mostrara el estado correcto. No se trata de adivinar rápido, sino de seguir una secuencia clara de revisión.",
    practiceChecklist: [
      "Lee la intención general del programa.",
      "Revisa las claves del diccionario y las comparaciones.",
      "Confirma que la línea final quede fuera del bucle."
    ],
    commonMistakes: [
      "Cambiar muchas cosas de golpe y perder la pista del error original.",
      "No revisar primero los nombres exactos de claves o variables.",
      "Ignorar la indentación cuando el comportamiento se ve raro."
    ],
    bugChallenge: {
      prompt: "Este programa debería mostrar el estado de dos tareas y cerrar con una línea final, pero una clave mal escrita y una estructura descuidada rompen la salida.",
      brokenCode:
        "tareas = [\n    {'nombre': 'Leer', 'hecha': 'si'},\n    {'nombre': 'Practicar Python', 'hecha': 'no'}\n]\n\ndef mostrar_estado(tareas):\n    for tarea in tareas:\n        if tarea['hecho'] == 'si':\n            print(tarea['nombre'] + ': lista')\n        else:\n            print(tarea['nombre'] + ': pendiente')\n    print('Revisión completa')\n\nmostrar_estado(tareas)",
      expectedLearning: "Cuando datos y condiciones trabajan juntos, una sola clave mal escrita puede romper una idea que por lo demás estaba bien organizada."
    },
    playground: {
      title: "Prueba a corregir el flujo",
      guidance: "Ejecuta el ejemplo y luego cambia un detalle a la vez. La meta es practicar una revisión tranquila y ordenada.",
      starterCode:
        "tareas = [\n    {'nombre': 'Leer', 'hecha': 'si'},\n    {'nombre': 'Practicar Python', 'hecha': 'no'}\n]\n\ndef mostrar_estado(tareas):\n    for tarea in tareas:\n        if tarea['hecha'] == 'si':\n            print(tarea['nombre'] + ': lista')\n        else:\n            print(tarea['nombre'] + ': pendiente')\n    print('Revisión completa')\n\nmostrar_estado(tareas)",
      emptyOutputHint: "La salida debería mostrar el estado de cada tarea y luego un cierre final."
    },
    exerciseSlug: "fix-consolidation-task-review"
  },
  {
    slug: "consolidation-build-from-pieces",
    module: "Consolidación práctica",
    moduleSlug: "practice-consolidation",
    order: 2,
    title: "Consolidación: construir desde piezas conocidas",
    duration: "19 min",
    difficulty: "Beginner",
    summary: "Arma un programa pequeño reuniendo piezas que ya conoces: función, input, lista y salida ordenada.",
    warmup: "Cuando varias ideas ya te suenan familiares, el siguiente paso no es aprender algo nuevo. Es combinarlas con más confianza.",
    goal: "Al final, deberías poder reunir varias herramientas básicas en un solo programa corto sin sentir que estás improvisando.",
    keyIdeas: [
      {
        title: "Combinar ideas también es una habilidad",
        description: "No basta con conocer piezas sueltas. Necesitas practicar cómo se sostienen juntas."
      },
      {
        title: "Un programa claro se arma por capas",
        description: "Primero juntas datos, luego organizas la lógica y al final revisas la salida."
      },
      {
        title: "Una función ayuda a cerrar el bloque",
        description: "Agrupar la salida dentro de una función hace que el programa sea más fácil de leer."
      }
    ],
    explanation: [
      {
        title: "Qué vas a consolidar aquí",
        body: "Vas a usar `input()` para obtener texto, una lista para guardar varios valores y una función para mostrar el resultado. Son herramientas conocidas, pero juntas ya forman una pieza más sólida."
      },
      {
        title: "Cómo evitar sentirlo caótico",
        body: "No intentes escribir todo de memoria de una vez. Piensa en pasos: pedir datos, guardarlos en una lista, definir una función, recorrer la lista y mostrar el cierre."
      },
      {
        title: "Qué estás reforzando de fondo",
        body: "Estás practicando organización. Esa sensación de 'sé por dónde empezar' es una parte muy importante del progreso real."
      },
      {
        title: "Menos creatividad, más claridad",
        body: "En consolidación, no hace falta inventar mucho. Hace falta repetir patrones útiles hasta que se sientan naturales."
      }
    ],
    example:
      "items = [input('Primer paso: '), input('Segundo paso: ')]\n\ndef mostrar_lista(items):\n    print('Tu plan:')\n    for item in items:\n        print('- ' + item)\n\nmostrar_lista(items)",
    practicePrompt: "Ejecuta el ejemplo y luego cambia el título o agrega un tercer paso. Lo importante es conservar la estructura clara.",
    practiceChecklist: [
      "Pide datos con `input()`.",
      "Guarda los datos en una lista.",
      "Usa una función para mostrar la lista.",
      "Recorre los valores con un bucle."
    ],
    commonMistakes: [
      "Pedir los datos pero no incluirlos en la lista final.",
      "Definir la función y olvidar llamarla.",
      "Recorrer el nombre equivocado de la lista dentro del bucle."
    ],
    bugChallenge: {
      prompt: "Este programa debería mostrar una pequeña lista de pasos, pero una variable no coincide y rompe la función.",
      brokenCode:
        "items = ['Leer', 'Practicar']\n\ndef mostrar_lista(lista):\n    for item in items:\n        print('- ' + paso)\n\nmostrar_lista(items)",
      expectedLearning: "Cuando combinas varias piezas, los errores de nombres suelen aparecer en los puntos donde datos y funciones se conectan."
    },
    playground: {
      title: "Combina piezas conocidas",
      guidance: "Ejecuta el programa, responde las preguntas y luego ajusta el título o los pasos. Busca sentir que la estructura ya te resulta familiar.",
      starterCode:
        "items = [input('Primer paso: '), input('Segundo paso: ')]\n\ndef mostrar_lista(items):\n    print('Tu plan:')\n    for item in items:\n        print('- ' + item)\n\nmostrar_lista(items)",
      emptyOutputHint: "Después de responder, la salida debería mostrar un pequeño plan con cada paso en su propia línea."
    },
    exerciseSlug: "build-plan-from-pieces"
  },
  {
    slug: "consolidation-combine-data-and-decisions",
    module: "Consolidación práctica",
    moduleSlug: "practice-consolidation",
    order: 3,
    title: "Consolidación: combinar datos, decisiones y cierre",
    duration: "20 min",
    difficulty: "Beginner",
    summary: "Construye un resumen corto que use listas, diccionarios, condiciones y una salida final organizada.",
    warmup: "Al final de una base sólida, conviene practicar programas que no introducen ideas nuevas, pero sí te exigen coordinar varias al mismo tiempo.",
    goal: "Al final, deberías poder recorrer datos simples, tomar decisiones y producir una salida clara de principio a fin.",
    keyIdeas: [
      {
        title: "Los datos necesitan una estructura clara",
        description: "Una lista de diccionarios te deja trabajar con varios elementos sin perder contexto."
      },
      {
        title: "Las decisiones deben responder a una regla visible",
        description: "La condición debería ser fácil de leer para que la salida tenga sentido."
      },
      {
        title: "El cierre del programa también importa",
        description: "Una línea final bien colocada hace que el resultado se sienta más completo."
      }
    ],
    explanation: [
      {
        title: "Qué vas a practicar",
        body: "Este cierre de consolidación toma varios hábitos o tareas, revisa su estado y organiza la salida. No hay conceptos nuevos, pero sí más coordinación entre piezas conocidas."
      },
      {
        title: "Cómo leer el programa",
        body: "Primero mira los datos, luego el bucle, después la condición y por último el cierre. Leerlo en ese orden vuelve el flujo mucho más claro."
      },
      {
        title: "Qué consolida de verdad",
        body: "Consolida la capacidad de pasar de datos a decisiones y de decisiones a una salida útil. Esa conexión es una base muy importante para proyectos más abiertos."
      },
      {
        title: "Qué se siente cuando sale bien",
        body: "Cuando un programa corto con varias piezas imprime exactamente el resumen que esperabas, aparece una sensación real de control. Esa es la meta de este bloque."
      }
    ],
    example:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': por hacer')\n\nprint('Base completada')",
    practicePrompt: "Prueba cambiar uno de los estados o un nombre. La estructura debería seguir funcionando aunque cambien los datos.",
    practiceChecklist: [
      "Crea una lista con diccionarios.",
      "Usa un bucle para recorrerla.",
      "Compara una clave de estado.",
      "Imprime una línea final fuera del bucle."
    ],
    commonMistakes: [
      "Escribir mal la clave del estado dentro del `if`.",
      "Dejar la línea final dentro del bucle.",
      "Confundir el nombre del diccionario actual con el nombre de la lista completa."
    ],
    bugChallenge: {
      prompt: "Este programa debería mostrar un resumen y cerrar una sola vez, pero una comparación y una indentación alteran el resultado.",
      brokenCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estdo'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': por hacer')\n    print('Base completada')",
      expectedLearning: "En programas que combinan varias piezas, un error de clave o de indentación cambia toda la lectura de la salida."
    },
    playground: {
      title: "Cierra la consolidación con un resumen",
      guidance: "Ejecuta el programa y luego cambia los estados para comprobar cómo responde. La meta es sentir que ya puedes sostener un flujo completo con varias ideas juntas.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': por hacer')\n\nprint('Base completada')",
      emptyOutputHint: "La salida debería mostrar un estado por registro y luego un cierre final una sola vez."
    },
    exerciseSlug: "build-foundation-summary"
  },
  {
    slug: "semi-open-project-profile-organizer",
    module: "Proyectos con más autonomía",
    moduleSlug: "semi-open-projects",
    order: 1,
    title: "Proyecto con más autonomía: organizador de perfil",
    duration: "21 min",
    difficulty: "Beginner",
    summary: "Construye un pequeño organizador de datos personales donde tú decides cómo presentar parte de la información, manteniendo una meta clara y un conjunto de requisitos concretos.",
    warmup: "Hasta ahora trabajaste con proyectos bastante guiados. En este bloque, la meta sigue siendo clara, pero tendrás un poco más de espacio para decidir cómo ordenar tu solución.",
    goal: "Al final, deberías poder crear un pequeño organizador de perfil usando un diccionario, una función y una salida ordenada, tomando algunas decisiones de estructura por tu cuenta.",
    keyIdeas: [
      {
        title: "La meta es clara, pero la forma puede variar",
        description: "No hace falta que todas las soluciones se vean exactamente iguales para estar bien."
      },
      {
        title: "Los requisitos te ayudan a no perderte",
        description: "Una libertad pequeña funciona mejor cuando sabes qué elementos mínimos debe tener el programa."
      },
      {
        title: "La salida ordenada sigue importando",
        description: "Un programa pequeño se siente más completo cuando presenta los datos de forma clara."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este proyecto organiza datos de una persona dentro de un diccionario y los muestra con una pequeña función. Tú puedes decidir el estilo exacto del título o el orden de algunas líneas, siempre que cumplas la meta principal."
      },
      {
        title: "Dónde está la autonomía",
        body: "No te damos cada línea exacta. Sí te damos una meta, restricciones y pistas. Eso te permite empezar a tomar decisiones pequeñas sobre nombres, orden visual y mensajes."
      },
      {
        title: "Qué debes cuidar",
        body: "Aunque haya un poco más de libertad, la base sigue siendo la misma: claves claras, lectura por clave, una función para mostrar la información y una salida fácil de leer."
      },
      {
        title: "Qué hace que este proyecto sea valioso",
        body: "Te muestra que ya puedes sostener un problema pequeño sin depender de una receta exacta, pero sin perder el apoyo del marco guiado."
      }
    ],
    example:
      "perfil = {\n    'nombre': 'Ana',\n    'ciudad': 'Córdoba',\n    'meta': 'Practicar cada día'\n}\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\nmostrar_perfil(perfil)",
    practicePrompt: "Prueba cambiar el título, el orden de las líneas o el texto de cierre. Lo importante es que sigas mostrando los datos principales con claridad.",
    practiceChecklist: [
      "Crea un diccionario de perfil con varias claves.",
      "Usa una función para mostrar la información.",
      "Muestra al menos nombre, ciudad y meta.",
      "Mantén la salida clara y ordenada."
    ],
    commonMistakes: [
      "Cambiar demasiado la estructura y olvidar alguno de los datos obligatorios.",
      "Leer una clave que no existe en el diccionario.",
      "Perder claridad visual por intentar adornar demasiado la salida."
    ],
    bugChallenge: {
      prompt: "Este perfil debería mostrarse con una función, pero una clave y una llamada no están del todo bien conectadas.",
      brokenCode:
        "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar'}\n\ndef mostrar_perfil(perfil):\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['cuidad'])\n\nmostrar_perfil",
      expectedLearning: "En proyectos con más libertad, los errores siguen apareciendo en puntos básicos: claves exactas y llamadas correctas."
    },
    playground: {
      title: "Explora tu organizador de perfil",
      guidance: "Ejecuta el proyecto, modifica el orden o el encabezado y comprueba que la información principal siga apareciendo de forma clara.",
      starterCode:
        "perfil = {\n    'nombre': 'Ana',\n    'ciudad': 'Córdoba',\n    'meta': 'Practicar cada día'\n}\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\nmostrar_perfil(perfil)",
      emptyOutputHint: "La salida debería mostrar una tarjeta de perfil corta y ordenada."
    },
    exerciseSlug: "build-semi-open-profile-organizer"
  },
  {
    slug: "semi-open-project-menu-record-tool",
    module: "Proyectos con más autonomía",
    moduleSlug: "semi-open-projects",
    order: 2,
    title: "Proyecto con más autonomía: herramienta simple con menú",
    duration: "22 min",
    difficulty: "Beginner",
    summary: "Construye una herramienta corta con menú donde decides parte de la estructura de respuesta, pero mantienes opciones mínimas y una lógica clara.",
    warmup: "Un programa se siente más real cuando ofrece caminos distintos. Ahora te toca armar uno con algo más de iniciativa propia, pero con reglas fáciles de seguir.",
    goal: "Al final, deberías poder crear una herramienta con menú que use funciones, comparación de texto y un pequeño flujo de decisiones.",
    keyIdeas: [
      {
        title: "Un menú claro da soporte a la autonomía",
        description: "Puedes tomar decisiones propias sin perder estructura si las opciones siguen visibles."
      },
      {
        title: "Las funciones reducen el caos",
        description: "Cada respuesta del menú puede vivir en su propia función para que todo siga legible."
      },
      {
        title: "La validación no necesita una sola forma exacta",
        description: "Hay varias maneras correctas de responder bien a una elección sencilla."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Vas a crear una herramienta pequeña con dos opciones visibles y una respuesta distinta según la elección. Puedes decidir los textos exactos de parte de la salida, pero debes conservar la estructura principal del flujo."
      },
      {
        title: "Qué cambia frente al bloque anterior",
        body: "Aquí no te damos una receta tan exacta. En vez de eso, te damos restricciones, ideas sugeridas y criterios de éxito. Esa diferencia te obliga a pensar un poco más por tu cuenta."
      },
      {
        title: "Cómo sostener el control",
        body: "Empieza por el menú, luego define una función por opción y por último conecta la variable de elección con `if` o `elif`. Esa secuencia mantiene el problema bajo control."
      },
      {
        title: "Qué significa hacerlo bien",
        body: "No necesitas creatividad extrema. Solo necesitas una estructura clara, respuestas comprensibles y un pequeño flujo que se sienta coherente de principio a fin."
      }
    ],
    example:
      "def ver_resumen():\n    print('Resumen listo')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar un paso a la vez')\n\nprint('A. Resumen')\nprint('B. Recordatorio')\nopcion = 'B'\n\nif opcion == 'A':\n    ver_resumen()\nelif opcion == 'B':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
    practicePrompt: "Cambia las opciones, los mensajes o el estilo del menú, pero mantén dos caminos claros y una respuesta correcta para cada uno.",
    practiceChecklist: [
      "Define al menos dos funciones.",
      "Muestra un menú con dos opciones visibles.",
      "Guarda una elección en una variable.",
      "Responde según la opción elegida."
    ],
    commonMistakes: [
      "Hacer cambios libres pero olvidar que el programa necesita dos opciones claras.",
      "Comparar con un texto distinto al que realmente guardaste.",
      "Olvidar el caso de opción no válida."
    ],
    bugChallenge: {
      prompt: "Esta herramienta debería responder a dos opciones, pero una comparación y una llamada dejaron el flujo incompleto.",
      brokenCode:
        "def ver_resumen():\n    print('Resumen listo')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar un paso a la vez')\n\nopcion = 'B'\nif opcion == 'A':\n    ver_resumen()\nelif opcion == 'b':\n    ver_recordatorio",
      expectedLearning: "Cuando el proyecto gana libertad, sigue siendo clave revisar comparaciones exactas y llamadas de función."
    },
    playground: {
      title: "Prueba una herramienta con menú",
      guidance: "Ejecuta el proyecto, cambia la opción y luego prueba ajustar los textos. La estructura base debería seguir clara aunque cambies detalles.",
      starterCode:
        "def ver_resumen():\n    print('Resumen listo')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar un paso a la vez')\n\nprint('A. Resumen')\nprint('B. Recordatorio')\nopcion = 'B'\n\nif opcion == 'A':\n    ver_resumen()\nelif opcion == 'B':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
      emptyOutputHint: "La salida debería mostrar el menú y luego una respuesta según la opción elegida."
    },
    exerciseSlug: "build-semi-open-menu-tool"
  },
  {
    slug: "semi-open-project-summary-generator",
    module: "Proyectos con más autonomía",
    moduleSlug: "semi-open-projects",
    order: 3,
    title: "Proyecto con más autonomía: generador de resumen",
    duration: "23 min",
    difficulty: "Beginner",
    summary: "Crea un generador simple de resumen usando datos estructurados, condiciones y una salida final que tú organizas con mayor independencia.",
    warmup: "Ya sabes recorrer datos y mostrar resultados. Ahora toca usar esa base para armar un resumen corto donde tú decidas parte de la presentación.",
    goal: "Al final, deberías poder construir un pequeño generador de resumen que recorra datos, decida mensajes y cierre con una salida ordenada.",
    keyIdeas: [
      {
        title: "La estructura de datos sostiene el proyecto",
        description: "Una lista con diccionarios te deja trabajar con varios elementos de una manera clara."
      },
      {
        title: "La lógica debe seguir siendo visible",
        description: "Aunque tengas más libertad, la condición principal debe leerse con facilidad."
      },
      {
        title: "La presentación puede variar sin perder calidad",
        description: "Puedes elegir el orden o el título, siempre que el resumen final siga siendo claro."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este proyecto genera un pequeño resumen a partir de datos estructurados. Recorres una lista, decides qué texto mostrar y cierras con una línea final que marque el final del reporte."
      },
      {
        title: "Qué tiene de más autónomo",
        body: "No te exigimos una única forma exacta de salida. Sí te pedimos que aparezcan ciertos datos y que la lógica principal se mantenga. Ese equilibrio te deja decidir un poco más sin perder dirección."
      },
      {
        title: "Cómo mantenerlo amable para principiantes",
        body: "Trabaja con pocos registros y mensajes cortos. La clave no es hacer un sistema enorme, sino resolver un problema pequeño con más independencia que antes."
      },
      {
        title: "Qué cierra este bloque",
        body: "Si puedes sostener un proyecto así, ya estás dando un paso claro hacia problemas un poco más abiertos. Esa es la meta de este módulo."
      }
    ],
    example:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('--- RESUMEN ---')\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': en curso')\nprint('Resumen generado')",
    practicePrompt: "Cambia el encabezado, uno de los mensajes o el orden general de la salida. Asegúrate de que el resumen siga siendo claro y completo.",
    practiceChecklist: [
      "Crea una lista con al menos dos registros.",
      "Usa un bucle para recorrerlos.",
      "Compara el estado de cada registro.",
      "Agrega un encabezado o cierre visible."
    ],
    commonMistakes: [
      "Volver el proyecto demasiado libre y olvidar una condición clara.",
      "Perder un registro por recorrer mal la lista.",
      "Meter el cierre dentro del bucle y repetirlo varias veces."
    ],
    bugChallenge: {
      prompt: "Este resumen debería mostrar el estado de dos registros y cerrar una sola vez, pero una clave y una indentación alteran el resultado.",
      brokenCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estadoo'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': en curso')\n    print('Resumen generado')",
      expectedLearning: "Más libertad no elimina los básicos: claves exactas, condiciones visibles y cierres fuera del bucle."
    },
    playground: {
      title: "Explora tu generador de resumen",
      guidance: "Ejecuta el proyecto, cambia algunos textos y verifica que el resumen siga cumpliendo su objetivo sin perder claridad.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('--- RESUMEN ---')\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': en curso')\nprint('Resumen generado')",
      emptyOutputHint: "La salida debería mostrar un encabezado, un resumen por registro y un cierre final."
    },
    exerciseSlug: "build-semi-open-summary-generator"
  },
  {
    slug: "freeform-project-habit-register",
    module: "Proyectos iniciales más libres",
    moduleSlug: "early-freeform-projects",
    order: 1,
    title: "Proyecto inicial más libre: registro simple de hábitos",
    duration: "22 min",
    difficulty: "Beginner",
    summary: "Construye un registro corto de hábitos a partir de un brief claro, decidiendo tú cómo organizar parte de la solución y de la salida.",
    warmup: "Hasta aquí ya trabajaste con bastante apoyo. Ahora la idea es que puedas sostener un problema pequeño con más iniciativa, pero todavía con límites claros.",
    goal: "Al final, deberías poder crear un pequeño registro de hábitos que use datos estructurados, recorra información y muestre un resumen comprensible.",
    keyIdeas: [
      {
        title: "El brief reemplaza la receta",
        description: "Ya no necesitas que te dicten cada paso, pero sí una meta clara con requisitos concretos."
      },
      {
        title: "La estructura de datos sigue siendo tu aliada",
        description: "Listas y diccionarios te ayudan a mantener orden aunque el proyecto sea un poco más libre."
      },
      {
        title: "La claridad sigue valiendo más que adornar",
        description: "Una solución sencilla y legible es mejor que una versión enredada con demasiados extras."
      }
    ],
    explanation: [
      {
        title: "Cuál es el brief",
        body: "Tu tarea es construir un pequeño registro de hábitos con al menos dos hábitos, mostrar su estado y cerrar con una línea final clara. No te damos cada línea exacta, pero sí sabemos qué debe poder hacer el programa."
      },
      {
        title: "Qué decisiones puedes tomar",
        body: "Puedes decidir el nombre de algunas variables, el título del resumen, el texto exacto de los mensajes y el orden de parte de la salida, siempre que se mantenga la lógica principal."
      },
      {
        title: "Qué conviene no perder de vista",
        body: "Este tipo de proyecto se sostiene mejor cuando primero resuelves la base: datos, bucle, condición y cierre. Después, si quieres, ajustas el estilo."
      },
      {
        title: "Qué demuestra este proyecto",
        body: "Demuestra que ya puedes tomar un problema pequeño, interpretarlo y convertirlo en una solución funcional sin depender de una receta completa."
      }
    ],
    example:
      "habitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Caminar', 'estado': 'pendiente'}\n]\n\nprint('=== REGISTRO ===')\nfor habito in habitos:\n    if habito['estado'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\nprint('Registro terminado')",
    practicePrompt: "Cambia el título, uno de los mensajes o el orden visual de la salida. La idea es mantener el programa útil aunque tomes decisiones propias.",
    practiceChecklist: [
      "Usa una lista con hábitos.",
      "Guarda cada hábito con información clara.",
      "Recorre los datos con un bucle.",
      "Muestra un cierre final visible."
    ],
    commonMistakes: [
      "Intentar hacer una versión demasiado grande antes de cerrar la base.",
      "Cambiar nombres o claves sin revisar que sigan coincidiendo en todo el programa.",
      "Perder el cierre final dentro del bucle."
    ],
    bugChallenge: {
      prompt: "Este registro debería mostrar el estado de cada hábito y cerrar una sola vez, pero una clave y una indentación cambian el resultado.",
      brokenCode:
        "habitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Caminar', 'estado': 'pendiente'}\n]\n\nfor habito in habitos:\n    if habito['estdo'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\n    print('Registro terminado')",
      expectedLearning: "Aunque el proyecto sea más libre, los puntos críticos siguen siendo los mismos: claves correctas, condición clara y cierre fuera del bucle."
    },
    playground: {
      title: "Explora tu registro de hábitos",
      guidance: "Ejecuta el proyecto y luego modifica títulos o mensajes. Busca una solución propia que siga cumpliendo el brief sin volverse confusa.",
      starterCode:
        "habitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Caminar', 'estado': 'pendiente'}\n]\n\nprint('=== REGISTRO ===')\nfor habito in habitos:\n    if habito['estado'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\nprint('Registro terminado')",
      emptyOutputHint: "La salida debería mostrar un pequeño resumen de hábitos y una línea final."
    },
    exerciseSlug: "build-freeform-habit-register"
  },
  {
    slug: "freeform-project-menu-helper",
    module: "Proyectos iniciales más libres",
    moduleSlug: "early-freeform-projects",
    order: 2,
    title: "Proyecto inicial más libre: asistente con menú sencillo",
    duration: "23 min",
    difficulty: "Beginner",
    summary: "Construye una herramienta pequeña con menú donde decides más del flujo y de los textos, manteniendo requisitos claros.",
    warmup: "Un menú sencillo ya te obliga a pensar mejor el flujo del programa. Esa es una buena forma de ganar autonomía sin saltar a algo demasiado abierto.",
    goal: "Al final, deberías poder crear una herramienta con varias opciones simples, funciones y respuestas distintas según la elección.",
    keyIdeas: [
      {
        title: "El menú te obliga a pensar el flujo",
        description: "No solo escribes líneas sueltas: decides cómo entra una opción y qué respuesta corresponde."
      },
      {
        title: "Más libertad requiere más orden",
        description: "Cuando el proyecto es menos receta, conviene separar cada acción en funciones claras."
      },
      {
        title: "Los requisitos mantienen el proyecto en tierra",
        description: "Tener dos o tres opciones mínimas ayuda a que la libertad no se vuelva caos."
      }
    ],
    explanation: [
      {
        title: "Cuál es el brief",
        body: "Tu tarea es construir una pequeña herramienta con menú y al menos dos opciones reales. Puedes decidir los mensajes, los nombres y parte del formato, pero el programa debe responder de forma distinta según la elección."
      },
      {
        title: "Qué apoyo sigue presente",
        body: "No estás solo. Tienes pistas, criterios de éxito, mentor y un ejemplo de referencia. Lo que cambia es que ya no te damos una receta tan cerrada."
      },
      {
        title: "Cómo resolverlo con calma",
        body: "Empieza por listar las opciones, luego define una función para cada una y por último une todo con la variable de elección. Esa secuencia reduce bastante la confusión."
      },
      {
        title: "Qué hace que el proyecto se sienta propio",
        body: "Que puedas elegir parte del tono, del orden o del contenido del menú hace que la solución se sienta más tuya, aunque el marco siga guiado."
      }
    ],
    example:
      "def ver_estado():\n    print('Tu estado actual es estable')\n\ndef ver_siguiente_paso():\n    print('Siguiente paso: repasar una lección')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar sin prisa')\n\nprint('1. Estado')\nprint('2. Siguiente paso')\nprint('3. Recordatorio')\nopcion = '2'\n\nif opcion == '1':\n    ver_estado()\nelif opcion == '2':\n    ver_siguiente_paso()\nelif opcion == '3':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
    practicePrompt: "Cambia los nombres, el estilo del menú o uno de los mensajes. La salida puede variar, pero el flujo debe seguir claro y coherente.",
    practiceChecklist: [
      "Muestra varias opciones visibles.",
      "Usa al menos dos funciones distintas.",
      "Guarda una elección y compárala.",
      "Responde con un camino distinto según la opción."
    ],
    commonMistakes: [
      "No alinear el valor de la opción con la comparación usada en el `if`.",
      "Dejar una función definida pero nunca llamada.",
      "Agregar muchas opciones y perder claridad."
    ],
    bugChallenge: {
      prompt: "Este menú debería responder a tres caminos posibles, pero una comparación y una llamada incompleta rompen parte del flujo.",
      brokenCode:
        "def ver_estado():\n    print('Tu estado actual es estable')\n\ndef ver_siguiente_paso():\n    print('Siguiente paso: repasar una lección')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar sin prisa')\n\nopcion = '3'\nif opcion == '1':\n    ver_estado()\nelif opcion == '2':\n    ver_siguiente_paso()\nelif opcion == 'tres':\n    ver_recordatorio",
      expectedLearning: "Cuando aumentan un poco los caminos del programa, sigue siendo fundamental revisar cada comparación y cada llamada."
    },
    playground: {
      title: "Prueba tu asistente con menú",
      guidance: "Ejecuta el proyecto y luego cambia la opción o los textos. Intenta mantener una solución clara aunque tomes decisiones propias.",
      starterCode:
        "def ver_estado():\n    print('Tu estado actual es estable')\n\ndef ver_siguiente_paso():\n    print('Siguiente paso: repasar una lección')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar sin prisa')\n\nprint('1. Estado')\nprint('2. Siguiente paso')\nprint('3. Recordatorio')\nopcion = '2'\n\nif opcion == '1':\n    ver_estado()\nelif opcion == '2':\n    ver_siguiente_paso()\nelif opcion == '3':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
      emptyOutputHint: "La salida debería mostrar el menú y luego una respuesta según la opción elegida."
    },
    exerciseSlug: "build-freeform-menu-helper"
  },
  {
    slug: "freeform-project-report-generator",
    module: "Proyectos iniciales más libres",
    moduleSlug: "early-freeform-projects",
    order: 3,
    title: "Proyecto inicial más libre: generador básico de reporte",
    duration: "24 min",
    difficulty: "Beginner",
    summary: "Crea un pequeño reporte a partir de datos estructurados, tomando más decisiones sobre la salida y el cierre del programa.",
    warmup: "Generar un reporte simple es una muy buena forma de sentir que ya puedes construir algo pequeño con criterio propio y una estructura clara.",
    goal: "Al final, deberías poder construir un reporte corto que recorra datos, clasifique estados y organice una salida útil.",
    keyIdeas: [
      {
        title: "Un reporte necesita criterio",
        description: "No solo muestra datos: decide cómo presentarlos y qué mensaje usar en cada caso."
      },
      {
        title: "Más autonomía no significa desorden",
        description: "Aunque haya varias soluciones válidas, las bases siguen siendo datos claros, bucle, decisión y cierre."
      },
      {
        title: "Una salida útil puede seguir siendo simple",
        description: "No hace falta un formato complejo para que el resultado se sienta como algo real."
      }
    ],
    explanation: [
      {
        title: "Cuál es el brief",
        body: "Debes crear un programa que tome varios registros simples y genere un reporte corto. La forma del encabezado y parte de los mensajes pueden variar, pero el programa tiene que recorrer los datos, distinguir estados y cerrar el reporte."
      },
      {
        title: "Qué se espera de ti aquí",
        body: "Se espera un poco más de criterio propio: decidir cómo nombrar el cierre, cómo organizar la presentación y qué mensaje usar en cada caso, siempre dentro de límites sencillos."
      },
      {
        title: "Cómo mantenerlo en nivel principiante",
        body: "Trabaja con pocos registros, textos cortos y una sola condición principal. Eso ya alcanza para que el problema se sienta más real sin volverse pesado."
      },
      {
        title: "Qué marca este proyecto",
        body: "Marca un momento importante: ya no solo sigues una guía, también empiezas a responder briefs con una solución razonable propia."
      }
    ],
    example:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('== REPORTE ==')\nfor registro in registros:\n    if registro['estado'] == 'bien':\n        print(registro['nombre'] + ': en buen camino')\n    else:\n        print(registro['nombre'] + ': necesita atención')\nprint('Reporte listo')",
    practicePrompt: "Cambia el encabezado o el mensaje de uno de los estados. Lo importante es que el reporte siga recorriendo bien los datos y termine de forma clara.",
    practiceChecklist: [
      "Crea una lista con registros.",
      "Usa un bucle para recorrerlos.",
      "Compara una clave de estado.",
      "Agrega un encabezado o cierre visible."
    ],
    commonMistakes: [
      "Hacer demasiado libre la salida y olvidar uno de los requisitos básicos.",
      "Usar una clave distinta en un punto del programa.",
      "Poner el cierre dentro del bucle y repetirlo."
    ],
    bugChallenge: {
      prompt: "Este reporte debería clasificar dos registros y cerrar una sola vez, pero una clave y una ubicación incorrecta del cierre cambian el resultado.",
      brokenCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estdo'] == 'bien':\n        print(registro['nombre'] + ': en buen camino')\n    else:\n        print(registro['nombre'] + ': necesita atención')\n    print('Reporte listo')",
      expectedLearning: "Incluso cuando la solución puede variar, los puntos más delicados siguen siendo claves, condiciones y cierre final."
    },
    playground: {
      title: "Explora tu generador de reporte",
      guidance: "Ejecuta el proyecto y luego cambia algunos textos. Busca una versión propia que siga cumpliendo el brief y se lea con claridad.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('== REPORTE ==')\nfor registro in registros:\n    if registro['estado'] == 'bien':\n        print(registro['nombre'] + ': en buen camino')\n    else:\n        print(registro['nombre'] + ': necesita atención')\nprint('Reporte listo')",
      emptyOutputHint: "La salida debería mostrar un encabezado, una línea por registro y un cierre final."
    },
    exerciseSlug: "build-freeform-report-generator"
  },
  {
    slug: "capstone-personal-organizer",
    module: "Cierre de fundamentos",
    moduleSlug: "foundations-capstone",
    order: 1,
    title: "Capstone: organizador personal simple",
    duration: "26 min",
    difficulty: "Beginner",
    summary: "Construye un organizador personal pequeño pero completo que use entrada, datos estructurados, menú, decisiones y un resumen final claro.",
    warmup: "Este proyecto no busca impresionarte con complejidad. Busca mostrarte que ya puedes reunir muchas piezas de Python para resolver algo pequeño pero real.",
    goal: "Al final, deberías poder construir un organizador personal simple con varias funciones, datos estructurados y una salida final que se sienta terminada.",
    keyIdeas: [
      {
        title: "Este proyecto cierra una etapa",
        description: "Reúne gran parte de lo que ya aprendiste dentro de un solo programa principiante."
      },
      {
        title: "Una base sólida se nota en cómo organizas el código",
        description: "Funciones, datos claros y flujo legible importan tanto como que el programa corra."
      },
      {
        title: "El resultado debe sentirse útil y completo",
        description: "No es solo practicar piezas: es terminar una herramienta pequeña que ya se siente propia."
      }
    ],
    explanation: [
      {
        title: "Cuál es la propuesta",
        body: "Vas a crear un organizador personal muy simple. El programa debe guardar algunos datos de perfil o hábitos, ofrecer al menos una pequeña interacción y cerrar con un resumen legible."
      },
      {
        title: "Qué herramientas se reúnen aquí",
        body: "Este capstone combina `input()`, strings, condicionales, funciones, listas, diccionarios y salida organizada. No introduce temas nuevos: pone a prueba cómo conectas lo que ya sabes."
      },
      {
        title: "Cómo abordarlo sin perderte",
        body: "Primero piensa la estructura de datos, luego define funciones cortas para mostrar partes del programa y por último revisa el flujo general. Una buena versión básica vale mucho más que una versión ambiciosa a medio terminar."
      },
      {
        title: "Por qué se siente especial",
        body: "Este tipo de proyecto marca un cambio importante: ya no estás solo resolviendo ejercicios sueltos. Estás cerrando una base real con un programa que tiene identidad propia."
      }
    ],
    example:
      "perfil = {\n    'nombre': 'Ana',\n    'ciudad': 'Córdoba',\n    'meta': 'Practicar cada día'\n}\n\nhabitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\ndef mostrar_habitos(habitos):\n    print('=== HÁBITOS ===')\n    for habito in habitos:\n        if habito['estado'] == 'hecho':\n            print(habito['nombre'] + ': listo')\n        else:\n            print(habito['nombre'] + ': por hacer')\n\nmostrar_perfil(perfil)\nmostrar_habitos(habitos)\nprint('Base de Python cerrada por hoy')",
    practicePrompt: "Piensa qué información quieres resaltar primero y cómo quieres cerrar el programa. El objetivo es que el resultado se sienta ordenado y completo.",
    practiceChecklist: [
      "Usa un diccionario para datos principales.",
      "Usa una lista con más de un elemento.",
      "Define al menos dos funciones.",
      "Incluye una salida final de cierre."
    ],
    commonMistakes: [
      "Intentar meter demasiadas funciones o caminos y perder claridad.",
      "Mezclar nombres de claves o variables entre distintas partes del programa.",
      "Olvidar que el cierre final debe quedar fuera de los bucles principales."
    ],
    bugChallenge: {
      prompt: "Este organizador debería mostrar un perfil, revisar hábitos y cerrar una sola vez, pero una clave y una línea final mal ubicada cambian el resultado.",
      brokenCode:
        "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar'}\nhabitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor habito in habitos:\n    if habito['estdo'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\n    print('Base de Python cerrada por hoy')",
      expectedLearning: "En un proyecto de cierre, los errores siguen estando en los básicos: claves exactas, flujo claro y líneas finales bien ubicadas."
    },
    playground: {
      title: "Prueba tu organizador personal",
      guidance: "Ejecuta el proyecto, cambia algunos textos o reordena la salida. Busca una versión que siga siendo simple, clara y lo bastante tuya como para sentirse como cierre de etapa.",
      starterCode:
        "perfil = {\n    'nombre': 'Ana',\n    'ciudad': 'Córdoba',\n    'meta': 'Practicar cada día'\n}\n\nhabitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\ndef mostrar_habitos(habitos):\n    print('=== HÁBITOS ===')\n    for habito in habitos:\n        if habito['estado'] == 'hecho':\n            print(habito['nombre'] + ': listo')\n        else:\n            print(habito['nombre'] + ': por hacer')\n\nmostrar_perfil(perfil)\nmostrar_habitos(habitos)\nprint('Base de Python cerrada por hoy')",
      emptyOutputHint: "La salida debería mostrar varias secciones y un cierre final claro."
    },
    exerciseSlug: "build-capstone-personal-organizer"
  },
  {
    slug: "capstone-menu-and-report-tool",
    module: "Cierre de fundamentos",
    moduleSlug: "foundations-capstone",
    order: 2,
    title: "Capstone: herramienta con menú y reporte final",
    duration: "28 min",
    difficulty: "Beginner",
    summary: "Construye una herramienta pequeña con menú, varias funciones y un reporte final que combine interacción, decisiones y datos estructurados.",
    warmup: "Un buen cierre de fundamentos no necesita ser enorme. Necesita mostrar que ya puedes pensar un flujo completo y sostenerlo con varias piezas de Python trabajando juntas.",
    goal: "Al final, deberías poder construir una herramienta con menú y reporte que combine varias bases de Python dentro de un flujo entendible y funcional.",
    keyIdeas: [
      {
        title: "El flujo completo es parte del aprendizaje",
        description: "No solo importan los datos o las funciones por separado, sino cómo se conectan de principio a fin."
      },
      {
        title: "Más piezas, misma calma",
        description: "Aunque el proyecto tenga más partes, sigue siendo mejor resolverlo con una estructura simple y legible."
      },
      {
        title: "Un capstone debe dejar sensación de logro",
        description: "La meta es terminar un programa que marque de verdad el cierre de la base."
      }
    ],
    explanation: [
      {
        title: "Qué vas a construir",
        body: "Este proyecto propone una herramienta con menú que ofrece varias acciones simples y después presenta un resumen final. Es un programa más rico que los anteriores, pero sigue siendo totalmente abordable para principiantes."
      },
      {
        title: "Qué une del recorrido",
        body: "Aquí se juntan entrada, strings, funciones, condicionales, listas o diccionarios y una salida final organizada. Es una de las formas más claras de sentir que la base realmente quedó integrada."
      },
      {
        title: "Qué conviene priorizar",
        body: "Primero define las opciones del menú y las funciones que las sostienen. Luego asegúrate de que el reporte final use datos claros y aparezca una sola vez, al final del flujo."
      },
      {
        title: "Por qué es un buen cierre",
        body: "Porque se parece bastante a un programa real de nivel inicial: tiene estructura, decisiones, datos y una intención visible. Eso produce una sensación concreta de avance."
      }
    ],
    example:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef ver_menu():\n    print('1. Ver reporte')\n    print('2. Ver recordatorio')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar paso a paso')\n\ndef ver_reporte(registros):\n    print('=== REPORTE FINAL ===')\n    for registro in registros:\n        if registro['estado'] == 'bien':\n            print(registro['nombre'] + ': en buen camino')\n        else:\n            print(registro['nombre'] + ': necesita atención')\n\nver_menu()\nopcion = '1'\nif opcion == '1':\n    ver_reporte(registros)\nelse:\n    ver_recordatorio()\nprint('Fundamentos completados')",
    practicePrompt: "Decide cómo quieres nombrar las opciones, el reporte y el cierre final. El flujo puede cambiar un poco, pero debe seguir siendo claro y cumplir el brief.",
    practiceChecklist: [
      "Muestra un menú con más de una opción.",
      "Usa funciones para organizar la lógica.",
      "Recorre datos estructurados en el reporte.",
      "Cierra con una línea final que se sienta importante."
    ],
    commonMistakes: [
      "Dejar el reporte mezclado con el menú sin separar funciones.",
      "Agregar demasiadas opciones y perder claridad.",
      "Repetir el cierre dentro de una rama o dentro del bucle."
    ],
    bugChallenge: {
      prompt: "Esta herramienta debería mostrar un menú, responder a una opción y cerrar con un reporte claro, pero una comparación y una clave rompen el recorrido.",
      brokenCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef ver_reporte(registros):\n    for registro in registros:\n        if registro['estdo'] == 'bien':\n            print(registro['nombre'] + ': en buen camino')\n        else:\n            print(registro['nombre'] + ': necesita atención')\n\nopcion = '1'\nif opcion == 1:\n    ver_reporte(registros)\nprint('Fundamentos completados')",
      expectedLearning: "Incluso en el cierre del recorrido, las revisiones clave siguen siendo las mismas: tipos de datos, comparaciones y nombres exactos."
    },
    playground: {
      title: "Explora tu herramienta final",
      guidance: "Ejecuta el proyecto, cambia textos del menú o del cierre y comprueba que la herramienta siga siendo coherente, clara y suficientemente completa para cerrar esta etapa.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef ver_menu():\n    print('1. Ver reporte')\n    print('2. Ver recordatorio')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar paso a paso')\n\ndef ver_reporte(registros):\n    print('=== REPORTE FINAL ===')\n    for registro in registros:\n        if registro['estado'] == 'bien':\n            print(registro['nombre'] + ': en buen camino')\n        else:\n            print(registro['nombre'] + ': necesita atención')\n\nver_menu()\nopcion = '1'\nif opcion == '1':\n    ver_reporte(registros)\nelse:\n    ver_recordatorio()\nprint('Fundamentos completados')",
      emptyOutputHint: "La salida debería mostrar el menú, una respuesta principal y un cierre final de etapa."
    },
    exerciseSlug: "build-capstone-menu-report-tool"
  },
  {
    slug: "what-a-file-is",
    module: "Archivos básicos",
    moduleSlug: "basic-files",
    order: 1,
    title: "Qué es un archivo y por qué cambia tus programas",
    duration: "15 min",
    difficulty: "Beginner",
    summary: "Aprende por qué guardar información en un archivo hace que tus programas se sientan más útiles y más cercanos a algo real.",
    warmup: "Hasta ahora la mayoría de tus programas viven solo mientras se ejecutan. Un archivo cambia eso: permite que cierta información quede guardada para volver a usarla.",
    goal: "Al final, deberías poder explicar qué es un archivo de texto en Python y por qué marca el comienzo de una etapa más práctica.",
    keyIdeas: [
      {
        title: "Un archivo guarda información fuera del programa",
        description: "Permite que el texto no desaparezca cuando termina la ejecución."
      },
      {
        title: "Un archivo de texto sigue siendo algo simple",
        description: "No hace falta pensar en sistemas complejos: empieza como un lugar para guardar texto."
      },
      {
        title: "Esto abre una nueva etapa",
        description: "Los programas empiezan a parecerse más a herramientas útiles cuando pueden guardar y recuperar información."
      }
    ],
    explanation: [
      {
        title: "Qué cambia con los archivos",
        body: "Antes, casi todo lo que hacías terminaba al cerrar o volver a ejecutar el programa. Con un archivo, cierta información puede quedar guardada y volver a leerse más adelante."
      },
      {
        title: "Qué es un archivo de texto en este nivel",
        body: "Por ahora, piensa un archivo como un cuaderno simple donde tu programa puede escribir líneas de texto y luego volver a leerlas. No hace falta ir más lejos para empezar a usarlo bien."
      },
      {
        title: "Por qué esta es la primera parada del nivel siguiente",
        body: "Guardar información es una frontera muy clara entre ejercicios de base y programas más prácticos. Por eso este módulo funciona bien como apertura de la segunda gran ruta."
      },
      {
        title: "Qué conviene mantener simple",
        body: "No necesitas muchos archivos ni rutas complicadas. Un archivo de texto corto ya alcanza para entender la idea y usarla en programas reales de nivel principiante."
      }
    ],
    example:
      "with open('nota.txt', 'w') as archivo:\n    archivo.write('Practicar Python hoy')\n\nprint('Archivo guardado')",
    practicePrompt: "Lee el ejemplo y piensa qué parte crea el archivo y qué parte deja un mensaje dentro. La idea no es memorizar todavía, sino entender el cambio de mentalidad.",
    practiceChecklist: [
      "Reconoce que `open(..., 'w')` abre un archivo para guardar.",
      "Identifica la línea que escribe el texto.",
      "Observa que el programa termina con un mensaje simple de confirmación."
    ],
    commonMistakes: [
      "Pensar que un archivo es algo demasiado avanzado para empezar a usarlo.",
      "Mirar toda la sintaxis de golpe en vez de separar abrir, escribir y confirmar.",
      "Perder de vista que aquí seguimos trabajando con texto simple."
    ],
    bugChallenge: {
      prompt: "Este código debería guardar una nota en un archivo, pero un detalle de modo de apertura está mal escrito.",
      brokenCode: "with open('nota.txt', 'write') as archivo:\n    archivo.write('Practicar hoy')",
      expectedLearning: "Al empezar con archivos, conviene revisar primero lo más básico: nombre del archivo, modo de apertura y línea que escribe el texto."
    },
    playground: {
      title: "Prueba tu primer archivo de texto",
      guidance: "Ejecuta el código y luego cambia el mensaje guardado. Lo importante es sentir que el programa ya puede dejar información escrita fuera de sí mismo.",
      starterCode:
        "with open('nota.txt', 'w') as archivo:\n    archivo.write('Practicar Python hoy')\n\nprint('Archivo guardado')",
      emptyOutputHint: "Una primera prueba con archivos debería confirmar que el texto se guardó correctamente."
    },
    exerciseSlug: "explain-what-a-text-file-does"
  },
  {
    slug: "writing-text-files",
    module: "Archivos básicos",
    moduleSlug: "basic-files",
    order: 2,
    title: "Guardar texto en un archivo con calma",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Practica cómo escribir texto en un archivo usando una forma clara y segura para principiantes.",
    warmup: "Guardar una nota pequeña ya cambia la sensación del programa. Deja de ser solo una salida momentánea y empieza a producir algo que queda.",
    goal: "Al final, deberías poder escribir texto en un archivo y confirmar con claridad que la operación salió bien.",
    keyIdeas: [
      {
        title: "El modo `w` sirve para guardar",
        description: "Es la forma más simple de empezar a escribir en un archivo."
      },
      {
        title: "Escribir y confirmar son dos pasos distintos",
        description: "Primero guardas, después muestras un mensaje que ayude a leer el resultado."
      },
      {
        title: "La simplicidad sigue ganando",
        description: "Con una sola línea de texto ya puedes practicar lo importante."
      }
    ],
    explanation: [
      {
        title: "Cómo leer `with open(...)` al empezar",
        body: "Puedes pensar esta línea así: 'abre este archivo para trabajar con él de forma ordenada'. Después, dentro del bloque, haces la acción importante, que aquí es escribir texto."
      },
      {
        title: "Por qué sirve confirmar la escritura",
        body: "Cuando el programa imprime algo como `Archivo guardado`, te ayuda a distinguir entre la acción de guardar y la acción de mostrar un mensaje a la persona usuaria."
      },
      {
        title: "Qué hace que este patrón sea útil",
        body: "Con este patrón ya puedes guardar una nota, una respuesta o un pequeño registro. Es un salto práctico muy visible respecto a los fundamentos."
      },
      {
        title: "Qué revisar si no funciona",
        body: "Al principio, revisa el nombre del archivo, el modo `w`, la indentación y si usaste `write()` donde corresponde."
      }
    ],
    example:
      "mensaje = 'Hoy avancé un paso más'\nwith open('avance.txt', 'w') as archivo:\n    archivo.write(mensaje)\n\nprint('Guardado listo')",
    practicePrompt: "Cambia el texto que se guarda o el nombre del archivo. Lo importante es conservar la estructura general y el mensaje final de confirmación.",
    practiceChecklist: [
      "Guarda un texto en una variable o escríbelo directo.",
      "Usa `with open(..., 'w')`.",
      "Llama a `archivo.write(...)`.",
      "Muestra una confirmación final."
    ],
    commonMistakes: [
      "Olvidar el modo `w` al abrir el archivo.",
      "Poner la línea `write()` fuera del bloque indentado.",
      "Confundir el nombre de la variable del archivo."
    ],
    bugChallenge: {
      prompt: "Este código debería guardar una nota, pero una línea quedó fuera del bloque y rompe la estructura.",
      brokenCode: "with open('avance.txt', 'w') as archivo:\narchivo.write('Hoy avancé')\nprint('Guardado listo')",
      expectedLearning: "Cuando trabajas con archivos, la indentación del bloque sigue siendo tan importante como en funciones, bucles y condiciones."
    },
    playground: {
      title: "Guarda una nota en un archivo",
      guidance: "Ejecuta el código, cambia el texto y vuelve a correrlo. Este patrón es la base para programas que dejan un rastro útil fuera de la pantalla.",
      starterCode:
        "mensaje = 'Hoy avancé un paso más'\nwith open('avance.txt', 'w') as archivo:\n    archivo.write(mensaje)\n\nprint('Guardado listo')",
      emptyOutputHint: "La salida debería confirmar que el texto ya quedó guardado."
    },
    exerciseSlug: "save-a-note-to-file"
  },
  {
    slug: "reading-files-and-organizing-output",
    module: "Archivos básicos",
    moduleSlug: "basic-files",
    order: 3,
    title: "Leer un archivo y mostrar un resumen claro",
    duration: "17 min",
    difficulty: "Beginner",
    summary: "Aprende a leer texto guardado en un archivo y a convertirlo en una salida simple y ordenada.",
    warmup: "Guardar ya se siente útil, pero leer lo guardado hace que el programa empiece a parecerse mucho más a una herramienta real.",
    goal: "Al final, deberías poder escribir un texto en un archivo, leerlo y mostrar un pequeño resumen de forma clara.",
    keyIdeas: [
      {
        title: "El modo `r` sirve para leer",
        description: "Permite abrir un archivo para recuperar lo que ya estaba guardado."
      },
      {
        title: "Guardar y leer pueden vivir en el mismo programa",
        description: "Eso hace visible un flujo completo de trabajo con datos simples."
      },
      {
        title: "Un resumen ordenado vuelve útil la salida",
        description: "No alcanza con leer; también conviene presentar lo leído de forma clara."
      }
    ],
    explanation: [
      {
        title: "Qué cambia al leer",
        body: "Cuando usas `open(..., 'r')`, el programa ya no solo deja información. También puede recuperarla. Ese ida y vuelta es lo que hace que la segunda ruta se sienta más práctica."
      },
      {
        title: "Cómo construir un flujo simple",
        body: "Puedes guardar primero una o dos líneas en un archivo y después abrirlo para leerlo. Esa versión básica ya te enseña muchísimo sin necesidad de complejidad extra."
      },
      {
        title: "Por qué conviene resumir la salida",
        body: "En lugar de mostrar texto suelto sin contexto, una pequeña etiqueta o encabezado ayuda a que el resultado se lea como un mini reporte."
      },
      {
        title: "Qué revisar si algo sale raro",
        body: "Comprueba si el archivo se escribió antes, si abriste con el modo correcto y si la variable donde guardas el contenido se usa después en el `print()` esperado."
      }
    ],
    example:
      "with open('registro.txt', 'w') as archivo:\n    archivo.write('Leer\\nPracticar Python')\n\nwith open('registro.txt', 'r') as archivo:\n    contenido = archivo.read()\n\nprint('Resumen guardado:')\nprint(contenido)",
    practicePrompt: "Prueba cambiar el contenido o el título del resumen. La idea es que el programa escriba, lea y luego muestre lo recuperado con claridad.",
    practiceChecklist: [
      "Escribe algo en un archivo.",
      "Vuelve a abrirlo con `r`.",
      "Guarda lo leído en una variable.",
      "Muestra un resumen final claro."
    ],
    commonMistakes: [
      "Intentar leer sin haber escrito antes en el mismo flujo.",
      "Usar el modo de apertura equivocado.",
      "Leer el contenido pero no imprimirlo después."
    ],
    bugChallenge: {
      prompt: "Este código debería guardar y leer un archivo, pero una variable no coincide al mostrar el resultado.",
      brokenCode:
        "with open('registro.txt', 'w') as archivo:\n    archivo.write('Leer\\nPracticar Python')\n\nwith open('registro.txt', 'r') as archivo:\n    contenido = archivo.read()\n\nprint(resumen)",
      expectedLearning: "Cuando un programa empieza a crecer, los fallos de nombres entre una parte y otra se vuelven más importantes de revisar."
    },
    playground: {
      title: "Guarda y lee un archivo simple",
      guidance: "Ejecuta el programa completo y luego cambia el contenido guardado. Lo importante es ver el ciclo completo: escribir, leer y mostrar.",
      starterCode:
        "with open('registro.txt', 'w') as archivo:\n    archivo.write('Leer\\nPracticar Python')\n\nwith open('registro.txt', 'r') as archivo:\n    contenido = archivo.read()\n\nprint('Resumen guardado:')\nprint(contenido)",
      emptyOutputHint: "La salida debería mostrar un encabezado y luego el texto leído desde el archivo."
    },
    exerciseSlug: "read-a-file-and-show-summary"
  },
  {
    slug: "why-program-organization-matters",
    module: "Funciones y organización simple",
    moduleSlug: "simple-program-organization",
    order: 1,
    title: "Por qué conviene organizar mejor un programa cuando crece",
    duration: "15 min",
    difficulty: "Beginner",
    summary: "Aprende a reconocer cuándo un script ya pide una estructura más clara y por qué dividir lógica en funciones ayuda a seguir pensando con calma.",
    warmup: "Un programa pequeño puede vivir en pocas líneas. Cuando empieza a hacer más cosas, una buena organización deja de ser un lujo y se vuelve una ayuda real.",
    goal: "Al final, deberías poder explicar por qué una función clara hace que un programa un poco más grande sea más fácil de leer, revisar y reutilizar.",
    keyIdeas: [
      {
        title: "Más líneas no deberían significar más confusión",
        description: "Cuando una parte del programa tiene una intención clara, conviene darle un lugar reconocible."
      },
      {
        title: "Las funciones agrupan trabajo con sentido",
        description: "Sirven para nombrar acciones y evitar que todo quede mezclado en un solo bloque."
      },
      {
        title: "Organizar no es complicar",
        description: "A este nivel, organizar mejor significa hacer el código más amable, no más técnico."
      }
    ],
    explanation: [
      {
        title: "Qué cambia cuando el programa crece",
        body: "En la primera ruta pudiste resolver muchos problemas con un solo archivo y pocas secciones. En esta nueva etapa, los programas empiezan a hacer más cosas y se vuelve útil separar mejor cada parte."
      },
      {
        title: "Qué aporta una función en este contexto",
        body: "Una función te deja decir: 'Esta parte muestra el menú', 'esta otra guarda una nota' o 'esta revisa un estado'. Ese nombre ordena el pensamiento y también hace más fácil volver al código después."
      },
      {
        title: "Qué problema evita",
        body: "Evita el efecto de 'pared de código', donde todo parece pegado y cuesta entender qué hace cada sección. Una buena organización no resuelve todo, pero baja bastante esa sensación."
      },
      {
        title: "Qué sigue sin hacer falta",
        body: "No necesitas pensar todavía en sistemas complejos, patrones raros o arquitectura avanzada. Aquí basta con separar tareas claras y mantener nombres simples."
      }
    ],
    example:
      "def mostrar_titulo():\n    print('=== TU PLAN ===')\n\ndef mostrar_pasos():\n    print('- Leer')\n    print('- Practicar Python')\n\nmostrar_titulo()\nmostrar_pasos()",
    practicePrompt: "Lee el ejemplo y piensa qué parte del programa quedaría más difícil de entender si todo estuviera escrito sin funciones separadas.",
    practiceChecklist: [
      "Identifica una función que presenta información.",
      "Identifica otra que resuelve otra parte del programa.",
      "Observa cómo los nombres ayudan a leer el flujo."
    ],
    commonMistakes: [
      "Pensar que organizar solo importa en proyectos enormes.",
      "Crear funciones con nombres poco claros que no ayudan a leer mejor.",
      "Separar en funciones sin una intención visible."
    ],
    bugChallenge: {
      prompt: "Este código debería mostrar un título y luego un plan, pero una llamada y un nombre de función hacen más difícil seguir el flujo.",
      brokenCode:
        "def mostrar_titulo():\n    print('=== TU PLAN ===')\n\ndef hacer_cosas():\n    print('- Leer')\n    print('- Practicar Python')\n\nmostrar_titulo\nhacer_cosas()",
      expectedLearning: "Cuando un programa empieza a crecer, conviene revisar nombres claros y llamadas correctas antes de tocar algo más complejo."
    },
    playground: {
      title: "Prueba una organización más clara",
      guidance: "Ejecuta el código, cambia los nombres o los mensajes y observa cómo cambia la lectura del flujo. La meta es sentir que las funciones ordenan el programa.",
      starterCode:
        "def mostrar_titulo():\n    print('=== TU PLAN ===')\n\ndef mostrar_pasos():\n    print('- Leer')\n    print('- Practicar Python')\n\nmostrar_titulo()\nmostrar_pasos()",
      emptyOutputHint: "La salida debería mostrar una estructura simple pero más ordenada gracias a las funciones."
    },
    exerciseSlug: "explain-why-functions-help-organization"
  },
  {
    slug: "reusing-functions-with-clear-intent",
    module: "Funciones y organización simple",
    moduleSlug: "simple-program-organization",
    order: 2,
    title: "Reutilizar funciones con una intención más clara",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Practica cómo una función bien pensada puede usarse varias veces sin repetir bloques largos y sin volver el programa más confuso.",
    warmup: "Reutilizar no es solo ahorrar líneas. También te ayuda a sostener programas más amplios sin copiar lo mismo muchas veces.",
    goal: "Al final, deberías poder construir un programa pequeño donde una función se use con intención clara en más de una parte del flujo.",
    keyIdeas: [
      {
        title: "Reutilizar también organiza",
        description: "Si una acción se repite, muchas veces conviene ponerla en una función con nombre."
      },
      {
        title: "La intención debe verse",
        description: "No basta con ahorrar líneas; la función tiene que dejar más claro qué está haciendo el programa."
      },
      {
        title: "Los parámetros siguen siendo una herramienta práctica",
        description: "Permiten que una misma función sirva para varios casos pequeños."
      }
    ],
    explanation: [
      {
        title: "Qué significa reutilizar mejor",
        body: "No se trata solo de llamar dos veces una función. Se trata de usarla para expresar una idea clara del programa: saludar, mostrar una nota, registrar algo o presentar un bloque de salida."
      },
      {
        title: "Cómo se nota una buena reutilización",
        body: "Se nota cuando el flujo del programa queda más limpio y los nombres ayudan a seguir lo que ocurre. Si la función no aclara nada, quizá todavía no está separada en el lugar correcto."
      },
      {
        title: "Qué problema resuelve en esta etapa",
        body: "Resuelve el crecimiento desordenado del script. Repetir bloques largos aumenta la confusión; reutilizar una función corta la reduce."
      },
      {
        title: "Qué conviene mantener simple",
        body: "Una o dos funciones reutilizadas con parámetros pequeños ya alcanzan para practicar esta idea de forma real y accesible."
      }
    ],
    example:
      "def mostrar_linea(nombre, estado):\n    print(nombre + ': ' + estado)\n\nmostrar_linea('Lectura', 'bien')\nmostrar_linea('Python', 'pendiente')",
    practicePrompt: "Prueba cambiar los valores o reutilizar la función con una tercera línea. La idea es ver cómo el patrón evita repetir el mismo `print()` completo.",
    practiceChecklist: [
      "Define una función con parámetros simples.",
      "Usa esa función más de una vez.",
      "Mantén la salida clara y consistente."
    ],
    commonMistakes: [
      "Volver a copiar `print()` largos en lugar de reutilizar la función.",
      "Poner parámetros que no se usan dentro de la función.",
      "Elegir nombres genéricos que no explican qué hace la función."
    ],
    bugChallenge: {
      prompt: "Este código debería reutilizar una función para mostrar dos estados, pero una llamada y un parámetro no coinciden del todo.",
      brokenCode:
        "def mostrar_linea(nombre, estado):\n    print(nombre + ': ' + estdo)\n\nmostrar_linea('Lectura', 'bien')",
      expectedLearning: "En programas un poco más grandes, reutilizar bien también exige revisar nombres consistentes dentro y fuera de la función."
    },
    playground: {
      title: "Reutiliza una función con intención",
      guidance: "Ejecuta el ejemplo y luego añade otra llamada. La meta es sentir que una pequeña función puede ordenar mejor una parte repetida del programa.",
      starterCode:
        "def mostrar_linea(nombre, estado):\n    print(nombre + ': ' + estado)\n\nmostrar_linea('Lectura', 'bien')\nmostrar_linea('Python', 'pendiente')",
      emptyOutputHint: "La salida debería mostrar varias líneas construidas por la misma función."
    },
    exerciseSlug: "reuse-a-function-for-multiple-lines"
  },
  {
    slug: "first-simple-module-idea",
    module: "Funciones y organización simple",
    moduleSlug: "simple-program-organization",
    order: 3,
    title: "Primera idea de separar partes del programa en otro archivo",
    duration: "17 min",
    difficulty: "Beginner",
    summary: "Da tu primer paso para entender que, cuando un programa crece, algunas funciones pueden vivir en otro archivo simple para mantener el código más limpio.",
    warmup: "Hasta ahora casi todo vivió en un solo archivo. La siguiente idea natural es entender que algunas partes pueden ir a otro archivo para que el programa respire mejor.",
    goal: "Al final, deberías poder entender una separación muy simple entre archivo principal y archivo de apoyo, sin sentirla como algo abstracto ni avanzado.",
    keyIdeas: [
      {
        title: "Separar no significa complicar",
        description: "A este nivel, solo significa que no todo tiene que vivir en el mismo lugar."
      },
      {
        title: "Un archivo puede guardar funciones de apoyo",
        description: "Eso ayuda a que el archivo principal muestre el flujo general con más claridad."
      },
      {
        title: "La idea importa más que la complejidad técnica",
        description: "Aquí alcanza con un ejemplo simple de `import` y un módulo pequeño."
      }
    ],
    explanation: [
      {
        title: "Por qué aparece esta idea ahora",
        body: "Después de archivos básicos y funciones más intencionales, el siguiente paso natural es entender que ciertas partes del programa pueden vivir en un archivo aparte para que el principal quede más ordenado."
      },
      {
        title: "Cómo pensar un módulo simple",
        body: "Por ahora, piensa en un módulo como otro archivo con funciones útiles. El archivo principal se encarga del flujo y el archivo auxiliar guarda acciones pequeñas reutilizables."
      },
      {
        title: "Qué no hace falta todavía",
        body: "No necesitas aprender sistemas complejos de carpetas, paquetes o imports avanzados. Un solo ejemplo claro ya alcanza para entender el beneficio."
      },
      {
        title: "Qué gana el programa",
        body: "Gana aire. El archivo principal deja de cargar con todo y se vuelve más fácil de leer de arriba hacia abajo."
      }
    ],
    example:
      "from mensajes import mostrar_bienvenida\n\nmostrar_bienvenida()\nprint('Programa listo')",
    practicePrompt: "Lee el ejemplo y piensa qué parte del programa quedaría mejor guardada en otro archivo: la bienvenida, el menú o un bloque de ayuda repetido.",
    practiceChecklist: [
      "Reconoce que una función puede vivir en otro archivo.",
      "Observa que el archivo principal puede quedar más corto.",
      "Piensa en una parte repetida que convendría mover."
    ],
    commonMistakes: [
      "Pensar que usar otro archivo ya es algo demasiado avanzado para principiantes.",
      "Querer aprender imports complejos antes de entender la idea básica.",
      "Mover cosas a otro archivo sin una razón clara."
    ],
    bugChallenge: {
      prompt: "Este ejemplo debería importar una función simple, pero un nombre hace que el archivo principal no pueda usarla como espera.",
      brokenCode:
        "from mensajes import mostrar_bienvenida\n\nmostrar_bienvenidas()",
      expectedLearning: "En una separación simple entre archivos, revisar nombres exactos sigue siendo lo más importante."
    },
    exerciseSlug: "organize-a-small-program-with-helper-function"
  },
  {
    slug: "small-utilities-with-clear-purpose",
    module: "Utilidades pequeñas y útiles",
    moduleSlug: "small-organized-utilities",
    order: 1,
    title: "Construir una utilidad pequeña con una responsabilidad clara",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Da el paso desde scripts sueltos hacia una herramienta pequeña con propósito visible, usando funciones y un archivo para guardar datos útiles.",
    warmup: "Un programa empieza a sentirse más útil cuando no solo muestra algo, sino que resuelve una tarea concreta y deja claro para qué sirve cada parte.",
    goal: "Al final, deberías poder reconocer cómo una utilidad pequeña mejora cuando separa responsabilidades y usa un archivo para guardar algo simple.",
    keyIdeas: [
      {
        title: "Una utilidad hace una tarea concreta",
        description: "No intenta resolver todo. Hace una cosa útil y la hace de forma clara."
      },
      {
        title: "Las funciones reparten responsabilidades",
        description: "Una puede guardar información y otra puede mostrarla, sin mezclar todo en el mismo bloque."
      },
      {
        title: "El archivo deja de ser un ejemplo aislado",
        description: "Ahora guardar y leer texto forma parte de una herramienta completa, no de una práctica suelta."
      }
    ],
    explanation: [
      {
        title: "Qué cambia en esta etapa",
        body: "En `Archivos básicos` aprendiste a escribir y leer texto. En `Funciones y organización simple` viste cómo repartir mejor el trabajo del programa. Ahora vamos a juntar esas ideas dentro de utilidades pequeñas que ya se sienten más reales."
      },
      {
        title: "Qué significa tener una responsabilidad clara",
        body: "Significa que el programa se entiende rápido. Por ejemplo: guardar una nota, mostrar una lista o resumir un registro. Cuando la utilidad tiene un objetivo visible, también es más fácil decidir qué función hace cada parte."
      },
      {
        title: "Qué conviene mantener simple",
        body: "Todavía no hace falta construir sistemas complejos. Una o dos funciones, un archivo de texto y una salida ordenada alcanzan para sentir el salto hacia herramientas pequeñas pero útiles."
      },
      {
        title: "Qué gana la persona que aprende",
        body: "Gana confianza para pensar: 'puedo construir algo que sirve para una tarea concreta'. Ese cambio es importante porque marca el paso desde scripts de práctica hacia utilidades más intencionales."
      }
    ],
    example:
      "def guardar_nota(texto):\n    with open('notas.txt', 'w') as archivo:\n        archivo.write(texto)\n\n\ndef mostrar_nota():\n    with open('notas.txt', 'r') as archivo:\n        print('Nota guardada:')\n        print(archivo.read())\n\n\nguardar_nota('Practicar Python hoy')\nmostrar_nota()",
    practicePrompt: "Lee el ejemplo y señala qué parte guarda la información y qué parte la presenta. La utilidad se siente más clara porque cada función tiene un papel visible.",
    practiceChecklist: [
      "Identifica una función que guarda datos.",
      "Identifica otra que muestra el resultado.",
      "Observa que el archivo ya forma parte de una herramienta con propósito."
    ],
    commonMistakes: [
      "Poner la escritura y la lectura mezcladas dentro de un solo bloque difícil de seguir.",
      "No dar nombres claros a las funciones.",
      "Pensar que una utilidad pequeña necesita muchas partes para ser válida."
    ],
    bugChallenge: {
      prompt: "Este programa quiere guardar una nota y luego mostrarla, pero mezcla un nombre y una llamada que rompen la idea de utilidad clara.",
      brokenCode:
        "def guardar_nota(texto):\n    with open('notas.txt', 'w') as archivo:\n        archivo.write(texto)\n\n\ndef mostrar_nota():\n    with open('notas.txt', 'r') as archivo:\n        print(archiv.read())\n\nguardar_notas('Practicar Python hoy')\nmostrar_nota()",
      expectedLearning: "Cuando un programa tiene una responsabilidad concreta, revisar nombres y llamadas correctas vuelve mucho más fácil corregirlo."
    },
    playground: {
      title: "Prueba una utilidad pequeña y clara",
      guidance: "Ejecuta la utilidad y luego cambia la nota guardada. La meta es sentir que una herramienta simple ya puede tener un objetivo visible y una estructura fácil de seguir.",
      starterCode:
        "def guardar_nota(texto):\n    with open('notas.txt', 'w') as archivo:\n        archivo.write(texto)\n\n\ndef mostrar_nota():\n    with open('notas.txt', 'r') as archivo:\n        print('Nota guardada:')\n        print(archivo.read())\n\n\nguardar_nota('Practicar Python hoy')\nmostrar_nota()",
      emptyOutputHint: "La salida debería mostrar un encabezado y luego la nota guardada."
    },
    exerciseSlug: "explain-why-a-small-utility-needs-clear-functions"
  },
  {
    slug: "saving-and-checking-notes-with-functions",
    module: "Utilidades pequeñas y útiles",
    moduleSlug: "small-organized-utilities",
    order: 2,
    title: "Guardar y consultar notas con funciones de apoyo",
    duration: "17 min",
    difficulty: "Beginner",
    summary: "Construye una pequeña libreta que guarda varias líneas en un archivo y luego las muestra con un encabezado claro.",
    warmup: "Una utilidad se siente más real cuando guarda información que puedes volver a consultar sin repetir todo el trabajo.",
    goal: "Al final, deberías poder construir una utilidad corta que escriba datos en un archivo, los recupere y use funciones para mantener un flujo legible.",
    keyIdeas: [
      {
        title: "Guardar y consultar son tareas distintas",
        description: "Separarlas en funciones ayuda a leer el programa con más calma."
      },
      {
        title: "El archivo forma parte del flujo completo",
        description: "No solo existe para practicar escritura o lectura por separado."
      },
      {
        title: "Una salida clara mejora la utilidad",
        description: "Un encabezado o resumen corto ayuda a que el resultado se sienta más útil."
      }
    ],
    explanation: [
      {
        title: "Cómo se ve una libreta pequeña",
        body: "Puede ser tan simple como guardar dos notas o tareas en un archivo y luego mostrarlas con una salida legible. No hace falta que sea compleja para que ya se sienta útil."
      },
      {
        title: "Qué aporta separar en funciones",
        body: "Una función puede encargarse de guardar y otra de mostrar. Así, si el programa crece, no tienes que descifrar un solo bloque enorme para entender qué hace cada paso."
      },
      {
        title: "Qué parte conviene observar",
        body: "Observa cómo el flujo principal solo dice 'guardar' y 'mostrar'. Esa lectura sencilla es una señal de que el programa está mejor organizado."
      },
      {
        title: "Qué seguimos evitando",
        body: "Seguimos evitando complejidad innecesaria. Aquí alcanza con pocas funciones, un archivo de texto y una salida clara."
      }
    ],
    example:
      "def guardar_notas():\n    with open('notas.txt', 'w') as archivo:\n        archivo.write('Comprar pan\\nPracticar Python')\n\n\ndef mostrar_notas():\n    with open('notas.txt', 'r') as archivo:\n        contenido = archivo.read()\n    print('Notas guardadas:')\n    print(contenido)\n\n\nguardar_notas()\nmostrar_notas()",
    practicePrompt: "Ejecuta el ejemplo y luego cambia las líneas guardadas. Piensa cómo se leería el programa si todo esto estuviera mezclado sin funciones separadas.",
    practiceChecklist: [
      "Separa guardar y mostrar en funciones distintas.",
      "Usa un archivo como parte de la utilidad completa.",
      "Mantén una salida simple y clara."
    ],
    commonMistakes: [
      "Abrir el archivo en el modo equivocado.",
      "Leer el archivo pero olvidar mostrar el contenido.",
      "Meter todo el flujo en una sola función sin una razón clara."
    ],
    bugChallenge: {
      prompt: "Este programa quiere guardar y mostrar notas, pero el modo de apertura y una variable hacen que la utilidad no termine de funcionar.",
      brokenCode:
        "def guardar_notas():\n    with open('notas.txt', 'r') as archivo:\n        archivo.write('Comprar pan\\nPracticar Python')\n\n\ndef mostrar_notas():\n    with open('notas.txt', 'r') as archivo:\n        contenido = archivo.read()\n    print(texto)\n\nguardar_notas()\nmostrar_notas()",
      expectedLearning: "En una utilidad más completa, revisar los modos de archivo y los nombres de variables es parte de mantener el programa confiable."
    },
    playground: {
      title: "Guarda y consulta notas",
      guidance: "Corre la utilidad y luego cambia las líneas guardadas o el encabezado. La meta es practicar una herramienta corta que ya tiene un flujo completo.",
      starterCode:
        "def guardar_notas():\n    with open('notas.txt', 'w') as archivo:\n        archivo.write('Comprar pan\\nPracticar Python')\n\n\ndef mostrar_notas():\n    with open('notas.txt', 'r') as archivo:\n        contenido = archivo.read()\n    print('Notas guardadas:')\n    print(contenido)\n\n\nguardar_notas()\nmostrar_notas()",
      emptyOutputHint: "La salida debería mostrar un encabezado y luego las notas guardadas."
    },
    exerciseSlug: "build-a-simple-note-utility"
  },
  {
    slug: "building-a-simple-data-summary",
    module: "Utilidades pequeñas y útiles",
    moduleSlug: "small-organized-utilities",
    order: 3,
    title: "Construir un resumen útil desde datos guardados",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Da un paso más y crea una utilidad que lea varias líneas guardadas, las procese en una lista y muestre un pequeño resumen final.",
    warmup: "Cuando un programa no solo guarda datos, sino que además los resume, empieza a sentirse más cercano a una herramienta de verdad.",
    goal: "Al final, deberías poder leer un archivo, convertir su contenido en una lista simple y mostrar un resumen corto y ordenado.",
    keyIdeas: [
      {
        title: "Un resumen convierte datos en información",
        description: "Contar elementos o mostrar una primera línea ya aporta valor."
      },
      {
        title: "Las listas aparecen de forma natural",
        description: "Si divides varias líneas de texto, ya puedes recorrer o contar mejor la información."
      },
      {
        title: "La organización sigue importando",
        description: "Una función puede preparar los datos y otra puede mostrarlos de forma clara."
      }
    ],
    explanation: [
      {
        title: "Qué cambia respecto de la libreta simple",
        body: "Ahora no solo vas a guardar y mostrar texto. También vas a resumirlo: por ejemplo, contar cuántas líneas hay o mostrar la primera de forma destacada."
      },
      {
        title: "Dónde entra la lista",
        body: "Si usas `splitlines()`, el contenido del archivo puede convertirse en una lista de líneas. Eso hace más fácil contar elementos o recorrerlos con un bucle pequeño."
      },
      {
        title: "Qué hace útil a este tipo de programa",
        body: "Hace útil el hecho de transformar datos guardados en algo que puedes leer rápido. Un resumen claro te da una razón práctica para haber organizado el programa."
      },
      {
        title: "Qué conviene mantener controlado",
        body: "No hace falta crear reportes grandes ni estructuras complejas. Un resumen corto y legible ya alcanza para practicar esta etapa."
      }
    ],
    example:
      "def guardar_datos():\n    with open('datos.txt', 'w') as archivo:\n        archivo.write('Agua\\nLectura\\nPython')\n\n\ndef mostrar_resumen():\n    with open('datos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total guardado:', len(lineas))\n    print('Primera línea:', lineas[0])\n\n\nguardar_datos()\nmostrar_resumen()",
    practicePrompt: "Corre el ejemplo y cambia las líneas guardadas. Observa cómo una lista simple ayuda a contar y mostrar mejor el contenido del archivo.",
    practiceChecklist: [
      "Guarda varias líneas en un archivo.",
      "Convierte el contenido en una lista con `splitlines()`.",
      "Muestra un resumen corto y útil."
    ],
    commonMistakes: [
      "Olvidar convertir el contenido en líneas antes de contarlo.",
      "Imprimir el contenido completo cuando el objetivo era resumirlo.",
      "Mezclar guardado, lectura y resumen sin una estructura clara."
    ],
    bugChallenge: {
      prompt: "Este código quiere mostrar un resumen del archivo, pero mezcla el nombre de la lista y la forma de contar.",
      brokenCode:
        "with open('datos.txt', 'w') as archivo:\n    archivo.write('Agua\\nLectura\\nPython')\n\nwith open('datos.txt', 'r') as archivo:\n    lineas = archivo.read().splitlines()\n\nprint('Total guardado:', len(linea))\nprint('Primera línea:', datos[0])",
      expectedLearning: "Cuando una utilidad ya hace varias cosas, revisar nombres consistentes y cada paso del flujo evita errores muy comunes."
    },
    playground: {
      title: "Crea un resumen desde un archivo",
      guidance: "Ejecuta el programa y luego cambia los datos guardados. La meta es sentir que ya puedes convertir texto guardado en un resumen corto y útil.",
      starterCode:
        "def guardar_datos():\n    with open('datos.txt', 'w') as archivo:\n        archivo.write('Agua\\nLectura\\nPython')\n\n\ndef mostrar_resumen():\n    with open('datos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total guardado:', len(lineas))\n    print('Primera línea:', lineas[0])\n\n\nguardar_datos()\nmostrar_resumen()",
      emptyOutputHint: "La salida debería mostrar cuántas líneas se guardaron y cuál es la primera."
    },
    exerciseSlug: "build-a-saved-data-summary"
  },
  {
    slug: "designing-a-utility-with-clear-parts",
    module: "Utilidades organizadas con flujo completo",
    moduleSlug: "fuller-organized-utilities",
    order: 1,
    title: "Diseñar una utilidad con varias partes claras",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Aprende a pensar una utilidad un poco más completa como varias partes coordinadas: guardar, consultar y resumir sin mezclarlo todo.",
    warmup: "Cuando una herramienta empieza a hacer más de una cosa, su valor crece, pero también crece la necesidad de darle un flujo claro.",
    goal: "Al final, deberías poder reconocer por qué una utilidad más completa necesita funciones con responsabilidades visibles y un recorrido fácil de seguir.",
    keyIdeas: [
      {
        title: "Una herramienta puede tener varias tareas pequeñas",
        description: "Guardar, consultar y resumir pueden convivir sin convertirse en un bloque confuso."
      },
      {
        title: "El flujo principal debería contar la historia",
        description: "Si el programa se lee de arriba hacia abajo con claridad, entenderlo y corregirlo es más fácil."
      },
      {
        title: "Cada función gana una responsabilidad clara",
        description: "Una parte puede guardar datos, otra leerlos y otra presentarlos mejor."
      }
    ],
    explanation: [
      {
        title: "Qué cambia respecto del módulo anterior",
        body: "Antes trabajaste utilidades pequeñas con un propósito bastante puntual. Ahora vamos a construir herramientas algo más completas, donde varias partes ya colaboran entre sí."
      },
      {
        title: "Cómo pensar ese crecimiento",
        body: "La clave no es meter más código por meter. La clave es que el programa haga más cosas útiles sin perder legibilidad. Por eso la organización importa todavía más."
      },
      {
        title: "Qué se vuelve visible en el flujo",
        body: "Empieza a aparecer un recorrido reconocible: guardar información, volver a leerla y mostrarla de forma mejor pensada. Ese flujo hace que el programa se sienta más real."
      },
      {
        title: "Qué conviene seguir evitando",
        body: "No hace falta usar técnicas avanzadas. Unas pocas funciones bien nombradas, un archivo de texto y una salida clara siguen siendo suficientes para esta etapa."
      }
    ],
    example:
      "def guardar_registro():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567')\n\n\ndef mostrar_agenda():\n    with open('agenda.txt', 'r') as archivo:\n        print('Agenda guardada:')\n        print(archivo.read())\n\n\ndef mostrar_total():\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total de contactos:', len(lineas))\n\n\nguardar_registro()\nmostrar_agenda()\nmostrar_total()",
    practicePrompt: "Lee el ejemplo y ubica qué función guarda, cuál consulta y cuál resume. La idea es sentir que una utilidad más completa sigue siendo legible.",
    practiceChecklist: [
      "Identifica una función para guardar.",
      "Identifica otra para mostrar datos.",
      "Ubica dónde aparece el resumen final."
    ],
    commonMistakes: [
      "Pegar todas las tareas dentro de una sola función enorme.",
      "Usar nombres vagos que no muestran qué hace cada parte.",
      "Olvidar que el flujo principal también debe leerse con claridad."
    ],
    bugChallenge: {
      prompt: "Este programa quiere guardar una agenda, mostrarla y contar contactos, pero mezcla una llamada y una variable en el resumen.",
      brokenCode:
        "def guardar_registro():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567')\n\n\ndef mostrar_agenda():\n    with open('agenda.txt', 'r') as archivo:\n        print(archivo.read())\n\n\ndef mostrar_total():\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total de contactos:', len(contactos))\n\nguardar_registros()\nmostrar_agenda()\nmostrar_total()",
      expectedLearning: "A medida que una utilidad suma partes, revisar nombres, llamadas y variables consistentes se vuelve una costumbre más importante."
    },
    playground: {
      title: "Prueba una utilidad con varias partes",
      guidance: "Ejecuta la utilidad completa y luego cambia los datos guardados o el encabezado. La meta es sentir que ya estás trabajando con una herramienta más completa, pero todavía clara.",
      starterCode:
        "def guardar_registro():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567')\n\n\ndef mostrar_agenda():\n    with open('agenda.txt', 'r') as archivo:\n        print('Agenda guardada:')\n        print(archivo.read())\n\n\ndef mostrar_total():\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total de contactos:', len(lineas))\n\n\nguardar_registro()\nmostrar_agenda()\nmostrar_total()",
      emptyOutputHint: "La salida debería mostrar la agenda guardada y luego un pequeño resumen final."
    },
    exerciseSlug: "explain-why-a-broader-utility-needs-coordination"
  },
  {
    slug: "building-a-simple-agenda-utility",
    module: "Utilidades organizadas con flujo completo",
    moduleSlug: "fuller-organized-utilities",
    order: 2,
    title: "Construir una agenda simple que guarda y consulta datos",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Arma una agenda pequeña que guarda contactos en un archivo y luego los muestra con una salida más útil y mejor organizada.",
    warmup: "Guardar datos tiene más sentido cuando después puedes consultarlos como parte de una herramienta concreta.",
    goal: "Al final, deberías poder crear una utilidad de agenda simple con funciones separadas para guardar y mostrar información.",
    keyIdeas: [
      {
        title: "Guardar y consultar ya forman una herramienta",
        description: "Cuando ambas partes conviven, el programa se siente menos efímero."
      },
      {
        title: "Una agenda pequeña sigue siendo buen entrenamiento",
        description: "No hace falta que sea compleja para practicar una estructura real."
      },
      {
        title: "La salida también importa",
        description: "Mostrar un título o separar el resultado vuelve la herramienta más usable."
      }
    ],
    explanation: [
      {
        title: "Qué hace útil a una agenda pequeña",
        body: "Hace útil el hecho de que puedes volver a leer algo que guardaste. Eso ya se parece más a una herramienta que a un ejercicio aislado."
      },
      {
        title: "Cómo repartir el trabajo",
        body: "Una función guarda contactos y otra los muestra. Ese reparto evita que el programa se convierta en un bloque largo difícil de revisar."
      },
      {
        title: "Dónde aparecen strings y listas",
        body: "Los contactos viven como texto dentro del archivo, y luego `splitlines()` ayuda a recorrer mejor lo que guardaste."
      },
      {
        title: "Qué sigue siendo sencillo",
        body: "Seguimos trabajando con texto plano y un archivo simple. El avance está en la utilidad y la organización, no en complicar la tecnología."
      }
    ],
    example:
      "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567\\nMora - 7890')\n\n\ndef mostrar_contactos():\n    with open('agenda.txt', 'r') as archivo:\n        contactos = archivo.read().splitlines()\n    print('Agenda simple:')\n    for contacto in contactos:\n        print(contacto)\n\n\nguardar_contactos()\nmostrar_contactos()",
    practicePrompt: "Corre el ejemplo y luego cambia un nombre o número. Observa cómo el archivo, la lista y el bucle trabajan juntos dentro de una herramienta concreta.",
    practiceChecklist: [
      "Guarda varios contactos en un archivo.",
      "Lee el archivo con `splitlines()`.",
      "Usa un bucle para mostrar cada línea."
    ],
    commonMistakes: [
      "Olvidar convertir el texto en líneas antes del bucle.",
      "Imprimir todo de una vez cuando el objetivo era recorrer contacto por contacto.",
      "Guardar datos pero no mostrar un título o contexto claro."
    ],
    bugChallenge: {
      prompt: "Este código quiere mostrar una agenda simple, pero el nombre de la lista y el bucle no coinciden.",
      brokenCode:
        "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567\\nMora - 7890')\n\n\ndef mostrar_contactos():\n    with open('agenda.txt', 'r') as archivo:\n        contactos = archivo.read().splitlines()\n    print('Agenda simple:')\n    for contacto in agenda:\n        print(contacto)\n\nguardar_contactos()\nmostrar_contactos()",
      expectedLearning: "Cuando una herramienta coordina varias partes, revisar qué variable prepara cada paso evita errores muy comunes."
    },
    playground: {
      title: "Ejecuta la agenda simple",
      guidance: "Corre la agenda y luego cambia un contacto o agrega otro. La meta es practicar una herramienta pequeña que ya guarda, lee y recorre información.",
      starterCode:
        "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567\\nMora - 7890')\n\n\ndef mostrar_contactos():\n    with open('agenda.txt', 'r') as archivo:\n        contactos = archivo.read().splitlines()\n    print('Agenda simple:')\n    for contacto in contactos:\n        print(contacto)\n\n\nguardar_contactos()\nmostrar_contactos()",
      emptyOutputHint: "La salida debería mostrar el título de la agenda y luego los contactos guardados."
    },
    exerciseSlug: "build-a-simple-agenda-tool"
  },
  {
    slug: "coordinating-menu-file-and-summary",
    module: "Utilidades organizadas con flujo completo",
    moduleSlug: "fuller-organized-utilities",
    order: 3,
    title: "Coordinar menú, archivo y resumen en una herramienta pequeña",
    duration: "19 min",
    difficulty: "Beginner",
    summary: "Aprende a coordinar varias funciones dentro de una herramienta más completa que guarda datos y luego muestra un resumen útil según una opción simple.",
    warmup: "El siguiente paso natural es que el programa ya no solo haga una acción: empieza a decidir qué mostrar según una opción simple.",
    goal: "Al final, deberías poder entender y construir una herramienta pequeña con una opción simple, lectura de archivo y un resumen final claro.",
    keyIdeas: [
      {
        title: "Un menú simple ordena el flujo",
        description: "Permite decidir qué parte del programa correr sin volverlo avanzado."
      },
      {
        title: "Las funciones coordinan tareas distintas",
        description: "Una prepara datos, otra los muestra y otra resume."
      },
      {
        title: "El resultado final debería aportar claridad",
        description: "Un resumen corto ayuda a que la herramienta se sienta más útil y terminada."
      }
    ],
    explanation: [
      {
        title: "Por qué aparece un menú simple",
        body: "Porque ahora el programa ya puede tener más de un camino pequeño. No hace falta un menú complejo; una opción simple ya sirve para practicar coordinación."
      },
      {
        title: "Qué papel sigue teniendo el archivo",
        body: "El archivo sigue guardando los datos. La diferencia es que ahora el programa puede decidir si mostrarlos completos o si enseñar primero un pequeño resumen."
      },
      {
        title: "Cómo mantenerlo principiante",
        body: "La opción puede estar en una variable o venir de una entrada simple. Lo importante es entender el flujo, no complicarlo."
      },
      {
        title: "Qué sensación debería dejar",
        body: "Debería sentirse como una herramienta pequeña pero más completa, donde varias partes trabajan juntas y el resultado final tiene más intención."
      }
    ],
    example:
      "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer\\nAgua\\nPython')\n\n\ndef mostrar_habitos():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Hábitos guardados:')\n    for linea in lineas:\n        print(linea)\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total:', len(lineas))\n\n\nguardar_habitos()\nopcion = 'resumen'\nif opcion == 'ver':\n    mostrar_habitos()\nelse:\n    mostrar_resumen()",
    practicePrompt: "Corre el programa y cambia la opción entre `ver` y `resumen`. Observa cómo el mismo archivo puede alimentar dos salidas distintas según el flujo.",
    practiceChecklist: [
      "Guarda datos en un archivo.",
      "Usa una opción simple para decidir qué mostrar.",
      "Mantén funciones separadas para mostrar y resumir."
    ],
    commonMistakes: [
      "Mezclar las dos salidas dentro de una sola función.",
      "Usar una opción que no coincide con la condición.",
      "Olvidar que el resumen también necesita leer el archivo."
    ],
    bugChallenge: {
      prompt: "Este programa quiere decidir entre mostrar una lista o un resumen, pero una opción y una llamada no coinciden.",
      brokenCode:
        "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer\\nAgua\\nPython')\n\n\ndef mostrar_habitos():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        print(linea)\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total:', len(lineas))\n\nguardar_habitos()\nopcion = 'resumen'\nif opcion == 'ver':\n    mostrar_habito()\nelse:\n    mostrar_resumen()",
      expectedLearning: "Cuando varias funciones se coordinan, revisar el flujo y las llamadas exactas se vuelve tan importante como revisar la sintaxis."
    },
    playground: {
      title: "Prueba una herramienta con flujo más completo",
      guidance: "Ejecuta el programa, cambia la opción entre `ver` y `resumen` y luego modifica los hábitos guardados. La meta es notar cómo varias funciones coordinadas ya forman una herramienta más amplia.",
      starterCode:
        "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer\\nAgua\\nPython')\n\n\ndef mostrar_habitos():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Hábitos guardados:')\n    for linea in lineas:\n        print(linea)\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total:', len(lineas))\n\n\nguardar_habitos()\nopcion = 'resumen'\nif opcion == 'ver':\n    mostrar_habitos()\nelse:\n    mostrar_resumen()",
      emptyOutputHint: "La salida debería mostrar o la lista de hábitos o un resumen, según la opción elegida."
    },
    exerciseSlug: "build-a-menu-summary-tool"
  },
  {
    slug: "consulting-saved-data-with-clear-functions",
    module: "Consulta y actualización simple de datos",
    moduleSlug: "simple-data-consultation-and-updates",
    order: 1,
    title: "Consultar datos guardados con funciones claras",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Da el siguiente paso práctico: aprende a buscar y mostrar un dato guardado sin volver el programa confuso.",
    warmup: "Una herramienta se siente más útil cuando puede responder una pregunta simple sobre la información que ya guardaste.",
    goal: "Al final, deberías poder entender cómo una función puede consultar datos guardados y otra mostrar el resultado con claridad.",
    keyIdeas: [
      {
        title: "Consultar es distinto de guardar",
        description: "Cuando una utilidad busca o revisa datos, el flujo del programa gana una intención más clara."
      },
      {
        title: "Las funciones ayudan a separar búsqueda y presentación",
        description: "Una puede leer y preparar los datos; otra puede mostrar el resultado."
      },
      {
        title: "La utilidad empieza a sentirse interactiva",
        description: "Aunque siga siendo simple, ya no solo guarda y muestra siempre lo mismo."
      }
    ],
    explanation: [
      {
        title: "Qué cambia en esta etapa",
        body: "Hasta aquí tus utilidades guardaban información, la leían y la mostraban. Ahora aparece algo nuevo: consultar un dato concreto dentro de lo que ya está guardado."
      },
      {
        title: "Qué significa consultar con claridad",
        body: "Significa que el programa puede revisar una lista simple de datos, encontrar algo útil y enseñarlo sin mezclar toda la lógica en un solo bloque."
      },
      {
        title: "Por qué sigue siendo principiante",
        body: "Porque seguimos trabajando con texto plano, listas simples y funciones cortas. La novedad está en el flujo del programa, no en usar técnicas avanzadas."
      },
      {
        title: "Qué sensación debería dejar",
        body: "Debería dejar la sensación de que la herramienta ya responde a una necesidad concreta: revisar información guardada y devolver algo útil."
      }
    ],
    example:
      "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMora: activo')\n\n\ndef consultar_estado(nombre):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Estado encontrado:', linea)\n\n\nguardar_estados()\nconsultar_estado('Luis')",
    practicePrompt: "Corre el ejemplo y luego cambia el nombre consultado. Lo importante es ver cómo la utilidad ya puede responder algo concreto a partir de datos guardados.",
    practiceChecklist: [
      "Guarda varias líneas en un archivo.",
      "Lee el archivo como lista de líneas.",
      "Usa una función para consultar un dato específico."
    ],
    commonMistakes: [
      "Leer los datos, pero no separar consulta y presentación.",
      "Buscar sin revisar bien el formato del texto guardado.",
      "Intentar hacer toda la lógica dentro del flujo principal."
    ],
    bugChallenge: {
      prompt: "Este programa quiere consultar un estado guardado, pero el nombre de la lista y la llamada no coinciden del todo.",
      brokenCode:
        "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMora: activo')\n\n\ndef consultar_estado(nombre):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in estados:\n        if linea.startswith(nombre + ':'):\n            print('Estado encontrado:', linea)\n\nguardar_estado()\nconsultar_estado('Luis')",
      expectedLearning: "Cuando una utilidad consulta datos, revisar con cuidado nombres de variables y llamadas sigue siendo parte clave del trabajo."
    },
    playground: {
      title: "Prueba una consulta simple",
      guidance: "Ejecuta el programa y luego cambia el nombre consultado o los estados guardados. La meta es sentir que la utilidad ya puede responder una pregunta concreta.",
      starterCode:
        "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMora: activo')\n\n\ndef consultar_estado(nombre):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Estado encontrado:', linea)\n\n\nguardar_estados()\nconsultar_estado('Luis')",
      emptyOutputHint: "La salida debería mostrar el estado encontrado para el nombre consultado."
    },
    exerciseSlug: "explain-why-consulting-data-needs-clear-flow"
  },
  {
    slug: "updating-a-saved-value-calmly",
    module: "Consulta y actualización simple de datos",
    moduleSlug: "simple-data-consultation-and-updates",
    order: 2,
    title: "Actualizar un dato guardado con calma",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Aprende a cambiar un valor ya guardado y volver a mostrarlo con una utilidad pequeña y legible.",
    warmup: "Una herramienta se vuelve más útil cuando no solo consulta información, sino que también puede cambiarla.",
    goal: "Al final, deberías poder construir un programa que lea datos guardados, actualice uno de ellos y vuelva a escribir el resultado de forma clara.",
    keyIdeas: [
      {
        title: "Actualizar es reescribir con intención",
        description: "Muchas veces la forma simple de cambiar un dato es leer, ajustar y volver a guardar."
      },
      {
        title: "La organización evita perder el hilo",
        description: "Una función puede preparar el cambio y otra mostrar el resultado final."
      },
      {
        title: "La utilidad ya empieza a sentirse más viva",
        description: "No solo revisa datos: ahora los modifica de una manera visible."
      }
    ],
    explanation: [
      {
        title: "Cómo pensar una actualización simple",
        body: "En este nivel no hace falta buscar técnicas complejas. Puedes leer el archivo como una lista de líneas, cambiar la línea que te importa y volver a escribir todo de forma ordenada."
      },
      {
        title: "Por qué esto es útil",
        body: "Porque muchas herramientas pequeñas reales hacen exactamente eso: toman un registro simple, cambian un estado o un valor y luego muestran el resultado actualizado."
      },
      {
        title: "Qué conviene cuidar",
        body: "Conviene cuidar el formato del texto y mantener funciones cortas. Si el programa se entiende, también se vuelve más fácil detectar en qué parte se hace el cambio."
      },
      {
        title: "Qué sigue sin hacer falta",
        body: "Todavía no necesitas bases de datos ni estructuras avanzadas. Un archivo de texto, una lista de líneas y funciones claras alcanzan bien para este paso."
      }
    ],
    example:
      "def guardar_tareas():\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nPython: pendiente')\n\n\ndef actualizar_estado():\n    with open('tareas.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('Python:'):\n            nuevas_lineas.append('Python: hecho')\n        else:\n            nuevas_lineas.append(linea)\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_tareas():\n    with open('tareas.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_tareas()\nactualizar_estado()\nmostrar_tareas()",
    practicePrompt: "Ejecuta el programa y luego cambia qué tarea se actualiza o qué valor final se escribe. La idea es ver el ciclo completo: leer, cambiar y volver a mostrar.",
    practiceChecklist: [
      "Lee las líneas guardadas.",
      "Cambia una línea específica.",
      "Vuelve a escribir el archivo y muestra el resultado."
    ],
    commonMistakes: [
      "Cambiar el valor en memoria pero olvidar volver a escribir el archivo.",
      "Perder líneas anteriores al rehacer el contenido.",
      "Mezclar lectura, cambio y salida en una sola parte difícil de seguir."
    ],
    bugChallenge: {
      prompt: "Este programa quiere cambiar un estado guardado, pero el nombre de la lista final y la reescritura del archivo no coinciden.",
      brokenCode:
        "def guardar_tareas():\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nPython: pendiente')\n\n\ndef actualizar_estado():\n    with open('tareas.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('Python:'):\n            nuevas_lineas.append('Python: hecho')\n        else:\n            nuevas_lineas.append(linea)\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('\\n'.join(actualizadas))",
      expectedLearning: "Actualizar datos simples exige revisar con cuidado qué lista realmente vas a volver a guardar."
    },
    playground: {
      title: "Actualiza un valor guardado",
      guidance: "Ejecuta el programa y luego cambia la tarea o el estado final. La meta es practicar una actualización simple y visible dentro de una utilidad ordenada.",
      starterCode:
        "def guardar_tareas():\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nPython: pendiente')\n\n\ndef actualizar_estado():\n    with open('tareas.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('Python:'):\n            nuevas_lineas.append('Python: hecho')\n        else:\n            nuevas_lineas.append(linea)\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_tareas():\n    with open('tareas.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_tareas()\nactualizar_estado()\nmostrar_tareas()",
      emptyOutputHint: "La salida debería mostrar el contenido actualizado del archivo."
    },
    exerciseSlug: "build-a-simple-update-tool"
  },
  {
    slug: "coordinating-consultation-update-and-display",
    module: "Consulta y actualización simple de datos",
    moduleSlug: "simple-data-consultation-and-updates",
    order: 3,
    title: "Coordinar consulta, actualización y salida final",
    duration: "19 min",
    difficulty: "Beginner",
    summary: "Junta consulta, cambio y resultado final dentro de una herramienta pequeña con flujo más útil y mejor coordinado.",
    warmup: "Una herramienta ya empieza a sentirse de verdad cuando puede revisar información, cambiarla y luego mostrar el estado nuevo.",
    goal: "Al final, deberías poder entender un flujo simple donde una opción decide consultar o actualizar datos guardados y mostrar el resultado final.",
    keyIdeas: [
      {
        title: "Consultar y actualizar pueden convivir en la misma utilidad",
        description: "Con una coordinación simple, el programa gana utilidad sin volverse complejo."
      },
      {
        title: "El flujo principal debería seguir siendo legible",
        description: "Aunque haga más cosas, el programa todavía debe leerse con calma."
      },
      {
        title: "La salida final confirma el cambio",
        description: "Mostrar el resultado actualizado da una sensación más completa de herramienta útil."
      }
    ],
    explanation: [
      {
        title: "Qué estás practicando ahora",
        body: "Ahora el programa ya no solo guarda o resume. Puede decidir entre consultar un dato o actualizarlo y luego mostrar el resultado final."
      },
      {
        title: "Cómo mantener esto principiante",
        body: "Lo mantenemos simple con una opción corta, funciones bien separadas y texto plano. La idea es coordinar mejor, no añadir complejidad técnica."
      },
      {
        title: "Qué aporta esta coordinación",
        body: "Aporta una sensación más real de herramienta. La utilidad ya tiene un flujo pequeño: prepara datos, decide qué hacer y entrega una salida que confirma el estado actual."
      },
      {
        title: "Qué hábito fortalece",
        body: "Fortalece el hábito de pensar funciones por responsabilidad: una consulta, una actualización y una presentación final."
      }
    ],
    example:
      "def guardar_registro():\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar_registro(nombre):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registro()\nopcion = 'actualizar'\nif opcion == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\n    consultar_registro('Luis')",
    practicePrompt: "Ejecuta el ejemplo y cambia la opción entre `consultar` y `actualizar`. Observa cómo el programa ya puede responder y también cambiar información guardada.",
    practiceChecklist: [
      "Guarda datos simples en un archivo.",
      "Usa una opción para decidir el flujo.",
      "Consulta o actualiza y luego muestra el resultado."
    ],
    commonMistakes: [
      "Actualizar un dato pero no volver a consultarlo para confirmar el cambio.",
      "Escribir el nuevo valor sin mantener el mismo formato del texto.",
      "Mezclar consulta y actualización dentro de una sola función."
    ],
    bugChallenge: {
      prompt: "Este programa quiere decidir entre consultar y actualizar un registro, pero una opción y un valor final no terminan de coincidir.",
      brokenCode:
        "def guardar_registro():\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar_registro(nombre):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estdo)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\nguardar_registro()\nopcion = 'consultar'\nif opcion == 'actualizar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')",
      expectedLearning: "Cuando una utilidad decide entre consultar y actualizar, revisar con cuidado la lógica del flujo importa tanto como revisar los nombres."
    },
    playground: {
      title: "Prueba una utilidad que consulta y actualiza",
      guidance: "Ejecuta el programa, cambia la opción y luego cambia el estado final. La meta es sentir que la herramienta ya responde y modifica información de forma muy concreta.",
      starterCode:
        "def guardar_registro():\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar_registro(nombre):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registro()\nopcion = 'actualizar'\nif opcion == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\n    consultar_registro('Luis')",
      emptyOutputHint: "La salida debería mostrar la consulta final del registro después del flujo elegido."
    },
    exerciseSlug: "build-a-consult-and-update-tool"
  },
  {
    slug: "using-input-to-choose-a-useful-action",
    module: "Herramientas con entradas y cambios simples",
    moduleSlug: "input-driven-data-tools",
    order: 1,
    title: "Usar input() para elegir una acción útil",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Aprende a usar `input()` para que una herramienta pequeña decida qué hacer según una elección simple de la persona usuaria.",
    warmup: "Una herramienta se siente más real cuando no sigue siempre el mismo camino. Preguntar qué hacer es una forma simple y útil de volverla más interactiva.",
    goal: "Al final, deberías poder usar `input()` para elegir una acción clara dentro de una utilidad pequeña y mantener el flujo ordenado.",
    keyIdeas: [
      {
        title: "La entrada puede decidir el recorrido",
        description: "Un `input()` simple puede ayudarte a consultar, actualizar o mostrar datos según lo que la persona elija."
      },
      {
        title: "Las opciones visibles reducen la confusión",
        description: "Si el programa muestra qué puede hacer, es mucho más fácil leer y usar el flujo."
      },
      {
        title: "La lógica sigue necesitando claridad",
        description: "Aunque aparezca una elección del usuario, conviene separar bien preguntar, decidir y mostrar el resultado."
      }
    ],
    explanation: [
      {
        title: "Qué cambia cuando `input()` decide una acción",
        body: "Hasta ahora ya consultaste y actualizaste datos guardados, pero muchas veces la decisión estaba escrita dentro del programa. En esta lección, la herramienta empieza a preguntarle a la persona qué camino quiere usar."
      },
      {
        title: "Por qué eso hace que la herramienta se sienta más real",
        body: "Porque ya no es solo un programa que hace siempre lo mismo. Ahora recibe una elección, reacciona a ella y muestra un resultado más conectado con lo que la persona pidió."
      },
      {
        title: "Cómo mantenerlo beginner-safe",
        body: "Empieza con dos opciones claras, como `consultar` o `actualizar`. Después, conecta esa respuesta con un `if` sencillo. No hace falta hacer un menú complejo para que la experiencia ya se sienta más útil."
      },
      {
        title: "Qué hábito importa aquí",
        body: "Mostrar las opciones primero y leer la respuesta después. Esa pequeña secuencia hace que el flujo se entienda mejor y que depurar sea mucho más fácil si algo no sale como esperabas."
      }
    ],
    example:
      "print('1. Consultar')\nprint('2. Actualizar')\nopcion = input('Elige una acción: ')\n\nif opcion == '1':\n    print('Mostrando consulta...')\nelse:\n    print('Preparando actualización...')",
    practicePrompt: "Prueba cambiar los mensajes o la condición, pero mantén visible que `input()` decide qué camino sigue la herramienta.",
    practiceChecklist: [
      "Muestra opciones antes de pedir la respuesta.",
      "Usa `input()` para guardar una elección.",
      "Conecta esa elección con un `if` o `else` claro."
    ],
    commonMistakes: [
      "Pedir la opción sin mostrar antes qué significa cada respuesta.",
      "Comparar con un valor distinto al que realmente podría escribir la persona.",
      "Mezclar demasiadas decisiones antes de que funcione la primera versión."
    ],
    bugChallenge: {
      prompt: "Este programa debería pedir una opción y decidir qué hacer, pero una comparación mal escrita y una salida poco clara rompen el flujo.",
      brokenCode:
        "print('1. Consultar')\nprint('2. Actualizar')\nopcion = input('Elige una acción: ')\n\nif opcion = '1':\n    print('Mostrando consulta...')\nelse:\n    print('Preparando actualización...')",
      expectedLearning: "Cuando `input()` entra en juego, conviene revisar primero qué se guarda, con qué se compara y qué mensaje final se muestra."
    },
    playground: {
      title: "Haz que la herramienta pregunte qué hacer",
      guidance: "Ejecuta el código, elige una opción y luego cambia los mensajes o las rutas. La meta es sentir que el programa ya responde a una elección real.",
      starterCode:
        "print('1. Consultar')\nprint('2. Actualizar')\nopcion = input('Elige una acción: ')\n\nif opcion == '1':\n    print('Mostrando consulta...')\nelse:\n    print('Preparando actualización...')",
      emptyOutputHint: "La salida debería cambiar según la opción elegida en `input()`."
    },
    exerciseSlug: "explain-why-input-makes-a-tool-more-useful"
  },
  {
    slug: "asking-for-data-to-update-a-record",
    module: "Herramientas con entradas y cambios simples",
    moduleSlug: "input-driven-data-tools",
    order: 2,
    title: "Pedir datos para actualizar un registro",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Construye una utilidad que pregunta qué dato modificar y luego reescribe la información guardada con un valor nuevo.",
    warmup: "Una herramienta mejora mucho cuando no actualiza siempre lo mismo, sino que puede pedir un dato concreto y actuar con esa respuesta.",
    goal: "Al final, deberías poder pedir un valor con `input()`, usarlo dentro de una función de actualización y mostrar el resultado final con claridad.",
    keyIdeas: [
      {
        title: "La entrada puede definir qué cambia",
        description: "El programa puede pedir un nombre, estado o categoría para decidir qué parte modificar."
      },
      {
        title: "Actualizar sigue siendo un flujo por pasos",
        description: "Primero pides un dato, luego buscas, después reescribes y al final confirmas."
      },
      {
        title: "Separar funciones sigue ayudando",
        description: "Una función puede guardar datos, otra actualizar y otra mostrar el resultado."
      }
    ],
    explanation: [
      {
        title: "Qué hace esta utilidad",
        body: "Este tipo de herramienta pide un dato corto, como el nombre de un registro o un nuevo estado, y lo usa para modificar información guardada. Eso ya la acerca mucho más a una utilidad real."
      },
      {
        title: "Por qué conviene dividir el trabajo",
        body: "Si una función guarda el archivo, otra actualiza y otra muestra el resultado, te resulta más fácil revisar el programa sin perderte en una sola pared de código."
      },
      {
        title: "Qué mantiene la experiencia simple",
        body: "Trabajar con uno o dos registros y con valores cortos. No necesitas hacer un sistema completo: solo un flujo claro donde la entrada cambia algo útil."
      },
      {
        title: "Qué revisar si se rompe",
        body: "Comprueba si el dato pedido con `input()` coincide con la línea que buscas, si reescribes el archivo completo y si luego imprimes el resultado actualizado."
      }
    ],
    example:
      "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Python: pendiente\\nLectura: pendiente')\n\n\ndef actualizar_estado(nombre, nuevo_estado):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_estados()\nactualizar_estado('Python', 'hecho')",
    practicePrompt: "Piensa qué dato te conviene pedir con `input()`: el nombre que se va a cambiar, el nuevo estado o ambos. Lo importante es que el flujo siga siendo claro.",
    practiceChecklist: [
      "Pide al menos un dato con `input()`.",
      "Usa ese dato dentro de la actualización.",
      "Reescribe el archivo con el nuevo contenido.",
      "Muestra el resultado actualizado al final."
    ],
    commonMistakes: [
      "Pedir un dato con `input()` y después no usarlo en ninguna parte del flujo.",
      "Actualizar una línea fija en lugar de la que la persona eligió.",
      "Reescribir el archivo, pero olvidar mostrar el resultado final."
    ],
    bugChallenge: {
      prompt: "Esta herramienta debería pedir un nombre y usarlo para actualizar un estado, pero un detalle de comparación y una escritura final dejan el flujo incompleto.",
      brokenCode:
        "def actualizar_estado(nombre, nuevo_estado):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('nombre' + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)",
      expectedLearning: "Cuando `input()` define qué debe cambiar, conviene revisar si el programa usa la variable real y si el flujo termina reescribiendo el archivo."
    },
    playground: {
      title: "Prueba una actualización guiada por input()",
      guidance: "Ejecuta el código y responde la ventana del navegador. Luego cambia el nombre o el nuevo estado para ver cómo el programa actualiza otra línea.",
      starterCode:
        "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Python: pendiente\\nLectura: pendiente')\n\n\ndef actualizar_estado(nombre, nuevo_estado):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_estados():\n    with open('estados.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_estados()\nnombre = input('¿Qué registro quieres actualizar? ')\nnuevo_estado = input('¿Cuál será el nuevo estado? ')\nactualizar_estado(nombre, nuevo_estado)\nmostrar_estados()",
      emptyOutputHint: "La salida debería mostrar el archivo ya actualizado con los datos que ingresaste."
    },
    exerciseSlug: "build-an-input-driven-update-tool"
  },
  {
    slug: "coordinating-input-search-update-and-display",
    module: "Herramientas con entradas y cambios simples",
    moduleSlug: "input-driven-data-tools",
    order: 3,
    title: "Coordinar input, búsqueda, cambio y resultado",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Une elección del usuario, consulta, actualización y salida final dentro de una herramienta pequeña más interactiva y ordenada.",
    warmup: "Cuando una herramienta pregunta, busca, cambia y vuelve a mostrar, empieza a sentirse mucho más cercana a una utilidad real de todos los días.",
    goal: "Al final, deberías poder coordinar un flujo pequeño donde `input()` define una búsqueda o un cambio, y el programa muestra un resultado final claro.",
    keyIdeas: [
      {
        title: "La coordinación importa más que la cantidad de código",
        description: "Lo importante es que cada parte ocurra en el orden correcto: pedir, decidir, buscar o cambiar, y mostrar."
      },
      {
        title: "Una herramienta pequeña puede tener varias responsabilidades claras",
        description: "Puedes usar funciones separadas para buscar, actualizar y presentar el resultado final."
      },
      {
        title: "El flujo se vuelve más útil cuando responde a elecciones reales",
        description: "La persona usuaria deja de ver una demo fija y empieza a sentir que la herramienta actúa según lo que escribió."
      }
    ],
    explanation: [
      {
        title: "Qué construyes en esta lección",
        body: "Una herramienta pequeña que pide una acción, consulta o actualiza un dato guardado y luego muestra el resultado. Es una versión más conectada de lo que venías trabajando en Ruta 2."
      },
      {
        title: "Qué vuelve más interesante este paso",
        body: "Que ya no trabajas solo con un camino fijo. Ahora una respuesta de la persona cambia el recorrido del programa, pero el código sigue siendo entendible porque cada parte tiene una tarea concreta."
      },
      {
        title: "Cómo no perder el control",
        body: "Empieza por guardar los datos base, después pide la acción y el dato necesario, y por último llama la función correcta. Ese orden hace que la herramienta se mantenga tranquila y legible."
      },
      {
        title: "Qué demuestra este bloque",
        body: "Demuestra que ya puedes construir herramientas pequeñas que no solo guardan o cambian datos, sino que también reaccionan a una persona y reorganizan el flujo en función de lo que pide."
      }
    ],
    example:
      "def guardar_registros():\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar(nombre):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar(nombre, nuevo_estado):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registros()\naction = 'actualizar'\nif action == 'consultar':\n    consultar('Luis')\nelse:\n    actualizar('Luis', 'activo')\n    consultar('Luis')",
    practicePrompt: "Cambia la acción, el nombre del registro o el estado final. Lo importante es conservar un flujo completo y ordenado: pedir, decidir, cambiar y mostrar.",
    practiceChecklist: [
      "Guarda los datos base en un archivo.",
      "Pide o define una acción clara.",
      "Coordina consulta o actualización según esa acción.",
      "Muestra un resultado final útil."
    ],
    commonMistakes: [
      "Pedir demasiados datos a la vez y volver confuso el recorrido.",
      "Actualizar el archivo pero no consultar de nuevo para confirmar el resultado.",
      "Mezclar la lógica principal dentro de una sola función y perder claridad."
    ],
    bugChallenge: {
      prompt: "Esta herramienta debería pedir una acción y coordinar consulta o actualización, pero una variable y un llamado final no mantienen el flujo completo.",
      brokenCode:
        "guardar_registros()\naction = input('Elige una acción: ')\nif opcion == 'consultar':\n    consultar('Luis')\nelse:\n    actualizar('Luis', 'activo')",
      expectedLearning: "Cuando el flujo depende de `input()`, revisa si la variable correcta decide el camino y si el programa confirma el resultado al final."
    },
    playground: {
      title: "Coordina una herramienta más interactiva",
      guidance: "Ejecuta el programa, responde la opción y mira cómo la herramienta consulta o actualiza antes de mostrar el resultado final.",
      starterCode:
        "def guardar_registros():\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar(nombre):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar(nombre, nuevo_estado):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar('Luis')\nelse:\n    actualizar('Luis', 'activo')\n    consultar('Luis')",
      emptyOutputHint: "La salida debería mostrar una consulta o una actualización seguida de un resultado final visible."
    },
    exerciseSlug: "build-an-input-driven-search-and-update-tool"
  },
  {
    slug: "route2-project-simple-agenda",
    module: "Proyectos prácticos de Ruta 2",
    moduleSlug: "route2-practical-projects",
    order: 1,
    title: "Proyecto práctico: agenda simple con consulta y actualización",
    duration: "24 min",
    difficulty: "Beginner",
    summary: "Construye una agenda corta que guarda contactos simples, permite consultar uno y actualizar un dato con un flujo ordenado.",
    warmup: "Ya sabes guardar, consultar y actualizar. Ahora toca juntar esas piezas en una herramienta pequeña que se sienta más cercana a un uso real.",
    goal: "Al final, deberías poder construir una agenda simple que use archivo, funciones, consulta y actualización dentro de un programa más completo.",
    keyIdeas: [
      {
        title: "Un proyecto práctico une varias piezas conocidas",
        description: "Aquí no aparece una idea totalmente nueva. Lo importante es coordinar bien todo lo que ya sabes."
      },
      {
        title: "Cada función necesita una responsabilidad clara",
        description: "Una puede guardar contactos, otra consultarlos y otra actualizar un dato concreto."
      },
      {
        title: "La utilidad mejora cuando el flujo se entiende",
        description: "La persona debería poder seguir con claridad qué se guarda, qué se consulta y qué se cambia."
      }
    ],
    explanation: [
      {
        title: "Brief del proyecto",
        body: "Vas a construir una agenda muy pequeña con un par de contactos guardados en texto. La herramienta debe poder mostrar un contacto y actualizar un dato corto, por ejemplo ciudad o estado."
      },
      {
        title: "Requisitos mínimos",
        body: "Debe haber una función que prepare el archivo base, una función de consulta, una función de actualización y una salida final comprensible. El proyecto puede ser corto, pero debe sentirse ordenado."
      },
      {
        title: "Qué vuelve útil a esta agenda",
        body: "Que ya no solo guarda cosas: también deja revisar y modificar información sin rehacer todo el programa. Eso cambia mucho la sensación de utilidad."
      },
      {
        title: "Cómo mantenerlo amable",
        body: "Trabaja con pocos contactos y con datos de texto simples. La meta no es hacer una agenda completa, sino una versión pequeña, clara y funcional."
      }
    ],
    example:
      "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana: Córdoba\\nLuis: Rosario')\n\n\ndef consultar_contacto(nombre):\n    with open('agenda.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Contacto:', linea)\n\n\ndef actualizar_contacto(nombre, nueva_ciudad):\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nueva_ciudad)\n        else:\n            nuevas_lineas.append(linea)\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))",
    practicePrompt: "Piensa qué dato quieres actualizar y cómo dejarías visible el resultado final. Lo importante es que el recorrido se sienta ordenado.",
    practiceChecklist: [
      "Prepara un archivo con al menos dos contactos.",
      "Agrega una función para consultar.",
      "Agrega una función para actualizar.",
      "Muestra el resultado final después del cambio."
    ],
    commonMistakes: [
      "Intentar resolver toda la agenda dentro de una sola función.",
      "Actualizar un contacto pero no volver a mostrar el resultado final.",
      "Cambiar el formato del archivo y luego dificultar la consulta."
    ],
    bugChallenge: {
      prompt: "Esta agenda debería consultar y actualizar un contacto, pero una clave de búsqueda y una escritura final no dejan el flujo completo.",
      brokenCode:
        "def consultar_contacto(nombre):\n    with open('agenda.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith('nombre' + ':'):\n                print('Contacto:', linea)\n\n\ndef actualizar_contacto(nombre, nueva_ciudad):\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nueva_ciudad)",
      expectedLearning: "En proyectos un poco más completos, conviene revisar si realmente usas el dato pedido y si el flujo reescribe y muestra el resultado final."
    },
    playground: {
      title: "Explora una agenda simple",
      guidance: "Ejecuta el proyecto, cambia nombres o ciudades y comprueba que consulta y actualización sigan siendo claras.",
      starterCode:
        "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana: Córdoba\\nLuis: Rosario')\n\n\ndef consultar_contacto(nombre):\n    with open('agenda.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Contacto:', linea)\n\n\ndef actualizar_contacto(nombre, nueva_ciudad):\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nueva_ciudad)\n        else:\n            nuevas_lineas.append(linea)\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_contactos()\nconsultar_contacto('Ana')\nactualizar_contacto('Luis', 'Mendoza')\nconsultar_contacto('Luis')",
      emptyOutputHint: "La salida debería mostrar una consulta inicial y otra después de la actualización."
    },
    exerciseSlug: "build-route2-simple-agenda-project"
  },
  {
    slug: "route2-project-notebook-menu-and-summary",
    module: "Proyectos prácticos de Ruta 2",
    moduleSlug: "route2-practical-projects",
    order: 2,
    title: "Proyecto práctico: libreta con menú y resumen",
    duration: "25 min",
    difficulty: "Beginner",
    summary: "Construye una libreta pequeña con menú simple, varias funciones y un resumen final que muestre el estado de los datos guardados.",
    warmup: "Una herramienta empieza a sentirse mucho más completa cuando no solo hace una cosa, sino que deja elegir una acción y cierra con un pequeño reporte.",
    goal: "Al final, deberías poder construir una libreta con menú que guarda, consulta, actualiza y resume información simple de forma ordenada.",
    keyIdeas: [
      {
        title: "El menú organiza la experiencia",
        description: "Muestra qué puede hacer la herramienta y da un punto de entrada claro."
      },
      {
        title: "El resumen final muestra que el flujo está completo",
        description: "No basta con cambiar algo: también conviene cerrar con una salida útil y legible."
      },
      {
        title: "Coordinar varias funciones ya es una habilidad práctica",
        description: "Guardar, consultar, actualizar y resumir son tareas distintas que deben trabajar juntas."
      }
    ],
    explanation: [
      {
        title: "Brief del proyecto",
        body: "Vas a crear una libreta pequeña de hábitos o notas. Debe mostrar un menú corto, dejar elegir una acción y terminar con un resumen visible del estado final de la información."
      },
      {
        title: "Requisitos mínimos",
        body: "Necesitas un archivo base, una función para consultar, otra para actualizar y una función que muestre un resumen final. El menú puede ser simple, pero debe quedar claro."
      },
      {
        title: "Qué vuelve más real a esta herramienta",
        body: "Que coordina varias partes: decisión, cambio y lectura final. Eso ya se parece mucho más a una utilidad pequeña que alguien podría querer usar."
      },
      {
        title: "Cómo no volverlo pesado",
        body: "Mantén pocas opciones y datos breves. Si el flujo es claro, el proyecto ya cumple su objetivo sin necesidad de crecer demasiado."
      }
    ],
    example:
      "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nCaminar: hecho')\n\n\ndef mostrar_menu():\n    print('1. Consultar hábitos')\n    print('2. Actualizar hábito')\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        print('Resumen final:')\n        print(archivo.read())",
    practicePrompt: "Piensa qué acción te conviene mostrar en el menú y cómo quieres que se vea el cierre. La meta es que la libreta se sienta ordenada y útil.",
    practiceChecklist: [
      "Muestra un menú con dos acciones visibles.",
      "Usa funciones separadas para cada parte importante.",
      "Consulta o actualiza según una elección.",
      "Cierra con un resumen final legible."
    ],
    commonMistakes: [
      "Mostrar un menú, pero no conectar la opción con ninguna acción real.",
      "Actualizar datos y olvidar el resumen final.",
      "Meter toda la lógica del proyecto en el flujo principal."
    ],
    bugChallenge: {
      prompt: "Esta libreta debería decidir entre consultar y actualizar, pero una opción mal comparada y un resumen ausente dejan la experiencia incompleta.",
      brokenCode:
        "def mostrar_menu():\n    print('1. Consultar hábitos')\n    print('2. Actualizar hábito')\n\naction = input('Elige una acción: ')\nif action == 'consultar':\n    print('Consulta lista')\nelse:\n    print('Actualización lista')",
      expectedLearning: "Cuando una herramienta crece, ya no basta con una acción aislada: también importa cómo se conecta con el cierre y el estado final."
    },
    playground: {
      title: "Prueba una libreta con menú",
      guidance: "Ejecuta el proyecto, cambia la opción y ajusta el resumen final. La meta es sentir una herramienta pequeña pero más completa.",
      starterCode:
        "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nCaminar: hecho')\n\n\ndef consultar_habito(nombre):\n    with open('habitos.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_habito(nombre, nuevo_estado):\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        print('Resumen final:')\n        print(archivo.read())\n\n\nguardar_habitos()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_habito('Leer')\nelse:\n    actualizar_habito('Leer', 'hecho')\nmostrar_resumen()",
      emptyOutputHint: "La salida debería mostrar una acción útil y luego un resumen final."
    },
    exerciseSlug: "build-route2-notebook-menu-project"
  },
  {
    slug: "route2-project-record-and-report-tool",
    module: "Proyectos prácticos de Ruta 2",
    moduleSlug: "route2-practical-projects",
    order: 3,
    title: "Proyecto práctico: registro y reporte ordenado",
    duration: "26 min",
    difficulty: "Beginner",
    summary: "Construye una herramienta de registro con datos guardados, cambios simples y un reporte final claro que resuma el estado del programa.",
    warmup: "Un buen cierre hace que una herramienta pequeña se sienta completa. Este proyecto busca justamente eso: un flujo útil con un reporte final claro.",
    goal: "Al final, deberías poder construir una herramienta pequeña que guarde datos, permita modificarlos y termine con un reporte simple y ordenado.",
    keyIdeas: [
      {
        title: "El reporte final da sensación de herramienta completa",
        description: "Reunir el estado final en una salida clara ayuda a que el proyecto se sienta cerrado y útil."
      },
      {
        title: "Las listas y los archivos pueden trabajar juntos",
        description: "Leer líneas, reorganizarlas y volver a mostrarlas es una forma beginner-safe de trabajar con datos guardados."
      },
      {
        title: "Una utilidad práctica necesita coordinación",
        description: "Guardar, consultar, cambiar y reportar son partes distintas que deben mantener un orden visible."
      }
    ],
    explanation: [
      {
        title: "Brief del proyecto",
        body: "Vas a crear una herramienta pequeña de registro y reporte. Debe guardar datos base, permitir un cambio simple y luego mostrar un reporte corto que deje claro cómo quedó la información."
      },
      {
        title: "Requisitos mínimos",
        body: "Necesitas un archivo con varios datos, funciones separadas para consultar o cambiar y una parte final que muestre el reporte. El resultado debe leerse fácil."
      },
      {
        title: "Qué consolida este proyecto",
        body: "Consolida lo más práctico de Ruta 2: persistencia simple, funciones con sentido, decisiones con input y una salida final más organizada."
      },
      {
        title: "Cómo sostenerlo sin complicarlo",
        body: "Usa pocos registros y una lógica sencilla. Si el reporte resume bien el resultado, la herramienta ya cumple una meta práctica clara."
      }
    ],
    example:
      "def guardar_registro():\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMara: activo')\n\n\ndef mostrar_reporte():\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))",
    practicePrompt: "Piensa qué dato te gustaría consultar o modificar antes del reporte final. Lo importante es que el cierre se sienta claro y útil.",
    practiceChecklist: [
      "Guarda varios registros en un archivo.",
      "Permite al menos una consulta o cambio simple.",
      "Usa funciones para separar el flujo.",
      "Muestra un reporte final con contexto."
    ],
    commonMistakes: [
      "Mostrar un reporte sin haber coordinado antes la consulta o actualización.",
      "Perder el orden del flujo principal.",
      "Hacer el reporte demasiado ambiguo o sin contexto."
    ],
    bugChallenge: {
      prompt: "Este proyecto debería mostrar un reporte final claro, pero una lectura suelta y un total mal ubicado rompen el cierre.",
      brokenCode:
        "def mostrar_reporte():\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        print(linea)\n        print('Total:', len(lineas))",
      expectedLearning: "Un proyecto más completo no solo necesita hacer algo útil; también necesita presentar el resultado de forma ordenada."
    },
    playground: {
      title: "Prueba un registro con reporte final",
      guidance: "Ejecuta el proyecto, cambia un estado o el formato del reporte y confirma que el cierre siga siendo claro.",
      starterCode:
        "def guardar_registro():\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMara: activo')\n\n\ndef consultar_registro(nombre):\n    with open('reporte.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\nmostrar_reporte()",
      emptyOutputHint: "La salida debería mostrar una acción útil y luego un reporte final corto y ordenado."
    },
    exerciseSlug: "build-route2-record-and-report-project"
  },
  {
    slug: "route2-capstone-personal-manager",
    module: "Cierre de Ruta 2",
    moduleSlug: "route2-capstone",
    order: 1,
    title: "Capstone de Ruta 2: gestor personal simple",
    duration: "28 min",
    difficulty: "Beginner",
    summary: "Construye una utilidad práctica que guarda datos, permite consultar o actualizar información y termina con un reporte claro del estado final.",
    warmup: "Llegaste al punto donde tus herramientas ya no son solo ejercicios. Este proyecto busca mostrar que puedes coordinar varias piezas para resolver algo pequeño pero bastante real.",
    goal: "Al final, deberías poder construir un gestor personal simple con archivo, funciones, decisiones con `input()` y un cierre ordenado que muestre el estado final.",
    keyIdeas: [
      {
        title: "Un capstone práctico reúne lo esencial de Ruta 2",
        description: "Persistencia, organización, consulta, actualización y reporte final deben convivir con claridad."
      },
      {
        title: "La utilidad se siente real cuando responde y cambia",
        description: "Ya no alcanza con mostrar datos fijos: la persona debe poder consultar o modificar algo útil."
      },
      {
        title: "El cierre importa tanto como el flujo",
        description: "Un reporte final claro hace que el proyecto se sienta completo y no como una demo a medio terminar."
      }
    ],
    explanation: [
      {
        title: "Brief del proyecto",
        body: "Vas a construir un gestor personal simple con pocos datos guardados, como nombre y estado de una pequeña lista de tareas o registros. La herramienta debe consultar o actualizar algo según una elección y luego cerrar con un reporte legible."
      },
      {
        title: "Requisitos mínimos",
        body: "Necesitas funciones separadas para guardar datos, consultar, actualizar y mostrar un reporte final. También necesitas una decisión con `input()` que cambie el recorrido del programa."
      },
      {
        title: "Qué vuelve especial a este cierre",
        body: "Que ya no practicas una sola habilidad. Aquí juntas varias partes de Ruta 2 para lograr una herramienta corta, organizada y útil."
      },
      {
        title: "Cómo mantenerlo achievable",
        body: "Trabaja con pocos registros y mensajes claros. No hace falta hacer un sistema grande para que el proyecto ya se sienta como una utilidad bastante real."
      }
    ],
    example:
      "def guardar_registros():\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('Ana: pendiente\\nLuis: hecho')\n\n\ndef consultar_registro(nombre):\n    with open('gestor.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('gestor.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('gestor.txt', 'r') as archivo:\n        print('=== REPORTE FINAL ===')\n        print(archivo.read())",
    practicePrompt: "Piensa cómo quieres que se vea el reporte final. La clave es que el programa tenga una acción útil y un cierre claro, no que sea enorme.",
    practiceChecklist: [
      "Guarda datos base en un archivo.",
      "Usa `input()` para decidir entre consultar o actualizar.",
      "Mantén funciones separadas.",
      "Cierra con un reporte final legible."
    ],
    commonMistakes: [
      "Olvidar que el capstone necesita un cierre claro, no solo una acción intermedia.",
      "Mezclar consulta, actualización y reporte en un solo bloque difícil de leer.",
      "Agregar demasiadas opciones y perder claridad."
    ],
    bugChallenge: {
      prompt: "Este gestor debería consultar o actualizar y luego mostrar un reporte final, pero una variable de decisión y un cierre ausente cortan la experiencia.",
      brokenCode:
        "guardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif opcion == 'consultar':\n    consultar_registro('Ana')\nelse:\n    actualizar_registro('Ana', 'hecho')",
      expectedLearning: "En un proyecto final, tan importante como la lógica es comprobar que el flujo entero se cumple de principio a fin."
    },
    playground: {
      title: "Construye tu gestor personal simple",
      guidance: "Ejecuta el proyecto, cambia la acción y ajusta el formato del cierre. La meta es sentir que estás terminando una herramienta real de Ruta 2.",
      starterCode:
        "def guardar_registros():\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('Ana: pendiente\\nLuis: hecho')\n\n\ndef consultar_registro(nombre):\n    with open('gestor.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('gestor.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('gestor.txt', 'r') as archivo:\n        print('=== REPORTE FINAL ===')\n        print(archivo.read())\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Ana')\nelse:\n    actualizar_registro('Ana', 'hecho')\nmostrar_reporte()",
      emptyOutputHint: "La salida debería mostrar una acción útil y después un reporte final claro."
    },
    exerciseSlug: "build-route2-capstone-personal-manager"
  },
  {
    slug: "route2-capstone-menu-report-tool",
    module: "Cierre de Ruta 2",
    moduleSlug: "route2-capstone",
    order: 2,
    title: "Capstone de Ruta 2: herramienta con menú y reporte final",
    duration: "30 min",
    difficulty: "Beginner",
    summary: "Construye una pequeña utilidad con menú, varias acciones útiles y un reporte final que cierre la segunda ruta con una herramienta más completa.",
    warmup: "Este es el cierre práctico de Ruta 2: una herramienta pequeña que coordina varias partes y demuestra que ya puedes construir algo útil y ordenado.",
    goal: "Al final, deberías poder construir una herramienta con menú, consulta, actualización y reporte final dentro de un flujo claro y usable.",
    keyIdeas: [
      {
        title: "El menú ordena una utilidad más completa",
        description: "Da varios caminos posibles sin perder claridad para quien usa o revisa el programa."
      },
      {
        title: "La organización permite crecer sin caos",
        description: "Funciones con nombres claros sostienen mejor una herramienta que ya tiene varias piezas."
      },
      {
        title: "El reporte final marca el cierre de la etapa",
        description: "Resume el estado final y le da al proyecto sensación de herramienta terminada."
      }
    ],
    explanation: [
      {
        title: "Brief del proyecto",
        body: "Vas a crear una herramienta pequeña con un menú simple. La persona podrá consultar o actualizar un dato guardado y luego verá un reporte final ordenado."
      },
      {
        title: "Requisitos mínimos",
        body: "Debe haber un archivo base, funciones separadas para consulta y actualización, una elección con `input()` y un reporte final que muestre el estado de los datos guardados."
      },
      {
        title: "Qué demuestra este capstone",
        body: "Demuestra que ya no trabajas solo con scripts de prueba. Ahora puedes montar una utilidad chica, útil y bastante coherente de principio a fin."
      },
      {
        title: "Qué no hace falta todavía",
        body: "No hace falta un sistema enorme ni muchas opciones. Con un menú simple, dos caminos útiles y un cierre claro ya tienes un cierre sólido de Ruta 2."
      }
    ],
    example:
      "def mostrar_menu():\n    print('1. Consultar')\n    print('2. Actualizar')\n\n\ndef mostrar_reporte(lineas):\n    print('=== REPORTE FINAL ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))",
    practicePrompt: "Piensa qué opción quieres que use el menú y cómo quieres que se lea el reporte final. Tu meta es mostrar una utilidad pequeña pero claramente terminada.",
    practiceChecklist: [
      "Prepara un archivo con varios registros.",
      "Usa un menú o elección con `input()`.",
      "Coordina consulta o actualización según la elección.",
      "Cierra con un reporte final que muestre el estado del archivo."
    ],
    commonMistakes: [
      "Mostrar el menú, pero no usar la opción para decidir el flujo real.",
      "Actualizar los datos y olvidar el reporte final.",
      "Hacer un reporte sin contexto ni encabezado visible."
    ],
    bugChallenge: {
      prompt: "Esta herramienta debería cerrar Ruta 2 con consulta, actualización y reporte, pero una opción y un total mal ubicados debilitan el resultado final.",
      brokenCode:
        "def mostrar_reporte(lineas):\n    for linea in lineas:\n        print(linea)\n        print('Total:', len(lineas))\n\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    print('Consulta lista')",
      expectedLearning: "Un proyecto de cierre necesita tanto una lógica correcta como una presentación final ordenada."
    },
    playground: {
      title: "Prueba tu herramienta final de Ruta 2",
      guidance: "Ejecuta el proyecto, cambia la acción y observa cómo la utilidad sigue cerrando con un reporte final claro.",
      starterCode:
        "def guardar_registro():\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('Tarea: pendiente\\nNota: lista\\nResumen: en curso')\n\n\ndef consultar_registro(nombre):\n    with open('ruta2-final.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE FINAL ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Nota')\nelse:\n    actualizar_registro('Tarea', 'hecho')\nmostrar_reporte()",
      emptyOutputHint: "La salida debería terminar con un reporte final que se sienta como cierre de una herramienta completa."
    },
    exerciseSlug: "build-route2-capstone-menu-report-tool"
  },
  {
    slug: "why-simple-multi-file-programs-help",
    module: "Programas multiarchivo simples",
    moduleSlug: "simple-multi-file-programs",
    order: 1,
    title: "Por qué un programa en varios archivos puede ayudarte",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Entiende la idea de separar partes de un programa en archivos simples para que el flujo principal siga claro cuando la herramienta crece.",
    warmup: "Cuando un programa empieza a tener muchas responsabilidades, leer todo en un solo bloque se vuelve cansador. Separar no es complicar: muchas veces es aclarar.",
    goal: "Al final de esta lección, deberías poder explicar por qué dividir un programa simple en más de un archivo puede volverlo más legible y más fácil de mantener.",
    keyIdeas: [
      {
        title: "El archivo principal no tiene que cargar con todo",
        description: "Cuando una herramienta crece, conviene dejar el flujo principal visible y mover apoyos a otro lugar."
      },
      {
        title: "Separar ayuda a leer con calma",
        description: "Si una función de apoyo vive en otro archivo, el archivo principal puede contar mejor la historia del programa."
      },
      {
        title: "No se trata de hacer ingeniería pesada",
        description: "Aquí la meta no es complejidad técnica, sino organización práctica para herramientas pequeñas más reales."
      }
    ],
    explanation: [
      {
        title: "Piensa en responsabilidades, no en cantidad de líneas",
        body: "Un programa no necesita varios archivos porque sí. Empieza a necesitarlos cuando una parte hace una tarea distinta y conviene verla aparte."
      },
      {
        title: "El archivo principal debería mostrar el recorrido",
        body: "Si alguien abre tu programa principal, debería entender rápido qué hace la herramienta: pedir algo, llamar apoyos, mostrar un resultado."
      },
      {
        title: "Los archivos de apoyo guardan piezas reutilizables",
        body: "Funciones para formatear, guardar, consultar o resumir pueden vivir en un archivo auxiliar y dejar más limpio el flujo principal."
      },
      {
        title: "Ruta 3 cambia el tipo de organización",
        body: "En Ruta 2 ya organizaste mejor dentro de un archivo. Ahora vas a dar el siguiente paso: separar partes del programa sin perder claridad."
      }
    ],
    example:
      "# principal.py\nfrom utilidades import mostrar_resumen\n\n\ndef main():\n    print('Herramienta lista')\n    mostrar_resumen()\n\n\nmain()\n\n# utilidades.py\ndef mostrar_resumen():\n    print('Resumen guardado y mostrado con claridad')",
    practicePrompt: "Imagina una herramienta que guarda notas y luego muestra un resumen. ¿Qué parte dejarías en el archivo principal y qué parte moverías a otro archivo?",
    practiceChecklist: [
      "Explica qué debería quedar visible en el archivo principal.",
      "Nombra al menos una función de apoyo que podrías mover.",
      "Piensa la separación como ayuda práctica, no como dificultad."
    ],
    commonMistakes: [
      "Mover cosas a otro archivo sin una razón clara.",
      "Dejar el archivo principal tan cargado como antes.",
      "Pensar que multiarchivo solo sirve para programas avanzados."
    ],
    bugChallenge: {
      prompt: "Este ejemplo quiere mostrar un archivo principal claro y una función de apoyo aparte, pero todo quedó mezclado y el flujo principal perdió forma.",
      brokenCode:
        "# principal.py\ndef mostrar_resumen():\n    print('Resumen listo')\n\nprint('Herramienta lista')\nmostrar_resumen()",
      expectedLearning: "Separar archivos debería ayudarte a leer mejor el programa principal, no solo cambiar funciones de lugar sin intención."
    },
    playground: {
      title: "Observa una separación simple entre principal y apoyo",
      guidance: "Este playground sigue corriendo en un solo editor, pero usa comentarios para mostrar cómo se vería una versión separada en varios archivos.",
      starterCode:
        "# principal.py\nprint('Abriendo herramienta...')\nprint('Luego podrías llamar funciones de apoyo')\n\n# utilidades.py\ndef mostrar_resumen():\n    print('Resumen listo')\n",
      emptyOutputHint: "La salida puede ser simple. Lo importante aquí es entender cómo se reparte mejor el programa."
    },
    exerciseSlug: "explain-why-simple-multi-file-programs-help"
  },
  {
    slug: "moving-support-functions-to-another-file",
    module: "Programas multiarchivo simples",
    moduleSlug: "simple-multi-file-programs",
    order: 2,
    title: "Mover funciones de apoyo a otro archivo",
    duration: "18 min",
    difficulty: "Beginner",
    summary: "Practica la idea de dejar las funciones auxiliares en un archivo de apoyo mientras el archivo principal se concentra en el recorrido de la herramienta.",
    warmup: "Si ya sabes crear funciones, el siguiente paso natural es decidir dónde viven para que el programa se lea mejor.",
    goal: "Al final, deberías poder separar funciones de apoyo en un archivo sencillo y dejar un archivo principal más fácil de seguir.",
    keyIdeas: [
      {
        title: "Las funciones de apoyo merecen un lugar propio",
        description: "Guardar, consultar o formatear pueden vivir juntas si apoyan al mismo programa."
      },
      {
        title: "El archivo principal coordina",
        description: "Pide datos, decide el recorrido y llama funciones con intención clara."
      },
      {
        title: "Separar no borra la relación entre partes",
        description: "Los archivos siguen trabajando juntos, solo que cada uno muestra mejor su responsabilidad."
      }
    ],
    explanation: [
      {
        title: "Qué conviene mover primero",
        body: "Empieza por funciones de apoyo que no necesitan ocupar el centro del recorrido: por ejemplo, una función que imprime un resumen o guarda datos."
      },
      {
        title: "Qué conviene dejar en principal.py",
        body: "Conviene dejar el arranque del programa, las decisiones simples y las llamadas a las funciones que hacen el trabajo real."
      },
      {
        title: "Una separación pequeña ya cambia la lectura",
        body: "No hace falta crear muchos archivos. A veces un archivo principal y uno de utilidades ya alcanzan para que todo se vea más ordenado."
      },
      {
        title: "Piensa como alguien que vuelve a leer tu código",
        body: "Si mañana abres el archivo principal, deberías poder recordar rápido qué hace la herramienta sin navegar un muro de detalles."
      }
    ],
    example:
      "# utilidades.py\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_reporte():\n    print('Reporte listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_reporte\n\nnota = 'Recordar práctica'\nguardar_nota(nota)\nmostrar_reporte()",
    practicePrompt: "Piensa en una herramienta de notas simple. ¿Qué funciones de apoyo pondrías en `utilidades.py` y qué pasos dejarías en `principal.py`?",
    practiceChecklist: [
      "Crea al menos una función de apoyo en un archivo auxiliar.",
      "Usa un archivo principal para coordinar llamadas.",
      "Mantén nombres claros y fáciles de seguir."
    ],
    commonMistakes: [
      "Dejar lógica importante mezclada con funciones auxiliares.",
      "Mover una función, pero no aclarar desde dónde se usa.",
      "Separar tanto que el ejemplo deje de ser fácil de seguir."
    ],
    bugChallenge: {
      prompt: "Este ejemplo quiere usar un archivo de apoyo, pero el archivo principal terminó haciendo demasiado y la separación quedó confusa.",
      brokenCode:
        "# principal.py\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\ndef mostrar_reporte():\n    print('Reporte listo')\n\nnota = 'Repasar'\nguardar_nota(nota)\nmostrar_reporte()",
      expectedLearning: "La meta no es solo crear más archivos, sino reservar uno para apoyos y otro para el recorrido principal."
    },
    playground: {
      title: "Ensaya una organización con archivo principal y utilidades",
      guidance: "Usa los comentarios como si ya tuvieras `principal.py` y `utilidades.py`. La idea es practicar la separación con calma.",
      starterCode:
        "# utilidades.py\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_reporte():\n    print('Reporte listo')\n\n# principal.py\nnota = input('Escribe una nota: ')\nguardar_nota(nota)\nmostrar_reporte()",
      emptyOutputHint: "La salida debería mostrar que el archivo principal coordina y las utilidades hacen su parte."
    },
    exerciseSlug: "split-support-functions-into-another-file"
  },
  {
    slug: "keeping-a-clear-main-file",
    module: "Programas multiarchivo simples",
    moduleSlug: "simple-multi-file-programs",
    order: 3,
    title: "Mantener claro el archivo principal",
    duration: "19 min",
    difficulty: "Beginner",
    summary: "Aprende a dejar un `main` claro que pida datos, llame ayudas y cierre con un resultado útil sin perderte entre detalles.",
    warmup: "Cuando una herramienta tiene varias partes, el archivo principal se vuelve una especie de mapa. Si ese mapa está claro, todo lo demás se entiende mejor.",
    goal: "Al final, deberías poder escribir un archivo principal simple y legible que coordine funciones de apoyo y muestre el recorrido completo del programa.",
    keyIdeas: [
      {
        title: "El principal debería contar la historia del programa",
        description: "Entrada, decisión, llamada a apoyos y cierre visible."
      },
      {
        title: "Los detalles repetidos pueden vivir fuera",
        description: "El archivo principal no necesita mostrar toda la implementación de cada tarea."
      },
      {
        title: "Ruta 3 busca herramientas más reales, no más caóticas",
        description: "Separar bien hace que el programa pueda crecer sin perder claridad."
      }
    ],
    explanation: [
      {
        title: "Qué debería verse primero",
        body: "Cuando abras el archivo principal, lo ideal es ver nombres de funciones que expliquen el recorrido del programa, no todos los detalles de cada paso."
      },
      {
        title: "Cómo se siente un principal claro",
        body: "Pide un dato, decide una acción, llama funciones de apoyo y muestra un cierre. Todo eso debería poder leerse casi como una receta corta."
      },
      {
        title: "Un principal claro también ayuda a depurar",
        body: "Si algo falla, entiendes más rápido en qué parte del recorrido estás. Eso vuelve los errores menos confusos."
      },
      {
        title: "Piensa en la próxima utilidad de Ruta 3",
        body: "Más adelante vas a querer herramientas un poco más amplias. Un archivo principal claro será la base para que eso siga siendo manejable."
      }
    ],
    example:
      "# principal.py\nfrom utilidades import guardar_contacto, mostrar_resumen\n\n\ndef main():\n    nombre = input('Escribe un nombre: ')\n    guardar_contacto(nombre)\n    mostrar_resumen()\n\n\nmain()",
    practicePrompt: "Imagina un programa pequeño que guarda un contacto y luego muestra un resumen. Escribe primero cómo se vería `main()` antes de pensar los detalles internos.",
    practiceChecklist: [
      "Deja el recorrido principal visible.",
      "Usa funciones de apoyo con nombres claros.",
      "Termina con una salida o resumen fácil de leer."
    ],
    commonMistakes: [
      "Llenar el archivo principal con detalles internos otra vez.",
      "Usar nombres genéricos que no muestran la intención del flujo.",
      "Olvidar un cierre claro después de pedir datos o cambiar algo."
    ],
    bugChallenge: {
      prompt: "Este principal quiere coordinar una utilidad, pero mezcla demasiados detalles internos y pierde la historia del programa.",
      brokenCode:
        "nombre = input('Escribe un nombre: ')\nwith open('contactos.txt', 'w') as archivo:\n    archivo.write(nombre)\nwith open('contactos.txt', 'r') as archivo:\n    print(archivo.read())",
      expectedLearning: "El archivo principal debería coordinar. Si contiene todos los detalles internos, deja de leerse como un recorrido claro."
    },
    playground: {
      title: "Prueba un main corto y más claro",
      guidance: "Usa este ejemplo para notar cómo un `main()` pequeño muestra mejor el recorrido completo de la herramienta.",
      starterCode:
        "def guardar_contacto(nombre):\n    print('Guardando:', nombre)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n\ndef main():\n    nombre = input('Escribe un nombre: ')\n    guardar_contacto(nombre)\n    mostrar_resumen()\n\n\nmain()",
      emptyOutputHint: "La salida debería dejar claro que el programa pide un dato, hace algo útil y cierra con un pequeño resumen."
    },
    exerciseSlug: "build-a-clear-main-file"
  },
  {
    slug: "coordinating-a-utility-from-main-py",
    module: "Utilidades multiarchivo con flujo claro",
    moduleSlug: "practical-multi-file-utilities",
    order: 1,
    title: "Coordinar una utilidad desde principal.py",
    duration: "17 min",
    difficulty: "Beginner",
    summary: "Aprende a usar `principal.py` como centro de una utilidad simple: pide datos, decide el recorrido y llama apoyos sin llenarse de detalles.",
    warmup: "La idea multiarchivo empieza a sentirse útil cuando `principal.py` ya no solo se ve ordenado, sino que realmente coordina una herramienta pequeña de punta a punta.",
    goal: "Al final de esta lección, deberías poder plantear una utilidad simple donde el archivo principal coordina y un archivo de apoyo resuelve tareas concretas.",
    keyIdeas: [
      {
        title: "principal.py coordina el recorrido",
        description: "Pide datos, llama funciones y deja visible el orden de la herramienta."
      },
      {
        title: "utilidades.py hace trabajo concreto",
        description: "Guardar, consultar o resumir pueden vivir en el archivo de apoyo."
      },
      {
        title: "La separación ayuda cuando la herramienta ya hace algo útil",
        description: "No separas por estilo: separas para sostener mejor una utilidad real y fácil de leer."
      }
    ],
    explanation: [
      {
        title: "Qué cambia frente al módulo anterior",
        body: "Antes trabajaste la idea de separar un programa. Ahora vas a usar esa separación dentro de herramientas más útiles, donde un archivo principal realmente coordina algo concreto."
      },
      {
        title: "Qué debería quedar en principal.py",
        body: "Conviene dejar el pedido de datos, la decisión simple y las llamadas a funciones con nombres claros. Así, al abrir principal.py, entiendes rápido qué hace la utilidad."
      },
      {
        title: "Qué puede ir en utilidades.py",
        body: "Funciones como guardar una nota, consultar un registro o mostrar un resumen final pueden ir en utilidades.py para que el principal no se vuelva una pared de detalles."
      },
      {
        title: "La meta de Ruta 3",
        body: "Ruta 3 no busca complicarte con imports avanzados. Busca que tus herramientas pequeñas se sientan más estructuradas y más fáciles de hacer crecer."
      }
    ],
    example:
      "# utilidades.py\ndef guardar_nota(texto):\n    print('Guardando nota:', texto)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_resumen\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen()\n\n\nmain()",
    practicePrompt: "Piensa una utilidad de notas o registros donde `principal.py` solo coordine y `utilidades.py` guarde o muestre información. ¿Qué dejarías en cada archivo?",
    practiceChecklist: [
      "Haz que `principal.py` pida un dato o coordine una acción.",
      "Mueve guardado o resumen a `utilidades.py`.",
      "Mantén un recorrido principal corto y legible."
    ],
    commonMistakes: [
      "Dejar demasiado trabajo dentro de `principal.py`.",
      "Separar archivos, pero sin una responsabilidad clara para cada uno.",
      "Crear una utilidad tan grande que la idea principal se pierda."
    ],
    bugChallenge: {
      prompt: "Esta utilidad quiere tener un principal claro y un archivo de apoyo, pero `principal.py` sigue haciendo todo y la separación perdió sentido.",
      brokenCode:
        "# principal.py\nnota = input('Escribe una nota: ')\nprint('Guardando nota:', nota)\nprint('Resumen listo')",
      expectedLearning: "La separación multiarchivo se vuelve útil cuando el principal coordina y los apoyos resuelven tareas concretas."
    },
    playground: {
      title: "Prueba una utilidad coordinada desde principal.py",
      guidance: "Ejecuta el ejemplo y piensa cómo se vería mejor repartido entre `principal.py` y `utilidades.py`, aunque aquí se muestre en un solo editor.",
      starterCode:
        "def guardar_nota(texto):\n    print('Guardando nota:', texto)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen()\n\n\nmain()",
      emptyOutputHint: "La salida debería mostrar un recorrido corto: pedir, guardar y cerrar con un resumen."
    },
    exerciseSlug: "organize-a-note-utility-across-files"
  },
  {
    slug: "saving-and-consulting-from-a-support-file",
    module: "Utilidades multiarchivo con flujo claro",
    moduleSlug: "practical-multi-file-utilities",
    order: 2,
    title: "Guardar y consultar desde un archivo de apoyo",
    duration: "19 min",
    difficulty: "Beginner",
    summary: "Usa `utilidades.py` para guardar y consultar información simple mientras el archivo principal decide qué hacer y cuándo mostrar el resultado.",
    warmup: "Cuando una herramienta guarda y consulta datos, tener esas tareas fuera del archivo principal ayuda mucho a leer el flujo sin perder detalle importante.",
    goal: "Al final, deberías poder separar funciones de guardado y consulta en un archivo de apoyo y dejar el recorrido general en el principal.",
    keyIdeas: [
      {
        title: "Guardar y consultar son tareas de apoyo claras",
        description: "Suelen vivir bien juntas en un archivo auxiliar porque cumplen una responsabilidad concreta."
      },
      {
        title: "principal.py decide el momento",
        description: "El principal puede pedir una acción, luego llamar guardar o consultar y finalmente mostrar el resultado."
      },
      {
        title: "La utilidad se siente más real cuando las partes cooperan",
        description: "La separación no es teórica: ayuda a que una libreta o agenda simple se lea mejor."
      }
    ],
    explanation: [
      {
        title: "Qué parte conviene mover",
        body: "Funciones como guardar una nota o buscar una línea concreta son buenas candidatas para utilidades.py porque resuelven tareas específicas y repetibles."
      },
      {
        title: "Qué parte conviene dejar visible",
        body: "En principal.py conviene dejar la elección o el flujo principal: qué pide la herramienta, cuándo consulta y cuándo muestra el cierre."
      },
      {
        title: "Piensa en la lectura futura",
        body: "Si dentro de unas semanas vuelves al programa, te va a ayudar encontrar primero el recorrido general y luego entrar al archivo de apoyo si necesitas detalle."
      },
      {
        title: "Una utilidad pequeña ya gana mucho con esto",
        body: "No hace falta una gran arquitectura. Con dos archivos y responsabilidades claras, una libreta simple ya se siente más madura."
      }
    ],
    example:
      "# utilidades.py\ndef guardar_contacto(nombre):\n    print('Guardando contacto:', nombre)\n\n\ndef consultar_contacto(nombre):\n    print('Consulta:', nombre)\n\n# principal.py\nfrom utilidades import guardar_contacto, consultar_contacto\n\naction = input('Escribe guardar o consultar: ')\nif action == 'guardar':\n    guardar_contacto('Ana')\nelse:\n    consultar_contacto('Ana')",
    practicePrompt: "Imagina una agenda pequeña. ¿Qué funciones de guardar o consultar pondrías en `utilidades.py` y qué decisión dejarías en el principal?",
    practiceChecklist: [
      "Usa al menos una función para guardar.",
      "Usa al menos una función para consultar.",
      "Deja la decisión de qué hacer en `principal.py`."
    ],
    commonMistakes: [
      "Poner la consulta y la decisión en el mismo bloque sin separación.",
      "Dejar todo el ejemplo demasiado rígido y sin mostrar la idea de flujo.",
      "Olvidar que el principal debería seguir contando la historia."
    ],
    bugChallenge: {
      prompt: "Esta agenda pequeña quiere guardar o consultar desde un archivo de apoyo, pero la decisión y el trabajo siguen pegados en el principal.",
      brokenCode:
        "# principal.py\naction = input('Escribe guardar o consultar: ')\nif action == 'guardar':\n    print('Guardando contacto: Ana')\nelse:\n    print('Consulta: Ana')",
      expectedLearning: "Cuando guardado y consulta viven en un archivo de apoyo, el principal gana claridad y la herramienta se siente más ordenada."
    },
    playground: {
      title: "Prueba una agenda pequeña con guardar y consultar",
      guidance: "Ejecuta el ejemplo y cambia la acción. Piensa luego cómo representarías esta misma idea entre `principal.py` y `utilidades.py`.",
      starterCode:
        "def guardar_contacto(nombre):\n    print('Guardando contacto:', nombre)\n\n\ndef consultar_contacto(nombre):\n    print('Consulta:', nombre)\n\n\naction = input('Escribe guardar o consultar: ')\nif action == 'guardar':\n    guardar_contacto('Ana')\nelse:\n    consultar_contacto('Ana')",
      emptyOutputHint: "La salida debería mostrar una acción elegida y un resultado corto pero útil."
    },
    exerciseSlug: "split-save-and-query-into-support-file"
  },
  {
    slug: "closing-with-a-summary-without-overloading-main",
    module: "Utilidades multiarchivo con flujo claro",
    moduleSlug: "practical-multi-file-utilities",
    order: 3,
    title: "Cerrar con un resumen claro sin cargar principal.py",
    duration: "20 min",
    difficulty: "Beginner",
    summary: "Aprende a cerrar una utilidad multiarchivo con un resumen visible, manteniendo el archivo principal corto y dejando el detalle del cierre en apoyos claros.",
    warmup: "Una herramienta se siente más completa cuando termina con un resumen útil. Ruta 3 busca que ese cierre exista sin volver a cargar demasiado el archivo principal.",
    goal: "Al final, deberías poder construir una utilidad multiarchivo simple que coordina desde principal.py y cierra con un resumen claro apoyado por funciones auxiliares.",
    keyIdeas: [
      {
        title: "El resumen también puede vivir en un archivo de apoyo",
        description: "Mostrar un cierre o reporte claro no obliga a meter todos los detalles en el archivo principal."
      },
      {
        title: "El principal coordina de principio a fin",
        description: "Pide, decide, llama funciones y termina el recorrido sin perder claridad."
      },
      {
        title: "Una herramienta simple ya puede sentirse completa",
        description: "Cuando cada archivo tiene un rol claro y el cierre es visible, la utilidad se percibe más real."
      }
    ],
    explanation: [
      {
        title: "Qué hace especial a este paso",
        body: "Aquí ya no solo separas funciones: separas partes de una herramienta que pide datos, hace algo útil y cierra con un resumen más ordenado."
      },
      {
        title: "Dónde conviene poner el resumen",
        body: "Si el resumen implica formatear varias líneas o mostrar un cierre repetible, puede ir en utilidades.py. El principal puede limitarse a llamarlo en el momento correcto."
      },
      {
        title: "Qué queda visible en principal.py",
        body: "El principal debería seguir mostrando el recorrido general: pedir una acción, ejecutar una función de apoyo y luego llamar el cierre."
      },
      {
        title: "Cómo se siente una utilidad más clara",
        body: "Se siente como una herramienta pequeña pero bien pensada, no como un script que fue creciendo sin orden."
      }
    ],
    example:
      "# utilidades.py\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_resumen(texto):\n    print('=== RESUMEN ===')\n    print(texto)\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_resumen\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen('Nota guardada con éxito')\n\n\nmain()",
    practicePrompt: "Imagina una libreta simple que guarda una nota y luego muestra un cierre claro. ¿Qué pondrías en el principal y qué dejarías a cargo del archivo de utilidades?",
    practiceChecklist: [
      "Usa una función de apoyo para guardar o consultar.",
      "Usa otra función de apoyo para mostrar un resumen.",
      "Mantén el principal corto y fácil de seguir."
    ],
    commonMistakes: [
      "Meter el resumen directamente en el principal aunque tenga varios pasos.",
      "Separar funciones, pero dejar el recorrido confuso.",
      "Cerrar sin un mensaje final que haga sentir completa la utilidad."
    ],
    bugChallenge: {
      prompt: "Esta libreta simple guarda una nota y quiere mostrar un cierre claro, pero el principal terminó cargado con demasiado detalle.",
      brokenCode:
        "nota = input('Escribe una nota: ')\nprint('Guardando:', nota)\nprint('=== RESUMEN ===')\nprint('Nota guardada con éxito')",
      expectedLearning: "Una utilidad multiarchivo se siente más clara cuando el principal coordina y deja los detalles de guardado o resumen en funciones de apoyo."
    },
    playground: {
      title: "Prueba una utilidad con cierre claro",
      guidance: "Ejecuta el ejemplo y cambia el texto del resumen. Observa cómo el cierre mejora la sensación de herramienta terminada.",
      starterCode:
        "def guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_resumen(texto):\n    print('=== RESUMEN ===')\n    print(texto)\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen('Nota guardada con éxito')\n\n\nmain()",
      emptyOutputHint: "La salida debería terminar con un cierre claro y fácil de leer."
    },
    exerciseSlug: "build-a-multi-file-utility-with-summary"
  }
];

export const courseExercises: ExerciseData[] = [
  {
    slug: "welcome-message-fix",
    title: "Arregla el mensaje de bienvenida",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "introduction-to-programming",
    lessonSlug: "what-is-programming",
    order: 1,
    duration: "6 min",
    summary: "Arregla un bug pequeño en `print()` y acostúmbrate a leer la sintaxis con cuidado.",
    prompt:
      "El código de abajo debería imprimir dos líneas de bienvenida para alguien que recién empieza. Corrige la sintaxis rota sin cambiar el sentido del mensaje.",
    responseLabel: "Tu código corregido",
    responsePlaceholder: "# Corrige el código aquí\nprint('Bienvenido a PyMentor')\nprint('Vamos a aprender Python')",
    instructions: [
      "Lee el texto que debería imprimirse y revisa las comillas.",
      "Corrige solo lo necesario.",
      "Mantén la salida como un mensaje de bienvenida amable."
    ],
    hints: [
      "A la primera línea con `print()` le falta una comilla.",
      "Las dos líneas deben seguir usando `print()`.",
      "Puedes evitar complicaciones usando un texto simple en español."
    ],
    starterCode: "print('Bienvenido a PyMentor)\nprint('Vamos a aprender Python')",
    successCriteria: [
      "Las dos líneas se pueden ejecutar.",
      "El texto sigue siendo un mensaje de bienvenida.",
      "Las comillas están correctamente emparejadas."
    ],
    playground: {
      title: "Prueba la corrección",
      guidance: "Después de editar el código en tu respuesta, también puedes probar la misma idea aquí y ejecutarla directo en el navegador.",
      starterCode: "print('Bienvenido a PyMentor')\nprint('Vamos a aprender Python')",
      emptyOutputHint: "Una solución correcta debería imprimir dos líneas amables."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Bienvenido a PyMentor\nVamos a aprender Python"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "rule_based",
      minLength: 24,
      passingScore: 4,
      rules: [
        {
          id: "two-print-lines",
          label: "Usa dos líneas con `print()`",
          type: "occurrences_at_least",
          value: "print(",
          count: 2,
          feedbackWhenMissing: "Mantén los dos mensajes de bienvenida como salida impresa."
        },
        {
          id: "welcome-text",
          label: "Mantiene el mensaje de bienvenida",
          type: "includes",
          value: "Bienvenido a PyMentor",
          feedbackWhenMissing: "La primera línea debería seguir dando la bienvenida."
        },
        {
          id: "learn-python-text",
          label: "Mantiene el segundo mensaje de aprendizaje",
          type: "includes",
          value: "aprender Python",
          feedbackWhenMissing: "La segunda línea debería seguir mencionando aprender Python."
        },
        {
          id: "fixed-first-line-quote",
          label: "No queda la primera línea rota",
          type: "excludes",
          value: "print('Bienvenido a PyMentor)",
          feedbackWhenMissing: "La primera línea con `print()` todavía parece tener una comilla sin cerrar."
        }
      ]
    }
  },
  {
    slug: "morning-routine-output",
    title: "Lee la salida en orden",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "introduction-to-programming",
    lessonSlug: "running-python-step-by-step",
    order: 2,
    duration: "5 min",
    summary: "Practica leer Python de arriba hacia abajo prediciendo la salida exacta.",
    prompt:
      "Mira el programa de abajo. Escribe la salida exactamente como aparecería, una línea por cada línea de salida.",
    responseLabel: "Salida esperada",
    responsePlaceholder: "Despertar\nLavarse los dientes\nDesayunar",
    instructions: [
      "Lee el código desde la primera línea hasta la última.",
      "Escribe solo la salida impresa, no el código con `print()`.",
      "Deja cada resultado en su propia línea."
    ],
    hints: [
      "Python suele ejecutar la primera línea antes que la segunda.",
      "La respuesta debería tener tres líneas de salida.",
      "No agregues signos que el código no imprime."
    ],
    starterCode: "print('Despertar')\nprint('Lavarse los dientes')\nprint('Desayunar')",
    successCriteria: [
      "La salida está escrita en el orden correcto.",
      "Cada línea impresa aparece una vez.",
      "Solo está incluido el texto de salida."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 12,
      normalizeWhitespace: true,
      ignoreCase: true,
      acceptableAnswers: [
        "Despertar\nLavarse los dientes\nDesayunar",
        "Despertar\r\nLavarse los dientes\r\nDesayunar"
      ]
    }
  },
  {
    slug: "fix-the-name-print",
    title: "Arregla el bug al imprimir el nombre",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "introduction-to-programming",
    lessonSlug: "reading-python-errors-calmly",
    order: 3,
    duration: "6 min",
    summary: "Practica arreglar un error pequeño concentrándote en la primera línea rota.",
    prompt:
      "Este código debería guardar un nombre e imprimirlo. Corrige el error sin cambiar la idea general del programa.",
    responseLabel: "Tu código corregido",
    responsePlaceholder: "name = 'Maya'\nprint(name)",
    instructions: [
      "Lee con atención la línea que está mal.",
      "Mantén el nombre guardado exactamente como está.",
      "Corrige el error de escritura y nada más."
    ],
    hints: [
      "La línea de la variable ya está bien.",
      "El nombre de la función `print` está mal escrito.",
      "Un error mínimo de escritura puede frenar todo el archivo."
    ],
    starterCode: "name = 'Maya'\nprnit(name)",
    successCriteria: [
      "El código mantiene la variable `name`.",
      "La función `print` está bien escrita.",
      "El programa imprime el nombre guardado."
    ],
    playground: {
      title: "Ejecuta el programa corregido",
      guidance: "Corrige el error de escritura y ejecuta el código. Es una buena forma de ver cómo un cambio mínimo puede destrabar todo el programa.",
      starterCode: "name = 'Maya'\nprint(name)",
      emptyOutputHint: "Una solución correcta debería imprimir el nombre guardado."
    },
    evaluator: {
      type: "rule_based",
      minLength: 18,
      passingScore: 4,
      rules: [
        {
          id: "keeps-name-variable",
          label: "Mantiene la variable `name`",
          type: "includes",
          value: "name = 'Maya'",
          feedbackWhenMissing: "Mantén la asignación original para que el programa siga guardando el nombre."
        },
        {
          id: "uses-print",
          label: "Usa `print()` correctamente",
          type: "includes",
          value: "print(name)",
          feedbackWhenMissing: "La segunda línea debería usar `print(name)`."
        },
        {
          id: "removes-prnit",
          label: "Quita el nombre de función mal escrito",
          type: "excludes",
          value: "prnit",
          feedbackWhenMissing: "El nombre de función mal escrito sigue presente."
        },
        {
          id: "two-lines-remain",
          label: "Mantiene el programa corto y enfocado",
          type: "occurrences_at_least",
          value: "\n",
          count: 1,
          feedbackWhenMissing: "Mantén la respuesta como el mismo programa corto de dos líneas."
        }
      ]
    }
  },
  {
    slug: "variable-label-check",
    title: "Explica qué está guardando una variable",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "variables",
    lessonSlug: "variables-hold-values",
    order: 1,
    duration: "7 min",
    summary: "Explica la idea principal de una variable con lenguaje simple de principiante.",
    prompt:
      "En 2 o 3 frases cortas, explica qué hace una variable en Python y qué significa `score = 10`.",
    responseLabel: "Tu explicación",
    responsePlaceholder:
      "Una variable es un nombre que guarda un valor. `score = 10` significa que la variable llamada score está guardando el número 10.",
    instructions: [
      "Usa tus propias palabras en lugar de intentar sonar técnico.",
      "Menciona que una variable tiene un nombre y un valor.",
      "Explica qué significa la línea `score = 10`."
    ],
    hints: [
      "Piensa en una variable como la etiqueta de una caja.",
      "La línea `score = 10` guarda un valor en la variable.",
      "Alcanza con frases cortas y claras."
    ],
    starterCode: "score = 10",
    successCriteria: [
      "Explica que una variable tiene un nombre o una etiqueta.",
      "Explica que guarda un valor.",
      "Explica que `score = 10` significa que score ahora vale 10."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 35,
      passingScore: 4,
      requireOrder: true,
      concepts: [
        {
          id: "name-or-label",
          label: "Menciona que una variable es un nombre o una etiqueta",
          keywords: ["nombre", "etiqueta", "llamada", "llamado"],
          feedbackWhenMissing: "Menciona que una variable le da un nombre o una etiqueta a algo."
        },
        {
          id: "stores-value",
          label: "Explica que la variable guarda un valor",
          keywords: ["guarda", "guardar", "valor", "recuerda", "almacena"],
          feedbackWhenMissing: "Agrega la idea de que la variable está guardando o sosteniendo un valor."
        },
        {
          id: "score-example",
          label: "Explica qué significa `score = 10`",
          keywords: ["score", "10"],
          feedbackWhenMissing: "Explica el ejemplo de forma directa: ¿qué le dice `score = 10` a Python que haga?"
        }
      ]
    }
  },
  {
    slug: "coins-after-update",
    title: "Predice el valor actualizado",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "variables",
    lessonSlug: "changing-variable-values",
    order: 2,
    duration: "6 min",
    summary: "Practica seguir una variable mientras cambia de valor de una línea a la siguiente.",
    prompt:
      "Lee el programa de abajo. ¿Qué salida exacta imprimirá después de que la variable cambie? Escribe una línea de salida por renglón.",
    responseLabel: "Salida esperada",
    responsePlaceholder: "3\n5",
    instructions: [
      "Primero lee la asignación inicial y la primera impresión.",
      "Luego lee la actualización antes del segundo `print()`.",
      "Escribe solo los valores de salida."
    ],
    hints: [
      "El primer `print()` ocurre antes de que cambie la variable.",
      "El segundo `print()` usa el valor más nuevo.",
      "Deberías terminar con dos líneas de salida."
    ],
    starterCode: "coins = 3\nprint(coins)\ncoins = 5\nprint(coins)",
    successCriteria: [
      "Muestra primero el valor anterior.",
      "Muestra después el valor actualizado.",
      "Escribe solo la salida, no el código."
    ],
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["3\n5"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "exact_answer",
      minLength: 3,
      normalizeWhitespace: true,
      ignoreCase: true,
      acceptableAnswers: ["3\n5", "3\r\n5"]
    }
  },
  {
    slug: "friendly-intro-input",
    title: "Construye un saludo pequeño con input",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "variables",
    lessonSlug: "using-input-to-store-text",
    order: 3,
    duration: "8 min",
    summary: "Une `input`, variables y salida en un programa interactivo pequeño.",
    prompt:
      "Escribe un programa corto que pida un nombre, guarde la respuesta en una variable e imprima un saludo amable usando esa variable.",
    responseLabel: "Tu programa con input",
    responsePlaceholder:
      "name = input('¿Cómo te llamas? ')\nprint('Hola, ' + name)",
    instructions: [
      "Haz una pregunta simple con `input()`.",
      "Guarda la respuesta en una variable como `name`.",
      "Imprime una respuesta que incluya la variable guardada."
    ],
    hints: [
      "Empieza con `name = input(...)`.",
      "Usa `print()` en la línea siguiente.",
      "Mantén el programa en dos líneas cortas."
    ],
    starterCode: "name = input('¿Cómo te llamas? ')\nprint('Hola, ' + name)",
    successCriteria: [
      "Usa `input()` para pedir un nombre.",
      "Guarda la respuesta en una variable.",
      "Imprime un saludo que use esa variable."
    ],
    playground: {
      title: "Prueba la versión interactiva",
      guidance: "Ejecuta este código y responde la ventana del navegador. Mantén el programa corto para que la interacción siga siendo clara.",
      starterCode: "name = input('¿Cómo te llamas? ')\nprint('Hola, ' + name)",
      emptyOutputHint: "Si todavía no ves salida, responde la pregunta y asegúrate de que el código imprima un saludo."
    },
    evaluator: {
      type: "structure_check",
      minLength: 30,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "stores-input",
          label: "Guarda `input()` en una variable",
          pattern: "[a-zA-Z_][a-zA-Z0-9_]*\\s*=\\s*input\\(",
          feedbackWhenMissing: "Guarda el resultado de `input()` en una variable en la primera línea."
        },
        {
          id: "uses-print",
          label: "Imprime una respuesta",
          pattern: "print\\(",
          feedbackWhenMissing: "Agrega una línea con `print()` para el saludo."
        },
        {
          id: "uses-name-variable",
          label: "Usa la variable guardada en el saludo",
          pattern: "print\\([^\\n]*name",
          flags: "i",
          feedbackWhenMissing: "La línea con `print()` debería usar la variable guardada, no solo texto fijo."
        },
        {
          id: "asks-question",
          label: "Incluye una pregunta simple en `input()`",
          pattern: "input\\(['\"].+[?].*['\"]\\)",
          feedbackWhenMissing: "Haz que la llamada a `input()` haga una pregunta clara."
        }
      ],
      orderedPatternIds: ["stores-input", "uses-print"]
    }
  },
  {
    slug: "fix-the-conditional",
    title: "Arregla el condicional",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "conditionals",
    lessonSlug: "python-conditionals-basics",
    order: 1,
    duration: "8 min",
    summary: "Arregla un bug de condicional típico de principiante corrigiendo la sintaxis antes de preocuparte por cualquier otra cosa.",
    prompt:
      "Este programa debería imprimir `Adulto` cuando `age` es 18 o más y `Menor` en cualquier otro caso. Corrige la sintaxis para que la lógica se lea con claridad.",
    responseLabel: "Tu condicional corregido",
    responsePlaceholder:
      "# Corrige la comparación y la puntuación\nage = 18\n\nif age >= 18:\n    print('Adulto')\nelse:\n    print('Menor')",
    instructions: [
      "Primero mira el operador de comparación.",
      "Revisa la puntuación al final de la línea con `if`.",
      "Mantén la indentación clara."
    ],
    hints: [
      "Python usa `>=` para 'mayor o igual que'.",
      "Una línea con `if` necesita dos puntos al final.",
      "La rama `else` debe quedar alineada con `if`."
    ],
    starterCode: "age = 18\n\nif age => 18\n    print('Adulto')\nelse:\n    print('Menor')",
    successCriteria: [
      "El código usa un operador de comparación válido.",
      "La línea con `if` termina con dos puntos.",
      "El código imprime `Adulto` cuando age es 18."
    ],
    playground: {
      title: "Ejecuta el condicional corregido",
      guidance: "Después de corregir el condicional, ejecútalo aquí y cambia `age` para ver qué rama se imprime.",
      starterCode: "age = 18\n\nif age >= 18:\n    print('Adulto')\nelse:\n    print('Menor')",
      emptyOutputHint: "Prueba cambiar `age` por un número más pequeño y vuelve a ejecutar."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Adulto"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 35,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "uses-greater-equal",
          label: "Usa `>=` como operador de comparación",
          pattern: ">=",
          feedbackWhenMissing: "Usa `>=` en lugar de la comparación rota."
        },
        {
          id: "if-line-colon",
          label: "Termina la línea de `if` con dos puntos",
          pattern: "if\\s+age\\s*>=\\s*18\\s*:",
          flags: "i",
          feedbackWhenMissing: "La línea con `if` debería terminar con dos puntos después de la condición."
        },
        {
          id: "adult-output",
          label: "Mantiene la salida `Adulto`",
          pattern: "Adulto",
          feedbackWhenMissing: "La salida `Adulto` debería seguir presente."
        },
        {
          id: "minor-output",
          label: "Mantiene la salida final `Menor`",
          pattern: "Menor",
          feedbackWhenMissing: "La rama final debería seguir imprimiendo `Menor`."
        }
      ],
      forbiddenPatterns: [
        {
          id: "removes-wrong-operator",
          label: "Quita el operador inválido `=>`",
          pattern: "=>",
          feedbackWhenMissing: "El operador inválido `=>` sigue ahí."
        }
      ],
      orderedPatternIds: ["if-line-colon", "adult-output", "minor-output"]
    }
  },
  {
    slug: "score-band-order",
    title: "Arregla el orden de las categorías del puntaje",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "conditionals",
    lessonSlug: "elif-and-else-paths",
    order: 2,
    duration: "8 min",
    summary: "Arregla un programa con ramas colocando primero la comprobación más específica.",
    prompt:
      "Este programa de puntajes debería imprimir `Alto` para 90 o más y `Medio` para 60 o más. Reordena el condicional para que Python revise las ramas de una forma lógica.",
    responseLabel: "Tu condicional reordenado",
    responsePlaceholder:
      "score = 95\n\nif score >= 90:\n    print('Alto')\nelif score >= 60:\n    print('Medio')\nelse:\n    print('Bajo')",
    instructions: [
      "Mantén las mismas tres salidas: `Alto`, `Medio` y `Bajo`.",
      "Coloca primero el umbral más alto.",
      "Haz que la estructura de ramas siga siendo fácil de leer."
    ],
    hints: [
      "Si Python encuentra primero una rama verdadera, se detiene ahí.",
      "Un umbral bajo primero puede tapar a uno más alto.",
      "El orden debería ser `if`, luego `elif` y después `else`."
    ],
    starterCode: "score = 95\n\nif score >= 60:\n    print('Medio')\nelif score >= 90:\n    print('Alto')\nelse:\n    print('Bajo')",
    successCriteria: [
      "La rama `>= 90` aparece antes que la rama `>= 60`.",
      "Se mantienen las tres salidas.",
      "La estructura sigue usando `if`, `elif` y `else`."
    ],
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Alto"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 50,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "high-check",
          label: "Comprueba `score >= 90`",
          pattern: "score\\s*>=\\s*90",
          feedbackWhenMissing: "La solución debería seguir comprobando si el puntaje es al menos 90."
        },
        {
          id: "medium-check",
          label: "Comprueba `score >= 60`",
          pattern: "score\\s*>=\\s*60",
          feedbackWhenMissing: "Mantén la rama media que comprueba si el puntaje es al menos 60."
        },
        {
          id: "uses-elif",
          label: "Usa `elif` para la segunda rama",
          pattern: "elif\\s+score\\s*>=\\s*60",
          feedbackWhenMissing: "La segunda rama debería ser `elif`, no un `if` separado."
        },
        {
          id: "high-output",
          label: "Mantiene la salida `Alto`",
          pattern: "Alto",
          feedbackWhenMissing: "La salida `Alto` debería seguir presente."
        },
        {
          id: "low-output",
          label: "Mantiene la salida final `Bajo`",
          pattern: "Bajo",
          feedbackWhenMissing: "Mantén la rama final `Bajo`."
        }
      ],
      orderedPatternIds: ["high-check", "medium-check", "low-output"]
    }
  },
  {
    slug: "comparison-question-check",
    title: "Explica qué pregunta está haciendo la comparación",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "conditionals",
    lessonSlug: "comparison-questions-in-python",
    order: 3,
    duration: "7 min",
    summary: "Convierte símbolos de comparación en palabras simples para que la lógica sea más fácil de entender.",
    prompt:
      "En 2 o 3 frases cortas, explica qué pregunta hace `score >= 70` y por qué eso importa dentro de un `if`.",
    responseLabel: "Tu explicación",
    responsePlaceholder:
      "`score >= 70` pregunta si score es al menos 70. La respuesta se vuelve true o false, y el `if` usa esa respuesta para decidir si ejecuta la rama.",
    instructions: [
      "Di qué pregunta hace la comparación.",
      "Menciona `True` o `False` con palabras simples.",
      "Conecta esa respuesta con lo que hace después el `if`."
    ],
    hints: [
      "Lee `>=` como 'mayor o igual que'.",
      "Una comparación produce una respuesta tipo sí o no.",
      "El `if` usa esa respuesta para elegir una rama."
    ],
    starterCode: "if score >= 70:\n    print('Aprueba')",
    successCriteria: [
      "Explica el significado de `>= 70`.",
      "Menciona que la comparación se vuelve `True` o `False`.",
      "Conecta ese resultado con que la rama del `if` se ejecute o no."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 40,
      passingScore: 4,
      requireOrder: true,
      concepts: [
        {
          id: "comparison-question",
          label: "Explica la pregunta que hace la comparación",
          keywords: ["al menos", "mayor o igual", "70"],
          feedbackWhenMissing: "Explica la comparación con palabras simples, como 'al menos 70'."
        },
        {
          id: "true-or-false",
          label: "Menciona `True` o `False`",
          keywords: ["true", "false", "verdadero", "falso"],
          feedbackWhenMissing: "Menciona que la comparación se vuelve `True` o `False`."
        },
        {
          id: "if-branch",
          label: "Conecta la respuesta con la decisión del `if`",
          keywords: ["if", "rama", "ejecuta", "decide", "decidir"],
          feedbackWhenMissing: "Agrega cómo el `if` usa esa respuesta para elegir si ejecuta la rama."
        }
      ]
    }
  },
  {
    slug: "read-cheer-loop-output",
    title: "Lee la salida repetida del mensaje",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "loops",
    lessonSlug: "why-loops-help",
    order: 1,
    duration: "6 min",
    summary: "Practica leer un bucle simple prediciendo la salida repetida exacta.",
    prompt:
      "Mira el bucle de abajo. Escribe la salida exactamente como la imprimiría Python, una línea por cada línea de salida.",
    responseLabel: "Salida esperada",
    responsePlaceholder: "¡Vamos!\n¡Vamos!\n¡Vamos!",
    instructions: [
      "Lee primero la cabecera del bucle.",
      "Fíjate cuántas veces se repite.",
      "Escribe solo la salida impresa, no el código."
    ],
    hints: [
      "`range(3)` significa que el cuerpo del bucle se ejecuta tres veces.",
      "El texto impreso es el mismo en cada vuelta.",
      "Tu respuesta debería tener tres líneas."
    ],
    starterCode: "for _ in range(3):\n    print('¡Vamos!')",
    successCriteria: [
      "La respuesta muestra tres líneas de salida.",
      "Cada línea contiene la misma palabra.",
      "Solo está incluido el texto de salida."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 8,
      normalizeWhitespace: true,
      ignoreCase: false,
      acceptableAnswers: ["¡Vamos!\n¡Vamos!\n¡Vamos!", "¡Vamos!\r\n¡Vamos!\r\n¡Vamos!"]
    }
  },
  {
    slug: "build-counting-loop",
    title: "Construye un bucle de conteo",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "loops",
    lessonSlug: "for-loops-with-range",
    order: 2,
    duration: "8 min",
    summary: "Escribe un bucle `for` pequeño que imprima un conteo claro del 1 al 3.",
    prompt:
      "Escribe un bucle `for` que imprima los números 1, 2 y 3, uno por línea. Mantén el código corto y legible.",
    responseLabel: "Tu bucle de conteo",
    responsePlaceholder:
      "for number in range(1, 4):\n    print(number)",
    instructions: [
      "Usa una variable de bucle como `number`.",
      "Elige un `range()` que empiece en 1 y termine después de 3.",
      "Imprime la variable del bucle dentro del cuerpo."
    ],
    hints: [
      "Una buena forma de empezar es `for number in range(...):`.",
      "Para incluir el 3, el final de `range()` necesita ir un número más arriba.",
      "La línea con `print()` debería ir indentada debajo del bucle."
    ],
    starterCode: "for number in range(1, 4):\n    print(number)",
    successCriteria: [
      "Usa un bucle `for` con `range()`.",
      "Imprime 1, 2 y 3 en orden.",
      "Mantiene la línea con `print()` dentro del bucle."
    ],
    playground: {
      title: "Ejecuta el bucle de conteo",
      guidance: "Ejecuta el código y lee la secuencia impresa con calma. Luego cambia el `range()` para ver cómo cambia el patrón.",
      starterCode: "for number in range(1, 4):\n    print(number)",
      emptyOutputHint: "Una respuesta correcta debería imprimir un número en cada línea."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["1\n2\n3"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 28,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "uses-for-loop",
          label: "Usa un bucle `for`",
          pattern: "for\\s+[a-zA-Z_][a-zA-Z0-9_]*\\s+in\\s+range\\(",
          feedbackWhenMissing: "Empieza con un bucle `for` que use `range()`."
        },
        {
          id: "counts-one-to-three",
          label: "Usa un `range()` que alcanza 1, 2 y 3",
          pattern: "range\\(\\s*1\\s*,\\s*4\\s*\\)",
          feedbackWhenMissing: "Usa `range(1, 4)` para que el bucle imprima 1, 2 y 3."
        },
        {
          id: "prints-loop-variable",
          label: "Imprime la variable del bucle",
          pattern: "print\\(\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*\\)",
          feedbackWhenMissing: "Imprime la variable del bucle dentro del cuerpo."
        }
      ],
      orderedPatternIds: ["uses-for-loop", "counts-one-to-three", "prints-loop-variable"]
    }
  },
  {
    slug: "fix-step-loop",
    title: "Arregla el bucle de pasos",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "loops",
    lessonSlug: "reading-loop-output-calmly",
    order: 3,
    duration: "8 min",
    summary: "Arregla un bucle simple para que las líneas repetidas y la línea final aparezcan con el patrón correcto.",
    prompt:
      "Este programa debería imprimir `Paso 1`, `Paso 2`, `Paso 3` y luego `Listo` una sola vez cuando el bucle termine. Corrige la estructura sin cambiar el objetivo.",
    responseLabel: "Tu bucle corregido",
    responsePlaceholder:
      "for step in range(1, 4):\n    print('Paso', step)\nprint('Listo')",
    instructions: [
      "Mantén el bucle contando del 1 al 3.",
      "Imprime la línea del paso dentro del bucle.",
      "Mueve la línea final `Listo` para que se ejecute después de que termine el bucle."
    ],
    hints: [
      "La línea `Listo` no debería estar indentada dentro del bucle.",
      "Un cambio pequeño de indentación puede arreglar todo el patrón.",
      "Ejecuta el código y compara las líneas impresas con la secuencia esperada."
    ],
    starterCode: "for step in range(1, 4):\n    print('Paso', step)\n    print('Listo')",
    successCriteria: [
      "El bucle imprime tres líneas de pasos.",
      "La línea final se imprime una sola vez después del bucle.",
      "La indentación muestra con claridad qué se repite y qué no."
    ],
    playground: {
      title: "Ejecuta el bucle corregido",
      guidance: "Ejecuta el código después de corregir la indentación. La salida debería mostrar primero las líneas repetidas de pasos y al final una sola línea final.",
      starterCode: "for step in range(1, 4):\n    print('Paso', step)\nprint('Listo')",
      emptyOutputHint: "La salida debería terminar con una sola línea `Listo` después de los pasos."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Paso 1\nPaso 2\nPaso 3\nListo"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 40,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "step-loop",
          label: "Mantiene el bucle de conteo",
          pattern: "for\\s+step\\s+in\\s+range\\(\\s*1\\s*,\\s*4\\s*\\)\\s*:",
          feedbackWhenMissing: "Mantén el bucle que cuenta `step` del 1 al 3."
        },
        {
          id: "prints-step",
          label: "Imprime cada paso dentro del bucle",
          pattern: "print\\(\\s*['\"]Paso['\"]\\s*,\\s*step\\s*\\)",
          feedbackWhenMissing: "Dentro del bucle, imprime el número de paso actual."
        },
        {
          id: "prints-done",
          label: "Mantiene la línea final `Listo`",
          pattern: "print\\(\\s*['\"]Listo['\"]\\s*\\)",
          feedbackWhenMissing: "Mantén el mensaje final `Listo` después del bucle."
        }
      ],
      orderedPatternIds: ["step-loop", "prints-step", "prints-done"]
    }
  },
  {
    slug: "read-greet-function-output",
    title: "Lee la salida de la función",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "functions",
    lessonSlug: "why-functions-help",
    order: 1,
    duration: "6 min",
    summary: "Practica leer una definición de función pequeña y dos llamadas sin perderte.",
    prompt:
      "Mira el código de abajo. Escribe la salida exacta que imprimirá Python cuando la función se llame dos veces.",
    responseLabel: "Salida esperada",
    responsePlaceholder: "¡Buen trabajo!\n¡Buen trabajo!",
    instructions: [
      "Lee primero el cuerpo de la función.",
      "Luego cuenta cuántas veces se llama.",
      "Escribe solo la salida impresa, una línea por renglón."
    ],
    hints: [
      "El cuerpo de la función imprime una línea.",
      "La función se llama dos veces.",
      "La salida debería repetir el mismo mensaje dos veces."
    ],
    starterCode: "def cheer():\n    print('¡Buen trabajo!')\n\ncheer()\ncheer()",
    successCriteria: [
      "La salida muestra dos líneas.",
      "Las dos líneas coinciden con la salida del cuerpo de la función.",
      "Solo está incluido el texto de salida."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 12,
      normalizeWhitespace: true,
      ignoreCase: false,
      acceptableAnswers: ["¡Buen trabajo!\n¡Buen trabajo!", "¡Buen trabajo!\r\n¡Buen trabajo!"]
    }
  },
  {
    slug: "build-cheer-function",
    title: "Construye una pequeña función de ánimo",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "functions",
    lessonSlug: "defining-and-calling-functions",
    order: 2,
    duration: "8 min",
    summary: "Define una función simple y llámala para que el programa imprima un mensaje útil dos veces.",
    prompt:
      "Escribe una función llamada `cheer()` que imprima `Sigue practicando`, y luego llámala dos veces debajo de la definición.",
    responseLabel: "Tu función",
    responsePlaceholder:
      "def cheer():\n    print('Sigue practicando')\n\ncheer()\ncheer()",
    instructions: [
      "Usa `def cheer():` para definir la función.",
      "Pon la línea con `print()` dentro del cuerpo de la función.",
      "Llama a `cheer()` dos veces después de la definición."
    ],
    hints: [
      "La línea de definición necesita paréntesis y dos puntos.",
      "El cuerpo de la función debe ir indentado.",
      "Las llamadas deberían aparecer después de definir la función."
    ],
    starterCode: "def cheer():\n    print('Sigue practicando')\n\ncheer()\ncheer()",
    successCriteria: [
      "Define `cheer()` correctamente.",
      "Imprime el mensaje esperado.",
      "Llama a la función dos veces."
    ],
    playground: {
      title: "Ejecuta la función de ánimo",
      guidance: "Ejecuta la función y luego cambia el mensaje o agrega otra llamada. Esto ayuda a que la idea de reutilizar se sienta concreta.",
      starterCode: "def cheer():\n    print('Sigue practicando')\n\ncheer()\ncheer()",
      emptyOutputHint: "Una respuesta correcta debería imprimir el mensaje cada vez que se llama a la función."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Sigue practicando\nSigue practicando"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 45,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-cheer",
          label: "Define `cheer()`",
          pattern: "def\\s+cheer\\s*\\(\\s*\\)\\s*:",
          feedbackWhenMissing: "Empieza definiendo la función como `def cheer():`."
        },
        {
          id: "prints-message",
          label: "Imprime el mensaje de ánimo",
          pattern: "print\\(\\s*['\"]Sigue practicando['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro de la función, imprime `Sigue practicando`."
        },
        {
          id: "calls-cheer-twice",
          label: "Llama a `cheer()` dos veces",
          pattern: "cheer\\s*\\(\\s*\\)",
          feedbackWhenMissing: "Recuerda llamar a la función después de definirla."
        }
      ],
      orderedPatternIds: ["defines-cheer", "prints-message", "calls-cheer-twice"]
    }
  },
  {
    slug: "fix-name-greeter-function",
    title: "Arregla la función que saluda por nombre",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "functions",
    lessonSlug: "simple-parameters-and-function-mistakes",
    order: 3,
    duration: "9 min",
    summary: "Arregla una función de principiante para que reciba un nombre e imprima bien un saludo personal.",
    prompt:
      "Esta función debería saludar a una persona por nombre. Corrige la definición y la llamada para que el programa imprima `Hola, Maya`.",
    responseLabel: "Tu función corregida",
    responsePlaceholder:
      "def greet(name):\n    print('Hola, ' + name)\n\ngreet('Maya')",
    instructions: [
      "Revisa la puntuación de la línea con `def`.",
      "Mantén la línea con `print()` dentro del cuerpo de la función.",
      "Llama a la función con un nombre entre comillas."
    ],
    hints: [
      "La definición de la función necesita dos puntos.",
      "Llamar a la función requiere paréntesis.",
      "La llamada debería darle el nombre que la función espera."
    ],
    starterCode: "def greet(name)\n    print('Hola, ' + name)\n\ngreet",
    successCriteria: [
      "Define la función con un parámetro.",
      "Imprime el saludo usando ese parámetro.",
      "Llama a la función para que imprima `Hola, Maya`."
    ],
    playground: {
      title: "Ejecuta el saludo corregido",
      guidance: "Corrige la función y luego ejecútala. Prueba cambiar el nombre en la llamada para ver cómo una misma función puede saludar a personas distintas.",
      starterCode: "def greet(name):\n    print('Hola, ' + name)\n\ngreet('Maya')",
      emptyOutputHint: "Una solución correcta debería imprimir un saludo usando el nombre que viene de la llamada."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Hola, Maya"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 48,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-greet-with-parameter",
          label: "Define `greet(name)`",
          pattern: "def\\s+greet\\s*\\(\\s*name\\s*\\)\\s*:",
          feedbackWhenMissing: "Define la función como `def greet(name):`."
        },
        {
          id: "uses-name-in-print",
          label: "Usa el parámetro dentro del saludo",
          pattern: "print\\([^\\n]*name[^\\n]*\\)",
          feedbackWhenMissing: "Usa el parámetro `name` dentro de la línea con `print()`."
        },
        {
          id: "calls-greet-with-maya",
          label: "Llama a `greet('Maya')`",
          pattern: "greet\\(\\s*['\"]Maya['\"]\\s*\\)",
          feedbackWhenMissing: "Llama a la función con `'Maya'` para que el programa imprima el saludo esperado."
        }
      ],
      orderedPatternIds: ["defines-greet-with-parameter", "uses-name-in-print", "calls-greet-with-maya"]
    }
  },
  {
    slug: "build-personal-greeter-project",
    title: "Construye el mini proyecto de saludo personal",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "mini-projects",
    lessonSlug: "mini-project-personal-greeter",
    order: 1,
    duration: "10 min",
    summary: "Termina un programa corto que pida un nombre y lo use dentro de una función de saludo.",
    prompt:
      "Escribe un mini proyecto que pida un nombre con `input()`, lo guarde en una variable y luego use una función `saludar(name)` para imprimir `Hola, ` más ese nombre.",
    responseLabel: "Tu mini proyecto",
    responsePlaceholder:
      "def saludar(name):\n    print('Hola, ' + name)\n\nname = input('¿Cómo te llamas? ')\nsaludar(name)",
    instructions: [
      "Define una función llamada `saludar` que reciba un nombre.",
      "Pide el nombre con `input()` y guárdalo en una variable.",
      "Llama a la función con esa variable al final."
    ],
    hints: [
      "La forma básica es `def saludar(name):`.",
      "Puedes usar `name = input('¿Cómo te llamas? ')`.",
      "La llamada debería verse como `saludar(name)`."
    ],
    starterCode: "def saludar(name):\n    print('Hola, ' + name)\n\nname = input('¿Cómo te llamas? ')\nsaludar(name)",
    successCriteria: [
      "Define la función `saludar(name)`.",
      "Pide el nombre con `input()`.",
      "Usa el nombre guardado para imprimir un saludo personal."
    ],
    playground: {
      title: "Ejecuta el mini proyecto de saludo",
      guidance: "Prueba el proyecto con distintos nombres. La meta es sentir que ya puedes construir un programa pequeño que conversa con la persona usuaria.",
      starterCode: "def saludar(name):\n    print('Hola, ' + name)\n\nname = input('¿Cómo te llamas? ')\nsaludar(name)",
      emptyOutputHint: "Responde la pregunta del navegador para ver el saludo final en la salida."
    },
    evaluator: {
      type: "structure_check",
      minLength: 70,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-saludar",
          label: "Define `saludar(name)`",
          pattern: "def\\s+saludar\\s*\\(\\s*name\\s*\\)\\s*:",
          feedbackWhenMissing: "Empieza definiendo la función como `def saludar(name):`."
        },
        {
          id: "uses-input",
          label: "Pide el nombre con `input()`",
          pattern: "name\\s*=\\s*input\\(",
          feedbackWhenMissing: "Guarda el resultado de `input()` en la variable `name`."
        },
        {
          id: "prints-greeting",
          label: "Imprime un saludo usando el nombre",
          pattern: "print\\([^\\n]*'Hola, '\\s*\\+\\s*name[^\\n]*\\)",
          feedbackWhenMissing: "Dentro de la función, imprime `Hola, ` usando el valor de `name`."
        },
        {
          id: "calls-saludar",
          label: "Llama a `saludar(name)`",
          pattern: "saludar\\(\\s*name\\s*\\)",
          feedbackWhenMissing: "Llama a la función al final usando la variable `name`."
        }
      ],
      orderedPatternIds: ["defines-saludar", "uses-input", "calls-saludar"]
    }
  },
  {
    slug: "build-score-checker-project",
    title: "Construye el mini proyecto verificador de puntajes",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "mini-projects",
    lessonSlug: "mini-project-score-checker",
    order: 2,
    duration: "10 min",
    summary: "Combina variables, condicionales y funciones en un verificador corto de puntajes.",
    prompt:
      "Escribe un mini proyecto que guarde `score = 85`, defina una función `revisar_puntaje(score)` y muestre `Excelente`, `Buen trabajo` o `Sigue practicando` según el valor.",
    responseLabel: "Tu verificador de puntajes",
    responsePlaceholder:
      "def revisar_puntaje(score):\n    if score >= 90:\n        print('Excelente')\n    elif score >= 70:\n        print('Buen trabajo')\n    else:\n        print('Sigue practicando')\n\nscore = 85\nrevisar_puntaje(score)",
    instructions: [
      "Guarda el puntaje en una variable llamada `score`.",
      "Define la función `revisar_puntaje(score)`.",
      "Usa tres ramas claras: `if`, `elif` y `else`."
    ],
    hints: [
      "El valor 85 debería caer en la categoría intermedia.",
      "La condición de 90 o más debe ir antes que la de 70 o más.",
      "Llama a la función después de guardar el puntaje."
    ],
    starterCode: "def revisar_puntaje(score):\n    if score >= 90:\n        print('Excelente')\n    elif score >= 70:\n        print('Buen trabajo')\n    else:\n        print('Sigue practicando')\n\nscore = 85\nrevisar_puntaje(score)",
    successCriteria: [
      "Usa una variable `score`.",
      "Clasifica el puntaje con una función.",
      "Con `score = 85`, el programa imprime `Buen trabajo`."
    ],
    playground: {
      title: "Ejecuta el verificador de puntajes",
      guidance: "Corre el proyecto con 85 y luego prueba otros valores. La idea es ver cómo una sola función ya puede tomar decisiones útiles.",
      starterCode: "def revisar_puntaje(score):\n    if score >= 90:\n        print('Excelente')\n    elif score >= 70:\n        print('Buen trabajo')\n    else:\n        print('Sigue practicando')\n\nscore = 85\nrevisar_puntaje(score)",
      emptyOutputHint: "La salida debería mostrar una sola categoría según el puntaje guardado."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Buen trabajo"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-review-function",
          label: "Define `revisar_puntaje(score)`",
          pattern: "def\\s+revisar_puntaje\\s*\\(\\s*score\\s*\\)\\s*:",
          feedbackWhenMissing: "Define la función como `def revisar_puntaje(score):`."
        },
        {
          id: "has-high-branch",
          label: "Incluye la rama de 90 o más",
          pattern: "if\\s+score\\s*>=\\s*90\\s*:",
          feedbackWhenMissing: "Empieza la decisión con la rama que revisa `score >= 90`."
        },
        {
          id: "has-mid-branch",
          label: "Incluye la rama de 70 o más",
          pattern: "elif\\s+score\\s*>=\\s*70\\s*:",
          feedbackWhenMissing: "Agrega una rama `elif` para `score >= 70`."
        },
        {
          id: "has-else",
          label: "Incluye la rama final",
          pattern: "else\\s*:",
          feedbackWhenMissing: "Mantén una rama `else` para el caso final."
        },
        {
          id: "stores-score",
          label: "Guarda `score = 85`",
          pattern: "score\\s*=\\s*85",
          feedbackWhenMissing: "Guarda el valor `85` en la variable `score`."
        },
        {
          id: "calls-review-function",
          label: "Llama a la función con `score`",
          pattern: "revisar_puntaje\\(\\s*score\\s*\\)",
          feedbackWhenMissing: "Llama a `revisar_puntaje(score)` al final."
        }
      ],
      orderedPatternIds: ["defines-review-function", "has-high-branch", "has-mid-branch", "stores-score", "calls-review-function"]
    }
  },
  {
    slug: "build-practice-counter-project",
    title: "Construye el mini proyecto contador de práctica",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "mini-projects",
    lessonSlug: "mini-project-practice-counter",
    order: 3,
    duration: "10 min",
    summary: "Termina una pequeña herramienta que use una función y un bucle para mostrar progreso paso a paso.",
    prompt:
      "Escribe un mini proyecto que defina `mostrar_progreso()`, imprima `Paso 1`, `Paso 2`, `Paso 3` dentro de un bucle y luego muestre `Sesión lista` una sola vez al final.",
    responseLabel: "Tu contador de práctica",
    responsePlaceholder:
      "def mostrar_progreso():\n    for step in range(1, 4):\n        print('Paso', step)\n    print('Sesión lista')\n\nmostrar_progreso()",
    instructions: [
      "Define la función antes de llamarla.",
      "Usa un bucle `for` para imprimir cada paso.",
      "Deja el mensaje final fuera del bucle, pero dentro de la función."
    ],
    hints: [
      "El `range()` debe llegar hasta el 3.",
      "La línea `Sesión lista` no debería repetirse tres veces.",
      "Recuerda llamar a `mostrar_progreso()` al final."
    ],
    starterCode: "def mostrar_progreso():\n    for step in range(1, 4):\n        print('Paso', step)\n    print('Sesión lista')\n\nmostrar_progreso()",
    successCriteria: [
      "Define una función con un bucle dentro.",
      "Imprime tres pasos en orden.",
      "Imprime `Sesión lista` una sola vez al final."
    ],
    playground: {
      title: "Ejecuta el contador de práctica",
      guidance: "Corre el proyecto y observa el patrón completo. La sensación buscada es que ya puedes construir una herramienta pequeña con inicio, repetición y cierre.",
      starterCode: "def mostrar_progreso():\n    for step in range(1, 4):\n        print('Paso', step)\n    print('Sesión lista')\n\nmostrar_progreso()",
      emptyOutputHint: "La salida correcta debería mostrar tres pasos y un único cierre final."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Paso 1\nPaso 2\nPaso 3\nSesión lista"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-progress-function",
          label: "Define `mostrar_progreso()`",
          pattern: "def\\s+mostrar_progreso\\s*\\(\\s*\\)\\s*:",
          feedbackWhenMissing: "Empieza definiendo la función como `def mostrar_progreso():`."
        },
        {
          id: "uses-step-loop",
          label: "Usa un bucle para contar pasos",
          pattern: "for\\s+step\\s+in\\s+range\\(\\s*1\\s*,\\s*4\\s*\\)\\s*:",
          feedbackWhenMissing: "Usa un bucle `for` con `range(1, 4)` para mostrar los pasos."
        },
        {
          id: "prints-step",
          label: "Imprime cada paso",
          pattern: "print\\(\\s*['\"]Paso['\"]\\s*,\\s*step\\s*\\)",
          feedbackWhenMissing: "Dentro del bucle, imprime `Paso` junto con el valor de `step`."
        },
        {
          id: "prints-session-ready",
          label: "Imprime el cierre final",
          pattern: "print\\(\\s*['\"]Sesión lista['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega una línea final con `print('Sesión lista')`."
        },
        {
          id: "calls-progress-function",
          label: "Llama a `mostrar_progreso()`",
          pattern: "mostrar_progreso\\(\\s*\\)",
          feedbackWhenMissing: "Llama a `mostrar_progreso()` después de definirla."
        }
      ],
      orderedPatternIds: ["defines-progress-function", "uses-step-loop", "prints-step", "prints-session-ready", "calls-progress-function"]
    }
  },
  {
    slug: "explain-what-a-list-holds",
    title: "Explica qué guarda una lista",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "lists",
    lessonSlug: "what-a-list-is",
    order: 1,
    duration: "7 min",
    summary: "Explica con palabras simples qué hace una lista y por qué sirve cuando tienes varios valores relacionados.",
    prompt:
      "En 2 o 3 frases cortas, explica qué es una lista en Python y por qué `['galletas', 'fruta', 'yogur']` es más útil que guardar cada valor por separado.",
    responseLabel: "Tu explicación",
    responsePlaceholder:
      "Una lista guarda varios valores relacionados en un solo lugar. Esa lista es útil porque no hace falta crear una variable distinta para cada snack.",
    instructions: [
      "Explica que una lista agrupa varios valores.",
      "Menciona que esos valores están relacionados.",
      "Cuenta por qué eso puede ser más cómodo que usar muchas variables."
    ],
    hints: [
      "Piensa en una lista como una colección pequeña y ordenada.",
      "La idea importante es 'varios valores en un solo lugar'.",
      "No hace falta usar palabras técnicas complicadas."
    ],
    starterCode: "snacks = ['galletas', 'fruta', 'yogur']",
    successCriteria: [
      "Explica que una lista guarda varios valores.",
      "Menciona que esos valores pertenecen al mismo grupo.",
      "Explica por qué eso ayuda más que usar muchas variables."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 45,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "many-values",
          label: "Menciona que una lista guarda varios valores",
          keywords: ["varios", "muchos", "valores", "elementos"],
          feedbackWhenMissing: "Explica que una lista sirve para guardar varios valores o elementos."
        },
        {
          id: "same-group",
          label: "Menciona que los valores están relacionados",
          keywords: ["relacionados", "grupo", "juntos", "misma idea"],
          feedbackWhenMissing: "Agrega la idea de que la lista reúne valores que pertenecen al mismo grupo."
        },
        {
          id: "more-useful",
          label: "Explica por qué es más práctico que muchas variables",
          keywords: ["variable", "variables", "cómodo", "práctico", "fácil"],
          feedbackWhenMissing: "Cuenta por qué una lista puede ser más práctica que crear muchas variables separadas."
        }
      ]
    }
  },
  {
    slug: "pick-values-from-a-list",
    title: "Lee valores de una lista con índices",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "lists",
    lessonSlug: "reading-values-from-a-list",
    order: 2,
    duration: "7 min",
    summary: "Practica leer posiciones de una lista y predecir la salida exacta sin confundirte con los índices.",
    prompt:
      "Mira el programa de abajo. Escribe la salida exacta que imprimirá, una línea por renglón.",
    responseLabel: "Salida esperada",
    responsePlaceholder: "azul\nverde",
    instructions: [
      "Lee primero la lista completa.",
      "Revisa qué valor corresponde al índice 0 y al índice 2.",
      "Escribe solo la salida, no el código."
    ],
    hints: [
      "El primer elemento de una lista está en el índice 0.",
      "El índice 2 apunta al tercer elemento.",
      "La respuesta debería tener dos líneas."
    ],
    starterCode: "colores = ['azul', 'rojo', 'verde']\nprint(colores[0])\nprint(colores[2])",
    successCriteria: [
      "La respuesta tiene dos líneas.",
      "Muestra el primer y el tercer valor de la lista.",
      "Solo incluye la salida impresa."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 8,
      normalizeWhitespace: true,
      ignoreCase: true,
      acceptableAnswers: ["azul\nverde", "azul\r\nverde"]
    }
  },
  {
    slug: "loop-through-a-list",
    title: "Recorre una lista con un bucle",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "lists",
    lessonSlug: "looping-through-a-list",
    order: 3,
    duration: "9 min",
    summary: "Usa una lista y un bucle `for` para imprimir cada valor en una línea distinta.",
    prompt:
      "Escribe un programa que cree la lista `['leer', 'practicar', 'descansar']` y luego use un bucle `for` para imprimir cada elemento por separado.",
    responseLabel: "Tu programa con lista y bucle",
    responsePlaceholder:
      "tareas = ['leer', 'practicar', 'descansar']\nfor tarea in tareas:\n    print(tarea)",
    instructions: [
      "Crea la lista con tres tareas.",
      "Usa un bucle `for` para recorrerla.",
      "Imprime la variable del bucle dentro del bloque."
    ],
    hints: [
      "La forma básica es `for tarea in tareas:`.",
      "La línea con `print()` debe ir indentada.",
      "La salida debería mostrar tres líneas distintas."
    ],
    starterCode: "tareas = ['leer', 'practicar', 'descansar']\nfor tarea in tareas:\n    print(tarea)",
    successCriteria: [
      "Crea una lista con tres elementos.",
      "Usa `for` para recorrer la lista.",
      "La salida imprime un elemento por línea."
    ],
    playground: {
      title: "Ejecuta el bucle sobre la lista",
      guidance: "Corre el programa y mira cómo cada tarea aparece en su propia línea. Luego cambia la lista para ver cómo el bucle sigue funcionando.",
      starterCode: "tareas = ['leer', 'practicar', 'descansar']\nfor tarea in tareas:\n    print(tarea)",
      emptyOutputHint: "Una solución correcta debería mostrar los tres elementos de la lista en líneas separadas."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["leer\npracticar\ndescansar"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 70,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-list",
          label: "Crea la lista `tareas`",
          pattern: "tareas\\s*=\\s*\\[\\s*['\"]leer['\"]\\s*,\\s*['\"]practicar['\"]\\s*,\\s*['\"]descansar['\"]\\s*\\]",
          feedbackWhenMissing: "Crea la lista `tareas` con los tres valores pedidos."
        },
        {
          id: "uses-for",
          label: "Usa un bucle `for` para recorrerla",
          pattern: "for\\s+tarea\\s+in\\s+tareas\\s*:",
          feedbackWhenMissing: "Usa un bucle `for tarea in tareas:` para recorrer la lista."
        },
        {
          id: "prints-item",
          label: "Imprime cada valor del bucle",
          pattern: "print\\(\\s*tarea\\s*\\)",
          feedbackWhenMissing: "Dentro del bucle, imprime la variable `tarea`."
        }
      ],
      orderedPatternIds: ["creates-list", "uses-for", "prints-item"]
    }
  },
  {
    slug: "explain-what-a-dictionary-stores",
    title: "Explica qué guarda un diccionario",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "dictionaries",
    lessonSlug: "what-a-dictionary-is",
    order: 1,
    duration: "7 min",
    summary: "Explica con palabras simples qué hace un diccionario y por qué sirve cuando cada dato tiene un nombre claro.",
    prompt:
      "En 2 o 3 frases cortas, explica qué es un diccionario en Python y por qué `{'nombre': 'Ana', 'edad': 20}` puede ser más útil que guardar esos datos en variables separadas.",
    responseLabel: "Tu explicación",
    responsePlaceholder:
      "Un diccionario guarda datos usando claves y valores. Es útil porque cada dato tiene un nombre claro y no hace falta crear una variable aparte para cada cosa.",
    instructions: [
      "Explica que un diccionario usa claves y valores.",
      "Menciona que los datos están relacionados.",
      "Cuenta por qué puede ser más claro que usar muchas variables."
    ],
    hints: [
      "Piensa en las claves como pequeñas etiquetas.",
      "La idea importante es que cada dato tiene nombre propio.",
      "No hace falta usar lenguaje técnico complicado."
    ],
    starterCode: "perfil = {'nombre': 'Ana', 'edad': 20}",
    successCriteria: [
      "Explica que un diccionario usa claves y valores.",
      "Menciona que esos datos pertenecen al mismo grupo.",
      "Cuenta por qué puede ser más práctico que varias variables."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 50,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "keys-values",
          label: "Menciona claves y valores",
          keywords: ["clave", "claves", "valor", "valores"],
          feedbackWhenMissing: "Explica que un diccionario guarda datos como pares de clave y valor."
        },
        {
          id: "related-data",
          label: "Menciona que los datos están relacionados",
          keywords: ["relacionados", "grupo", "juntos", "mismo"],
          feedbackWhenMissing: "Agrega la idea de que el diccionario reúne datos que pertenecen al mismo grupo."
        },
        {
          id: "clearer-than-variables",
          label: "Explica por qué puede ser más claro que varias variables",
          keywords: ["variables", "claro", "práctico", "cómodo", "fácil"],
          feedbackWhenMissing: "Cuenta por qué un diccionario puede ser más claro o práctico que varias variables separadas."
        }
      ]
    }
  },
  {
    slug: "read-and-update-dictionary-values",
    title: "Lee y actualiza valores de un diccionario",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "dictionaries",
    lessonSlug: "reading-and-updating-dictionary-values",
    order: 2,
    duration: "9 min",
    summary: "Practica leer una clave y actualizar un valor simple dentro de un diccionario pequeño.",
    prompt:
      "Escribe un programa que cree `perfil = {'nombre': 'Ana', 'edad': 20}`, imprima `perfil['nombre']`, actualice `perfil['edad']` a `21` y luego imprima la edad nueva.",
    responseLabel: "Tu programa con diccionario",
    responsePlaceholder:
      "perfil = {'nombre': 'Ana', 'edad': 20}\nprint(perfil['nombre'])\nperfil['edad'] = 21\nprint(perfil['edad'])",
    instructions: [
      "Crea el diccionario con las claves `nombre` y `edad`.",
      "Lee el valor de `nombre` usando la clave.",
      "Actualiza la edad y luego imprímela."
    ],
    hints: [
      "Para leer el nombre puedes usar `perfil['nombre']`.",
      "Para cambiar la edad usa la misma clave con `=`.",
      "La salida debería mostrar primero `Ana` y luego `21`."
    ],
    starterCode: "perfil = {'nombre': 'Ana', 'edad': 20}\nprint(perfil['nombre'])\nperfil['edad'] = 21\nprint(perfil['edad'])",
    successCriteria: [
      "Crea el diccionario pedido.",
      "Lee un valor por clave.",
      "Actualiza una clave existente y muestra el valor nuevo."
    ],
    playground: {
      title: "Ejecuta lectura y actualización",
      guidance: "Corre el programa y mira cómo primero aparece un dato leído del diccionario y luego el valor actualizado. Después cambia la edad para repetir la prueba.",
      starterCode: "perfil = {'nombre': 'Ana', 'edad': 20}\nprint(perfil['nombre'])\nperfil['edad'] = 21\nprint(perfil['edad'])",
      emptyOutputHint: "Una solución correcta debería mostrar el nombre y luego la edad actualizada."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Ana\n21"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-profile-dict",
          label: "Crea el diccionario `perfil`",
          pattern: "perfil\\s*=\\s*\\{\\s*['\"]nombre['\"]\\s*:\\s*['\"]Ana['\"]\\s*,\\s*['\"]edad['\"]\\s*:\\s*20\\s*\\}",
          feedbackWhenMissing: "Crea el diccionario `perfil` con las claves `nombre` y `edad`."
        },
        {
          id: "reads-name",
          label: "Lee `perfil['nombre']`",
          pattern: "print\\(\\s*perfil\\[['\"]nombre['\"]\\]\\s*\\)",
          feedbackWhenMissing: "Imprime el nombre usando la clave `nombre`."
        },
        {
          id: "updates-age",
          label: "Actualiza `perfil['edad']` a 21",
          pattern: "perfil\\[['\"]edad['\"]\\]\\s*=\\s*21",
          feedbackWhenMissing: "Actualiza la edad usando la misma clave `edad`."
        },
        {
          id: "prints-new-age",
          label: "Imprime la edad actualizada",
          pattern: "print\\(\\s*perfil\\[['\"]edad['\"]\\]\\s*\\)",
          feedbackWhenMissing: "Imprime la edad nueva después de actualizarla."
        }
      ],
      orderedPatternIds: ["creates-profile-dict", "reads-name", "updates-age", "prints-new-age"]
    }
  },
  {
    slug: "loop-through-dictionary-items",
    title: "Recorre clave y valor de un diccionario",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "dictionaries",
    lessonSlug: "looping-through-dictionary-data",
    order: 3,
    duration: "9 min",
    summary: "Usa un diccionario y un bucle simple para imprimir cada par de clave y valor.",
    prompt:
      "Escribe un programa que cree `perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}` y luego use `for clave, valor in perfil.items():` para imprimir ambos datos en cada vuelta.",
    responseLabel: "Tu programa con diccionario y bucle",
    responsePlaceholder:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}\nfor clave, valor in perfil.items():\n    print(clave, valor)",
    instructions: [
      "Crea el diccionario con las claves pedidas.",
      "Usa `items()` para obtener clave y valor.",
      "Imprime ambos dentro del bucle."
    ],
    hints: [
      "La forma básica es `for clave, valor in perfil.items():`.",
      "La línea con `print()` debe ir indentada.",
      "La salida debería mostrar dos líneas, una por cada par."
    ],
    starterCode: "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}\nfor clave, valor in perfil.items():\n    print(clave, valor)",
    successCriteria: [
      "Crea el diccionario pedido.",
      "Usa `items()` con dos variables en el bucle.",
      "Imprime la clave y el valor en cada vuelta."
    ],
    playground: {
      title: "Ejecuta el recorrido del diccionario",
      guidance: "Corre el programa y observa cómo aparecen los pares de clave y valor. Luego cambia un dato del diccionario para ver cómo se actualiza la salida.",
      starterCode: "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba'}\nfor clave, valor in perfil.items():\n    print(clave, valor)",
      emptyOutputHint: "Una solución correcta debería mostrar un par de clave y valor en cada línea."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["nombre Ana\nciudad Córdoba"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-dict",
          label: "Crea el diccionario `perfil`",
          pattern: "perfil\\s*=\\s*\\{\\s*['\"]nombre['\"]\\s*:\\s*['\"]Ana['\"]\\s*,\\s*['\"]ciudad['\"]\\s*:\\s*['\"]Córdoba['\"]\\s*\\}",
          feedbackWhenMissing: "Crea el diccionario `perfil` con las claves `nombre` y `ciudad`."
        },
        {
          id: "uses-items-loop",
          label: "Usa `items()` en el bucle",
          pattern: "for\\s+clave\\s*,\\s*valor\\s+in\\s+perfil\\.items\\(\\)\\s*:",
          feedbackWhenMissing: "Usa `for clave, valor in perfil.items():` para recorrer el diccionario."
        },
        {
          id: "prints-key-value",
          label: "Imprime clave y valor",
          pattern: "print\\(\\s*clave\\s*,\\s*valor\\s*\\)",
          feedbackWhenMissing: "Dentro del bucle, imprime la clave y el valor en la misma línea."
        }
      ],
      orderedPatternIds: ["creates-dict", "uses-items-loop", "prints-key-value"]
    }
  },
  {
    slug: "explain-what-a-string-is",
    title: "Explica qué es un string",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "strings",
    lessonSlug: "working-with-text-comfortably",
    order: 1,
    duration: "7 min",
    summary: "Explica con palabras simples qué es un string y por qué aparece tanto en `input()` y `print()`.",
    prompt:
      "En 2 o 3 frases cortas, explica qué es un string en Python y por qué se usa tanto cuando un programa muestra mensajes o recibe texto con `input()`.",
    responseLabel: "Tu explicación",
    responsePlaceholder:
      "Un string es texto guardado en Python. Sirve para mostrar mensajes y también para guardar lo que una persona escribe en `input()`.",
    instructions: [
      "Explica que un string es texto.",
      "Menciona que suele ir entre comillas.",
      "Conecta la idea con `input()` o con mensajes en pantalla."
    ],
    hints: [
      "Piensa en nombres, saludos y preguntas como ejemplos de strings.",
      "Un string no es un número: es texto.",
      "No hace falta sonar técnico para responder bien."
    ],
    starterCode: "mensaje = 'Hola'\nname = input('¿Cómo te llamas? ')",
    successCriteria: [
      "Explica que un string es texto.",
      "Menciona su relación con comillas o texto visible.",
      "Conecta la idea con `input()` o `print()`."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 45,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "text-idea",
          label: "Menciona que un string es texto",
          keywords: ["texto", "palabra", "frase", "mensaje"],
          feedbackWhenMissing: "Explica primero que un string es una forma de guardar texto."
        },
        {
          id: "quotes-or-display",
          label: "Lo relaciona con comillas o mensajes visibles",
          keywords: ["comillas", "mostrar", "mensaje", "pantalla", "print"],
          feedbackWhenMissing: "Agrega que los strings se escriben entre comillas o se usan para mostrar mensajes."
        },
        {
          id: "input-link",
          label: "Lo conecta con `input()` o texto que escribe la persona",
          keywords: ["input", "escribe", "respuesta", "usuario", "persona"],
          feedbackWhenMissing: "Conecta la idea con `input()` o con el texto que una persona escribe."
        }
      ]
    }
  },
  {
    slug: "build-a-text-checker",
    title: "Construye un pequeño verificador de texto",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "strings",
    lessonSlug: "joining-and-comparing-text",
    order: 2,
    duration: "9 min",
    summary: "Combina unión de texto y comparación para crear un programa corto que responde según una palabra.",
    prompt:
      "Escribe un programa que guarde `name = 'Ana'`, imprima `Hola, ` más ese nombre, y luego use `respuesta = 'si'` para mostrar `Seguimos adelante` solo si el texto coincide.",
    responseLabel: "Tu programa con strings",
    responsePlaceholder:
      "name = 'Ana'\nprint('Hola, ' + name)\nrespuesta = 'si'\nif respuesta == 'si':\n    print('Seguimos adelante')",
    instructions: [
      "Guarda un nombre en una variable.",
      "Usa `+` para unir texto en el saludo.",
      "Compara la respuesta con `==` dentro de un `if`."
    ],
    hints: [
      "El saludo puede verse como `print('Hola, ' + name)`.",
      "La comparación correcta es `respuesta == 'si'`.",
      "El programa debería imprimir dos líneas cuando la respuesta coincide."
    ],
    starterCode: "name = 'Ana'\nprint('Hola, ' + name)\nrespuesta = 'si'\nif respuesta == 'si':\n    print('Seguimos adelante')",
    successCriteria: [
      "Une texto con una variable.",
      "Compara un string con `==`.",
      "Imprime el mensaje final cuando la respuesta es `si`."
    ],
    playground: {
      title: "Ejecuta el verificador de texto",
      guidance: "Corre el programa y luego cambia la respuesta. Así puedes ver cómo el texto no solo se muestra, también participa en decisiones simples.",
      starterCode: "name = 'Ana'\nprint('Hola, ' + name)\nrespuesta = 'si'\nif respuesta == 'si':\n    print('Seguimos adelante')",
      emptyOutputHint: "Con la respuesta `si`, la salida debería mostrar el saludo y el mensaje final."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Hola, Ana\nSeguimos adelante"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 85,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "stores-name",
          label: "Guarda `name = 'Ana'`",
          pattern: "name\\s*=\\s*['\"]Ana['\"]",
          feedbackWhenMissing: "Guarda el nombre `Ana` en la variable `name`."
        },
        {
          id: "joins-text",
          label: "Une el saludo con `+`",
          pattern: "print\\(\\s*['\"]Hola, ['\"]\\s*\\+\\s*name\\s*\\)",
          feedbackWhenMissing: "Usa `+` para unir `Hola, ` con la variable `name`."
        },
        {
          id: "stores-response",
          label: "Guarda `respuesta = 'si'`",
          pattern: "respuesta\\s*=\\s*['\"]si['\"]",
          feedbackWhenMissing: "Guarda la respuesta `si` en una variable llamada `respuesta`."
        },
        {
          id: "compares-response",
          label: "Compara con `==` dentro de un `if`",
          pattern: "if\\s+respuesta\\s*==\\s*['\"]si['\"]\\s*:",
          feedbackWhenMissing: "Compara la respuesta con `==` en una línea `if`."
        },
        {
          id: "prints-next-message",
          label: "Imprime el mensaje final",
          pattern: "print\\(\\s*['\"]Seguimos adelante['\"]\\s*\\)",
          feedbackWhenMissing: "Imprime `Seguimos adelante` dentro del bloque del `if`."
        }
      ],
      orderedPatternIds: ["stores-name", "joins-text", "stores-response", "compares-response", "prints-next-message"]
    }
  },
  {
    slug: "clean-and-compare-text",
    title: "Limpia y compara texto",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "strings",
    lessonSlug: "simple-string-transformations",
    order: 3,
    duration: "9 min",
    summary: "Usa `strip()` y `lower()` para preparar texto antes de compararlo de forma más confiable.",
    prompt:
      "Escribe un programa que guarde `respuesta = ' Si '`, cree una variable `limpia` usando `strip()` y `lower()`, imprima `limpia` y luego compare si ese texto es igual a `si`.",
    responseLabel: "Tu programa de limpieza de texto",
    responsePlaceholder:
      "respuesta = ' Si '\nlimpia = respuesta.strip().lower()\nprint(limpia)\nif limpia == 'si':\n    print('Respuesta válida')",
    instructions: [
      "Guarda el texto original en `respuesta`.",
      "Usa `strip().lower()` para crear `limpia`.",
      "Compara `limpia` con `si` y muestra un mensaje si coincide."
    ],
    hints: [
      "Primero quita espacios con `strip()`.",
      "Después convierte a minúsculas con `lower()`.",
      "La salida debería mostrar `si` y luego `Respuesta válida`."
    ],
    starterCode: "respuesta = ' Si '\nlimpia = respuesta.strip().lower()\nprint(limpia)\nif limpia == 'si':\n    print('Respuesta válida')",
    successCriteria: [
      "Usa `strip()` y `lower()` correctamente.",
      "Guarda el resultado en una nueva variable.",
      "Compara el texto limpio con `si`."
    ],
    playground: {
      title: "Ejecuta la limpieza del texto",
      guidance: "Corre el programa y luego cambia el texto original. La meta es ver cómo una transformación pequeña vuelve la comparación más estable.",
      starterCode: "respuesta = ' Si '\nlimpia = respuesta.strip().lower()\nprint(limpia)\nif limpia == 'si':\n    print('Respuesta válida')",
      emptyOutputHint: "Una solución correcta debería imprimir el texto limpio y luego confirmar que la respuesta es válida."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["si\nRespuesta válida"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "stores-raw-response",
          label: "Guarda `respuesta = ' Si '`",
          pattern: "respuesta\\s*=\\s*['\"]\\s*Si\\s*['\"]",
          feedbackWhenMissing: "Guarda el texto original en la variable `respuesta`."
        },
        {
          id: "creates-clean-text",
          label: "Crea `limpia` con `strip().lower()`",
          pattern: "limpia\\s*=\\s*respuesta\\.strip\\(\\)\\.lower\\(\\)",
          feedbackWhenMissing: "Crea la variable `limpia` usando `respuesta.strip().lower()`."
        },
        {
          id: "prints-clean-text",
          label: "Imprime el texto limpio",
          pattern: "print\\(\\s*limpia\\s*\\)",
          feedbackWhenMissing: "Imprime la variable `limpia` para ver el resultado."
        },
        {
          id: "compares-clean-text",
          label: "Compara `limpia` con `si`",
          pattern: "if\\s+limpia\\s*==\\s*['\"]si['\"]\\s*:",
          feedbackWhenMissing: "Compara la variable `limpia` con el string `si`."
        },
        {
          id: "prints-valid-message",
          label: "Muestra `Respuesta válida`",
          pattern: "print\\(\\s*['\"]Respuesta válida['\"]\\s*\\)",
          feedbackWhenMissing: "Muestra el mensaje `Respuesta válida` dentro del `if`."
        }
      ],
      orderedPatternIds: ["stores-raw-response", "creates-clean-text", "prints-clean-text", "compares-clean-text", "prints-valid-message"]
    }
  },
  {
    slug: "build-profile-card-project",
    title: "Construye una tarjeta de perfil",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "guided-projects",
    lessonSlug: "guided-project-profile-card",
    order: 1,
    duration: "10 min",
    summary: "Crea un programa que guarde datos de perfil en un diccionario y los muestre como una tarjeta simple.",
    prompt:
      "Escribe un programa que cree un diccionario `perfil` con las claves `nombre`, `ciudad` y `meta`, y luego imprima una tarjeta con tres líneas: `Nombre: ...`, `Ciudad: ...` y `Meta: ...`.",
    responseLabel: "Tu proyecto de tarjeta de perfil",
    responsePlaceholder:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Aprender Python'}\nprint('Nombre:', perfil['nombre'])\nprint('Ciudad:', perfil['ciudad'])\nprint('Meta:', perfil['meta'])",
    instructions: [
      "Crea el diccionario con las tres claves pedidas.",
      "Imprime cada dato en su propia línea.",
      "Usa las claves del diccionario para construir la salida."
    ],
    hints: [
      "Puedes empezar con valores fijos dentro del diccionario.",
      "Cada línea puede usar `print('Nombre:', perfil['nombre'])`.",
      "La salida debería mostrar tres líneas con etiquetas claras."
    ],
    starterCode:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Aprender Python'}\nprint('Nombre:', perfil['nombre'])\nprint('Ciudad:', perfil['ciudad'])\nprint('Meta:', perfil['meta'])",
    successCriteria: [
      "Crea el diccionario `perfil`.",
      "Lee cada dato por su clave.",
      "Muestra una tarjeta clara con tres líneas."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "creates-profile",
          label: "Crea el diccionario `perfil`",
          pattern: "perfil\\s*=\\s*\\{[^\\}]*['\"]nombre['\"]\\s*:[^\\}]*['\"]ciudad['\"]\\s*:[^\\}]*['\"]meta['\"][^\\}]*\\}",
          feedbackWhenMissing: "Crea un diccionario `perfil` con las claves `nombre`, `ciudad` y `meta`."
        },
        {
          id: "prints-name",
          label: "Imprime el nombre desde el diccionario",
          pattern: "print\\(\\s*['\"]Nombre:\\s*['\"]\\s*,\\s*perfil\\[['\"]nombre['\"]\\]\\s*\\)",
          feedbackWhenMissing: "Imprime la línea de nombre usando `perfil['nombre']`."
        },
        {
          id: "prints-city",
          label: "Imprime la ciudad desde el diccionario",
          pattern: "print\\(\\s*['\"]Ciudad:\\s*['\"]\\s*,\\s*perfil\\[['\"]ciudad['\"]\\]\\s*\\)",
          feedbackWhenMissing: "Imprime la línea de ciudad usando `perfil['ciudad']`."
        },
        {
          id: "prints-goal",
          label: "Imprime la meta desde el diccionario",
          pattern: "print\\(\\s*['\"]Meta:\\s*['\"]\\s*,\\s*perfil\\[['\"]meta['\"]\\]\\s*\\)",
          feedbackWhenMissing: "Imprime la línea de meta usando `perfil['meta']`."
        }
      ],
      orderedPatternIds: ["creates-profile", "prints-name", "prints-city", "prints-goal"]
    }
  },
  {
    slug: "build-menu-helper-project",
    title: "Construye un asistente simple con menú",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "guided-projects",
    lessonSlug: "guided-project-menu-helper",
    order: 2,
    duration: "11 min",
    summary: "Crea un asistente corto que ofrezca opciones y responda según la elección escrita por la persona.",
    prompt:
      "Escribe un programa que defina `mostrar_saludo()` y `mostrar_consejo()`, muestre las opciones `1. Saludo` y `2. Consejo`, guarde `opcion = '2'` y use `if`/`elif` para ejecutar la función correcta.",
    responseLabel: "Tu asistente con menú",
    responsePlaceholder:
      "def mostrar_saludo():\n    print('Hola, seguimos practicando')\n\ndef mostrar_consejo():\n    print('Consejo: avanza un paso a la vez')\n\nprint('1. Saludo')\nprint('2. Consejo')\nopcion = '2'\n\nif opcion == '1':\n    mostrar_saludo()\nelif opcion == '2':\n    mostrar_consejo()",
    instructions: [
      "Define dos funciones cortas.",
      "Muestra el menú en pantalla.",
      "Guarda la opción en una variable y compárala.",
      "Llama a la función correcta."
    ],
    hints: [
      "Recuerda llamar a la función con paréntesis.",
      "La opción se compara como texto, por ejemplo `'1'` o `'2'`.",
      "Con `opcion = '2'`, la salida final debería mostrar el consejo."
    ],
    starterCode:
      "def mostrar_saludo():\n    print('Hola, seguimos practicando')\n\ndef mostrar_consejo():\n    print('Consejo: avanza un paso a la vez')\n\nprint('1. Saludo')\nprint('2. Consejo')\nopcion = '2'\n\nif opcion == '1':\n    mostrar_saludo()\nelif opcion == '2':\n    mostrar_consejo()",
    successCriteria: [
      "Define dos funciones.",
      "Muestra el menú con dos opciones.",
      "Usa una condición para ejecutar la función correcta."
    ],
    playground: {
      title: "Ejecuta el asistente con menú",
      guidance: "Corre el proyecto y mira cómo una opción cambia la salida. Luego cambia la variable `opcion` para comprobar el otro camino.",
      starterCode:
        "def mostrar_saludo():\n    print('Hola, seguimos practicando')\n\ndef mostrar_consejo():\n    print('Consejo: avanza un paso a la vez')\n\nprint('1. Saludo')\nprint('2. Consejo')\nopcion = '2'\n\nif opcion == '1':\n    mostrar_saludo()\nelif opcion == '2':\n    mostrar_consejo()",
      emptyOutputHint: "La salida debería mostrar el menú y luego el mensaje de la opción elegida."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["1. Saludo\n2. Consejo\nConsejo: avanza un paso a la vez"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 180,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-greeting",
          label: "Define `mostrar_saludo()`",
          pattern: "def\\s+mostrar_saludo\\(\\)\\s*:",
          feedbackWhenMissing: "Define la función `mostrar_saludo()`."
        },
        {
          id: "defines-tip",
          label: "Define `mostrar_consejo()`",
          pattern: "def\\s+mostrar_consejo\\(\\)\\s*:",
          feedbackWhenMissing: "Define la función `mostrar_consejo()`."
        },
        {
          id: "prints-menu-options",
          label: "Muestra las dos opciones del menú",
          pattern: "print\\(\\s*['\"]1\\. Saludo['\"]\\s*\\)[\\s\\S]*print\\(\\s*['\"]2\\. Consejo['\"]\\s*\\)",
          feedbackWhenMissing: "Muestra las opciones `1. Saludo` y `2. Consejo`."
        },
        {
          id: "stores-option",
          label: "Guarda `opcion = '2'`",
          pattern: "opcion\\s*=\\s*['\"]2['\"]",
          feedbackWhenMissing: "Guarda la opción elegida en la variable `opcion`."
        },
        {
          id: "checks-second-option",
          label: "Compara la opción con `if` o `elif`",
          pattern: "(if|elif)\\s+opcion\\s*==\\s*['\"]2['\"]\\s*:",
          feedbackWhenMissing: "Usa una condición para comparar la opción con `'2'`."
        },
        {
          id: "calls-tip-function",
          label: "Llama a `mostrar_consejo()`",
          pattern: "mostrar_consejo\\(\\)",
          feedbackWhenMissing: "Cuando la opción corresponde, llama a `mostrar_consejo()`."
        }
      ],
      orderedPatternIds: ["defines-greeting", "defines-tip", "prints-menu-options", "stores-option", "checks-second-option", "calls-tip-function"]
    }
  },
  {
    slug: "build-habit-tracker-project",
    title: "Construye un rastreador simple de hábitos",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "guided-projects",
    lessonSlug: "guided-project-habit-tracker",
    order: 3,
    duration: "12 min",
    summary: "Crea un programa que recorra hábitos guardados en diccionarios y muestre si cada uno está completo o pendiente.",
    prompt:
      "Escribe un programa que cree una lista `habitos` con dos diccionarios: `{'nombre': 'Leer', 'hecho': 'si'}` y `{'nombre': 'Practicar Python', 'hecho': 'no'}`. Después, usa un bucle para imprimir `nombre + ': completo'` si `hecho` es `si`, o `nombre + ': pendiente'` en caso contrario, y termina con `Revisión terminada`.",
    responseLabel: "Tu rastreador de hábitos",
    responsePlaceholder:
      "habitos = [\n    {'nombre': 'Leer', 'hecho': 'si'},\n    {'nombre': 'Practicar Python', 'hecho': 'no'}\n]\n\nfor habito in habitos:\n    if habito['hecho'] == 'si':\n        print(habito['nombre'] + ': completo')\n    else:\n        print(habito['nombre'] + ': pendiente')\n\nprint('Revisión terminada')",
    instructions: [
      "Crea la lista con dos diccionarios.",
      "Usa un bucle para recorrer los hábitos.",
      "Compara la clave `hecho`.",
      "Imprime un cierre final fuera del bucle."
    ],
    hints: [
      "Cada vuelta del bucle trabaja con un diccionario llamado `habito`.",
      "Puedes acceder a los datos con `habito['nombre']` y `habito['hecho']`.",
      "La salida correcta debería mostrar dos líneas de estado y una línea final."
    ],
    starterCode:
      "habitos = [\n    {'nombre': 'Leer', 'hecho': 'si'},\n    {'nombre': 'Practicar Python', 'hecho': 'no'}\n]\n\nfor habito in habitos:\n    if habito['hecho'] == 'si':\n        print(habito['nombre'] + ': completo')\n    else:\n        print(habito['nombre'] + ': pendiente')\n\nprint('Revisión terminada')",
    successCriteria: [
      "Crea la lista con diccionarios.",
      "Recorre la lista con un bucle.",
      "Muestra el estado correcto de cada hábito.",
      "Imprime un cierre final una sola vez."
    ],
    playground: {
      title: "Ejecuta el rastreador de hábitos",
      guidance: "Corre el programa y observa el patrón completo. Luego cambia un estado o un nombre para ver cómo el recorrido se adapta sin rehacer toda la lógica.",
      starterCode:
        "habitos = [\n    {'nombre': 'Leer', 'hecho': 'si'},\n    {'nombre': 'Practicar Python', 'hecho': 'no'}\n]\n\nfor habito in habitos:\n    if habito['hecho'] == 'si':\n        print(habito['nombre'] + ': completo')\n    else:\n        print(habito['nombre'] + ': pendiente')\n\nprint('Revisión terminada')",
      emptyOutputHint: "La salida debería mostrar el estado de cada hábito y luego cerrar con `Revisión terminada`."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Leer: completo\nPracticar Python: pendiente\nRevisión terminada"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 220,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "creates-habit-list",
          label: "Crea la lista `habitos` con dos diccionarios",
          pattern: "habitos\\s*=\\s*\\[[\\s\\S]*['\"]nombre['\"]\\s*:\\s*['\"]Leer['\"][\\s\\S]*['\"]hecho['\"]\\s*:\\s*['\"]si['\"][\\s\\S]*['\"]nombre['\"]\\s*:\\s*['\"]Practicar Python['\"][\\s\\S]*['\"]hecho['\"]\\s*:\\s*['\"]no['\"][\\s\\S]*\\]",
          feedbackWhenMissing: "Crea la lista `habitos` con los dos diccionarios pedidos."
        },
        {
          id: "loops-habits",
          label: "Usa un bucle para recorrer `habitos`",
          pattern: "for\\s+habito\\s+in\\s+habitos\\s*:",
          feedbackWhenMissing: "Usa `for habito in habitos:` para recorrer la lista."
        },
        {
          id: "checks-status",
          label: "Compara `habito['hecho']` con `si`",
          pattern: "if\\s+habito\\[['\"]hecho['\"]\\]\\s*==\\s*['\"]si['\"]\\s*:",
          feedbackWhenMissing: "Compara la clave `hecho` para decidir qué mensaje mostrar."
        },
        {
          id: "prints-complete",
          label: "Imprime el estado completo",
          pattern: "print\\(\\s*habito\\[['\"]nombre['\"]\\]\\s*\\+\\s*['\"]: completo['\"]\\s*\\)",
          feedbackWhenMissing: "Cuando el hábito esté hecho, imprime `nombre + ': completo'`."
        },
        {
          id: "prints-pending",
          label: "Imprime el estado pendiente",
          pattern: "print\\(\\s*habito\\[['\"]nombre['\"]\\]\\s*\\+\\s*['\"]: pendiente['\"]\\s*\\)",
          feedbackWhenMissing: "En el otro caso, imprime `nombre + ': pendiente'`."
        },
        {
          id: "prints-final-line",
          label: "Cierra con `Revisión terminada`",
          pattern: "print\\(\\s*['\"]Revisión terminada['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega una línea final con `Revisión terminada` fuera del bucle."
        }
      ],
      orderedPatternIds: ["creates-habit-list", "loops-habits", "checks-status", "prints-complete", "prints-pending", "prints-final-line"]
    }
  },
  {
    slug: "fix-consolidation-task-review",
    title: "Corrige una revisión de tareas",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "practice-consolidation",
    lessonSlug: "consolidation-read-and-fix-flow",
    order: 1,
    duration: "10 min",
    summary: "Corrige un programa corto que revisa tareas para que vuelva a mostrar el estado correcto de cada una.",
    prompt:
      "Escribe un programa que cree la lista `tareas` con dos diccionarios, defina `mostrar_estado(tareas)`, use `if tarea['hecha'] == 'si'` para imprimir `lista` o `pendiente`, y termine con `Revisión completa` fuera del bucle.",
    responseLabel: "Tu corrección del programa",
    responsePlaceholder:
      "tareas = [\n    {'nombre': 'Leer', 'hecha': 'si'},\n    {'nombre': 'Practicar Python', 'hecha': 'no'}\n]\n\ndef mostrar_estado(tareas):\n    for tarea in tareas:\n        if tarea['hecha'] == 'si':\n            print(tarea['nombre'] + ': lista')\n        else:\n            print(tarea['nombre'] + ': pendiente')\n    print('Revisión completa')\n\nmostrar_estado(tareas)",
    instructions: [
      "Crea la lista `tareas` con dos diccionarios.",
      "Usa la clave `hecha` dentro del `if`.",
      "Imprime el cierre final fuera del bucle.",
      "Llama a la función al final."
    ],
    hints: [
      "La comparación correcta es `tarea['hecha'] == 'si'`.",
      "La línea `print('Revisión completa')` debe ir después del bucle, no dentro.",
      "La función debe ejecutarse con `mostrar_estado(tareas)`."
    ],
    starterCode:
      "tareas = [\n    {'nombre': 'Leer', 'hecha': 'si'},\n    {'nombre': 'Practicar Python', 'hecha': 'no'}\n]\n\ndef mostrar_estado(tareas):\n    for tarea in tareas:\n        if tarea['hecha'] == 'si':\n            print(tarea['nombre'] + ': lista')\n        else:\n            print(tarea['nombre'] + ': pendiente')\n    print('Revisión completa')\n\nmostrar_estado(tareas)",
    successCriteria: [
      "Usa correctamente la clave `hecha`.",
      "Muestra el estado de ambas tareas.",
      "Imprime un único cierre final."
    ],
    playground: {
      title: "Ejecuta la revisión corregida",
      guidance: "Corre el programa y verifica que cada tarea tenga su estado y que el cierre aparezca una sola vez al final.",
      starterCode:
        "tareas = [\n    {'nombre': 'Leer', 'hecha': 'si'},\n    {'nombre': 'Practicar Python', 'hecha': 'no'}\n]\n\ndef mostrar_estado(tareas):\n    for tarea in tareas:\n        if tarea['hecha'] == 'si':\n            print(tarea['nombre'] + ': lista')\n        else:\n            print(tarea['nombre'] + ': pendiente')\n    print('Revisión completa')\n\nmostrar_estado(tareas)",
      emptyOutputHint: "La salida correcta debería mostrar dos estados y una sola línea final."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Leer: lista\nPracticar Python: pendiente\nRevisión completa"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 220,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "creates-task-list",
          label: "Crea la lista `tareas`",
          pattern: "tareas\\s*=\\s*\\[[\\s\\S]*['\"]nombre['\"]\\s*:\\s*['\"]Leer['\"][\\s\\S]*['\"]hecha['\"]\\s*:\\s*['\"]si['\"][\\s\\S]*['\"]nombre['\"]\\s*:\\s*['\"]Practicar Python['\"][\\s\\S]*['\"]hecha['\"]\\s*:\\s*['\"]no['\"][\\s\\S]*\\]",
          feedbackWhenMissing: "Crea la lista `tareas` con los dos diccionarios pedidos."
        },
        {
          id: "defines-review-function",
          label: "Define `mostrar_estado(tareas)`",
          pattern: "def\\s+mostrar_estado\\(tareas\\)\\s*:",
          feedbackWhenMissing: "Define la función `mostrar_estado(tareas)`."
        },
        {
          id: "loops-tasks",
          label: "Recorre las tareas con un bucle",
          pattern: "for\\s+tarea\\s+in\\s+tareas\\s*:",
          feedbackWhenMissing: "Usa `for tarea in tareas:` para recorrer la lista."
        },
        {
          id: "checks-hecha",
          label: "Compara la clave `hecha`",
          pattern: "if\\s+tarea\\[['\"]hecha['\"]\\]\\s*==\\s*['\"]si['\"]\\s*:",
          feedbackWhenMissing: "Compara `tarea['hecha']` con `si`."
        },
        {
          id: "prints-final-review",
          label: "Imprime `Revisión completa`",
          pattern: "print\\(\\s*['\"]Revisión completa['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega una línea final con `Revisión completa`."
        },
        {
          id: "calls-review-function",
          label: "Llama a la función al final",
          pattern: "mostrar_estado\\(tareas\\)",
          feedbackWhenMissing: "No olvides llamar a `mostrar_estado(tareas)`."
        }
      ],
      orderedPatternIds: ["creates-task-list", "defines-review-function", "loops-tasks", "checks-hecha", "prints-final-review", "calls-review-function"]
    }
  },
  {
    slug: "build-plan-from-pieces",
    title: "Construye un plan desde piezas conocidas",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "practice-consolidation",
    lessonSlug: "consolidation-build-from-pieces",
    order: 2,
    duration: "10 min",
    summary: "Combina `input()`, una lista, una función y un bucle para mostrar un plan corto de dos pasos.",
    prompt:
      "Escribe un programa que cree `items` con dos valores obtenidos por `input()`, defina `mostrar_lista(items)`, imprima `Tu plan:` y luego muestre cada elemento precedido por `- `.",
    responseLabel: "Tu programa armado desde piezas",
    responsePlaceholder:
      "items = [input('Primer paso: '), input('Segundo paso: ')]\n\ndef mostrar_lista(items):\n    print('Tu plan:')\n    for item in items:\n        print('- ' + item)\n\nmostrar_lista(items)",
    instructions: [
      "Usa dos llamadas a `input()` dentro de la lista.",
      "Define una función para mostrar los pasos.",
      "Recorre la lista con un bucle.",
      "Llama a la función al final."
    ],
    hints: [
      "La lista puede empezar como `items = [input(...), input(...)]`.",
      "Dentro del bucle, imprime `- ` más el valor actual.",
      "La función debe ejecutarse después de ser definida."
    ],
    starterCode:
      "items = [input('Primer paso: '), input('Segundo paso: ')]\n\ndef mostrar_lista(items):\n    print('Tu plan:')\n    for item in items:\n        print('- ' + item)\n\nmostrar_lista(items)",
    successCriteria: [
      "Pide dos valores con `input()`.",
      "Los guarda en una lista.",
      "Los muestra desde una función con un bucle."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 150,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-input-list",
          label: "Crea `items` con dos `input()`",
          pattern: "items\\s*=\\s*\\[\\s*input\\([^\\)]*\\)\\s*,\\s*input\\([^\\)]*\\)\\s*\\]",
          feedbackWhenMissing: "Crea la lista `items` usando dos llamadas a `input()`."
        },
        {
          id: "defines-list-function",
          label: "Define `mostrar_lista(items)`",
          pattern: "def\\s+mostrar_lista\\(items\\)\\s*:",
          feedbackWhenMissing: "Define la función `mostrar_lista(items)`."
        },
        {
          id: "prints-plan-title",
          label: "Imprime `Tu plan:`",
          pattern: "print\\(\\s*['\"]Tu plan:['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro de la función, imprime el título `Tu plan:`."
        },
        {
          id: "loops-items",
          label: "Recorre `items` con un bucle",
          pattern: "for\\s+item\\s+in\\s+items\\s*:",
          feedbackWhenMissing: "Usa `for item in items:` para recorrer los pasos."
        },
        {
          id: "prints-bullets",
          label: "Imprime cada paso con `- `",
          pattern: "print\\(\\s*['\"]- ['\"]\\s*\\+\\s*item\\s*\\)",
          feedbackWhenMissing: "Imprime cada paso precedido por `- `."
        }
      ],
      orderedPatternIds: ["creates-input-list", "defines-list-function", "prints-plan-title", "loops-items", "prints-bullets"]
    }
  },
  {
    slug: "build-foundation-summary",
    title: "Construye un resumen de base completada",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "practice-consolidation",
    lessonSlug: "consolidation-combine-data-and-decisions",
    order: 3,
    duration: "11 min",
    summary: "Recorre registros simples, decide qué mensaje mostrar y cierra con una línea que marque el final de la base.",
    prompt:
      "Escribe un programa que cree `registros` con dos diccionarios (`Lectura/hecho` y `Python/pendiente`), recorra la lista, imprima `: listo` o `: por hacer` según el estado, y termine con `Base completada`.",
    responseLabel: "Tu resumen final",
    responsePlaceholder:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': por hacer')\n\nprint('Base completada')",
    instructions: [
      "Crea la lista `registros` con dos diccionarios.",
      "Usa un bucle para recorrerla.",
      "Compara la clave `estado`.",
      "Imprime la línea final fuera del bucle."
    ],
    hints: [
      "Cada registro tiene `nombre` y `estado`.",
      "La comparación principal es `registro['estado'] == 'hecho'`.",
      "La línea `Base completada` debe aparecer una sola vez al final."
    ],
    starterCode:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': por hacer')\n\nprint('Base completada')",
    successCriteria: [
      "Crea los registros pedidos.",
      "Muestra el estado correcto de cada uno.",
      "Cierra con `Base completada`."
    ],
    playground: {
      title: "Ejecuta el resumen final",
      guidance: "Corre el programa y revisa la salida de principio a fin. Luego cambia un estado para ver cómo la condición cambia solo la parte necesaria.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': por hacer')\n\nprint('Base completada')",
      emptyOutputHint: "La salida debería mostrar un resumen por registro y luego la línea `Base completada`."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Lectura: listo\nPython: por hacer\nBase completada"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 210,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-record-list",
          label: "Crea la lista `registros`",
          pattern: "registros\\s*=\\s*\\[[\\s\\S]*['\"]nombre['\"]\\s*:\\s*['\"]Lectura['\"][\\s\\S]*['\"]estado['\"]\\s*:\\s*['\"]hecho['\"][\\s\\S]*['\"]nombre['\"]\\s*:\\s*['\"]Python['\"][\\s\\S]*['\"]estado['\"]\\s*:\\s*['\"]pendiente['\"][\\s\\S]*\\]",
          feedbackWhenMissing: "Crea la lista `registros` con los dos diccionarios pedidos."
        },
        {
          id: "loops-records",
          label: "Recorre los registros",
          pattern: "for\\s+registro\\s+in\\s+registros\\s*:",
          feedbackWhenMissing: "Usa `for registro in registros:` para recorrer la lista."
        },
        {
          id: "checks-record-status",
          label: "Compara `registro['estado']`",
          pattern: "if\\s+registro\\[['\"]estado['\"]\\]\\s*==\\s*['\"]hecho['\"]\\s*:",
          feedbackWhenMissing: "Compara la clave `estado` con `hecho`."
        },
        {
          id: "prints-ready-line",
          label: "Imprime `: listo`",
          pattern: "print\\(\\s*registro\\[['\"]nombre['\"]\\]\\s*\\+\\s*['\"]: listo['\"]\\s*\\)",
          feedbackWhenMissing: "Cuando el estado sea `hecho`, imprime `nombre + ': listo'`."
        },
        {
          id: "prints-pending-line",
          label: "Imprime `: por hacer`",
          pattern: "print\\(\\s*registro\\[['\"]nombre['\"]\\]\\s*\\+\\s*['\"]: por hacer['\"]\\s*\\)",
          feedbackWhenMissing: "En el otro caso, imprime `nombre + ': por hacer'`."
        }
      ],
      orderedPatternIds: ["creates-record-list", "loops-records", "checks-record-status", "prints-ready-line", "prints-pending-line"]
    }
  },
  {
    slug: "build-semi-open-profile-organizer",
    title: "Construye un organizador de perfil",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "semi-open-projects",
    lessonSlug: "semi-open-project-profile-organizer",
    order: 1,
    duration: "11 min",
    summary: "Construye un organizador de perfil con un poco más de libertad: debes incluir ciertos datos y una función, pero puedes decidir parte de la presentación.",
    prompt:
      "Crea un programa que use un diccionario `perfil` con las claves `nombre`, `ciudad` y `meta`, defina una función para mostrar esos datos y presente la información de forma ordenada. Puedes elegir el título o el orden exacto de las líneas, siempre que aparezcan los tres datos.",
    responseLabel: "Tu organizador de perfil",
    responsePlaceholder:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar cada día'}\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\nmostrar_perfil(perfil)",
    instructions: [
      "Crea el diccionario con tres claves.",
      "Define una función que lea esos datos.",
      "Muestra nombre, ciudad y meta.",
      "Mantén una salida clara."
    ],
    hints: [
      "No hace falta copiar el ejemplo exacto, pero sí incluir los tres datos.",
      "Una función como `mostrar_perfil(perfil)` ayuda a ordenar el programa.",
      "Puedes personalizar el encabezado si quieres."
    ],
    starterCode:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar cada día'}\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\nmostrar_perfil(perfil)",
    successCriteria: [
      "Crea el diccionario `perfil`.",
      "Usa una función para mostrar los datos.",
      "La salida incluye nombre, ciudad y meta."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 140,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-profile-dict",
          label: "Crea `perfil` con tres claves",
          pattern: "perfil\\s*=\\s*\\{[^\\}]*['\"]nombre['\"]\\s*:[^\\}]*['\"]ciudad['\"]\\s*:[^\\}]*['\"]meta['\"][^\\}]*\\}",
          feedbackWhenMissing: "Crea un diccionario `perfil` con `nombre`, `ciudad` y `meta`."
        },
        {
          id: "defines-profile-function",
          label: "Define una función para mostrar el perfil",
          pattern: "def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\(perfil\\)\\s*:",
          feedbackWhenMissing: "Define una función que reciba `perfil` para mostrar los datos."
        },
        {
          id: "reads-name",
          label: "Lee `perfil['nombre']`",
          pattern: "perfil\\[['\"]nombre['\"]\\]",
          feedbackWhenMissing: "Dentro del programa, usa la clave `nombre`."
        },
        {
          id: "reads-city",
          label: "Lee `perfil['ciudad']`",
          pattern: "perfil\\[['\"]ciudad['\"]\\]",
          feedbackWhenMissing: "Dentro del programa, usa la clave `ciudad`."
        },
        {
          id: "reads-goal",
          label: "Lee `perfil['meta']`",
          pattern: "perfil\\[['\"]meta['\"]\\]",
          feedbackWhenMissing: "Dentro del programa, usa la clave `meta`."
        }
      ],
      orderedPatternIds: ["creates-profile-dict", "defines-profile-function", "reads-name", "reads-city", "reads-goal"]
    }
  },
  {
    slug: "build-semi-open-menu-tool",
    title: "Construye una herramienta simple con menú",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "semi-open-projects",
    lessonSlug: "semi-open-project-menu-record-tool",
    order: 2,
    duration: "12 min",
    summary: "Crea una herramienta con menú donde decides parte de los mensajes, pero mantienes dos opciones claras y una respuesta válida para cada una.",
    prompt:
      "Escribe un programa con dos funciones distintas, un menú con dos opciones visibles, una variable `opcion` y una condición que ejecute una función para la primera opción y otra para la segunda. Puedes elegir los mensajes exactos, pero debe quedar claro qué responde el programa en cada caso.",
    responseLabel: "Tu herramienta con menú",
    responsePlaceholder:
      "def ver_resumen():\n    print('Resumen listo')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar un paso a la vez')\n\nprint('A. Resumen')\nprint('B. Recordatorio')\nopcion = 'B'\n\nif opcion == 'A':\n    ver_resumen()\nelif opcion == 'B':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
    instructions: [
      "Define dos funciones con respuestas distintas.",
      "Muestra dos opciones visibles.",
      "Guarda una elección en `opcion`.",
      "Usa una condición para responder."
    ],
    hints: [
      "No necesitas copiar los nombres del ejemplo, pero sí dos caminos distintos.",
      "La comparación puede ser con letras o números, siempre que sea clara.",
      "Agrega un caso no válido para que el flujo quede más completo."
    ],
    starterCode:
      "def ver_resumen():\n    print('Resumen listo')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar un paso a la vez')\n\nprint('A. Resumen')\nprint('B. Recordatorio')\nopcion = 'B'\n\nif opcion == 'A':\n    ver_resumen()\nelif opcion == 'B':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
    successCriteria: [
      "Define dos funciones.",
      "Muestra dos opciones visibles.",
      "Usa una variable y una condición para decidir."
    ],
    playground: {
      title: "Ejecuta tu herramienta con menú",
      guidance: "Corre el proyecto y prueba cambiar la opción. Lo importante es que cada camino siga siendo claro aunque cambies mensajes o nombres.",
      starterCode:
        "def ver_resumen():\n    print('Resumen listo')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar un paso a la vez')\n\nprint('A. Resumen')\nprint('B. Recordatorio')\nopcion = 'B'\n\nif opcion == 'A':\n    ver_resumen()\nelif opcion == 'B':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
      emptyOutputHint: "La salida debería mostrar el menú y una respuesta según la opción elegida."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["A. Resumen\nB. Recordatorio\nRecuerda avanzar un paso a la vez"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 180,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-first-function",
          label: "Define una primera función",
          pattern: "def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\(\\)\\s*:",
          feedbackWhenMissing: "Define al menos una función para responder a una opción."
        },
        {
          id: "defines-second-function",
          label: "Define una segunda función",
          pattern: "def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\(\\)\\s*:[\\s\\S]*def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\(\\)\\s*:",
          feedbackWhenMissing: "Define dos funciones distintas para responder al menú."
        },
        {
          id: "prints-two-options",
          label: "Muestra dos opciones del menú",
          pattern: "print\\([\\s\\S]*\\)[\\s\\S]*print\\([\\s\\S]*\\)",
          feedbackWhenMissing: "Muestra dos opciones visibles en pantalla."
        },
        {
          id: "stores-choice",
          label: "Guarda la elección en `opcion`",
          pattern: "opcion\\s*=\\s*['\"][A-Za-z0-9]['\"]",
          feedbackWhenMissing: "Guarda una elección en la variable `opcion`."
        },
        {
          id: "uses-conditional-flow",
          label: "Usa un flujo con `if` y `elif` o `else`",
          pattern: "if\\s+opcion\\s*==[\\s\\S]*(elif|else)",
          feedbackWhenMissing: "Usa una condición para responder según la opción elegida."
        }
      ],
      orderedPatternIds: ["defines-first-function", "defines-second-function", "prints-two-options", "stores-choice", "uses-conditional-flow"]
    }
  },
  {
    slug: "build-semi-open-summary-generator",
    title: "Construye un generador de resumen",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "semi-open-projects",
    lessonSlug: "semi-open-project-summary-generator",
    order: 3,
    duration: "12 min",
    summary: "Genera un resumen a partir de datos simples con cierta libertad en el estilo de salida, manteniendo una estructura mínima y un cierre claro.",
    prompt:
      "Crea un programa que use una lista `registros` con al menos dos diccionarios, recorra esos datos con un bucle, compare un estado y muestre un resumen final. Puedes decidir parte del encabezado y de los textos, pero el programa debe distinguir entre dos estados y cerrar con una línea final.",
    responseLabel: "Tu generador de resumen",
    responsePlaceholder:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('--- RESUMEN ---')\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': en curso')\nprint('Resumen generado')",
    instructions: [
      "Crea la lista con dos registros como mínimo.",
      "Usa un bucle para recorrerla.",
      "Compara un estado dentro del recorrido.",
      "Agrega un encabezado o un cierre visible."
    ],
    hints: [
      "Puedes usar claves como `nombre` y `estado` para mantenerlo simple.",
      "No hace falta una salida idéntica al ejemplo, pero sí una estructura clara.",
      "La línea final debería aparecer una sola vez."
    ],
    starterCode:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('--- RESUMEN ---')\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': en curso')\nprint('Resumen generado')",
    successCriteria: [
      "Usa una lista con datos estructurados.",
      "Recorre los registros con un bucle.",
      "Distingue entre dos estados.",
      "Cierra con una línea final visible."
    ],
    playground: {
      title: "Ejecuta tu generador de resumen",
      guidance: "Corre el proyecto y prueba cambiar algunos textos. La meta es mantener una salida coherente aunque tomes pequeñas decisiones propias.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('--- RESUMEN ---')\nfor registro in registros:\n    if registro['estado'] == 'hecho':\n        print(registro['nombre'] + ': listo')\n    else:\n        print(registro['nombre'] + ': en curso')\nprint('Resumen generado')",
      emptyOutputHint: "La salida debería mostrar un encabezado, un resumen por registro y un cierre final."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["--- RESUMEN ---\nLectura: listo\nPython: en curso\nResumen generado"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 200,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-records",
          label: "Crea una lista `registros`",
          pattern: "registros\\s*=\\s*\\[[\\s\\S]*\\]",
          feedbackWhenMissing: "Crea una lista `registros` con datos estructurados."
        },
        {
          id: "loops-records",
          label: "Recorre la lista con un bucle",
          pattern: "for\\s+registro\\s+in\\s+registros\\s*:",
          feedbackWhenMissing: "Usa `for registro in registros:` para recorrer los datos."
        },
        {
          id: "checks-status",
          label: "Compara un estado",
          pattern: "if\\s+registro\\[['\"]estado['\"]\\]\\s*==\\s*['\"][^'\"]+['\"]\\s*:",
          feedbackWhenMissing: "Compara una clave `estado` para distinguir entre dos casos."
        },
        {
          id: "prints-name-based-line",
          label: "Imprime líneas usando `registro['nombre']`",
          pattern: "registro\\[['\"]nombre['\"]\\]",
          feedbackWhenMissing: "Usa `registro['nombre']` al construir el resumen."
        },
        {
          id: "prints-final-summary-line",
          label: "Agrega una línea final de cierre",
          pattern: "print\\(\\s*['\"][^'\"]+['\"]\\s*\\)\\s*$",
          feedbackWhenMissing: "Termina el programa con una línea final visible."
        }
      ],
      orderedPatternIds: ["creates-records", "loops-records", "checks-status", "prints-name-based-line", "prints-final-summary-line"]
    }
  },
  {
    slug: "build-freeform-habit-register",
    title: "Construye un registro simple de hábitos",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "early-freeform-projects",
    lessonSlug: "freeform-project-habit-register",
    order: 1,
    duration: "12 min",
    summary: "Resuelve un brief de registro de hábitos con más libertad de estructura, manteniendo requisitos y un resultado claro.",
    prompt:
      "Brief: crea un pequeño registro con al menos dos hábitos usando datos estructurados. Requisitos: debes recorrer los hábitos, distinguir entre un estado positivo y otro pendiente, y cerrar con una línea final visible. Puedes decidir el encabezado y parte de los textos.",
    responseLabel: "Tu registro de hábitos",
    responsePlaceholder:
      "habitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Caminar', 'estado': 'pendiente'}\n]\n\nprint('=== REGISTRO ===')\nfor habito in habitos:\n    if habito['estado'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\nprint('Registro terminado')",
    instructions: [
      "Usa una lista con al menos dos hábitos.",
      "Cada hábito debe guardar nombre y estado.",
      "Recorre los hábitos con un bucle.",
      "Muestra un cierre final."
    ],
    hints: [
      "Una lista de diccionarios sigue siendo una buena estructura para este problema.",
      "No necesitas una salida idéntica al ejemplo, pero sí distinguir entre dos estados.",
      "La línea final debe aparecer una sola vez."
    ],
    starterCode:
      "habitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Caminar', 'estado': 'pendiente'}\n]\n\nprint('=== REGISTRO ===')\nfor habito in habitos:\n    if habito['estado'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\nprint('Registro terminado')",
    successCriteria: [
      "Usa datos estructurados.",
      "Recorre los hábitos y distingue dos estados.",
      "Muestra un encabezado o cierre visible."
    ],
    playground: {
      title: "Ejecuta tu registro de hábitos",
      guidance: "Corre tu solución y prueba cambiar mensajes o estados. La clave es que el brief siga bien resuelto aunque el estilo varíe.",
      starterCode:
        "habitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Caminar', 'estado': 'pendiente'}\n]\n\nprint('=== REGISTRO ===')\nfor habito in habitos:\n    if habito['estado'] == 'hecho':\n        print(habito['nombre'] + ': listo')\n    else:\n        print(habito['nombre'] + ': por hacer')\nprint('Registro terminado')",
      emptyOutputHint: "La salida debería mostrar el estado de los hábitos y una línea final."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["=== REGISTRO ===\nLeer: listo\nCaminar: por hacer\nRegistro terminado"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 190,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-habit-data",
          label: "Crea datos de hábitos estructurados",
          pattern: "habitos\\s*=\\s*\\[[\\s\\S]*['\"]nombre['\"][\\s\\S]*['\"]estado['\"][\\s\\S]*\\]",
          feedbackWhenMissing: "Crea una lista `habitos` con datos estructurados."
        },
        {
          id: "loops-habit-data",
          label: "Recorre los hábitos con un bucle",
          pattern: "for\\s+habito\\s+in\\s+habitos\\s*:",
          feedbackWhenMissing: "Usa un bucle para recorrer la lista `habitos`."
        },
        {
          id: "checks-habit-state",
          label: "Compara el estado de cada hábito",
          pattern: "if\\s+habito\\[['\"]estado['\"]\\]\\s*==\\s*['\"][^'\"]+['\"]\\s*:",
          feedbackWhenMissing: "Compara la clave `estado` para distinguir entre dos casos."
        },
        {
          id: "uses-habit-name",
          label: "Usa el nombre del hábito en la salida",
          pattern: "habito\\[['\"]nombre['\"]\\]",
          feedbackWhenMissing: "Construye la salida usando `habito['nombre']`."
        },
        {
          id: "adds-final-line",
          label: "Agrega una línea final visible",
          pattern: "print\\(\\s*['\"][^'\"]+['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega un encabezado o una línea final visible para cerrar el registro."
        }
      ],
      orderedPatternIds: ["creates-habit-data", "loops-habit-data", "checks-habit-state", "uses-habit-name", "adds-final-line"]
    }
  },
  {
    slug: "build-freeform-menu-helper",
    title: "Construye una herramienta de menú más libre",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "early-freeform-projects",
    lessonSlug: "freeform-project-menu-helper",
    order: 2,
    duration: "13 min",
    summary: "Resuelve un brief de menú con varias opciones y respuestas distintas, tomando más decisiones sobre nombres y mensajes.",
    prompt:
      "Brief: crea una mini herramienta con menú. Requisitos: debe mostrar al menos dos opciones visibles, usar funciones para responder, guardar una elección en una variable y ejecutar una respuesta distinta según la opción. Puedes decidir nombres, textos y formato.",
    responseLabel: "Tu herramienta con menú",
    responsePlaceholder:
      "def ver_estado():\n    print('Tu estado actual es estable')\n\ndef ver_siguiente_paso():\n    print('Siguiente paso: repasar una lección')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar sin prisa')\n\nprint('1. Estado')\nprint('2. Siguiente paso')\nprint('3. Recordatorio')\nopcion = '2'\n\nif opcion == '1':\n    ver_estado()\nelif opcion == '2':\n    ver_siguiente_paso()\nelif opcion == '3':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
    instructions: [
      "Muestra varias opciones visibles.",
      "Define funciones para las respuestas.",
      "Guarda una elección.",
      "Usa condiciones para decidir qué camino seguir."
    ],
    hints: [
      "Puedes usar números o letras como opciones, pero deben coincidir con las comparaciones.",
      "No hace falta una solución idéntica al ejemplo si el flujo está bien resuelto.",
      "Agregar un caso no válido suele mejorar la claridad."
    ],
    starterCode:
      "def ver_estado():\n    print('Tu estado actual es estable')\n\ndef ver_siguiente_paso():\n    print('Siguiente paso: repasar una lección')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar sin prisa')\n\nprint('1. Estado')\nprint('2. Siguiente paso')\nprint('3. Recordatorio')\nopcion = '2'\n\nif opcion == '1':\n    ver_estado()\nelif opcion == '2':\n    ver_siguiente_paso()\nelif opcion == '3':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
    successCriteria: [
      "Muestra varias opciones.",
      "Usa funciones para responder.",
      "La elección del usuario cambia el resultado."
    ],
    playground: {
      title: "Ejecuta tu herramienta de menú",
      guidance: "Corre tu solución y cambia la opción. Lo importante es que cada camino del programa siga siendo claro aunque cambies nombres o mensajes.",
      starterCode:
        "def ver_estado():\n    print('Tu estado actual es estable')\n\ndef ver_siguiente_paso():\n    print('Siguiente paso: repasar una lección')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar sin prisa')\n\nprint('1. Estado')\nprint('2. Siguiente paso')\nprint('3. Recordatorio')\nopcion = '2'\n\nif opcion == '1':\n    ver_estado()\nelif opcion == '2':\n    ver_siguiente_paso()\nelif opcion == '3':\n    ver_recordatorio()\nelse:\n    print('Opción no válida')",
      emptyOutputHint: "La salida debería mostrar el menú y luego la respuesta correspondiente a la opción elegida."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: [
        "1. Estado\n2. Siguiente paso\n3. Recordatorio\nSiguiente paso: repasar una lección"
      ],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 230,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-multiple-functions",
          label: "Define varias funciones",
          pattern: "def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\(\\)\\s*:[\\s\\S]*def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\(\\)\\s*:",
          feedbackWhenMissing: "Define al menos dos funciones para responder al menú."
        },
        {
          id: "prints-several-options",
          label: "Muestra varias opciones visibles",
          pattern: "print\\([\\s\\S]*\\)[\\s\\S]*print\\([\\s\\S]*\\)",
          feedbackWhenMissing: "Muestra al menos dos opciones visibles en pantalla."
        },
        {
          id: "stores-menu-choice",
          label: "Guarda una elección en `opcion`",
          pattern: "opcion\\s*=\\s*['\"][A-Za-z0-9]['\"]",
          feedbackWhenMissing: "Guarda la elección en una variable llamada `opcion`."
        },
        {
          id: "uses-conditional-branches",
          label: "Usa un flujo condicional con varias ramas",
          pattern: "if\\s+opcion\\s*==[\\s\\S]*(elif|else)",
          feedbackWhenMissing: "Usa `if` y al menos otra rama para responder a la opción."
        },
        {
          id: "calls-menu-function",
          label: "Llama a una función en alguna rama",
          pattern: "[a-zA-Z_][a-zA-Z0-9_]*\\(\\)",
          feedbackWhenMissing: "Asegúrate de ejecutar funciones dentro del flujo del menú."
        }
      ],
      orderedPatternIds: ["defines-multiple-functions", "prints-several-options", "stores-menu-choice", "uses-conditional-branches", "calls-menu-function"]
    }
  },
  {
    slug: "build-freeform-report-generator",
    title: "Construye un generador de reporte más libre",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "early-freeform-projects",
    lessonSlug: "freeform-project-report-generator",
    order: 3,
    duration: "13 min",
    summary: "Resuelve un brief de reporte usando datos estructurados, una condición principal y un cierre visible, con más libertad sobre el estilo final.",
    prompt:
      "Brief: crea un pequeño reporte con al menos dos registros. Requisitos: debes recorrer los registros, distinguir entre dos estados, mostrar el nombre de cada elemento y cerrar con una línea final visible. Puedes decidir encabezado, mensajes y formato general.",
    responseLabel: "Tu generador de reporte",
    responsePlaceholder:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('== REPORTE ==')\nfor registro in registros:\n    if registro['estado'] == 'bien':\n        print(registro['nombre'] + ': en buen camino')\n    else:\n        print(registro['nombre'] + ': necesita atención')\nprint('Reporte listo')",
    instructions: [
      "Usa una lista con al menos dos registros.",
      "Cada registro debe tener nombre y estado.",
      "Recorre la lista y clasifica cada caso.",
      "Agrega una línea final de cierre."
    ],
    hints: [
      "No hace falta copiar exactamente el ejemplo si cumples el brief.",
      "Una sola condición principal alcanza para mantener el proyecto en nivel principiante.",
      "El cierre final debe aparecer una sola vez."
    ],
    starterCode:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('== REPORTE ==')\nfor registro in registros:\n    if registro['estado'] == 'bien':\n        print(registro['nombre'] + ': en buen camino')\n    else:\n        print(registro['nombre'] + ': necesita atención')\nprint('Reporte listo')",
    successCriteria: [
      "Usa datos estructurados.",
      "Recorre y clasifica cada registro.",
      "Muestra un cierre visible al final."
    ],
    playground: {
      title: "Ejecuta tu generador de reporte",
      guidance: "Corre tu solución y luego cambia algunos textos. La idea es mantener el brief resuelto aunque el estilo de salida sea un poco más propio.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\nprint('== REPORTE ==')\nfor registro in registros:\n    if registro['estado'] == 'bien':\n        print(registro['nombre'] + ': en buen camino')\n    else:\n        print(registro['nombre'] + ': necesita atención')\nprint('Reporte listo')",
      emptyOutputHint: "La salida debería mostrar un encabezado, una línea por registro y un cierre final."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: [
        "== REPORTE ==\nLectura: en buen camino\nPython: necesita atención\nReporte listo"
      ],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 200,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "creates-report-records",
          label: "Crea registros estructurados",
          pattern: "registros\\s*=\\s*\\[[\\s\\S]*['\"]nombre['\"][\\s\\S]*['\"]estado['\"][\\s\\S]*\\]",
          feedbackWhenMissing: "Crea una lista `registros` con datos estructurados."
        },
        {
          id: "loops-report-records",
          label: "Recorre los registros",
          pattern: "for\\s+registro\\s+in\\s+registros\\s*:",
          feedbackWhenMissing: "Usa un bucle para recorrer la lista `registros`."
        },
        {
          id: "checks-report-state",
          label: "Compara el estado del registro",
          pattern: "if\\s+registro\\[['\"]estado['\"]\\]\\s*==\\s*['\"][^'\"]+['\"]\\s*:",
          feedbackWhenMissing: "Compara una clave `estado` para distinguir entre dos casos."
        },
        {
          id: "uses-report-name",
          label: "Usa `registro['nombre']` en la salida",
          pattern: "registro\\[['\"]nombre['\"]\\]",
          feedbackWhenMissing: "Construye la salida usando el nombre de cada registro."
        },
        {
          id: "adds-report-final-line",
          label: "Agrega un cierre final",
          pattern: "print\\(\\s*['\"][^'\"]+['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega un encabezado o una línea final visible para cerrar el reporte."
        }
      ],
      orderedPatternIds: ["creates-report-records", "loops-report-records", "checks-report-state", "uses-report-name", "adds-report-final-line"]
    }
  },
  {
    slug: "build-capstone-personal-organizer",
    title: "Construye el capstone de organizador personal",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "foundations-capstone",
    lessonSlug: "capstone-personal-organizer",
    order: 1,
    duration: "14 min",
    summary: "Resuelve un proyecto final de fundamentos creando un organizador personal simple con datos estructurados, funciones y un cierre claro.",
    prompt:
      "Brief final: construye un organizador personal simple. Requisitos: usa un diccionario para datos principales, una lista con al menos dos elementos relacionados, al menos dos funciones, una condición para distinguir estados o casos, y una línea final que marque el cierre de la etapa. El estilo exacto de la salida puede variar, pero el programa debe sentirse completo y claro.",
    responseLabel: "Tu capstone de organizador personal",
    responsePlaceholder:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar cada día'}\nhabitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\ndef mostrar_habitos(habitos):\n    print('=== HÁBITOS ===')\n    for habito in habitos:\n        if habito['estado'] == 'hecho':\n            print(habito['nombre'] + ': listo')\n        else:\n            print(habito['nombre'] + ': por hacer')\n\nmostrar_perfil(perfil)\nmostrar_habitos(habitos)\nprint('Base de Python cerrada por hoy')",
    instructions: [
      "Usa un diccionario con datos personales o principales.",
      "Usa una lista con varios elementos relacionados.",
      "Define al menos dos funciones.",
      "Incluye una condición y un cierre final claro."
    ],
    hints: [
      "No necesitas copiar exactamente el ejemplo, pero sí cubrir todos los requisitos.",
      "Separar perfil y hábitos en funciones distintas suele ayudar.",
      "El cierre final debería aparecer una sola vez y sentirse importante."
    ],
    starterCode:
      "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar cada día'}\nhabitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\ndef mostrar_habitos(habitos):\n    print('=== HÁBITOS ===')\n    for habito in habitos:\n        if habito['estado'] == 'hecho':\n            print(habito['nombre'] + ': listo')\n        else:\n            print(habito['nombre'] + ': por hacer')\n\nmostrar_perfil(perfil)\nmostrar_habitos(habitos)\nprint('Base de Python cerrada por hoy')",
    successCriteria: [
      "Usa varias bases de Python dentro de un solo programa.",
      "Muestra una organización clara.",
      "Se siente como un proyecto completo de cierre."
    ],
    playground: {
      title: "Ejecuta tu capstone de organizador",
      guidance: "Corre el proyecto y luego ajusta el orden o los mensajes. La meta es conservar un flujo claro y suficientemente completo para cerrar esta etapa.",
      starterCode:
        "perfil = {'nombre': 'Ana', 'ciudad': 'Córdoba', 'meta': 'Practicar cada día'}\nhabitos = [\n    {'nombre': 'Leer', 'estado': 'hecho'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef mostrar_perfil(perfil):\n    print('=== PERFIL ===')\n    print('Nombre:', perfil['nombre'])\n    print('Ciudad:', perfil['ciudad'])\n    print('Meta:', perfil['meta'])\n\ndef mostrar_habitos(habitos):\n    print('=== HÁBITOS ===')\n    for habito in habitos:\n        if habito['estado'] == 'hecho':\n            print(habito['nombre'] + ': listo')\n        else:\n            print(habito['nombre'] + ': por hacer')\n\nmostrar_perfil(perfil)\nmostrar_habitos(habitos)\nprint('Base de Python cerrada por hoy')",
      emptyOutputHint: "La salida debería mostrar secciones claras y una línea final de cierre."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: [
        "=== PERFIL ===\nNombre: Ana\nCiudad: Córdoba\nMeta: Practicar cada día\n=== HÁBITOS ===\nLeer: listo\nPython: por hacer\nBase de Python cerrada por hoy"
      ],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 360,
      passingScore: 7,
      requiredPatterns: [
        {
          id: "creates-profile-data",
          label: "Crea un diccionario principal",
          pattern: "perfil\\s*=\\s*\\{[\\s\\S]*\\}",
          feedbackWhenMissing: "Usa un diccionario principal para organizar datos importantes."
        },
        {
          id: "creates-related-list",
          label: "Crea una lista con varios elementos",
          pattern: "habitos\\s*=\\s*\\[[\\s\\S]*\\]",
          feedbackWhenMissing: "Usa una lista con varios elementos relacionados."
        },
        {
          id: "defines-two-functions",
          label: "Define al menos dos funciones",
          pattern: "def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\([^\\)]*\\)\\s*:[\\s\\S]*def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\([^\\)]*\\)\\s*:",
          feedbackWhenMissing: "Define al menos dos funciones para organizar el proyecto."
        },
        {
          id: "uses-loop",
          label: "Usa un bucle para recorrer la lista",
          pattern: "for\\s+habito\\s+in\\s+habitos\\s*:",
          feedbackWhenMissing: "Recorre la lista con un bucle."
        },
        {
          id: "uses-condition",
          label: "Usa una condición para distinguir estados",
          pattern: "if\\s+habito\\[['\"]estado['\"]\\]\\s*==\\s*['\"][^'\"]+['\"]\\s*:",
          feedbackWhenMissing: "Usa una condición para distinguir al menos dos estados."
        },
        {
          id: "reads-profile-name",
          label: "Lee datos del diccionario principal",
          pattern: "perfil\\[['\"]nombre['\"]\\]",
          feedbackWhenMissing: "Lee al menos una clave del diccionario principal dentro de la salida."
        },
        {
          id: "adds-foundation-close",
          label: "Agrega una línea final de cierre",
          pattern: "print\\(\\s*['\"][^'\"]+['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega una línea final que marque el cierre del proyecto."
        }
      ],
      orderedPatternIds: ["creates-profile-data", "creates-related-list", "defines-two-functions", "uses-loop", "uses-condition", "reads-profile-name", "adds-foundation-close"]
    }
  },
  {
    slug: "build-capstone-menu-report-tool",
    title: "Construye el capstone de menú y reporte",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "foundations-capstone",
    lessonSlug: "capstone-menu-and-report-tool",
    order: 2,
    duration: "15 min",
    summary: "Resuelve un proyecto final que combina menú, funciones, datos estructurados, reporte y cierre de etapa.",
    prompt:
      "Brief final: crea una herramienta con menú y reporte. Requisitos: muestra un menú con más de una opción, usa funciones para organizar respuestas, guarda una elección en una variable, genera un reporte a partir de datos estructurados y cierra con una línea final visible. La implementación puede variar, pero el flujo debe ser claro y funcional.",
    responseLabel: "Tu capstone de menú y reporte",
    responsePlaceholder:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef ver_menu():\n    print('1. Ver reporte')\n    print('2. Ver recordatorio')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar paso a paso')\n\ndef ver_reporte(registros):\n    print('=== REPORTE FINAL ===')\n    for registro in registros:\n        if registro['estado'] == 'bien':\n            print(registro['nombre'] + ': en buen camino')\n        else:\n            print(registro['nombre'] + ': necesita atención')\n\nver_menu()\nopcion = '1'\nif opcion == '1':\n    ver_reporte(registros)\nelse:\n    ver_recordatorio()\nprint('Fundamentos completados')",
    instructions: [
      "Muestra un menú con varias opciones.",
      "Usa funciones para organizar el programa.",
      "Guarda una elección y usa una condición.",
      "Genera un reporte con datos estructurados.",
      "Agrega una línea final de cierre."
    ],
    hints: [
      "Puedes mantener el reporte corto; no necesitas muchos registros.",
      "Separar menú, recordatorio y reporte en funciones distintas suele ayudar bastante.",
      "La línea final debe aparecer una sola vez, después del flujo principal."
    ],
    starterCode:
      "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef ver_menu():\n    print('1. Ver reporte')\n    print('2. Ver recordatorio')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar paso a paso')\n\ndef ver_reporte(registros):\n    print('=== REPORTE FINAL ===')\n    for registro in registros:\n        if registro['estado'] == 'bien':\n            print(registro['nombre'] + ': en buen camino')\n        else:\n            print(registro['nombre'] + ': necesita atención')\n\nver_menu()\nopcion = '1'\nif opcion == '1':\n    ver_reporte(registros)\nelse:\n    ver_recordatorio()\nprint('Fundamentos completados')",
    successCriteria: [
      "Combina varias bases de Python en un flujo único.",
      "El programa se siente más fuerte que un ejercicio normal.",
      "El cierre transmite final de etapa."
    ],
    playground: {
      title: "Ejecuta tu capstone de menú y reporte",
      guidance: "Corre el proyecto, cambia textos del menú o del reporte y verifica que el flujo siga claro y suficientemente completo para cerrar esta primera gran etapa.",
      starterCode:
        "registros = [\n    {'nombre': 'Lectura', 'estado': 'bien'},\n    {'nombre': 'Python', 'estado': 'pendiente'}\n]\n\ndef ver_menu():\n    print('1. Ver reporte')\n    print('2. Ver recordatorio')\n\ndef ver_recordatorio():\n    print('Recuerda avanzar paso a paso')\n\ndef ver_reporte(registros):\n    print('=== REPORTE FINAL ===')\n    for registro in registros:\n        if registro['estado'] == 'bien':\n            print(registro['nombre'] + ': en buen camino')\n        else:\n            print(registro['nombre'] + ': necesita atención')\n\nver_menu()\nopcion = '1'\nif opcion == '1':\n    ver_reporte(registros)\nelse:\n    ver_recordatorio()\nprint('Fundamentos completados')",
      emptyOutputHint: "La salida debería mostrar el menú, una acción principal y una línea final de cierre."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: [
        "1. Ver reporte\n2. Ver recordatorio\n=== REPORTE FINAL ===\nLectura: en buen camino\nPython: necesita atención\nFundamentos completados"
      ],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 320,
      passingScore: 7,
      requiredPatterns: [
        {
          id: "creates-report-data",
          label: "Crea datos estructurados para el reporte",
          pattern: "registros\\s*=\\s*\\[[\\s\\S]*\\]",
          feedbackWhenMissing: "Crea una lista con datos estructurados para el reporte."
        },
        {
          id: "defines-multiple-capstone-functions",
          label: "Define varias funciones",
          pattern: "def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\([^\\)]*\\)\\s*:[\\s\\S]*def\\s+[a-zA-Z_][a-zA-Z0-9_]*\\([^\\)]*\\)\\s*:",
          feedbackWhenMissing: "Define varias funciones para organizar el menú y el reporte."
        },
        {
          id: "prints-menu",
          label: "Muestra un menú con más de una opción",
          pattern: "print\\(\\s*['\"][^'\"]+['\"]\\s*\\)[\\s\\S]*print\\(\\s*['\"][^'\"]+['\"]\\s*\\)",
          feedbackWhenMissing: "Muestra al menos dos opciones visibles en el menú."
        },
        {
          id: "stores-capstone-choice",
          label: "Guarda una elección en `opcion`",
          pattern: "opcion\\s*=\\s*['\"][A-Za-z0-9]['\"]",
          feedbackWhenMissing: "Guarda una elección en la variable `opcion`."
        },
        {
          id: "uses-capstone-conditional",
          label: "Usa una condición para decidir el flujo",
          pattern: "if\\s+opcion\\s*==[\\s\\S]*(else|elif)",
          feedbackWhenMissing: "Usa una condición para decidir qué camino del menú ejecutar."
        },
        {
          id: "loops-report-data",
          label: "Recorre los datos del reporte",
          pattern: "for\\s+registro\\s+in\\s+registros\\s*:",
          feedbackWhenMissing: "Recorre los datos del reporte con un bucle."
        },
        {
          id: "adds-capstone-close",
          label: "Agrega una línea final de cierre",
          pattern: "print\\(\\s*['\"][^'\"]+['\"]\\s*\\)",
          feedbackWhenMissing: "Agrega una línea final visible para cerrar la etapa."
        }
      ],
      orderedPatternIds: ["creates-report-data", "defines-multiple-capstone-functions", "prints-menu", "stores-capstone-choice", "uses-capstone-conditional", "loops-report-data", "adds-capstone-close"]
    }
  },
  {
    slug: "explain-what-a-text-file-does",
    title: "Explica para qué sirve un archivo de texto",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "basic-files",
    lessonSlug: "what-a-file-is",
    order: 1,
    duration: "8 min",
    summary: "Explica con palabras simples qué aporta un archivo de texto a un programa principiante.",
    prompt:
      "En 2 o 3 frases cortas, explica qué es un archivo de texto en Python y por qué hace que un programa se sienta más útil que uno que solo imprime cosas en pantalla.",
    responseLabel: "Tu explicación sobre archivos",
    responsePlaceholder:
      "Un archivo de texto sirve para guardar información fuera del programa. Eso ayuda a recuperar datos después y hace que el programa se sienta más útil.",
    instructions: [
      "Explica que el archivo guarda información.",
      "Aclara que esa información queda fuera del programa.",
      "Relaciona la idea con algo más útil o más real."
    ],
    hints: [
      "Piensa en una nota que no desaparece cuando el programa termina.",
      "No hace falta explicar internamente cómo funciona el sistema de archivos.",
      "Lo importante es la utilidad práctica."
    ],
    starterCode: "with open('nota.txt', 'w') as archivo:\n    archivo.write('Practicar hoy')",
    successCriteria: [
      "Explica que un archivo guarda información.",
      "Menciona que esa información queda fuera del programa.",
      "Conecta la idea con utilidad práctica."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 55,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "stores-info",
          label: "Menciona que el archivo guarda información",
          keywords: ["guardar", "guarda", "guardar datos", "guardar texto", "información"],
          feedbackWhenMissing: "Explica primero que un archivo sirve para guardar información o texto."
        },
        {
          id: "outside-program",
          label: "Aclara que queda fuera del programa",
          keywords: ["fuera", "después", "termina", "cerrar", "recuperar", "volver"],
          feedbackWhenMissing: "Aclara que la información puede seguir estando aunque el programa termine."
        },
        {
          id: "practical-value",
          label: "Conecta la idea con utilidad práctica",
          keywords: ["útil", "real", "nota", "registro", "programa", "herramienta"],
          feedbackWhenMissing: "Agrega por qué eso hace que el programa se sienta más útil o más real."
        }
      ]
    }
  },
  {
    slug: "save-a-note-to-file",
    title: "Guarda una nota en un archivo",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "basic-files",
    lessonSlug: "writing-text-files",
    order: 2,
    duration: "10 min",
    summary: "Escribe un programa pequeño que guarde una nota en un archivo y confirme que la operación salió bien.",
    prompt:
      "Escribe un programa que guarde `mensaje = 'Hoy avancé un paso más'`, abra `avance.txt` en modo escritura, guarde ese texto con `write()` y muestre `Guardado listo` al final.",
    responseLabel: "Tu programa para guardar una nota",
    responsePlaceholder:
      "mensaje = 'Hoy avancé un paso más'\nwith open('avance.txt', 'w') as archivo:\n    archivo.write(mensaje)\n\nprint('Guardado listo')",
    instructions: [
      "Guarda el texto en una variable.",
      "Abre el archivo en modo `w`.",
      "Escribe el texto dentro del bloque.",
      "Muestra una confirmación final."
    ],
    hints: [
      "La forma básica es `with open('avance.txt', 'w') as archivo:`.",
      "Después usa `archivo.write(mensaje)`.",
      "La salida final debería confirmar que el guardado salió bien."
    ],
    starterCode:
      "mensaje = 'Hoy avancé un paso más'\nwith open('avance.txt', 'w') as archivo:\n    archivo.write(mensaje)\n\nprint('Guardado listo')",
    successCriteria: [
      "Usa un archivo en modo escritura.",
      "Guarda el texto correctamente.",
      "Muestra un mensaje final claro."
    ],
    playground: {
      title: "Ejecuta el guardado del archivo",
      guidance: "Corre el programa y cambia el texto de la nota. La meta es sentir que ya puedes dejar información guardada de forma explícita.",
      starterCode:
        "mensaje = 'Hoy avancé un paso más'\nwith open('avance.txt', 'w') as archivo:\n    archivo.write(mensaje)\n\nprint('Guardado listo')",
      emptyOutputHint: "La salida debería mostrar una confirmación de guardado."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Guardado listo"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "stores-message",
          label: "Guarda el mensaje en una variable",
          pattern: "mensaje\\s*=\\s*['\"]Hoy avancé un paso más['\"]",
          feedbackWhenMissing: "Guarda el texto en una variable llamada `mensaje`."
        },
        {
          id: "opens-file-write",
          label: "Abre `avance.txt` en modo `w`",
          pattern: "with\\s+open\\(\\s*['\"]avance\\.txt['\"]\\s*,\\s*['\"]w['\"]\\s*\\)\\s+as\\s+archivo\\s*:",
          feedbackWhenMissing: "Abre `avance.txt` usando `with open(..., 'w') as archivo:`."
        },
        {
          id: "writes-message",
          label: "Escribe el mensaje en el archivo",
          pattern: "archivo\\.write\\(\\s*mensaje\\s*\\)",
          feedbackWhenMissing: "Usa `archivo.write(mensaje)` dentro del bloque."
        },
        {
          id: "prints-save-message",
          label: "Imprime la confirmación final",
          pattern: "print\\(\\s*['\"]Guardado listo['\"]\\s*\\)",
          feedbackWhenMissing: "Termina con `print('Guardado listo')`."
        }
      ],
      orderedPatternIds: ["stores-message", "opens-file-write", "writes-message", "prints-save-message"]
    }
  },
  {
    slug: "read-a-file-and-show-summary",
    title: "Lee un archivo y muestra un resumen",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "basic-files",
    lessonSlug: "reading-files-and-organizing-output",
    order: 3,
    duration: "11 min",
    summary: "Escribe y luego lee un archivo dentro del mismo programa para mostrar un resumen simple y legible.",
    prompt:
      "Escribe un programa que cree `registro.txt`, guarde `Leer\\nPracticar Python`, vuelva a abrir ese archivo en modo lectura, guarde el contenido en `contenido` y luego imprima `Resumen guardado:` seguido del texto leído.",
    responseLabel: "Tu programa de lectura de archivo",
    responsePlaceholder:
      "with open('registro.txt', 'w') as archivo:\n    archivo.write('Leer\\nPracticar Python')\n\nwith open('registro.txt', 'r') as archivo:\n    contenido = archivo.read()\n\nprint('Resumen guardado:')\nprint(contenido)",
    instructions: [
      "Escribe primero el texto en un archivo.",
      "Vuelve a abrir el mismo archivo en modo `r`.",
      "Guarda el resultado en `contenido`.",
      "Muestra un encabezado y luego el texto leído."
    ],
    hints: [
      "Primero abre con `w`, después con `r`.",
      "La lectura simple puede hacerse con `archivo.read()`.",
      "La salida final debería mostrar el título y luego dos líneas de texto."
    ],
    starterCode:
      "with open('registro.txt', 'w') as archivo:\n    archivo.write('Leer\\nPracticar Python')\n\nwith open('registro.txt', 'r') as archivo:\n    contenido = archivo.read()\n\nprint('Resumen guardado:')\nprint(contenido)",
    successCriteria: [
      "Escribe y lee dentro del mismo flujo.",
      "Usa una variable para guardar el contenido leído.",
      "Presenta el resultado con claridad."
    ],
    playground: {
      title: "Ejecuta la lectura del archivo",
      guidance: "Corre el programa completo y luego cambia el contenido guardado. La idea es ver el ciclo entero: escribir, leer y mostrar un pequeño resumen.",
      starterCode:
        "with open('registro.txt', 'w') as archivo:\n    archivo.write('Leer\\nPracticar Python')\n\nwith open('registro.txt', 'r') as archivo:\n    contenido = archivo.read()\n\nprint('Resumen guardado:')\nprint(contenido)",
      emptyOutputHint: "La salida debería mostrar el encabezado y luego el contenido leído desde el archivo."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Resumen guardado:\nLeer\nPracticar Python"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 180,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "writes-file-first",
          label: "Escribe primero en `registro.txt`",
          pattern: "with\\s+open\\(\\s*['\"]registro\\.txt['\"]\\s*,\\s*['\"]w['\"]\\s*\\)\\s+as\\s+archivo\\s*:",
          feedbackWhenMissing: "Primero abre `registro.txt` en modo escritura."
        },
        {
          id: "writes-two-lines",
          label: "Guarda el texto pedido",
          pattern: "archivo\\.write\\(\\s*['\"]Leer\\\\nPracticar Python['\"]\\s*\\)",
          feedbackWhenMissing: "Guarda el texto `Leer\\nPracticar Python` con `write()`."
        },
        {
          id: "reads-file",
          label: "Vuelve a abrir el archivo en modo lectura",
          pattern: "with\\s+open\\(\\s*['\"]registro\\.txt['\"]\\s*,\\s*['\"]r['\"]\\s*\\)\\s+as\\s+archivo\\s*:",
          feedbackWhenMissing: "Después vuelve a abrir `registro.txt` con el modo `r`."
        },
        {
          id: "stores-content",
          label: "Guarda el contenido en `contenido`",
          pattern: "contenido\\s*=\\s*archivo\\.read\\(\\s*\\)",
          feedbackWhenMissing: "Guarda lo leído en una variable `contenido`."
        },
        {
          id: "prints-summary",
          label: "Muestra el resumen final",
          pattern: "print\\(\\s*['\"]Resumen guardado:['\"]\\s*\\)[\\s\\S]*print\\(\\s*contenido\\s*\\)",
          feedbackWhenMissing: "Imprime `Resumen guardado:` y luego la variable `contenido`."
        }
      ],
      orderedPatternIds: ["writes-file-first", "writes-two-lines", "reads-file", "stores-content", "prints-summary"]
    }
  },
  {
    slug: "explain-why-functions-help-organization",
    title: "Explica por qué las funciones ayudan a organizar",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "simple-program-organization",
    lessonSlug: "why-program-organization-matters",
    order: 1,
    duration: "8 min",
    summary: "Explica con palabras simples por qué un programa con más partes puede leerse mejor cuando divide tareas en funciones.",
    prompt:
      "En 2 o 3 frases cortas, explica por qué dividir un programa en funciones claras ayuda cuando el código empieza a crecer.",
    responseLabel: "Tu explicación sobre organización",
    responsePlaceholder:
      "Dividir un programa en funciones ayuda a leer mejor cada parte. También evita que todo quede mezclado en un solo bloque largo.",
    instructions: [
      "Explica que las funciones separan partes del programa.",
      "Menciona que eso ayuda a leer o revisar mejor.",
      "Conecta la idea con programas un poco más grandes."
    ],
    hints: [
      "Piensa en una función como una parte con nombre y objetivo.",
      "No hace falta hablar de arquitectura avanzada.",
      "La claridad es la idea central."
    ],
    starterCode: "def mostrar_titulo():\n    print('=== TU PLAN ===')",
    successCriteria: [
      "Menciona separación de tareas.",
      "Menciona claridad o lectura.",
      "Conecta la idea con crecimiento del programa."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 45,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "separates-work",
          label: "Habla de separar partes del programa",
          keywords: ["separar", "dividir", "partes", "tareas", "funciones"],
          feedbackWhenMissing: "Explica que las funciones sirven para separar partes o tareas del programa."
        },
        {
          id: "improves-readability",
          label: "Conecta con claridad o lectura",
          keywords: ["leer", "claro", "claridad", "orden", "entender", "revisar"],
          feedbackWhenMissing: "Agrega que eso ayuda a leer, revisar o entender mejor el código."
        },
        {
          id: "helps-when-growing",
          label: "Lo relaciona con programas más grandes",
          keywords: ["crece", "grande", "más largo", "más partes", "programa"],
          feedbackWhenMissing: "Conecta la idea con programas que empiezan a crecer o tener más partes."
        }
      ]
    }
  },
  {
    slug: "reuse-a-function-for-multiple-lines",
    title: "Reutiliza una función para varias líneas",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "simple-program-organization",
    lessonSlug: "reusing-functions-with-clear-intent",
    order: 2,
    duration: "10 min",
    summary: "Usa una función con parámetros para mostrar varias líneas de salida sin repetir el mismo bloque completo.",
    prompt:
      "Escribe un programa que defina `mostrar_linea(nombre, estado)`, imprima `nombre + ': ' + estado` dentro de la función y luego la reutilice para mostrar dos líneas: `Lectura: bien` y `Python: pendiente`.",
    responseLabel: "Tu programa con función reutilizable",
    responsePlaceholder:
      "def mostrar_linea(nombre, estado):\n    print(nombre + ': ' + estado)\n\nmostrar_linea('Lectura', 'bien')\nmostrar_linea('Python', 'pendiente')",
    instructions: [
      "Define una función con dos parámetros.",
      "Construye la salida dentro de la función.",
      "Llama a la función dos veces con valores distintos."
    ],
    hints: [
      "La forma básica es `def mostrar_linea(nombre, estado):`.",
      "Dentro puedes usar `print(nombre + ': ' + estado)`.",
      "La salida debería mostrar dos líneas distintas creadas por la misma función."
    ],
    starterCode:
      "def mostrar_linea(nombre, estado):\n    print(nombre + ': ' + estado)\n\nmostrar_linea('Lectura', 'bien')\nmostrar_linea('Python', 'pendiente')",
    successCriteria: [
      "Usa una sola función para más de una línea.",
      "Pasa valores distintos en cada llamada.",
      "Mantiene la salida clara y consistente."
    ],
    playground: {
      title: "Ejecuta la función reutilizable",
      guidance: "Corre el ejemplo y luego agrega una tercera llamada o cambia los valores. La meta es ver que una función bien pensada evita repetir el mismo bloque completo.",
      starterCode:
        "def mostrar_linea(nombre, estado):\n    print(nombre + ': ' + estado)\n\nmostrar_linea('Lectura', 'bien')\nmostrar_linea('Python', 'pendiente')",
      emptyOutputHint: "La salida debería mostrar varias líneas construidas por la misma función."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Lectura: bien\nPython: pendiente"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 120,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "defines-line-function",
          label: "Define `mostrar_linea(nombre, estado)`",
          pattern: "def\\s+mostrar_linea\\(\\s*nombre\\s*,\\s*estado\\s*\\)\\s*:",
          feedbackWhenMissing: "Define la función `mostrar_linea(nombre, estado)`."
        },
        {
          id: "prints-line",
          label: "Imprime `nombre + ': ' + estado`",
          pattern: "print\\(\\s*nombre\\s*\\+\\s*['\"]: ['\"]\\s*\\+\\s*estado\\s*\\)",
          feedbackWhenMissing: "Dentro de la función, imprime `nombre + ': ' + estado`."
        },
        {
          id: "calls-first-line",
          label: "Llama la función con `Lectura` y `bien`",
          pattern: "mostrar_linea\\(\\s*['\"]Lectura['\"]\\s*,\\s*['\"]bien['\"]\\s*\\)",
          feedbackWhenMissing: "Haz una llamada con `Lectura` y `bien`."
        },
        {
          id: "calls-second-line",
          label: "Llama la función con `Python` y `pendiente`",
          pattern: "mostrar_linea\\(\\s*['\"]Python['\"]\\s*,\\s*['\"]pendiente['\"]\\s*\\)",
          feedbackWhenMissing: "Haz otra llamada con `Python` y `pendiente`."
        }
      ],
      orderedPatternIds: ["defines-line-function", "prints-line", "calls-first-line", "calls-second-line"]
    }
  },
  {
    slug: "organize-a-small-program-with-helper-function",
    title: "Organiza un programa pequeño con una función de apoyo",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "simple-program-organization",
    lessonSlug: "first-simple-module-idea",
    order: 3,
    duration: "10 min",
    summary: "Construye un programa corto donde una función de apoyo deja el flujo principal más claro y visible.",
    prompt:
      "Escribe un programa que defina una función `mostrar_bienvenida()` que imprima `Bienvenido a tu plan`, luego imprima `Programa listo` en el flujo principal. La idea es que una parte del programa quede separada y el archivo principal se lea con más claridad.",
    responseLabel: "Tu programa mejor organizado",
    responsePlaceholder:
      "def mostrar_bienvenida():\n    print('Bienvenido a tu plan')\n\nmostrar_bienvenida()\nprint('Programa listo')",
    instructions: [
      "Define una función de apoyo simple.",
      "Llama a esa función desde el flujo principal.",
      "Deja una línea final clara fuera de la función."
    ],
    hints: [
      "No hace falta usar un segundo archivo real para resolver el ejercicio.",
      "La meta es practicar la idea de separar una parte del programa con una función clara.",
      "La salida final debería mostrar primero la bienvenida y luego la línea principal."
    ],
    starterCode:
      "def mostrar_bienvenida():\n    print('Bienvenido a tu plan')\n\nmostrar_bienvenida()\nprint('Programa listo')",
    successCriteria: [
      "Separa una parte del programa en una función.",
      "Mantiene el flujo principal legible.",
      "Muestra una salida corta y ordenada."
    ],
    playground: {
      title: "Ejecuta el programa organizado",
      guidance: "Corre el programa y luego cambia el mensaje de bienvenida o la línea final. Lo importante es que la separación siga dejando el flujo principal más claro.",
      starterCode:
        "def mostrar_bienvenida():\n    print('Bienvenido a tu plan')\n\nmostrar_bienvenida()\nprint('Programa listo')",
      emptyOutputHint: "La salida debería mostrar primero la bienvenida y luego la confirmación principal."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Bienvenido a tu plan\nPrograma listo"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 90,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "defines-helper-function",
          label: "Define `mostrar_bienvenida()`",
          pattern: "def\\s+mostrar_bienvenida\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_bienvenida()`."
        },
        {
          id: "prints-welcome",
          label: "Imprime la bienvenida dentro de la función",
          pattern: "print\\(\\s*['\"]Bienvenido a tu plan['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro de la función, imprime `Bienvenido a tu plan`."
        },
        {
          id: "calls-helper-function",
          label: "Llama la función desde el flujo principal",
          pattern: "mostrar_bienvenida\\(\\)",
          feedbackWhenMissing: "Llama a la función desde el flujo principal."
        },
        {
          id: "prints-main-line",
          label: "Imprime `Programa listo` fuera de la función",
          pattern: "print\\(\\s*['\"]Programa listo['\"]\\s*\\)",
          feedbackWhenMissing: "Deja una línea final con `Programa listo` fuera de la función."
        }
      ],
      orderedPatternIds: ["defines-helper-function", "prints-welcome", "calls-helper-function", "prints-main-line"]
    }
  },
  {
    slug: "explain-why-a-small-utility-needs-clear-functions",
    title: "Explica por qué una utilidad pequeña necesita funciones claras",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "small-organized-utilities",
    lessonSlug: "small-utilities-with-clear-purpose",
    order: 1,
    duration: "8 min",
    summary: "Explica por qué una herramienta simple se entiende mejor cuando separa guardar y mostrar en funciones distintas.",
    prompt:
      "En 2 o 3 frases cortas, explica por qué una utilidad pequeña mejora cuando una función guarda datos y otra función los muestra.",
    responseLabel: "Tu explicación sobre la utilidad",
    responsePlaceholder:
      "Una utilidad pequeña se entiende mejor cuando cada función hace una tarea concreta. Así es más fácil leer el flujo y saber qué parte guarda datos y qué parte los muestra.",
    instructions: [
      "Menciona que las funciones separan tareas.",
      "Relaciona esa separación con claridad o lectura.",
      "Conecta la idea con una utilidad que guarda y muestra datos."
    ],
    hints: [
      "Piensa en la diferencia entre guardar y mostrar.",
      "No hace falta usar palabras técnicas.",
      "La idea principal es que cada parte tenga un papel claro."
    ],
    starterCode:
      "def guardar_nota(texto):\n    with open('notas.txt', 'w') as archivo:\n        archivo.write(texto)\n\n\ndef mostrar_nota():\n    with open('notas.txt', 'r') as archivo:\n        print(archivo.read())",
    successCriteria: [
      "Habla de separar tareas.",
      "Habla de claridad o lectura.",
      "Conecta con una utilidad que guarda o muestra datos."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 45,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "separates-tasks",
          label: "Explica que las funciones separan tareas",
          keywords: ["separar", "dividir", "tareas", "funciones", "parte"],
          feedbackWhenMissing: "Explica que una función puede encargarse de una tarea y otra función de otra parte del programa."
        },
        {
          id: "improves-clarity",
          label: "Relaciona la idea con claridad o lectura",
          keywords: ["claro", "claridad", "leer", "entender", "orden", "flujo"],
          feedbackWhenMissing: "Agrega que esa separación hace el programa más claro o más fácil de leer."
        },
        {
          id: "connects-to-utility",
          label: "Lo conecta con guardar y mostrar datos",
          keywords: ["guardar", "mostrar", "datos", "archivo", "utilidad", "nota"],
          feedbackWhenMissing: "Conecta la explicación con una utilidad que guarda datos y luego los muestra."
        }
      ]
    }
  },
  {
    slug: "build-a-simple-note-utility",
    title: "Construye una libreta de notas simple",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "small-organized-utilities",
    lessonSlug: "saving-and-checking-notes-with-functions",
    order: 2,
    duration: "12 min",
    summary: "Construye una pequeña utilidad que guarde dos notas en un archivo y luego las muestre con un encabezado claro.",
    prompt:
      "Escribe un programa que defina `guardar_notas()` para guardar `Comprar pan\\nPracticar Python` en `notas.txt`, y `mostrar_notas()` para leer ese archivo e imprimir primero `Notas guardadas:` y luego el contenido. Después llama ambas funciones en ese orden.",
    responseLabel: "Tu libreta simple",
    responsePlaceholder:
      "def guardar_notas():\n    with open('notas.txt', 'w') as archivo:\n        archivo.write('Comprar pan\\nPracticar Python')\n\n\ndef mostrar_notas():\n    with open('notas.txt', 'r') as archivo:\n        contenido = archivo.read()\n    print('Notas guardadas:')\n    print(contenido)\n\n\nguardar_notas()\nmostrar_notas()",
    instructions: [
      "Define una función para guardar las notas.",
      "Define otra función para leer y mostrar.",
      "Llama primero a guardar y luego a mostrar."
    ],
    hints: [
      "Usa `with open('notas.txt', 'w')` dentro de `guardar_notas()`.",
      "Usa `with open('notas.txt', 'r')` dentro de `mostrar_notas()`.",
      "Imprime el encabezado antes del contenido."
    ],
    starterCode:
      "def guardar_notas():\n    with open('notas.txt', 'w') as archivo:\n        archivo.write('Comprar pan\\nPracticar Python')\n\n\ndef mostrar_notas():\n    with open('notas.txt', 'r') as archivo:\n        contenido = archivo.read()\n    print('Notas guardadas:')\n    print(contenido)\n\n\nguardar_notas()\nmostrar_notas()",
    successCriteria: [
      "Guarda texto en un archivo dentro de una función.",
      "Lee el archivo dentro de otra función.",
      "Muestra una salida clara con encabezado."
    ],
    playground: {
      title: "Ejecuta la libreta simple",
      guidance: "Corre el programa y luego cambia las notas o el encabezado. La meta es practicar una utilidad pequeña que guarda y consulta información de forma clara.",
      starterCode:
        "def guardar_notas():\n    with open('notas.txt', 'w') as archivo:\n        archivo.write('Comprar pan\\nPracticar Python')\n\n\ndef mostrar_notas():\n    with open('notas.txt', 'r') as archivo:\n        contenido = archivo.read()\n    print('Notas guardadas:')\n    print(contenido)\n\n\nguardar_notas()\nmostrar_notas()",
      emptyOutputHint: "La salida debería mostrar el encabezado y luego las dos notas guardadas."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Notas guardadas:\nComprar pan\nPracticar Python"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 220,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-save-function",
          label: "Define `guardar_notas()`",
          pattern: "def\\s+guardar_notas\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_notas()`."
        },
        {
          id: "writes-notes-file",
          label: "Escribe en `notas.txt`",
          pattern: "with\\s+open\\(\\s*['\"]notas\\.txt['\"]\\s*,\\s*['\"]w['\"]\\s*\\)\\s+as\\s+archivo\\s*:",
          feedbackWhenMissing: "Dentro de `guardar_notas()`, abre `notas.txt` en modo escritura."
        },
        {
          id: "writes-note-content",
          label: "Guarda las dos notas pedidas",
          pattern: "archivo\\.write\\(\\s*['\"]Comprar pan\\\\nPracticar Python['\"]\\s*\\)",
          feedbackWhenMissing: "Guarda exactamente `Comprar pan\\nPracticar Python` dentro del archivo."
        },
        {
          id: "defines-show-function",
          label: "Define `mostrar_notas()`",
          pattern: "def\\s+mostrar_notas\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_notas()`."
        },
        {
          id: "reads-and-prints-notes",
          label: "Lee el archivo y muestra el encabezado con el contenido",
          pattern: "with\\s+open\\(\\s*['\"]notas\\.txt['\"]\\s*,\\s*['\"]r['\"]\\s*\\)\\s+as\\s+archivo\\s*:[\\s\\S]*contenido\\s*=\\s*archivo\\.read\\(\\s*\\)[\\s\\S]*print\\(\\s*['\"]Notas guardadas:['\"]\\s*\\)[\\s\\S]*print\\(\\s*contenido\\s*\\)",
          feedbackWhenMissing: "En `mostrar_notas()`, lee el archivo y muestra `Notas guardadas:` seguido del contenido."
        }
      ],
      orderedPatternIds: [
        "defines-save-function",
        "writes-notes-file",
        "writes-note-content",
        "defines-show-function",
        "reads-and-prints-notes"
      ]
    }
  },
  {
    slug: "build-a-saved-data-summary",
    title: "Construye una utilidad de resumen guardado",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "small-organized-utilities",
    lessonSlug: "building-a-simple-data-summary",
    order: 3,
    duration: "13 min",
    summary: "Construye una utilidad que guarde varias líneas en un archivo y muestre un resumen corto usando una lista creada con `splitlines()`.",
    prompt:
      "Escribe un programa que defina `guardar_datos()` para guardar `Agua\\nLectura\\nPython` en `datos.txt`, y `mostrar_resumen()` para leer ese archivo, convertir el contenido a una lista con `splitlines()`, imprimir `Total guardado: 3` y luego `Primera línea: Agua`. Después llama ambas funciones.",
    responseLabel: "Tu utilidad de resumen",
    responsePlaceholder:
      "def guardar_datos():\n    with open('datos.txt', 'w') as archivo:\n        archivo.write('Agua\\nLectura\\nPython')\n\n\ndef mostrar_resumen():\n    with open('datos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total guardado:', len(lineas))\n    print('Primera línea:', lineas[0])\n\n\nguardar_datos()\nmostrar_resumen()",
    instructions: [
      "Guarda tres líneas en un archivo.",
      "Lee el archivo y conviértelo en una lista de líneas.",
      "Muestra un resumen con cantidad total y primera línea."
    ],
    hints: [
      "Puedes usar `archivo.read().splitlines()` para obtener una lista.",
      "La primera línea será `lineas[0]`.",
      "La cantidad total sale de `len(lineas)`."
    ],
    starterCode:
      "def guardar_datos():\n    with open('datos.txt', 'w') as archivo:\n        archivo.write('Agua\\nLectura\\nPython')\n\n\ndef mostrar_resumen():\n    with open('datos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total guardado:', len(lineas))\n    print('Primera línea:', lineas[0])\n\n\nguardar_datos()\nmostrar_resumen()",
    successCriteria: [
      "Guarda varias líneas en un archivo.",
      "Usa `splitlines()` para obtener una lista.",
      "Muestra un resumen corto y ordenado."
    ],
    playground: {
      title: "Ejecuta la utilidad de resumen",
      guidance: "Corre el programa y luego cambia las líneas guardadas. La meta es ver cómo un archivo, una lista y dos funciones pueden formar una herramienta pequeña pero útil.",
      starterCode:
        "def guardar_datos():\n    with open('datos.txt', 'w') as archivo:\n        archivo.write('Agua\\nLectura\\nPython')\n\n\ndef mostrar_resumen():\n    with open('datos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total guardado:', len(lineas))\n    print('Primera línea:', lineas[0])\n\n\nguardar_datos()\nmostrar_resumen()",
      emptyOutputHint: "La salida debería mostrar el total guardado y luego la primera línea."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Total guardado: 3\nPrimera línea: Agua"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 210,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-save-data",
          label: "Define `guardar_datos()`",
          pattern: "def\\s+guardar_datos\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_datos()`."
        },
        {
          id: "writes-data-file",
          label: "Escribe en `datos.txt`",
          pattern: "with\\s+open\\(\\s*['\"]datos\\.txt['\"]\\s*,\\s*['\"]w['\"]\\s*\\)\\s+as\\s+archivo\\s*:",
          feedbackWhenMissing: "Dentro de `guardar_datos()`, abre `datos.txt` en modo escritura."
        },
        {
          id: "writes-three-lines",
          label: "Guarda las tres líneas pedidas",
          pattern: "archivo\\.write\\(\\s*['\"]Agua\\\\nLectura\\\\nPython['\"]\\s*\\)",
          feedbackWhenMissing: "Guarda exactamente `Agua\\nLectura\\nPython` dentro del archivo."
        },
        {
          id: "uses-splitlines",
          label: "Lee el archivo y usa `splitlines()`",
          pattern: "lineas\\s*=\\s*archivo\\.read\\(\\s*\\)\\.splitlines\\(\\s*\\)",
          feedbackWhenMissing: "Guarda el contenido en `lineas` usando `archivo.read().splitlines()`."
        },
        {
          id: "prints-summary",
          label: "Imprime la cantidad total y la primera línea",
          pattern: "print\\(\\s*['\"]Total guardado:['\"]\\s*,\\s*len\\(\\s*lineas\\s*\\)\\s*\\)[\\s\\S]*print\\(\\s*['\"]Primera línea:['\"]\\s*,\\s*lineas\\[0\\]\\s*\\)",
          feedbackWhenMissing: "Muestra `Total guardado:` con `len(lineas)` y luego `Primera línea:` con `lineas[0]`."
        }
      ],
      orderedPatternIds: [
        "defines-save-data",
        "writes-data-file",
        "writes-three-lines",
        "uses-splitlines",
        "prints-summary"
      ]
    }
  },
  {
    slug: "explain-why-a-broader-utility-needs-coordination",
    title: "Explica por qué una utilidad más completa necesita coordinación",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "fuller-organized-utilities",
    lessonSlug: "designing-a-utility-with-clear-parts",
    order: 1,
    duration: "8 min",
    summary: "Explica por qué una herramienta con guardar, consultar y resumir necesita partes claras que trabajen coordinadas.",
    prompt:
      "En 2 o 3 frases cortas, explica por qué una utilidad que guarda datos, luego los consulta y además los resume necesita funciones separadas y un flujo principal claro.",
    responseLabel: "Tu explicación sobre la coordinación",
    responsePlaceholder:
      "Una utilidad más completa necesita funciones separadas porque cada parte cumple una tarea distinta. Eso hace que guardar, consultar y resumir se entiendan mejor dentro del flujo principal.",
    instructions: [
      "Menciona que varias tareas necesitan separación.",
      "Relaciona esa separación con claridad del flujo.",
      "Conecta la idea con guardar, consultar o resumir."
    ],
    hints: [
      "Piensa en una utilidad con más de una acción.",
      "No hace falta usar palabras técnicas.",
      "La idea central es coordinación clara."
    ],
    starterCode:
      "def guardar_registro():\n    pass\n\n\ndef mostrar_registro():\n    pass\n\n\ndef mostrar_resumen():\n    pass",
    successCriteria: [
      "Habla de varias tareas dentro de una utilidad.",
      "Habla de claridad o coordinación.",
      "Conecta la idea con archivo, consulta o resumen."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 55,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "multiple-parts",
          label: "Habla de varias partes o tareas",
          keywords: ["varias", "partes", "tareas", "guardar", "consultar", "resumir"],
          feedbackWhenMissing: "Explica que la utilidad tiene varias tareas como guardar, consultar o resumir."
        },
        {
          id: "clear-flow",
          label: "Conecta con claridad del flujo",
          keywords: ["flujo", "claro", "claridad", "orden", "leer", "entender"],
          feedbackWhenMissing: "Agrega que esa separación hace más claro el flujo del programa."
        },
        {
          id: "coordination",
          label: "Menciona coordinación entre funciones",
          keywords: ["coordinar", "coordinan", "funciones", "separadas", "responsabilidad"],
          feedbackWhenMissing: "Conecta la idea con funciones separadas que trabajan coordinadas."
        }
      ]
    }
  },
  {
    slug: "build-a-simple-agenda-tool",
    title: "Construye una agenda simple organizada",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "fuller-organized-utilities",
    lessonSlug: "building-a-simple-agenda-utility",
    order: 2,
    duration: "13 min",
    summary: "Construye una agenda pequeña que guarda varios contactos, los lee como lista y los muestra con un título claro.",
    prompt:
      "Escribe un programa que defina `guardar_contactos()` para guardar `Ana - 1234\\nLuis - 4567\\nMora - 7890` en `agenda.txt`, y `mostrar_contactos()` para leer ese archivo con `splitlines()`, imprimir `Agenda simple:` y luego mostrar cada contacto con un bucle `for`. Después llama ambas funciones.",
    responseLabel: "Tu agenda organizada",
    responsePlaceholder:
      "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567\\nMora - 7890')\n\n\ndef mostrar_contactos():\n    with open('agenda.txt', 'r') as archivo:\n        contactos = archivo.read().splitlines()\n    print('Agenda simple:')\n    for contacto in contactos:\n        print(contacto)\n\n\nguardar_contactos()\nmostrar_contactos()",
    instructions: [
      "Guarda tres contactos en un archivo.",
      "Lee el archivo como lista con `splitlines()`.",
      "Usa un bucle para imprimir cada contacto."
    ],
    hints: [
      "Guarda el texto con `\\n` entre contactos.",
      "La lista puede llamarse `contactos`.",
      "El bucle debería recorrer cada línea de la agenda."
    ],
    starterCode:
      "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567\\nMora - 7890')\n\n\ndef mostrar_contactos():\n    with open('agenda.txt', 'r') as archivo:\n        contactos = archivo.read().splitlines()\n    print('Agenda simple:')\n    for contacto in contactos:\n        print(contacto)\n\n\nguardar_contactos()\nmostrar_contactos()",
    successCriteria: [
      "Guarda varios datos en un archivo.",
      "Usa `splitlines()` y un bucle.",
      "Muestra una salida clara y ordenada."
    ],
    playground: {
      title: "Ejecuta la agenda organizada",
      guidance: "Corre la agenda y luego cambia un contacto o agrega uno más. La meta es practicar una utilidad algo más completa que guarda, consulta y presenta datos.",
      starterCode:
        "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana - 1234\\nLuis - 4567\\nMora - 7890')\n\n\ndef mostrar_contactos():\n    with open('agenda.txt', 'r') as archivo:\n        contactos = archivo.read().splitlines()\n    print('Agenda simple:')\n    for contacto in contactos:\n        print(contacto)\n\n\nguardar_contactos()\nmostrar_contactos()",
      emptyOutputHint: "La salida debería mostrar el título y luego los tres contactos guardados."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Agenda simple:\nAna - 1234\nLuis - 4567\nMora - 7890"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 240,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-save-contacts",
          label: "Define `guardar_contactos()`",
          pattern: "def\\s+guardar_contactos\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_contactos()`."
        },
        {
          id: "writes-agenda-file",
          label: "Escribe en `agenda.txt`",
          pattern: "with\\s+open\\(\\s*['\"]agenda\\.txt['\"]\\s*,\\s*['\"]w['\"]\\s*\\)\\s+as\\s+archivo\\s*:",
          feedbackWhenMissing: "Dentro de `guardar_contactos()`, abre `agenda.txt` en modo escritura."
        },
        {
          id: "writes-contacts-content",
          label: "Guarda los tres contactos pedidos",
          pattern: "archivo\\.write\\(\\s*['\"]Ana - 1234\\\\nLuis - 4567\\\\nMora - 7890['\"]\\s*\\)",
          feedbackWhenMissing: "Guarda exactamente los tres contactos pedidos dentro del archivo."
        },
        {
          id: "uses-splitlines-contacts",
          label: "Lee la agenda y usa `splitlines()`",
          pattern: "contactos\\s*=\\s*archivo\\.read\\(\\s*\\)\\.splitlines\\(\\s*\\)",
          feedbackWhenMissing: "Guarda el contenido leído en `contactos` usando `splitlines()`."
        },
        {
          id: "loops-over-contacts",
          label: "Recorre los contactos con un `for`",
          pattern: "for\\s+contacto\\s+in\\s+contactos\\s*:\\s*[\\s\\S]*print\\(\\s*contacto\\s*\\)",
          feedbackWhenMissing: "Usa un bucle `for` para imprimir cada contacto."
        }
      ],
      orderedPatternIds: [
        "defines-save-contacts",
        "writes-agenda-file",
        "writes-contacts-content",
        "uses-splitlines-contacts",
        "loops-over-contacts"
      ]
    }
  },
  {
    slug: "build-a-menu-summary-tool",
    title: "Construye una herramienta con menú simple y resumen",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "fuller-organized-utilities",
    lessonSlug: "coordinating-menu-file-and-summary",
    order: 3,
    duration: "14 min",
    summary: "Construye una herramienta pequeña que guarda datos y luego decide entre mostrar un resumen o mostrar la lista completa según una opción simple.",
    prompt:
      "Escribe un programa que defina `guardar_habitos()` para guardar `Leer\\nAgua\\nPython` en `habitos.txt`, `mostrar_habitos()` para leer y mostrar la lista con el título `Hábitos guardados:`, y `mostrar_resumen()` para imprimir `Total: 3`. Luego define `opcion = 'resumen'` y usa un `if` para llamar `mostrar_habitos()` si la opción es `ver`, o `mostrar_resumen()` en cualquier otro caso.",
    responseLabel: "Tu herramienta con menú simple",
    responsePlaceholder:
      "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer\\nAgua\\nPython')\n\n\ndef mostrar_habitos():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Hábitos guardados:')\n    for linea in lineas:\n        print(linea)\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total:', len(lineas))\n\n\nguardar_habitos()\nopcion = 'resumen'\nif opcion == 'ver':\n    mostrar_habitos()\nelse:\n    mostrar_resumen()",
    instructions: [
      "Guarda los hábitos en un archivo.",
      "Crea una función para mostrar la lista completa.",
      "Crea otra función para el resumen y decide cuál usar con un `if`."
    ],
    hints: [
      "Puedes usar la variable `opcion` para decidir el flujo.",
      "El resumen puede contar líneas con `len(lineas)`.",
      "El flujo debería llamar primero a `guardar_habitos()`."
    ],
    starterCode:
      "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer\\nAgua\\nPython')\n\n\ndef mostrar_habitos():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Hábitos guardados:')\n    for linea in lineas:\n        print(linea)\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total:', len(lineas))\n\n\nguardar_habitos()\nopcion = 'resumen'\nif opcion == 'ver':\n    mostrar_habitos()\nelse:\n    mostrar_resumen()",
    successCriteria: [
      "Coordina varias funciones dentro del mismo programa.",
      "Usa archivo + lista + condición simple.",
      "Muestra un resultado útil según la opción elegida."
    ],
    playground: {
      title: "Ejecuta la herramienta con menú simple",
      guidance: "Corre el programa y cambia la opción entre `ver` y `resumen`. La meta es ver cómo un archivo y varias funciones coordinadas ya forman una herramienta más completa.",
      starterCode:
        "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer\\nAgua\\nPython')\n\n\ndef mostrar_habitos():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Hábitos guardados:')\n    for linea in lineas:\n        print(linea)\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('Total:', len(lineas))\n\n\nguardar_habitos()\nopcion = 'resumen'\nif opcion == 'ver':\n    mostrar_habitos()\nelse:\n    mostrar_resumen()",
      emptyOutputHint: "La salida debería mostrar un resumen o la lista completa, según la opción que elijas."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Total: 3"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 300,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-habits",
          label: "Define `guardar_habitos()`",
          pattern: "def\\s+guardar_habitos\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_habitos()`."
        },
        {
          id: "defines-show-habits",
          label: "Define `mostrar_habitos()`",
          pattern: "def\\s+mostrar_habitos\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_habitos()`."
        },
        {
          id: "defines-summary",
          label: "Define `mostrar_resumen()`",
          pattern: "def\\s+mostrar_resumen\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_resumen()`."
        },
        {
          id: "writes-habits-file",
          label: "Guarda los hábitos en `habitos.txt`",
          pattern: "archivo\\.write\\(\\s*['\"]Leer\\\\nAgua\\\\nPython['\"]\\s*\\)",
          feedbackWhenMissing: "Guarda exactamente `Leer\\nAgua\\nPython` dentro de `habitos.txt`."
        },
        {
          id: "uses-option-if",
          label: "Usa `opcion` con un `if`",
          pattern: "opcion\\s*=\\s*['\"]resumen['\"][\\s\\S]*if\\s+opcion\\s*==\\s*['\"]ver['\"]\\s*:",
          feedbackWhenMissing: "Define `opcion = 'resumen'` y usa un `if` para decidir el flujo."
        },
        {
          id: "calls-summary-else",
          label: "Llama `mostrar_resumen()` en el `else`",
          pattern: "else\\s*:\\s*[\\s\\S]*mostrar_resumen\\(\\)",
          feedbackWhenMissing: "En el `else`, llama a `mostrar_resumen()`."
        }
      ],
      orderedPatternIds: [
        "defines-save-habits",
        "defines-show-habits",
        "defines-summary",
        "writes-habits-file",
        "uses-option-if",
        "calls-summary-else"
      ]
    }
  },
  {
    slug: "explain-why-consulting-data-needs-clear-flow",
    title: "Explica por qué consultar datos necesita un flujo claro",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "simple-data-consultation-and-updates",
    lessonSlug: "consulting-saved-data-with-clear-functions",
    order: 1,
    duration: "8 min",
    summary: "Explica por qué una utilidad que consulta datos guardados mejora cuando separa búsqueda y presentación.",
    prompt:
      "En 2 o 3 frases cortas, explica por qué una utilidad que consulta datos guardados mejora cuando una parte busca la información y otra la muestra con claridad.",
    responseLabel: "Tu explicación sobre consulta de datos",
    responsePlaceholder:
      "Una utilidad que consulta datos mejora cuando separa la búsqueda de la parte que muestra el resultado. Así el flujo se entiende mejor y es más fácil revisar qué hace cada función.",
    instructions: [
      "Menciona que la consulta es una tarea específica.",
      "Relaciona la idea con claridad del flujo.",
      "Conecta la idea con buscar y mostrar información."
    ],
    hints: [
      "Piensa en una función que busca y otra que presenta.",
      "No hace falta usar palabras técnicas.",
      "La claridad del recorrido importa mucho aquí."
    ],
    starterCode:
      "def consultar_estado(nombre):\n    pass\n\n\ndef mostrar_resultado():\n    pass",
    successCriteria: [
      "Habla de búsqueda o consulta.",
      "Habla de claridad o lectura.",
      "Conecta la idea con mostrar el resultado."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 50,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "query-task",
          label: "Habla de consulta o búsqueda",
          keywords: ["consulta", "buscar", "revisar", "dato", "información"],
          feedbackWhenMissing: "Explica que la utilidad hace una tarea de consulta o búsqueda de información."
        },
        {
          id: "clear-flow",
          label: "Conecta con claridad del flujo",
          keywords: ["flujo", "claro", "claridad", "orden", "leer", "entender"],
          feedbackWhenMissing: "Agrega que esa separación vuelve el flujo más claro o más fácil de leer."
        },
        {
          id: "show-result",
          label: "Menciona mostrar el resultado",
          keywords: ["mostrar", "resultado", "presentar", "salida"],
          feedbackWhenMissing: "Conecta la idea con una parte que muestra o presenta el resultado encontrado."
        }
      ]
    }
  },
  {
    slug: "build-a-simple-update-tool",
    title: "Construye una herramienta simple de actualización",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "simple-data-consultation-and-updates",
    lessonSlug: "updating-a-saved-value-calmly",
    order: 2,
    duration: "13 min",
    summary: "Construye una utilidad que cambia un valor guardado y luego muestra el archivo actualizado.",
    prompt:
      "Escribe un programa que defina `guardar_tareas()` para guardar `Leer: pendiente\\nPython: pendiente` en `tareas.txt`, `actualizar_estado()` para cambiar `Python: pendiente` por `Python: hecho`, y `mostrar_tareas()` para leer el archivo y mostrarlo completo. Después llama las tres funciones en ese orden.",
    responseLabel: "Tu herramienta de actualización",
    responsePlaceholder:
      "def guardar_tareas():\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nPython: pendiente')\n\n\ndef actualizar_estado():\n    with open('tareas.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('Python:'):\n            nuevas_lineas.append('Python: hecho')\n        else:\n            nuevas_lineas.append(linea)\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_tareas():\n    with open('tareas.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_tareas()\nactualizar_estado()\nmostrar_tareas()",
    instructions: [
      "Guarda dos tareas en un archivo.",
      "Lee el archivo, cambia una de las líneas y vuelve a escribirlo.",
      "Muestra el contenido final actualizado."
    ],
    hints: [
      "Puedes usar una lista `nuevas_lineas` para preparar el contenido nuevo.",
      "La actualización debería cambiar solo la línea de `Python`.",
      "Después vuelve a abrir el archivo para mostrar el resultado."
    ],
    starterCode:
      "def guardar_tareas():\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nPython: pendiente')\n\n\ndef actualizar_estado():\n    with open('tareas.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('Python:'):\n            nuevas_lineas.append('Python: hecho')\n        else:\n            nuevas_lineas.append(linea)\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_tareas():\n    with open('tareas.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_tareas()\nactualizar_estado()\nmostrar_tareas()",
    successCriteria: [
      "Lee y reescribe el archivo de forma ordenada.",
      "Cambia solo el valor pedido.",
      "Muestra el resultado actualizado."
    ],
    playground: {
      title: "Ejecuta la actualización simple",
      guidance: "Corre el programa y luego cambia qué tarea se actualiza o el estado final. La meta es practicar el ciclo completo de consulta, cambio y confirmación.",
      starterCode:
        "def guardar_tareas():\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nPython: pendiente')\n\n\ndef actualizar_estado():\n    with open('tareas.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith('Python:'):\n            nuevas_lineas.append('Python: hecho')\n        else:\n            nuevas_lineas.append(linea)\n    with open('tareas.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_tareas():\n    with open('tareas.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_tareas()\nactualizar_estado()\nmostrar_tareas()",
      emptyOutputHint: "La salida debería mostrar el archivo con el estado actualizado."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Leer: pendiente\nPython: hecho"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 280,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-tasks",
          label: "Define `guardar_tareas()`",
          pattern: "def\\s+guardar_tareas\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_tareas()`."
        },
        {
          id: "defines-update-status",
          label: "Define `actualizar_estado()`",
          pattern: "def\\s+actualizar_estado\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `actualizar_estado()`."
        },
        {
          id: "uses-new-lines-list",
          label: "Usa `nuevas_lineas` para preparar el nuevo contenido",
          pattern: "nuevas_lineas\\s*=\\s*\\[\\s*\\]",
          feedbackWhenMissing: "Prepara el contenido nuevo con una lista `nuevas_lineas`."
        },
        {
          id: "updates-python-line",
          label: "Cambia `Python` a `hecho`",
          pattern: "nuevas_lineas\\.append\\(\\s*['\"]Python: hecho['\"]\\s*\\)",
          feedbackWhenMissing: "Actualiza la línea de Python a `Python: hecho`."
        },
        {
          id: "rewrites-file",
          label: "Vuelve a escribir el archivo con `join()`",
          pattern: "archivo\\.write\\(\\s*['\"]\\\\n['\"]\\.join\\(\\s*nuevas_lineas\\s*\\)\\s*\\)",
          feedbackWhenMissing: "Vuelve a escribir el archivo usando `\\n`.join(nuevas_lineas)`."
        },
        {
          id: "shows-updated-file",
          label: "Muestra el contenido final actualizado",
          pattern: "def\\s+mostrar_tareas\\(\\)\\s*:[\\s\\S]*print\\(\\s*archivo\\.read\\(\\s*\\)\\s*\\)",
          feedbackWhenMissing: "Define `mostrar_tareas()` para leer el archivo e imprimir el contenido actualizado."
        }
      ],
      orderedPatternIds: [
        "defines-save-tasks",
        "defines-update-status",
        "uses-new-lines-list",
        "updates-python-line",
        "rewrites-file",
        "shows-updated-file"
      ]
    }
  },
  {
    slug: "build-a-consult-and-update-tool",
    title: "Construye una herramienta de consulta y actualización",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "simple-data-consultation-and-updates",
    lessonSlug: "coordinating-consultation-update-and-display",
    order: 3,
    duration: "14 min",
    summary: "Construye una utilidad que decide entre consultar o actualizar un dato guardado y luego muestra el resultado final.",
    prompt:
      "Escribe un programa que defina `guardar_registro()` para guardar `Ana: activo\\nLuis: pendiente` en `registro.txt`, `consultar_registro(nombre)` para buscar e imprimir `Consulta: ...`, y `actualizar_registro(nombre, nuevo_estado)` para cambiar el estado guardado. Luego define `opcion = 'actualizar'` y usa un `if` para consultar si la opción es `consultar`; en cualquier otro caso, actualiza a `Luis` con `activo` y luego vuelve a consultar `Luis`.",
    responseLabel: "Tu herramienta de consulta y actualización",
    responsePlaceholder:
      "def guardar_registro():\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar_registro(nombre):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registro()\nopcion = 'actualizar'\nif opcion == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\n    consultar_registro('Luis')",
    instructions: [
      "Guarda los datos base en un archivo.",
      "Crea una función para consultar y otra para actualizar.",
      "Usa una opción simple para decidir el flujo."
    ],
    hints: [
      "La consulta puede revisar si una línea empieza con `nombre + ':'`.",
      "La actualización puede rearmar las líneas con `nuevas_lineas`.",
      "Después de actualizar, consulta otra vez para confirmar el cambio."
    ],
    starterCode:
      "def guardar_registro():\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar_registro(nombre):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registro()\nopcion = 'actualizar'\nif opcion == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\n    consultar_registro('Luis')",
    successCriteria: [
      "Coordina consulta y actualización dentro de la misma utilidad.",
      "Mantiene funciones separadas por responsabilidad.",
      "Confirma el cambio con una salida final clara."
    ],
    playground: {
      title: "Ejecuta la herramienta de consulta y actualización",
      guidance: "Corre el programa, cambia la opción y luego cambia el nombre o el estado final. La meta es practicar una utilidad pequeña que ya consulta y modifica datos guardados.",
      starterCode:
        "def guardar_registro():\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar_registro(nombre):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('registro.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registro.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registro()\nopcion = 'actualizar'\nif opcion == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\n    consultar_registro('Luis')",
      emptyOutputHint: "La salida debería mostrar la consulta final del registro según el flujo elegido."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Consulta: Luis: activo"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 340,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-query-function",
          label: "Define `consultar_registro(nombre)`",
          pattern: "def\\s+consultar_registro\\(\\s*nombre\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `consultar_registro(nombre)`."
        },
        {
          id: "defines-update-function",
          label: "Define `actualizar_registro(nombre, nuevo_estado)`",
          pattern: "def\\s+actualizar_registro\\(\\s*nombre\\s*,\\s*nuevo_estado\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `actualizar_registro(nombre, nuevo_estado)`."
        },
        {
          id: "queries-with-startswith",
          label: "Consulta usando `startswith`",
          pattern: "linea\\.startswith\\(\\s*nombre\\s*\\+\\s*['\"]:['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro de la consulta, revisa cada línea con `startswith(nombre + ':')`."
        },
        {
          id: "updates-luis-active",
          label: "Actualiza a Luis con `activo`",
          pattern: "actualizar_registro\\(\\s*['\"]Luis['\"]\\s*,\\s*['\"]activo['\"]\\s*\\)",
          feedbackWhenMissing: "En el flujo principal, actualiza a `Luis` con el estado `activo`."
        },
        {
          id: "uses-option-branch",
          label: "Usa `opcion = 'actualizar'` con un `if`",
          pattern: "opcion\\s*=\\s*['\"]actualizar['\"][\\s\\S]*if\\s+opcion\\s*==\\s*['\"]consultar['\"]\\s*:",
          feedbackWhenMissing: "Define `opcion = 'actualizar'` y usa un `if` para decidir entre consultar o actualizar."
        },
        {
          id: "consults-after-update",
          label: "Consulta a Luis después de actualizar",
          pattern: "else\\s*:\\s*[\\s\\S]*actualizar_registro\\([\\s\\S]*consultar_registro\\(\\s*['\"]Luis['\"]\\s*\\)",
          feedbackWhenMissing: "Después de actualizar, vuelve a llamar `consultar_registro('Luis')` para mostrar el resultado final."
        }
      ],
      orderedPatternIds: [
        "defines-query-function",
        "defines-update-function",
        "queries-with-startswith",
        "updates-luis-active",
        "uses-option-branch",
        "consults-after-update"
      ]
    }
  },
  {
    slug: "explain-why-input-makes-a-tool-more-useful",
    title: "Explica por qué input() vuelve más útil una herramienta",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "input-driven-data-tools",
    lessonSlug: "using-input-to-choose-a-useful-action",
    order: 1,
    duration: "8 min",
    summary: "Explica por qué una herramienta pequeña mejora cuando usa `input()` para decidir una acción útil.",
    prompt:
      "En 2 o 3 frases cortas, explica por qué una herramienta mejora cuando usa `input()` para dejar que la persona elija si quiere consultar o actualizar algo.",
    responseLabel: "Tu explicación sobre input() y decisiones útiles",
    responsePlaceholder:
      "Una herramienta mejora cuando usa input() porque ya no sigue siempre el mismo camino. Así puede responder a lo que la persona quiere hacer y el programa se siente más útil.",
    instructions: [
      "Menciona que `input()` permite elegir una acción.",
      "Conecta esa idea con una herramienta más útil o interactiva.",
      "Explica la idea con palabras simples."
    ],
    hints: [
      "Piensa en la diferencia entre un programa fijo y uno que pregunta qué hacer.",
      "No hace falta usar lenguaje técnico.",
      "La idea central es que el flujo responde a una elección."
    ],
    starterCode:
      "print('1. Consultar')\nprint('2. Actualizar')\nopcion = input('Elige una acción: ')\n\nif opcion == '1':\n    print('Consulta lista')\nelse:\n    print('Actualización lista')",
    successCriteria: [
      "Habla de elección o decisión.",
      "Habla de utilidad o interacción.",
      "Conecta la idea con consultar o actualizar."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 50,
      passingScore: 4,
      requireOrder: false,
      concepts: [
        {
          id: "user-choice",
          label: "Menciona una elección de la persona",
          keywords: ["elegir", "decidir", "opción", "acción", "respuesta"],
          feedbackWhenMissing: "Agrega que `input()` permite elegir o decidir una acción dentro de la herramienta."
        },
        {
          id: "more-useful",
          label: "Conecta con una herramienta más útil o interactiva",
          keywords: ["útil", "interactiva", "interacción", "responder", "real"],
          feedbackWhenMissing: "Explica que eso vuelve la herramienta más útil, interactiva o cercana a un caso real."
        },
        {
          id: "query-or-update",
          label: "Relaciona la idea con consultar o actualizar",
          keywords: ["consultar", "actualizar", "buscar", "cambiar", "mostrar"],
          feedbackWhenMissing: "Conecta la idea con una acción concreta como consultar o actualizar información."
        }
      ]
    }
  },
  {
    slug: "build-an-input-driven-update-tool",
    title: "Construye una herramienta guiada por input() para actualizar",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "input-driven-data-tools",
    lessonSlug: "asking-for-data-to-update-a-record",
    order: 2,
    duration: "14 min",
    summary: "Construye una utilidad que pide un registro y un estado nuevo con `input()`, actualiza el archivo y luego muestra el resultado final.",
    prompt:
      "Escribe un programa que defina `guardar_estados()` para guardar `Python: pendiente\\nLectura: pendiente` en `estados.txt`, `actualizar_estado(nombre, nuevo_estado)` para cambiar la línea elegida, y `mostrar_estados()` para imprimir el archivo final. Luego pide `nombre` y `nuevo_estado` con `input()`, llama `actualizar_estado(nombre, nuevo_estado)` y muestra el resultado final.",
    responseLabel: "Tu herramienta guiada por input()",
    responsePlaceholder:
      "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Python: pendiente\\nLectura: pendiente')\n\n\ndef actualizar_estado(nombre, nuevo_estado):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_estados():\n    with open('estados.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_estados()\nnombre = input('¿Qué registro quieres actualizar? ')\nnuevo_estado = input('¿Cuál será el nuevo estado? ')\nactualizar_estado(nombre, nuevo_estado)\nmostrar_estados()",
    instructions: [
      "Guarda los datos base en un archivo.",
      "Pide el nombre del registro y el nuevo estado con `input()`.",
      "Actualiza el archivo y muestra el resultado final."
    ],
    hints: [
      "Puedes usar `startswith(nombre + ':')` para encontrar la línea correcta.",
      "La reescritura puede usar una lista `nuevas_lineas`.",
      "Después de actualizar, vuelve a leer el archivo para mostrar el resultado."
    ],
    starterCode:
      "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Python: pendiente\\nLectura: pendiente')\n\n\ndef actualizar_estado(nombre, nuevo_estado):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_estados():\n    with open('estados.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_estados()\nnombre = input('¿Qué registro quieres actualizar? ')\nnuevo_estado = input('¿Cuál será el nuevo estado? ')\nactualizar_estado(nombre, nuevo_estado)\nmostrar_estados()",
    successCriteria: [
      "Usa `input()` para decidir qué dato cambiar.",
      "Actualiza el archivo de forma ordenada.",
      "Muestra el contenido final actualizado."
    ],
    playground: {
      title: "Ejecuta una actualización con entrada real",
      guidance: "Corre el programa y responde la ventana del navegador. Prueba distintos nombres o estados para ver cómo la herramienta cambia el archivo final.",
      starterCode:
        "def guardar_estados():\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('Python: pendiente\\nLectura: pendiente')\n\n\ndef actualizar_estado(nombre, nuevo_estado):\n    with open('estados.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('estados.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_estados():\n    with open('estados.txt', 'r') as archivo:\n        print(archivo.read())\n\n\nguardar_estados()\nnombre = input('¿Qué registro quieres actualizar? ')\nnuevo_estado = input('¿Cuál será el nuevo estado? ')\nactualizar_estado(nombre, nuevo_estado)\nmostrar_estados()",
      emptyOutputHint: "La salida debería mostrar el archivo actualizado según los valores ingresados."
    },
    evaluator: {
      type: "structure_check",
      minLength: 360,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-statuses",
          label: "Define `guardar_estados()`",
          pattern: "def\\s+guardar_estados\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_estados()`."
        },
        {
          id: "defines-update-status",
          label: "Define `actualizar_estado(nombre, nuevo_estado)`",
          pattern: "def\\s+actualizar_estado\\(\\s*nombre\\s*,\\s*nuevo_estado\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `actualizar_estado(nombre, nuevo_estado)`."
        },
        {
          id: "asks-for-name-with-input",
          label: "Pide `nombre` con `input()`",
          pattern: "nombre\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide el `nombre` que se quiere actualizar con `input()`."
        },
        {
          id: "asks-for-new-status-with-input",
          label: "Pide `nuevo_estado` con `input()`",
          pattern: "nuevo_estado\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide el `nuevo_estado` con `input()`."
        },
        {
          id: "updates-by-name",
          label: "Busca la línea usando `nombre + ':'`",
          pattern: "linea\\.startswith\\(\\s*nombre\\s*\\+\\s*['\"]:['\"]\\s*\\)",
          feedbackWhenMissing: "Usa `startswith(nombre + ':')` para encontrar la línea que debe cambiar."
        },
        {
          id: "shows-final-file",
          label: "Muestra el archivo final",
          pattern: "def\\s+mostrar_estados\\(\\)\\s*:[\\s\\S]*print\\(\\s*archivo\\.read\\(\\s*\\)\\s*\\)",
          feedbackWhenMissing: "Define `mostrar_estados()` para leer e imprimir el archivo final."
        }
      ],
      orderedPatternIds: [
        "defines-save-statuses",
        "defines-update-status",
        "asks-for-name-with-input",
        "asks-for-new-status-with-input",
        "updates-by-name",
        "shows-final-file"
      ]
    }
  },
  {
    slug: "build-an-input-driven-search-and-update-tool",
    title: "Construye una herramienta con input() para consultar y actualizar",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "input-driven-data-tools",
    lessonSlug: "coordinating-input-search-update-and-display",
    order: 3,
    duration: "15 min",
    summary: "Construye una utilidad que usa `input()` para elegir entre consultar o actualizar, y luego muestra un resultado final claro.",
    prompt:
      "Escribe un programa que defina `guardar_registros()` para guardar `Ana: activo\\nLuis: pendiente` en `registros.txt`, `consultar(nombre)` para imprimir `Consulta: ...`, y `actualizar(nombre, nuevo_estado)` para cambiar el registro elegido. Luego pide `action` con `input('Escribe consultar o actualizar: ')`. Si la acción es `consultar`, consulta `Luis`. En cualquier otro caso, actualiza `Luis` a `activo` y luego vuelve a consultarlo.",
    responseLabel: "Tu herramienta con consulta y actualización guiadas por input()",
    responsePlaceholder:
      "def guardar_registros():\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar(nombre):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar(nombre, nuevo_estado):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar('Luis')\nelse:\n    actualizar('Luis', 'activo')\n    consultar('Luis')",
    instructions: [
      "Guarda datos base en un archivo.",
      "Usa `input()` para decidir si consultas o actualizas.",
      "Muestra un resultado final después del flujo elegido."
    ],
    hints: [
      "La consulta puede usar `startswith(nombre + ':')`.",
      "La actualización puede rearmar las líneas en `nuevas_lineas`.",
      "Después de actualizar, vuelve a consultar para confirmar el cambio."
    ],
    starterCode:
      "def guardar_registros():\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar(nombre):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar(nombre, nuevo_estado):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar('Luis')\nelse:\n    actualizar('Luis', 'activo')\n    consultar('Luis')",
    successCriteria: [
      "Usa `input()` para decidir el flujo.",
      "Coordina consulta y actualización con funciones separadas.",
      "Muestra un resultado final claro."
    ],
    playground: {
      title: "Prueba una herramienta guiada por elección",
      guidance: "Ejecuta el programa, escribe `consultar` o `actualizar` y observa cómo cambia el resultado. Luego prueba ajustar el nombre o el estado final.",
      starterCode:
        "def guardar_registros():\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente')\n\n\ndef consultar(nombre):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            print('Consulta:', linea)\n\n\ndef actualizar(nombre, nuevo_estado):\n    with open('registros.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('registros.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar('Luis')\nelse:\n    actualizar('Luis', 'activo')\n    consultar('Luis')",
      emptyOutputHint: "La salida debería mostrar la consulta pedida o la actualización seguida de una consulta final."
    },
    evaluator: {
      type: "structure_check",
      minLength: 360,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-query-function",
          label: "Define `consultar(nombre)`",
          pattern: "def\\s+consultar\\(\\s*nombre\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `consultar(nombre)`."
        },
        {
          id: "defines-update-function",
          label: "Define `actualizar(nombre, nuevo_estado)`",
          pattern: "def\\s+actualizar\\(\\s*nombre\\s*,\\s*nuevo_estado\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `actualizar(nombre, nuevo_estado)`."
        },
        {
          id: "asks-for-action-with-input",
          label: "Pide `action` con `input()`",
          pattern: "action\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide la acción con `input()`."
        },
        {
          id: "uses-action-branch",
          label: "Usa `if action == 'consultar'`",
          pattern: "if\\s+action\\s*==\\s*['\"]consultar['\"]\\s*:",
          feedbackWhenMissing: "Usa un `if` para comprobar si `action` es `consultar`."
        },
        {
          id: "updates-luis-active",
          label: "Actualiza a Luis con `activo`",
          pattern: "actualizar\\(\\s*['\"]Luis['\"]\\s*,\\s*['\"]activo['\"]\\s*\\)",
          feedbackWhenMissing: "En el otro camino, actualiza a `Luis` con `activo`."
        },
        {
          id: "consults-after-update",
          label: "Consulta a Luis después de actualizar",
          pattern: "else\\s*:\\s*[\\s\\S]*actualizar\\([\\s\\S]*consultar\\(\\s*['\"]Luis['\"]\\s*\\)",
          feedbackWhenMissing: "Después de actualizar, vuelve a consultar `Luis` para mostrar el resultado."
        }
      ],
      orderedPatternIds: [
        "defines-query-function",
        "defines-update-function",
        "asks-for-action-with-input",
        "uses-action-branch",
        "updates-luis-active",
        "consults-after-update"
      ]
    }
  },
  {
    slug: "build-route2-simple-agenda-project",
    title: "Construye una agenda simple con consulta y actualización",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "route2-practical-projects",
    lessonSlug: "route2-project-simple-agenda",
    order: 1,
    duration: "16 min",
    summary: "Construye una agenda pequeña que guarda contactos, consulta uno y actualiza otro antes de mostrar el resultado final.",
    prompt:
      "Escribe un programa que defina `guardar_contactos()` para guardar `Ana: Córdoba\\nLuis: Rosario` en `agenda.txt`, `consultar_contacto(nombre)` para imprimir `Contacto: ...`, y `actualizar_contacto(nombre, nueva_ciudad)` para cambiar la ciudad del contacto elegido. Luego guarda los datos, consulta `Ana`, actualiza `Luis` a `Mendoza` y vuelve a consultar `Luis`.",
    responseLabel: "Tu agenda simple",
    responsePlaceholder:
      "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana: Córdoba\\nLuis: Rosario')\n\n\ndef consultar_contacto(nombre):\n    with open('agenda.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Contacto:', linea)\n\n\ndef actualizar_contacto(nombre, nueva_ciudad):\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nueva_ciudad)\n        else:\n            nuevas_lineas.append(linea)\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_contactos()\nconsultar_contacto('Ana')\nactualizar_contacto('Luis', 'Mendoza')\nconsultar_contacto('Luis')",
    instructions: [
      "Guarda dos contactos en un archivo.",
      "Consulta un contacto antes del cambio.",
      "Actualiza otro contacto y vuelve a mostrarlo."
    ],
    hints: [
      "Usa `startswith(nombre + ':')` para encontrar cada contacto.",
      "Puedes rearmar el archivo con `nuevas_lineas`.",
      "Mostrar una consulta antes y otra después ayuda a que el flujo quede claro."
    ],
    starterCode:
      "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana: Córdoba\\nLuis: Rosario')\n\n\ndef consultar_contacto(nombre):\n    with open('agenda.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Contacto:', linea)\n\n\ndef actualizar_contacto(nombre, nueva_ciudad):\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nueva_ciudad)\n        else:\n            nuevas_lineas.append(linea)\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_contactos()\nconsultar_contacto('Ana')\nactualizar_contacto('Luis', 'Mendoza')\nconsultar_contacto('Luis')",
    successCriteria: [
      "Coordina guardado, consulta y actualización.",
      "Usa funciones separadas por responsabilidad.",
      "Muestra con claridad el antes y el después."
    ],
    playground: {
      title: "Construye y prueba tu agenda",
      guidance: "Ejecuta el programa, cambia los contactos o la ciudad final y comprueba que la agenda siga mostrando un flujo claro.",
      starterCode:
        "def guardar_contactos():\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('Ana: Córdoba\\nLuis: Rosario')\n\n\ndef consultar_contacto(nombre):\n    with open('agenda.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Contacto:', linea)\n\n\ndef actualizar_contacto(nombre, nueva_ciudad):\n    with open('agenda.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nueva_ciudad)\n        else:\n            nuevas_lineas.append(linea)\n    with open('agenda.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\nguardar_contactos()\nconsultar_contacto('Ana')\nactualizar_contacto('Luis', 'Mendoza')\nconsultar_contacto('Luis')",
      emptyOutputHint: "La salida debería mostrar un contacto antes y otro después de la actualización."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Contacto: Ana: Córdoba\nContacto: Luis: Mendoza"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 340,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-contacts",
          label: "Define `guardar_contactos()`",
          pattern: "def\\s+guardar_contactos\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_contactos()`."
        },
        {
          id: "defines-query-contact",
          label: "Define `consultar_contacto(nombre)`",
          pattern: "def\\s+consultar_contacto\\(\\s*nombre\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `consultar_contacto(nombre)`."
        },
        {
          id: "defines-update-contact",
          label: "Define `actualizar_contacto(nombre, nueva_ciudad)`",
          pattern: "def\\s+actualizar_contacto\\(\\s*nombre\\s*,\\s*nueva_ciudad\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `actualizar_contacto(nombre, nueva_ciudad)`."
        },
        {
          id: "queries-ana",
          label: "Consulta a Ana antes del cambio",
          pattern: "consultar_contacto\\(\\s*['\"]Ana['\"]\\s*\\)",
          feedbackWhenMissing: "Consulta `Ana` antes de la actualización para mostrar el flujo completo."
        },
        {
          id: "updates-luis",
          label: "Actualiza a Luis con Mendoza",
          pattern: "actualizar_contacto\\(\\s*['\"]Luis['\"]\\s*,\\s*['\"]Mendoza['\"]\\s*\\)",
          feedbackWhenMissing: "Actualiza `Luis` con la ciudad `Mendoza`."
        },
        {
          id: "queries-luis-after",
          label: "Consulta a Luis después del cambio",
          pattern: "consultar_contacto\\(\\s*['\"]Luis['\"]\\s*\\)",
          feedbackWhenMissing: "Después de actualizar, vuelve a consultar `Luis`."
        }
      ],
      orderedPatternIds: [
        "defines-save-contacts",
        "defines-query-contact",
        "defines-update-contact",
        "queries-ana",
        "updates-luis",
        "queries-luis-after"
      ]
    }
  },
  {
    slug: "build-route2-notebook-menu-project",
    title: "Construye una libreta con menú y resumen",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "route2-practical-projects",
    lessonSlug: "route2-project-notebook-menu-and-summary",
    order: 2,
    duration: "17 min",
    summary: "Construye una libreta con menú simple que consulta o actualiza un hábito y después muestra un resumen final.",
    prompt:
      "Escribe un programa que defina `guardar_habitos()` para guardar `Leer: pendiente\\nCaminar: hecho` en `habitos.txt`, `consultar_habito(nombre)` para imprimir `Consulta: ...`, `actualizar_habito(nombre, nuevo_estado)` para cambiar una línea y `mostrar_resumen()` para mostrar `Resumen final:` junto con el contenido del archivo. Luego pide `action` con `input('Escribe consultar o actualizar: ')`. Si la acción es `consultar`, consulta `Leer`. En cualquier otro caso, actualiza `Leer` a `hecho`. En ambos casos, muestra el resumen final.",
    responseLabel: "Tu libreta con menú",
    responsePlaceholder:
      "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nCaminar: hecho')\n\n\ndef consultar_habito(nombre):\n    with open('habitos.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_habito(nombre, nuevo_estado):\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        print('Resumen final:')\n        print(archivo.read())\n\n\nguardar_habitos()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_habito('Leer')\nelse:\n    actualizar_habito('Leer', 'hecho')\nmostrar_resumen()",
    instructions: [
      "Guarda hábitos base en un archivo.",
      "Usa `input()` para decidir el flujo.",
      "Muestra un resumen final en ambos caminos."
    ],
    hints: [
      "El menú puede ser simple si la acción final queda clara.",
      "El resumen final debería abrir el archivo otra vez.",
      "Si actualizas, luego el resumen debería mostrar el cambio."
    ],
    starterCode:
      "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nCaminar: hecho')\n\n\ndef consultar_habito(nombre):\n    with open('habitos.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_habito(nombre, nuevo_estado):\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        print('Resumen final:')\n        print(archivo.read())\n\n\nguardar_habitos()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_habito('Leer')\nelse:\n    actualizar_habito('Leer', 'hecho')\nmostrar_resumen()",
    successCriteria: [
      "Usa un flujo con menú o decisión clara.",
      "Mantiene funciones separadas por responsabilidad.",
      "Cierra con un resumen final visible."
    ],
    playground: {
      title: "Prueba tu libreta con menú",
      guidance: "Ejecuta el programa, cambia la acción y verifica que siempre termine con un resumen final legible.",
      starterCode:
        "def guardar_habitos():\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('Leer: pendiente\\nCaminar: hecho')\n\n\ndef consultar_habito(nombre):\n    with open('habitos.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_habito(nombre, nuevo_estado):\n    with open('habitos.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('habitos.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_resumen():\n    with open('habitos.txt', 'r') as archivo:\n        print('Resumen final:')\n        print(archivo.read())\n\n\nguardar_habitos()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_habito('Leer')\nelse:\n    actualizar_habito('Leer', 'hecho')\nmostrar_resumen()",
      emptyOutputHint: "La salida debería mostrar la acción elegida y luego un resumen final del archivo."
    },
    evaluator: {
      type: "structure_check",
      minLength: 420,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-habits",
          label: "Define `guardar_habitos()`",
          pattern: "def\\s+guardar_habitos\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_habitos()`."
        },
        {
          id: "defines-summary",
          label: "Define `mostrar_resumen()`",
          pattern: "def\\s+mostrar_resumen\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_resumen()`."
        },
        {
          id: "asks-for-action",
          label: "Pide `action` con `input()`",
          pattern: "action\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide la acción con `input()`."
        },
        {
          id: "uses-action-branch",
          label: "Usa un `if` para consultar o actualizar",
          pattern: "if\\s+action\\s*==\\s*['\"]consultar['\"]\\s*:",
          feedbackWhenMissing: "Usa un `if` para decidir entre consultar o actualizar."
        },
        {
          id: "updates-read-habit",
          label: "Actualiza `Leer` a `hecho`",
          pattern: "actualizar_habito\\(\\s*['\"]Leer['\"]\\s*,\\s*['\"]hecho['\"]\\s*\\)",
          feedbackWhenMissing: "En el camino de actualización, cambia `Leer` a `hecho`."
        },
        {
          id: "always-shows-summary",
          label: "Muestra el resumen final",
          pattern: "mostrar_resumen\\(\\s*\\)",
          feedbackWhenMissing: "Cierra el proyecto llamando `mostrar_resumen()`."
        }
      ],
      orderedPatternIds: [
        "defines-save-habits",
        "defines-summary",
        "asks-for-action",
        "uses-action-branch",
        "updates-read-habit",
        "always-shows-summary"
      ]
    }
  },
  {
    slug: "build-route2-record-and-report-project",
    title: "Construye una herramienta de registro y reporte",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "route2-practical-projects",
    lessonSlug: "route2-project-record-and-report-tool",
    order: 3,
    duration: "18 min",
    summary: "Construye una utilidad que consulta o actualiza un registro y luego muestra un reporte final con contexto.",
    prompt:
      "Escribe un programa que defina `guardar_registro()` para guardar `Ana: activo\\nLuis: pendiente\\nMara: activo` en `reporte.txt`, `consultar_registro(nombre)` para imprimir `Consulta: ...`, `actualizar_registro(nombre, nuevo_estado)` para cambiar una línea y `mostrar_reporte()` para imprimir `=== REPORTE ===`, cada línea del archivo y `Total:` con la cantidad de registros. Luego pide `action` con `input('Escribe consultar o actualizar: ')`. Si la acción es `consultar`, consulta `Luis`. En cualquier otro caso, actualiza `Luis` a `activo`. Después muestra el reporte final.",
    responseLabel: "Tu herramienta de registro y reporte",
    responsePlaceholder:
      "def guardar_registro():\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMara: activo')\n\n\ndef consultar_registro(nombre):\n    with open('reporte.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\nmostrar_reporte()",
    instructions: [
      "Guarda varios registros en un archivo.",
      "Usa `input()` para decidir si consultas o actualizas.",
      "Cierra con un reporte final claro."
    ],
    hints: [
      "El reporte puede leer el archivo una vez y luego recorrer las líneas.",
      "El total puede salir de `len(lineas)`.",
      "Aunque consultes o actualices, el proyecto debería terminar con el mismo cierre."
    ],
    starterCode:
      "def guardar_registro():\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMara: activo')\n\n\ndef consultar_registro(nombre):\n    with open('reporte.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\nmostrar_reporte()",
    successCriteria: [
      "Combina consulta o actualización con un reporte final.",
      "Mantiene una organización clara por funciones.",
      "Muestra un cierre útil y legible."
    ],
    playground: {
      title: "Prueba tu herramienta de reporte",
      guidance: "Ejecuta el proyecto, cambia la acción y luego ajusta el formato del reporte sin perder claridad.",
      starterCode:
        "def guardar_registro():\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('Ana: activo\\nLuis: pendiente\\nMara: activo')\n\n\ndef consultar_registro(nombre):\n    with open('reporte.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('reporte.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('reporte.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Luis')\nelse:\n    actualizar_registro('Luis', 'activo')\nmostrar_reporte()",
      emptyOutputHint: "La salida debería terminar con un reporte claro que muestre los registros y el total."
    },
    evaluator: {
      type: "structure_check",
      minLength: 460,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-record",
          label: "Define `guardar_registro()`",
          pattern: "def\\s+guardar_registro\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_registro()`."
        },
        {
          id: "defines-report",
          label: "Define `mostrar_reporte()`",
          pattern: "def\\s+mostrar_reporte\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_reporte()`."
        },
        {
          id: "asks-for-action",
          label: "Pide `action` con `input()`",
          pattern: "action\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide la acción con `input()`."
        },
        {
          id: "prints-report-header",
          label: "Imprime `=== REPORTE ===`",
          pattern: "print\\(\\s*['\"]=== REPORTE ===['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro del reporte, imprime el encabezado `=== REPORTE ===`."
        },
        {
          id: "prints-total",
          label: "Muestra `Total:` con `len(lineas)`",
          pattern: "print\\(\\s*['\"]Total:['\"]\\s*,\\s*len\\(\\s*lineas\\s*\\)\\s*\\)",
          feedbackWhenMissing: "Cierra el reporte mostrando `Total:` junto a `len(lineas)`."
        },
        {
          id: "calls-report-at-end",
          label: "Llama `mostrar_reporte()` al final",
          pattern: "mostrar_reporte\\(\\s*\\)",
          feedbackWhenMissing: "Termina el proyecto llamando `mostrar_reporte()`."
        }
      ],
      orderedPatternIds: [
        "defines-save-record",
        "defines-report",
        "asks-for-action",
        "prints-report-header",
        "prints-total",
        "calls-report-at-end"
      ]
    }
  },
  {
    slug: "build-route2-capstone-personal-manager",
    title: "Construye el capstone de gestor personal simple",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "route2-capstone",
    lessonSlug: "route2-capstone-personal-manager",
    order: 1,
    duration: "18 min",
    summary: "Construye un gestor personal simple que consulta o actualiza datos guardados y termina con un reporte final claro.",
    prompt:
      "Escribe un programa que defina `guardar_registros()` para guardar `Ana: pendiente\\nLuis: hecho` en `gestor.txt`, `consultar_registro(nombre)` para imprimir `Consulta: ...`, `actualizar_registro(nombre, nuevo_estado)` para cambiar una línea y `mostrar_reporte()` para imprimir `=== REPORTE FINAL ===` junto con el contenido del archivo. Luego pide `action` con `input('Escribe consultar o actualizar: ')`. Si la acción es `consultar`, consulta `Ana`. En cualquier otro caso, actualiza `Ana` a `hecho`. Después muestra el reporte final.",
    responseLabel: "Tu capstone de gestor personal",
    responsePlaceholder:
      "def guardar_registros():\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('Ana: pendiente\\nLuis: hecho')\n\n\ndef consultar_registro(nombre):\n    with open('gestor.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('gestor.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('gestor.txt', 'r') as archivo:\n        print('=== REPORTE FINAL ===')\n        print(archivo.read())\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Ana')\nelse:\n    actualizar_registro('Ana', 'hecho')\nmostrar_reporte()",
    instructions: [
      "Guarda datos base en un archivo.",
      "Usa `input()` para decidir si consultas o actualizas.",
      "Cierra con un reporte final legible."
    ],
    hints: [
      "Puedes usar `startswith(nombre + ':')` para consultar o actualizar.",
      "El reporte final puede leer el archivo y luego imprimirlo completo.",
      "Aunque el flujo cambie, el cierre debería aparecer siempre."
    ],
    starterCode:
      "def guardar_registros():\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('Ana: pendiente\\nLuis: hecho')\n\n\ndef consultar_registro(nombre):\n    with open('gestor.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('gestor.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('gestor.txt', 'r') as archivo:\n        print('=== REPORTE FINAL ===')\n        print(archivo.read())\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Ana')\nelse:\n    actualizar_registro('Ana', 'hecho')\nmostrar_reporte()",
    successCriteria: [
      "Coordina archivo, decisión, cambio y cierre.",
      "Mantiene funciones separadas.",
      "Termina con un reporte final claro."
    ],
    playground: {
      title: "Ejecuta tu gestor personal final",
      guidance: "Corre el proyecto, cambia la acción y revisa que siempre termine con un cierre claro y útil.",
      starterCode:
        "def guardar_registros():\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('Ana: pendiente\\nLuis: hecho')\n\n\ndef consultar_registro(nombre):\n    with open('gestor.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('gestor.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('gestor.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('gestor.txt', 'r') as archivo:\n        print('=== REPORTE FINAL ===')\n        print(archivo.read())\n\n\nguardar_registros()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Ana')\nelse:\n    actualizar_registro('Ana', 'hecho')\nmostrar_reporte()",
      emptyOutputHint: "La salida debería mostrar una acción y después un reporte final del estado del archivo."
    },
    evaluator: {
      type: "structure_check",
      minLength: 430,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save",
          label: "Define `guardar_registros()`",
          pattern: "def\\s+guardar_registros\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_registros()`."
        },
        {
          id: "defines-report",
          label: "Define `mostrar_reporte()`",
          pattern: "def\\s+mostrar_reporte\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_reporte()`."
        },
        {
          id: "asks-action",
          label: "Pide `action` con `input()`",
          pattern: "action\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide la acción con `input()`."
        },
        {
          id: "updates-ana",
          label: "Actualiza a Ana con `hecho`",
          pattern: "actualizar_registro\\(\\s*['\"]Ana['\"]\\s*,\\s*['\"]hecho['\"]\\s*\\)",
          feedbackWhenMissing: "En el camino de actualización, cambia `Ana` a `hecho`."
        },
        {
          id: "prints-final-header",
          label: "Imprime `=== REPORTE FINAL ===`",
          pattern: "print\\(\\s*['\"]=== REPORTE FINAL ===['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro del reporte, imprime `=== REPORTE FINAL ===`."
        },
        {
          id: "calls-report-end",
          label: "Llama `mostrar_reporte()` al final",
          pattern: "mostrar_reporte\\(\\s*\\)",
          feedbackWhenMissing: "Termina el capstone llamando `mostrar_reporte()`."
        }
      ],
      orderedPatternIds: [
        "defines-save",
        "defines-report",
        "asks-action",
        "updates-ana",
        "prints-final-header",
        "calls-report-end"
      ]
    }
  },
  {
    slug: "build-route2-capstone-menu-report-tool",
    title: "Construye el capstone de herramienta con menú y reporte",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "route2-capstone",
    lessonSlug: "route2-capstone-menu-report-tool",
    order: 2,
    duration: "19 min",
    summary: "Construye una utilidad final de Ruta 2 con menú, consulta o actualización y un reporte claro con total de registros.",
    prompt:
      "Escribe un programa que defina `guardar_registro()` para guardar `Tarea: pendiente\\nNota: lista\\nResumen: en curso` en `ruta2-final.txt`, `consultar_registro(nombre)` para imprimir `Consulta: ...`, `actualizar_registro(nombre, nuevo_estado)` para cambiar una línea y `mostrar_reporte()` para imprimir `=== REPORTE FINAL ===`, luego cada línea y finalmente `Total:` con la cantidad de registros. Después pide `action` con `input('Escribe consultar o actualizar: ')`. Si la acción es `consultar`, consulta `Nota`. En cualquier otro caso, actualiza `Tarea` a `hecho`. Después muestra el reporte final.",
    responseLabel: "Tu capstone final de Ruta 2",
    responsePlaceholder:
      "def guardar_registro():\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('Tarea: pendiente\\nNota: lista\\nResumen: en curso')\n\n\ndef consultar_registro(nombre):\n    with open('ruta2-final.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE FINAL ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Nota')\nelse:\n    actualizar_registro('Tarea', 'hecho')\nmostrar_reporte()",
    instructions: [
      "Guarda varios registros en un archivo.",
      "Usa `input()` para decidir el flujo.",
      "Termina con un reporte que muestre encabezado, líneas y total."
    ],
    hints: [
      "Puedes reutilizar el patrón de consulta y actualización que ya trabajaste en Ruta 2.",
      "El reporte debería leer las líneas una sola vez y usarlas para imprimir el total.",
      "Aunque el flujo cambie, el cierre debe mantenerse."
    ],
    starterCode:
      "def guardar_registro():\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('Tarea: pendiente\\nNota: lista\\nResumen: en curso')\n\n\ndef consultar_registro(nombre):\n    with open('ruta2-final.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE FINAL ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Nota')\nelse:\n    actualizar_registro('Tarea', 'hecho')\nmostrar_reporte()",
    successCriteria: [
      "Coordina menú o decisión, consulta o actualización y reporte.",
      "Mantiene una organización clara por funciones.",
      "Se siente como una herramienta final corta pero completa."
    ],
    playground: {
      title: "Prueba tu cierre final de Ruta 2",
      guidance: "Ejecuta el proyecto, cambia la acción y verifica que el cierre siga mostrando un reporte ordenado y útil.",
      starterCode:
        "def guardar_registro():\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('Tarea: pendiente\\nNota: lista\\nResumen: en curso')\n\n\ndef consultar_registro(nombre):\n    with open('ruta2-final.txt', 'r') as archivo:\n        for linea in archivo.read().splitlines():\n            if linea.startswith(nombre + ':'):\n                print('Consulta:', linea)\n\n\ndef actualizar_registro(nombre, nuevo_estado):\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    nuevas_lineas = []\n    for linea in lineas:\n        if linea.startswith(nombre + ':'):\n            nuevas_lineas.append(nombre + ': ' + nuevo_estado)\n        else:\n            nuevas_lineas.append(linea)\n    with open('ruta2-final.txt', 'w') as archivo:\n        archivo.write('\\n'.join(nuevas_lineas))\n\n\ndef mostrar_reporte():\n    with open('ruta2-final.txt', 'r') as archivo:\n        lineas = archivo.read().splitlines()\n    print('=== REPORTE FINAL ===')\n    for linea in lineas:\n        print(linea)\n    print('Total:', len(lineas))\n\n\nguardar_registro()\naction = input('Escribe consultar o actualizar: ')\nif action == 'consultar':\n    consultar_registro('Nota')\nelse:\n    actualizar_registro('Tarea', 'hecho')\nmostrar_reporte()",
      emptyOutputHint: "La salida debería cerrar con un reporte final que resuma el estado del archivo."
    },
    evaluator: {
      type: "structure_check",
      minLength: 500,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "defines-save-record",
          label: "Define `guardar_registro()`",
          pattern: "def\\s+guardar_registro\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `guardar_registro()`."
        },
        {
          id: "defines-report",
          label: "Define `mostrar_reporte()`",
          pattern: "def\\s+mostrar_reporte\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función llamada `mostrar_reporte()`."
        },
        {
          id: "asks-action",
          label: "Pide `action` con `input()`",
          pattern: "action\\s*=\\s*input\\(",
          feedbackWhenMissing: "Pide la acción con `input()`."
        },
        {
          id: "prints-final-header",
          label: "Imprime `=== REPORTE FINAL ===`",
          pattern: "print\\(\\s*['\"]=== REPORTE FINAL ===['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro del reporte, imprime `=== REPORTE FINAL ===`."
        },
        {
          id: "prints-total",
          label: "Muestra `Total:` con `len(lineas)`",
          pattern: "print\\(\\s*['\"]Total:['\"]\\s*,\\s*len\\(\\s*lineas\\s*\\)\\s*\\)",
          feedbackWhenMissing: "Cierra el reporte mostrando `Total:` junto a `len(lineas)`."
        },
        {
          id: "calls-report",
          label: "Llama `mostrar_reporte()` al final",
          pattern: "mostrar_reporte\\(\\s*\\)",
          feedbackWhenMissing: "Termina el capstone llamando `mostrar_reporte()`."
        }
      ],
      orderedPatternIds: [
        "defines-save-record",
        "defines-report",
        "asks-action",
        "prints-final-header",
        "prints-total",
        "calls-report"
      ]
    }
  },
  {
    slug: "explain-why-simple-multi-file-programs-help",
    title: "Explica por qué dividir un programa en varios archivos puede ayudar",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "simple-multi-file-programs",
    lessonSlug: "why-simple-multi-file-programs-help",
    order: 1,
    duration: "8 min",
    summary: "Explica en palabras simples por qué un programa más amplio puede beneficiarse de un archivo principal y un archivo de apoyo.",
    prompt:
      "Escribe una respuesta corta donde expliques por qué un programa pequeño pero creciente puede volverse más claro si deja el flujo principal en un archivo y mueve funciones de apoyo a otro.",
    responseLabel: "Tu explicación",
    responsePlaceholder:
      "Un programa puede quedar más claro si...",
    instructions: [
      "Menciona la idea de flujo principal visible.",
      "Menciona la idea de mover apoyos o detalles a otro archivo.",
      "Escribe de forma simple, como si se lo contaras a otra persona principiante."
    ],
    hints: [
      "Piensa en qué archivo debería contar la historia principal del programa.",
      "Puedes hablar de legibilidad, orden o facilidad para volver a leer.",
      "No hace falta usar palabras técnicas complejas."
    ],
    starterCode: "",
    successCriteria: [
      "Explica que separar ayuda a leer mejor el programa.",
      "Reconoce que el archivo principal debería quedar más claro.",
      "Menciona funciones o apoyos en otro archivo."
    ],
    evaluator: {
      type: "ordered_concepts",
      passingScore: 3,
      concepts: [
        {
          id: "main-flow",
          label: "Menciona el flujo principal visible",
          keywords: ["flujo principal", "archivo principal", "parte principal", "recorrido principal"],
          feedbackWhenMissing: "Menciona que el archivo principal debería mostrar el flujo o recorrido del programa."
        },
        {
          id: "support-file",
          label: "Menciona apoyos o funciones en otro archivo",
          keywords: ["funciones de apoyo", "otro archivo", "archivo de utilidades", "funciones auxiliares"],
          feedbackWhenMissing: "Menciona que algunas funciones de apoyo pueden vivir en otro archivo."
        },
        {
          id: "clarity-benefit",
          label: "Menciona una mejora de claridad",
          keywords: ["más claro", "más ordenado", "más fácil de leer", "más legible"],
          feedbackWhenMissing: "Explica por qué esa separación ayuda a leer o entender mejor el programa."
        }
      ]
    }
  },
  {
    slug: "split-support-functions-into-another-file",
    title: "Separa funciones de apoyo en otro archivo",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "simple-multi-file-programs",
    lessonSlug: "moving-support-functions-to-another-file",
    order: 2,
    duration: "16 min",
    summary: "Escribe una respuesta guiada donde representes un archivo `utilidades.py` y un archivo `principal.py` con una separación simple y clara.",
    prompt:
      "Escribe un ejemplo dividido en dos partes usando comentarios para representar archivos. Primero crea `# utilidades.py` con `guardar_nota(texto)` y `mostrar_reporte()`; luego crea `# principal.py`, importa ambas funciones con `from utilidades import guardar_nota, mostrar_reporte`, pide una nota con `input('Escribe una nota: ')`, llama `guardar_nota(nota)` y termina con `mostrar_reporte()`.",
    responseLabel: "Tu programa multiarchivo simple",
    responsePlaceholder:
      "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_reporte():\n    print('Reporte listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_reporte\n\nnota = input('Escribe una nota: ')\nguardar_nota(nota)\nmostrar_reporte()",
    instructions: [
      "Usa comentarios para mostrar cada archivo.",
      "Deja las funciones de apoyo en `utilidades.py`.",
      "Haz que `principal.py` se lea como el recorrido principal."
    ],
    hints: [
      "Puedes empezar con `# utilidades.py` y luego `# principal.py`.",
      "La separación importa más que una lógica complicada.",
      "En el principal, intenta que se vea primero el pedido del dato y luego las llamadas."
    ],
    starterCode:
      "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_reporte():\n    print('Reporte listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_reporte\n\nnota = input('Escribe una nota: ')\nguardar_nota(nota)\nmostrar_reporte()",
    successCriteria: [
      "Representa dos archivos con claridad.",
      "Deja funciones de apoyo fuera del principal.",
      "Hace que el principal se lea como un flujo corto y claro."
    ],
    playground: {
      title: "Ensaya la separación entre utilidades y principal",
      guidance: "Corre el ejemplo dentro de un solo editor, pero mantén la representación clara de ambos archivos usando comentarios.",
      starterCode:
        "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_reporte():\n    print('Reporte listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_reporte\n\nnota = input('Escribe una nota: ')\nguardar_nota(nota)\nmostrar_reporte()",
      emptyOutputHint: "La salida puede ser simple. Lo importante es que la separación entre archivos quede legible."
    },
    evaluator: {
      type: "structure_check",
      minLength: 220,
      passingScore: 6,
      requiredPatterns: [
        {
          id: "utilidades-comment",
          label: "Representa `# utilidades.py`",
          pattern: "#\\s*utilidades\\.py",
          feedbackWhenMissing: "Empieza mostrando el archivo `# utilidades.py`."
        },
        {
          id: "principal-comment",
          label: "Representa `# principal.py`",
          pattern: "#\\s*principal\\.py",
          feedbackWhenMissing: "Muestra también el archivo `# principal.py`."
        },
        {
          id: "defines-save-note",
          label: "Define `guardar_nota(texto)`",
          pattern: "def\\s+guardar_nota\\(\\s*texto\\s*\\)\\s*:",
          feedbackWhenMissing: "Define una función `guardar_nota(texto)` en el archivo de utilidades."
        },
        {
          id: "defines-report",
          label: "Define `mostrar_reporte()`",
          pattern: "def\\s+mostrar_reporte\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función `mostrar_reporte()` en el archivo de utilidades."
        },
        {
          id: "imports-support",
          label: "Importa las funciones desde utilidades",
          pattern: "from\\s+utilidades\\s+import\\s+guardar_nota\\s*,\\s*mostrar_reporte",
          feedbackWhenMissing: "En `principal.py`, importa las funciones desde `utilidades`."
        },
        {
          id: "asks-note",
          label: "Pide una nota con `input()`",
          pattern: "nota\\s*=\\s*input\\(",
          feedbackWhenMissing: "En el archivo principal, pide la nota con `input()`."
        },
        {
          id: "calls-save",
          label: "Llama `guardar_nota(nota)`",
          pattern: "guardar_nota\\(\\s*nota\\s*\\)",
          feedbackWhenMissing: "Después del input, llama `guardar_nota(nota)`."
        },
        {
          id: "calls-report",
          label: "Llama `mostrar_reporte()`",
          pattern: "mostrar_reporte\\(\\s*\\)",
          feedbackWhenMissing: "Termina llamando `mostrar_reporte()`."
        }
      ],
      orderedPatternIds: [
        "utilidades-comment",
        "defines-save-note",
        "defines-report",
        "principal-comment",
        "imports-support",
        "asks-note",
        "calls-save",
        "calls-report"
      ]
    }
  },
  {
    slug: "build-a-clear-main-file",
    title: "Construye un archivo principal claro",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "simple-multi-file-programs",
    lessonSlug: "keeping-a-clear-main-file",
    order: 3,
    duration: "16 min",
    summary: "Escribe un `main()` simple que pida un dato, llame funciones de apoyo y cierre con un resumen corto para que el archivo principal se lea como un mapa del programa.",
    prompt:
      "Escribe un ejemplo donde primero representes `# utilidades.py` con `guardar_contacto(nombre)` y `mostrar_resumen()`. Después representa `# principal.py`, importa ambas funciones, define `main()`, pide un nombre con `input('Escribe un nombre: ')`, llama `guardar_contacto(nombre)`, luego `mostrar_resumen()` y finalmente ejecuta `main()`.",
    responseLabel: "Tu archivo principal claro",
    responsePlaceholder:
      "# utilidades.py\n\ndef guardar_contacto(nombre):\n    print('Guardando:', nombre)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n# principal.py\nfrom utilidades import guardar_contacto, mostrar_resumen\n\n\ndef main():\n    nombre = input('Escribe un nombre: ')\n    guardar_contacto(nombre)\n    mostrar_resumen()\n\n\nmain()",
    instructions: [
      "Muestra los dos archivos con comentarios.",
      "Haz que `main()` cuente el recorrido principal del programa.",
      "Evita meter detalles internos dentro del archivo principal."
    ],
    hints: [
      "Piensa el `main()` como una receta corta.",
      "Primero pide el dato, después llama apoyos, después cierra.",
      "La meta es claridad, no cantidad de código."
    ],
    starterCode:
      "# utilidades.py\n\ndef guardar_contacto(nombre):\n    print('Guardando:', nombre)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n# principal.py\nfrom utilidades import guardar_contacto, mostrar_resumen\n\n\ndef main():\n    nombre = input('Escribe un nombre: ')\n    guardar_contacto(nombre)\n    mostrar_resumen()\n\n\nmain()",
    successCriteria: [
      "El archivo principal se lee fácil.",
      "Usa `main()` como recorrido del programa.",
      "Las funciones de apoyo quedan separadas."
    ],
    playground: {
      title: "Prueba un `main()` corto y claro",
      guidance: "Ejecuta el ejemplo para notar cómo el archivo principal se entiende rápido cuando coordina y no se llena de detalles.",
      starterCode:
        "def guardar_contacto(nombre):\n    print('Guardando:', nombre)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n\ndef main():\n    nombre = input('Escribe un nombre: ')\n    guardar_contacto(nombre)\n    mostrar_resumen()\n\n\nmain()",
      emptyOutputHint: "La salida debería dejarte ver un recorrido corto y claro: pedir, guardar y resumir."
    },
    evaluator: {
      type: "structure_check",
      minLength: 240,
      passingScore: 7,
      requiredPatterns: [
        {
          id: "utilidades-comment",
          label: "Representa `# utilidades.py`",
          pattern: "#\\s*utilidades\\.py",
          feedbackWhenMissing: "Empieza mostrando el archivo `# utilidades.py`."
        },
        {
          id: "principal-comment",
          label: "Representa `# principal.py`",
          pattern: "#\\s*principal\\.py",
          feedbackWhenMissing: "Muestra también el archivo `# principal.py`."
        },
        {
          id: "defines-save-contact",
          label: "Define `guardar_contacto(nombre)`",
          pattern: "def\\s+guardar_contacto\\(\\s*nombre\\s*\\)\\s*:",
          feedbackWhenMissing: "Define `guardar_contacto(nombre)` en el archivo de utilidades."
        },
        {
          id: "defines-summary",
          label: "Define `mostrar_resumen()`",
          pattern: "def\\s+mostrar_resumen\\(\\)\\s*:",
          feedbackWhenMissing: "Define `mostrar_resumen()` en el archivo de utilidades."
        },
        {
          id: "imports-main",
          label: "Importa ambas funciones en principal",
          pattern: "from\\s+utilidades\\s+import\\s+guardar_contacto\\s*,\\s*mostrar_resumen",
          feedbackWhenMissing: "En `principal.py`, importa `guardar_contacto` y `mostrar_resumen`."
        },
        {
          id: "defines-main",
          label: "Define `main()`",
          pattern: "def\\s+main\\(\\)\\s*:",
          feedbackWhenMissing: "Define una función `main()` para el recorrido principal."
        },
        {
          id: "asks-name",
          label: "Pide un nombre con `input()`",
          pattern: "nombre\\s*=\\s*input\\(",
          feedbackWhenMissing: "Dentro de `main()`, pide un nombre con `input()`."
        },
        {
          id: "calls-save-contact",
          label: "Llama `guardar_contacto(nombre)`",
          pattern: "guardar_contacto\\(\\s*nombre\\s*\\)",
          feedbackWhenMissing: "Dentro de `main()`, llama `guardar_contacto(nombre)`."
        },
        {
          id: "calls-show-summary",
          label: "Llama `mostrar_resumen()`",
          pattern: "mostrar_resumen\\(\\s*\\)",
          feedbackWhenMissing: "Dentro de `main()`, llama `mostrar_resumen()`."
        },
        {
          id: "runs-main",
          label: "Ejecuta `main()` al final",
          pattern: "main\\(\\s*\\)",
          feedbackWhenMissing: "Al final del ejemplo, ejecuta `main()`."
        }
      ],
      orderedPatternIds: [
        "utilidades-comment",
        "defines-save-contact",
        "defines-summary",
        "principal-comment",
        "imports-main",
        "defines-main",
        "asks-name",
        "calls-save-contact",
        "calls-show-summary",
        "runs-main"
      ]
    }
  },
  {
    slug: "organize-a-note-utility-across-files",
    title: "Organiza una utilidad de notas entre principal y utilidades",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "practical-multi-file-utilities",
    lessonSlug: "coordinating-a-utility-from-main-py",
    order: 1,
    duration: "15 min",
    summary: "Representa una utilidad de notas simple donde `principal.py` coordina y `utilidades.py` guarda o resume.",
    prompt:
      "Escribe un ejemplo dividido en dos partes usando comentarios para representar archivos. En `# utilidades.py`, define `guardar_nota(texto)` y `mostrar_resumen()`. En `# principal.py`, importa ambas funciones, define `main()`, pide una nota con `input('Escribe una nota: ')`, llama `guardar_nota(nota)`, luego `mostrar_resumen()` y finalmente ejecuta `main()`.",
    responseLabel: "Tu utilidad multiarchivo de notas",
    responsePlaceholder:
      "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando nota:', texto)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_resumen\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen()\n\n\nmain()",
    instructions: [
      "Usa comentarios para mostrar ambos archivos.",
      "Deja el guardado y el resumen en `utilidades.py`.",
      "Haz que `main()` se lea como el recorrido principal."
    ],
    hints: [
      "Empieza por definir las funciones de apoyo.",
      "Después muestra el principal con una importación simple.",
      "La meta es claridad, no una lógica complicada."
    ],
    starterCode:
      "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando nota:', texto)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_resumen\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen()\n\n\nmain()",
    successCriteria: [
      "Representa bien `principal.py` y `utilidades.py`.",
      "El principal coordina sin cargarse de detalles.",
      "La utilidad se lee como un flujo corto y claro."
    ],
    playground: {
      title: "Prueba una utilidad multiarchivo de notas",
      guidance: "Corre la versión simple en un solo editor y luego asegúrate de que tu respuesta represente bien la separación entre archivos.",
      starterCode:
        "def guardar_nota(texto):\n    print('Guardando nota:', texto)\n\n\ndef mostrar_resumen():\n    print('Resumen listo')\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen()\n\n\nmain()",
      emptyOutputHint: "La salida debería mostrar una secuencia corta y clara de utilidad."
    },
    evaluator: {
      type: "structure_check",
      minLength: 250,
      passingScore: 7,
      requiredPatterns: [
        {
          id: "utilidades-comment",
          label: "Representa `# utilidades.py`",
          pattern: "#\\s*utilidades\\.py",
          feedbackWhenMissing: "Empieza mostrando el archivo `# utilidades.py`."
        },
        {
          id: "principal-comment",
          label: "Representa `# principal.py`",
          pattern: "#\\s*principal\\.py",
          feedbackWhenMissing: "Muestra también el archivo `# principal.py`."
        },
        {
          id: "defines-save-note",
          label: "Define `guardar_nota(texto)`",
          pattern: "def\\s+guardar_nota\\(\\s*texto\\s*\\)\\s*:",
          feedbackWhenMissing: "Define `guardar_nota(texto)` en `utilidades.py`."
        },
        {
          id: "defines-summary",
          label: "Define `mostrar_resumen()`",
          pattern: "def\\s+mostrar_resumen\\(\\)\\s*:",
          feedbackWhenMissing: "Define `mostrar_resumen()` en `utilidades.py`."
        },
        {
          id: "imports-functions",
          label: "Importa las funciones en principal",
          pattern: "from\\s+utilidades\\s+import\\s+guardar_nota\\s*,\\s*mostrar_resumen",
          feedbackWhenMissing: "En `principal.py`, importa `guardar_nota` y `mostrar_resumen`."
        },
        {
          id: "defines-main",
          label: "Define `main()`",
          pattern: "def\\s+main\\(\\)\\s*:",
          feedbackWhenMissing: "Define un `main()` que coordine el flujo."
        },
        {
          id: "asks-note",
          label: "Pide la nota con `input()`",
          pattern: "nota\\s*=\\s*input\\(",
          feedbackWhenMissing: "Dentro de `main()`, pide la nota con `input()`."
        },
        {
          id: "calls-save",
          label: "Llama `guardar_nota(nota)`",
          pattern: "guardar_nota\\(\\s*nota\\s*\\)",
          feedbackWhenMissing: "Después del input, llama `guardar_nota(nota)`."
        },
        {
          id: "calls-summary",
          label: "Llama `mostrar_resumen()`",
          pattern: "mostrar_resumen\\(\\s*\\)",
          feedbackWhenMissing: "Termina el flujo llamando `mostrar_resumen()`."
        },
        {
          id: "runs-main",
          label: "Ejecuta `main()` al final",
          pattern: "main\\(\\s*\\)",
          feedbackWhenMissing: "Al final del ejemplo, ejecuta `main()`."
        }
      ],
      orderedPatternIds: [
        "utilidades-comment",
        "defines-save-note",
        "defines-summary",
        "principal-comment",
        "imports-functions",
        "defines-main",
        "asks-note",
        "calls-save",
        "calls-summary",
        "runs-main"
      ]
    }
  },
  {
    slug: "split-save-and-query-into-support-file",
    title: "Separa guardado y consulta en un archivo de apoyo",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "practical-multi-file-utilities",
    lessonSlug: "saving-and-consulting-from-a-support-file",
    order: 2,
    duration: "16 min",
    summary: "Representa una agenda simple donde `utilidades.py` guarda y consulta, mientras `principal.py` decide qué acción ejecutar.",
    prompt:
      "Escribe un ejemplo dividido en dos partes usando comentarios para representar archivos. En `# utilidades.py`, define `guardar_contacto(nombre)` y `consultar_contacto(nombre)`. En `# principal.py`, importa ambas funciones, pide `action` con `input('Escribe guardar o consultar: ')` y, si la acción es `guardar`, llama `guardar_contacto('Ana')`; en cualquier otro caso, llama `consultar_contacto('Ana')`.",
    responseLabel: "Tu agenda multiarchivo simple",
    responsePlaceholder:
      "# utilidades.py\n\ndef guardar_contacto(nombre):\n    print('Guardando contacto:', nombre)\n\n\ndef consultar_contacto(nombre):\n    print('Consulta:', nombre)\n\n# principal.py\nfrom utilidades import guardar_contacto, consultar_contacto\n\naction = input('Escribe guardar o consultar: ')\nif action == 'guardar':\n    guardar_contacto('Ana')\nelse:\n    consultar_contacto('Ana')",
    instructions: [
      "Representa ambos archivos con comentarios.",
      "Deja guardar y consultar en el archivo de apoyo.",
      "Haz que el principal tome la decisión del flujo."
    ],
    hints: [
      "Puedes usar un `if` simple en el principal.",
      "No hace falta un `main()` si el flujo ya se entiende claro.",
      "La separación importa más que una lógica extensa."
    ],
    starterCode:
      "# utilidades.py\n\ndef guardar_contacto(nombre):\n    print('Guardando contacto:', nombre)\n\n\ndef consultar_contacto(nombre):\n    print('Consulta:', nombre)\n\n# principal.py\nfrom utilidades import guardar_contacto, consultar_contacto\n\naction = input('Escribe guardar o consultar: ')\nif action == 'guardar':\n    guardar_contacto('Ana')\nelse:\n    consultar_contacto('Ana')",
    successCriteria: [
      "La decisión queda en el principal.",
      "Guardar y consultar viven en `utilidades.py`.",
      "La agenda simple se entiende con facilidad."
    ],
    playground: {
      title: "Prueba una agenda pequeña con dos caminos",
      guidance: "Ejecuta la versión corta en el playground y luego revisa que tu respuesta represente bien la separación entre archivos.",
      starterCode:
        "def guardar_contacto(nombre):\n    print('Guardando contacto:', nombre)\n\n\ndef consultar_contacto(nombre):\n    print('Consulta:', nombre)\n\n\naction = input('Escribe guardar o consultar: ')\nif action == 'guardar':\n    guardar_contacto('Ana')\nelse:\n    consultar_contacto('Ana')",
      emptyOutputHint: "La salida debería reflejar la acción elegida por la persona usuaria."
    },
    evaluator: {
      type: "structure_check",
      minLength: 240,
      passingScore: 7,
      requiredPatterns: [
        {
          id: "utilidades-comment",
          label: "Representa `# utilidades.py`",
          pattern: "#\\s*utilidades\\.py",
          feedbackWhenMissing: "Empieza mostrando `# utilidades.py`."
        },
        {
          id: "principal-comment",
          label: "Representa `# principal.py`",
          pattern: "#\\s*principal\\.py",
          feedbackWhenMissing: "Muestra también `# principal.py`."
        },
        {
          id: "defines-save-contact",
          label: "Define `guardar_contacto(nombre)`",
          pattern: "def\\s+guardar_contacto\\(\\s*nombre\\s*\\)\\s*:",
          feedbackWhenMissing: "Define `guardar_contacto(nombre)` en el archivo de apoyo."
        },
        {
          id: "defines-query-contact",
          label: "Define `consultar_contacto(nombre)`",
          pattern: "def\\s+consultar_contacto\\(\\s*nombre\\s*\\)\\s*:",
          feedbackWhenMissing: "Define `consultar_contacto(nombre)` en el archivo de apoyo."
        },
        {
          id: "imports-both",
          label: "Importa ambas funciones",
          pattern: "from\\s+utilidades\\s+import\\s+guardar_contacto\\s*,\\s*consultar_contacto",
          feedbackWhenMissing: "En `principal.py`, importa `guardar_contacto` y `consultar_contacto`."
        },
        {
          id: "asks-action",
          label: "Pide `action` con `input()`",
          pattern: "action\\s*=\\s*input\\(",
          feedbackWhenMissing: "En el principal, pide `action` con `input()`."
        },
        {
          id: "if-guardar",
          label: "Usa `if action == 'guardar'`",
          pattern: "if\\s+action\\s*==\\s*['\"]guardar['\"]\\s*:",
          feedbackWhenMissing: "Usa un `if` para decidir la acción `guardar`."
        },
        {
          id: "calls-save-contact",
          label: "Llama `guardar_contacto('Ana')`",
          pattern: "guardar_contacto\\(\\s*['\"]Ana['\"]\\s*\\)",
          feedbackWhenMissing: "En el camino de guardado, llama `guardar_contacto('Ana')`."
        },
        {
          id: "calls-query-contact",
          label: "Llama `consultar_contacto('Ana')`",
          pattern: "consultar_contacto\\(\\s*['\"]Ana['\"]\\s*\\)",
          feedbackWhenMissing: "En el camino alternativo, llama `consultar_contacto('Ana')`."
        }
      ],
      orderedPatternIds: [
        "utilidades-comment",
        "defines-save-contact",
        "defines-query-contact",
        "principal-comment",
        "imports-both",
        "asks-action",
        "if-guardar",
        "calls-save-contact",
        "calls-query-contact"
      ]
    }
  },
  {
    slug: "build-a-multi-file-utility-with-summary",
    title: "Construye una utilidad multiarchivo con resumen final",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "practical-multi-file-utilities",
    lessonSlug: "closing-with-a-summary-without-overloading-main",
    order: 3,
    duration: "18 min",
    summary: "Construye una utilidad donde `principal.py` coordina, `utilidades.py` guarda y resume, y el cierre hace que la herramienta se sienta más completa.",
    prompt:
      "Escribe un ejemplo dividido en dos partes usando comentarios para representar archivos. En `# utilidades.py`, define `guardar_nota(texto)` y `mostrar_resumen(texto)`; esta última debe imprimir `=== RESUMEN ===` y luego el texto recibido. En `# principal.py`, importa ambas funciones, define `main()`, pide una nota con `input('Escribe una nota: ')`, llama `guardar_nota(nota)`, luego `mostrar_resumen('Nota guardada con éxito')` y finalmente ejecuta `main()`.",
    responseLabel: "Tu utilidad multiarchivo con cierre",
    responsePlaceholder:
      "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_resumen(texto):\n    print('=== RESUMEN ===')\n    print(texto)\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_resumen\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen('Nota guardada con éxito')\n\n\nmain()",
    instructions: [
      "Muestra ambos archivos con comentarios.",
      "Usa una función de apoyo para guardar y otra para el cierre.",
      "Haz que el principal coordine el flujo completo."
    ],
    hints: [
      "El resumen debería imprimirse desde `utilidades.py`.",
      "Piensa el principal como un recorrido corto y visible.",
      "El cierre debería sentirse claro y fácil de leer."
    ],
    starterCode:
      "# utilidades.py\n\ndef guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_resumen(texto):\n    print('=== RESUMEN ===')\n    print(texto)\n\n# principal.py\nfrom utilidades import guardar_nota, mostrar_resumen\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen('Nota guardada con éxito')\n\n\nmain()",
    successCriteria: [
      "La utilidad reparte mejor responsabilidades.",
      "El principal sigue siendo corto y claro.",
      "El cierre hace que la herramienta se sienta completa."
    ],
    playground: {
      title: "Prueba una utilidad con resumen final",
      guidance: "Ejecuta la versión corta y observa cómo el resumen final mejora la sensación de herramienta terminada.",
      starterCode:
        "def guardar_nota(texto):\n    print('Guardando:', texto)\n\n\ndef mostrar_resumen(texto):\n    print('=== RESUMEN ===')\n    print(texto)\n\n\ndef main():\n    nota = input('Escribe una nota: ')\n    guardar_nota(nota)\n    mostrar_resumen('Nota guardada con éxito')\n\n\nmain()",
      emptyOutputHint: "La salida debería cerrar con un resumen claro."
    },
    evaluator: {
      type: "structure_check",
      minLength: 280,
      passingScore: 8,
      requiredPatterns: [
        {
          id: "utilidades-comment",
          label: "Representa `# utilidades.py`",
          pattern: "#\\s*utilidades\\.py",
          feedbackWhenMissing: "Empieza mostrando `# utilidades.py`."
        },
        {
          id: "principal-comment",
          label: "Representa `# principal.py`",
          pattern: "#\\s*principal\\.py",
          feedbackWhenMissing: "Muestra también `# principal.py`."
        },
        {
          id: "defines-save-note",
          label: "Define `guardar_nota(texto)`",
          pattern: "def\\s+guardar_nota\\(\\s*texto\\s*\\)\\s*:",
          feedbackWhenMissing: "Define `guardar_nota(texto)` en el archivo de apoyo."
        },
        {
          id: "defines-summary",
          label: "Define `mostrar_resumen(texto)`",
          pattern: "def\\s+mostrar_resumen\\(\\s*texto\\s*\\)\\s*:",
          feedbackWhenMissing: "Define `mostrar_resumen(texto)` en el archivo de apoyo."
        },
        {
          id: "prints-summary-header",
          label: "Imprime `=== RESUMEN ===`",
          pattern: "print\\(\\s*['\"]=== RESUMEN ===['\"]\\s*\\)",
          feedbackWhenMissing: "Dentro de `mostrar_resumen`, imprime `=== RESUMEN ===`."
        },
        {
          id: "imports-functions",
          label: "Importa ambas funciones",
          pattern: "from\\s+utilidades\\s+import\\s+guardar_nota\\s*,\\s*mostrar_resumen",
          feedbackWhenMissing: "En el principal, importa `guardar_nota` y `mostrar_resumen`."
        },
        {
          id: "defines-main",
          label: "Define `main()`",
          pattern: "def\\s+main\\(\\)\\s*:",
          feedbackWhenMissing: "Define `main()` para coordinar el flujo."
        },
        {
          id: "asks-note",
          label: "Pide la nota con `input()`",
          pattern: "nota\\s*=\\s*input\\(",
          feedbackWhenMissing: "Dentro de `main()`, pide la nota con `input()`."
        },
        {
          id: "calls-save-note",
          label: "Llama `guardar_nota(nota)`",
          pattern: "guardar_nota\\(\\s*nota\\s*\\)",
          feedbackWhenMissing: "Dentro de `main()`, llama `guardar_nota(nota)`."
        },
        {
          id: "calls-summary-success",
          label: "Llama `mostrar_resumen('Nota guardada con éxito')`",
          pattern: "mostrar_resumen\\(\\s*['\"]Nota guardada con éxito['\"]\\s*\\)",
          feedbackWhenMissing: "Cierra el flujo llamando `mostrar_resumen('Nota guardada con éxito')`."
        },
        {
          id: "runs-main",
          label: "Ejecuta `main()` al final",
          pattern: "main\\(\\s*\\)",
          feedbackWhenMissing: "Al final del ejemplo, ejecuta `main()`."
        }
      ],
      orderedPatternIds: [
        "utilidades-comment",
        "defines-save-note",
        "defines-summary",
        "prints-summary-header",
        "principal-comment",
        "imports-functions",
        "defines-main",
        "asks-note",
        "calls-save-note",
        "calls-summary-success",
        "runs-main"
      ]
    }
  }
];
