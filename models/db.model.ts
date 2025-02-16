import type { WeaponType } from "./skin.model"

export type DBSkin = {
  type?: WeaponType.Weapon
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
  type: WeaponType.Music
  steamid: string
  weapon_team: number
  music_id: number
}

export type DBKnife = {
  type: WeaponType.Knife
  steamid: string
  weapon_team: number
  knife: string
}

export type DBGloves = {
  type: WeaponType.Glove
  steamid: string
  weapon_team: number
  weapon_defindex: number
}

export type DBPin = {
  type: WeaponType.Pin
  steamid: string
  weapon_team: number
  id: number
}

export type DBAgent = {
  type: WeaponType.Agent
  steamid: string
  agent_ct: string
  agent_t: string
}
