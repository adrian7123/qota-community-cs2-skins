export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)
  const db = useDatabase()

  // Create users table
  const res = await db.sql`SELECT * from wp_player_skins`

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
    res
  }
})
