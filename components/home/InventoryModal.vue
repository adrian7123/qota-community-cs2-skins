<script lang="ts" setup>
import type { Cs2Weapon, Skin } from "~/models/skin.model"

const store = useSkinStore()

const props = defineProps({
  weapon: Object,
  skins: Object,
  selected: Object as () => Cs2Weapon | Skin
})
</script>
<template>
  <div class="modal-box max-w-6xl min-h-[700px]">
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
        </div>
        <slot name="music" />
      </div>
      <div class="flex-1">
        <div class="mt-4 grid grid-cols-2 gap-4 max-h-[700px] scroll-smooth overflow-scroll">
          <div
            v-for="item in skins"
            :key="item.name"
            :style="item.rarity ? `border-bottom-color: ${item.rarity.color}` : ''"
            class="card translation-card cursor-pointer flex flex-col items-center w-full border border-gray-400 p-2 mb-2 border-b-6"
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
<style>
.asd {
}
</style>
