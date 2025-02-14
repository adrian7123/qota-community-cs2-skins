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

export type Skin = {
  id: string
  name: string
  type: string
  unique?: string
  description?: string
  weapon?: {
    id: string
    weapon_id: number
    name: string
  }
  category?: {
    id: string
    name: string
  }
  pattern?: {
    id: string
    name: string
  }
  min_float?: number
  max_float?: number
  rarity?: {
    id: string
    name: string
    color: string
  }
  stattrak?: boolean
  souvenir?: boolean
  paint_index?: string
  wears?: Array<{
    id: string
    name: string
  }>
  collections?: Array<{
    id: string
    name: string
    image: string
  }>
  crates?: Array<{
    id: string
    name: string
    image: string
  }>
  team: {
    id: string
    name: string
  }
  legacy_model?: boolean
  image: string
}
