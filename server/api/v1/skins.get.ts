export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)
  const db = useDatabase()

  const { rows } = await db.sql`SELECT * FROM wp_player_skins WHERE steamid = ${String(steamId)}`

  if (!steamId) {
    return {
      status: 400,
      body: {
        message: "steamId não informado"
      }
    }
  }

  return {
    status: 200,
    rows
  }
})
