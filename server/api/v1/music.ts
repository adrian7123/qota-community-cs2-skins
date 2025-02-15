export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)

  if (!steamId) {
    return {
      status: 400,
      error: "steamId is required"
    }
  }

  if (event.method === "GET") {
    const musics = await getMusics(steamId as string)
    return {
      status: 200,
      musics
    }
  }
})

const getMusics = async (steamId: string) => {
  const db = useDatabase()

  const musics = await db.sql`SELECT * FROM wp_player_music WHERE steamId = ${steamId}`

  return musics
}
