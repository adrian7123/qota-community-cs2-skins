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
    async fetchAll(): Promise<any[]> {
      return Promise.all([
        this.fetchSkins(),
        this.fetchMusics(),
        this.fetchKnives(),
        this.fetchGloves(),
        this.fetchAgents()
      ])
    },
    async fetchAgents(): Promise<DBAgent[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/agent")

      this.dbAgents = res.data
      return res.data
    },
    async fetchGloves(): Promise<DBKnife[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/glove")

      this.dbGloves = res.data
      return res.data
    },
    async fetchKnives(): Promise<DBKnife[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/knife")

      this.dbKnives = res.data
      return res.data
    },
    async fetchMusics(): Promise<DBSkin[] | undefined> {
      const api = useApi()
      const res: any = await api.get("/skin/music")

      this.dbMusics = res.data
      return res.data
    },
    async fetchSkins(): Promise<DBSkin[] | undefined> {
      const api = useApi()
      const res: any = await api.get("http://localhost:3004/skin/skin")

      this.dbSkins = res.data
      return res.data
    },
    async selectAgent(steamId: string, agent: Skin, team: number) {
      const body: any = {
        steamid: steamId
      }

      if (team === 3) {
        body.agent_ct = agent.model_player?.replace("characters/models/", "").replace(".vmdl", "")
      } else {
        body.agent_t = agent.model_player?.replace("characters/models/", "").replace(".vmdl", "")
      }

      const api = useApi()
      await api.post("/skin/agent", body)

      await this.fetchAll()
    },
    async selectGlove(steamId: string, glove: Skin, team: number) {
      const body: DBGlove = {
        steamid: steamId,
        weapon_defindex: glove.weapon!.weapon_id,
        weapon_team: team,
        type: WeaponType.Glove
      }

      const api = useApi()
      await api.post("/skin/glove", body)

      await this.fetchAll()
    },
    async selectMusic(steamId: string, music: Skin, team: number) {
      const body: DBMusic = {
        steamid: steamId,
        music_id: Number.parseInt(music.id.replace("music_kit-", "")),
        weapon_team: team,
        type: WeaponType.Music
      }

      const api = useApi()
      await api.post("/skin/music", body)

      await this.fetchAll()
    },
    async selectKnife(steamId: string, knife: Skin, team: number) {
      const body: DBKnife = {
        steamid: steamId,
        knife: knife.weapon!.id,
        weapon_team: team,
        type: WeaponType.Knife
      }

      const api = useApi()
      await api.post("/skin/knife", body)

      await this.fetchAll()
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
      await api.post("/skin/skin", body)

      await this.fetchAll()
    }
  }
})
