import axios from "axios"
import type { Skin } from "~/models/skin.model"

export const useSkinStore = defineStore("useSkinStore", {
  state: () => ({
    skins: [] as Skin[],
    agents: [] as Skin[],
    musics: [] as Skin[],
    keychains: [] as Skin[]
  }),
  getters: {
    priority(): Record<string, number> {
      return {
        ancient: 1,
        legendary: 2,
        mythical: 3,
        rare: 4,
        uncommon: 5
      }
    }
  },
  actions: {
    initialize(): void {
      const skins = localStorage.getItem("@skins")
      const agents = localStorage.getItem("@agents")
      const musics = localStorage.getItem("@musics")
      const keychains = localStorage.getItem("@keychains")

      if (skins) this.skins = this.orderByRarity(JSON.parse(skins))
      if (agents) this.agents = this.orderByRarity(JSON.parse(agents))
      if (musics) this.musics = this.orderByRarity(JSON.parse(musics))
      if (keychains) this.keychains = this.orderByRarity(JSON.parse(keychains))

      Promise.all([
        this.fetchSkins(),
        this.fetchAgents(),
        this.fetchMusics(),
        this.fetchKeychains()
      ])
    },
    orderByRarity(skins: Skin[]): Skin[] {
      return skins.sort((a, b) => {
        const aRarity = a.rarity.id
        const bRarity = b.rarity.id

        const aPriority = Object.keys(this.priority).find((key) => aRarity.includes(key)) ?? ""
        const bPriority = Object.keys(this.priority).find((key) => bRarity.includes(key)) ?? ""

        return this.priority[aPriority] - this.priority[bPriority]
      })
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
