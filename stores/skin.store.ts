import { WeaponType, type Skin } from "~/models/skin.model"

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
      await Promise.all([
        this.fetchSkins(),
        this.fetchAgents(),
        this.fetchMusics(),
        this.fetchKeychains()
      ])

      const skins = localStorage.getItem("@skins")
      const agents = localStorage.getItem("@agents")
      const musics = localStorage.getItem("@musics")
      const keychains = localStorage.getItem("@keychains")

      if (skins) this.skins = this.orderByRarity(JSON.parse(skins))
      if (agents) this.agents = this.orderByRarity(JSON.parse(agents))
      if (musics) this.musics = this.orderByRarity(JSON.parse(musics))
      if (keychains) this.keychains = this.orderByRarity(JSON.parse(keychains))

      this.initialized = true
    },
    orderByRarity(skins: Skin[]): Skin[] {
      const orderedSkins: Skin[] = []
      const order: any = []

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
        const api = useApi()
        const response = await api.get("/skin/skin")
        const data = response.data

        localStorage.setItem("@skins", JSON.stringify(data))

        return data as Skin[]
      } catch (error) {
        console.error(error)
      }
    },
    async fetchAgents(): Promise<Skin[] | undefined> {
      try {
        const api = useApi()
        const response = await api.get("/skin/agent")
        const data = response.data

        localStorage.setItem("@agents", JSON.stringify(data))

        return data as Skin[]
      } catch (error) {
        console.error(error)
      }
    },
    async fetchMusics(): Promise<Skin[] | undefined> {
      try {
        const api = useApi()
        const response = await api.get("/skin/music")
        const data = response.data as Skin[]

        const musics = data.map((music: Skin) => {
          music.weapon_type = WeaponType.Music

          return music
        })

        localStorage.setItem("@musics", JSON.stringify(musics))

        return musics
      } catch (error) {
        console.error(error)
      }
    },
    async fetchKeychains(): Promise<Skin[] | undefined> {
      try {
        const api = useApi()
        const response = await api.get("/skin/keychains")
        const data = response.data

        localStorage.setItem("@keychains", JSON.stringify(data))

        return data as Skin[]
      } catch (error) {
        console.error(error)
      }
    }
  }
})
