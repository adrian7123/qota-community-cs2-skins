export namespace Skins {
  export type WeaponSkin = {
    id: string
    name: string
    type: string
    unique?: string
    description?: string
    weapon_type?: string
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
}

export type Skin = {
  id: string
  name: string
  type: string
  unique?: string
  description?: string
  weapon_type?: string
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
