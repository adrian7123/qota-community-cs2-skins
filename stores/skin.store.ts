import axios from "axios"
import type { Skin } from "~/models/skin.model"

export const useSkinStore = defineStore("useSkinStore", {
  state: () => ({
    skins: [] as Skin[],
    agents: [] as Skin[],
    musics: [] as Skin[],
    keychains: [] as Skin[]
  }),
  actions: {
    initialize(): void {
      const skins = localStorage.getItem("@skins")
      const agents = localStorage.getItem("@agents")
      const musics = localStorage.getItem("@musics")
      const keychains = localStorage.getItem("@keychains")

      if (skins) this.skins = JSON.parse(skins)
      if (agents) this.agents = JSON.parse(agents)
      if (musics) this.musics = JSON.parse(musics)
      if (keychains) this.keychains = JSON.parse(keychains)

      Promise.all([
        this.fetchSkins(),
        this.fetchAgents(),
        this.fetchMusics(),
        this.fetchKeychains()
      ])
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
