export default defineEventHandler(async (event) => {
  try {
    const response = await fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json")

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Erro ao buscar skins:", error)
    return {
      error: "Erro ao buscar dados das skins",
      status: 500
    }
  }
})
