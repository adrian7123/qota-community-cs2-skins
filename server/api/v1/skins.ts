import type { DBSkin } from "~/models/db.model"
import { executeQuery } from "~/shared/utils/database"

export default defineEventHandler(async (event) => {
  const { steamId } = getQuery(event)

  if (!steamId) {
    return {
      status: 400,
      error: "steamId não informado"
    }
  }

  try {
    if (event.method === "POST") {
      const skin = (await readBody(event)) as DBSkin
      const skins = await postSkins(steamId as string, skin)

      return {
        status: 200,
        skins
      }
    }

    if (event.method === "GET") {
      const skins = await getSkins(steamId as string)

      return {
        status: 200,
        skins
      }
    }
  } catch (error: any) {
    console.error("Erro na API skins:", error)
    throw createError({
      statusCode: 500,
      statusMessage: "Erro interno do servidor",
      data: error.message
    })
  }
})

const getSkins = async (steamId?: string) => {
  return executeQuery(async (db) => {
    const { rows } = await db.sql`SELECT * FROM wp_player_skins WHERE steamid = ${steamId}`
    return rows
  })
}

const postSkins = async (steamId: string, skin: DBSkin) => {
  return executeQuery(async (db) => {
    const { rows } =
      await db.sql`SELECT * FROM wp_player_skins WHERE steamid = ${steamId} AND weapon_defindex = ${skin.weapon_defindex} AND weapon_team = ${skin.weapon_team}`

    if (rows?.length != 0) {
      await db.sql`DELETE FROM wp_player_skins WHERE steamid = ${steamId} AND weapon_defindex = ${skin.weapon_defindex} AND weapon_team = ${skin.weapon_team}`
    }

    const res = await db.sql`INSERT INTO wp_player_skins (
      steamid,
      weapon_defindex,
      weapon_keychain,
      weapon_nametag,
      weapon_paint_id,
      weapon_seed,
      weapon_stattrak,
      weapon_stattrak_count,
      weapon_sticker_0,
      weapon_sticker_1,
      weapon_sticker_2,
      weapon_sticker_3,
      weapon_sticker_4,
      weapon_team,
      weapon_wear
    )
    VALUES (
      ${steamId},
      ${skin.weapon_defindex},
      ${skin.weapon_keychain},
      ${skin.weapon_nametag},
      ${skin.weapon_paint_id},
      ${skin.weapon_seed},
      ${skin.weapon_stattrak},
      ${skin.weapon_stattrak_count},
      ${skin.weapon_sticker_0},
      ${skin.weapon_sticker_1},
      ${skin.weapon_sticker_2},
      ${skin.weapon_sticker_3},
      ${skin.weapon_sticker_4},
      ${skin.weapon_team},
      ${skin.weapon_wear}
    )`

    return res
  })
}
