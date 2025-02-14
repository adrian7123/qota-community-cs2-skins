import type { Skin } from "~/models/skin.model"

export const useUserStore = defineStore("useUserStore", {
  state: () => ({
    skins: [] as Skin[]
  }),
  actions: {
    async fetchSkins(steamId: string) {
      const skins = await fetch(`/api/skins/${steamId}`).then((res) => res.json())
      this.skins = skins
    }
  }
})
