import type { DBKnife, DBMusic, DBSkin } from "~/models/db.model"
import type { Skin } from "~/models/skin.model"

export const useUserStore = defineStore("useUserStore", {
  state: () => ({
    dbSkins: [] as DBSkin[],
    dbMusics: [] as DBMusic[],
    dbKnives: [] as DBKnife[]
  }),
  actions: {
    async fetchAll(steamId: string): Promise<any[]> {
      return Promise.all([
        this.fetchSkins(steamId),
        this.fetchMusics(steamId),
        this.fetchKnives(steamId)
      ])
    },
    async fetchKnives(steamId: string): Promise<DBKnife[] | undefined> {
      const res: any = await $fetch("/api/v1/knives", {
        query: {
          steamId: steamId
        }
      })

      if (res.status === 200) {
        this.dbKnives = res.knives
        return res.knives
      }
    },
    async fetchMusics(steamId: string): Promise<DBSkin[] | undefined> {
      const res: any = await $fetch("/api/v1/musics", {
        query: {
          steamId: steamId
        }
      })

      if (res.status === 200) {
        this.dbMusics = res.musics
        return res.musics
      }
    },
    async fetchSkins(steamId: string): Promise<DBSkin[] | undefined> {
      const res: any = await $fetch("/api/v1/skins", {
        query: {
          steamId: steamId
        }
      })

      if (res.status === 200) {
        this.dbSkins = res.skins
        return res.skins
      }
    },
    async selectSkin(steamId: string, skin: Skin, team: number) {
      const body: DBSkin = {
        steamid: steamId,
        weapon_defindex: skin.weapon!.weapon_id,
        weapon_paint_id: Number.parseInt(skin.paint_index ?? "0"),
        weapon_team: team,
        weapon_keychain: "0;0;0;0;0;0;0",
        weapon_sticker_0: "0;0;0;0;0;0;0",
        weapon_sticker_1: "0;0;0;0;0;0;0",
        weapon_sticker_2: "0;0;0;0;0;0;0",
        weapon_sticker_3: "0;0;0;0;0;0;0",
        weapon_sticker_4: "0;0;0;0;0;0;0",
        weapon_seed: 0,
        weapon_wear: 0,
        weapon_stattrak: 0,
        weapon_stattrak_count: 0
      }

      await $fetch("/api/v1/skins", {
        method: "POST",
        query: {
          steamId: steamId
        },
        body
      })

      await this.fetchSkins(steamId)
    }
  }
})
