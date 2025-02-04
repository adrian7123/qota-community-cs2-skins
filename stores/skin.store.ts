import axios from "axios"
import { defineStore } from "pinia"
import type { Skin } from "~/models/skin.model"

export const useSkinStore = defineStore("useSkinStore", {
  state: () => ({
    skins: [] as Skin[],
    agents: [] as Skin[]
  }),
  actions: {
    async fetchSkins(): Promise<Skin[] | undefined> {
      try {
        const res = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json")

        this.setSkins(res.data)

        return res.data
      } catch (error) {
        console.error(error)
      }
    },
    async fetchAgents(): Promise<Skin[] | undefined> {
      try {
        const res = await axios.get("https://bymykel.github.io/CSGO-API/api/en/agents.json")

        this.setAgents(res.data)

        return res.data
      } catch (error) {
        console.error(error)
      }
    },
    initialize(): void {
      const skins = localStorage.getItem("@skins")
      const agents = localStorage.getItem("@agents")
      if (skins) {
        this.skins = JSON.parse(skins)
      }

      if (agents) {
        this.agents = JSON.parse(agents)
      }

      this.fetchSkins()
      this.fetchAgents()
    },
    setSkins(skins: Skin[]): void {
      this.skins = skins
      localStorage.setItem("@skins", JSON.stringify(skins))
    },
    setAgents(agents: Skin[]): void {
      this.agents = agents
      localStorage.setItem("@agents", JSON.stringify(agents))
    }
  }
})
