import type { DBMusic } from "~/models/db.model"
import { executeQuery } from "~/shared/utils/database"

export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)

  if (!steamId) {
    return {
      status: 400,
      error: "steamId is required"
    }
  }

  try {
    if (event.method === "GET") {
      const musics = await getMusics(steamId as string)
      return {
        status: 200,
        musics
      }
    }

    if (event.method === "POST") {
      const skin = (await readBody(event)) as DBMusic
      const knives = await postMusic(steamId as string, skin)

      return {
        status: 200,
        knives
      }
    }
  } catch (error: any) {
    console.error("Erro na API musics:", error)
    throw createError({
      statusCode: 500,
      statusMessage: "Erro interno do servidor",
      data: error.message
    })
  }
})

const getMusics = async (steamId: string) => {
  return executeQuery(async (db) => {
    const { rows } = await db.sql`SELECT * FROM wp_player_music WHERE steamId = ${steamId}`
    return rows
  })
}

const postMusic = async (steamId: string, music: DBMusic) => {
  return executeQuery(async (db) => {
    const { rows } =
      await db.sql`SELECT * FROM wp_player_music WHERE steamid = ${steamId} AND weapon_team = ${music.weapon_team}`

    if (rows?.length != 0) {
      await db.sql`DELETE FROM wp_player_music WHERE steamid = ${steamId} AND weapon_team = ${music.weapon_team}`
    }

    const res = await db.sql`INSERT INTO wp_player_music (
      steamid,
      music_id,
      weapon_team
    )
    VALUES (
      ${steamId},
      ${music.music_id},
      ${music.weapon_team}
    )`

    return res
  })
}
