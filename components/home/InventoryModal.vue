<script lang="ts" setup>
import type { Cs2Weapon, Skin } from "~/models/skin.model"

const store = useSkinStore()

const props = defineProps({
  weapon: Object,
  skins: Object,
  selected: Object as () => Cs2Weapon | Skin
})

const search = ref("")
const filteredSkins = ref(props.skins)

watch(search, (value) => {
  filteredSkins.value = props.skins?.filter((skin: any) =>
    skin.name.toLowerCase().includes(value.toLowerCase())
  )
})
</script>
<template>
  <div class="modal-box cursor-auto max-w-6xl min-h-[700px]">
    <div class="flex h-[700px]">
      <div class="flex-1 flex flex-col justify-between items-center">
        <div v-if="selected">
          <div
            class="card flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-6"
          >
            <img :src="selected?.image" class="h-40 w-40" />
            <div class="w-full flex justify-center font-semibold text-gray-300">
              {{ selected?.name }}
            </div>
          </div>
          <slot name="music" />
        </div>
      </div>
      <div class="flex-1">
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Pesquisar
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Icon icon="tabler:search" />
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pesquisar skins"
              required
              v-model="search"
            />
          </div>
        </form>

        <div class="mt-4 p-5 grid grid-cols-2 gap-4 max-h-[700px] scroll-smooth overflow-scroll">
          <div
            v-for="item in filteredSkins"
            :key="item.name"
            :style="item.rarity ? `border-bottom-color: ${item.rarity.color}` : ''"
            class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 bg-[#d32ce6] p-2 mb-2 border-b-6"
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
</template>
