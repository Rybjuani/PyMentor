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
  }
];
