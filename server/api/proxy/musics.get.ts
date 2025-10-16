export default defineEventHandler(async (event) => {
  try {
    const response = await fetch("https://bymykel.github.io/CSGO-API/api/en/music_kits.json")

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Erro ao buscar music kits:", error)
    return {
      error: "Erro ao buscar dados dos music kits",
      status: 500
    }
  }
})
