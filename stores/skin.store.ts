import { WeaponType, type Skin } from "~/models/skin.model"

// Importar os arquivos JSON locais
import agentsData from "~/assets/skins/agents.json"
import keychainsData from "~/assets/skins/keychains.json"
import musicData from "~/assets/skins/music_kits.json"
import skinsData from "~/assets/skins/skins.json"

export const useSkinStore = defineStore("useSkinStore", {
  state: () => ({
    skins: [] as Skin[],
    agents: [] as Skin[],
    musics: [] as Skin[],
    keychains: [] as Skin[],
    initialized: false,
    team: false
  }),
  getters: {
    rarities() {
      return ["ancient", "legendary", "mythical", "rare", "uncommon"]
    }
  },
  actions: {
    setTeam(team: boolean) {
      this.team = team
    },
    async initialize() {
      // Carregar e processar skins
      const processedSkins = (skinsData as any[]).map((skin: any) => ({
        ...skin,
        weapon_type: WeaponType.Weapon,
        type: skin.category?.name || "Weapon",
        team: skin.team || { id: "any", name: "Any" }
      }))
      this.skins = this.orderByRarity(processedSkins as Skin[])

      // Carregar e processar agentes
      const processedAgents = (agentsData as any[]).map((agent: any) => ({
        ...agent,
        weapon_type: WeaponType.Agent,
        type: "Agent"
      }))

      this.agents = this.orderByRarity(processedAgents as Skin[])

      // Processar música kits
      const processedMusics = (musicData as any[]).map((music: any) => ({
        ...music,
        weapon_type: WeaponType.Music,
        type: "Music Kit",
        team: { id: "any", name: "Any" }
      }))
      this.musics = this.orderByRarity(processedMusics as Skin[])

      // Carregar e processar keychains
      const processedKeychains = (keychainsData as any[]).map((keychain: any) => ({
        ...keychain,
        weapon_type: WeaponType.Pin,
        type: "Keychain",
        team: { id: "any", name: "Any" }
      }))
      this.keychains = this.orderByRarity(processedKeychains as Skin[])

      this.initialized = true
    },
    orderByRarity(skins: Skin[]): Skin[] {
      const orderedSkins: Skin[] = []
      const order: any = []

      skins.forEach((skin) => {
        const rarityIndex = this.rarities.findIndex((rarity) => skin?.rarity?.id.includes(rarity))

        if (!order[rarityIndex]?.length) order[rarityIndex] = []

        order[rarityIndex].push(skin)
      })

      order.forEach((orderArr: Skin[]) => {
        if (orderArr?.length) orderedSkins.push(...orderArr)
      })

      return orderedSkins
    }
  }
})
