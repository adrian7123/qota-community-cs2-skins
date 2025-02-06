export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)
  // const db = useDatabase()

  // // Create users table
  // await db.sql`DROP TABLE IF EXISTS users`

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
    body: {
      message: `Você solicitou a skin com ID: ${steamId}`,
      id: steamId
    }
  }
})
