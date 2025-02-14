import axios from "axios"
import type { Skin } from "~/models/skin.model"

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
      const skins = localStorage.getItem("@skins")
      const agents = localStorage.getItem("@agents")
      const musics = localStorage.getItem("@musics")
      const keychains = localStorage.getItem("@keychains")

      if (skins) this.skins = this.orderByRarity(JSON.parse(skins))
      if (agents) this.agents = this.orderByRarity(JSON.parse(agents))
      if (musics) this.musics = this.orderByRarity(JSON.parse(musics))
      if (keychains) this.keychains = this.orderByRarity(JSON.parse(keychains))

      await Promise.all([
        this.fetchSkins(),
        this.fetchAgents(),
        this.fetchMusics(),
        this.fetchKeychains()
      ])

      this.initialized = true
    },
    orderByRarity(skins: Skin[]): Skin[] {
      let orderedSkins: Skin[] = []
      let order: any = []

      skins.forEach((skin) => {
        const rarityIndex = this.rarities.findIndex((rarity) => skin?.rarity?.id.includes(rarity))

        if (!order[rarityIndex]?.length) order[rarityIndex] = []

        order[rarityIndex].push(skin)
      })

      order.forEach((orderArr: Skin[]) => {
        if (orderArr?.length) orderedSkins.push(...orderArr)
      })

      return orderedSkins
    },
    async fetchSkins(): Promise<Skin[] | undefined> {
      try {
        const res = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json")

        localStorage.setItem("@skins", JSON.stringify(res.data))

        return res.data
      } catch (error) {
        console.error(error)
      }
    },
    async fetchAgents(): Promise<Skin[] | undefined> {
      try {
        const res = await axios.get("https://bymykel.github.io/CSGO-API/api/en/agents.json")

        localStorage.setItem("@agents", JSON.stringify(res.data))

        return res.data
      } catch (error) {
        console.error(error)
      }
    },
    async fetchMusics(): Promise<Skin[] | undefined> {
      try {
        const res = await axios.get("https://bymykel.github.io/CSGO-API/api/en/music_kits.json")

        localStorage.setItem("@musics", JSON.stringify(res.data))

        return res.data
      } catch (error) {
        console.error(error)
      }
    },
    async fetchKeychains(): Promise<Skin[] | undefined> {
      try {
        const res = await axios.get("https://bymykel.github.io/CSGO-API/api/en/keychains.json")

        localStorage.setItem("@keychains", JSON.stringify(res.data))

        return res.data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
