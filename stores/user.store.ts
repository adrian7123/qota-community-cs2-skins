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
      const api = useApi()
      const res: any = await api.get("/skin/agent", {
        params: {
          steamId: steamId
        }
      })

      if (res.data.status === 200) {
        this.dbAgents = res.data.agents
        return res.data.agents
      }
    },
    async fetchGloves(steamId: string): Promise<DBKnife[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/glove", {
        params: {
          steamId: steamId
        }
      })

      if (res.data.status === 200) {
        this.dbGloves = res.data.gloves
        return res.data.gloves
      }
    },
    async fetchKnives(steamId: string): Promise<DBKnife[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/knife", {
        params: {
          steamId: steamId
        }
      })

      if (res.data.status === 200) {
        this.dbKnives = res.data.knives
        return res.data.knives
      }
    },
    async fetchMusics(steamId: string): Promise<DBSkin[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/music", {
        params: {
          steamId: steamId
        }
      })

      if (res.data.status === 200) {
        this.dbMusics = res.data.musics
        return res.data.musics
      }
    },
    async fetchSkins(steamId: string): Promise<DBSkin[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/skin", {
        params: {
          steamId: steamId
        }
      })

      if (res.data.status === 200) {
        this.dbSkins = res.data.skins
        return res.data.skins
      }
    },
    async selectAgent(steamId: string, agent: Skin, team: number) {
      const body: any = {}

      if (team === 3) {
        body.agent_ct = agent.model_player?.replace("characters/models/", "").replace(".vmdl", "")
      } else {
        body.agent_t = agent.model_player?.replace("characters/models/", "").replace(".vmdl", "")
      }

      const api = useApi()
      await api.post("/skin/agent", body, {
        params: {
          steamId: steamId
        }
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

      const api = useApi()
      await api.post("/skin/glove", body, {
        params: {
          steamId: steamId
        }
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

      const api = useApi()
      await api.post("/skin/music", body, {
        params: {
          steamId: steamId
        }
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

      const api = useApi()
      await api.post("/skin/knife", body, {
        params: {
          steamId: steamId
        }
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

      const api = useApi()
      await api.post("/skin/skin", body, {
        params: {
          steamId: steamId
        }
      })

      await this.fetchAll(steamId)
    }
  }
})
