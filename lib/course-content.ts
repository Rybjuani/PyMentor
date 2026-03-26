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
  }
];
