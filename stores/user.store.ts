import type { DBAgent, DBGlove, DBKnife, DBMusic, DBSkin } from "~/models/db.model"
import { WeaponType, type Skin } from "~/models/skin.model"

export const useUserStore = defineStore("useUserStore", {
  state: () => ({
    dbSkins: [] as DBSkin[],
    dbMusics: [] as DBMusic[],
    dbKnives: [] as DBKnife[],
    dbGloves: [] as DBGlove[],
    dbAgents: [] as DBAgent[]
  }),
  actions: {
    async fetchAll(steamId: string): Promise<any[]> {
      return Promise.all([
        this.fetchSkins(steamId),
        this.fetchMusics(steamId),
        this.fetchKnives(steamId),
        this.fetchGloves(steamId),
        this.fetchAgents(steamId)
      ])
    },
    async fetchAgents(steamId: string): Promise<DBAgent[] | undefined> {
      const res: any = await $fetch("/api/v1/agents", {
        query: {
          steamId: steamId
        }
      })

      if (res.status === 200) {
        this.dbAgents = res.agents
        return res.agents
      }
    },
    async fetchGloves(steamId: string): Promise<DBKnife[] | undefined> {
      const res: any = await $fetch("/api/v1/gloves", {
        query: {
          steamId: steamId
        }
      })

      if (res.status === 200) {
        this.dbGloves = res.gloves
        return res.gloves
      }
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
    async selectAgent(steamId: string, agent: Skin, team: number) {
      const body: any = {}

      if (team === 3) {
        body.agent_ct = agent.model_player?.replace("characters/models/", "").replace(".vmdl", "")
      } else {
        body.agent_t = agent.model_player?.replace("characters/models/", "").replace(".vmdl", "")
      }

      await $fetch("/api/v1/agents", {
        method: "POST",
        query: {
          steamId: steamId
        },
        body
      })

      await this.fetchAll(steamId)
    },
    async selectGlove(steamId: string, glove: Skin, team: number) {
      const body: DBGlove = {
        steamid: steamId,
        weapon_defindex: glove.weapon!.weapon_id,
        weapon_team: team,
        type: WeaponType.Glove
      }

      await $fetch("/api/v1/gloves", {
        method: "POST",
        query: {
          steamId: steamId
        },
        body
      })

      await this.fetchAll(steamId)
    },
    async selectMusic(steamId: string, music: Skin, team: number) {
      const body: DBMusic = {
        steamid: steamId,
        music_id: Number.parseInt(music.id.replace("music_kit-", "")),
        weapon_team: team,
        type: WeaponType.Music
      }

      await $fetch("/api/v1/musics", {
        method: "POST",
        query: {
          steamId: steamId
        },
        body
      })

      await this.fetchAll(steamId)
    },
    async selectKnife(steamId: string, knife: Skin, team: number) {
      const body: DBKnife = {
        steamid: steamId,
        knife: knife.weapon!.id,
        weapon_team: team,
        type: WeaponType.Knife
      }

      await $fetch("/api/v1/knives", {
        method: "POST",
        query: {
          steamId: steamId
        },
        body
      })

      await this.fetchAll(steamId)
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

      await this.fetchAll(steamId)
    }
  }
})
