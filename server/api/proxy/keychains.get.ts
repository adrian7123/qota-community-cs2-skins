export default defineEventHandler(async (event) => {
  try {
    const response = await fetch("https://bymykel.github.io/CSGO-API/api/en/keychains.json")

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Erro ao buscar keychains:", error)
    return {
      error: "Erro ao buscar dados das keychains",
      status: 500
    }
  }
})
