import type { DBSkin } from "~/models/skin.model"

export const useUserStore = defineStore("useUserStore", {
  state: () => ({
    rows: [] as DBSkin[]
  }),
  actions: {
    async fetchSkins(steamId: string) {
      const res: any = await $fetch("/api/v1/skins", {
        query: {
          steamId: steamId
        }
      })

      if (res.status === 200) {
        this.rows = res.rows
      }

      console.log(this.rows)
    }
  }
})
