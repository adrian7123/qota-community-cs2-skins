export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
}

export const splitName = (text: string) => {
  return text.split("|")
}
