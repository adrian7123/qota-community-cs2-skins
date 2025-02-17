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

  if (event.method === "POST") {
    const skin = (await readBody(event)) as DBKnife
    const knives = await postKnife(steamId as string, skin)

    return {
      status: 200,
      knives
    }
  }
})

const postKnife = async (steamId: string, knife: DBKnife) => {
  const db = useDatabase()

  const { rows } =
    await db.sql`SELECT * FROM wp_player_knife WHERE steamid = ${steamId} AND weapon_team = ${knife.weapon_team}`

  if (rows?.length != 0) {
    await db.sql`DELETE FROM wp_player_knife WHERE steamid = ${steamId} AND weapon_team = ${knife.weapon_team}`
  }

  const res = await db.sql`INSERT INTO wp_player_knife (
    steamid,
    knife,
    weapon_team
  )
  VALUES (
    ${steamId},
    ${knife.knife},
    ${knife.weapon_team}
  )`

  return res
}

const getKnives = async (steamId: string): Promise<DBKnife[]> => {
  const db = useDatabase()

  const { rows } = await db.sql`SELECT * FROM wp_player_knife WHERE steamId = ${steamId}`

  return rows as DBKnife[]
}
