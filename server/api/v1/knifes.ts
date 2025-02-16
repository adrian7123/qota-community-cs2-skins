import type { DBKnife } from "~/models/db.model"

export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)

  if (!steamId) {
    return {
      status: 400,
      error: "steamId is required"
    }
  }

  if (event.method === "GET") {
    const knives = await getKnives(steamId as string)
    return {
      status: 200,
      knives
    }
  }
})

const setknife = async (steamId: string, knife: DBKnife) => {}

const getKnives = async (steamId: string): Promise<DBKnife> => {
  const db = useDatabase()

  const knives = await db.sql`SELECT * FROM wp_player_knife WHERE steamId = ${steamId}`

  return knives as DBKnife
}
