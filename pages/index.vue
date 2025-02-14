<script lang="ts" setup>
import { Cs2Helper } from "~/shared/helpers/cs2.helper"
import { slugify } from "~/shared/helpers/helper"

const store = useSkinStore()
const auth = useAuthStore()
const global = useGlobalStore()
const userStore = useUserStore()

const team = ref(false)

const helper = new Cs2Helper()

const pistols = ref<any>([])
const mid = ref<any>([])
const high = ref<any>([])
const agent = ref<any>()

const knives = helper.knives()
const glove = helper.gloves()[0]
const music = helper.musics()[0]

const knife = helper.knives()[0]

onMounted(async () => {
  team.value = localStorage.getItem("@team") === "counter-terrorists"

  global.show()

  userStore.fetchSkins(auth.steamId!)

  await store.initialize()

  pistols.value = helper.pistols(team.value ? "counter-terrorists" : "terrorists")
  mid.value = helper.mid(team.value ? "counter-terrorists" : "terrorists")
  high.value = helper.rifles(team.value ? "counter-terrorists" : "terrorists")
  agent.value = helper.agents(team.value ? "counter-terrorists" : "terrorists")[0]
  global.hide()
})

watch(team, async (newVal) => {
  pistols.value = []
  mid.value = []
  high.value = []

  localStorage.setItem("@team", newVal ? "counter-terrorists" : "terrorists")

  pistols.value = helper.pistols(newVal ? "counter-terrorists" : "terrorists")
  mid.value = helper.mid(newVal ? "counter-terrorists" : "terrorists")
  high.value = helper.rifles(newVal ? "counter-terrorists" : "terrorists")
  agent.value = helper.agents(newVal ? "counter-terrorists" : "terrorists")[0]
})

const skinKnives = computed(() => {
  return store.skins?.filter((k) => k.category?.name === "Knives" && !k.id.includes("vanilla"))
})
const skinGloves = computed(() => {
  return store.skins?.filter((k) => k.category?.name === "Gloves" && !k.id.includes("vanilla"))
})
const skinAgents = computed(() => {
  return store.agents?.filter(
    (k) => k.team?.id === (team.value ? "counter-terrorists" : "terrorists")
  )
})
const skinMusics = computed(() => {
  return store.musics.filter((a) => !a.name.toLowerCase().includes("stattrak"))
})
</script>

<template>
  <div v-if="store.initialized" class="container mx-auto p-4">
    <div class="card w-full h-full rounded-sm p-4">
      <p class="text-4xl font-bold mb-2">
        <label class="toggle w-32">
          <input type="checkbox" v-model="team" />
          <img aria-label="enabled" src="/logo_T.png" />
          <img aria-label="disabled" src="/logo_CT.png" />
        </label>
        {{ team ? "Counter Terrorist" : "Terrorists" }} Loadout
      </p>

      <div class="card-body grid grid-cols-1 lg:grid-cols-5 items-start">
        <HomeInventoryColumn :items="pistols" title="Pistols" />
        <HomeInventoryColumn :items="mid" title="Mid Tier" />
        <HomeInventoryColumn :items="high" title="High Tier" />

        <div class="col-span-2 grid grid-cols-1 lg:grid-cols-2">
          <div class="mr-2">
            <p class="text-2xl font-bold">Knife</p>
            <HomeInventoryCard :weapon="knife" :items="skinKnives" :selected="knife" />
          </div>
          <div>
            <p class="text-2xl font-bold">Gloves</p>
            <HomeInventoryCard :weapon="glove" :items="skinGloves" :selected="glove" />
          </div>
          <div class="mr-2">
            <p class="text-2xl font-bold">Agents</p>
            <HomeInventoryCard :weapon="agent" agent :items="skinAgents" :selected="agent" />
          </div>
          <div>
            <p class="text-2xl font-bold">Music</p>
            <HomeInventoryCard :weapon="music" :items="skinMusics" :selected="music">
              <template #music v-if="music.rarity">
                <a
                  class="text-blue-400 underline text-2xl"
                  target="_blank"
                  :href="`https://wiki.cs.money/music-kits/${slugify(music.name)}`"
                  >Escutar musica</a
                >
              </template>
            </HomeInventoryCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
