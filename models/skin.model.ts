export enum WeaponType {
  Weapon,
  Music,
  Knife,
  Glove,
  Agent,
  Pin
}

export type Skin = {
  weapon_type: WeaponType

  market_hash_name?: string
  exclusive?: boolean

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
