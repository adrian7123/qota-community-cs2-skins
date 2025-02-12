<script lang="ts" setup>
import { Cs2Helper } from "~/shared/helpers/cs2.helper"

const store = useSkinStore()
const auth = useAuthStore()
const global = useGlobalStore()

const team = ref(false)

const helper = new Cs2Helper()

const pistols = ref<any>([])
const mid = ref<any>([])
const high = ref<any>([])
const agent = ref<any>([])

const knives = helper.knives()
const gloves = helper.gloves()
const music = helper.musics()[0]

const knife = onMounted(async () => {
  global.show()
  const res = await $fetch("/api/v1/skins", {
    query: {
      steamId: auth.steamId
    }
  })

  store.initialize()

  team.value = localStorage.getItem("@team") === "ct"

  pistols.value = helper.pistols(team.value ? "ct" : "t")
  mid.value = helper.mid(team.value ? "ct" : "t")
  high.value = helper.rifles(team.value ? "ct" : "t")
  agent.value = helper.agents(team.value ? "ct" : "t")[0]
  global.hide()
})

watch(team, async (newVal) => {
  pistols.value = []
  mid.value = []
  high.value = []

  localStorage.setItem("@team", newVal ? "ct" : "t")

  pistols.value = helper.pistols(newVal ? "ct" : "t")
  mid.value = helper.mid(newVal ? "ct" : "t")
  high.value = helper.rifles(newVal ? "ct" : "t")
  agent.value = helper.agents(newVal ? "ct" : "t")[0]
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
  <div class="container mx-auto p-4">
    <div
      :class="team ? 'bg-counter-terrorist' : 'bg-terrorist'"
      class="card w-full h-full rounded-sm p-4"
    >
      <p class="text-4xl font-bold mb-2">
        <label class="toggle w-32">
          <input type="checkbox" v-model="team" />
          <img aria-label="enabled" src="/logo_T.png" />
          <img aria-label="disabled" src="/logo_CT.png" />
        </label>
        {{ team ? "Counter Terrorist" : "Terrorist" }} Loadout
      </p>

      <div class="card-body grid grid-cols-1 lg:grid-cols-5 items-start">
        <HomeInventoryColumn :items="pistols" title="Pistols" />
        <HomeInventoryColumn :items="mid" title="Mid Tier" />
        <HomeInventoryColumn :items="high" title="High Tier" />

        <div class="col-span-2 grid grid-cols-1 lg:grid-cols-2">
          <div class="mr-2">
            <p class="text-2xl font-bold">Knife</p>
            <HomeInventoryCard :item="knives[0]" :items="skinKnives" />
          </div>
          <div>
            <p class="text-2xl font-bold">Gloves</p>
            <HomeInventoryCard :item="gloves[0]" :items="skinGloves" />
          </div>
          <div class="mr-2">
            <p class="text-2xl font-bold">Agents</p>
            <HomeInventoryCard :item="agent" agent :items="skinAgents" />
          </div>
          <div>
            <p class="text-2xl font-bold">Music</p>
            <HomeInventoryCard :item="music" :items="skinMusics">
              <template #music>
                <a
                  class="text-blue-400 underline text-2xl"
                  target="_blank"
                  href="https://stash.clash.gg/music"
                  >Escutar musicas</a
                >
              </template>
            </HomeInventoryCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
