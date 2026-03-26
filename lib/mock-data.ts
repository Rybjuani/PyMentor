import { Achievement, MentorPrompt } from "@/types";

export const mentorPrompts: MentorPrompt[] = [
  {
    mode: "explain",
    label: "Explícamelo más simple",
    prompt: "Explícame esto con palabras más simples para alguien que recién está empezando y lo ve por primera vez."
  },
  {
    mode: "hint",
    label: "Dame una pista",
    prompt: "Dame una pista pequeña sin resolverme todo el ejercicio."
  },
  {
    mode: "steps",
    label: "Muéstrame paso a paso",
    prompt: "Guíame despacio, paso a paso, sin saltear detalles importantes para principiantes."
  },
  {
    mode: "debug",
    label: "Ayúdame a depurar",
    prompt: "Ayúdame a depurar esto como si recién empezara: ¿qué debería revisar primero, segundo y tercero?"
  }
];

export const achievements: Achievement[] = [
  {
    id: "first-lesson",
    title: "Primera lección completada",
    description: "Abriste el recorrido con una primera victoria real.",
    state: "earned"
  },
  {
    id: "debugger",
    title: "Arregla bugs",
    description: "Resuelve tu primer ejercicio donde corregir forma parte del aprendizaje.",
    state: "next"
  },
  {
    id: "foundations-finish",
    title: "Cierre de fundamentos",
    description: "Completa el capstone final y cierra tu primera gran etapa en Python.",
    state: "locked"
  }
];

export const communityPreview = [
  "Círculos de estudio guiados para principiantes",
  "Espacios para pedir ayuda sin perder el contexto de la lección",
  "Celebrar primeras victorias, primeros proyectos y primeros bugs resueltos"
];
