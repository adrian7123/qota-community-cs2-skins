import type { DBGlove } from "~/models/db.model"

export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)

  if (!steamId) {
    return {
      status: 400,
      error: "steamId is required"
    }
  }

  if (event.method === "GET") {
    const gloves = await getGloves(steamId as string)
    return {
      status: 200,
      gloves
    }
  }

  if (event.method === "POST") {
    const skin = (await readBody(event)) as DBGlove
    const knives = await postGlove(steamId as string, skin)

    return {
      status: 200,
      knives
    }
  }
})

const getGloves = async (steamId: string) => {
  const db = useDatabase()

  const { rows } = await db.sql`SELECT * FROM wp_player_gloves WHERE steamId = ${steamId}`

  return rows
}

const postGlove = async (steamId: string, glove: DBGlove) => {
  const db = useDatabase()

  const { rows } =
    await db.sql`SELECT * FROM wp_player_gloves WHERE steamid = ${steamId} AND weapon_team = ${glove.weapon_team}`

  if (rows?.length != 0) {
    await db.sql`DELETE FROM wp_player_gloves WHERE steamid = ${steamId} AND weapon_team = ${glove.weapon_team}`
  }

  const res = await db.sql`INSERT INTO wp_player_gloves (
    steamid,
    weapon_defindex,
    weapon_team
  )
  VALUES (
    ${steamId},
    ${glove.weapon_defindex},
    ${glove.weapon_team}
  )`

  return res
}
