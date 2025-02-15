export type DBSkin = {
  steamid: string
  weapon_defindex: number
  weapon_paint_id: number
  weapon_team: number
  weapon_keychain?: string
  weapon_nametag?: string
  weapon_seed?: number
  weapon_stattrak?: number
  weapon_stattrak_count?: number
  weapon_sticker_0?: string
  weapon_sticker_1?: string
  weapon_sticker_2?: string
  weapon_sticker_3?: string
  weapon_sticker_4?: string
  weapon_wear?: number
}

export type DBMusic = {
  steamid: string
  weapon_team: number
  music_id: number
}

export type DBKnife = {
  steamid: string
  weapon_team: number
  knife: string
}

export type DBGloves = {
  steamid: string
  weapon_team: number
  weapon_defindex: number
}

export type DBPin = {
  steamid: string
  weapon_team: number
  id: number
}

export type DBAgent = {
  steamid: string
  agent_ct: string
  agent_t: string
}
