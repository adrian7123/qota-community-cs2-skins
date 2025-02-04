<script lang="ts" setup>
import { Cs2Helper } from "~/shared/helpers/cs2.helper"

const store = useSkinStore()

onMounted(() => {
  store.initialize()
})

const helper = new Cs2Helper()

const pistols = helper.pistols("t")
const mid = helper.mid("t")
const high = helper.rifles("t")
const knives = helper.knives()
const gloves = helper.gloves()

const openModal = (key: string) => {
  ;(document.getElementById(key) as any)?.showModal()
}

const skinKnives = computed(() => {
  return store.skins?.filter((k) => k.category?.name === "Knives")
})
const skinGloves = computed(() => {
  return store.skins?.filter((k) => k.category?.name === "Gloves")
})
const skinAgents = computed(() => {
  return store.agents?.filter((k) => k.team?.id === "terrorists")
})
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="card bg-terrorist w-full h-full rounded-sm p-4">
      <p class="text-4xl font-bold mb-2">
        Terrorist Loadout

        <label class="toggle w-32">
          <input type="checkbox" />
          <img aria-label="enabled" src="/logo_CT.png" />
          <img aria-label="disable" src="/logo_T.png" />
        </label>
      </p>

      <div class="card-body grid grid-cols-1 lg:grid-cols-5 items-start">
        <HomeInventoryColumn :items="pistols" title="Pistols" />
        <HomeInventoryColumn :items="mid" title="Mid Tier" />
        <HomeInventoryColumn :items="high" title="High Tier" />
        <div class="flex flex-col col-span-2 ml-4">
          <div>
            <p class="text-2xl font-bold">Knife</p>
            <div
              class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
              @click="openModal('modal-knives')"
            >
              <img :src="knives[0].image" class="h-[200px] w-64" />
              <div class="w-full flex justify-center font-semibold text-gray-300">
                {{ knives[0].name }}
              </div>
            </div>
            <dialog id="modal-knives" class="modal">
              <div class="modal-box max-w-6xl min-h-[700px]">
                <div class="flex h-[700px]">
                  <div class="flex-1"></div>
                  <div class="flex-1">
                    <div class="mt-4 grid grid-cols-2 gap-4 max-h-[700px]">
                      <div
                        v-for="item in skinKnives"
                        :key="item.name"
                        class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
                      >
                        <img :src="item.image" class="h-40 w-40" />
                        <div class="w-full flex justify-center font-semibold text-gray-300">
                          {{ item.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div>
            <p class="text-2xl font-bold">Gloves</p>
            <div
              class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
              @click="openModal('modal-gloves')"
            >
              <img :src="gloves[0].image" class="h-[200px] w-64" />
              <div class="w-full flex justify-center font-semibold text-gray-300">
                {{ gloves[0].name }}
              </div>
            </div>
            <dialog id="modal-gloves" class="modal">
              <div class="modal-box max-w-6xl min-h-[700px]">
                <div class="flex h-[700px]">
                  <div class="flex-1"></div>
                  <div class="flex-1">
                    <div class="mt-4 grid grid-cols-2 gap-4 max-h-[700px]">
                      <div
                        v-for="item in skinGloves"
                        :key="item.name"
                        class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
                      >
                        <img :src="item.image" class="h-40 w-40" />
                        <div class="w-full flex justify-center font-semibold text-gray-300">
                          {{ item.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div>
            <p class="text-2xl font-bold">Agents</p>
            <div
              class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
              @click="openModal('modal-agents')"
            >
              <!-- <img :src="skinAgents[0].image" class="h-[200px] w-64" />
              <div class="w-full flex justify-center font-semibold text-gray-300">
                {{ skinAgents[0].name }}
              </div> -->
            </div>
            <dialog id="modal-agents" class="modal">
              <div class="modal-box max-w-6xl min-h-[700px]">
                <div class="flex h-[700px]">
                  <div class="flex-1"></div>
                  <div class="flex-1">
                    <div class="mt-4 grid grid-cols-2 gap-4 max-h-[700px]">
                      <div
                        v-for="item in skinAgents"
                        :key="item.name"
                        class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-red-500 border-b-6"
                      >
                        <img :src="item.image" class="h-40 w-40" />
                        <div class="w-full flex justify-center font-semibold text-gray-300">
                          {{ item.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
